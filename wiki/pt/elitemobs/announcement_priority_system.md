O Sistema de Prioridade de Anúncios gere a importância das mensagens do EliteMobs. Atualmente, estas são usadas apenas
para gerir as mensagens enviadas por aparições de Chefes Personalizados.

# Guia rápido:

* Nível 0: Silencioso / Local para jogadores que lutaram contra o chefe
* Nível 1: Mensagens no Chat (se tiver mensagens de aparecimento)
*   Nível 2: Rastreamento (se tiver uma mensagem de localização)
* Nível
  3: [Anúncios no Discord (se tiver mensagens de aparecimento e o DiscordSRV estiver instalado e configurado corretamente)]($language$/elitemobs/discordsrv.md)

# Como funciona:

Nota: Precisa de configurar o seu Chefe Personalizado com este sistema de prioridade se quiser usar um valor não padrão.
Clique [aqui]($language$/elitemobs/creating_bosses.md&section=announcementpriority) para aprender como fazê-lo.

## Nível 0

Força o Chefe Personalizado a ser silencioso. Isto significa que nenhuma mensagem será enviada sobre ele, mesmo que
esteja configurado para as ter, com uma exceção: Irão enviar mensagens de morte diretamente para os jogadores que
causaram dano ao chefe.

## Nível 1

**Este é o padrão.** O Chefe Personalizado poderá enviar uma mensagem no chat se estiver configurado para o fazer. Irão
enviar mensagens de aparecimento, morte e fuga se estiverem configurados para as ter.

## Nível 2

O Chefe Personalizado terá o mesmo comportamento que no Nível 1, e também poderá ser rastreado pelos jogadores após
aparecer, se tiver uma mensagem de localização associada a ele. Os jogadores podem clicar no chat para o rastrear quando
aparece, ou podem usar o menu /em para o rastrear.

## Nível 3

O Chefe Personalizado terá o mesmo comportamento que no Nível 2, e também enviará mensagens para a sala do Discord
configurada para enviar notificações sobre o
EliteMobs. [A página sobre como configurar esta funcionalidade pode ser encontrada aqui.]($language$/elitemobs/discordsrv.md)
As mensagens no Discord serão as mesmas que as mensagens no chat - aparecimento/morte/fuga.
