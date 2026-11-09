---
titulo: Quando o ERP e o lakehouse não batem
resumo: "O financeiro dependia de exportação manual do ERP porque os números do lakehouse não fechavam com os dele. O problema não era a conta. Era a ingestão."
periodo: Head de Dados
sintese:
  problema: "Os contratos do ERP e os do lakehouse não batiam, e o financeiro exportava relatório na mão."
  feito: "Tratei a divergência como bug: conciliação contrato a contrato até achar IDs diferentes e joins errados na ingestão."
  resultado: "De 0% para 82% dos registros batendo, com 99,9% de acurácia nos valores, e o fim da exportação manual."
numeros:
  - valor: "0% → 82%"
    rotulo: dos registros batendo entre ERP e lakehouse
  - valor: "99,9%"
    rotulo: de acurácia nos valores
  - valor: "0"
    rotulo: exportações manuais depois do ajuste
stack: [Omie, Databricks, Lakehouse, SQL]
figura:
  tipo: barras
  titulo: Contratos que batem entre o ERP e o lakehouse
  grupos:
    - titulo: Registros batendo
      max: 100
      itens:
        - { rotulo: Antes, valor: 0, texto: "0%" }
        - { rotulo: Depois do ajuste, valor: 82, texto: "82%", tom: ink }
    - titulo: Acurácia nos valores
      max: 100
      itens:
        - { rotulo: Depois do ajuste, valor: 99.9, texto: "99,9%", tom: ink }
quebrou:
  texto: "[Para você preencher.] Os 18% que não validaram: o que eram, e o que se fez com eles?"
confiabilidade:
  texto: "Depois do ajuste, deixamos as bases rodando por uma semana lado a lado com o relatório do financeiro. Quando a quantidade de lançamentos e os valores totais bateram todos os dias, o time passou a usar a base do lakehouse."
revisar:
  - "Os 82% e os 99,9% vêm só do CV (\"82% dos registros, 99,9% de acurácia nos valores\"); nenhum documento explica os 18% restantes nem quem corrigiu a ingestão. O cartão de O que quebrou fica escondido até ele lembrar."
---

## Problema

O financeiro usava o Omie como ERP. Comparados com o lakehouse, os contratos não batiam. Sem confiar na base, o time exportava relatório do sistema na mão, e nada que dependesse desses dados podia ser automatizado.

## O que fiz

Antes de corrigir número, investiguei. Relatórios de conciliação, contrato por contrato, mostraram a causa: os IDs eram diferentes entre os dois lados, e alguns joins da ingestão casavam registros errados.

Era engenharia de dados, não regra de negócio. Com a causa na mão, a ingestão foi ajustada, e a base do lakehouse passou a ser a fonte.

> Quando nada bate, o problema raramente está na conta. Está no caminho do dado.
