"use client";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

export default function Catalog({ products, modo }) {
  const [modelo, setModelo] = useState("");
  const [arm, setArm] = useState("");
  const [sub, setSub] = useState("");
  const uniq = (k) => [...new Set(products.map((p) => p[k]).filter(Boolean))];
  const modelos = useMemo(() => uniq("modelo"), [products]);
  const armazs = useMemo(() => uniq("armazenamento").sort((a, b) => parseInt(a) - parseInt(b)), [products]);
  const subs = useMemo(() => uniq("subcategoria"), [products]);

  const lista = products.filter((p) => (!modelo || p.modelo === modelo) && (!arm || p.armazenamento === arm) && (!sub || p.subcategoria === sub));
  const sel = "rounded-full border border-white/20 bg-black px-4 py-2 text-sm";

  return (
    <div>
      {modo === "iphone" && (
        <div className="mb-6 flex flex-wrap gap-3">
          <select aria-label="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} className={sel}>
            <option value="">Todos os modelos</option>{modelos.map((m) => <option key={m}>{m}</option>)}
          </select>
          <select aria-label="Armazenamento" value={arm} onChange={(e) => setArm(e.target.value)} className={sel}>
            <option value="">Todo armazenamento</option>{armazs.map((m) => <option key={m}>{m}</option>)}
          </select>
        </div>
      )}
      {modo === "sub" && (
        <div className="mb-6 flex flex-wrap gap-3">
          {["", ...subs].map((s) => (
            <button key={s} onClick={() => setSub(s)} className={`rounded-full border px-5 py-2 text-sm ${sub === s ? "border-vinho bg-vinho" : "border-white/20"}`}>{s || "Todos"}</button>
          ))}
        </div>
      )}
      {lista.length === 0 ? <p className="text-cinza">Nenhum produto encontrado.</p> : (
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {lista.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      )}
    </div>
  );
}
