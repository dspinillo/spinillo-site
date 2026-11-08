import { defineConfig } from "astro/config";

// Até o domínio próprio entrar (T1.4), o site vive em dspinillo.github.io/spinillo-site.
export default defineConfig({
  site: "https://dspinillo.github.io",
  base: "/spinillo-site",
});
