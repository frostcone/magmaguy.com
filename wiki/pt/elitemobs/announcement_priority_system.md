O Sistema de Prioridade de Anúncios gere a importância das mensagens do EliteMobs. Atualmente, são apenas usados para gerir as mensagens enviadas pelos spawns de Bosses Personalizados.

# Guia rápido:

*   Nível 0: Silencioso / Local para jogadores que lutaram contra o boss
*   Nível 1: Mensagens de Chat (se tiver mensagens de spawn)
*   Nível 2: Rastreamento (se tiver uma mensagem de localização)
*   Nível 3: [Anúncios no Discord (se tiver mensagens de spawn e o DiscordSRV estiver instalado e configurado corretamente)]($language$/elitemobs/discordsrv.md)

# Como funciona:

Nota: Precisa de configurar o seu Boss Personalizado com este sistema de prioridade se quiser usar um valor não padrão. Clique [aqui]($language$/elitemobs/creating_bosses.md&section=announcementpriority) para saber como fazer isso.

## Nível 0

Força o Boss Personalizado a ficar silencioso. Isto significa que nenhuma mensagem será enviada sobre ele, mesmo que esteja configurado para as ter, com uma exceção: Enviarão mensagens de morte diretamente para os jogadores que danificaram o boss.

## Nível 1

**Este é o padrão.** O Boss Personalizado poderá enviar uma mensagem no chat se estiver configurado para o fazer. Enviarão mensagens de spawn, morte e
fuga se estiverem configurados para as ter.

## Nível 2

O Boss Personalizado terá o mesmo comportamento que no Nível 1, e também poderá ser rastreado pelos jogadores ao fazer spawn se tiver uma mensagem de localização associada a ele. Os jogadores podem clicar no chat para o rastrear quando faz spawn, ou podem usar o menu /em para o rastrear.

## Nível 3

O Boss Personalizado tem o mesmo comportamento que no Nível 2, e também enviará mensagens para a sala do Discord configurada para enviar notificações sobre o EliteMobs. [A página sobre como configurar esta funcionalidade pode ser encontrada aqui.]($language$/elitemobs/discordsrv.md) As mensagens no discord serão as mesmas que as mensagens do chat - spawn/morte/fuga