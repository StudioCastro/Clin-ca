# Sorriso Odontologia — Site Institucional

Site institucional premium para clínica odontológica, construído com React 19, Vite, Tailwind CSS 4,
React Router, Framer Motion, GSAP, Swiper, React Hook Form + Zod e Cloudflare Turnstile.

> Todo o conteúdo (nome da clínica, endereço, equipe, depoimentos, artigos do blog) é
> **placeholder fictício**, centralizado em `src/constants/` e `src/data/`. Endereço, telefone,
> e-mail e CROs são inventados (não correspondem a uma clínica real). Substitua por informações
> reais antes de publicar em produção.

## Stack

- **React 19** + **Vite 8** (build via Rolldown)
- **Tailwind CSS 4** (configuração CSS-first em `src/index.css`, sem `tailwind.config.js`)
- **React Router 7** (`createBrowserRouter`, lazy loading por rota)
- **Framer Motion** + **GSAP** (parallax pontual no Hero)
- **React Hook Form** + **Zod** (validação do formulário de contato)
- **Swiper** (carrossel de depoimentos)
- **Cloudflare Turnstile** (componente próprio em `src/components/ui/Turnstile.jsx`)
- **react-helmet-async** (SEO: meta tags, Open Graph, JSON-LD)

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção + geração de sitemap.xml
npm run preview   # preview local do build
npm run lint       # oxlint
npm run format      # prettier --write
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

| Variável | Descrição |
| --- | --- |
| `VITE_TURNSTILE_SITE_KEY` | Site key do Cloudflare Turnstile. Já vem preenchida com a chave pública de teste da Cloudflare (sempre aprova), **trocar em produção**. |
| `VITE_CONTACT_ENDPOINT` | URL do backend real que receberá o formulário de contato (ver `src/services/contactService.js`). |

## Limitações conhecidas desta entrega (documentadas no plano original)

1. **Formulário de contato**: o envio é mockado em `src/services/contactService.js`. Substitua o
   corpo da função por uma chamada `fetch` real ao seu backend; o comentário no arquivo explica
   como.
2. **SEO em SPA**: as meta tags são injetadas via `react-helmet-async` no client-side. Cobre bem
   crawlers modernos (Googlebot), mas para unfurling perfeito em redes sociais/bots simples,
   considere adicionar pre-rendering (`vite-plugin-prerender`) ou migrar para um framework SSR.
3. **Headers de segurança** (CSP, HSTS etc.) estão em `public/_headers`, no formato aceito por
   Cloudflare Pages e Netlify. Ajuste o `connect-src`/`frame-src` da CSP se o backend real do
   formulário for hospedado em outro domínio.
4. **Imagens**: sem nenhum stock/placeholder genérico. A fachada, o balcão de recepção e as 4
   fotos da equipe (`src/assets/images/*.webp`) vêm de uma imagem de referência fornecida
   (`src/assets/reference-collage.png`, mantida só como fonte), recortadas e otimizadas com Sharp.
   O favicon também foi gerado a partir do ícone de dente dessa mesma referência
   (`public/favicon.ico`, `favicon-*.png`, `apple-touch-icon.png`, `icon-*.png`) — como é um
   recorte de foto (não um vetor), fica mais suave em tamanhos grandes; o ideal em produção é
   gerar os ícones a partir de um logo vetorial real. Consultório/equipamentos, os 11 tratamentos
   e os 3 pares de "antes e depois" seguem como ilustrações SVG autorais em
   `src/assets/illustrations/` (mesmo sistema visual navy/azul/branco) — fotos reais de "antes e
   depois" exigiriam autorização do paciente por LGPD/CFO. Depoimentos usam avatares gerados por
   iniciais (`src/utils/avatar.js`) em vez de fotos de terceiros. Para produção, troque essas
   ilustrações/recortes por fotografia profissional real da clínica, mantendo a mesma estrutura de
   dados (`src/data/*.js`).

## Estrutura de pastas

```
src/
  assets/        fontes, ilustrações SVG (illustrations/) e fotos recortadas (images/)
  components/
    layout/      Navbar, Footer, WhatsAppButton, PageHeader, PageSEO, ScrollToTop
    ui/          primitivos reutilizáveis (Button, Card, Modal, Input, Accordion, ...)
    sections/    composições de seção usadas na Home (Hero, Differentials, ...)
    features/    componentes de domínio (TreatmentCard, ContactForm, GalleryMasonry, ...)
  pages/         uma página por rota
  layouts/       RootLayout (Navbar + Outlet + Footer)
  routes/        paths.js (constantes de rota) e router.jsx (createBrowserRouter)
  hooks/         useScrollReveal, useCountUp, useMediaQuery, useTurnstile, ...
  context/       UIContext (menu mobile)
  services/      contactService.js (camada de submissão do formulário)
  utils/         cn, phoneMask, formatDate, seoSchema (builders JSON-LD), validation (Zod)
  constants/     siteConfig, navigation, seoDefaults
  data/          treatments, team, testimonials, gallery, beforeAfter, blogPosts, faq, timeline
scripts/
  generate-sitemap.mjs         gera dist/sitemap.xml no postbuild
  asset-loader.mjs              loader ESM que permite ao script rodar fora do Vite
  register-asset-loader.mjs     registra o loader acima (usado via `node --import`)
public/
  robots.txt, _headers, site.webmanifest, og-cover.svg
  favicon.ico, favicon-16x16.png, favicon-32x32.png,
  apple-touch-icon.png, icon-192.png, icon-512.png
.github/workflows/
  ci.yml            lint + build a cada push/PR
  deploy-pages.yml  build + deploy no GitHub Pages a cada push na main
```

## Favicon

O ícone (dente com contorno dourado) foi recortado de `src/assets/reference-collage.png` e usado
para gerar `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` (180px)
e os ícones do manifest (`icon-192.png`/`icon-512.png`). Como é uma foto e não um vetor, fica
suave em tamanhos grandes — para produção, o ideal é recriar o ícone a partir de um logo
vetorial real e regenerar os tamanhos. Não há mais favicon em SVG: nem todo navegador suporta
`<link rel="icon" type="image/svg+xml">` (Safari, por exemplo, ignora), então o `index.html`
depende só do conjunto ICO/PNG, que funciona em todos.

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` builda e publica o site automaticamente a cada
push na `main`. **Requer uma configuração manual única**, feita pela interface do GitHub (não dá
pra automatizar por git): em **Settings → Pages → Build and deployment → Source**, troque para
**"GitHub Actions"** (o padrão é "Deploy from a branch", que serve os arquivos crus do repositório
sem buildar nada — foi isso que causou a tela branca, já que `index.html` referenciava
`/src/main.jsx`, um JSX não compilado que o navegador não consegue executar diretamente).

Como o GitHub Pages publica projetos em `usuario.github.io/<nome-do-repo>/` (não na raiz), o
workflow builda com `VITE_BASE_PATH=/<nome-do-repo>/`, que o `vite.config.js` usa para prefixar
todos os assets e o `src/routes/router.jsx` usa como `basename` do React Router — sem isso, os
arquivos JS/CSS e as rotas apontariam para a raiz errada e a página ficaria em branco mesmo com o
build correto. Também é gerado um `404.html` (cópia do `index.html`) para que links diretos para
rotas internas (ex.: `/tratamentos`) funcionem, já que o GitHub Pages não faz rewrite de rotas no
servidor.

Para deploy em domínio próprio/raiz (Cloudflare Pages, Netlify, Vercel), não defina
`VITE_BASE_PATH` — o padrão já é `/`.
