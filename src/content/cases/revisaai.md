---
titulo: revisaAI
resumo: "Um revisor de currículo com IA que se recusa a inventar. Analisa, reescreve, adapta para a vaga e gera o PDF, mas só afirma o que está no currículo da pessoa."
periodo: 2026 até hoje
sintese:
  problema: "84% dos bullets de currículo não têm um número, e a saída fácil de uma IA é inventar um."
  feito: "Um revisor em que a IA reescreve, uma trava em código barra o que não estava no original e a pessoa aprova cada linha."
  resultado: "341 contas em três semanas, sem anúncio pago, a menos de um centavo de dólar de IA por análise."
numeros:
  - valor: "341"
    rotulo: contas em três semanas
  - valor: "338"
    rotulo: currículos analisados
  - valor: "58"
    rotulo: adaptações para uma vaga
  - valor: "217"
    rotulo: cadastros num só dia de LinkedIn
figura:
  tipo: colunas
  titulo: Cadastros por dia, de 18/10 a 8/11/2026
  colunas:
    - { rotulo: "18/10", valor: 1 }
    - { valor: 2 }
    - { valor: 23 }
    - { rotulo: "21/10", valor: 43, tom: ink }
    - { valor: 4 }
    - { valor: 3 }
    - { valor: 3 }
    - { valor: 2 }
    - { valor: 3 }
    - { valor: 1 }
    - { valor: 0 }
    - { valor: 2 }
    - { valor: 2 }
    - { valor: 0 }
    - { rotulo: "1/11", valor: 0 }
    - { valor: 0 }
    - { valor: 0 }
    - { valor: 0 }
    - { valor: 5 }
    - { rotulo: "6/11", valor: 217, tom: accent }
    - { valor: 24 }
    - { valor: 6 }
  notas:
    - { texto: "**21/10:** post de lançamento, 43 cadastros.", de: 5, ate: 12, topo: 58 }
    - { texto: "**6/11:** um dia de conversa sobre a dificuldade de arrumar emprego. 217 cadastros, mais de 60% da base até ali.", de: 7, ate: 19, topo: 0, tom: accent }
  legenda: "Dados reais, sem as contas de teste. O dia 8/11 está parcial. Num dia comum sem post, o site recebe cerca de 13 visitantes e um ou dois cadastros."
quebrou:
  titulo: O PDF que ignorava a trava.
  texto: "A trava funcionava, mas o caminho que gerava o PDF não olhava para ela. Todo PDF baixado levava reescritas que a trava tinha barrado. Corrigi, passei a exigir a aprovação de cada reescrita e mandei um e-mail de desculpas com crédito extra para as 41 contas afetadas."
confiabilidade:
  texto: "Toda mudança de prompt passa por uma bateria de avaliação que reprova a versão se uma invenção escapar. O gerador de PDF foi testado com 184 perfis reais depois da correção, com zero falhas. O ponto fraco: a bateria ainda usa poucos currículos sintéticos, e a trava para os modelos reservas, que inventaram nível de idioma em teste, ainda está na fila."
links:
  - rotulo: revisacv.app
    url: https://revisacv.app
revisar:
  - "a seção Como funciona mostra a lógica (etapas, trava, juiz, escolha de modelo) sem prompt nem receita. Conferir se está no nível de detalhe que você quer expor."
---

## Problema

Quase todo currículo descreve tarefa e não resultado. Em 6.709 bullets de 338 análises, 84% não tinham um número sequer.

Uma IA preenche o buraco com facilidade: "otimizando as operações", "gerando nova linha de receita". Fica bonito na tela e vira problema na entrevista, quando alguém pergunta de onde saiu o número.

## Como funciona

- **A IA reescreve, mas só com o que existe.** Melhora o verbo e a clareza. Onde falta número, entra um marcador para a pessoa preencher, e a ideia de impacto vai como sugestão, nunca como fato.
- **Uma trava em código, sem IA,** compara cada reescrita com o original e barra resultado ou substantivo que não estava lá.
- **A pessoa aprova cada linha** antes de ela ir para o PDF.
- **Um modelo por tarefa,** escolhido por custo e qualidade, com uma cadeia de reservas para quando o principal cai. Comparei nove antes de escolher o da adaptação.
- **Uma bateria de avaliação** com currículos sintéticos e um segundo modelo como juiz. Na nota de ausência de invenção, a reescrita saiu de 2,3 para 4,5 de 5.

> Currículo com número inventado é como colar na prova: passa na correção e trava na pergunta oral.

## Distribuição

Nada de anúncio. O canal foi o LinkedIn, e o maior dia não veio de post sobre o produto.

Em 6/11, várias pessoas estavam falando sobre como está difícil conseguir uma entrevista. Entrei nessas conversas como mais alguém que está procurando, e o revisaAI apareceu como o que é: uma ferramenta que eu fiz porque passei pelo mesmo problema. Naquele dia vieram 217 cadastros.

O número diz menos sobre o canal e mais sobre o tamanho da dor. Muita gente está mandando currículo e não ouvindo nada de volta.
