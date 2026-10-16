import { getProducts } from "@/lib/products";
import { SITE_URL, CATEGORIAS } from "@/lib/config";

export default async function sitemap() {
  const prods = await getProducts();
  return [
    { url: SITE_URL },
    ...CATEGORIAS.map((c) => ({ url: `${SITE_URL}/${c.slug}` })),
    ...prods.map((p) => ({ url: `${SITE_URL}/produto/${p.slug}` })),
  ];
}
