# 0001 - Stack e arquitetura inicial

Data: 2026-11-07

## Contexto

Site pessoal para a busca de emprego, com prazo curto (cerca de uma semana) e sem custo mensal. Precisa de páginas de texto (cases) e de um painel interativo com dados de vagas. O domínio spinillo.com.br já existe e é usado para e-mail no Google.

## Decisão

- Astro em modo estático: cases em Markdown, o painel como ilha de JavaScript, zero JS no resto.
- Dados do painel em JSON gerado fora do repo a partir da coleta pessoal, só com campos derivados.
- GitHub Pages com deploy por GitHub Actions, repo público `dspinillo/spinillo-site`.
- Domínio por registros A e CNAME no DNS da UOL, sem trocar servidores de nome.

## Consequências

- Positiva: custo zero, deploy no push, o repo público também serve de amostra de trabalho.
- Custo: sem backend; qualquer interatividade do painel roda no navegador sobre um JSON estático.
- Dívida: atualizar o painel exige rodar o exportador e fazer commit.
