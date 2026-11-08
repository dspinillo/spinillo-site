# spinillo-site · Handoff

> Atualizado em **07/11/2026** · branch `main` · sem commits

## Objetivo acordado

Site pessoal no ar em spinillo.com.br em cerca de uma semana, sem competir com a busca de emprego. Primeiro F1 (no ar), depois painel, cases e distribuição.

## Estado do ambiente

```text
Dir:      ~/spinillo-site (repo público, fora de qualquer monorepo)
Branch:   main, sem commits
Build:    ainda sem código
```

## Cuidados para a próxima sessão

- Repo é público: nada de dado pessoal, status de candidatura, notas, salário pretendido ou descrição completa de vaga. O painel recebe só campos derivados.
- Commits com o e-mail no-reply do GitHub (`git config user.email` local).
- DNS: só registros A/CNAME do site. Nunca trocar os servidores de nome nem tocar no MX.
- Texto publicado sem travessão.

## Próxima ação (checklist)

1. [ ] Direção escolhida → `decisions/0002-design.md`
2. [ ] T1.1: Astro + workflow do Pages + `gh repo create dspinillo/spinillo-site --public` (com confirmação)
