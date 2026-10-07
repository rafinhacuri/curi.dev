<p align="center">
  <img src="public/icon-192x192.png" width="96" alt="curi.dev.br" />
</p>

# curi.dev.br

Meu portfólio pessoal: projetos, certificados e contato, com um robô 3D que acompanha a navegação.

**[curi.dev.br](https://curi.dev.br)**

## Stack

- [Nuxt 4](https://nuxt.com) + Vue 3
- [Tailwind CSS 4](https://tailwindcss.com)
- [Three.js](https://threejs.org) para a cena 3D
- [motion-v](https://motion.dev/docs/vue) para animações
- `@nuxtjs/i18n` (inglês e português) e `@nuxtjs/seo`
- Deploy na [Vercel](https://vercel.com)

## Rodando localmente

```bash
bun install
cp .env.example .env
bun run dev
```

`DEV_URL`, `DEV_KEY` e `DEV_CERT` são opcionais e servem para rodar o dev server com HTTPS em um host próprio.

## Scripts

| Comando             | O que faz                                    |
| ------------------- | -------------------------------------------- |
| `bun run dev`       | Servidor de desenvolvimento                  |
| `bun run build`     | Build de produção                            |
| `bun run preview`   | Pré-visualiza o build                        |
| `bun run lint`      | Lint com oxlint                              |
| `bun run fmt`       | Checa a formatação com oxfmt                 |
| `bun run typecheck` | Checagem de tipos                            |
| `bun run release`   | Formata, faz lint, checa tipos e gera versão |

## Estrutura

```
app/
  components/   componentes da interface
  data/         conteúdo do site (projetos, textos, certificados)
  lib/three/    robô e cena 3D
  pages/        início, projetos e certificados
public/         ícones, imagens e certificados
```

Para adicionar um projeto, basta incluir uma entrada em [`app/data/projects.ts`](app/data/projects.ts).
