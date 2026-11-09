---
titulo: Régua dos certificados
resumo: "Na linha de certificados digitais que criei do zero na BHub, o follow-up dos certificados vencendo tomava cerca de 5 horas por dia de uma pessoa. Virou uma régua automática, sem contratar ninguém."
periodo: Business Architect
sintese:
  problema: "Com cerca de 5 mil clientes, acompanhar certificado vencendo tomava 5 horas por dia de uma pessoa."
  feito: "Uma régua do dado ao e-mail, e de volta: a resposta do cliente preenche o card sozinha."
  resultado: "O follow-up caiu para 30 minutos por dia, sem contratar ninguém."
numeros:
  - valor: "5 h → 30 min"
    rotulo: de follow-up manual por dia
  - valor: "60 a 70 mil"
    rotulo: tarefas por mês só nessa régua
  - valor: "~5 mil"
    rotulo: clientes na linha de certificados
  - valor: "0"
    rotulo: contratações para dar conta
stack: [Databricks, SQL, Google Sheets, Zapier, Pipefy, SendGrid]
figura:
  tipo: fluxo
  titulo: A régua, toda semana
  etapas:
    - { nome: Databricks, nota: "A consulta separa vencidos, a vencer e sem certificado." }
    - { nome: Planilha, nota: "Recebe a lista e dispara um webhook." }
    - { nome: Zapier, nota: "Percorre cliente por cliente.", destaque: true }
    - { nome: Pipefy, nota: "Um card por cliente, na etapa certa." }
    - { nome: SendGrid, nota: "O e-mail certo para cada situação." }
  volta: "Quando o cliente responde, um webhook atualiza o card sozinho: quantos follow-ups foram enviados, a data do último, se o cliente respondeu e quando."
quebrou:
  titulo: O primeiro disparo grande.
  texto: "No primeiro envio, de cerca de mil e-mails, o servidor do Google travou depois de 200 ou 300 e bloqueou o envio de todos os projetos da conta. Por sugestão de um engenheiro, migrei para a API do SendGrid em dois dias. Ferramenta de escritório aguenta o piloto. Escala pede serviço feito para isso."
confiabilidade:
  texto: "A régua usava a base oficial de contatos de clientes da empresa, e a premissa era que o cadastro estava certo. Quando o contato errado recebia e respondia, o pedido de correção ia para o cadastro, não para a régua. Assim a fonte melhorava com o uso, em vez de cada automação manter a sua própria lista."
---

## Problema

Certificado digital vence, e cliente esquece. Com cerca de 5 mil clientes, acompanhar quem estava vencido, quem ia vencer e quem nem tinha certificado virou lista na mão e e-mail um por um.

Dava para contratar. Mas contratar para copiar e colar e-mail é como contratar alguém para apertar o botão do elevador.

## O que fiz

A régua inteira com as ferramentas que a empresa já tinha, cuidando da ida e da volta. Ninguém precisa abrir caixa de entrada para atualizar o Pipefy.

Só essa régua rodava de 60 a 70 mil tarefas por mês, dentro das cerca de 100 mil da frente, somando a esteira do paralegal.

> A automação que só manda e-mail resolve metade. A outra metade é ler a resposta.
