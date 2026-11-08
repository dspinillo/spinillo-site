---
titulo: Antifraude no canal de corretores
resumo: "Na Loft, corretores parceiros ganhavam incentivo por visita e por proposta. Onde tem prêmio por volume, alguém aprende a fabricar volume. Montei a célula que pegava os padrões."
periodo: Analytics e Payments
numeros:
  - valor: "R$ 30 a 50 mil"
    rotulo: por mês em incentivos indevidos barrados
  - valor: "R$ 5 a 8 mi"
    rotulo: por ano no programa de incentivos
  - valor: "4"
    rotulo: tipos de fraude mapeados
  - valor: "16"
    rotulo: pessoas no time
---

## Problema

O canal de corretores da Loft funcionava com incentivo: comissões e premiações que somavam de R$ 5 a 8 milhões por ano. Meu time, de 16 pessoas entre Payments e Analytics, cuidava do repasse e do analytics de funil e conversão desse canal.

Programa de incentivo é como happy hour com bebida liberada: a maioria aproveita do jeito certo, e uns poucos levam garrafa para casa. Pagar por visita e por proposta é justo. Só que cria o incentivo para fabricar visita e proposta.

## Decisão

Separei três pessoas para Analytics e antifraude e fomos atrás dos padrões no próprio funil:

- **Visita fantasma.** O corretor agendava visita com cliente que não existia e dava como realizada. O sinal estava no funil: muitas visitas, sempre com os mesmos clientes.
- **Proposta fria.** Propostas 30% ou mais abaixo do valor do imóvel, feitas para ganhar o incentivo por proposta, sem chance real de fechar.
- **Troca do corretor indicador.** Alguém de dentro trocava no CRM o corretor que tinha indicado o cliente. Montei um alerta que guardava o histórico, comparava todo dia e avisava no Slack a cada mudança.

**Resultado.** Só as regras de visita fantasma e proposta fria evitaram de R$ 30 a 50 mil por mês em incentivos indevidos.

## O que quebrou

**As portarias.** O quarto caso apareceu pelo lado de fora. Um parceiro reclamou que não tinha recebido. Fui nos logs de ajuste e achei contas bancárias e destinatários alterados, num total de cerca de R$ 100 mil, já pagos. Dimensionei o montante e o período, montei o dossiê e levei para o Jurídico e o Compliance. Ainda deu para barrar cerca de R$ 5 mil.

Esse controle não era todo do meu time, mas a lição ficou: regra que olha o funil pega quem fabrica volume, e não pega quem mexe no destino do dinheiro. Para isso, o alerta precisa estar no cadastro, antes do pagamento.

<!-- REVISAR: o caso das portarias é público aqui e no CV. Decisão dele se fica. -->

## Confiabilidade

**[Para você preencher.]** Como você evitou barrar corretor honesto? Exemplos do que vale contar: quem revisava o caso antes do bloqueio, quantos alertas viravam bloqueio de fato, como o valor de R$ 30 a 50 mil foi calculado.
