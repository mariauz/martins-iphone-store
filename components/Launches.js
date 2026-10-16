'use client';
import { useState } from 'react';
import { CONSULTORAS, RESPONSAVEL_IPHONE } from '@/lib/config';
import { linkWhatsApp } from '@/lib/format';
const fotoLinha = 'https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/b60a8b79-223b-5814-a38d-7272e08b4423/f0d0296c-b859-5f08-b09d-ecbd34406eaf.jpg';
const modelos = ['iPhone 18 Pro','iPhone 18 Pro Max'];
const capacidades = ['256GB','512GB','1TB','2TB'];
const cores = ['Preto','Prateado','Glacial','Bordô'];
function Card({modelo}) {
  const [capacidade,setCapacidade] = useState('256GB');
  const [cor,setCor] = useState('Preto');
  const [falhou,setFalhou] = useState(false);
  const nome = RESPONSAVEL_IPHONE;
  const msg = `Olá, ${nome}! Tenho interesse no ${modelo} ${capacidade}, cor ${cor}, que vi na seção Lançamentos do site. Pode me informar o preço e a disponibilidade?`;
  return <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
    <div className="aspect-[4/3] bg-white/5"><img src={falhou?'/produtos/placeholder.svg':fotoLinha} onError={()=>setFalhou(true)} alt="Imagem ilustrativa da linha iPhone 18 Pro em várias cores" loading="lazy" className="h-full w-full object-contain p-3" /></div>
    <div className="space-y-4 p-5">
      <h3 className="text-2xl">{modelo}</h3>
      <div className="grid grid-cols-2 gap-3">
        <label className="text-xs text-cinza">Armazenamento<select value={capacidade} onChange={e=>setCapacidade(e.target.value)} className="mt-1 w-full rounded-lg border border-white/20 bg-black p-2 text-sm text-white">{capacidades.map(x=><option key={x}>{x}</option>)}</select></label>
        <label className="text-xs text-cinza">Cor<select value={cor} onChange={e=>setCor(e.target.value)} className="mt-1 w-full rounded-lg border border-white/20 bg-black p-2 text-sm text-white">{cores.map(x=><option key={x}>{x}</option>)}</select></label>
      </div>
      <p className="text-xs text-cinza">Imagem ilustrativa da linha Pro, compartilhada entre os dois cards; não representa o tamanho exato de cada modelo. A imagem não muda com a seleção. Configurações e disponibilidade sob consulta.</p>
      <a href={linkWhatsApp(CONSULTORAS[nome],msg)} target="_blank" rel="noopener noreferrer" className="btn w-full">Consulte aqui</a>
    </div>
  </article>;
}
export default function Launches() {
  const outros = linkWhatsApp(CONSULTORAS[RESPONSAVEL_IPHONE],'Olá! Gostaria de conhecer outras opções da linha iPhone 18 e consultar valores e disponibilidade. Vim pelo site da Martins iPhone Store.');
  return <section className="mx-auto mt-14 max-w-6xl px-4" aria-labelledby="launches-title">
    <h2 id="launches-title" className="mb-2 text-3xl sm:text-4xl">Lançamentos</h2>
    <p className="mb-6 text-sm text-cinza">Conheça a linha do iPhone 18 e consulte os valores e a disponibilidade com os nossos consultores.</p>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {modelos.map(m=><Card key={m} modelo={m}/>)}
      <article className="flex flex-col justify-center rounded-2xl border border-vinho bg-gradient-to-br from-vinho/30 to-black p-6">
        <h3 className="text-2xl">Ver outros modelos da linha iPhone 18</h3>
        <p className="mb-6 mt-3 text-sm leading-relaxed text-cinza">Converse com nossos consultores sobre as opções disponíveis, cores e armazenamento.</p>
        <a href={outros} target="_blank" rel="noopener noreferrer" className="btn">Consulte aqui</a>
      </article>
    </div>
  </section>;
}
