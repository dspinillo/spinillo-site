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

## Próxima ação (checklist)

1. [ ] T1.2: tokens e layout da direção E (ADR 0002), claro e escuro, 400px sem rolagem lateral
2. [ ] T1.3: home, sobre, página do CV (CV novo BArch + Dados-IA)
3. [ ] T1.4: domínio (trocar `site`/`base` do astro.config.mjs junto)
