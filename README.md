# spinillo-site

> Site pessoal de Dhiego Spinillo em spinillo.com.br: a operação rodando melhor com dados, automação e IA, contada em poucos trabalhos de verdade.
>
> **Tipo:** saas/web · **Nível:** N2 · **Stack:** Astro estático no GitHub Pages

## Visão

Portfólio para quem contrata liderança de dados, Business Operations ou automação e IA aplicada. O fio que liga as três frentes é a operação. O leitor abre o link vindo de uma mensagem ou do CV e, em dois minutos, vê três ou quatro casos com o problema, o que foi decidido e qual número mudou.

O índice tem três pilares: **Enxergar** (dados: SLA, antifraude, painel do mercado de vagas), **Automatizar** (régua dos certificados) e **Construir** (briefing por IA, Triagem com confiança, Radar de Vagas, revisaAI). Mais uma página sobre, CV e links para LinkedIn e GitHub. Sem e-mail.

Não é vitrine de todo projeto pessoal, nem blog.

## Mapa do projeto

```
spinillo-site/
├── README.md      # este arquivo
├── STATUS.md      # onde paramos
├── HANDOFF.md     # como retomar
├── ROADMAP.md     # fases F0..F4
├── CONTEXT.md     # vocabulário
├── LESSONS.md     # o que aprendemos na marra
└── decisions/     # ADRs
```

## Como rodar

Requer Node 22.23 ou mais novo.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Deploy

GitHub Actions publica no GitHub Pages a cada push na `main`. Domínio `spinillo.com.br`: quatro registros A no `@` e um CNAME `www` apontando para `dspinillo.github.io`, configurados no DNS da UOL. Os registros MX do domínio (e-mail no Google) não são tocados.
