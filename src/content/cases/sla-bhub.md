---
titulo: SLA de 60% para perto de 90%
resumo: "A área de dados não executa a operação. Mas dá para mostrar, todo dia e para cada gestor, onde o atraso nasce. Foi isso que mudou a conversa sobre SLA na BHub."
periodo: Head de Dados
numeros:
  - valor: "60%"
    rotulo: SLA quando cheguei
  - valor: "~90%"
    rotulo: com os rituais diários
  - valor: "~50"
    rotulo: gestores usando o painel
  - valor: "170 mil+"
    rotulo: tarefas acompanhadas
---

## Problema

O SLA da operação rodava na casa dos 60%. Saber que está ruim é fácil. Difícil é dizer onde.

Com uma carteira de cerca de 6 mil clientes e mais de 170 mil tarefas, a média esconde tudo. Um departamento atrasando muito e outros em dia dão o mesmo número que todos atrasando um pouco, e a solução de cada caso é completamente diferente.

## Decisão

Passei a mostrar todo dia onde o atraso nascia, num painel aberto para os gestores olharem a própria fila. Ele chegou a ser usado por cerca de 50 gestores, e a métrica entrou nos rituais diários de cada time. Com o atraso à vista de todo mundo, os rituais viraram a cobrança.

<!-- REVISAR: detalhar como o painel abria o atraso (departamento, responsável, cliente?) com as palavras dele. -->

**Resultado.** O SLA subiu mês a mês, da casa dos 60% até perto de 90%. Quem fez o SLA subir foi a operação. O papel do time de dados foi mostrar, todo dia, onde o atraso estava nascendo.

## O que quebrou

**O responsável errado.** Para cobrar uma tarefa atrasada, é preciso saber de quem ela é. A base de responsáveis por cliente não batia com o mapa de alocação dos times: em meados de 80% da carteira havia alguma inconsistência. Montei um acompanhamento diário dessa divergência, e as áreas foram corrigindo. Em três meses, caiu para meados de 40%, pela metade.

<!-- REVISAR: confirmar se a correção dos responsáveis andou junto com o trabalho do SLA. Se foi outra frente, este bloco sai. -->

## Confiabilidade

**[Para você preencher.]** Como você garantiu que o número do painel era o mesmo que a operação via? Exemplos do que vale contar: conferência por amostra com a operação, regra de cálculo do SLA acordada com os gestores, o que fazia uma tarefa entrar ou sair da conta.
