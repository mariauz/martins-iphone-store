import { getPerfumeSpecs } from '@/lib/perfume-specs';
function Icon({tipo}) {
  const paths = {
    notas:'M9 2h6v4l3 3v13H6V9l3-3z M12 11v6',
    gosta:'M12 21s-8-5-8-11a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 6-8 11-8 11z',
    ocasiao:'M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    projecao:'M3 12h4l3-8 4 16 3-8h4'
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true"><path d={paths[tipo]}/></svg>;
}
export default function PerfumeHighlights({produto}) {
  const s = getPerfumeSpecs(produto.nome);
  if(!s) return <p className="leading-relaxed text-white/80">{produto.descricao}</p>;
  const cards = [
    {tipo:'notas',label:'Notas',valor:`Saída: ${s.notas.saida} • Coração: ${s.notas.coracao} • Fundo: ${s.notas.fundo}`},
    {tipo:'gosta',label:'Se você gosta de…',valor:s.gosta},
    {tipo:'ocasiao',label:'Ideal para',valor:s.ocasioes.join(', ')},
    {tipo:'projecao',label:'Desempenho',valor:`Projeção ${s.projecao.toLowerCase()}. Fixação ${s.fixacao.toLowerCase()}.`}
  ];
  return <div className="space-y-5">
    <div className="flex flex-wrap gap-2 text-xs">
      <span className="rounded-full border border-white/20 px-3 py-1">{s.tipo}</span>
      <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-emerald-300">100% Original</span>
      <span className="rounded-full border border-vinho bg-vinho/30 px-3 py-1">Produto autenticado pela marca</span>
    </div>
    <section aria-label="Perfil do perfume">
      <h2 className="mb-3 text-2xl">Perfil deste perfume</h2>
      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">{cards.map(c=><div key={c.tipo} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><span className="mb-3 inline-flex rounded-xl bg-vinho/30 p-2 text-white"><Icon tipo={c.tipo}/></span><dt className="text-xs text-cinza">{c.label}</dt><dd className="mt-1 text-sm leading-snug">{c.valor}</dd></div>)}</dl>
    </section>
    {produto.descricao && <details className="rounded-xl border border-white/10 p-4"><summary className="cursor-pointer text-sm">Mais informações</summary><p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-cinza">{produto.descricao}</p></details>}
  </div>;
}
