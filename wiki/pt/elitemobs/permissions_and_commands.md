# Comandos de utilizador

*Nota: Todas as permissões dos jogadores estão definidas como verdadeiras por predefinição. Isto significa que já estão configuradas.*

*Se não quiser que os jogadores tenham acesso a uma funcionalidade específica através de permissões, terá de negar essa permissão ao jogador!*

| Comando |    Descrição    |
|---------|:-----------------:|
| `/elitemobs` / `/em` | Comando principal, condensa todas as informações do jogador no plugin num menu de fácil acesso. *Nota:* todos os outros comandos de utilizador estão neste comando principal. |
| `/adventurersguild` / `/ag`     |Numa configuração recomendada, teletransporta o jogador para o mundo da guilda dos aventureiros, onde eles interagem com os vários NPCs do EliteMobs.|
| `/em shareItem`     |Partilha um item no chat para que outros jogadores possam ver as suas estatísticas.|
| `/em help`     |Lista todos os comandos. Os restantes comandos de utilizador são geralmente substituídos pela utilização de NPCs ou da interface `/em`! Pode passar o cursor sobre os comandos para obter uma descrição do que eles fazem. |
| `/em money check`     |Mostra o dinheiro do jogador.|
| `/em pay <nome de utilizador> <quantia>`     |Permite que os jogadores paguem uns aos outros. As transações são taxadas com um valor configurável.|
| `/em spawntp`     |Teletransporta um jogador para um ponto de spawn do servidor.|

## Comandos de NPC

Estes comandos só são úteis se não tiver o Hub da Guilda de Aventureiros com NPCs instalados.

É recomendado que instale estes para executar todos estes comandos através de NPCs, em vez de fazer com que os jogadores se lembrem de como os comandos funcionam.

| Comando | Descrição |
|---------|:-----------:|
| `/em rank`     |     Abre o menu de rank ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |
| `/em shop procedural <jogador>`     |     Acessa a loja ou teletransporta os jogadores para o Hub da Guilda de Aventureiros.     |
| `/em shop sell <jogador>`     |     Acessa o menu de venda da loja ou teletransporta os jogadores para o Hub da Guilda de Aventureiros.     |
| `/em shop custom <jogador>`     |     Acessa a loja personalizada ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |
| `/em repair`     |     Acessa o menu de reparação ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |
| `/em enchant`     |     Acessa o menu de encantamento ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |
| `/em scrap`     |     Acessa o menu de sucata ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |
| `/em unbind`     |     Acessa o menu de desvinculação ou teletransporta os jogadores para o hub da Guilda de Aventureiros.     |

## Comandos internos do utilizador

**Estes comandos são destinados a serem executados a partir de menus do jogo, como missões do menu de missões. Se não forem escritas instruções sobre como obter um ID, então isso significa que não é possível obter esse ID a não ser executando o comando a partir do menu do jogo.** Por conveniência, estes foram divididos em categorias identificáveis e não identificáveis.

### Identificáveis

| Comando | Descrição |
|---------|-------------|
|`/em dungeontp <dungeonid>`         |Teletransporta um jogador para uma dungeon.|
*Nota: Isto destina-se a ser executado a partir do menu `/em`, pois é impossível para os jogadores adivinharem os IDs das dungeons. Os IDs das dungeons são os mesmos que os nomes dos ficheiros .yml em `~/plugins/EliteMobs/dungeonpackages/`.<br/>Pode ver os IDs na consola ao utilizar o comando `/em` e escolher um teletransporte na página de Teletransportes.*

### Não identificáveis

| Comando | Descrição |
|---------|:-----------:|
| `/em quest accept <questID>`     |     Aceita uma missão.     |
| `/em quest track <questID>`     |     Rastreia uma missão.     |
| `/em quest complete <questID>`     |     Completa uma missão.     |
| `/em quest leave <questID>`     |     Abandona uma missão.     |
| `/em track boss <uuid>`     |     Rastreia um boss personalizado. Nota: Isto destina-se a ser executado a partir do menu `/em`, pois é impossível para os jogadores adivinharem os UUIDs dos bosses.     |

# Comandos de administrador

<div>

**> > > `elitemobs.*` - Permissão de administrador para EliteMobs para acesso total! < < <**

</div>

| Comando | Descrição |
|---------|:-----------:|
| `/em setup`     |     Abre o menu de configuração principal.     |
| `/em spawn elite <tipo de entidade> <nível> <poder1> <poder2> <poder3>`     |     Gera um Elite com base no tipo de entidade.     |
| - `/em spawn eliteAt <tipo de entidade> <nome do mundo> <x> <y> <z> <nível> <poder1> <poder2> <poder3>`     |     Gera um Elite com base no tipo de entidade e localização.     |
| `/em spawn boss <nome do ficheiro>`     |     Gera um Boss Personalizado a partir de um ficheiro de configuração.     |
| `/em spawn boss <nome do ficheiro> <nível>`     |     Gera um Boss Personalizado a partir de um ficheiro de configuração e substitui o nível.     |
| `/em spawn bossAt <nome do ficheiro> <nome do mundo> <x> <y> <z>`     |     Gera um Boss Personalizado a partir de um ficheiro de configuração numa localização.     |
| `/em spawn bossAt <nome do ficheiro> <nível> <nome do mundo> <x> <y> <z>`     |     Gera um Boss Personalizado a partir de um ficheiro de configuração numa localização e substitui o nível.     |
| `/em place boss <nome do ficheiro>`     |     Adiciona uma localização de geração a um Boss Regional.     |
| `/em place treasureChest <nome do ficheiro>`     |     Adiciona um baú de tesouro na localização onde o jogador está parado.     |
| `/em remove`     |     Remove permanentemente uma entidade Elite Mob. Elite/Regional/Super/NPCs todos funcionam. Execute novamente para sair do modo de remoção.     |
| `/em event <nome do evento>`     |     Lança um evento personalizado cronometrado.     |
| `/em place npc <nome do ficheiro npc>`     |     Gera um NPC.     |
| `/em stats`     |     Obtém as estatísticas das entidades e jogadores EliteMobs atualmente ativos.     |
| `/em loot menu`     |     Abre um menu onde pode obter qualquer Loot Personalizado.     |
| `/em loot give <jogador> <nome do ficheiro>`     |     Dá loot personalizado específico a um jogador.     |
| `/em loot simulate <nível>`     |     Simula drops de um Elite Mob do nível definido.     |
| `/em loot simulate <nível> <vezes>`     |     Simula drops de um Elite Mob do nível definido um número definido de vezes.     |
| `/em version`     |     Obtém a versão do plugin.     |
| `/em reload`     |     Recarrega o plugin. Funciona quase sempre.     |
| `/em kill`     |     Mata todos os Elite Mobs agressivos.     |
| `/em kill <raio>`     |     Mata todos os Elite Mobs agressivos num raio.     |
| `/em kill type <tipo de entidade>`     |     Mata todos os elites de um tipo específico.     |
| `/em kill type <tipo de entidade> <raio>`     |     Mata todos os elites de um tipo específico num raio.     |
| `/em loot debug <nível>`     |     Obtém itens de depuração para fins de teste.     |
| `/em money add <nome de utilizador> <quantia>`     |     Adiciona uma quantia definida de dinheiro a um jogador.     |
| `/em money addall <quantia>`     |     Adiciona uma quantia definida de dinheiro a todos os jogadores online.     |
| `/em money remove <nome de utilizador> <quantia>`     |     Remove uma quantia definida de dinheiro de um jogador.     |
| `/em money set <nome de utilizador> <quantia>`     |     Define a quantia total de moeda de um jogador.     |
| `/em rank <jogador> <nível de prestígio> <nível da guilda>`     |     Define o rank da guilda de um jogador.     |
| `/em discord`     |     Obtém o link para o servidor de suporte Discord.     |
| `/em discord <mensagem>`     |     Publica uma mensagem de depuração no Discord se o DiscordSRV estiver configurado corretamente.     |
| `/em unbind force`     |     Desvincula um item com ligação de alma que está a ser segurado.     |
| `/em money check <jogador>`     |     Verifica a moeda de um jogador específico.     |
| `/em fireball`     |     Gera uma bola de fogo para testar a regeneração de explosão de elite.     |
| `/em transitiveBlocks register <nome do ficheiro> <ON_SPAWN/ON_REMOVE>`     |     Consulte [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks edit <nome do ficheiro> <ON_SPAWN/ON_REMOVE>`     |     Consulte [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em /em transitiveBlocks registerArea <nome do ficheiro> <ON_SPAWN/ON_REMOVE>`     |     Consulte [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks editArea <nome do ficheiro> <ON_SPAWN/ON_REMOVE>`     |     Consulte [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks cancel`     |     Consulte [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em protection bypass`     |     Alterna a proteção da dungeon. Também funciona para a Guilda de Aventureiros.     |

## Comandos internos do administrador

Estes comandos destinam-se a ser executados ao interagir com menus ou texto interativo no chat, e não manualmente.

| Comando | Descrição |
|---------|:-----------:|
| `/em setup done`     |     Deixa de mostrar mensagens ao iniciar sessão como administrador.     |
| `/em setup toggle <dungeonConfig>`     |   Permite-lhe alternar a instalação de conteúdo EliteMobs específico.    |

# Permissões brutas:
```
permissions:
  elitemobs.*:
    description: Dá acesso a todos os comandos elitemobs
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
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
    description: Permite que os jogadores abram o menu de loja dinâmico através de comandos
    default: true
  elitemobs.customshop.npc:
    description: Permite que os jogadores interajam com NPCs para lojas dinâmicas
    default: true
  elitemobs.customshop.command:
    description: Permite que os jogadores abram o menu de loja dinâmico através de comandos
    default: true
  elitemobs.currency.pay:
    description: Permite que os jogadores executem /elitemobs pay [nome de utilizador] [quantia]
    default: true
  elitemobs.currency.check:
    description: Permite que os jogadores executem /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Permite que os jogadores executem /elitemobs check [nome de utilizador]
    default: op
  elitemobs.events:
    description: Permite que os jogadores lancem todos os eventos
    default: true
  elitemobs.checktier.others:
    description: Permite que os jogadores executem /elitemobs checktier [jogador]
    default: op
  elitemobs.gettier:
    description: Permite que os jogadores executem /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: Permite que os jogadores sejam notificados sobre as atualizações do plugin
    default: op
  elitemobs.adventurersguild.teleport:
    description: Permite que os jogadores se teletransportem para o hub da guilda de aventureiros usando /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Permite que os jogadores abram o menu de ranks usando o comando /em adventurersguild
    default: true
  elitemobs.rank.command:
    description: Permite que os jogadores abram o menu de ranks através de /em rank
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
    description: Permite que os jogadores se teletransportem para uma localização definida por elitemobs
    default: true
  elitemobs.spawntp:
    description: Permite que os jogadores se teletransportem para a localização de spawn predefinida do servidor.
    default: true
  elitemobs.back.npc:
    description: Permite que os jogadores interajam com um npc para voltar a uma localização anterior.
    default: true
  elitemobs.shareitem:
    description: Partilha um Item Elite que está a ser segurado no chat.
    default: true
  elitemobs.scrap.npc:
    description: Permite que os jogadores coloquem itens em sucata num npc
    default: true
  elitemobs.scrap.command:
    description: Permite que os jogadores coloquem itens em sucata usando um comando
    default: true
  elitemobs.smelt.command:
    description: Permite que os jogadores fundam itens usando um comando
    default: true
  elitemobs.smelt.npc:
    description: Permite que os jogadores fundam itens usando um npc
    default: true
  elitemobs.repair.command:
    description: Permite que os jogadores usem o comando repair para abrir o menu de reparação de itens elite
    default: true
  elitemobs.repair.npc:
    description: Permite que os jogadores interajam com o NPC para reparar itens
    default: true
  elitemobs.refiner.command:
    description: Permite que os jogadores usem o comando refiner para abrir o menu de melhoria de Elite Scrap
    default: true
  elitemobs.refiner.npc:
    description: Permite que os jogadores interajam com o NPC para melhorar Elite Scrap
    default: true
  elitemobs.enhancer.command:
    description: Permite que os jogadores usem o comando enhancer para abrir o menu de melhoria de Itens Elite
    default: true
  elitemobs.enhancer.npc:
    description: Permite que os jogadores interajam com o NPC para melhorar Itens Elite
    default: true
  elitemobs.unbind.command:
    description: Permite que os jogadores usem o comando unbind para abrir o menu de desvinculação de Itens Elite
    default: true
  elitemobs.unbind.npc:
    description: Permite que os jogadores interajam com o NPC de desvinculação para desvincular Itens Elite
    default: true
  elitemobs.soulbind.bypass:
    description: Permite que os utilizadores ignorem as restrições de ligação de alma. Só recomendado para administradores!
    default: false
  elitequest.*:
    description: Usado para permissões relacionadas com missões
    default: false
    op: false
```