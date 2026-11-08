---
titulo: Radar de Vagas
resumo: "Um agente que conhece o seu repertório, varre os portais de vagas, ranqueia o que achou e aprende com cada descarte. Nasceu da minha própria busca de emprego e virou open source."
periodo: out/2026 até hoje
numeros:
  - valor: "6"
    rotulo: fontes de vagas
  - valor: "331"
    rotulo: testes automatizados
  - valor: "0"
    rotulo: dependências para instalar
  - valor: "0"
    rotulo: dado pessoal no repositório
links:
  - rotulo: Código no GitHub
    url: https://github.com/dspinillo/radar-de-vagas
---

## Problema

Procurar emprego virou trabalho de varredura. Abrir cinco portais por dia, ler anúncios longos e descobrir no último parágrafo que a vaga pede algo que você não tem. Na minha busca eu montei um coletor para isso, e logo ficou claro que muita gente perde as mesmas horas do mesmo jeito.

## Decisão

Reescrevi do zero como projeto público, com três regras que eu não negocio:

- **Quem decide é a pessoa.** O Radar ranqueia e orienta, com estrelas, motivo e alertas. Ele não esconde vaga e só envia candidatura quando a pessoa manda, para aquela vaga.
- **Descarte vira memória, não corte.** Quando você descarta uma vaga e escreve o porquê (por exemplo, "pede Ruby on Rails"), a próxima vaga com o mesmo ponto chega com aviso. Continua na lista.
- **Nenhum dado sai da máquina.** Perfil, currículo e histórico ficam numa pasta local, fora do repositório. O código público não tem um dado meu.

Começa com uma entrevista: experiência, casos, currículo, cidade, modelo de trabalho, idiomas e faixa salarial por regime. Depois coleta em seis fontes, lê a descrição inteira de cada vaga e monta uma página local com o que é novo. Para a vaga que vale a pena, prepara o currículo ajustado e a folha de respostas do formulário, só com o que está no perfil.

Na parte técnica, é Node sem nenhuma dependência e roda dentro do Claude Code ou do Codex. O julgamento (o que é encaixe, o que é alerta) fica em texto, nas instruções do agente, e não em código. Assim dá para ajustar o critério sem mexer no programa.

**O LinkedIn sem ser bloqueado.** É a fonte com mais vaga e a mais arisca. O Radar entra como visitante, sem login, e lê só as páginas públicas de vagas. Nenhuma conta da pessoa fica exposta. E ele se comporta como gente com pressa nenhuma:

- espera um segundo entre uma chamada e outra, e no LinkedIn lê uma vaga de cada vez;
- para de paginar quando já tem o número de vagas novas que a pessoa pediu, porque volume desnecessário é o que mais provoca bloqueio;
- quando o site pede calma (o erro 429), espera o tempo que o próprio site indica e tenta de novo, até três vezes;
- se aparecer tela de login ou captcha, desiste só dessa fonte, e as outras seguem.

O LinkedIn vem desligado de fábrica. A entrevista inicial explica o risco e pergunta se a pessoa quer ligar.

## O que quebrou

**O projeto perfeito que deu errado.** Antes do Radar, fiz um app nativo para o Mac, em Swift. Eu colava o link de uma busca do LinkedIn com os filtros que queria, entrava na minha conta numa janela dele, e o app recarregava a busca sozinho, de 1 em 1 minuto se eu quisesse. Apareceu cartão de vaga novo, o fundo mudava de cor e tocava um som. A ideia era estar entre os primeiros candidatos de toda vaga recém-publicada.

Ficou bonito: várias buscas lado a lado, histórico das vagas avisadas, até um modo silencioso para a madrugada. Chegou à versão 0.6 com mais de cem testes. E o LinkedIn me deslogou. Para o site, uma conta recarregando a mesma busca a cada minuto o dia inteiro tem cara de robô, porque é um robô. Eu estava arriscando a minha própria conta, justo a ferramenta principal de quem procura emprego.

É como ficar na porta da padaria apertando a campainha de minuto em minuto para saber se o pão saiu. Uma hora o padeiro para de abrir. Foi daí que saíram as regras do Radar: sem login, devagar e parando cedo.

**O primeiro uso de verdade.** Depois do post no LinkedIn, alguém de fora instalou e abriu um chamado: só uma das fontes rendia, e o LinkedIn morria no limite de requisições. Corrigi com novas tentativas que respeitam o tempo que o próprio site pede e parando de paginar no teto.

**O custo.** No mesmo chamado apareceu o problema maior: rodando pela API paga por uso, a pessoa gastou US$ 25 em dois dias. O Radar foi pensado para a assinatura do Claude Code ou do Codex, e isso não estava escrito em lugar nenhum. Agora o README e a entrevista inicial avisam logo de cara, e quem não tem assinatura pode usar um modelo gratuito.

**O atalho que eu não tomei.** Quando o LinkedIn começou a recusar, a saída rápida seria disfarçar o Radar de navegador comum. Mantive a identificação honesta (o Radar se apresenta como Radar) e resolvi com paciência nas tentativas. Numa coleta de teste depois da correção, vieram 40 vagas sem disfarce nenhum. Projeto público que dribla regra de site não é vitrine que eu queira.

## Confiabilidade

- 331 testes automatizados, e uma trava antes de cada commit que barra dado pessoal no repositório.
- Cada entrega passa por um testador independente, que achou defeitos que os testes de quem construiu não pegavam, como texto de vaga sendo cortado na leitura.
- Validado com agente real e perfil fictício: na revisão, ele achou as três divergências que eu plantei e uma quarta que eu não tinha plantado.
- Ainda falta uso longo com perfil real de outras pessoas. É a parte que código nenhum resolve.
