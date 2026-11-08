---
titulo: revisaAI
resumo: "Um revisor de currículo com IA que se recusa a inventar. Analisa, reescreve, adapta para a vaga e gera o PDF, mas só afirma o que está no currículo da pessoa."
periodo: 2026 até hoje
numeros:
  - valor: "300+"
    rotulo: contas criadas
  - valor: "7"
    rotulo: clientes pagantes
  - valor: "83%"
    rotulo: dos bullets analisados sem número
  - valor: "US$ 0,0035"
    rotulo: custo médio de IA por análise
links:
  - rotulo: revisacv.app
    url: https://revisacv.app
---

## Problema

Quase todo currículo que chega no revisaAI descreve tarefa e não resultado. Nos primeiros 1.240 bullets analisados, 83% não tinham um número sequer.

A saída fácil para uma IA é preencher o buraco. "Otimizando as operações", "gerando nova linha de receita". Fica bonito na tela e vira problema na entrevista, quando alguém pergunta de onde saiu aquele número e a pessoa não sabe responder. Foi exatamente o que a primeira versão do meu reescritor fazia.

## Decisão

Tratei a verdade como a principal função do produto:

- A reescrita só afirma o que está no currículo, com um verbo melhor. Onde falta número, entra um marcador para a pessoa preencher ("[quantifique: quantos clientes]"), e a ideia de impacto vai como sugestão, nunca como fato.
- Uma trava em código, sem IA, compara cada reescrita com o original e barra resultado ou substantivo que não estava lá.
- A pessoa aprova cada reescrita na tela antes de ela ir para o PDF.

Para não regredir a cada ajuste de prompt, montei uma bateria de avaliação: currículos sintéticos, regras duras que derrubam a versão se uma invenção passar, e um segundo modelo como juiz nos marcos maiores. Na nota de ausência de invenção do juiz, a reescrita saiu de 2,3 para 4,5 de 5.

Escolho o modelo por tarefa, pesando custo e qualidade. Comparei nove modelos com o meu próprio currículo antes de escolher o da adaptação, e há uma cadeia de reservas para quando o principal cai. O custo médio de IA de uma análise fica em torno de três décimos de centavo de dólar.

O canal que funcionou foi o LinkedIn: os posts e comentários trouxeram as contas, sem anúncio pago.

## O que quebrou

**O PDF que ignorava a trava.** A trava funcionava, mas o caminho que gerava o PDF não olhava para ela. Até eu descobrir, todo PDF baixado levava texto de dentro dos marcadores e reescritas que a trava tinha barrado. Corrigi, passei a exigir a aprovação de cada reescrita e mandei um e-mail de desculpas com crédito extra para as 41 contas afetadas.

**A nota que não media nada.** A parte da nota sobre leitura por sistemas de recrutamento (ATS) deu 100 ou 92 em todas as 78 primeiras análises. Uma nota que não muda não ajuda ninguém. Refiz a regra para olhar o layout do PDF original (duas colunas, página que é imagem, letras espaçadas) e ela passou a separar os casos.

**Os reservas que inventam.** Quando troquei a cadeia de modelos da adaptação, os reservas inventaram nível de idioma e data de saída que não estavam no currículo. A trava contra isso ainda está na fila.

## Confiabilidade

- Toda mudança de prompt passa pela bateria de avaliação, e ela reprova a versão se uma invenção escapar da trava.
- O gerador de PDF foi testado com 184 perfis reais depois da última correção: zero falhas.
- Toda falha de modelo ou de geração fica registrada, com o modelo e a mensagem. Olho ali antes de dizer que algo quebrou ou não.
- A bateria ainda usa poucos currículos sintéticos. Posso estar ajustando o produto para agradar a eles, e por isso o próximo passo é ter currículos reais como teste fixo.

Currículo com número inventado é como colar na prova: passa na correção e trava na pergunta oral.
