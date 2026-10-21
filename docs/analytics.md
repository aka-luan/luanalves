# Analytics e funil comercial

Responsável: Luan Alves. Atualizado em 2026-10-03 (America/Sao_Paulo).

## Estado observado

O proprietário aceitou os termos e a conta Luan Alves foi criada no Google Analytics em akaluan.la@gmail.com. Propriedade luanalves.com.br (557237539), conta 410569106, fuso São Paulo e moeda BRL. Fluxo Web Luan Alves — Website: 16017714047; ID público G-MWZHK1N4TN. Dimensões de evento cta_position (Posição do CTA) e cta_label (Rótulo do CTA) criadas. Medição otimizada desativada para evitar pageviews de histórico duplicados e coleta automática de URLs de WhatsApp. Recebimento em produção confirmado em 2026-10-03: dois cliques home_hero e um service_hero após navegação Barba, todos com rótulo Solicitar orçamento. Ver [evidência da issue #16](validation/2026-10-03-issue-16-analytics.md). Ausência de dados comerciais não significa zero leads.

## Ativação e validação do GA4

O ID confirmado já é o padrão no BaseLayout. PUBLIC_GOOGLE_ANALYTICS_ID permite substituir o fluxo; um valor vazio desativa a coleta. O ID é público e não é uma credencial. Ver [.env.example](../.env.example). A tag gtag.js é assíncrona e só coleta em luanalves.com.br ou www.luanalves.com.br; localhost e previews ficam fora da linha de base. Não instalar outra tag GA4/GTM para o mesmo fluxo.

Em futuras alterações, abrir Realtime/DebugView e registrar um clique na home e outro após navegar para um serviço via Barba. Clicar também no ícone/elemento filho. Para cada ação física, esperar um whatsapp_click com posição e rótulo corretos; capturar evidência, data, URL e quantidade. Verificar um page_view por navegação, título atualizado, referrer coerente e nenhuma URL de conversa no payload. Dimensões personalizadas podem levar 24–48 horas para aparecer nos relatórios.

Tratar whatsapp_click como intenção de contato; não como conversa, lead qualificado ou venda. Os parâmetros UTM padronizados alimentam a atribuição da sessão; criar campanhas sem nomes, e-mails, telefones ou outros dados pessoais. Queries não reconhecidas não são repassadas. Google Signals e personalização de anúncios ficam desativados no código. A revisão de privacidade já registrada em PLANS.md continua com o proprietário.

## Contrato dos eventos

| Evento | Quando | Campos | Interpretação |
| --- | --- | --- | --- |
| page_view | Primeira carga e navegação Barba concluída | page_path, page_location, page_title, page_referrer | Visita a uma página; URL sem query/hash |
| whatsapp_click | Clique delegado em link HTTPS do domínio wa.me | page_path, page_title, cta_label, cta_position | Intenção de contato; não comprova envio |

Posições são atributos explícitos no HTML: home_hero, service_hero, segment_hero, header, mobile_menu, mobile_menu_secondary, home_final, service_final, segment_final, about_hero, about_final, portfolio_final, insights_final, article_sidebar, article_author, article_faq, article_related_link, footer_contact, footer_social e not_found_help. Página + posição distinguem CTAs compartilhados. unclassified é um sinal de instrumentação faltante a investigar. Ícones e conteúdo aria-hidden não entram no rótulo; href, telefone e mensagem não são propriedades do evento. O listener é único e o cleanup é idempotente; novos nós do Barba são cobertos pela delegação.

## Funil e registro privado

O PR 24 acrescenta as posições case_final e service_after_case. O recebimento descrito acima cobre apenas home_hero e service_hero; revalidar as novas posições depois da publicação, incluindo clique no elemento filho e navegação interna.

Luan registra conversas diariamente e revisa o funil semanalmente. Usar uma cópia privada de [lead-funnel-template.csv](lead-funnel-template.csv), fora deste repositório público. O template contém apenas cabeçalhos. Identificador opaco liga os estágios de uma mesma oportunidade; não copiar mensagens, nomes, telefones ou e-mails para analytics ou para o Git.

| Estágio | Definição operacional | Fonte de confirmação |
| --- | --- | --- |
| Clique | Ação no CTA medida pelo site | GA4/Vercel; agregado |
| Conversa iniciada | Primeira mensagem recebida com intenção comercial; deduplicar a oportunidade | Registro privado do WhatsApp |
| Lead qualificado | Empresa/projeto identificado, necessidade atendida pela oferta, interlocutor com poder de decisão ou acesso ao decisor, prazo e orçamento discutidos com próximo passo viável | Luan confirma no atendimento |
| Proposta enviada | Escopo e preço enviados para oportunidade qualificada | Registro comercial privado |
| Contrato fechado | Aceite formal/contrato e condição de início confirmados | Registro comercial privado |

Se orçamento, prazo ou decisor ainda não foram identificados, manter Em qualificação. Registrar motivo de perda com categorias, sem transcrição de conversa. Página/canal da conversa só devem ser atribuídos quando conhecidos pelo link/contexto ou informados pelo contato; usar desconhecido quando não houver evidência. Não tratar a razão conversas/cliques como conversão individual auditável: há retorno posterior, cliques repetidos, bloqueadores e canais distintos.

## Linha de base

Período inicial: 2026-10-04 a 2026-10-31, os primeiros 28 dias completos após a validação de recebimento em produção de 2026-10-03. Luan preenche semanalmente: visitas e whatsapp_click por página, posição e canal; conversas únicas; qualificados; propostas; contratos; motivos de perda. Registrar fonte, período, fuso e filtros. A [observação inicial](validation/issue-16-initial-baseline.csv) registra somente três cliques de validação; os volumes comerciais continuam indisponíveis, nunca assumir zero. Manter tráfego de validação identificado e excluído da comparação comercial quando possível. Reportar qualificados/conversas, propostas/qualificados e contratos/propostas; evitar conclusões com denominadores pequenos.

Usar uma cópia privada de [analytics-baseline-template.csv](analytics-baseline-template.csv). Uma linha por período, fonte e recorte de página/canal/posição; campos sem medição ficam vazios (indisponíveis), enquanto zero exige fonte consultada e ausência confirmada. Datas usam ISO 8601 e o fuso America/Sao_Paulo. Não somar GA4 e Vercel: ambos medem os mesmos cliques com coberturas diferentes. Não repetir volumes comerciais em cada posição de CTA; manter linhas separadas com source_system=registro_comercial e apenas a atribuição conhecida. evidence_reference aponta para exportação ou captura privada, sem dados pessoais. validation_clicks registra o tráfego de teste conhecido, sem presumir que cada tentativa foi recebida.

Referências: [pageviews no GA4](https://developers.google.com/analytics/devguides/collection/ga4/views), [navegação SPA](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications), [eventos Vercel](https://vercel.com/docs/analytics/custom-events).
