import Link from "next/link";
import { brl, parcelas } from "@/lib/format";

export default function ProductCard({ p }) {
  const maxP = parcelas(p.preco).at(-1);
  return (
    <Link href={`/produto/${p.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-vinho">
      <div className="relative aspect-square bg-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.fotos[0]} alt={p.nome} loading="lazy" className="h-full w-full object-contain p-4 transition group-hover:scale-105" />
        {p.promo && <span className="absolute left-2 top-2 rounded-full bg-vinho px-3 py-1 text-xs">Promoção</span>}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="text-base sm:text-lg">{p.nome}</h3>
        {p.promo && <span className="text-xs text-cinza line-through">{brl(p.precoOriginal)}</span>}
        <span className="text-lg font-medium">{brl(p.preco)}</span>
        <span className="text-xs text-cinza">ou {maxP.n}x de {brl(maxP.valorParcela)} no cartão</span>
      </div>
    </Link>
  );
}
