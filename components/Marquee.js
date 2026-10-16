import { FAIXA } from "@/lib/config";

export default function Marquee() {
  const items = [...FAIXA, ...FAIXA];
  return (
    <div className="overflow-hidden bg-vinho py-2 text-xs sm:text-sm">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="mx-6">{t} <span className="ml-6 opacity-60">•</span></span>
        ))}
      </div>
    </div>
  );
}
