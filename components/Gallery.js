'use client';
import { useState } from 'react';
import ProductPhoto from './ProductPhoto';
export default function Gallery({ fotos, nome }) {
  const [i, setI] = useState(0);
  const official = /^iphone/i.test(nome) && fotos[i] === '/produtos/placeholder.svg';
  return (
    <div>
      <div className="aspect-square rounded-2xl bg-white/5">
        <ProductPhoto key={fotos[i]} src={fotos[i]} nome={nome} loading="eager" className="h-full w-full object-contain p-6" />
      </div>
      {official && <p className="mt-3 text-xs text-cinza">Imagem ilustrativa do fabricante. A cor exibida pode diferir do estoque. Consulte cores e saúde da bateria na descrição.</p>}
      {fotos.length > 1 && <div className="mt-3 flex gap-2 overflow-x-auto">
        {fotos.map((f,k) => <button type="button" key={k} onClick={() => setI(k)} aria-label={`Ver foto ${k+1}`} className={`h-16 w-16 shrink-0 rounded-lg border bg-white/5 ${k === i ? 'border-vinho' : 'border-white/10'}`}><ProductPhoto src={f} nome={nome} className="h-full w-full object-contain p-1" /></button>)}
      </div>}
    </div>
  );
}
