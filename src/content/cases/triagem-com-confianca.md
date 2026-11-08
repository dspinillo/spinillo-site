---
titulo: Triagem com confiança
resumo: "Quando dá para deixar a IA classificar reclamação de cliente sozinha, e quando ela precisa mandar para uma pessoa? Montei uma prova pequena com gabarito feito à mão para medir isso."
periodo: set/2026
numeros:
  - valor: "89%"
    rotulo: acerto do melhor modelo
  - valor: "72%"
    rotulo: resolvidas sozinhas, com 5% de erro
  - valor: "US$ 0,03"
    rotulo: por mil avaliações
  - valor: "6 de 12"
    rotulo: erros em comum eram do gabarito
---

## Problema

Classificar reclamação com IA é fácil de mostrar numa demo e difícil de pôr numa operação. Para quem toca a fila, a média de acerto diz pouco. A pergunta que importa é em quais casos eu posso deixar o modelo decidir sozinho e em quais ele tem que pedir ajuda.

Para isso, a confiança que o modelo declara precisa ser honesta. Um modelo que diz 95% de certeza e erra metade das vezes é pior que um modelo que erra mais e avisa.

## Decisão

Peguei 200 avaliações reais de clientes da Olist (base pública, em português) e rotulei uma por uma em nove motivos: atraso, defeito, produto errado, faltou item, atendimento, elogio, arrependimento, qualidade e outro. Esse gabarito nunca serviu de treino para ninguém. Ele é a prova corrigida.

Coloquei três concorrentes na mesma prova, com a mesma pergunta e as mesmas regras de desempate:

- **Jev**, um modelo fechado de decisão tipada, chamado por API;
- **um LLM comum** (Gemini Flash), como base de comparação;
- **Laya**, um modelo aberto que roda na minha máquina.

Medi acerto, calibração (se 90% de confiança acerta 90% das vezes), tempo e custo. E simulei a regra de operação: acima de 0,9 de confiança o modelo decide, abaixo vai para uma pessoa.

**Resultado.** O Jev acertou 89% e o LLM, 88%. Os dois foram honestos: acima de 90% de confiança, acertaram 95% e 98%. A diferença ficou no resto. O Jev respondeu em 0,3 s, a cerca de US$ 0,03 por mil avaliações; o LLM levou 4,2 s e custou US$ 1,53 por mil. Com o corte em 0,9, o Jev resolveu 72% da fila sozinho com 5% de erro, e o LLM, 65% com 2%.

O Laya sem treino acertou 12%. Depois de aprender com 3 mil avaliações classificadas pelo Jev (US$ 0,08 de professor), chegou a 82%. Serve para quando o dado não pode sair de casa.

## O que quebrou

**O gabarito.** Revi às cegas os 12 casos em que os dois melhores modelos erraram igual. Em 6 deles, quem tinha errado era eu. A categoria qualidade também nasceu no meio da rotulagem, porque "outro" estava virando a gaveta da bagunça.

**Arrependimento.** Ninguém acertou. Nas avaliações escolhidas a dedo para esse motivo, o Jev achou 1 de 4, e o Laya treinado, nenhuma. Cliente que desistiu da compra escreve parecido com cliente que teve problema, e nenhum dos três separou.

**Treino com pouco dado.** Treinar o Laya com 150 itens do próprio gabarito deu 70%: ele decorou os exemplos em vez de aprender.

## Confiabilidade

- Gabarito separado de qualquer treino, e mesma pergunta e mesmas regras para os três.
- Erros em comum revistos às cegas, antes de olhar a resposta dos modelos.
- Confiança medida do mesmo jeito nos três (probabilidade da categoria escolhida).
- É um experimento pequeno, não um benchmark: 200 avaliações, uma base, um idioma. O preço do Jev vem de tabela de terceiros.

Antes de culpar o aluno, vale conferir o gabarito.
