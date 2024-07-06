# Comandos de Usuário e Admin

*Observação: Todas as permissões do jogador são definidas como true por padrão. Isso significa que elas já estão configuradas.*

*Se você não quiser que os jogadores tenham acesso a um recurso específico por meio de permissões, terá que negar a permissão ao jogador!*

| Comando | Descrição |
|---------|:-----------:|
| `/elitemobs` / `/em` | Comando principal, condensa todas as informações do jogador no plugin em um menu fácil de acessar. *Observação:* todos os outros comandos do usuário estão nesse comando principal. `/em menu` também é um comando válido para isso |
| `/adventurersguild` / `/ag`     |Em uma configuração recomendada, teletransporta o jogador para o mundo da Guilda de Aventureiros, onde ele interage com os vários NPCs do EliteMobs.|
| `/shareitem`     |Cria um link de um item no chat para que outros jogadores vejam suas estatísticas.|
| `/em help`     |Lista todos os comandos. Os comandos de usuário restantes geralmente são substituídos pelo uso de NPCs ou pela interface `/em`!|
| `/em wallet`     |Exibe o dinheiro do jogador.|
| `/em pay <username> <amount>`     |Permite que os jogadores se paguem. As transações são taxadas em uma quantia configurável.|
| `/em updateitem`     |Atualiza a descrição de um item caso ele tenha sido dessincronizado. Esse comando destina-se a fins de depuração e não é necessário no jogo normal.|
| `/em spawntp`     |Teletransporta um jogador para a geração do servidor.|

## Comandos de NPC

Esses comandos só são úteis se você não tiver o Centro da Guilda de Aventureiros com NPCs instalado. 

É recomendável instalá-los para executar todos esses comandos por meio de NPCs em vez de fazer os jogadores lembrar como os comandos funcionam.

| Comando | Descrição |
|---------|:-----------:|
| `/em rank`     |     Abre o menu de níveis ou teletransporta os jogadores para o centro da Guilda de Aventureiros.     |
| `/em shop`     |     Acessa a loja ou teletransporta os jogadores para o Centro da Guilda de Aventureiros.     |
| `/em customshop`     |     Acessa a loja personalizada ou teletransporta os jogadores para o centro da Guilda de Aventureiros.     |
| `/em repair`     |     Acessa o menu de reparo ou teletransporta os jogadores para o centro da Guilda de Aventureiros.     |
| `/em enchant`     |     Acessa o menu de encantamento ou teletransporta os jogadores para o centro da Guilda de Aventureiros.     |
| `/em scrap`     |     Acessa o menu de sucata ou teletransporta os jogadores para o centro da Guilda de Aventureiros.     |
| `/em unbind`     |     Acessa o menu de desvinculação ou teletransporta os jogadores para o centro da Guilda de Aventureiros.     |

## Comandos de usuário internos

**Esses comandos são destinados a ser executados a partir de menus no jogo, como missões no menu de missões. Se nenhuma instrução for escrita sobre como obter um ID, isso significa que não é possível obter esse ID de outra forma além de executar o comando no menu no jogo.** Por conveniência, esses comandos foram divididos nas categorias identificáveis e não identificáveis.

### Identificáveis

| Comando | Descrição |
|---------|:-----------:|
|`/em dungeontp <dungeonid>`         |Teletransporta um jogador para uma masmorra.|
*Observação: isso é destinado a ser executado no menu `/em`, pois é impossível para os jogadores adivinharem IDs de masmorra. Os IDs das masmorras são os mesmos que os nomes de arquivo .yml em `~/plugins/EliteMobs/dungeonpackages/`. <br/>Você pode ver os IDs no console ao usar o comando `/em` e escolher um teletransporte na página Teletransportes.*

### Não Identificáveis

| Comando | Descrição |
|---------|:-----------:|
| `/em quest accept <questID>`     |     Aceita uma missão.     |
| `/em quest track <questID>`     |     Rastreia uma missão.     |
| `/em quest complete <questID>`     |     Conclui uma missão.     |
| `/em quest leave <questID>`     |     Sai de uma missão.     |
| `/em trackcustomboss <uuid>`     |     Rastreia um chefe personalizado. Observação: isso é destinado a ser executado no menu `/em`, pois é impossível para os jogadores adivinharem UUIDs de chefe.     |

# Comandos de Admin

<div>

**> > > `elitemobs.*` - Permissão de administrador para o EliteMobs para acesso total! < < <**

</div>

| Comando | Descrição |
|---------|:-----------:|
| `/em setup`     |     Abre o menu de configuração principal.     |
| `/em setup area <areaName>`     |     Protege uma área usando o WorldGuard, usada para Mini-Masmorras e o Centro Mundial da Guilda de Aventureiros. Observação: Você não precisa executar isso manualmente ao configurar as coisas usando o método de configuração recomendado.     |
| `/em spawnelite <entityType> <level> <power1> <power2> <power3>`     |     Gera uma Elite com base no tipo de entidade.     |
| - `/em spawnlocationelite <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     Gera uma Elite com base no tipo de entidade e localização.     |
| `/em spawncustom <fileName>`     |     Gera um Chefe Personalizado a partir de um arquivo de configuração.     |
| `/em spawncustomlevel <fileName> <level>`     |     Gera um Chefe Personalizado a partir de um arquivo de configuração e substitui o nível.     |
| `/em spawnlocationcustom <filename> <worldName> <x> <y> <z>`     |     Gera um Chefe Personalizado a partir de um arquivo de configuração em uma localização.     |
| `/em spawnlocationcustomlevel <filename> <worldName> <x> <y> <z>`     |     Gera um Chefe Personalizado a partir de um arquivo de configuração em uma localização e substitui o nível.     |
| `/em spawnsuper <EntityType>`     |     Gera um Super Mob com base no tipo de entidade.     |
| `/em addSpawnLocation <fileName>`     |     Adiciona uma localização de geração a um Chefe Regional.     |
| `/em addTreasureChest <fileName>`     |     Adiciona um baú do tesouro na localização em que o jogador está.     |
| `/em setLeashRadius <fileName> <radius>`     |     Adiciona uma localização de geração a um Chefe Regional.     |
| `/em remove`     |     Remove permanentemente uma entidade Elite Mob. Elites/Regionais/Super/NPCs funcionam. Execute novamente para sair do modo de remoção.     |
| `/em debug <name>`     |     Remove permanentemente uma entidade Elite Mob. Elites/Regionais/Super/NPCs funcionam. Execute novamente para sair do modo de remoção.     |
| `/em debug <name>`     |     Abre uma tela de depuração para jogadores ou chefes regionais.     |
| `/em event <eventName>`     |     Inicia um evento cronometrado personalizado.     |
| `/em spawnnpc <npcFileName>`     |     Gera um NPC.     |
| `/em stats`     |     Obtém as estatísticas das entidades e jogadores do EliteMobs atualmente ativos.     |
| `/em getloot`     |     Abre um menu onde você pode obter qualquer Loot Personalizado.     |
| `/em getloot <filename>`     |     Obtém loot personalizado específico.     |
| `/em giveloot <filename> <player>`     |     Dê loot personalizado específico a um jogador.     |
| `/em simloot <level>`     |     Simula drops de um Mob Elite do nível definido.     |
| `/em simloot <level> <times>`     |     Simula drops de um Mob Elite do nível definido uma determinada quantidade de vezes.     |
| `/em version`     |     Obtém a versão do plugin.     |
| `/em reload`     |     Recarrega o plugin. Funciona quase sempre.     |
| `/em killaggressive`     |     Mata todos os Mobs Elite agressivos.     |
| `/em killaggressive <radius>`     |     Mata todos os Mobs Elite agressivos em um raio.     |
| `/em killpassive`     |     Mata todos os Super Mobs passivos.     |
| `/em killpassive <radius>`     |     Mata todos os Super Mobs passivos em um raio.     |
| `/em killtype <entityType>`     |     Mata todas as elites de um tipo específico.     |
| `/em killtype <entityType> <radius>`     |     Mata todas as elites de um tipo específico em um raio.     |
| `/em gettier <tier>`     |     Obtém itens de depuração para fins de teste.     |
| `/em money add <username> <amount>`     |     Adiciona uma quantia definida de dinheiro a um jogador.     |
| `/em money addall <amount>`     |     Adiciona uma quantia definida de dinheiro a todos os jogadores online.     |
| `/em money remove <username> <amount>`     |     Remove uma quantia definida de dinheiro de um jogador.     |
| `/em money set <username> <amount>`     |     Define a quantia total de moeda de um jogador.     |
| `/em setrank <player> <prestigetier> <guildtier>`     |     Define o nível de guilda de um jogador.     |
| `/em discord`     |     Obtém o link para o servidor Discord de suporte.     |
| `/em discord <message>`     |     Publica uma mensagem de depuração no Discord se o DiscordSRV estiver configurado corretamente.     |
| `/em forceunbind`     |     Desvincula um item vinculado a alma que está sendo segurado.     |
| `/em relativecoords <minidungeon>`     |     Obtém as coordenadas relativas para uma masmorra instalada.     |
| `/em wallet <player>`     |     Verifica a moeda de um jogador específico.     |
| `/em fireball`     |     Gera uma bola de fogo para testar a regeneração de explosão elite.     |
| `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`     |     Veja [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     Veja [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksarea <regional_boss_file.yml> <on_spawn/on_remove>`     |     Veja [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksareaedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     Veja [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em cancelblocks`     |     Veja [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em debugmode`     |     Ativa o modo de depuração, mostrando a geração e o desaparecimento de mobs no console e permitindo o rastreamento.     |

## Comandos de administrador internos

Esses comandos são destinados a serem executados ao interagir com menus ou texto interativo no bate-papo, e não manualmente.

| Comando | Descrição |
|---------|:-----------:|
| `/em setup done`     |     Para de mostrar mensagens no login do administrador.     |
| `/em setup minidungeon <minidungeonName>`     |     Instala uma Mini-Masmorra.     |
| `/em setup minidungeon <minidungeonName>`     |     Desinstala uma Mini-Masmorra.     |
| `/em trace <uuid>`     |     Rastreia as gerações/desaparecimentos de um Chefe Personalizado. Requer que o modo de depuração esteja ativado.     |
| `/em debugtp <uuid>`     |     Teletransporta para a localização de um Chefe Personalizado rastreado. Requer que o modo de depuração esteja ativado.     |
| `/em generateresourcepack`     |     Gera um pacote de recursos. Verifique a entrada do wiki sobre Modelos Personalizados sobre como usar isso.     |
| `/em updateresourcepack`     |     Atualiza o SHA1 do pacote de recursos na configuração server.properties. Verifique a entrada do wiki sobre Modelos Personalizados sobre como usar isso.     |

# Permissões brutas:
```
permissions:
  elitemobs.*:
    description: Gives access to all elitemobs commands
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: Allows players to run /elitemobs stats
    default: op
  elitemobs.version:
    description: Allows players to run /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.shop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.customshop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.customshop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.currency.pay:
    description: Allows players to run /elitemobs pay [username] [amount]
    default: true
  elitemobs.currency.check:
    description: Allows players to run /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Allows players to run /elitemobs check [username]
    default: op
  elitemobs.events:
    description: Allows players to launch all events
    default: true
  elitemobs.checktier.others:
    description: Allows players to run /elitemobs checktier [player]
    default: op
  elitemobs.gettier:
    description: Allows players tu run /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: Allows players to get notified about plugin updates
    default: op
  elitemobs.adventurersguild.teleport:
    description: Allows players to teleport to the adventurer's guild hub using /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Allows players to rank menu using the /em adventurersguild command
    default: true
  elitemobs.rank.command:
    description: Allows players to open the rank menu through /em rank
    default: true
  elitemobs.rank.npc:
    description: Allows players to access the /em rank menu through NPCs
    default: true
  elitemobs.quest.command:
    description: Allows players to take on quests via command
    default: true
  elitemobs.quest.npc:
    description: Allows players to take on quests via EliteMobs NPC
    default: true
  elitemobs.dungeontp:
    description: Allows players to teleport to an elitemobs-set location
    default: true
  elitemobs.spawntp:
    description: Allows players to teleport to the default spawn location of the server.
    default: true
  elitemobs.back.npc:
    description: Allows players to interact with an npc to go back to a previous location.
    default: true
  elitemobs.shareitem:
    description: Shares a held Elite Item on chat.
    default: true
  elitemobs.scrap.npc:
    description: Allows players to scrap items at an npc
    default: true
  elitemobs.scrap.command:
    description: Allows players to scrap items using a command
    default: true
  elitemobs.smelt.command:
    description: Allows players to smelt items using a command
    default: true
  elitemobs.smelt.npc:
    description: Allows players to smelt items using an npc
    default: true
  elitemobs.repair.command:
    description: Allows players to use the repair command to open the menu for repairing elite items
    default: true
  elitemobs.repair.npc:
    description: Allows players to interact with the NPC for repairing items
    default: true
  elitemobs.refiner.command:
    description: Allows players to use the refiner command to open the menu for upgrading Elite Scrap
    default: true
  elitemobs.refiner.npc:
    description: Allows players to interact with the NPC for upgrading Elite Scrap
    default: true
  elitemobs.enhancer.command:
    description: Allows players to use the enhancer command to open the menu for upgrading Elite Items
    default: true
  elitemobs.enhancer.npc:
    description: Allows players to interact with the NPC for upgrading Elite Items
    default: true
  elitemobs.unbind.command:
    description: Allows players to use the unbind command to open the menu for unbinding Elite Items
    default: true
  elitemobs.unbind.npc:
    description: Allows players to interact with the unbinder NPC for unbind Elite Items
    default: true
  elitemobs.soulbind.bypass:
    description: Allows users to bypass the soulbind restrictions. Only recommended for admins!
    default: false
  elitequest.*:
    description: Used for quest-related permissions
    default: false
    op: false
```

