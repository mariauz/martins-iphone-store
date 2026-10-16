'use client';
import Link from 'next/link';
import { useState } from 'react';
import fotoPerfumes from '@/perfumes-arabes.webp';
const categories = [
  {slug:'iphone',nome:'iPhone',foto:'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/56eb6068-3ec1-5733-b8cb-9bf0cd0f09a4/f0d0296c-b859-5f08-b09d-ecbd34406eaf.jpg',alt:'iPhone — imagem ilustrativa'},
  {slug:'android',nome:'Android',foto:'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3cdeb203-054f-550f-af1c-6921f2db2e8e/1d56eac1-7d61-5ee8-97cb-0720f98a9241.jpg',alt:'Xiaomi 17T — imagem ilustrativa'},
  {slug:'perfumes',nome:'Perfumes árabes',foto:fotoPerfumes.src,alt:'Perfumes árabes — mesma imagem do banner'},
  {slug:'acessorios',nome:'Acessórios',foto:'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/3d586b65-0ba0-5a17-a4d2-eee6e21ddb6e/b55822f5-9841-589f-bc30-89de4feba69b.jpg',alt:'AirPods brancos com estojo — imagem ilustrativa'}
];
function Category({c}) {
  const [failed,setFailed] = useState(false);
  return <Link href={`/${c.slug}`} className="group flex min-w-0 flex-col items-center gap-4 text-center">
    <span className="relative block aspect-square w-full max-w-52 overflow-hidden rounded-full border-2 border-vinho bg-black shadow-lg transition duration-300 group-hover:scale-105 group-hover:border-white group-focus-visible:ring-2 group-focus-visible:ring-white">
      {failed?<span className="absolute inset-0 flex items-center justify-center bg-vinho/30 px-3 text-sm text-white">{c.nome}</span>:<img src={c.foto} alt={c.alt} loading="lazy" onError={()=>setFailed(true)} className="absolute inset-0 h-full w-full object-cover" />}
    </span>
    <h3 className="text-lg sm:text-xl">{c.nome}</h3>
  </Link>;
}
export default function CategoryCircles() {
  return <section className="mx-auto mt-16 max-w-6xl px-4" aria-labelledby="categories-title">
    <h2 id="categories-title" className="mb-8 text-3xl sm:text-4xl">Categorias</h2>
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-8">{categories.map(c=><Category key={c.slug} c={c}/>)}</div>
  </section>;
}
