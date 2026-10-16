import fs from "fs";
import path from "path";
import { CONSULTORAS, RESPONSAVEL_IPHONE, RESPONSAVEL_PADRAO } from "./config";

const norm = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
export const slugify = (s) => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const sim = (v) => ["sim", "s", "yes", "true", "1"].includes(norm(v));
const num = (v) => {
  let s = String(v || "").replace(/[^0-9,.-]/g, "");
  if (s.includes(",")) s = s.replace(/[.]/g, "").replace(",", ".");
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
};

function parseCSV(text) {
  const rows = []; let row = [], cur = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') q = false;
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(cur); cur = ""; }
    else if (c === "\n") { row.push(cur); rows.push(row); row = []; cur = ""; }
    else if (c !== "\r") cur += c;
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  return rows;
}

function toProducts(text) {
  const rows = parseCSV(text).filter((r) => r.some((c) => c.trim()));
  const head = rows.shift().map((h) => norm(h).replace(/[^a-z0-9]+/g, "_"));
  const col = (r, ...names) => { for (const n of names) { const i = head.findIndex((h) => h.startsWith(n)); if (i >= 0) return (r[i] || "").trim(); } return ""; };
  const used = new Set();
  return rows.map((r) => {
    const nome = col(r, "nome");
    let slug = slugify(nome), k = 2;
    while (used.has(slug)) slug = `${slugify(nome)}-${k++}`;
    used.add(slug);
    const categoria = slugify(col(r, "categoria"));
    const precoPromo = num(col(r, "preco_promocional"));
    const precoNormal = num(col(r, "preco"));
    const promo = sim(col(r, "em_promocao")) && precoPromo > 0;
    let resp = col(r, "whatsapp");
    if (!CONSULTORAS[resp]) resp = categoria === "iphone" ? RESPONSAVEL_IPHONE : RESPONSAVEL_PADRAO;
    const fotos = col(r, "foto").split("|").map((f) => f.trim()).filter(Boolean);
    const storage = nome.match(/([0-9]+)\s?(GB|TB)/i);
    return {
      slug, nome, categoria, subcategoria: col(r, "subcategoria"), descricao: col(r, "descricao"),
      precoOriginal: precoNormal, preco: promo ? precoPromo : precoNormal, promo,
      disponivel: col(r, "disponivel") === "" ? true : sim(col(r, "disponivel")),
      fotos: fotos.length ? fotos : ["/produtos/placeholder.svg"], responsavel: resp,
      armazenamento: storage ? `${storage[1]}${storage[2].toUpperCase()}` : "",
      modelo: storage ? nome.replace(storage[0], "").replace(/\s+/g, " ").trim() : nome,
    };
  }).filter((p) => p.nome && p.disponivel);
}

export async function getProducts() {
  const url = process.env.SHEET_CSV_URL;
  try {
    if (url) {
      const res = await fetch(url, { next: { revalidate: 300 } });
      if (res.ok) return toProducts(await res.text());
    }
  } catch (e) {}
  return toProducts(fs.readFileSync(path.join(process.cwd(), "data", "produtos-exemplo.csv"), "utf8"));
}

export const byCategory = (all, cat) => all.filter((p) => p.categoria === cat);
