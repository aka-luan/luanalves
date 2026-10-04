# Issue 16: recebimento e linha de base

Observação em 03/10/2026, aproximadamente 21:17–21:22, America/Sao_Paulo. Responsável pelo registro comercial: Luan Alves.

## Recebimento em produção

O código publicado já usava o ID GA4 configurado no projeto. Foi consultado Realtime, All Users, janela móvel de 30 minutos. O quadro inicial mostrava page_view e user_engagement. Depois de dois cliques de validação no CTA da home e um no serviço Criação de Sites após navegação interna via Barba, o painel mostrou whatsapp_click=3, com home_hero=2, service_hero=1 e rótulo Solicitar orçamento. As contagens coincidem com as ações realizadas, sem duplicidade observada nessa amostra. Nenhuma mensagem foi enviada no WhatsApp.

As capturas originais do painel foram conservadas localmente, fora deste PR: contêm contexto da conta e do mapa de visitas. Este registro publica somente as ações sintéticas de validação. Não foram consultadas conversas comerciais. Realtime é agregado; a amostra não garante entrega de todo clique futuro nem identifica a origem de uma conversa. Fonte/canal não estavam disponíveis: foram registrados como desconhecidos.

O título/URL mudou de home para Criação de Sites após a transição, e o painel de páginas mostrou ambos. Não foi feita auditoria de rede de todos os parâmetros automáticos do Google. A exclusão de telefone, mensagem e URL de WhatsApp do payload personalizado é coberta pelo contrato do código e pelos testes.

## Código e qualidade

Não foi instalada outra tag ou instrumentação. O PR 24 acrescenta cobertura para clique no elemento filho, fallback de aria-label, falha do Google sem interromper Vercel e cleanup repetido. A validação integrada dos PRs 24/25/26 em 04/10/2026 passou no build de 28 páginas e em 18 testes; este PR altera apenas documentação e modelos CSV.

O [registro dos cliques sintéticos](issue-16-initial-baseline.csv) separa essas ações da demanda comercial. Campos vazios representam informação indisponível, não zero. O [owner de analytics](../analytics.md) define os estágios de conversa, qualificação, proposta e contrato; o [modelo de linha de base](../analytics-baseline-template.csv) recebe volumes somente em cópia privada.

## Aceite pendente

O período inicial foi definido para 04/10–31/10/2026, primeiros 28 dias completos após o recebimento validado. Luan precisa registrar volumes e fontes de conversas, qualificados, propostas e contratos. Essas informações e a passagem do período continuam pendentes. Os três cliques de teste não são uma linha de base comercial nem autorizam encerrar a issue 16 ou concluir a comparação da issue 17.
