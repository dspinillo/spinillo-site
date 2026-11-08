---
titulo: Guias com folga, não só no prazo
resumo: "Tarefa interna atrasada a operação sente. Guia atrasada o cliente sente. Montei um painel só das guias, com uma régua mais exigente que o prazo legal e um chat para o gestor conversar com o dado."
periodo: Head de Dados
sintese:
  problema: "O SLA de tarefas misturava trabalho interno com o que o cliente recebe, e entregar no último dia contava como sucesso."
  feito: "Um painel só das guias, com uma meta nova: entregar com 72 horas de folga. E um chat para perguntar em vez de navegar."
  resultado: "A conversa saiu de “entregou no prazo?” para “deu tempo de o cliente se planejar?”."
numeros:
  - valor: "72 h"
    rotulo: de antecedência como meta
  - valor: "3"
    rotulo: situações, com folga, no prazo e fora
  - valor: "1 pergunta"
    rotulo: no lugar de 4 ou 5 abas
stack: [Google Apps Script, Databricks, Lakehouse, SQL, IA]
figura:
  tipo: colunas
  titulo: Guias entregues, por dias antes do vencimento
  faixas:
    - { texto: "Com folga", de: 1, ate: 5 }
    - { texto: "No prazo", de: 6, ate: 8 }
    - { texto: "Fora", de: 9, ate: 11 }
  colunas:
    - { rotulo: "7d", valor: 5, tom: ink }
    - { rotulo: "6d", valor: 6, tom: ink }
    - { rotulo: "5d", valor: 7, tom: ink }
    - { rotulo: "4d", valor: 8, tom: ink }
    - { rotulo: "3d", valor: 10, tom: ink }
    - { rotulo: "2d", valor: 13 }
    - { rotulo: "1d", valor: 18 }
    - { rotulo: "no dia", valor: 40, tom: accent }
    - { rotulo: "+1", valor: 7 }
    - { rotulo: "+2", valor: 4 }
    - { rotulo: "+3", valor: 2 }
  notas:
    - { texto: "**No dia do vencimento:** a maior pilha. Conta como no prazo, mas o cliente não tem tempo de se planejar.", de: 1, ate: 7, topo: 6, tom: accent }
  legenda: "Dados ilustrativos. O desenho segue o que o painel mostrava: muita entrega concentrada no último dia. A meta passou a ser a área preta, 72 horas ou mais antes."
quebrou:
  texto: "[Para você preencher.] O que deu errado? Candidatos: cache servindo dado velho, limite de execução do Apps Script, o chat respondendo algo que a tabela não sustentava."
confiabilidade:
  texto: "[Para você preencher.] Como você garantiu que a resposta do chat batia com o painel? Por exemplo: o chat lia os mesmos dados agregados, os números vinham de consulta e não da IA, alguém conferiu respostas por amostra."
revisar:
  - "explicar a camada de dados. Como o Apps Script lia o lakehouse (API SQL do Databricks? export agendado?), como era o cache (CacheService? planilha intermediária?), de quanto em quanto tempo atualizava e por que o cache foi necessário."
---

## Problema

O painel de SLA olhava todas as tarefas, inclusive as internas. A operação podia estar bem em tarefas e mal numa guia que importa muito, como o DAS, numa carteira específica.

E entregar no dia do vencimento conta como "no prazo", mas deixa o cliente sem tempo e o time acordando com milhares de entregas para o mesmo dia.

## O que fiz

Um painel só das guias, em Google Apps Script, lendo o lakehouse do Databricks, com três situações:

- **Com folga:** 72 horas ou mais antes da data prometida. Virou a meta.
- **No prazo:** até o vencimento, sem folga.
- **Fora do prazo:** o atraso.

Ele desce da empresa por departamento, carteira, origem do cliente e tipo de guia, até o cliente. Não chega ao operador: a pergunta aqui é o que o cliente sente, não quem atrasou.

> Entregar no prazo é o mínimo. Entregar com folga é o serviço.

## Um chat no lugar das abas

Mesmo mastigado, o painel tinha quatro ou cinco abas. Coloquei um chat de IA para o gestor perguntar direto: o que piorou, onde estão os pontos de atenção, qual grupo de clientes preocupa. Quando a resposta é uma tabela, dá para clicar e seguir descendo até o cliente.
