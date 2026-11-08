# spinillo-site · Status

> Última atualização: **07/11/2026** · frente ativa: F1 · HEAD: `a344bb7`
> Legenda: ✅ feito · 🟡 parcial · ▶️ próximo · ⏸️ aguardando · 🔒 bloqueado · ⬜ não iniciado

## Estado atual (leia primeiro)

Projeto criado em 07/11/2026. Plano visual F0 com duas rodadas de design; escolhida a direção E · Índice (ADR 0002). Nenhum código ainda.

| Bloco | Estado |
|---|---|
| F0 · plano e direção | ✅ direção E, eixo em três pilares |
| F1 · no ar no domínio | 🟡 T1.1 ✅ no ar · T1.2 e T1.3 prontas na branch local `f1-home`, aguardando revisão |
| F2 · cases dos três pilares | ⬜ |
| F3 · painel do mercado | ⬜ |
| F4 · distribuição | ⬜ |

## Onde paramos (última sessão)

- **Feito:** docs N2, plano F0 com mockups usando números reais da coleta de 04 a 06/11 (608 vagas, 417 empresas).
- **Validado:** T1.1: repo público github.com/dspinillo/spinillo-site criado, Pages por Actions, deploy verde, https://dspinillo.github.io/spinillo-site/ responde 200 com o título. DNS de spinillo.com.br levantado de fora: NS na UOL, MX com 5 registros Google, site da UOL desativado.
- **Decidido:** sem e-mail no site; contato só por LinkedIn e GitHub, com ícones.
- **Decidido:** eixo "FAÇO A OPERAÇÃO RODAR MELHOR <COM DADOS, AUTOMAÇÃO E IA>" com índice em três verbos (Enxergar, Automatizar, Construir); painel começa pela foto da semana.
- **Decidido (07/11):** sem foto (o leitor já viu o rosto no LinkedIn; a E é tipográfica); valor da Loft liberado; CV para baixar = versão nova mesclando Business Architect com Dados-IA, gerada em `~/Documents/Curriculos/fontes/build.py` na T1.3.
- **T1.2/T1.3 (branch `f1-home`, NÃO publicada):** layout da direção E com tema claro e escuro (segue o sistema), header com âncoras e ícones LinkedIn/GitHub, home com título, faixa de empresas, índice dos três pilares (8 trabalhos, ainda sem página de case), seção Sobre e botão do CV. CV novo em `public/cv/dhiego-spinillo-cv.pdf` (variante `operacao` do build.py: sem telefone e sem e-mail, SLA "perto de 90%"). Actions atualizadas para checkout/setup-node v5 e upload-pages-artifact v4.
- **Pendente:** revisão do texto da home, do Sobre e do CV pelo Dhiego; depois merge na main (deploy) e T1.4 (domínio).
- **Próxima ação:** ▶️ Dhiego revisa `f1-home` (npm run dev); aprovado → merge na main e T1.4 (DNS na UOL).
