'use client';
import { useState } from 'react';
import { CONSULTORAS, LEVE_JUNTO, RESPONSAVEL_IPHONE } from '@/lib/config';
import { brl, linkWhatsApp } from '@/lib/format';
import { Whats } from './Icons';
export default function BuyBox({produto}) {
  const ehIphone = produto.categoria === 'iphone';
  const [extras,setExtras] = useState([]);
  const nome = RESPONSAVEL_IPHONE;
  const numero = CONSULTORAS[nome];
  const itens = LEVE_JUNTO.filter(x=>extras.includes(x.id));
  const toggle = id => setExtras(e=>e.includes(id)?e.filter(x=>x!==id):[...e,id]);
  let msg = `Olá, ${nome}! Tenho interesse no ${produto.nome}, que vi no site.`;
  if(itens.length) msg += ` Quero levar junto: ${itens.map(x=>x.nome).join(' e ')}.`;
  const avaliar = linkWhatsApp(numero,`Olá, ${nome}! Quero avaliar meu iPhone como entrada para o ${produto.nome}, que vi no site.`);
  return <div className="space-y-4">
    {ehIphone && <div className="rounded-xl border border-white/10 p-4">
      <h3 className="mb-3 text-lg">Leve junto</h3>
      <div className="space-y-3">{LEVE_JUNTO.map(x=><label key={x.id} className="flex cursor-pointer items-center gap-3">
        <input type="checkbox" checked={extras.includes(x.id)} onChange={()=>toggle(x.id)} className="h-5 w-5 accent-[#7A1F26]" />
        <img src={x.foto} alt={x.nome} className="h-14 w-14 rounded-lg bg-white/5 object-contain" />
        <span className="flex-1 text-sm">{x.nome}<br/><span className="text-cinza">{brl(x.preco)}</span></span>
        <span className="text-xs text-cinza">Pedir junto</span>
      </label>)}</div>
      {itens.length>0 && <p className="mt-3 text-sm">Total com extras: {brl(produto.preco+itens.reduce((s,x)=>s+x.preco,0))}</p>}
    </div>}
    <a href={linkWhatsApp(numero,msg)} target="_blank" rel="noopener noreferrer" className="btn w-full py-4 text-base"><Whats className="h-5 w-5"/>Comprar no WhatsApp</a>
    {ehIphone && <a href={avaliar} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">Avaliar meu iPhone (aceitamos a partir do XR)</a>}
  </div>;
}
