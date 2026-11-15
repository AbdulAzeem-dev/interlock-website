"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Play } from "@phosphor-icons/react";
import styles from "./FactoryFilm.module.css";

// The Mux player only downloads after the visitor presses play, keeping the home page light.
const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

type FactoryFilmProps = { playbackId: string; title: string; posterTime: number; duration: string };
export default function FactoryFilm({ playbackId, title, posterTime, duration }: FactoryFilmProps) {
  const [playing, setPlaying] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  // On phones, turn fullscreen playback to landscape where the browser allows it (Android). iOS rotates its own fullscreen player.
  useEffect(() => {
    if (!playing) return;
    type LockableOrientation = ScreenOrientation & { lock?: (orientation: "landscape") => Promise<void> };
    const orientation = screen.orientation as LockableOrientation | undefined;
    const onChange = () => {
      if (!orientation?.lock || !window.matchMedia("(pointer: coarse)").matches) return;
      const element = document.fullscreenElement;
      if (element && frame.current?.contains(element)) orientation.lock("landscape").catch(() => {});
      else if (!element) orientation.unlock?.();
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, [playing]);
  const poster = `https://image.mux.com/${playbackId}/thumbnail.webp?time=${posterTime}`;
  return <div ref={frame} className={styles.frame}>
    {playing
      ? <MuxPlayer className={styles.player} playbackId={playbackId} streamType="on-demand" autoPlay="any" poster={poster} accentColor="#c6a25b" title={title} metadata={{ video_title: title }}/>
      : <button type="button" className={styles.cover} onClick={() => setPlaying(true)} aria-label={`Play film: ${title} (${duration})`}>
          <Image src={poster} alt="" fill sizes="(min-width: 1408px) 1312px, calc(100vw - 48px)" className={styles.poster}/>
          <span className={styles.play} aria-hidden="true"><Play size={28} weight="fill"/></span>
          <span className={styles.label} aria-hidden="true">Watch the film <span>{duration}</span></span>
        </button>}
  </div>;
}
