# spinillo-site · Handoff

> Atualizado em **08/11/2026** · branch `f1-home` (local, não enviada) · `main` segura em `a344bb7`

## Objetivo acordado

Site pessoal no ar em spinillo.com.br em cerca de uma semana, sem competir com a busca de emprego. Primeiro F1 (no ar), depois painel, cases e distribuição.

## Estado do ambiente

```text
Dir:      ~/spinillo-site (repo público, fora de qualquer monorepo)
Branch:   main (origin = github.com/dspinillo/spinillo-site, público)
Build:    npm run build (Astro 7, exige Node >= 22.23); deploy por push na main
```

## Cuidados para a próxima sessão

- Repo é público: nada de dado pessoal, status de candidatura, notas, salário pretendido ou descrição completa de vaga. O painel recebe só campos derivados.
- Commits com o e-mail no-reply do GitHub (`git config user.email` local).
- DNS: só registros A/CNAME do site. Nunca trocar os servidores de nome nem tocar no MX.
- Texto publicado sem travessão.
- Não publicar nada antes dos cases: a decisão dele é sair completo e validado.
- CV do site: `~/Documents/Curriculos/fontes/build.py operacao` gera o PDF; copiar para `public/cv/dhiego-spinillo-cv.pdf`.
- Headless Chrome tem viewport mínimo de 500px: para conferir 390px, renderizar dentro de um iframe.

## Próxima ação (checklist)

1. [ ] Ler STATUS.md. Tudo está na branch local `f1-home`, sem push.
2. [ ] Revisão dele dos 8 cases (`npm run dev`, http://localhost:4321/spinillo-site/). Ajustar texto conforme as respostas; tirar os `[Para você preencher.]` e os `<!-- REVISAR -->`.
3. [ ] Decidir o tema: claro fixo (apagar o bloco escuro em `src/layouts/Base.astro` e anotar no ADR 0002) ou voltar a seguir o sistema.
4. [ ] Revisão final (home, sobre, CV, cases) → merge na main (deploy no github.io) → T1.4 domínio (trocar `site`/`base` do astro.config.mjs junto).

## Cuidados extras desta fase

- Cases só com números confirmados (memória `numeros-defensaveis` do career-copilot). SLA público = "perto de 90%", sem prazo. Sem R$ interno da BHub.
- Resumo no frontmatter dos cases vai entre aspas (dois-pontos quebra o YAML).
- Dev server aberto antes de criar coleção nova não enxerga o conteúdo: reiniciar o `astro dev`.
- Print rolado no Chrome headless: âncora sai em branco; usar iframe da mesma origem servido pelo dev e `scrollTo`.
