const brands = ['Xiaomi','Meta','PlayStation / PS5','Xbox','Garmin','Lattafa','Orientica','Maison Alhambra','Al Wataniah','Armaf','French Avenue','Calvin Klein','Dolce & Gabbana','Carolina Herrera','Apple'];
export default function Brands() {
  return <section aria-labelledby="brands-title" className="mt-14 border-y border-white/10 bg-white/[0.02] py-8">
    <h2 id="brands-title" className="mb-6 text-center text-2xl sm:text-3xl">Marcas que trabalhamos</h2>
    <ul className="sr-only">{brands.map(b => <li key={b}>{b}</li>)}</ul>
    <div className="brand-window overflow-hidden" aria-hidden="true">
      <div className="brand-track flex w-max">{[0,1].map(k => <div key={k} className="flex shrink-0 items-center">{brands.map(b => <span key={b} className="mx-8 whitespace-nowrap font-titulo text-xl tracking-wide text-white/80 sm:mx-12 sm:text-2xl">{b}<span className="ml-8 text-vinho">•</span></span>)}</div>)}</div>
    </div>
    <style>{`@keyframes brands-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}.brand-track{animation:brands-scroll 55s linear infinite}.brand-window:hover .brand-track{animation-play-state:paused}@media(prefers-reduced-motion:reduce){.brand-track{animation:none}.brand-window{overflow-x:auto}}`}</style>
  </section>;
}
