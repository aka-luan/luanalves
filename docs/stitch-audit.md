# Auditoria do `stitch.html` para M2

Data: 2026-04-10

Objetivo: registrar os problemas encontrados no HTML do Stitch antes da integração da home estática em Astro.

## Problemas encontrados

- Dependência externa frágil de `cdn.tailwindcss.com`, inadequada para a base do projeto.
- Configuração de tema inteira embutida em `<script id="tailwind-config">`, acoplada ao HTML original.
- Uso de fontes genéricas e desalinhadas com a direção atual do projeto, incluindo `Inter`.
- CSS embutido em `<style>` no documento, em vez de arquivo de estilos do projeto.
- Texto com codificação quebrada em vários pontos, por exemplo `Propósito`, `Serviços`, `negócio`, `construção`.
- Navegação com links `href="#"`, sem destinos reais.
- Botões usados onde a intenção aparente é navegação ou contato, sem URL nem semântica de link.
- Ordem semântica inconsistente: há um `h1`, depois vários `h2`, mas as seções seguintes pulam para `h3`, `h4` e `h5` sem uma hierarquia limpa por seção.
- Ausência de `header` explícito no topo; o original usa apenas `nav`.
- Estrutura de conteúdo não corresponde à ordem esperada no milestone, que exige transições narrativas separadas.
- Wrappers visuais com `div` e `overflow-hidden` usados apenas para efeito visual, sem valor semântico.
- Classes utilitárias fortemente acopladas à estrutura do Stitch, difíceis de manter no sistema de tokens local.
- Estilos inline em ícones com `font-variation-settings`, que precisavam ser extraídos ou removidos.
- Não há IDs duplicados relevantes; apenas `tailwind-config` aparece uma vez.
- Não há imagens, então não existem `alt` pendentes nesta versão.
- Não há atributos de acessibilidade adicionais nos CTAs principais nem rótulos auxiliares para a navegação móvel.
- Footer com copy desatualizada em relação ao milestone.

## Decisões de integração

- Reescrever a home em Astro sem depender de Tailwind CDN.
- Preservar a direção visual geral: fundo escuro, destaque em verde, contraste editorial e blocos amplos.
- Corrigir a ordem da página para as 11 seções esperadas no milestone.
- Aplicar a copy final do milestone onde ela existe literalmente.
- Nos trechos sem copy aprovada em `MILESTONES.md` (`Manifesto`, `Para quem é`, `Diferencial`, `Processo`), usar a copy do Stitch como melhor aproximação disponível, sem placeholders.
- Manter a página totalmente funcional sem JavaScript de animação.
