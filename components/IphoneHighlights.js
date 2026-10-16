import { getIphoneSpecs } from '@/lib/iphone-specs';
function Icon({tipo}) {
  const paths = {
    tela:'M7 2h10v20H7z M10 18h4',
    hz:'M20 7a9 9 0 1 0 1 9 M20 2v5h-5 M12 7v5l3 2',
    camera:'M3 7h4l2-3h6l2 3h4v14H3z M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
    diferencial:'m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3z'
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true"><path d={paths[tipo]}/></svg>;
}
export default function IphoneHighlights({produto}) {
  const s = getIphoneSpecs(produto.nome);
  const items = s ? [{tipo:'tela',label:'Tela',valor:s.tela},{tipo:'hz',label:'Fluidez',valor:s.hz},{tipo:'camera',label:'Câmera',valor:s.camera},{tipo:'diferencial',label:'Destaque',valor:s.diferencial}] : [];
  return <div className="space-y-5">
    {s && <section aria-label="Principais características">
      <h2 className="mb-3 text-2xl">Destaques deste iPhone</h2>
      <dl className="grid grid-cols-2 gap-3">{items.map(item=><div key={item.tipo} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><span className="mb-3 inline-flex rounded-xl bg-vinho/30 p-2 text-white"><Icon tipo={item.tipo}/></span><dt className="text-xs text-cinza">{item.label}</dt><dd className="mt-1 text-sm font-medium leading-snug">{item.valor}</dd></div>)}</dl>
      <a href={s.fonte} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-[11px] text-cinza underline">Ficha técnica do fabricante</a>
    </section>}
    <section className="rounded-2xl border border-vinho bg-gradient-to-br from-vinho/30 to-black p-5" aria-label="Nosso diferencial">
      <span className="text-[10px] uppercase tracking-[.2em] text-white/60">Martins iPhone Store</span>
      <h2 className="mb-4 mt-1 text-2xl">Nosso diferencial</h2>
      <ul className="space-y-3 text-sm">
        <li className="flex gap-3"><span aria-hidden="true" className="text-emerald-400">✓</span><span>Aceitamos seu iPhone como entrada, a partir do XR, mediante avaliação.</span></li>
        <li className="flex gap-3"><span aria-hidden="true" className="text-emerald-400">✓</span><span>Você já sai com kit de proteção: case + película.</span></li>
        <li className="flex gap-3"><span aria-hidden="true" className="text-emerald-400">✓</span><span>Carregador compatível para acompanhar seu iPhone.</span></li>
        <li className="flex gap-3"><span aria-hidden="true" className="text-emerald-400">✓</span><span>iPhones à pronta entrega. Confirme a cor disponível com nossas consultoras.</span></li>
      </ul>
      <p className="mt-4 border-t border-white/10 pt-3 text-xs text-white/70">Case, película e carregador incluídos na compra pela loja.</p>
    </section>
    {produto.descricao && <details className="rounded-xl border border-white/10 p-4"><summary className="cursor-pointer text-sm">Cores e bateria</summary><p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-cinza">{produto.descricao}</p></details>}
  </div>;
}
