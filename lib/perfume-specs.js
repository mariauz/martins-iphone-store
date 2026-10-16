// Fichas por perfume. Ao incluir novos modelos, adicione aqui usando o nome como chave.
const norm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const ficha = (tipo,notas,gosta,ocasioes,projecao,fixacao) => ({tipo,notas,gosta,ocasioes,projecao,fixacao});
export const PERFUME_SPECS = {
  'lattafa asad':ficha('Eau de Parfum',{saida:'Bergamota, pimenta-preta e lavanda',coracao:'Âmbar, canela e frutas',fundo:'Madeiras, baunilha e âmbar'},'perfumes amadeirados, quentes e marcantes',['Noite','Encontros','Clima ameno','Festas'],'Forte, com presença marcante nos primeiros minutos','Longa no pele e nas roupas'),
  'armaf club de nuit intense':ficha('Eau de Toilette',{saida:'Limão, abacaxi e bergamota',coracao:'Bétula, jasmim e musgo',fundo:'Âmbar, almíscar e madeira'},'perfumes cítricos, frescos e marcantes',['Noite','Festas','Encontros','Clima ameno'],'Forte e expansiva','Longa no pele e nas roupas'),
  'lattafa yara':ficha('Eau de Parfum',{saida:'Tangerina e frutas vermelhas',coracao:'Flor de laranjeira e gardenia',fundo:'Baunilha, doce de leite e almíscar'},'perfumes doces, cremosos e femininos',['Dia a dia','Encontros','Trabalho','Clima ameno'],'Moderada a alta','Boa fixação no pele e nas roupas'),
  'lattafa khamrah':ficha('Eau de Parfum',{saida:'Canela, noz-moscada e bergamota',coracao:'Tâmara, prune e madeira',fundo:'Baunilha, tonka e âmbar'},'perfumes doces, especiados e aconchegantes',['Noite','Clima frio','Encontros','Ocasiões especiais'],'Alta, com rastro marcante','Longa no pele e nas roupas')
};
export function getPerfumeSpecs(nome) {
  const key = norm(nome).replace(/\s*\d+\s*ml.*$/,'').replace(/\s+/g,' ');
  return PERFUME_SPECS[key] || null;
}
