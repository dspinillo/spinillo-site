---
titulo: Quando o ERP e o lakehouse não batem
resumo: "O financeiro dependia de exportação manual do ERP porque os números do lakehouse não fechavam com os dele. O problema não era a conta. Era a ingestão."
periodo: Head de Dados
sintese:
  problema: "Os contratos do ERP e os do lakehouse não batiam, e o financeiro exportava relatório na mão."
  feito: "Tratei a divergência como bug: conciliação contrato a contrato até achar IDs diferentes e joins errados na ingestão."
  resultado: "Validação de 0% para 82% dos contratos, com 99,9% de acurácia, e o fim da exportação manual."
numeros:
  - valor: "0% → 82%"
    rotulo: dos contratos validados entre ERP e lakehouse
  - valor: "99,9%"
    rotulo: de acurácia na base validada
  - valor: "0"
    rotulo: exportações manuais depois do ajuste
stack: [Omie, Databricks, Lakehouse, SQL]
figura:
  tipo: barras
  titulo: Contratos que batem entre o ERP e o lakehouse
  grupos:
    - titulo: Validação
      max: 100
      itens:
        - { rotulo: Antes, valor: 0, texto: "0%" }
        - { rotulo: Depois do ajuste, valor: 82, texto: "82%", tom: ink }
    - titulo: Acurácia na base validada
      max: 100
      itens:
        - { rotulo: Depois do ajuste, valor: 99.9, texto: "99,9%", tom: ink }
quebrou:
  texto: "[Para você preencher.] Os 18% que não validaram: o que eram, e o que se fez com eles?"
confiabilidade:
  texto: "[Para você preencher.] Como você mostrou ao financeiro que podia confiar? Por exemplo: relatório de conciliação recorrente, amostra conferida com eles, alerta quando a divergência voltava a subir."
revisar:
  - "confirmar o que são os 82% e os 99,9%, se a correção da ingestão foi do seu time ou da engenharia de dados, e se \"0 exportações manuais\" é verdade ou se sobrou alguma."
---

## Problema

O financeiro usava o Omie como ERP. Comparados com o lakehouse, os contratos não batiam. Sem confiar na base, o time exportava relatório do sistema na mão, e nada que dependesse desses dados podia ser automatizado.

## O que fiz

Antes de corrigir número, investiguei. Relatórios de conciliação, contrato por contrato, mostraram a causa: os IDs eram diferentes entre os dois lados, e alguns joins da ingestão casavam registros errados.

Era engenharia de dados, não regra de negócio. Com a causa na mão, a ingestão foi ajustada, e a base do lakehouse passou a ser a fonte.

> Quando nada bate, o problema raramente está na conta. Está no caminho do dado.
