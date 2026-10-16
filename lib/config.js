// ===== TUDO QUE VOCE PODE PRECISAR EDITAR FICA AQUI =====

// Taxas do cartao (FICTICIAS: troque pelas reais). 0.10 = 10%
export const TAXAS = { 5: 0.10, 12: 0.20, 18: 0.28, 24: 0.35 };

// WhatsApp: so numeros, com DDD (o 55 e adicionado automaticamente)
export const CONSULTORAS = {
  "Maria Eduarda": "12999999999", // TROCAR
  "Solange": "12988888888",       // TROCAR
};
export const RESPONSAVEL_IPHONE = "Maria Eduarda";
export const RESPONSAVEL_PADRAO = "Maria Eduarda";

export const REDES = {
  instagram: "https://instagram.com/SEU_PERFIL",
  tiktok: "https://tiktok.com/@SEU_PERFIL",
  facebook: "https://facebook.com/SEU_PERFIL",
};

export const LOJA = {
  nome: "Martins iPhone Store",
  descricao: "iPhones, Android, perfumes árabes e acessórios em Taubaté-SP. Pronta entrega, parcelamos em até 24x e entregamos em todo o Brasil.",
};

export const FAIXA = [
  "iPhone pronta entrega",
  "Entrega sem taxa em algumas regiões de Taubaté",
  "Entrega para todo o Brasil",
  "Parcelamos em até 24x no cartão de crédito",
  "Taxa reduzida",
  "Aceitamos seu iPhone como entrada, a partir do iPhone XR",
];

export const BANNERS = [
  { titulo: "iPhone pronta entrega", texto: "Parcelamos em até 24x no cartão de crédito", link: "/iphone", img: "/banners/banner1.jpg" },
  { titulo: "Seu iPhone vale mais", texto: "Aceitamos seu iPhone como entrada, a partir do XR", link: "/iphone", img: "/banners/banner2.jpg" },
  { titulo: "Perfumes árabes", texto: "Fragrâncias marcantes, masculinas e femininas", link: "/perfumes", img: "/banners/banner3.jpg" },
];

export const LEVE_JUNTO = [
  { id: "kit", nome: "Kit de proteção (capa + película)", preco: 89.9, foto: "/produtos/placeholder.svg" },
  { id: "carregador", nome: "Carregador para iPhone", preco: 119.9, foto: "/produtos/placeholder.svg" },
];

export const CATEGORIAS = [
  { slug: "iphone", nome: "iPhone", chave: "iphone", desc: "Pronta entrega" },
  { slug: "android", nome: "Android", chave: "android", desc: "Foco em Xiaomi" },
  { slug: "perfumes", nome: "Perfumes árabes", chave: "perfumes", desc: "Masculino e feminino" },
  { slug: "acessorios", nome: "Acessórios", chave: "acessorios", desc: "Capas, carregadores e mais" },
];

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
