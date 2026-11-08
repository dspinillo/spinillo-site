---
titulo: Radar de Vagas
resumo: "Um agente que conhece o seu repertório, varre os portais de vagas, ranqueia o que achou e aprende com cada descarte. Nasceu da minha própria busca de emprego e virou open source."
periodo: out/2026 até hoje
sintese:
  problema: "Procurar emprego virou varredura: cinco portais por dia e anúncios longos que só no fim dizem que não é para você."
  feito: "Um agente local que coleta em seis fontes, lê cada vaga inteira, ranqueia pelo seu perfil e aprende com cada descarte."
  resultado: "Open source, com 331 testes, nenhuma dependência e nenhum dado pessoal no repositório."
numeros:
  - valor: "6"
    rotulo: fontes de vagas
  - valor: "331"
    rotulo: testes automatizados
  - valor: "0"
    rotulo: dependências para instalar
  - valor: "0"
    rotulo: dado pessoal no repositório
stack: [Node.js, Claude Code, Codex]
figura:
  tipo: fluxo
  titulo: Uma rodada do Radar
  etapas:
    - { nome: Entrevista, nota: "Experiência, casos, cidade, modelo de trabalho, idiomas e faixa salarial." }
    - { nome: Coleta, nota: "Seis fontes, devagar e sem login." }
    - { nome: Leitura, nota: "A descrição inteira de cada vaga, não só o título." }
    - { nome: Ranking, nota: "Estrelas, motivo e alertas. Nenhuma vaga escondida.", destaque: true }
    - { nome: Você decide, nota: "Para a vaga que vale, o currículo ajustado e as respostas do formulário." }
  volta: "Descarte com motivo vira memória: a próxima vaga com o mesmo ponto chega com aviso, e continua na lista."
quebrou:
  titulo: O projeto perfeito que deu errado.
  texto: "Antes do Radar, fiz um app para o Mac que recarregava uma busca do LinkedIn, logado na minha conta, de minuto em minuto. Chegou à versão 0.6, com mais de cem testes, e o LinkedIn me deslogou. Era um robô, e tinha cara de robô. Foi daí que saíram as regras do Radar: sem login, devagar e parando cedo."
confiabilidade:
  texto: "331 testes e uma trava antes de cada commit que barra dado pessoal. Cada entrega passa por um testador independente, que achou defeitos que os testes de quem construiu não pegavam. Ainda falta uso longo com perfil real de outras pessoas."
links:
  - rotulo: Código no GitHub
    url: https://github.com/dspinillo/radar-de-vagas
---

## Problema

Procurar emprego virou trabalho de varredura. Na minha busca, montei um coletor para isso, e logo ficou claro que muita gente perde as mesmas horas do mesmo jeito.

## O que fiz

Reescrevi como projeto público, com três regras: **quem decide é a pessoa**, **descarte vira memória e não corte**, e **nenhum dado sai da máquina**.

O julgamento (o que é encaixe, o que é alerta) fica em texto, nas instruções do agente, e não em código. Dá para ajustar o critério sem mexer no programa.

## O LinkedIn sem ser bloqueado

Entra como visitante, sem login, e lê só páginas públicas. Espera entre chamadas, para de paginar quando já tem o suficiente e, quando o site pede calma, espera o tempo que ele indica. Vem desligado de fábrica, e a entrevista explica o risco.

Quando o LinkedIn começou a recusar, o atalho seria disfarçar o Radar de navegador. Mantive a identificação honesta e resolvi com paciência.

> Projeto público que dribla regra de site não é vitrine que eu queira.

## O primeiro uso de verdade

Depois do post, alguém de fora instalou e abriu um chamado: o LinkedIn morria no limite de requisições, e a pessoa tinha gasto US$ 25 em dois dias pela API paga. O Radar foi pensado para a assinatura do Claude Code ou do Codex, e isso não estava escrito em lugar nenhum. Agora está, logo na entrada.
