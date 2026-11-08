# 0002 - Design: direção E "Índice"

Data: 2026-11-07

## Contexto

O F0 apresentou duas rodadas. Rodada 1: A Relatório, B Console, C Ficha. O Dhiego gostou da A, mas sentiu falta de algo, e mandou sete referências de portfólios. Lendo as referências, faltava presença pessoal na A: rosto, status de disponibilidade, empresas como prova, contato à mão. Rodada 2: D Mesa (bento, acento laranja) e E Índice.

## Decisão

Direção **E · Índice** (gramática das referências 2, 3 e 7 dele):

- Monocromático sobre cinza quente claro (`#e3e2de`), tinta quase preta (`#111`), cinzas `#55554f` / `#8d8c86`, filetes `#c6c5bf`. Sem cor de acento.
- Tipografia: Archivo com eixo de largura (títulos em caixa alta, `font-stretch` 110 a 125%, peso 800); corpo também em Archivo, peso regular.
- Home: título enorme em caixa alta ("FAÇO A OPERAÇÃO RODAR MELHOR <COM DADOS, AUTOMAÇÃO E IA>"), foto redonda com uma frase de apresentação ao lado, faixa de empresas em texto (GLOVO · LOFT · BHUB · DELIVERY CENTER · OPPA), índice em três seções `(001) ENXERGAR`, `(002) AUTOMATIZAR`, `(003) CONSTRUIR`, trabalhos numerados em sequência, linhas em cinza e a ativa em preto.
- Contato só por ícones de LinkedIn e GitHub; sem e-mail.
- Página de case: título em caixa alta, faixa de números, blocos Problema, Decisão, O que quebrou, Confiabilidade.
- Painel: faixa de números com filetes (vagas, empresas, % inglês, % salário), barras pretas por ferramenta, nota de método em corpo pequeno.
- Empresas aparecem como nomes tipografados, nunca como logos.

## Consequências

- Positiva: autoridade e cara de consultoria, combina com leitor Head/diretor; sem acento, o dado e a tipografia carregam a página.
- Custo: mais fria que a D. Calor vem da foto e do texto em primeira pessoa.
- Sem foto (decisão de 07/11): quem chega veio do LinkedIn e já viu o rosto; a presença vem do texto em primeira pessoa ao lado do título.
- Tema escuro descartado (ver abaixo).
- Mockups: plano F0 (link no auto-memory, fora do repo público).

## Atualização 08/11/2026

- Marca no topo: `dhiego.spinillo`, com o ponto na cor de acento `--accent` (#e8501c no claro, #ff6a33 no escuro). Exceção pedida por ele à regra "sem cor de acento": só o ponto, nada mais. Favicon `ds.` no mesmo estilo.
- Cabeçalho fixo na rolagem, com filete quando a página rola.
- **Tema claro fixo (decidido em 08/11/2026).** O escuro foi desligado em teste e não voltou: a direção E é papel e tinta, os gráficos e o laranja foram calibrados no claro, e manter dois temas dobra o trabalho de cada figura nova. Alternativa que perdeu: seguir o sistema (claro e escuro), como estava na T1.2.
- Página de case: rótulo `(NNN) PILAR · onde · período`, título em caixa alta, resumo, faixa de números com filetes, blocos em duas colunas (título à esquerda), anterior/próximo.
