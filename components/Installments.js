import { brl, parcelas } from "@/lib/format";

export default function Installments({ valor }) {
  return (
    <div className="rounded-xl border border-white/10 p-4">
      <h3 className="mb-2 text-lg">Parcelamento no cartão de crédito</h3>
      <ul className="grid grid-cols-2 gap-2 text-sm">
        {parcelas(valor).map((x) => (
          <li key={x.n} className="rounded-lg bg-white/5 px-3 py-2">
            <strong className="font-medium">{x.n}x</strong> de {brl(x.valorParcela)}
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-cinza">Parcelamento disponível apenas no cartão de crédito.</p>
    </div>
  );
}
