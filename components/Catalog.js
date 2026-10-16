'use client';
import { useState } from 'react';
import ProductCard from './ProductCard';
import { iphoneCondition } from '@/lib/product-policy';
const iphoneChoices = [{id:'seminovo',label:'iPhone seminovo'},{id:'lacrado',label:'iPhone lacrado'},{id:'todos',label:'Ver todos'}];
const perfumeChoices = [{id:'Feminino',label:'Feminino'},{id:'Masculino',label:'Masculino'},{id:'todos',label:'Ver todos'}];
export default function Catalog({ products, modo }) {
  const [modelo,setModelo] = useState('');
  const [arm,setArm] = useState('');
  const [sub,setSub] = useState('');
  const [choice,setChoice] = useState(null);
  const ehIphone = modo==='iphone';
  const ehPerfume = modo==='perfume';
  const choose = value => {setChoice(value);setModelo('');setArm('');setSub('');};
  let base = products;
  if(ehIphone && choice && choice!=='todos') base = base.filter(p=>iphoneCondition(p)===choice);
  if(ehPerfume && choice && choice!=='todos') base = base.filter(p=>p.subcategoria===choice);
  const uniq = key => [...new Set(base.map(p=>p[key]).filter(Boolean))];
  const lista = base.filter(p=>(!modelo || p.modelo===modelo) && (!arm || p.armazenamento===arm) && (!sub || p.subcategoria===sub));
  const sel = 'rounded-full border border-white/20 bg-black px-4 py-2 text-sm';
  return <div>
    {ehIphone && <div className="mb-8">
      <h2 className="mb-4 text-2xl">Qual iPhone você procura?</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">{iphoneChoices.map(c=><button type="button" key={c.id} onClick={()=>choose(c.id)} aria-pressed={choice===c.id} className={`rounded-2xl border px-5 py-5 text-base transition ${choice===c.id?'border-vinho bg-vinho':'border-white/20 bg-white/[0.03] hover:border-vinho'}`}>{c.label}</button>)}</div>
      {choice==='todos' && <p className="mt-3 text-xs text-cinza">Inclui seminovos, lacrados e os aparelhos identificados como não ativados.</p>}
    </div>}
    {ehPerfume && <div className="mb-8">
      <h2 className="mb-4 text-2xl">Qual perfume você procura?</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">{perfumeChoices.map(c=><button type="button" key={c.id} onClick={()=>choose(c.id)} aria-pressed={choice===c.id} className={`rounded-2xl border px-5 py-5 text-base transition ${choice===c.id?'border-vinho bg-vinho':'border-white/20 bg-white/[0.03] hover:border-vinho'}`}>{c.label}</button>)}</div>
      {choice==='todos' && <p className="mt-3 text-xs text-cinza">Mostra todas as fragrâncias disponíveis, femininas e masculinas.</p>}
    </div>}
    {(!ehIphone && !ehPerfume) || choice!==null ? <>
      {ehIphone && <div className="mb-6 flex flex-wrap gap-3">
        <select aria-label="Modelo" value={modelo} onChange={e=>setModelo(e.target.value)} className={sel}><option value="">Todos os modelos</option>{uniq('modelo').map(m=><option key={m}>{m}</option>)}</select>
        <select aria-label="Armazenamento" value={arm} onChange={e=>setArm(e.target.value)} className={sel}><option value="">Todo armazenamento</option>{uniq('armazenamento').map(m=><option key={m}>{m}</option>)}</select>
      </div>}
      {modo==='sub' && !ehPerfume && <div className="mb-6 flex flex-wrap gap-3">{['',...uniq('subcategoria')].map(s=><button type="button" key={s} onClick={()=>setSub(s)} className={`rounded-full border px-5 py-2 text-sm ${sub===s?'border-vinho bg-vinho':'border-white/20'}`}>{s || 'Todos'}</button>)}</div>}
      {lista.length===0?<p className="text-cinza">Nenhum produto encontrado.</p>:<div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">{lista.map(p=><ProductCard key={p.slug} p={p}/>)}</div>}
    </>:null}
  </div>;
}
