export interface Trabalho {
  titulo: string;
  onde: string;
  numero: string;
  /** Uma frase de contexto (problema e resultado) que aparece sob o título no índice. */
  linha: string;
  /** Id do case em src/content/cases/. Sem ele, a linha do índice não vira link. */
  caso?: string;
}

export interface Pilar {
  id: string;
  verbo: string;
  frase: string;
  trabalhos: Trabalho[];
}

export const pilares: Pilar[] = [
  {
    id: "enxergar",
    verbo: "Enxergar",
    frase: "Mostrar onde a operação trava, todo dia, para quem decide.",
    trabalhos: [
      {
        titulo: "SLA de 60% para perto de 90%", onde: "BHub", numero: "painel para ~50 gestores", caso: "sla-bhub",
        linha: "O SLA da operação rodava na casa dos 60%. Um painel mostrou todo dia onde o atraso nascia e onde ia nascer, e os rituais de métrica viraram a cobrança.",
      },
      {
        titulo: "Guias com folga, não só no prazo", onde: "BHub", numero: "meta de 72 h antes", caso: "painel-guias",
        linha: "Um painel só do que o cliente recebe, com uma régua mais exigente que o prazo legal e um chat para conversar com o dado.",
      },
      {
        titulo: "Antifraude no canal de corretores", onde: "Loft", numero: "R$ 30 a 50 mil/mês barrados", caso: "antifraude-loft",
        linha: "Visita fantasma e proposta fria rendiam incentivo indevido a corretores. Regras em cima do funil passaram a pegar o padrão.",
      },
      {
        titulo: "O mercado de vagas de dados", onde: "painel", numero: "608 vagas, 417 empresas",
        linha: "Vagas de dados coletadas em vários portais, numa foto da semana: quem contrata, com que ferramentas e em que modelo.",
      },
    ],
  },
  {
    id: "automatizar",
    verbo: "Automatizar",
    frase: "Tirar trabalho manual do caminho sem contratar mais gente.",
    trabalhos: [
      {
        titulo: "A esteira do paralegal", onde: "BHub", numero: "20 a 30 mil tarefas/mês", caso: "paralegal",
        linha: "Venda no Pipedrive, operação no Pipefy, e os dois não conversavam. Liguei a esteira inteira com o Zapier.",
      },
      {
        titulo: "Régua dos certificados", onde: "BHub", numero: "5 h/dia → 30 min", caso: "regua-certificados",
        linha: "O follow-up de certificados vencendo era feito na mão. Montei a régua do dado ao e-mail e de volta ao card, sem contratar ninguém.",
      },
      {
        titulo: "Quando o ERP e o lakehouse não batem", onde: "BHub", numero: "0% → 82% validado", caso: "conciliacao-omie",
        linha: "O financeiro exportava relatórios na mão porque nada fechava. O problema não era a conta, era a ingestão.",
      },
    ],
  },
  {
    id: "construir",
    verbo: "Construir",
    frase: "Quando a ferramenta não existe, eu construo, com IA onde ela ajuda.",
    trabalhos: [
      {
        titulo: "Briefing diário por IA", onde: "BHub", numero: "18 modelos testados", caso: "briefing-ia",
        linha: "Um painel grande demais virou um resumo diário: o SQL calcula, a IA escreve e cada frase aponta para a origem.",
      },
      {
        titulo: "Um lugar para os relatórios em HTML", onde: "BHub", numero: "Databricks Apps", caso: "repositorio-html",
        linha: "As análises viraram arquivos HTML soltos no Slack. Construí um repositório com versão, tags e controle de quem vê.",
      },
      {
        titulo: "revisaAI", onde: "produto", numero: "341 contas em 3 semanas", caso: "revisaai",
        linha: "Revisor de currículo com IA que se recusa a inventar número. No ar, crescendo pelo LinkedIn.",
      },
      {
        titulo: "Triagem com confiança", onde: "experimento", numero: "89% a US$ 0,03/mil", caso: "triagem-com-confianca",
        linha: "Quando dá para deixar a IA classificar reclamação de cliente sozinha? Medi com um gabarito feito à mão.",
      },
      {
        titulo: "Radar de Vagas", onde: "open source", numero: "300+ testes", caso: "radar-de-vagas",
        linha: "Agente que varre portais de vagas, ranqueia pelo seu perfil e aprende com cada descarte. Quem decide é você.",
      },
      {
        titulo: "Oráculo Flow", onde: "open source", numero: "plugin do Claude Code", caso: "oraculo-flow",
        linha: "Como eu toco vários projetos sozinho com IA: a memória mora nos documentos, e cada agente tem um papel.",
      },
    ],
  },
];

export const empresas = ["Glovo", "Loft", "BHub", "Delivery Center", "Oppa"];

export const pad = (n: number) => String(n).padStart(3, "0");

/** Pilares com cada trabalho numerado em sequência (001, 002...), como no índice da home. */
export const secoes = (() => {
  let n = 0;
  return pilares.map((p, i) => ({
    ...p,
    n: pad(i + 1),
    trabalhos: p.trabalhos.map((t) => ({ ...t, n: pad(++n) })),
  }));
})();

/** Lista plana na ordem do índice, para achar número, pilar e vizinhos de um case. */
export const indice = secoes.flatMap((p) => p.trabalhos.map((t) => ({ ...t, pilar: p })));
