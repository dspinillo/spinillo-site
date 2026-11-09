---
titulo: Um lugar para os relatórios em HTML
resumo: "O PowerPoint perdeu espaço, e as análises viraram arquivos HTML voando pelo Slack, Teams e e-mail. Construí um repositório no Databricks Apps para publicar, versionar e controlar quem vê cada relatório."
periodo: Head de Dados
sintese:
  problema: "As análises viraram arquivos HTML anexados no Slack, no Teams e no e-mail. Ninguém sabia qual era a versão certa."
  feito: "Um repositório no Databricks Apps: publica por MCP, guarda cada versão e controla, documento a documento, quem vê e quem edita."
  resultado: "Um piloto com 12 a 15 pessoas, e a engenharia planejando levar a ideia para a empresa inteira."
numeros:
  - valor: "1 link"
    rotulo: no lugar do arquivo anexado
  - valor: "12 a 15"
    rotulo: pessoas no piloto
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
      - "acesso: área ou pessoa | quem vê e quem edita"
      - "abre no navegador | sem baixar nada"
  legenda: "Nomes de arquivo fictícios. Qualquer semelhança com a sua pasta de Downloads não é coincidência."
quebrou:
  titulo: O banco que perdia a permissão.
  texto: "O caminho óbvio era o Lakebase, o Postgres do Databricks, com tabelas sincronizadas das bases gold. Mas a engenharia de dados estava reorganizando grupos e permissões, e a aplicação perdia acesso de tempos em tempos. Tirei o banco: as bases gold são lidas direto do lakehouse e os arquivos ficam no volume. Uma peça a menos para configurar e para quebrar."
confiabilidade:
  texto: "A permissão é por documento, não por pasta: cada relatório diz quem vê e quem edita, por área ou por e-mail. Como a lista vem da base oficial de colaboradores, quem sai da empresa sai também da lista."
---

## Problema

Análise ad hoc, relatório estático, página de resultado: cada vez mais isso sai como HTML, não como painel nem como slide. É ótimo de fazer e péssimo de compartilhar. O arquivo chega anexado, a pessoa baixa, abre no navegador, e na semana seguinte ninguém sabe qual é a versão certa nem quem deveria ter visto.

## O que fiz

Um repositório de relatórios dentro do Databricks Apps. O relatório sobe por MCP já no design system, fica num volume de um esquema de Business Analytics e abre por link.

Cada documento tem a sua permissão de ver e de editar, liberada por área ou por pessoa. A lista de pessoas vem da base de colaboradores da camada gold, então qualquer funcionário aparece para ser escolhido. Dez versões de um relatório são dez versões guardadas, como no GitHub.

O piloto começou com os 5 do time de Business Analytics e algumas pessoas de engenharia, produto e diretoria, cerca de 12 a 15 no total. A engenharia passou a planejar uma versão para a empresa inteira a partir dele.

> O PowerPoint morreu. O anexo ainda não.
