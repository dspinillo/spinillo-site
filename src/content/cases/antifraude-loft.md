---
titulo: Antifraude no canal de corretores
resumo: "Na Loft, corretores parceiros ganhavam incentivo por visita e por proposta. Onde tem prêmio por volume, alguém aprende a fabricar volume. Montei a célula que pegava os padrões."
periodo: Analytics e Payments
sintese:
  problema: "Incentivo por visita e por proposta, de R$ 5 a 8 milhões por ano, criava o incentivo para fabricar visita e proposta."
  feito: "Uma célula de três pessoas caçando padrões no próprio funil, com regras e um alerta diário no Slack."
  resultado: "De R$ 30 a 50 mil por mês em incentivos indevidos barrados."
numeros:
  - valor: "R$ 30 a 50 mil"
    rotulo: por mês em incentivos indevidos barrados
  - valor: "R$ 5 a 8 mi"
    rotulo: por ano no programa de incentivos
  - valor: "4"
    rotulo: tipos de fraude mapeados
  - valor: "16"
    rotulo: pessoas no time
stack: [SQL, Databricks, Salesforce, Slack]
figura:
  tipo: funil
  titulo: Onde cada fraude aparecia no funil
  etapas:
    - { nome: Indicação, largura: 1, nota: "Troca do corretor indicador no CRM. Um alerta diário comparava o histórico e avisava no Slack." }
    - { nome: Visita, largura: 0.8, nota: "Visita fantasma: muitas visitas, sempre com os mesmos clientes." }
    - { nome: Proposta, largura: 0.6, nota: "Proposta fria: 30% ou mais abaixo do valor do imóvel, só para ganhar o incentivo." }
    - { nome: Pagamento, largura: 0.42, destaque: true, nota: "Conta bancária trocada nos ajustes. As regras do funil não olhavam para cá." }
  legenda: "As três primeiras foram pegas pelas regras. A quarta apareceu por fora, e é o cartão de O que quebrou."
quebrou:
  titulo: As portarias.
  texto: "Um parceiro reclamou que não tinha recebido. Nos logs de ajuste, achei contas bancárias e destinatários alterados, cerca de R$ 100 mil já pagos. Dimensionei, montei o dossiê para o Jurídico e o Compliance, e ainda deu para barrar cerca de R$ 5 mil. A lição: regra no funil pega quem fabrica volume, não quem mexe no destino do dinheiro. Esse alerta tem que estar no cadastro, antes do pagamento."
confiabilidade:
  texto: "Não era um modelo mirabolante, e não dá para cravar que nenhum honesto foi incomodado. Olhávamos corretores com conversão de visita e de proposta muito fora da média e da mediana, ou com propostas recorrentes bem abaixo do desconto normal, que ficava entre 15% e 20%. Quem chamava a atenção entrava numa espécie de quarentena: ficava sob observação, e a análise ia mais a fundo antes de qualquer bloqueio."
---

## Problema

O canal de corretores da Loft pagava comissões e premiações que somavam de R$ 5 a 8 milhões por ano. Meu time, de 16 pessoas entre Payments e Analytics, cuidava do repasse e do analytics de funil desse canal.

Programa de incentivo é como happy hour com bebida liberada: a maioria aproveita do jeito certo, e uns poucos levam garrafa para casa.

## O que fiz

Separei três pessoas para Analytics e antifraude, e fomos atrás dos padrões no próprio funil. Cada padrão virou uma regra, e a troca do indicador virou um alerta que guardava o histórico e avisava no Slack a cada mudança.

Só as regras de visita fantasma e proposta fria evitaram de R$ 30 a 50 mil por mês.

> Onde tem prêmio por volume, alguém aprende a fabricar volume.
