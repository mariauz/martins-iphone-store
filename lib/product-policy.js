const norm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
export function isFeaturedIphone(p) {
  return norm(p.categoria)==='iphone' && ['iphone 14 128gb','iphone 16 128gb'].includes(norm(p.nome));
}
export function canShowPrice(p) { return norm(p.categoria)!=='iphone' || isFeaturedIphone(p); }
export function iphoneCondition(p) {
  const s = norm(`${p.subcategoria || ''} ${p.nome || ''}`);
  if(s.includes('nao ativado')) return 'nao-ativado';
  if(s.includes('lacrado')) return 'lacrado';
  return 'seminovo';
}
export function conditionLabel(p) {
  return {'seminovo':'Seminovo','lacrado':'Lacrado','nao-ativado':'Não ativado'}[iphoneCondition(p)];
}
