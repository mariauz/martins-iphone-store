import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
const sources = {
  phones: 'https://www.apple.com/iphone/',
  trade: 'https://www.pexels.com/photo/close-up-of-hands-holding-smartphones-outdoors-28971395/',
  perfumes: 'https://www.pexels.com/photo/three-perfume-bottles-264819/',
  'launch-pro': 'https://www.apple.com/br/iphone-18-pro/',
  'launch-max': 'https://support.apple.com/pt-br/148591'
};
export async function GET(req) {
  const key = new URL(req.url).searchParams.get('kind');
  if (!Object.prototype.hasOwnProperty.call(sources,key)) return new NextResponse(null,{status:404});
  try {
    const res = await fetch(sources[key],{next:{revalidate:86400},signal:AbortSignal.timeout(10000)});
    if (!res.ok) throw new Error('Fonte indisponível');
    const html = await res.text();
    for (const tag of html.matchAll(/<meta\b[^>]*>/gi)) {
      const attrs = Object.fromEntries([...tag[0].matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map(x => [x[1].toLowerCase(),x[2]]));
      if (!['og:image','twitter:image'].includes(attrs.property || attrs.name)) continue;
      if (!attrs.content) continue;
      const u = new URL(attrs.content.replace(/&amp;/g,'&'), sources[key]);
      if (u.protocol !== 'https:' || !['apple.com','pexels.com'].some(d => u.hostname === d || u.hostname.endsWith('.'+d))) continue;
      return NextResponse.redirect(u,{status:307,headers:{'Cache-Control':'public, max-age=3600'}});
    }
  } catch(e) { console.warn('Banner:',key,e.message); }
  if(key.startsWith('launch-')) return NextResponse.redirect(new URL('/produtos/placeholder.svg',req.url));
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect width="1200" height="600" fill="#21090c"/></svg>';
  return new NextResponse(svg,{headers:{'Content-Type':'image/svg+xml','Cache-Control':'public, max-age=60'}});
}
