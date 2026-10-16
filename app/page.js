import Link from "next/link";
import Carousel from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import { BANNERS, CATEGORIAS } from "@/lib/config";
import { getProducts } from "@/lib/products";

export const revalidate = 300;

export default async function Home() {
  const promos = (await getProducts()).filter((p) => p.promo).slice(0, 8);
  return (
    <>
      <Carousel banners={BANNERS} />
      <section className="mx-auto mt-12 max-w-6xl px-4">
        <h2 className="mb-6 text-3xl sm:text-4xl">Promoções da semana</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {promos.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <h2 className="mb-6 text-3xl sm:text-4xl">Categorias</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {CATEGORIAS.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="rounded-2xl border border-white/10 p-6 transition hover:border-vinho hover:bg-vinho/20">
              <h3 className="text-xl">{c.nome}</h3>
              <p className="mt-1 text-sm text-cinza">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
