'use client';
import { useState } from 'react';
import { CONSULTORAS, RESPONSAVEL_IPHONE } from '@/lib/config';
import { linkWhatsApp } from '@/lib/format';
const modelos = [
  {nome:'iPhone 18 Pro',foto:'/api/banner-picture?kind=launch-pro'},
  {nome:'iPhone 18 Pro Max',foto:'/api/banner-picture?kind=launch-max'}
];
const capacidades = ['256GB','512GB','1TB','2TB'];
const cores = ['Preto','Prateado','Glacial','Bordô'];
function Card({modelo}) {
  const [capacidade,setCapacidade] = useState('256GB');
  const [cor,setCor] = useState('Preto');
  const nome = RESPONSAVEL_IPHONE;
  const msg = `Olá, ${nome}! Tenho interesse no ${modelo.nome} ${capacidade}, cor ${cor}, que vi na seção Lançamentos do site. Pode me informar o preço e a disponibilidade?`;
  return <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
    <div className="aspect-[4/3] bg-white/5"><img src={modelo.foto} alt={`${modelo.nome} — imagem ilustrativa do fabricante`} loading="lazy" className="h-full w-full object-contain p-5" /></div>
    <div className="space-y-4 p-5">
      <h3 className="text-2xl">{modelo.nome}</h3>
      <div className="grid grid-cols-2 gap-3">
        <label className="text-xs text-cinza">Armazenamento<select value={capacidade} onChange={e=>setCapacidade(e.target.value)} className="mt-1 w-full rounded-lg border border-white/20 bg-black p-2 text-sm text-white">{capacidades.map(x=><option key={x}>{x}</option>)}</select></label>
        <label className="text-xs text-cinza">Cor<select value={cor} onChange={e=>setCor(e.target.value)} className="mt-1 w-full rounded-lg border border-white/20 bg-black p-2 text-sm text-white">{cores.map(x=><option key={x}>{x}</option>)}</select></label>
      </div>
      <p className="text-xs text-cinza">Imagem ilustrativa; a foto não muda com a cor selecionada. Cores, configurações, preço e disponibilidade sob consulta.</p>
      <a href={linkWhatsApp(CONSULTORAS[nome],msg)} target="_blank" rel="noopener noreferrer" className="btn w-full">Consulte aqui</a>
    </div>
  </article>;
}
export default function Launches() {
  return <section className="mx-auto mt-14 max-w-6xl px-4" aria-labelledby="launches-title">
    <h2 id="launches-title" className="mb-2 text-3xl sm:text-4xl">Lançamentos</h2>
    <p className="mb-6 text-sm text-cinza">Conheça a linha iPhone 18 Pro. Consulte valores e disponibilidade com Maria Eduarda.</p>
    <div className="grid gap-5 sm:grid-cols-2">{modelos.map(m=><Card key={m.nome} modelo={m}/>)}</div>
  </section>;
}
