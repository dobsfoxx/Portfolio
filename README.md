# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Portfólio — Template

Este projeto contém uma landing page simples para exibição de portfólio de programação usando React + Vite.

Principais pontos:
- Layout responsivo e moderno estilizado com Tailwind CSS (via CDN para desenvolvimento rápido).
- Componentes reutilizáveis: `Hero`, `Projects`, `Techs`, `Footer` em `src/components`.

Como rodar
1. Instale dependências (se ainda não):

```
npm install
```

2. Rode o servidor de desenvolvimento:

```
npm run dev
```

Abra http://localhost:5173 (ou a porta exibida pelo Vite).

Como editar a landing
- `src/components/Hero.jsx`: título, introdução e links principais.
- `src/components/Projects.jsx`: lista de projetos. Passe um array de objetos `{ title, description, url }` como prop `projects` para o componente.
- `src/components/Techs.jsx`: lista de tecnologias. Passe um array de strings via prop `techs`.
- `src/components/Footer.jsx`: informações de contato e rodapé.

Onde adicionar seus projetos e tecnologias
- Exemplo rápido em `src/App.jsx` (variáveis `sampleProjects` e `sampleTechs`). Substitua por seus dados reais ou conecte a um CMS/arquivo JSON.

Sobre Tailwind
- Para prototipagem rápida, foi usado o CDN `https://cdn.tailwindcss.com` incluído em `index.html`.
- Para produção, recomendo instalar e configurar Tailwind via PostCSS e gerar CSS otimizado.

Próximos passos sugeridos
- Adicionar imagens/avatares reais no componente `Hero`.
- Melhorar os cards de projeto com tags, thumbnails e links para código/preview.
- Implementar rotas para páginas de detalhes (React Router) se desejar.
