// Gera src/data/painel.json a partir da coleta pessoal (fora deste repo).
// Publica só campos derivados: família, nível, modelo, fonte, ferramentas,
// inglês e salário por vaga, mais a contagem por empresa. Título, link e texto
// do anúncio nunca saem daqui.
//
// Uso: node scripts/exportar-painel.mjs [caminho/do/raw.json]
import { readFileSync, writeFileSync, statSync } from "node:fs";
import { homedir } from "node:os";

const origem = process.argv[2] ?? `${homedir()}/dh/projects/career-copilot/vagas/raw.json`;
const vagas = JSON.parse(readFileSync(origem, "utf8"));

const sem = (s) => (s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

// Recrutadoras, agregadores e anúncios sem empresa não entram no ranking.
const naoEmpresa = /confidencial|indique um amigo|jobgether|jobbol|empresa anonima|recrut|talent|hunting|selecao|^\?$/;

const familias = [
  ["Chief of Staff", /chief of staff|\bcos\b/],
  ["People Analytics", /people analytics|people insights/],
  ["Automação e IA", /automa|\bia\b|\bai\b|intelig[eê]ncia artificial|rpa|machine learning/],
  ["Receita e comercial", /revenue|revops|receita|sales op|comercial|vendas|growth|go.to.market/],
  ["Dados e analytics", /dados|data|analytics|\bbi\b|business intelligence|mis\b|inteligencia/],
  ["Processos e planejamento", /process|planejamento|planning|estrateg|strategy|pmo|projetos|excelencia/],
  ["Operações", /opera|ops\b|backoffice|cx|atendimento|supply|logistic|customer|servic/],
];
const niveis = [
  ["Diretoria e head", /diretor|director|head|vp\b|chief|lider de area/],
  ["Gerência", /gerente|manager|gerencia/],
  ["Coordenação", /coordenad|lead\b|lider|supervis/],
  ["Especialista e sênior", /especialista|specialist|senior|sr\.?\b|principal|staff/],
];
const ferramentas = [
  ["SQL", /\bsql\b/], ["Excel", /excel|planilha/], ["Power BI", /power ?bi/],
  ["Python", /python/], ["Tableau", /tableau/], ["Looker", /looker/],
  ["Salesforce", /salesforce/], ["SAP", /\bsap\b/], ["Jira", /\bjira\b/],
  ["IA generativa", /\bllm|genai|ia generativa|generative ai|chatgpt|openai|gpt\b|agentes? de ia|ai agents?/],
  ["Databricks", /databricks/], ["BigQuery", /bigquery/], ["Snowflake", /snowflake/],
  ["AWS", /\baws\b/], ["Google Cloud", /\bgcp\b|google cloud/], ["Azure", /azure/],
  ["HubSpot", /hubspot/], ["Power Automate", /power automate/], ["Zapier ou n8n", /zapier|\bn8n\b|make\.com/],
  ["dbt", /\bdbt\b/], ["Airflow", /airflow/], ["Qlik", /qlik/], ["R", /\blinguagem r\b|\bem r\b|\br,|rstudio/],
];

// R$ sozinho pega vale-refeição e faturamento; exige palavra de salário perto do valor.
const salario = /(salario|remuneracao|faixa salarial|pro.?labore|bolsa)[^.;]{0,40}r\$ ?\d|r\$ ?[\d.,]+ *(\+ *(rv|premia|remuneracao variavel|comiss|bonus)|(brutos?|mensais) *(clt|pj)|a r\$)/;

function modelo(v) {
  const w = sem(v.workplace), f = v.flags ?? [];
  if (/remot/.test(w) || f.includes("texto-remoto")) return "Remoto";
  if (/hybrid|hibrid/.test(w) || f.includes("texto-hibrido")) return "Híbrido";
  if (/on.?site|presencial/.test(w) || f.includes("texto-presencial")) return "Presencial";
  return "Não informado";
}
const achar = (lista, texto, padrao) => (lista.find(([, re]) => re.test(texto)) ?? [padrao])[0];

const linhas = vagas.map((v) => {
  const titulo = sem(v.title), texto = sem(v.description);
  return {
    familia: achar(familias, titulo, "Outras"),
    nivel: achar(niveis, titulo, "Outros"),
    modelo: modelo(v),
    fonte: v.source,
    ferramentas: ferramentas.filter(([, re]) => re.test(texto)).map(([n]) => n),
    ingles: (v.flags ?? []).includes("ingles-fluente") || /fluent english|english.{0,20}(fluent|advanced)|ingles (fluente|avancado)/.test(texto),
    salario: salario.test(texto),
  };
});

const empresas = {};
for (const v of vagas) {
  const e = (v.company ?? "").trim();
  if (e && !naoEmpresa.test(sem(e))) empresas[e] = (empresas[e] ?? 0) + 1;
}

const datas = vagas.map((v) => v.published).filter(Boolean).sort();
const saida = {
  coleta: statSync(origem).mtime.toISOString().slice(0, 10),
  janela: [datas[0], datas.at(-1)],
  total: vagas.length,
  empresas: Object.keys(empresas).length,
  topEmpresas: Object.entries(empresas).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 12),
  linhas,
};
writeFileSync(new URL("../src/data/painel.json", import.meta.url), JSON.stringify(saida));

const conta = (k) => Object.entries(linhas.reduce((m, l) => ((m[l[k]] = (m[l[k]] ?? 0) + 1), m), {})).sort((a, b) => b[1] - a[1]);
console.log(`painel: ${saida.total} vagas, ${saida.empresas} empresas, coleta ${saida.coleta}`);
for (const k of ["familia", "nivel", "modelo", "fonte"]) console.log(k, JSON.stringify(conta(k)));
console.log("ferramentas", JSON.stringify(ferramentas.map(([n]) => [n, linhas.filter((l) => l.ferramentas.includes(n)).length]).sort((a, b) => b[1] - a[1])));
console.log("ingles", linhas.filter((l) => l.ingles).length, "salario", linhas.filter((l) => l.salario).length);
console.log("top", JSON.stringify(saida.topEmpresas));
