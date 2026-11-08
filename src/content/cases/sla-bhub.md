---
titulo: SLA de 60% para perto de 90%
resumo: "A área de dados não executa a operação. Mas dá para mostrar, todo dia e para cada gestor, onde o atraso nasce e onde ele vai nascer na semana que vem. Foi isso que mudou a conversa sobre SLA na BHub."
periodo: Head de Dados
sintese:
  problema: "O SLA rodava na casa dos 60%, e ninguém conseguia dizer onde o atraso nascia."
  feito: "Um painel diário com o atraso de hoje, aberto até o operador, e o da semana que vem, num forecast."
  resultado: "Com os rituais da operação em cima dele, o SLA chegou perto de 90%."
numeros:
  - valor: "60%"
    rotulo: SLA quando cheguei
  - valor: "~90%"
    rotulo: com os rituais diários
  - valor: "~50"
    rotulo: gestores usando o painel
  - valor: "170 mil+"
    rotulo: tarefas acompanhadas
stack: [Databricks Apps, Lakehouse, SQL, Claude Code, GitHub]
quebrou:
  titulo: O responsável errado.
  texto: "Para cobrar uma tarefa, é preciso saber de quem ela é. A base de responsáveis não batia com a alocação dos times em meados de 80% da carteira. Um acompanhamento diário da divergência levou esse número para meados de 40% em três meses."
confiabilidade:
  texto: "[Para você preencher.] Como você garantiu que o número do painel era o mesmo que a operação via? Por exemplo: conferência por amostra, regra de cálculo acordada com os gestores, o que fazia uma tarefa entrar ou sair da conta."
revisar:
  - "confirmar se a correção dos responsáveis andou junto com o trabalho do SLA. Se foi outra frente, o cartão sai. Nas notas consta chat de IA também neste painel: entra aqui ou fica só no de guias?"
---

## Problema

Com cerca de 6 mil clientes e mais de 170 mil tarefas, a média esconde tudo. Um departamento muito atrasado e os outros em dia dão o mesmo número que todos um pouco atrasados.

E o número do dia engana. Estar com 90% no prazo no dia 8 parece ótimo, mas talvez só uma fração do mês tenha vencido até ali.

## O que fiz

Um painel no Databricks Apps, em cima do lakehouse, que responde a duas perguntas:

- **Onde está o atraso hoje.** Por departamento (contábil, fiscal e DP): no prazo, fora do prazo ou em aberto. Cada pessoa vê o que é seu. O gerente desce até o operador; o coordenador vê a própria equipe.
- **Onde ele vai estar.** Tudo o que vai vencer, dia a dia, dividido pelas pessoas de cada carteira. Um pico de 100 tarefas por analista se resolve com antecedência, nunca no dia.

Cerca de 50 gestores usavam o painel, e ele entrou nos rituais diários. Quem fez o SLA subir foi a operação. O papel dos dados foi mostrar onde.

> Olhando para frente, o pico deixou de ser surpresa.

## O que o forecast revelou

Muita tarefa vencia no mesmo dia sem motivo legal. Era configuração da ferramenta de tarefas. Os prazos foram diluídos ao longo do mês, sempre dentro do vencimento legal, e o trabalho parou de chegar em ondas.
