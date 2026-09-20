"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "@phosphor-icons/react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const VIDEO_SRC = "/videos/wintex-factory.mp4";
const POSTER_SRC = "/media/hero/video-poster.jpg";

export default function FactoryVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <section className="bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          tone="ivory"
          title="Inside Wintex"
          body="A closer look at the machinery, craftsmanship and people behind our knitwear production."
        />
        <Reveal className="mt-12">
          <div className="relative aspect-video w-full overflow-hidden bg-navy">
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              controls={playing}
              playsInline
              muted
              preload="metadata"
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
              className="h-full w-full object-cover"
            >
              Your browser does not support embedded video.
            </video>

            {!playing && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play factory video"
                className="group absolute inset-0 flex items-center justify-center bg-navy/25 transition-colors hover:bg-navy/35 focus-visible:outline-2 focus-visible:outline-gold"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-ivory/70 text-ivory transition-transform duration-300 group-hover:scale-105 group-hover:border-gold group-hover:text-gold">
                  <Play size={26} weight="fill" className="ml-1" />
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
