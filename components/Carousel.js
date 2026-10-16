"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Carousel({ banners }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % banners.length), 5000);
    return () => clearInterval(t);
  }, [banners.length]);
  return (
    <section className="relative mx-auto max-w-6xl overflow-hidden sm:mt-4 sm:rounded-2xl">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${i * 100}%)` }}>
        {banners.map((b, k) => (
          <div key={k} className="relative min-w-full bg-gradient-to-br from-vinho/60 to-black" style={{ aspectRatio: "16/9", maxHeight: 460 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.img} alt={b.titulo} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            <div className="relative flex h-full flex-col items-start justify-center gap-3 px-6 sm:px-14">
              <h2 className="max-w-md text-3xl sm:text-5xl">{b.titulo}</h2>
              <p className="max-w-md text-sm text-white/80 sm:text-lg">{b.texto}</p>
              <Link href={b.link} className="btn">Ver agora</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {banners.map((_, k) => (
          <button key={k} onClick={() => setI(k)} aria-label={`Banner ${k + 1}`}
            className={`h-2 w-2 rounded-full ${k === i ? "bg-white" : "bg-white/40"}`} />
        ))}
      </div>
    </section>
  );
}
