import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Um case por trabalho do índice (src/data/trabalhos.ts). O id é o nome do arquivo.
// Corpo em Markdown com os blocos ## Problema, ## Decisão, ## O que quebrou e ## Confiabilidade
// (ou, no formato novo, só o corpo curto e os cartões no frontmatter).
const tom = z.enum(["ink", "faint", "accent"]);

const cases = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/cases" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    periodo: z.string(),
    numeros: z.array(z.object({ valor: z.string(), rotulo: z.string() })).min(2).max(4),
    links: z.array(z.object({ rotulo: z.string(), url: z.url() })).default([]),
    // Formato novo (piloto no SLA): síntese em três linhas no topo, stack em etiquetas e
    // "O que quebrou" / "Confiabilidade" como cartões curtos fora do corpo.
    sintese: z.object({ problema: z.string(), feito: z.string(), resultado: z.string() }).optional(),
    stack: z.array(z.string()).default([]),
    // Notas de revisão para o autor. Nunca são renderizadas.
    revisar: z.array(z.string()).default([]),
    quebrou: z.object({ titulo: z.string().optional(), texto: z.string() }).optional(),
    confiabilidade: z.object({ titulo: z.string().optional(), texto: z.string() }).optional(),
    // Figura declarada nos dados (ver src/components/figuras/). tom: ink (preto), faint (cinza), accent (laranja).
    figura: z.object({
      tipo: z.enum(["fluxo", "barras", "colunas", "funil", "anotado", "antesdepois", "arvore"]),
      titulo: z.string(),
      legenda: z.string().optional(),
      etapas: z.array(z.object({ nome: z.string(), nota: z.string().optional(), destaque: z.boolean().default(false), largura: z.number().optional() })).optional(),
      volta: z.string().optional(),
      grupos: z.array(z.object({
        titulo: z.string(),
        max: z.number().optional(),
        itens: z.array(z.object({ rotulo: z.string(), valor: z.number(), texto: z.string(), tom: tom.default("faint") })),
      })).optional(),
      colunas: z.array(z.object({ rotulo: z.string().default(""), valor: z.number(), tom: tom.default("faint") })).optional(),
      notas: z.array(z.object({ texto: z.string(), de: z.number(), ate: z.number(), topo: z.number().default(0), tom: tom.default("ink") })).optional(),
      // anotado: parágrafos com trechos marcados [[texto|tipo]]; marcas dá o rótulo de cada tipo.
      paragrafos: z.array(z.string()).optional(),
      cabecalho: z.string().optional(),
      marcas: z.array(z.object({ tipo: z.string(), rotulo: z.string(), tom: tom.default("ink") })).optional(),
      // antesdepois: duas colunas de itens; "nome | detalhe" separa o detalhe.
      antes: z.object({ titulo: z.string(), itens: z.array(z.string()) }).optional(),
      depois: z.object({ titulo: z.string(), itens: z.array(z.string()) }).optional(),
      // arvore: arquivos com nível de indentação e a pergunta que cada um responde.
      arquivos: z.array(z.object({ nome: z.string(), nota: z.string().optional(), nivel: z.number().default(0), destaque: z.boolean().default(false) })).optional(),
      faixas: z.array(z.object({ texto: z.string(), de: z.number(), ate: z.number() })).optional(),
    }).optional(),
  }),
});

export const collections = { cases };
