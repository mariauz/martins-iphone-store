import Link from 'next/link';
import Logo from './Logo';
import { CATEGORIAS } from '@/lib/config';
export default function Header() {
  return <header className="sticky top-0 z-30 border-b border-white/10 bg-black/95 backdrop-blur">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-1 sm:flex-row sm:justify-between">
      <Link href="/" aria-label="Início"><Logo className="h-12 sm:h-16" /></Link>
      <nav aria-label="Navegação principal" className="flex max-w-full gap-4 overflow-x-auto pb-1 text-xs text-white/90 sm:gap-5 sm:pb-0 sm:text-sm">
        {CATEGORIAS.map(c => <Link key={c.slug} href={`/${c.slug}`} className="whitespace-nowrap hover:text-white hover:underline">{c.nome}</Link>)}
        <a href="#contato" className="whitespace-nowrap hover:text-white hover:underline">Fale conosco</a>
      </nav>
    </div>
  </header>;
}
