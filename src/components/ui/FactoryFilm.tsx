"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Play } from "@phosphor-icons/react";
import styles from "./FactoryFilm.module.css";

// The Mux player only downloads after the visitor presses play, keeping the home page light.
const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), { ssr: false });

type FactoryFilmProps = { playbackId: string; title: string; posterTime: number; duration: string };
export default function FactoryFilm({ playbackId, title, posterTime, duration }: FactoryFilmProps) {
  const [playing, setPlaying] = useState(false);
  const poster = `https://image.mux.com/${playbackId}/thumbnail.webp?time=${posterTime}`;
  return <div className={styles.frame}>
    {playing
      ? <MuxPlayer className={styles.player} playbackId={playbackId} streamType="on-demand" autoPlay="any" poster={poster} accentColor="#c6a25b" title={title} metadata={{ video_title: title }}/>
      : <button type="button" className={styles.cover} onClick={() => setPlaying(true)} aria-label={`Play film: ${title} (${duration})`}>
          <Image src={poster} alt="" fill sizes="(min-width: 1408px) 1312px, calc(100vw - 48px)" className={styles.poster}/>
          <span className={styles.play} aria-hidden="true"><Play size={28} weight="fill"/></span>
          <span className={styles.label} aria-hidden="true">Watch the film <span>{duration}</span></span>
        </button>}
  </div>;
}
