---
titulo: Triagem com confiança
resumo: "Quando dá para deixar a IA classificar reclamação de cliente sozinha, e quando ela precisa mandar para uma pessoa? Montei uma prova pequena com gabarito feito à mão para medir isso."
periodo: set/2026
sintese:
  problema: "Média de acerto não diz à operação em quais casos dá para deixar a IA decidir sozinha."
  feito: "Uma prova com 200 avaliações rotuladas à mão, três modelos e uma regra: acima de 0,9 de confiança decide, abaixo vai para uma pessoa."
  resultado: "Mesmo acerto que um LLM comum, 50 vezes mais barato e 14 vezes mais rápido, resolvendo 72% da fila sozinho."
numeros:
  - valor: "89%"
    rotulo: acerto do melhor modelo
  - valor: "72%"
    rotulo: resolvidas sozinhas, com 5% de erro
  - valor: "US$ 0,03"
    rotulo: por mil avaliações
  - valor: "6 de 12"
    rotulo: erros em comum eram do gabarito
stack: [Python, uv, TypeSafe API, OpenRouter, Laya]
figura:
  tipo: barras
  titulo: Três modelos na mesma prova
  grupos:
    - titulo: Acerto
      max: 100
      itens:
        - { rotulo: Jev, valor: 89, texto: "89%", tom: ink }
        - { rotulo: LLM comum, valor: 88, texto: "88%" }
        - { rotulo: Laya treinado, valor: 82, texto: "82%" }
        - { rotulo: Laya sem treino, valor: 12, texto: "12%" }
    - titulo: Custo por mil avaliações
      itens:
        - { rotulo: Jev, valor: 0.03, texto: "US$ 0,03", tom: accent }
        - { rotulo: LLM comum, valor: 1.53, texto: "US$ 1,53" }
    - titulo: Tempo por avaliação
      itens:
        - { rotulo: Jev, valor: 0.3, texto: "0,3 s", tom: accent }
        - { rotulo: LLM comum, valor: 4.2, texto: "4,2 s" }
  legenda: "200 avaliações reais da Olist, base pública em português, rotuladas à mão em nove motivos. O gabarito nunca serviu de treino."
quebrou:
  titulo: O gabarito.
  texto: "Revi às cegas os 12 casos em que os dois melhores modelos erraram igual. Em 6 deles, quem tinha errado era eu. E arrependimento ninguém acertou: quem desistiu da compra escreve parecido com quem teve problema."
confiabilidade:
  texto: "Gabarito separado de qualquer treino, mesma pergunta e mesmas regras para os três, erros em comum revistos às cegas. É um experimento pequeno, não um benchmark: 200 avaliações, uma base, um idioma. O preço do Jev vem de tabela de terceiros."
---

## Problema

Classificar reclamação com IA é fácil numa demo e difícil numa operação. A pergunta que importa é em quais casos o modelo decide sozinho e em quais pede ajuda.

Para isso, a confiança declarada precisa ser honesta. Um modelo que diz 95% de certeza e erra metade é pior que um que erra mais e avisa.

## O que fiz

Rotulei 200 avaliações em nove motivos, de atraso a arrependimento, e coloquei três concorrentes na mesma prova: **Jev**, um modelo fechado de decisão tipada; **um LLM comum**, como base; e **Laya**, um modelo aberto que roda na minha máquina.

Medi acerto, calibração, tempo e custo, e simulei a regra da operação. Os dois melhores foram honestos: acima de 90% de confiança, acertaram 95% e 98%. O Laya, depois de aprender com 3 mil avaliações classificadas pelo Jev, foi de 12% a 82%. Serve quando o dado não pode sair de casa.

> Antes de culpar o aluno, vale conferir o gabarito.
