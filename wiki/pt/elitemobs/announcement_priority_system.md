O Sistema de Prioridade de Anúncios gere a importância das mensagens do EliteMobs. Atualmente, estas são apenas
utilizadas para gerir as mensagens enviadas por spawns de Bosses Personalizados.

# Guia de consulta rápida:

* Nível 0: Silencioso / Local para jogadores que lutaram contra o boss
* Nível 1: Mensagens no Chat (se tiver mensagens de spawn)
*   Nível 2: Rastreamento (se tiver uma mensagem de localização)
* Nível
  3: [Anúncios no Discord (se tiver mensagens de spawn e o DiscordSRV estiver instalado e configurado corretamente)]($language$/elitemobs/discordsrv.md)

# Como funciona:

Nota: Precisa de configurar o seu Boss Personalizado com este sistema de prioridade se quiser usar um valor não padrão.
Clique [aqui]($language$/elitemobs/creating_bosses.md&section=announcementpriority) para aprender como fazer isso.

## Nível 0

Força o Boss Personalizado a ficar silencioso. Isto significa que nenhuma mensagem será enviada sobre ele, mesmo que
esteja configurado para as ter, com uma exceção: Enviarão mensagens de morte diretamente aos jogadores que danificaram o
boss.

## Nível 1

**Este é o padrão.** O Boss Personalizado poderá enviar uma mensagem no chat se estiver configurado para o fazer.
Enviarão mensagens de spawn, morte e fuga se estiverem configurados para as ter.

## Nível 2

O Boss Personalizado terá o mesmo comportamento do Nível 1 e também poderá ser rastreado pelos jogadores ao aparecer se
tiver uma mensagem de localização associada. Os jogadores podem clicar no chat para rastreá-lo quando ele aparece ou
podem usar o menu /em para rastreá-lo.

## Nível 3

O Boss Personalizado tem o mesmo comportamento do Nível 2 e também enviará mensagens para a sala do Discord configurada
para enviar notificações sobre o
EliteMobs. [A página sobre como configurar esta funcionalidade pode ser encontrada aqui.]($language$/elitemobs/discordsrv.md)
As mensagens no Discord serão as mesmas das mensagens do chat - spawn/morte/fuga
