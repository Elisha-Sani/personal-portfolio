// components/VideoPlayer.tsx
"use client";

export default function VideoPlayer() {
  return (
    <div className="relative w-full max-w-7xl mx-auto aspect-video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/rh4kWkowe8M?si=05QKeRmMd0OQmD-K"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
