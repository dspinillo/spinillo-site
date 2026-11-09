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
stack: [Databricks Apps, Lakehouse, dbt, SQL, IA, Claude Code, GitHub]
quebrou:
  titulo: O responsável errado.
  texto: "Para cobrar uma tarefa, é preciso saber de quem ela é. A base de responsáveis não batia com a alocação dos times em meados de 80% da carteira. Criei tabelas de snapshot e gold no dbt para acompanhar, dia a dia, a correção e as inconsistências. Em três meses, a divergência caiu para meados de 40%, junto com a subida do SLA."
confiabilidade:
  texto: "Todo dia eu conferia os jobs que atualizavam as tabelas do Gestta e, por consequência, os que alimentavam o lake nas camadas bronze, silver e gold. E comparava o volume de cada tabela com o do dia anterior. Um salto grande podia ser base nova ou sujeira. Uma queda grande, um arquivo que chegou incompleto na bronze. Número que muda demais de um dia para o outro é investigado antes de chegar ao gestor."
---

## Problema

Com cerca de 6 mil clientes e mais de 170 mil tarefas, a média esconde tudo. Um departamento muito atrasado e os outros em dia dão o mesmo número que todos um pouco atrasados.

E o número do dia engana. Estar com 90% no prazo no dia 8 parece ótimo, mas talvez só uma fração do mês tenha vencido até ali.

## O que fiz

Um painel no Databricks Apps, em cima do lakehouse, que responde a duas perguntas:

- **Onde está o atraso hoje.** Por departamento (contábil, fiscal e DP): no prazo, fora do prazo ou em aberto. Cada pessoa vê o que é seu. O gerente desce até o operador; o coordenador vê a própria equipe.
- **Onde ele vai estar.** Tudo o que vai vencer, dia a dia, dividido pelas pessoas de cada carteira. Um pico de 100 tarefas por analista se resolve com antecedência, nunca no dia.
- **Um chat em cima de tudo.** Em vez de navegar por abas, o gestor pergunta ao painel e recebe a resposta com os mesmos dados que ele já pode ver.

Cerca de 50 gestores usavam o painel, e ele entrou nos rituais diários. Quem fez o SLA subir foi a operação. O papel dos dados foi mostrar onde.

> Olhando para frente, o pico deixou de ser surpresa.

## O que o forecast revelou

Muita tarefa vencia no mesmo dia sem motivo legal. Era configuração da ferramenta de tarefas. Os prazos foram diluídos ao longo do mês, sempre dentro do vencimento legal, e o trabalho parou de chegar em ondas.
