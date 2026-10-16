'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const slides = [
  {titulo:'iPhone à pronta entrega',texto:'Seu próximo iPhone está aqui. Conheça também nossos perfumes árabes.',link:'/iphone',kind:'phones',alt:'Linha de iPhones — imagem de divulgação da Apple'},
  {titulo:'Seu iPhone vale mais',texto:'Aceitamos seu iPhone como entrada, a partir do XR. Consulte a avaliação.',link:'/iphone',kind:'trade',alt:'Pessoas comparando ou trocando smartphones — cena ilustrativa'},
  {titulo:'Perfumes árabes',texto:'Fragrâncias marcantes para transformar a sua presença.',link:'/perfumes',kind:'perfumes',alt:'Composição de frascos de perfume — imagem ilustrativa'}
];
export default function Carousel() {
  const [i,setI] = useState(0);
  const [paused,setPaused] = useState(false);
  useEffect(() => { if(paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; const t = setInterval(() => setI(x => (x+1)%slides.length),6000); return () => clearInterval(t); },[paused]);
  return <section aria-label="Destaques da Martins iPhone Store" aria-roledescription="carrossel" className="relative mx-auto overflow-hidden border border-white/10 bg-black sm:mt-4 sm:max-w-6xl sm:rounded-2xl" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)}>
    <div className="flex transition-transform duration-700 motion-reduce:transition-none" style={{transform:`translateX(-${i*100}%)`}}>
      {slides.map((s,k) => <div key={s.kind} aria-hidden={i!==k} className="relative min-w-full overflow-hidden bg-gradient-to-br from-vinho/60 to-black" style={{height:'clamp(420px,45vw,500px)'}}>
        <div className="absolute inset-y-0 right-0 w-full sm:w-3/5">
          <img src={`/api/banner-picture?kind=${s.kind}`} alt={s.alt} loading={k===0?'eager':'lazy'} className="h-full w-full object-cover opacity-65 sm:opacity-90" />
          {k===0 && <img src="/api/banner-picture?kind=perfumes" alt="Frascos de perfume ilustrativos" loading="lazy" className="absolute bottom-5 right-5 h-32 w-24 rounded-xl border border-white/20 object-cover shadow-2xl sm:h-44 sm:w-32" />}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="relative flex h-full max-w-xl flex-col items-start justify-center gap-5 px-6 pb-12 sm:px-14">
          <span className="text-xs uppercase tracking-[.25em] text-white/65">Martins iPhone Store • Taubaté</span>
          <h2 className="text-4xl leading-tight sm:text-5xl">{s.titulo}</h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">{s.texto}</p>
          <Link href={s.link} tabIndex={i===k?0:-1} className="btn">{k===1?'Conhecer a troca':'Ver agora'}</Link>
        </div>
        <span className="absolute bottom-12 right-4 text-[10px] text-white/60">Imagens ilustrativas</span>
      </div>)}
    </div>
    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">{slides.map((s,k) => <button type="button" key={s.kind} onClick={() => setI(k)} aria-label={`Ver ${s.titulo}`} aria-pressed={i===k} className={`h-3 w-3 rounded-full ${i===k?'bg-white':'bg-white/40'}`} />)}<button type="button" onClick={() => setPaused(x=>!x)} className="ml-3 rounded-full border border-white/30 px-3 py-1 text-xs">{paused?'Reproduzir':'Pausar'}</button></div>
  </section>;
}
