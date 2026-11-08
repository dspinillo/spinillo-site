---
titulo: Régua dos certificados
resumo: "Na linha de certificados digitais que criei do zero na BHub, o follow-up dos certificados vencendo tomava cerca de 5 horas por dia de uma pessoa. Virou uma régua automática, sem contratar ninguém."
periodo: Business Architect
numeros:
  - valor: "5 h → 30 min"
    rotulo: de follow-up manual por dia
  - valor: "60 a 70 mil"
    rotulo: tarefas por mês só nessa régua
  - valor: "~5 mil"
    rotulo: clientes na linha de certificados
  - valor: "0"
    rotulo: contratações para dar conta
---

## Problema

Certificado digital vence, e cliente esquece. Quando a linha de certificados cresceu para cerca de 5 mil clientes, o acompanhamento de quem estava vencido, quem ia vencer e quem nem tinha certificado virou trabalho braçal: lista na mão, e-mail um por um, cerca de 5 horas por dia.

Dava para resolver contratando. Mas contratar para copiar e colar e-mail é como contratar alguém para apertar o botão do elevador.

## Decisão

Montei a régua inteira com as ferramentas que a empresa já tinha:

1. Toda semana, uma consulta no Databricks gera a lista de vencidos, a vencer e sem certificado.
2. A lista vai para uma planilha, que dispara um webhook.
3. O Zapier percorre cada cliente, cria o card no Pipefy e manda o e-mail certo para cada situação.

O follow-up manual caiu de cerca de 5 horas para 30 minutos por dia. Só essa régua rodava de 60 a 70 mil tarefas por mês, dentro das mais de 100 mil que as automações da frente executavam.

## O que quebrou

**O primeiro disparo grande.** No primeiro envio de cerca de mil e-mails, usamos o servidor de e-mail do Google. Ele travou depois de 200 ou 300 e, de quebra, bloqueou o envio de todos os outros projetos da mesma conta.

Um engenheiro sugeriu o SendGrid, uma plataforma feita para envio em volume. Migrei o disparo para a API dele em dois dias, e a régua voltou a rodar sem travar.

A lição: ferramenta de escritório aguenta o piloto. Para escala, o envio precisa de um serviço feito para isso desde o começo.

## Confiabilidade

**[Para você preencher.]** Como você garantiu que o cliente certo recebia o e-mail certo? Exemplos do que vale contar: conferência da lista do Databricks contra a base de certificados, teste com uma amostra antes de ligar a régua, o que acontecia quando um card dava erro no Pipefy.
