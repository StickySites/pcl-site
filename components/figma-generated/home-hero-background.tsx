"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/PCL_Banner.mp4";
const POSTER_SRC = "/photos/Roofing_HalfandHalf_1178x718.png";

/**
 * Full-bleed hero media: muted looping video, with static fallback when reduced motion is requested.
 */
export function HomeHeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useStatic, setUseStatic] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setUseStatic(mq.matches);
      if (mq.matches) {
        videoRef.current?.pause();
      } else {
        void videoRef.current?.play().catch(() => {
          /* autoplay blocked; poster / first frame still visible */
        });
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (useStatic) {
    return (
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0,0,0,0.85), rgba(0,0,0,0.65)), url('${POSTER_SRC}')`
        }}
        aria-hidden
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={POSTER_SRC}
      aria-hidden
    >
      <source src={VIDEO_SRC} type="video/mp4" />
    </video>
  );
}
