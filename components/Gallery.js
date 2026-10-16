"use client";
import { useState } from "react";

export default function Gallery({ fotos, nome }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="aspect-square rounded-2xl bg-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={fotos[i]} alt={nome} className="h-full w-full object-contain p-6" />
      </div>
      {fotos.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {fotos.map((f, k) => (
            <button key={k} onClick={() => setI(k)} className={`h-16 w-16 shrink-0 rounded-lg border bg-white/5 ${k === i ? "border-vinho" : "border-white/10"}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={f} alt="" className="h-full w-full object-contain p-1" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
