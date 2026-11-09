# spinillo-site · Handoff

> Atualizado em **08/11/2026 (noite)** · branch `f1-home` (local, não enviada) · `main` segura em `a344bb7`

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

1. [ ] Escolher a frase do topo da home (opções na última sessão; recomendada: "Liderei times de dados e operação na Glovo, na Loft e na BHub, e ponho a mão no código: painel, automação e agente de IA.").
2. [ ] Merge da `f1-home` na `main` (ele aprovou em 08/11): o deploy vai para dspinillo.github.io/spinillo-site. Conferir no celular.
3. [ ] T1.4 domínio, nesta ordem:
   - GitHub, Settings → Pages → Custom domain: `spinillo.com.br` (cria o arquivo CNAME; manter também `public/CNAME` no repo).
   - `astro.config.mjs`: `site: "https://spinillo.com.br"`, `base: "/"`. Conferir links com `import.meta.env.BASE_URL`.
   - UOL (painel de DNS): no raiz, 4 registros A para 185.199.108.153, 185.199.109.153, 185.199.110.153 e 185.199.111.153; `www` CNAME para `dspinillo.github.io`. NUNCA trocar NS nem tocar no MX. Ele loga no painel; eu guio pelo navegador.
   - Esperar propagação (`dig spinillo.com.br +short`), depois ligar "Enforce HTTPS" no Pages.
4. [x] Pendências de conteúdo respondidas em 08/11 (noite). Sobrou só: Omie, o que eram os 18% que não bateram (cartão escondido até ele lembrar).
5. [ ] Outro repo, outra sessão: levar os hooks de higiene de contexto (`~/dh/scripts/hooks/session-context-nudge.sh` e `session-compact-nudge.sh`) para o plugin `~/oraculo-flow` (já tem `hooks/oraculo-hooks.json`; usar `${CLAUDE_PLUGIN_ROOT}`, subir versão, CHANGELOG) e tirar os dois do `~/.claude/settings.json` para não avisar em dobro. Depois, ajustar o texto do case do Oráculo.

## Cuidados extras desta fase

- `npm run build` agora roda `scripts/checar-publicacao.mjs`: falha se houver `Para você preencher`, `REVISAR` ou travessão no `dist`. Notas de revisão vão no campo `revisar` do frontmatter (nunca renderizado), não em comentário HTML: o processador de Markdown do Astro 7 publica os comentários.
- Tema claro fixo (ADR 0002). Figuras em `src/components/figuras/`, declaradas no campo `figura`.

- Cases só com números confirmados (memória `numeros-defensaveis` do career-copilot). SLA público = "perto de 90%", sem prazo. Sem R$ interno da BHub.
- Resumo no frontmatter dos cases vai entre aspas (dois-pontos quebra o YAML).
- Dev server aberto antes de criar coleção nova não enxerga o conteúdo: reiniciar o `astro dev`.
- Print rolado no Chrome headless: âncora sai em branco; usar iframe da mesma origem servido pelo dev e `scrollTo`.
