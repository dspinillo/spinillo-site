---
titulo: A esteira do paralegal
resumo: "Venda no Pipedrive, operação no Pipefy, e os dois sistemas não conversavam. Liguei a esteira inteira do paralegal com o Zapier, da venda ao card preenchido."
periodo: Business Architect
sintese:
  problema: "A venda nascia no Pipedrive e a execução no Pipefy. Entre os dois, alguém copiando dado na mão."
  feito: "Um campo de origem e mais de 30 automações no Zapier ligando a esteira inteira, da venda ao card preenchido."
  resultado: "De 20 a 30 mil tarefas automáticas por mês e cerca de 1h30 a menos de trabalho manual por dia."
numeros:
  - valor: "20 a 30 mil"
    rotulo: tarefas automatizadas por mês
  - valor: "~1h30"
    rotulo: de trabalho manual a menos por dia
  - valor: "30+"
    rotulo: automações
  - valor: "15"
    rotulo: caminhos na automação mais complexa
stack: [Pipedrive, Zapier, Pipefy, SendGrid]
figura:
  tipo: fluxo
  titulo: Da venda ao card, sem copiar e colar
  etapas:
    - { nome: Pipedrive, nota: "A venda fecha. O ID do negócio vira a origem de tudo." }
    - { nome: Zapier, nota: "Escolhe o caminho pelo serviço vendido. Até 15 caminhos numa automação.", destaque: true }
    - { nome: Pipefy, nota: "Cards criados e preenchidos: cliente, serviço e detalhes da execução." }
    - { nome: SendGrid, nota: "Os e-mails de cada etapa saem sozinhos." }
  legenda: "Serviços cobertos: abertura de empresa e de offshore, filiais e inscrições, encerramento, mudança de endereço e registro de atas."
quebrou:
  texto: "[Para você preencher.] O que deu errado? Candidatos: card duplicado quando a venda era editada, um caminho do Zapier que não previa um tipo de serviço, limite de tarefas do plano do Zapier."
confiabilidade:
  texto: "[Para você preencher.] Como você sabia que a automação tinha rodado certo? Por exemplo: o ID do Pipedrive para conferir venda contra card, alerta de erro do Zapier, quem olhava as falhas."
---

## Problema

O paralegal da BHub tinha várias frentes: abertura de empresa e de offshore, filiais e inscrições, encerramentos, mudança de endereço e registro de atas.

A venda acontecia no Pipedrive, a execução no Pipefy, e os dois não se falavam. Cada venda virava alguém copiando dado de um lado para o outro, e a tarefa não dizia de qual venda tinha saído.

## O que fiz

Primeiro, o mais simples: um campo no Pipefy com o ID do negócio no Pipedrive. Toda tarefa passou a carregar a sua origem.

Em cima disso, a esteira inteira com o que a empresa já tinha. Fechou a venda, o Zapier cria os cards certos e preenche cliente, serviço e detalhes. Foram mais de 30 automações.

> Volume menor que o dos certificados, complexidade maior: cada serviço tem as suas etapas.
