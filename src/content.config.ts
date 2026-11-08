import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Um case por trabalho do índice (src/data/trabalhos.ts). O id é o nome do arquivo.
// Corpo em Markdown com os blocos ## Problema, ## Decisão, ## O que quebrou e ## Confiabilidade.
const cases = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/cases" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    periodo: z.string(),
    numeros: z.array(z.object({ valor: z.string(), rotulo: z.string() })).min(2).max(4),
    links: z.array(z.object({ rotulo: z.string(), url: z.url() })).default([]),
  }),
});

export const collections = { cases };
