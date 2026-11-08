# spinillo-site · Handoff

> Atualizado em **07/11/2026** · branch `main` · commit seguro `a344bb7`

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

1. [ ] Ler STATUS.md. Trabalho continua na branch local `f1-home` (T1.2 e T1.3 prontas, NÃO publicadas, NÃO enviadas ao GitHub).
2. [ ] F2: páginas de case (Astro content collection em `src/content/cases/`), uma por trabalho de `src/data/trabalhos.ts` exceto o painel; índice da home vira link. Formato do mockup da régua no plano F0: título caixa alta, faixa de números, blocos Problema / Decisão / O que quebrou / Confiabilidade.
3. [ ] Números: só os confirmados (fonte: memória `numeros-defensaveis` do career-copilot). Sem R$ interno da BHub; SLA "perto de 90%"; valor da Loft liberado; conversão 15%→50% fora.
4. [ ] Revisão completa dele (home, sobre, CV, cases) → merge na main (deploy no github.io) → T1.4 domínio (trocar `site`/`base` do astro.config.mjs junto).
