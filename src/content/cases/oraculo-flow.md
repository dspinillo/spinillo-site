---
titulo: Oráculo Flow
resumo: "Como eu toco vários projetos sozinho com IA sem perder o fio. Uma convenção, publicada como plugin do Claude Code, em que a memória do projeto mora nos documentos e não na conversa com o modelo."
periodo: jul/2026 até hoje
sintese:
  problema: "Com IA, começar projeto ficou barato e retomar ficou caro: o modelo esquece tudo quando a conversa acaba."
  feito: "Uma convenção em que a memória mora nos documentos, e cada agente tem um papel com contrato."
  resultado: "Qualquer sessão retoma qualquer projeto lendo dois arquivos. Virou plugin público do Claude Code."
numeros:
  - valor: "3"
    rotulo: portes de projeto, com docs sob medida
  - valor: "6"
    rotulo: papéis de agente com contrato
  - valor: "0"
    rotulo: tokens para checar as regras
  - valor: "94%"
    rotulo: dos tokens de entrada eram contexto reenviado
stack: [Claude Code, Codex, Markdown, GitHub]
figura:
  tipo: arvore
  titulo: A memória de um projeto, em arquivos
  arquivos:
    - { nome: "projeto/", nota: "Qualquer sessão, minha ou de um agente, começa por aqui." }
    - { nome: STATUS.md, nivel: 1, destaque: true, nota: "Onde paramos?" }
    - { nome: HANDOFF.md, nivel: 1, destaque: true, nota: "Como retomar, passo a passo?" }
    - { nome: ROADMAP.md, nivel: 1, nota: "O que vem depois?" }
    - { nome: CONTEXT.md, nivel: 1, nota: "O que cada palavra quer dizer aqui?" }
    - { nome: LESSONS.md, nivel: 1, nota: "O que já deu errado e não pode repetir?" }
    - { nome: decisions/, nivel: 1, nota: "Por que foi assim, e quais alternativas perderam?" }
  legenda: "É a estrutura deste site, aberta no GitHub. Os dois arquivos marcados bastam para retomar o projeto. O kit completo é para produto; um experimento leva só os dois."
quebrou:
  titulo: A cerimônia completa.
  texto: "No Radar de Vagas, rodei o ciclo inteiro em duas tarefas pequenas e gastei cerca de 1,5 milhão de tokens. Era chamar o síndico, o zelador e o eletricista para trocar uma lâmpada. Nasceu um modo enxuto. O que não saiu foi o testador independente: ele acha defeito real."
confiabilidade:
  texto: "Os projetos públicos daqui (Radar de Vagas, este site) seguem a convenção, com os documentos abertos no GitHub. O verificador das regras roda sem IA, então a mesma regra dá o mesmo resultado toda vez."
links:
  - rotulo: Código no GitHub
    url: https://github.com/dspinillo/oraculo-flow
revisar:
  - "Quando os hooks entrarem no plugin público (tarefa no ~/oraculo-flow), trocar o texto para dizer que vêm com o plugin."
---

## Problema

Tenho vários projetos andando ao mesmo tempo, cada um parado num ponto diferente. Sem método, cada sessão nova começa com meia hora de "onde a gente estava mesmo?", e decisão da semana passada volta para a mesa como se fosse nova.

## O que fiz

Uma convenção com uma premissa só: o modelo esquece, o repositório não.

- **Documento por porte.** Experimento leva dois arquivos; produto leva o kit completo. Cada documento responde uma pergunta só.
- **Toda decisão guarda as alternativas que perderam.** Sem elas, a discussão volta.
- **Regras que se verificam sozinhas.** Um script confere o mecânico (documento faltando, link quebrado) e falha se algo estiver fora.

Este site passou por isso: a direção visual saiu da segunda rodada de opções de tela.

> O modelo esquece. O repositório não.

## O custo de lembrar demais

O outro lado do problema apareceu quando medi o consumo de setembro: 1,93 bilhão de tokens de entrada no mês, e 94% deles era contexto reenviado, não pergunta nova. Sessão longa é cara porque cada mensagem carrega tudo o que veio antes.

Não dava para depender de eu lembrar. Pus dois avisos automáticos no Claude Code:

- **A cada mensagem**, um hook mede o tamanho da sessão. Passou de 5 MB, o próprio agente me avisa que é hora de fechar a tarefa e abrir sessão nova. Passou de 15 MB, avisa de novo, mais firme. Cada aviso aparece uma vez só.
- **Quando o Claude Code compacta a conversa sozinho**, por ter batido o limite, outro hook avisa na hora. É o sinal mais forte que existe.

Nenhum dos dois bloqueia nada. Eles só fazem o agente dizer, em uma frase, o que eu deveria ter notado. Como os documentos guardam onde paramos, abrir uma sessão nova não custa nada.

