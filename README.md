# Martins iPhone Store - vitrine virtual

## Rodar local
1. Instale o Node.js LTS (nodejs.org)
2. `npm install`
3. `npm run dev` e abra http://localhost:3000

## Configurar
Edite `lib/config.js`: numeros de WhatsApp, redes sociais, taxas do cartao (TAXAS), banners.

## Planilha (Google Sheets)
Colunas na linha 1: `categoria | subcategoria | nome | descricao | preco | preco promocional | foto | em promocao | disponivel | WhatsApp responsavel`.
Publique em Arquivo > Compartilhar > Publicar na web > CSV e coloque o link em `SHEET_CSV_URL` (.env.local e Vercel > Settings > Environment Variables).
Categorias: iphone, android, perfumes, acessorios. Perfumes: subcategoria Masculino/Feminino.
Nome do iPhone no padrao `iPhone 15 128GB`. Varias fotos: separe com `|`.
Modelo de planilha: `data/produtos-exemplo.csv`.

## Fotos
Coloque em `public/produtos/` e escreva `/produtos/arquivo.jpg` na coluna foto.
Banners: `public/banners/banner1.jpg`, `banner2.jpg`, `banner3.jpg`.
Logo: `public/logo.jpg` (recortada, sem margem preta).

## Vercel
Add New > Project > escolha este repositorio > Deploy.
