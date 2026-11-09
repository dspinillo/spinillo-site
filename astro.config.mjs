import { defineConfig } from "astro/config";

// Domínio próprio (T1.4): GitHub Pages servindo spinillo.com.br na raiz.
export default defineConfig({
  site: "https://spinillo.com.br",
  base: "/",
});
