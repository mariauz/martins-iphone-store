import "./globals.css";
import { Jost, Inter } from "next/font/google";
import Marquee from "@/components/Marquee";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { LOJA, SITE_URL } from "@/lib/config";

const titulo = Jost({ subsets: ["latin"], weight: ["200", "300", "400"], variable: "--font-titulo" });
const texto = Inter({ subsets: ["latin"], variable: "--font-texto" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${LOJA.nome} | iPhone, Android e Perfumes Árabes em Taubaté`, template: `%s | ${LOJA.nome}` },
  description: LOJA.descricao,
  openGraph: { title: LOJA.nome, description: LOJA.descricao, type: "website", locale: "pt_BR", images: ["/logo.jpg"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${texto.variable}`}>
      <body className="min-h-screen bg-black">
        <Marquee />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
