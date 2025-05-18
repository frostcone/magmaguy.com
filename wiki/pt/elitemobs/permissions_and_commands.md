Aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# Comandos de utilizador

*Nota: Todas as permissões de jogador estão definidas como verdadeiras por padrão. Isto significa que já estão configuradas.*

*Se não quiser que os jogadores tenham acesso a uma característica específica através de permissões, terá de negar essa permissão a esse jogador!*

| Comando |    Descrição    |
|---------|:-----------------:|
| `/elitemobs` / `/em` | Comando principal, condensa toda a informação do jogador no plugin num menu de fácil acesso. *Nota:* todos os outros comandos de utilizador estão neste comando principal. |
| `/adventurersguild` / `/ag`     |Numa configuração recomendada, teletransporta o jogador para o mundo da guilda de aventureiros onde interage com os vários NPCs do EliteMobs.|
| `/em shareItem`     |Liga um item no chat para que outros jogadores possam ver as suas estatísticas.|
| `/em help`     |Lista todos os comandos. Os restantes comandos de utilizador são geralmente substituídos pelo uso de NPCs ou pela interface `/em`! Pode passar o cursor sobre os comandos para obter uma descrição do que fazem. |
| `/em money check`     |Exibe o dinheiro do jogador.|
| `/em pay <username> <amount>`     |Permite que os jogadores paguem uns aos outros. As transações são taxadas num valor configurável.|
| `/em spawntp`     |Teletransporta um jogador para o spawn do servidor.|

## Comandos de NPC

Estes comandos só são úteis se não tiver o Hub da Guilda de Aventureiros com NPCs instalado.

É recomendado que os instale para executar todos estes comandos através de NPCs em vez de os jogadores terem de se lembrar de como os comandos funcionam.

| Comando | Descrição |
|---------|:-----------:|
| `/em rank`     |     Abre o menu de rank ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |
| `/em shop procedural <player>`     |     Acede à loja ou teletransporta os jogadores para o Hub da Guilda de Aventureiros.     |
| `/em shop sell <player>`     |     Acede ao menu de venda da loja ou teletransporta os jogadores para o Hub da Guilda de Aventureiros.     |
| `/em shop custom <player>`     |     Acede à loja personalizada ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |
| `/em repair`     |     Acede ao menu de reparação ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |
| `/em enchant`     |     Acede ao menu de encantamento ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |
| `/em scrap`     |     Acede ao menu de sucata ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |
| `/em unbind`     |     Acede ao menu de desvinculação ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |

## Comandos internos de utilizador

**Estes comandos destinam-se a ser executados a partir de menus dentro do jogo, como missões do menu de missões. Se não houver instruções escritas sobre como obter um ID, isso significa que não é possível obter esse ID a não ser executando o comando a partir do menu dentro do jogo.** Para conveniência, estes foram divididos nas categorias identificáveis e não identificáveis.

### Identificáveis

| Comando | Descrição |
|---------|-------------|
|`/em dungeontp <dungeonid>`         |Teletransporta um jogador para uma masmorra.|
*Nota: isto destina-se a ser executado a partir do menu `/em`, pois é impossível para os jogadores adivinhar os IDs das masmorras. Os IDs das masmorras são os mesmos que os nomes dos ficheiros .yml em `~/plugins/EliteMobs/dungeonpackages/`. <br/>Pode ver os IDs na consola ao usar o comando `/em` e escolher um teletransporte na página de Teletransportes.*

### Não identificáveis

| Comando | Descrição |
|---------|:-----------:|
| `/em quest accept <questID>`     |     Aceita uma missão.     |
| `/em quest track <questID>`     |     Rastreia uma missão.     |
| `/em quest complete <questID>`     |     Completa uma missão.     |
| `/em quest leave <questID>`     |     Abandona uma missão.     |
| `/em track boss <uuid>`     |     Rastreia um boss personalizado. Nota: isto destina-se a ser executado a partir do menu `/em`, pois é impossível para os jogadores adivinhar os UUIDs dos bosses.     |

# Comandos de administrador

<div>

**> > > `elitemobs.*` - Permissão de administrador para EliteMobs para acesso total! < < <**

</div>

| Comando | Descrição |
|---------|:-----------:|
| `/em setup`     |     Abre o menu de configuração principal.     |
| `/em spawn elite <entityType> <level> <power1> <power2> <power3>`     |     Gera um Elite baseado no tipo de entidade.     |
| - `/em spawn eliteAt <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     Gera um Elite baseado no tipo de entidade e localização.     |
| `/em spawn boss <fileName>`     |     Gera um Boss Personalizado a partir de um ficheiro de configuração.     |
| `/em spawn boss <fileName> <level>`     |     Gera um Boss Personalizado a partir de um ficheiro de configuração e substitui o nível.     |
| `/em spawn bossAt <filename> <worldName> <x> <y> <z>`     |     Gera um Boss Personalizado a partir de um ficheiro de configuração numa localização.     |
| `/em spawn bossAt <filename> <level> <worldName> <x> <y> <z>`     |     Gera um Boss Personalizado a partir de um ficheiro de configuração numa localização e substitui o nível.     |
| `/em place boss <fileName>`     |     Adiciona uma localização de spawn a um Boss Regional.     |
| `/em place treasureChest <fileName>`     |     Adiciona um baú de tesouro na localização onde o jogador está.     |
| `/em remove`     |     Remove permanentemente uma entidade Elite Mob. Elite/Regional/Super/NPCs todos funcionam. Execute novamente para sair do modo de remoção.     |
| `/em event <eventName>`     |     Inicia um evento cronometrado personalizado.     |
| `/em place npc <npcFileName>`     |     Gera um NPC.     |
| `/em stats`     |     Obtém as estatísticas para as entidades e jogadores EliteMobs atualmente ativos.     |
| `/em loot menu`     |     Abre um menu onde pode obter qualquer Loot Personalizado.     |
| `/em loot give <player> <filename>`     |     Dá loot personalizado específico a um jogador.     |
| `/em loot simulate <level>`     |     Simula drops de um Elite Mob do tier definido.     |
| `/em loot simulate <level> <times>`     |     Simula drops de um Elite Mob do tier definido um número definido de vezes.     |
| `/em version`     |     Obtém a versão do plugin.     |
| `/em reload`     |     Recarrega o plugin. Funciona quase sempre.     |
| `/em kill `     |     Mata todos os Elite Mobs agressivos.     |
| `/em kill <radius>`     |     Mata todos os Elite Mobs agressivos num raio.     |
| `/em kill type <entityType>`     |     Mata todos os elites de um tipo específico.     |
| `/em kill type <entityType> <radius>`     |     Mata todos os elites de um tipo específico num raio.     |
| `/em loot debug <level>`     |     Obtém itens de debug para fins de teste.     |
| `/em money add <username> <amount>`     |     Adiciona uma quantia definida de dinheiro a um jogador.     |
| `/em money addall <amount>`     |     Adiciona uma quantia definida de dinheiro a todos os jogadores online.     |
| `/em money remove <username> <amount>`     |     Remove uma quantia definida de dinheiro de um jogador.     |
| `/em money set <username> <amount>`     |     Define a quantia total de dinheiro que um jogador tem.     |
| `/em rank <player> <prestigeLevel> <guildLevel>`     |     Define o rank da guilda de um jogador.     |
| `/em discord`     |     Obtém o link para o servidor de suporte Discord.     |
| `/em discord <message>`     |     Publica uma mensagem de debug no Discord se o DiscordSRV estiver configurado corretamente.     |
| `/em unbind force`     |     Desvincula um item soulbound que está a segurar.     |
| `/em money check <player>`     |     Verifica o dinheiro que um jogador específico tem.     |
| `/em fireball`     |     Gera uma bola de fogo para testar a regeneração de explosão de elite.     |
| `/em transitiveBlocks register <filename> <ON_SPAWN/ON_REMOVE>`     |     Ver [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks edit <filename> <ON_SPAWN/ON_REMOVE>`     |     Ver [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em /em transitiveBlocks registerArea <filename> <ON_SPAWN/ON_REMOVE>`     |     Ver [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks editArea <filename> <ON_SPAWN/ON_REMOVE>`     |     Ver [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks cancel`     |     Ver [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em protection bypass`     |     Alterna a proteção de masmorra. Também funciona para a Guilda de Aventureiros.     |

## Comandos internos de administrador

Estes comandos destinam-se a ser executados ao interagir com menus ou texto interativo no chat, e não manualmente.

| Comando | Descrição |
|---------|:-----------:|
| `/em setup done`     |     Deixa de mostrar mensagens no login do administrador.     |
| `/em setup toggle <dungeonConfig>`     |   Permite alternar a instalação de conteúdo EliteMobs especificado.    |

# Permissões brutas:
```
permissions:
  elitemobs.*:
    description: Dá acesso a todos os comandos elitemobs
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.money.check.others: true
    default: op
  elitemobs.stats:
    description: Permite que os jogadores executem /elitemobs stats
    default: op
  elitemobs.version:
    description: Permite que os jogadores executem /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Permite que os jogadores interajam com NPCs para lojas dinâmicas
    default: true
  elitemobs.shop.command:
    description: Permite que os jogadores abram o menu da loja dinâmica através de comandos
    default: true
  elitemobs.customshop.npc:
    description: Permite que os jogadores interajam com NPCs para lojas dinâmicas
    default: true
  elitemobs.customshop.command:
    description: Permite que os jogadores abram o menu da loja dinâmica através de comandos
    default: true
  elitemobs.money.pay:
    description: Permite que os jogadores executem /elitemobs pay [username] [amount]
    default: true
  elitemobs.money.check:
    description: Permite que os jogadores executem /elitemobs wallet
    default: true
  elitemobs.money.check.others:
    description: Permite que os jogadores executem /elitemobs check [username]
    default: op
  elitemobs.events:
    description: Permite que os jogadores iniciem todos os eventos
    default: true
  elitemobs.checktier.others:
    description: Permite que os jogadores executem /elitemobs checktier [player]
    default: op
  elitemobs.gettier:
    description: Permite que os jogadores executem /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: Permite que os jogadores sejam notificados sobre atualizações do plugin
    default: op
  elitemobs.adventurersguild.teleport:
    description: Permite que os jogadores se teletransportem para o hub da guilda de aventureiros usando /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Permite que os jogadores acedam ao menu de rank usando o comando /em adventurersguild
    default: true
  elitemobs.rank.command:
    description: Permite que os jogadores abram o menu de rank através de /em rank
    default: true
  elitemobs.rank.npc:
    description: Permite que os jogadores acedam ao menu /em rank através de NPCs
    default: true
  elitemobs.quest.command:
    description: Permite que os jogadores aceitem missões via comando
    default: true
  elitemobs.quest.npc:
    description: Permite que os jogadores aceitem missões via NPC EliteMobs
    default: true
  elitemobs.dungeontp:
    description: Permite que os jogadores se teletransportem para uma localização definida pelo elitemobs
    default: true
  elitemobs.spawntp:
    description: Permite que os jogadores se teletransportem para a localização de spawn padrão do servidor.
    default: true
  elitemobs.back.npc:
    description: Permite que os jogadores interajam com um npc para voltar a uma localização anterior.
    default: true
  elitemobs.shareitem:
    description: Partilha um Item Elite que está a segurar no chat.
    default: true
  elitemobs.scrap.npc:
    description: Permite que os jogadores desfaçam itens num npc
    default: true
  elitemobs.scrap.command:
    description: Permite que os jogadores desfaçam itens usando um comando
    default: true
  elitemobs.smelt.command:
    description: Permite que os jogadores fundam itens usando um comando
    default: true
  elitemobs.smelt.npc:
    description: Permite que os jogadores fundam itens usando um npc
    default: true
  elitemobs.repair.command:
    description: Permite que os jogadores usem o comando de reparação para abrir o menu para reparar itens elite
    default: true
  elitemobs.repair.npc:
    description: Permite que os jogadores interajam com o NPC para reparar itens
    default: true
  elitemobs.refiner.command:
    description: Permite que os jogadores usem o comando de refinador para abrir o menu para melhorar Sucata Elite
    default: true
  elitemobs.refiner.npc:
    description: Permite que os jogadores interajam com o NPC para melhorar Sucata Elite
    default: true
  elitemobs.enhancer.command:
    description: Permite que os jogadores usem o comando de melhorador para abrir o menu para melhorar Itens Elite
    default: true
  elitemobs.enhancer.npc:
    description: Permite que os jogadores interajam com o NPC para melhorar Itens Elite
    default: true
  elitemobs.unbind.command:
    description: Permite que os jogadores usem o comando de desvinculação para abrir o menu para desvincular Itens Elite
    default: true
  elitemobs.unbind.npc:
    description: Permite que os jogadores interajam com o NPC de desvinculação para desvincular Itens Elite
    default: true
  elitemobs.soulbind.bypass:
    description: Permite que os utilizadores ignorem as restrições de soulbind. Recomendado apenas para administradores!
    default: false
  elitequest.*:
    description: Usado para permissões relacionadas com missões
    default: false
    op: false
```