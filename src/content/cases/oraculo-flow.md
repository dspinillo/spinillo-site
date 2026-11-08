---
titulo: Oráculo Flow
resumo: "Como eu toco vários projetos sozinho com IA sem perder o fio. Uma convenção, publicada como plugin do Claude Code, em que a memória do projeto mora nos documentos e não na conversa com o modelo."
periodo: jul/2026 até hoje
numeros:
  - valor: "3"
    rotulo: portes de projeto, com docs sob medida
  - valor: "6"
    rotulo: papéis de agente com contrato
  - valor: "0"
    rotulo: tokens para checar as regras
links:
  - rotulo: Código no GitHub
    url: https://github.com/dspinillo/oraculo-flow
---

## Problema

Com IA, começar projeto ficou barato. Retomar é que ficou caro. O modelo esquece tudo quando a conversa acaba, e eu tenho vários projetos andando ao mesmo tempo, cada um parado num ponto diferente. Sem método, cada sessão nova começa com meia hora de "onde a gente estava mesmo?", e decisão tomada na semana passada volta para a mesa como se fosse nova.

## Decisão

Montei uma convenção com uma premissa só: o modelo esquece, o repositório não. Qualquer sessão, minha, do Claude ou do Codex, retoma qualquer projeto lendo dois arquivos: onde paramos e como retomar.

- **Documento por porte.** Experimento leva dois arquivos. Produto leva o kit completo, com decisões, lições e vocabulário. Cada documento responde uma pergunta só, e é isso que impede a documentação de virar pântano.
- **Plano visual antes de código.** Nenhum projeto começa sem uma página com o plano, a arquitetura e duas ou três opções de tela para eu escolher. Escolher olhando tela é mais barato que refazer depois. Este site passou por isso: a direção visual saiu da segunda rodada de opções.
- **Agentes com papel definido.** Um planeja, um constrói, um testa e um documenta. Quem testa não corrige, só dá o veredito com a prova. Quem documenta só registra o que o teste comprovou, nunca o otimismo de quem construiu.
- **Regras que se verificam sozinhas.** Um script confere o mecânico (documento obrigatório faltando, decisão sem alternativa, link quebrado) e falha se algo estiver fora. Pedir a um agente para conferir custaria a leitura inteira dos documentos.

Virou plugin do Claude Code, público, e o mesmo texto serve ao Codex.

## O que quebrou

**A cerimônia completa.** No Radar de Vagas, rodei o ciclo inteiro (construtor, testador, volta, novo teste) em duas tarefas pequenas. Custou cerca de 1,5 milhão de tokens em agentes. Era como chamar o síndico, o zelador e o eletricista para trocar uma lâmpada.

A convenção ganhou um modo enxuto: um construtor e uma rodada de teste por tarefa, correção pequena feita direto, e arquiteto e segunda opinião de outro modelo só quando a mudança mexe na estrutura. O que não saiu foi o testador independente. Ele achou defeitos reais que os testes de quem construiu não pegavam.

## Confiabilidade

- Os projetos públicos que mostro aqui (Radar de Vagas, este site) seguem a convenção, e os documentos estão abertos no GitHub para conferir.
- O verificador roda sem IA, então a mesma regra dá o mesmo resultado toda vez.
- Toda decisão registrada guarda as alternativas que perderam. Sem elas, a discussão volta.
