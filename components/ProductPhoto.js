'use client';
import { useState } from 'react';
export default function ProductPhoto({ src, nome, className = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false);
  const model = nome.match(/^iPhone\s+\d+e?(?:\s+Pro(?:\s+Max)?)?/i)?.[0];
  const official = model && (!src || src === '/produtos/placeholder.svg');
  const photo = failed ? '/produtos/placeholder.svg' : official ? `/api/iphone-photo?model=${encodeURIComponent(model)}` : src;
  return <img src={photo || '/produtos/placeholder.svg'} alt={official ? `${model} — imagem ilustrativa do fabricante` : nome} className={className} loading={loading} onError={() => setFailed(true)} />;
}
