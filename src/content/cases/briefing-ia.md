---
titulo: Briefing diário por IA
resumo: "Um painel com uma aba para cada métrica era completo e ninguém lia. Virou um resumo escrito por IA, entregue todo dia. A regra é simples: o SQL calcula, a IA escreve e cada frase aponta para a origem."
periodo: Head de Dados
sintese:
  problema: "Um Power BI com uma aba por métrica tinha tudo, e por isso ninguém lia."
  feito: "Um briefing diário em que o SQL calcula, a IA só escreve, e regras sem IA cuidam do que não pode errar."
  resultado: "O briefing virou a pauta principal das dailies da operação."
numeros:
  - valor: "~18"
    rotulo: modelos testados com dados reais
  - valor: "0"
    rotulo: números calculados pela IA
  - valor: "2"
    rotulo: ritmos, diário e semanal
stack: [Databricks, Lakehouse, SQL, OpenRouter, Google Apps Script]
figura:
  tipo: anotado
  titulo: Um briefing, por dentro
  cabecalho: "Terça, 8h · Fiscal"
  paragrafos:
    - "O SLA do fiscal fechou ontem em [[87%|sql]], [[3 pontos|sql]] abaixo da semana passada. A queda veio quase toda de uma carteira."
    - "Atenção para a Sul 2: [[41 tarefas|sql]] vencem amanhã, para [[3 pessoas|sql]]. Vale falar com [[Marina, coordenadora da carteira|regra]], antes do meio-dia."
    - "No resto do departamento, nada fora do normal."
  marcas:
    - { tipo: sql, rotulo: "Número: calculado pelo SQL, antes da IA entrar.", tom: ink }
    - { tipo: ia, rotulo: "Texto sem marca: escrito pela IA, com os números prontos.", tom: faint }
    - { tipo: regra, rotulo: "Pessoa citada: conferida por regra na base de People. Quem saiu da empresa não aparece.", tom: accent }
  legenda: "Exemplo fictício, no formato do briefing real. O job roda no Databricks com nova tentativa automática, e a chamada ao modelo tem um provedor reserva."
quebrou:
  titulo: O modelo que escapava para o chinês.
  texto: "Um dos modelos mais promissores, bom de texto e barato, às vezes soltava caracteres chineses no meio do português, e ainda demorava a responder. Num resumo lido de manhã pela gestão, uma vez basta para ninguém mais confiar. Saiu da disputa, e trocar de idioma virou critério fixo de avaliação."
confiabilidade:
  texto: "Duas camadas. Uma bateria de avaliações confere que o texto não inventa nada que não esteja no pacote de fatos. E a camada de código faz toda a conta antes, então a IA nunca tem a chance de errar um número: ela só o repete."
---

## Problema

A gestão tinha um Power BI com várias abas e mergulho em cada métrica. Estava tudo lá, e esse era o problema. O painel virou aquela academia que a gente paga e não vai.

O que o gestor queria saber de manhã cabia em poucas frases: o que mudou e o que precisa de atenção.

## O que fiz

Troquei o painel por um briefing escrito, com uma divisão rígida de trabalho. A IA nunca faz conta, e o que não pode errar é regra em código.

Antes de escolher, testei cerca de 18 modelos com dados reais: latência, custo, profundidade, alucinação e troca de idioma. Fiquei com dois, um rápido e barato para o diário e um mais capaz para o semanal.

> O SQL calcula, a IA escreve. Nunca o contrário.

## Como roda

Não é um chat. Todo dia de manhã, um job no Databricks monta um pacote de fatos para cada gestor, manda para o modelo pela OpenRouter, recebe o texto e grava numa tabela gold. O painel só lê essa tabela.

Por isso a latência não era crítica como num chat, mas importava: se o job atrasasse, o expediente começava sem o resumo do dia.
