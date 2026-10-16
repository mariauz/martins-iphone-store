import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
const SOURCE = 'https://support.apple.com/pt-br/108044';
const allowed = new Set(['iphone 13','iphone 14','iphone 14 pro','iphone 15','iphone 15 pro','iphone 15 pro max','iphone 16','iphone 16 pro','iphone 16 pro max','iphone 17 pro','iphone 17 pro max','iphone 17e','iphone 18 pro max']);
const clean = s => s.replace(/<[^>]+>/g,' ').replace(/&nbsp;|&#160;/g,' ').replace(/\s+/g,' ').trim().toLowerCase();
const valid = u => { try { const x = new URL(u, SOURCE); return x.protocol === 'https:' && (x.hostname === 'apple.com' || x.hostname.endsWith('.apple.com')) ? x.href : null; } catch { return null; } };
export async function GET(req) {
  const model = (new URL(req.url).searchParams.get('model') || '').toLowerCase().trim();
  if (!allowed.has(model)) return NextResponse.redirect(new URL('/produtos/placeholder.svg',req.url));
  try {
    const res = await fetch(SOURCE, { next: { revalidate: 86400 }, signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error('Apple indisponível');
    const html = await res.text();
    const heads = [...html.matchAll(/<h[1-6]\b[^>]*>[\s\S]*?<\/h[1-6]>/gi)];
    const i = heads.findIndex(h => clean(h[0]) === model);
    if (i < 0) throw new Error('Modelo não encontrado');
    const section = html.slice(heads[i].index + heads[i][0].length, i+1 < heads.length ? heads[i+1].index : html.length);
    for (const tag of section.matchAll(/<img\b[^>]*>/gi)) {
      const attr = tag[0].match(/\bsrc\s*=\s*["']([^"']+)["']/i);
      const url = attr && valid(attr[1].replace(/&amp;/g,'&'));
      if (url) return NextResponse.redirect(url, { status: 307, headers: { 'Cache-Control': 'public, max-age=3600' } });
    }
  } catch (e) { console.warn('Foto Apple:', model, e.message); }
  return NextResponse.redirect(new URL('/produtos/placeholder.svg',req.url));
}
