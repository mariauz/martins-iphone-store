import { notFound } from 'next/navigation';
import Gallery from '@/components/Gallery';
import Installments from '@/components/Installments';
import BuyBox from '@/components/BuyBox';
import IphoneHighlights from '@/components/IphoneHighlights';
import { getProducts } from '@/lib/products';
import { getIphoneSpecs } from '@/lib/iphone-specs';
import { brl } from '@/lib/format';
import { canShowPrice, isFeaturedIphone, conditionLabel } from '@/lib/product-policy';
export const revalidate = 300;
const achar = async slug => (await getProducts()).find(p=>p.slug===slug);
export async function generateMetadata({params}) {
  const p = await achar(params.slug);
  if(!p) return {};
  const s = p.categoria==='iphone' ? getIphoneSpecs(p.nome) : null;
  const description = s ? `${p.nome}: ${s.tela}, ${s.hz}, ${s.camera}. Consulte a Martins iPhone Store em Taubaté.` : p.descricao.slice(0,155);
  return {title:p.nome,description,openGraph:{title:p.nome,description,images:[p.fotos[0]]}};
}
export default async function Produto({params}) {
  const p = await achar(params.slug);
  if(!p) notFound();
  const visible = canShowPrice(p);
  const iphone = p.categoria==='iphone';
  return <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
    <Gallery fotos={p.fotos} nome={p.nome}/>
    <div className="space-y-5">
      <h1 className="text-3xl sm:text-4xl">{p.nome}</h1>
      {iphone && <div className="flex flex-wrap gap-2 text-xs"><span className="rounded-full border border-white/20 px-3 py-1">{conditionLabel(p)}</span><span className="rounded-full border border-vinho bg-vinho/30 px-3 py-1">Pronta entrega • consulte a cor</span></div>}
      {visible?<div>
        {p.promo && !iphone && <span className="block text-sm text-cinza line-through">{brl(p.precoOriginal)}</span>}
        <span className="text-3xl font-medium">{brl(p.preco)}</span><span className="block text-sm text-cinza">à vista</span>
        {isFeaturedIphone(p) && <p className="mt-2 text-sm">Por tempo limitado</p>}
      </div>:<p className="text-xl">Consulte o valor e a disponibilidade pelo WhatsApp.</p>}
      {iphone?<IphoneHighlights produto={p}/>:<p className="leading-relaxed text-white/80">{p.descricao}</p>}
      {visible && <Installments valor={p.preco}/>}
      <BuyBox produto={p}/>
    </div>
  </div>;
}
