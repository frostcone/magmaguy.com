O Sistema de Prioridade de Anúncios gerencia a importância das mensagens do EliteMobs. Atualmente, eles são usados apenas para gerenciar as mensagens enviadas pelos spawns de Custom Bosses.

# Folha de dicas resumida:

*   Nível 0: Silencioso / Local para jogadores que lutaram contra o chefe
*   Nível 1: Mensagens de Chat (se tiver mensagens de spawn)
*   Nível 2: Rastreamento (se tiver uma mensagem de localização)
*   Nível 3: [Anúncios do Discord (se tiver mensagens de spawn e o DiscordSRV estiver instalado e configurado corretamente)]($language$/elitemobs/discordsrv.md)

# Como funciona:

Nota: Você precisa configurar seu Custom Boss com este sistema de prioridade se quiser usar um valor diferente do padrão. Clique [aqui]($language$/elitemobs/creating_bosses.md&section=announcementpriority) para aprender como fazer isso.

## Nível 0

Força o Custom Boss a ficar em silêncio. Isso significa que nenhuma mensagem será enviada sobre ele, mesmo que ele esteja configurado para tê-las, com uma exceção: eles enviarão mensagens de morte diretamente para os jogadores que causaram dano ao chefe.

## Nível 1

**Este é o padrão.** O Custom Boss poderá enviar uma mensagem no chat se estiver configurado para fazê-lo. Ele enviará mensagens de spawn, morte e escape se estiver configurado para tê-las.

## Nível 2

O Custom Boss terá o mesmo comportamento do Nível 1 e também poderá ser rastreado pelos jogadores ao spawnar se tiver uma mensagem de localização associada a ele. Os jogadores podem clicar no chat para rastreá-lo quando ele spawnar, ou podem usar o menu `/em` para rastreá-lo.

## Nível 3

O Custom Boss terá o mesmo comportamento do Nível 2 e também enviará mensagens para a sala do Discord configurada para enviar notificações sobre o EliteMobs. [A página sobre como configurar este recurso pode ser encontrada aqui.]($language$/elitemobs/discordsrv.md) As mensagens no Discord serão as mesmas das mensagens de chat - spawn/morte/escape

