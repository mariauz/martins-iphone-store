import { TAXAS } from "./config";

export const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// valor x (1 + taxa) / numero de parcelas
export function parcelas(valor) {
  return Object.entries(TAXAS).map(([n, taxa]) => {
    const total = valor * (1 + taxa);
    return { n: Number(n), valorParcela: total / Number(n), total };
  });
}

export function linkWhatsApp(numero, mensagem) {
  return `https://wa.me/55${String(numero).replace(/[^0-9]/g, "")}?text=${encodeURIComponent(mensagem)}`;
}
