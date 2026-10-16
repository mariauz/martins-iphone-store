// Fichas por perfume. Ao incluir novos modelos, adicione aqui usando o nome como chave.
const norm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const ficha = (tipo,notas,gosta,ocasioes,projecao,fixacao) => ({tipo,notas,gosta,ocasioes,projecao,fixacao});
const asad = ficha('Eau de Parfum',{saida:'Bergamota, pimenta-preta e lavanda',coracao:'Âmbar, canela e frutas',fundo:'Madeiras, baunilha e âmbar'},'perfumes amadeirados, quentes e marcantes',['Noite','Encontros','Clima ameno','Festas'],'Forte, com presença marcante nos primeiros minutos','Longa no pele e nas roupas');
export const PERFUME_SPECS = {
  'lattafa asad':asad,
  'lattafa asad preto':asad,
  'armaf club de nuit intense':ficha('Eau de Toilette',{saida:'Limão, abacaxi e bergamota',coracao:'Bétula, jasmim e musgo',fundo:'Âmbar, almíscar e madeira'},'perfumes cítricos, frescos e marcantes',['Noite','Festas','Encontros','Clima ameno'],'Forte e expansiva','Longa no pele e nas roupas'),
  'afnan 9 pm':ficha('Eau de Parfum',{saida:'Maçã, canela e lavanda',coracao:'Tonka e flores',fundo:'Baunilha, âmbar e madeira'},'perfumes doces, quentes e marcantes',['Noite','Encontros','Festas','Clima ameno'],'Alta, com rastro marcante','Longa no pele e nas roupas'),
  'lattafa yara':ficha('Eau de Parfum',{saida:'Tangerina, heliotrópio e orquídea',coracao:'Notas tropicais e gourmand',fundo:'Baunilha, sândalo e almíscar'},'perfumes doces, cremosos e femininos',['Dia a dia','Encontros','Trabalho','Clima ameno'],'Moderada a alta','Boa fixação no pele e nas roupas'),
  'lattafa yara tous':ficha('Eau de Parfum',{saida:'Coco, manga e maracujá',coracao:'Jasmim, heliotrópio e flor de laranjeira',fundo:'Cashmeran, baunilha e almíscar'},'perfumes tropicais, doces e femininos',['Dia a dia','Encontros','Clima quente','Férias'],'Moderada a alta','Boa fixação no pele e nas roupas'),
  'lattafa yara moi':ficha('Eau de Parfum',{saida:'Pêssego e jasmim',coracao:'Caramelo e âmbar',fundo:'Patchouli e sândalo'},'perfumes doces, florais e envolventes',['Dia a dia','Encontros','Trabalho','Clima ameno'],'Moderada a alta','Boa fixação no pele e nas roupas'),
  'lattafa yara candy':ficha('Eau de Parfum',{saida:'Tangerina verde e groselha-preta',coracao:'Gardênia e notas doces',fundo:'Baunilha e notas gourmand'},'perfumes doces, frutados e alegres',['Dia a dia','Encontros','Clima ameno'],'Moderada a alta','Boa fixação no pele e nas roupas'),
  'lattafa yara elixir':ficha('Eau de Parfum',{saida:'Frutas e flores',coracao:'Notas doces e florais',fundo:'Baunilha e almíscar'},'perfumes doces e mais intensos',['Noite','Encontros','Ocasiões especiais'],'Alta','Longa no pele e nas roupas'),
  'lattafa eclaire':ficha('Eau de Parfum',{saida:'Caramelo e leite',coracao:'Baunilha e praline',fundo:'Âmbar e madeira'},'perfumes doces, cremosos e envolventes',['Dia a dia','Encontros','Clima ameno'],'Moderada a alta','Boa fixação no pele e nas roupas'),
  'lattafa khamrah':ficha('Eau de Parfum',{saida:'Canela, noz-moscada e bergamota',coracao:'Tâmara, prune e madeira',fundo:'Baunilha, tonka e âmbar'},'perfumes doces, especiados e aconchegantes',['Noite','Clima frio','Encontros','Ocasiões especiais'],'Alta, com rastro marcante','Longa no pele e nas roupas')
};
export function getPerfumeSpecs(nome) {
  const key = norm(nome).replace(/\s*\d+\s*ml.*$/,'').replace(/\s+/g,' ');
  return PERFUME_SPECS[key] || null;
}
