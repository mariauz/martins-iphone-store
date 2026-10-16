import { CONSULTORAS, RESPONSAVEL_IPHONE } from '@/lib/config';
import { linkWhatsApp } from '@/lib/format';
import { Whats } from './Icons';
export default function FloatingWhatsApp() {
  const nome = RESPONSAVEL_IPHONE;
  return <a href={linkWhatsApp(CONSULTORAS[nome],`Olá, ${nome}! Vim pelo site da Martins iPhone Store e gostaria de atendimento.`)} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Maria Eduarda no WhatsApp" title="Fale conosco no WhatsApp" className="fixed right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" style={{bottom:'calc(1.25rem + env(safe-area-inset-bottom, 0px))'}}><Whats className="h-8 w-8"/></a>;
}
