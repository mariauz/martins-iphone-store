import Link from 'next/link';
import { brl } from '@/lib/format';
import { canShowPrice, isFeaturedIphone, conditionLabel } from '@/lib/product-policy';
import ProductPhoto from './ProductPhoto';
export default function ProductCard({ p, limitedOffer = false }) {
  const visible = canShowPrice(p);
  const temPreco = visible && p.preco > 0;
  const iphone = p.categoria==='iphone';
  const perfume = p.categoria==='perfumes';
  return <Link href={`/produto/${p.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-vinho">
    <div className="relative aspect-square bg-white/5">
      <ProductPhoto src={p.fotos[0]} nome={p.nome} className="h-full w-full object-contain p-4" />
      {p.promo && temPreco && <span className="absolute left-2 top-2 rounded-full bg-vinho px-3 py-1 text-xs">Promoção</span>}
      {perfume && <span className="absolute right-2 top-2 rounded-full border border-emerald-500/40 bg-black/80 px-2 py-1 text-[10px] text-emerald-300">100% Original</span>}
    </div>
    <div className="flex flex-1 flex-col gap-1 p-4">
      <h3 className="text-base sm:text-lg">{p.nome}</h3>
      {iphone && <span className="text-xs text-cinza">{conditionLabel(p)}</span>}
      {perfume && <span className="text-xs text-cinza">{p.subcategoria}</span>}
      {temPreco?<>
        {p.promo && !limitedOffer && !iphone && <span className="text-xs text-cinza line-through">{brl(p.precoOriginal)}</span>}
        <span className="text-lg font-medium">{brl(p.preco)}</span><span className="text-xs text-cinza">à vista</span>
        {(limitedOffer || isFeaturedIphone(p)) && <span className="mt-2 text-xs font-medium text-white">Por tempo limitado</span>}
      </>:<span className="mt-2 text-sm text-white">Consulte o valor</span>}
      {iphone && p.fotos[0]==='/produtos/placeholder.svg' && <span className="text-[10px] text-cinza">Imagem ilustrativa. Consulte cores na descrição.</span>}
    </div>
  </Link>;
}
