import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';
import Brands from '@/components/Brands';
import Launches from '@/components/Launches';
import CategoryCircles from '@/components/CategoryCircles';
import { getProducts } from '@/lib/products';
export const revalidate = 300;
export default async function Home() {
  const produtos = await getProducts();
  const nomes = ['iPhone 14 128GB','iPhone 16 128GB'];
  const promos = nomes.map(nome=>produtos.find(p=>p.categoria==='iphone' && p.nome===nome));
  return <>
    <Carousel/>
    <section className="mx-auto mt-12 max-w-6xl px-4">
      <h2 className="mb-6 text-3xl sm:text-4xl">Promoção da semana</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-5">{[0,1].map(i=>promos[i]?<ProductCard key={promos[i].slug} p={promos[i]} limitedOffer/>:<div key={i} className="flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-cinza">Em breve, uma nova promoção.</div>)}</div>
    </section>
    <Launches/>
    <Brands/>
    <CategoryCircles/>
  </>;
}
