import Catalog from "./Catalog";
import { getProducts, byCategory } from "@/lib/products";
import { CATEGORIAS } from "@/lib/config";

export async function categoryMetadata(slug) {
  const c = CATEGORIAS.find((x) => x.slug === slug);
  return { title: c.nome, description: `${c.nome} na Martins iPhone Store, em Taubaté-SP. ${c.desc}.`, openGraph: { title: c.nome } };
}

export default async function CategoryPage({ slug, modo }) {
  const c = CATEGORIAS.find((x) => x.slug === slug);
  const lista = byCategory(await getProducts(), c.chave);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl sm:text-5xl">{c.nome}</h1>
      <p className="mb-8 mt-1 text-cinza">{c.desc}</p>
      <Catalog products={lista} modo={modo} />
    </div>
  );
}
