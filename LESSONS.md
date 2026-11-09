# spinillo-site · Lições

> Uma lição por item: o que aconteceu → por quê → como evitar.

## Armadilhas

- (nenhuma ainda)

## Padrões que funcionaram

- (nenhum ainda)

## Ambiente / ferramentas

- **DNS na UOL com e-mail no Google.** O domínio tem MX do Google com vários endereços em uso. Mudar servidor de nomes arrisca o e-mail → para o site, só criar A e CNAME no painel da UOL e conferir `dig MX` antes e depois.

## 09/11/2026 · Certificado do GitHub Pages preso

Depois de apontar o DNS, a checagem de saúde do Pages (`gh api repos/<repo>/pages/health`) ficou presa em 202 a noite toda e o certificado não saiu. O cache do registro antigo (TTL 1800 da UOL) fez a primeira checagem ver o IP velho. Remédio: com o DNS já estável no Google e na Cloudflare, tirar e recolocar o domínio (`-f cname=` e depois `-f cname=spinillo.com.br`). Health virou 200 e o certificado saiu em menos de 1 minuto; as 4 bordas levaram mais uns 30 s.
