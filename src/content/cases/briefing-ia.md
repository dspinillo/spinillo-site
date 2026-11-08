---
titulo: Briefing diário por IA
resumo: "Um painel com uma aba para cada métrica era completo e ninguém lia. Virou um resumo escrito por IA, entregue todo dia. A regra é simples: o SQL calcula, a IA escreve e cada frase aponta para a origem."
periodo: Head de Dados
numeros:
  - valor: "~18"
    rotulo: modelos testados com dados reais
  - valor: "0"
    rotulo: números calculados pela IA
  - valor: "2"
    rotulo: ritmos, diário e semanal
---

## Problema

A gestão tinha um Power BI com várias abas e mergulho em cada métrica. Estava tudo lá, e esse era o problema: grande demais. O público foi desengajando, e o painel virou aquela academia que a gente paga e não vai.

O que o gestor queria saber de manhã cabia em poucas frases: o que mudou e o que precisa de atenção.

## Decisão

Troquei o painel por um briefing escrito, com uma divisão rígida de trabalho:

- **O SQL calcula.** Todo número sai de consultas no lakehouse do Databricks, antes de qualquer IA entrar.
- **A IA escreve.** O modelo recebe os números prontos e só redige o texto. Cada frase aponta para a métrica de onde saiu.
- **Regras sem IA onde não pode haver erro.** Pessoa que não está na base de People não aparece no briefing, para nunca citar alguém já desligado.

Cada gestor vê só a parte dele, com controle de acesso por usuário. O job roda no Databricks com nova tentativa automática, e a chamada ao modelo tem um provedor reserva.

Antes de escolher o modelo, testei cerca de 18 com dados reais, olhando latência, custo, profundidade do texto, alucinação e se ele escapava para outro idioma. Fiquei com dois: um modelo rápido e barato para o diário e um mais capaz para o semanal, que junta um volume maior.

**Resultado.** O briefing virou a principal pauta das dailies da operação, com retorno positivo dos gestores.

## O que quebrou

**[Para você preencher.]** O que deu errado no caminho? Candidatos: modelo que inventou ou trocou de idioma nos testes, frase que citou alguém que não devia (o que gerou a regra da base de People), resumo que errou o tom.

## Confiabilidade

**[Para você preencher.]** Como você conferia que o texto batia com os números? Exemplos do que vale contar: amostra de briefings revisada contra a consulta de origem, quem conferia nas primeiras semanas, o que acontecia quando a IA falhava.
