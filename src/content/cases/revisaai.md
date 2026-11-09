---
titulo: revisaAI
resumo: "Um revisor de currículo com IA que se recusa a inventar. Analisa, reescreve, adapta para a vaga e gera o PDF, mas só afirma o que está no currículo da pessoa."
periodo: 2026 até hoje
sintese:
  problema: "84% dos bullets de currículo não têm um número, e a saída fácil de uma IA é inventar um."
  feito: "Um revisor em que a IA reescreve, uma trava em código barra o que não estava no original e nada pendente vai para o PDF sem a pessoa completar."
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
  texto: "A trava funcionava, mas o caminho que gerava o PDF não olhava para ela. Até eu perceber, o PDF levava texto de dentro dos marcadores e reescritas que a trava tinha barrado. Corrigi, mandei um e-mail de desculpas para as 41 contas afetadas e dei crédito extra de uso para as 40 que não eram assinantes."
confiabilidade:
  texto: "Toda mudança de prompt passa pela bateria de avaliação, que reprova a versão se uma invenção escapar. O gerador de PDF roda contra 184 perfis reais, e depois de corrigir os dois últimos bugs que o derrubavam, passou sem nenhuma falha. O ponto fraco: a bateria usa só 4 currículos sintéticos, e os modelos reservas da adaptação inventaram nível de idioma e data num teste. A trava contra isso ainda está na fila."
links:
  - rotulo: revisacv.app
    url: https://revisacv.app
---

## Problema

Quase todo currículo descreve tarefa e não resultado. Em 6.709 bullets de 338 análises, 84% não tinham um número sequer.

Uma IA preenche o buraco com facilidade: "otimizando as operações", "gerando nova linha de receita". Fica bonito na tela e vira problema na entrevista, quando alguém pergunta de onde saiu o número.

## Como funciona

- **A IA reescreve, mas só com o que existe.** Melhora o verbo e a clareza. Onde falta número ou resultado, entra um marcador para a pessoa completar, e o impacto possível aparece como hipótese, nunca como fato.
- **Uma trava em código, sem IA,** compara cada reescrita com o original e barra número, empresa ou resultado que não estão lá.
- **Nada com marcador pendente vai para o PDF.** A pessoa completa o que falta e libera aquela linha.
- **Um modelo por tarefa,** escolhido por custo e qualidade, com uma cadeia de reservas para quando o principal cai. Comparei nove antes de escolher o da adaptação.
- **Uma bateria de avaliação** com currículos sintéticos e um segundo modelo como juiz. Nessa bateria de teste, a nota de ausência de invenção da reescrita saiu de 2,3 para 4,5 de 5.

> Currículo com número inventado é como colar na prova: passa na correção e trava na pergunta oral.

## Distribuição

Nada de anúncio. O canal foi o LinkedIn, e o maior dia não veio de post sobre o produto.

Em 6/11, várias pessoas estavam falando sobre como está difícil conseguir uma entrevista. Entrei nessas conversas como mais alguém que está procurando, e o revisaAI apareceu como o que é: uma ferramenta que eu fiz porque passei pelo mesmo problema. Naquele dia vieram 217 cadastros.

O número diz menos sobre o canal e mais sobre o tamanho da dor. Muita gente está mandando currículo e não ouvindo nada de volta.
