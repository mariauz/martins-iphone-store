import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import Installments from "@/components/Installments";
import BuyBox from "@/components/BuyBox";
import { getProducts } from "@/lib/products";
import { brl } from "@/lib/format";

export const revalidate = 300;
const achar = async (slug) => (await getProducts()).find((p) => p.slug === slug);

export async function generateMetadata({ params }) {
  const p = await achar(params.slug);
  if (!p) return {};
  return { title: p.nome, description: p.descricao.slice(0, 155), openGraph: { title: p.nome, description: p.descricao.slice(0, 155), images: [p.fotos[0]] } };
}

export default async function Produto({ params }) {
  const p = await achar(params.slug);
  if (!p) notFound();
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-2">
      <Gallery fotos={p.fotos} nome={p.nome} />
      <div className="space-y-5">
        <h1 className="text-3xl sm:text-4xl">{p.nome}</h1>
        <div>
          {p.promo && <span className="block text-sm text-cinza line-through">{brl(p.precoOriginal)}</span>}
          <span className="text-3xl font-medium">{brl(p.preco)}</span>
          <span className="block text-sm text-cinza">à vista</span>
        </div>
        <p className="leading-relaxed text-white/80">{p.descricao}</p>
        <Installments valor={p.preco} />
        <BuyBox produto={p} />
      </div>
    </div>
  );
}
