# Issues 7 e 17: referência GSC de Belém antes da publicação

Observação autenticada em 04/10/2026, propriedade de domínio `luanalves.com.br`, pesquisa Web. A opção “28 days” exibiu o período **02/09–29/09/2026**; estas são as datas registradas, sem presumir que a janela termina na data da observação.

## Recortes conferidos

1. Filtro Page contendo `criacao-de-sites-belem`, incluindo variantes com/sem barra, todos os países e dispositivos.
2. Mesmo filtro, país Brazil, todos os dispositivos. A tabela Devices foi consultada separadamente para Desktop e Mobile.
3. Mesmo filtro, Brazil, Mobile; a tabela de consultas visíveis foi registrada.
4. Query exata `criação de sites em belém`, Brazil e Mobile. A tabela Pages confirmou a associação com `https://luanalves.com.br/criacao-de-sites-belem`, sem barra.

As capturas do painel e CSV com volumes ficaram em `.tmp-dev`, fora do Git público. Contagens confirmadas como zero foram registradas como zero; ausência de uma linha ou de uma métrica permaneceu indisponível. Nenhuma conversa, informação pessoal de contato ou volume comercial foi consultado.

## Interpretação e comparação futura

O volume neste recorte é insuficiente para um teste A/B ou conclusão causal. Não se compara uma posição média de consulta × país × dispositivo com a posição agregada da página, nem se soma a tabela de consultas como se fosse o total da página. O painel alerta que dados filtrados podem ser parciais. A associação com a versão sem barra é coerente com [a inspeção de canonical](2026-10-04-issue-4-gsc-canonicals.md).

Depois da publicação, registrar a data/versão efetiva e uma janela de 28 dias com os mesmos filtros. Incluir as variantes durante a consolidação de canonical, conferir a tabela Pages e preservar períodos equivalentes. Separar mudanças de oferta, origem do tráfego e cliques de validação. O período comercial inicial de 04/10–31/10 definido na issue 16 não é automaticamente uma janela posterior às correções, pois os PRs ainda não foram publicados.

Conversas e leads qualificados dependem do registro privado de Luan. A escolha de experimento permanece pendente até haver esses dados; se o volume continuar insuficiente, preferir uma revisão qualitativa/sequencial com hipótese, métrica principal e proteção de qualidade explicitadas. Este registro conclui a coleta desta referência de GSC, não a comparação pós-publicação nem todos os critérios da issue 17. Nenhuma automação foi criada.
