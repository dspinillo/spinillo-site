---
titulo: Um lugar para os relatórios em HTML
resumo: "O PowerPoint perdeu espaço, e as análises viraram arquivos HTML voando pelo Slack, Teams e e-mail. Construí um repositório no Databricks Apps para publicar, versionar e controlar quem vê cada relatório."
periodo: Head de Dados
sintese:
  problema: "As análises viraram arquivos HTML anexados no Slack, no Teams e no e-mail. Ninguém sabia qual era a versão certa."
  feito: "Um repositório no Databricks Apps: publica por MCP, guarda cada versão e controla por tag quem vê e quem edita."
  resultado: "Um link no lugar do anexo, perto dos dados e das permissões que a empresa já tinha."
numeros:
  - valor: "1 link"
    rotulo: no lugar do arquivo anexado
  - valor: "todas"
    rotulo: as versões guardadas, com autor e data
  - valor: "0"
    rotulo: bancos extras para configurar
stack: [Databricks Apps, FastAPI, Jinja, HTMX, MCP, Unity Catalog]
figura:
  tipo: antesdepois
  titulo: O mesmo relatório, antes e depois
  antes:
    titulo: Antes, no Slack e no e-mail
    itens:
      - "relatorio_churn_final.html | Slack, #diretoria"
      - "relatorio_churn_final_v2.html | e-mail, sexta"
      - "relatorio_churn_final_v2 (1).html | Downloads"
      - "churn_AGORA_SIM.html | Teams"
      - "relatorio_churn_v3_revisado.html | mensagem direta"
  depois:
    titulo: Depois, no repositório
    itens:
      - "/relatorios/churn | um link, sempre a versão atual"
      - "v1 a v5 | cada versão com autor, data e o que mudou"
      - "tags: diretoria, cs | quem vê e quem edita"
      - "abre no navegador | sem baixar nada"
  legenda: "Nomes de arquivo fictícios. Qualquer semelhança com a sua pasta de Downloads não é coincidência."
quebrou:
  titulo: O banco que perdia a permissão.
  texto: "O caminho óbvio era o Lakebase, o Postgres do Databricks, com tabelas sincronizadas das bases gold. Mas a engenharia de dados estava reorganizando grupos e permissões, e a aplicação perdia acesso de tempos em tempos. Tirei o banco: as bases gold são lidas direto do lakehouse e os arquivos ficam no volume. Uma peça a menos para configurar e para quebrar."
confiabilidade:
  texto: "[Para você preencher.] Como você garantiu que ninguém via o que não devia? Por exemplo: teste com usuários de cargos diferentes, permissão padrão fechada, quem revisava as tags."
revisar:
  - "números de uso (quantos relatórios, quantas pessoas, quantas áreas publicando) para trocar a faixa de números."
---

## Problema

Análise ad hoc, relatório estático, página de resultado: cada vez mais isso sai como HTML, não como painel nem como slide. É ótimo de fazer e péssimo de compartilhar. O arquivo chega anexado, a pessoa baixa, abre no navegador, e na semana seguinte ninguém sabe qual é a versão certa nem quem deveria ter visto.

## O que fiz

Um repositório de relatórios dentro do Databricks Apps. O relatório sobe por MCP já no design system, fica num volume de um esquema de Business Analytics e abre por link.

As permissões saem da base de pessoas da camada gold (cargo e área). Cada relatório tem tags, e as tags dizem quem pode ver e quem pode editar. Dez versões de um relatório são dez versões guardadas, como no GitHub.

> O PowerPoint morreu. O anexo ainda não.
