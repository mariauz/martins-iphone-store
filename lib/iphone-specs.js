// Especificações por modelo, não por cor/armazenamento. Revise aqui ao incluir outro modelo.
const spec = (tela,hz,camera,diferencial,fonte) => ({tela,hz,camera,diferencial,fonte});
export const IPHONE_SPECS = {
  'iphone 13':spec('OLED de 6,1 pol.','60 Hz','Principal de 12 MP','Câmera dupla','https://support.apple.com/pt-br/111872'),
  'iphone 14':spec('OLED de 6,1 pol.','60 Hz','Principal de 12 MP','Selfie com foco automático','https://support.apple.com/pt-br/111850'),
  'iphone 14 pro':spec('OLED de 6,1 pol.','Até 120 Hz','Principal de 48 MP','Dynamic Island','https://support.apple.com/pt-br/111849'),
  'iphone 15':spec('OLED de 6,1 pol.','60 Hz','Principal de 48 MP','Dynamic Island','https://support.apple.com/pt-br/111831'),
  'iphone 15 pro':spec('OLED de 6,1 pol.','Até 120 Hz','Principal de 48 MP','Estrutura em titânio','https://support.apple.com/pt-br/111829'),
  'iphone 15 pro max':spec('OLED de 6,7 pol.','Até 120 Hz','Principal de 48 MP','Estrutura em titânio','https://support.apple.com/pt-pt/111828'),
  'iphone 16':spec('OLED de 6,1 pol.','60 Hz','Fusion principal de 48 MP','Fotos de até 48 MP','https://support.apple.com/pt-br/121029'),
  'iphone 16 pro':spec('OLED de 6,3 pol.','Até 120 Hz','Fusion principal de 48 MP','Zoom óptico de 5x','https://support.apple.com/pt-br/121031'),
  'iphone 16 pro max':spec('OLED de 6,9 pol.','Até 120 Hz','Fusion principal de 48 MP','Zoom óptico de 5x','https://support.apple.com/pt-br/121032'),
  'iphone 17e':spec('OLED de 6,1 pol.','60 Hz','Fusion de 48 MP','Chip A19','https://www.apple.com/br/newsroom/2026/03/apple-introduces-iphone-17e/'),
  'iphone 17 pro':spec('OLED de 6,3 pol.','Até 120 Hz','Fusion principal de 48 MP','Três câmeras de 48 MP','https://support.apple.com/pt-br/125090'),
  'iphone 17 pro max':spec('OLED de 6,9 pol.','Até 120 Hz','Fusion principal de 48 MP','Três câmeras de 48 MP','https://support.apple.com/en-us/125091'),
  'iphone 18 pro max':spec('OLED de 6,9 pol.','Até 120 Hz','Fusion principal de 48 MP','Abertura variável','https://support.apple.com/pt-br/148591')
};
export function getIphoneSpecs(nome) {
  const model = String(nome || '').match(/^iPhone\s+\d+e?(?:\s+Pro(?:\s+Max)?)?/i)?.[0].toLowerCase().replace(/\s+/g,' ');
  return IPHONE_SPECS[model] || null;
}
