import { CONSULTORAS, RESPONSAVEL_IPHONE } from '@/lib/config';
import { linkWhatsApp } from '@/lib/format';
import { canShowPrice } from '@/lib/product-policy';
import { Whats } from './Icons';
export default function BuyBox({produto}) {
  const iphone = produto.categoria==='iphone';
  const visible = canShowPrice(produto);
  const nome = RESPONSAVEL_IPHONE;
  const numero = CONSULTORAS[nome];
  let msg = `Olá, ${nome}! Tenho interesse no ${produto.nome}, que vi no site.`;
  if(!visible) msg += ' Pode me informar o valor e a disponibilidade?';
  if(iphone) msg += ' Gostaria de confirmar a cor e o kit com case, película e carregador incluídos.';
  const avaliar = linkWhatsApp(numero,`Olá, ${nome}! Quero avaliar meu iPhone como entrada para o ${produto.nome}, que vi no site.`);
  return <div className="space-y-4">
    <a href={linkWhatsApp(numero,msg)} target="_blank" rel="noopener noreferrer" className="btn w-full py-4 text-base"><Whats className="h-5 w-5"/>{visible?'Comprar no WhatsApp':'Consultar valor no WhatsApp'}</a>
    {iphone && <a href={avaliar} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">Avaliar meu iPhone (aceitamos a partir do XR)</a>}
  </div>;
}
