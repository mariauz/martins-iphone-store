import Logo from "./Logo";
import { Instagram, TikTok, Facebook, Whats } from "./Icons";
import { REDES, CONSULTORAS } from "@/lib/config";
import { linkWhatsApp } from "@/lib/format";

export default function Footer() {
  const redes = [["Instagram", Instagram, REDES.instagram], ["TikTok", TikTok, REDES.tiktok], ["Facebook", Facebook, REDES.facebook]];
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 md:grid-cols-2">
        <div>
          <Logo className="h-28 -ml-1" />
          <p className="mt-2 text-sm text-cinza">Taubaté-SP • Entrega para todo o Brasil</p>
          <div className="mt-4 flex gap-3">
            {redes.map(([nome, Icon, href]) => (
              <a key={nome} href={href} target="_blank" rel="noopener noreferrer" aria-label={nome}
                className="rounded-full border border-white/20 p-3 hover:border-vinho hover:bg-vinho">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <a href="https://share.google/UwXd2b4fZSvRWwGk1" target="_blank" rel="noopener noreferrer" className="btn-outline mt-5" aria-label="Avalie-nos no Google (abre em nova aba)">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 text-amber-400"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" /></svg>
            Avalie-nos no Google
          </a>
        </div>
        <div className="md:text-right">
          <h3 className="text-xl">Fale com uma de nossas consultoras</h3>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row md:justify-end">
            {Object.entries(CONSULTORAS).map(([nome, num]) => (
              <a key={nome} className="btn" target="_blank" rel="noopener noreferrer"
                href={linkWhatsApp(num, `Olá, ${nome}! Vim pelo site da Martins iPhone Store.`)}>
                <Whats className="h-5 w-5" /> {nome}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-cinza">© {new Date().getFullYear()} Martins iPhone Store. Preços e disponibilidade sujeitos a alteração.</p>
    </footer>
  );
}
