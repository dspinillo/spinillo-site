# spinillo-site · Status

> Última atualização: **08/11/2026** · frente ativa: F2 · branch local `f1-home` (não publicada)
> Legenda: ✅ feito · 🟡 parcial · ▶️ próximo · ⏸️ aguardando · 🔒 bloqueado · ⬜ não iniciado

## Estado atual (leia primeiro)

Projeto criado em 07/11/2026. Plano visual F0 com duas rodadas de design; escolhida a direção E · Índice (ADR 0002). Nenhum código ainda.

| Bloco | Estado |
|---|---|
| F0 · plano e direção | ✅ direção E, eixo em três pilares |
| F1 · no ar no domínio | 🟡 T1.1 ✅ no ar · T1.2 e T1.3 prontas na branch local `f1-home`, aguardando revisão |
| F2 · cases dos três pilares | 🟡 12 rascunhos (4 novos de empresa em 08/11), aguardando revisão dele |
| F3 · painel do mercado | ⬜ |
| F4 · distribuição | ⬜ |

## Onde paramos (última sessão)

- **Decidido (08/11, noite):** tema claro fixo; portarias públicas; revisaAI pode mostrar o pico de 6/11 no tom de "a dor é grande", nunca de oportunismo; merge na main aprovado. Novas figuras (funil, briefing anotado, antes e depois, árvore) para variar. Trava de publicação no build. Varredura de privacidade feita: limpo. **Próxima ação:** ▶️ frase do topo → merge → T1.4 (ver HANDOFF).
- **Feito (08/11, noite):** novo formato de case aprovado por ele no piloto do SLA e aplicado nos 12: síntese em três linhas (`sintese`), etiquetas (`stack`), cartões de O que quebrou e Confiabilidade (`quebrou`, `confiabilidade`), texto cortado e uma figura por case. Figuras em `src/components/figuras/`: `ForecastSla` (sob medida, botão antes/depois), e `Fluxo`, `Barras`, `Colunas`, declaradas no campo `figura` do frontmatter. Gráficos de empresa com legenda "dados ilustrativos"; o do revisaAI usa a série real de cadastros por dia (CareerOS, corte 08/11 14h10). Motion só com IntersectionObserver e respeitando prefers-reduced-motion.
- **Feito (08/11, tarde):** pedido dele, menos cara de side project. Cases novos: `painel-guias` (régua de 72 h, chat), `repositorio-html` (Databricks Apps, FastAPI/Jinja/HTMX, MCP, volume, fugiu do Lakebase), `paralegal` (Pipedrive → Zapier → Pipefy, 20 a 30 mil tarefas/mês, ~1h30/dia, 15 caminhos), `conciliacao-omie` (ERP × lakehouse, 0% → 82%). SLA reescrito com RLS, drill até operador e forecast de vencimentos × pessoas. Régua ganhou o webhook de volta. Briefing ganhou o modelo que soltava chinês. revisaAI sem pagantes, números do CareerOS com corte 08/11 (341 contas, 338 análises, 58 adaptações, 217 cadastros em 06/11). Empresa primeiro em cada pilar. Pendências marcadas com `REVISAR` e `[Para você preencher.]`.
- **Feito (08/11):** F2 em rascunho na `f1-home`. Coleção `src/content/cases/` (schema em `src/content.config.ts`) e página `src/pages/cases/[id].astro` (rótulo, título, resumo, faixa de números, blocos Problema / Decisão / O que quebrou / Confiabilidade, anterior/próximo). Oito cases: SLA, antifraude, régua, briefing, Triagem, Radar, revisaAI e **Oráculo Flow** (novo, 009 em Construir). Índice da home ganhou frase de contexto sob cada título; linhas com case viram link. "O mercado de vagas de dados" segue sem link (é a F3).
- **Feito (08/11):** marca `dhiego.spinillo` com ponto laranja (`--accent`), favicon `ds.`, cabeçalho fixo na rolagem, **tema escuro desligado em teste** (bloco mantido em `Base.astro`, media query que nunca casa).
- **Corrigido (08/11):** 23 anos de carreira (não 20), 13 deles em startups; "Liderei times na Glovo, na Loft e na BHub". CV regenerado (`build.py`, 5 ocorrências) e copiado para `public/cv/`.
- **Pendente dele:** revisar os 8 textos; preencher **Confiabilidade** nos 4 profissionais e **O que quebrou** do briefing (marcados `[Para você preencher.]`); conferir os comentários `<!-- REVISAR -->` (SLA: ligação com a inconsistência de responsáveis e como o painel abria o atraso; antifraude: portarias públicas); aprovar as analogias (happy hour, elevador, academia, gabarito, prova oral, padaria, síndico); números públicos do revisaAI (300+ contas, 7 pagantes); decidir tema claro fixo ou não; "painel para ~50 gestores" no SLA é o mesmo painel?
- **Próxima ação:** ▶️ revisão dele dos cases → ajustes → merge na main → T1.4 (DNS).

<details>
<summary>Sessão 07/11/2026</summary>

- **Feito:** docs N2, plano F0 com mockups usando números reais da coleta de 04 a 06/11 (608 vagas, 417 empresas).
- **Validado:** T1.1: repo público github.com/dspinillo/spinillo-site criado, Pages por Actions, deploy verde, https://dspinillo.github.io/spinillo-site/ responde 200 com o título. DNS de spinillo.com.br levantado de fora: NS na UOL, MX com 5 registros Google, site da UOL desativado.
- **Decidido:** sem e-mail no site; contato só por LinkedIn e GitHub, com ícones.
- **Decidido:** eixo "FAÇO A OPERAÇÃO RODAR MELHOR <COM DADOS, AUTOMAÇÃO E IA>" com índice em três verbos (Enxergar, Automatizar, Construir); painel começa pela foto da semana.
- **Decidido (07/11):** sem foto (o leitor já viu o rosto no LinkedIn; a E é tipográfica); valor da Loft liberado; CV para baixar = versão nova mesclando Business Architect com Dados-IA, gerada em `~/Documents/Curriculos/fontes/build.py` na T1.3.
- **T1.2/T1.3 (branch `f1-home`, NÃO publicada):** layout da direção E com tema claro e escuro (segue o sistema), header com âncoras e ícones LinkedIn/GitHub, home com título, faixa de empresas, índice dos três pilares (8 trabalhos, ainda sem página de case), seção Sobre e botão do CV. CV novo em `public/cv/dhiego-spinillo-cv.pdf` (variante `operacao` do build.py: sem telefone e sem e-mail, SLA "perto de 90%"). Actions atualizadas para checkout/setup-node v5 e upload-pages-artifact v4.
- **Decidido (07/11):** não publicar a F1 sozinha. O site só vai para a main (e para o domínio) com os cases da F2 prontos e validados por ele; sem pressa. As linhas do índice não clicam porque as páginas de case ainda não existem.
- **Pendente:** revisão do texto da home, do Sobre e do CV (inclusive o bullet da Loft sobre os ~R$ 100 mil das portarias, agora em CV público) e se os números ficam visíveis na home.
- **Próxima ação:** ▶️ F2 na branch `f1-home`: páginas de case (problema, decisão, resultado/o que quebrou, confiabilidade) para os 7 trabalhos que não são o painel, índice clicável. Profissionais (SLA, antifraude, régua, briefing): rascunho a partir dos números confirmados, confiabilidade vem dele. Pessoais (Triagem, Radar, revisaAI): rascunho completo. Depois: revisão dele → merge na main → T1.4 (DNS).

</details>
