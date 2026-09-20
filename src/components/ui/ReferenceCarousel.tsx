"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import styles from "./ReferenceCarousel.module.css";
import { ArrowLeft, ArrowRight, Pause, Play } from "@phosphor-icons/react";

type ReferenceImage = { src: string; alt: string };
const motionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotion(change: () => void) {
  const preference = window.matchMedia(motionQuery);
  preference.addEventListener("change", change);
  return () => preference.removeEventListener("change", change);
}

export default function ReferenceCarousel({ images, label }: { images: ReferenceImage[]; label: string }) {
  const viewport = useRef<HTMLDivElement>(null);
  const galleryId = useId();
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeToMotion, () => window.matchMedia(motionQuery).matches, () => true);

  const advance = useCallback((direction: number) => {
    const element = viewport.current;
    const slide = element?.querySelector("li");
    if (!element || !slide) return;
    const gap = parseFloat(getComputedStyle(slide.parentElement!).gap) || 0;
    const step = slide.getBoundingClientRect().width + gap;
    const end = element.scrollWidth - element.clientWidth;
    const atEnd = direction > 0 && element.scrollLeft >= end - 2;
    const atStart = direction < 0 && element.scrollLeft <= 2;
    element.scrollTo({
      left: atEnd ? 0 : atStart ? end : element.scrollLeft + direction * step,
      behavior: reducedMotion || atEnd || atStart ? "instant" : "smooth",
    });
  }, [reducedMotion]);

  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion || !visible || images.length < 2) return;
    const element = viewport.current;
    if (!element) return;
    const first = element.querySelector<HTMLElement>("li");
    const repeated = element.querySelector<HTMLElement>('[data-repeat-start="true"]');
    if (!first || !repeated) return;
    let cycle = repeated.offsetLeft - first.offsetLeft;
    const resize = new ResizeObserver(() => { cycle = repeated.offsetLeft - first.offsetLeft; });
    resize.observe(element);
    let position = element.scrollLeft;
    let previous = 0;
    let frame = 0;
    const tick = (time: number) => {
      const elapsed = previous ? Math.min(time - previous, 64) : 0;
      previous = time;
      if (!document.hidden && cycle > 0) {
        position = (position + elapsed * 0.036) % cycle;
        element.scrollLeft = position;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); };
  }, [paused, hovered, focused, reducedMotion, visible, images.length]);

  if (!images.length) return null;

  return <div className={styles.gallery} role="region" aria-label={label}>
    <div className={styles.toolbar}>
      <p className={styles.note}>{images.length} garment references <span>· Pause to inspect, swipe to explore</span></p>
      <div className={styles.controls}>
        {!reducedMotion && images.length > 1 && <button type="button" className={styles.playControl} aria-controls={galleryId} onClick={() => setPaused(!paused)}>
          {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
          {paused ? "Resume" : "Pause"}
        </button>}
        <button type="button" className={styles.arrow} aria-label="Previous garment references" aria-controls={galleryId} disabled={images.length < 2} onClick={() => { setPaused(true); advance(-1); }}>
          <ArrowLeft size={20} aria-hidden="true" />
        </button>
        <button type="button" className={styles.arrow} aria-label="Next garment references" aria-controls={galleryId} disabled={images.length < 2} onClick={() => { setPaused(true); advance(1); }}>
          <ArrowRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
    <div ref={viewport} id={galleryId} className={styles.viewport} tabIndex={0} role="group" aria-label="Scrollable garment references" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onPointerDown={() => setPaused(true)} onKeyDown={() => setPaused(true)}>
      <ul className={styles.track}>
        {(reducedMotion ? images : [...images, ...images, ...images]).map((image, index) => <li className={styles.slide} key={`${image.src}-${index}`} aria-hidden={index >= images.length ? true : undefined} data-repeat-start={index === images.length ? "true" : undefined}>
          <figure className={styles.figure}>
            <Image src={image.src} alt={index >= images.length ? "" : image.alt} fill sizes="(min-width: 1024px) 24vw, 72vw" className={styles.image} />
            <span className={styles.number} aria-hidden="true">{String(index % images.length + 1).padStart(2, "0")}</span>
          </figure>
        </li>)}
      </ul>
    </div>
  </div>;
}
