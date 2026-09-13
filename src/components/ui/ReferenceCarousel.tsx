"use client";

import Image from "next/image";

type ReferenceImage = { src: string; alt: string };

export default function ReferenceCarousel({ images, label }: { images: ReferenceImage[]; label: string }) {
  const slides = [...images, ...images];
  return <div className="reference-carousel" aria-label={label}>
    <div className="reference-track">
      {slides.map((image, index) => <figure className="reference-slide" key={`${image.src}-${index}`} aria-hidden={index >= images.length}>
        <Image src={image.src} alt={index >= images.length ? "" : image.alt} fill loading="eager" sizes="(min-width: 1024px) 24vw, 72vw" className="object-cover" />
      </figure>)}
    </div>
  </div>;
}
