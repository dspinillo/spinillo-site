// Roda depois do build: falha se algum texto de rascunho chegou ao site publicado.
// Cartões ainda vazios ("[Para você preencher.]") são escondidos em cases/[id].astro;
// isto pega o que escapar (placeholder no corpo, comentário REVISAR, travessão).
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const proibidos = [/Para você preencher/, /REVISAR/, /\u2014/];
const erros = [];
const varre = (dir) => {
  for (const nome of readdirSync(dir)) {
    const caminho = join(dir, nome);
    if (statSync(caminho).isDirectory()) varre(caminho);
    else if (nome.endsWith(".html")) {
      const html = readFileSync(caminho, "utf8");
      for (const re of proibidos) if (re.test(html)) erros.push(`${caminho}: ${re}`);
    }
  }
};
varre("dist");
if (erros.length) {
  console.error("Texto de rascunho no site publicado:\n" + erros.join("\n"));
  process.exit(1);
}
console.log("checar-publicacao: nenhum rascunho no dist.");
