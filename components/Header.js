import Link from "next/link";
import Logo from "./Logo";
import { CATEGORIAS } from "@/lib/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-2 sm:flex-row sm:justify-between">
        <Link href="/" aria-label="Início"><Logo className="h-20 sm:h-24" /></Link>
        <nav className="flex gap-5 overflow-x-auto text-sm text-white/90">
          {CATEGORIAS.map((c) => (
            <Link key={c.slug} href={`/${c.slug}`} className="whitespace-nowrap hover:text-vinho hover:underline">{c.nome}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
