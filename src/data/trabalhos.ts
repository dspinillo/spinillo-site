export interface Trabalho {
  titulo: string;
  onde: string;
  numero: string;
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
      { titulo: "SLA de 60% para perto de 90%", onde: "BHub", numero: "rituais diários de métrica" },
      { titulo: "Antifraude no canal de corretores", onde: "Loft", numero: "R$ 30 a 50 mil/mês barrados" },
      { titulo: "O mercado de vagas de dados", onde: "painel", numero: "608 vagas, 417 empresas" },
    ],
  },
  {
    id: "automatizar",
    verbo: "Automatizar",
    frase: "Tirar trabalho manual do caminho sem contratar mais gente.",
    trabalhos: [
      { titulo: "Régua dos certificados", onde: "BHub", numero: "5 h/dia → 30 min" },
    ],
  },
  {
    id: "construir",
    verbo: "Construir",
    frase: "Quando a ferramenta não existe, eu construo, com IA onde ela ajuda.",
    trabalhos: [
      { titulo: "Briefing diário por IA", onde: "BHub", numero: "18 modelos testados" },
      { titulo: "Triagem com confiança", onde: "experimento", numero: "89% a US$ 0,03/mil" },
      { titulo: "Radar de Vagas", onde: "open source", numero: "300+ testes" },
      { titulo: "revisaAI", onde: "produto", numero: "85 contas" },
    ],
  },
];

export const empresas = ["Glovo", "Loft", "BHub", "Delivery Center", "Oppa"];
