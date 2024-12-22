# Comandos de utilizador

*Nota: Todas as permissões de jogador estão definidas como verdadeiras por padrão. Isto significa que já estão
configuradas.*

*Se não quiser que os jogadores tenham acesso a uma funcionalidade específica através de permissões, terá de negar essa permissão ao jogador!*

| Comando                                  |                                                                                                        Descrição                                                                                                        |
|------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `/elitemobs` / `/em`                     |                      Comando principal, condensa todas as informações do jogador no plugin num menu de fácil acesso. *Nota:* todos os outros comandos de utilizador estão neste comando principal.                      |
| `/adventurersguild` / `/ag`              |                                     Numa configuração recomendada, teletransporta o jogador para o mundo da guilda dos aventureiros, onde interage com os vários NPCs do EliteMobs.                                     |
| `/em shareItem`                          |                                                                     Liga um item no chat para que outros jogadores possam ver as suas estatísticas.                                                                     |
| `/em help`                               | Lista todos os comandos. Os restantes comandos de utilizador são geralmente substituídos pela utilização de NPCs ou pela interface `/em`! Pode passar o cursor sobre os comandos para obter uma descrição do que fazem. |
| `/em money check`                        |                                                                                              Exibe o dinheiro do jogador.                                                                                               |
| `/em pay <nome de utilizador> <quantia>` |                                                            Permite que os jogadores paguem uns aos outros. As transações são taxadas num valor configurável.                                                            |
| `/em spawntp`                            |                                                                                  Teletransporta um jogador para um spawn do servidor.                                                                                   |

## Comandos de NPC

Estes comandos são úteis apenas se não tiver o Hub da Guilda dos Aventureiros com NPCs instalado.

Recomenda-se que os instale para executar todos estes comandos através de NPCs, em vez de ter os jogadores a memorizar
como os comandos funcionam.

| Comando                         |                                              Descrição                                               |
|---------------------------------|:----------------------------------------------------------------------------------------------------:|
| `/em rank`                      |     Abre o menu de ranking ou teletransporta os jogadores para o hub da Guilda dos Aventureiros.     |
| `/em shop procedural <jogador>` |          Acede à loja ou teletransporta os jogadores para o Hub da Guilda dos Aventureiros.          |
| `/em shop sell <jogador>`       | Acede ao menu de venda da loja ou teletransporta os jogadores para o Hub da Guilda dos Aventureiros. |
| `/em shop custom <jogador>`     |   Acede à loja personalizada ou teletransporta os jogadores para o hub da Guilda dos Aventureiros.   |
| `/em repair`                    |   Acede ao menu de reparação ou teletransporta os jogadores para o hub da Guilda dos Aventureiros.   |
| `/em enchant`                   | Acede ao menu de encantamento ou teletransporta os jogadores para o hub da Guilda dos Aventureiros.  |
| `/em scrap`                     |    Acede ao menu de sucata ou teletransporta os jogadores para o hub da Guilda dos Aventureiros.     |
| `/em unbind`                    | Acede ao menu de desvinculação ou teletransporta os jogadores para o hub da Guilda dos Aventureiros. |

## Comandos internos de utilizador

**Estes comandos destinam-se a ser executados a partir de menus no jogo, como missões a partir do menu de missões. Se
não forem escritas instruções sobre como obter um ID, isso significa que não é possível obter esse ID a não ser
executando o comando a partir do menu do jogo.** Por conveniência, estes foram divididos nas categorias identificáveis e
não identificáveis.

### Identificáveis

| Comando                     | Descrição                                    |
|-----------------------------|----------------------------------------------|
| `/em dungeontp <dungeonid>` | Teletransporta um jogador para uma masmorra. |

*Nota: isto destina-se a ser executado a partir do menu `/em`, pois é impossível para os jogadores adivinhar os IDs das
masmorras. Os IDs das masmorras são os mesmos que os nomes dos ficheiros .yml
em `~/plugins/EliteMobs/dungeonpackages/`. <br/>Pode ver os IDs na consola ao utilizar o comando `/em` e escolher um
teletransporte a partir da página de Teletransportes.*

### Não identificáveis

| Comando                        |                                                                             Descrição                                                                             |
|--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `/em quest accept <questID>`   |                                                                        Aceita uma missão.                                                                         |
| `/em quest track <questID>`    |                                                                       Acompanha uma missão.                                                                       |
| `/em quest complete <questID>` |                                                                        Conclui uma missão.                                                                        |
| `/em quest leave <questID>`    |                                                                       Abandona uma missão.                                                                        |
| `/em track boss <uuid>`        | Acompanha um boss personalizado. Nota: isto destina-se a ser executado a partir do menu `/em`, pois é impossível para os jogadores adivinhar os UUIDs dos bosses. |

# Comandos de administrador

<div>

**> > > `elitemobs.*` - Permissão de administrador para EliteMobs para acesso total! < < <**

</div>

| Comando                                                                                             |                                                                 Descrição                                                                 |
|-----------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------:|
| `/em setup`                                                                                         |                                                  Abre o menu principal de configuração.                                                   |
| `/em spawn elite <tipoDeEntidade> <nível> <poder1> <poder2> <poder3>`                               |                                                Gera um Elite com base no tipo de entidade.                                                |
| - `/em spawn eliteAt <tipoDeEntidade> <nomeDoMundo> <x> <y> <z> <nível> <poder1> <poder2> <poder3>` |                                         Gera um Elite com base no tipo de entidade e localização.                                         |
| `/em spawn boss <nomeDoFicheiro>`                                                                   |                                    Gera um Boss personalizado a partir de um ficheiro de configuração.                                    |
| `/em spawn boss <nomeDoFicheiro> <nível>`                                                           |                          Gera um Boss personalizado a partir de um ficheiro de configuração e substitui o nível.                          |
| `/em spawn bossAt <nomeDoFicheiro> <nomeDoMundo> <x> <y> <z>`                                       |                           Gera um Boss personalizado a partir de um ficheiro de configuração numa localização.                            |
| `/em spawn bossAt <nomeDoFicheiro> <nível> <nomeDoMundo> <x> <y> <z>`                               |                 Gera um Boss personalizado a partir de um ficheiro de configuração numa localização e substitui o nível.                  |
| `/em place boss <nomeDoFicheiro>`                                                                   |                                          Adiciona uma localização de geração a um Boss Regional.                                          |
| `/em place treasureChest <nomeDoFicheiro>`                                                          |                                     Adiciona um baú de tesouro na localização em que o jogador está.                                      |
| `/em remove`                                                                                        | Remove permanentemente uma entidade Elite Mob. Elite/Regional/Super/NPCs todos funcionam. Execute novamente para sair do modo de remoção. |
| `/em event <nomeDoEvento>`                                                                          |                                                Lança um evento personalizado cronometrado.                                                |
| `/em place npc <nomeDoFicheiroDoNPC>`                                                               |                                                               Gera um NPC.                                                                |
| `/em stats`                                                                                         |                               Obtém as estatísticas das entidades e jogadores EliteMobs atualmente ativos.                                |
| `/em loot menu`                                                                                     |                                        Abre um menu onde pode obter qualquer Saque Personalizado.                                         |
| `/em loot give <jogador> <nomeDoFicheiro>`                                                          |                                            Dá um saque personalizado específico a um jogador.                                             |
| `/em loot simulate <nível>`                                                                         |                                             Simula quedas de um Elite Mob do nível definido.                                              |
| `/em loot simulate <nível> <vezes>`                                                                 |                               Simula quedas de um Elite Mob do nível definido um número definido de vezes.                                |
| `/em version`                                                                                       |                                                         Obtém a versão do plugin.                                                         |
| `/em reload`                                                                                        |                                                Recarrega o plugin. Funciona quase sempre.                                                 |
| `/em kill `                                                                                         |                                                   Mata todos os Elite Mobs agressivos.                                                    |
| `/em kill <raio>`                                                                                   |                                               Mata todos os Elite Mobs agressivos num raio.                                               |
| `/em kill type <tipoDeEntidade>`                                                                    |                                                Mata todos os elites de um tipo específico.                                                |
| `/em kill type <tipoDeEntidade> <raio>`                                                             |                                           Mata todos os elites de um tipo específico num raio.                                            |
| `/em loot debug <nível>`                                                                            |                                               Obtém itens de depuração para fins de teste.                                                |
| `/em money add <nomeDeUtilizador> <quantia>`                                                        |                                          Adiciona uma quantia definida de dinheiro a um jogador.                                          |
| `/em money addall <quantia>`                                                                        |                                  Adiciona uma quantia definida de dinheiro a todos os jogadores online.                                   |
| `/em money remove <nomeDeUtilizador> <quantia>`                                                     |                                          Remove uma quantia definida de dinheiro de um jogador.                                           |
| `/em money set <nomeDeUtilizador> <quantia>`                                                        |                                               Define o valor total da moeda de um jogador.                                                |
| `/em rank <jogador> <nívelDePrestigio> <nívelDeGuilda>`                                             |                                                 Define o ranking de guilda de um jogador.                                                 |
| `/em discord`                                                                                       |                                             Obtém o link para o servidor Discord de suporte.                                              |
| `/em discord <mensagem>`                                                                            |                      Publica uma mensagem de depuração no Discord se o DiscordSRV estiver configurado corretamente.                       |
| `/em unbind force`                                                                                  |                                      Desvincula um item vinculado à alma que esteja a ser segurado.                                       |
| `/em money check <jogador>`                                                                         |                                                Verifica a moeda de um jogador específico.                                                 |
| `/em fireball`                                                                                      |                                  Gera uma bola de fogo para testar a regeneração de explosões de elite.                                   |
| `/em transitiveBlocks register <nomeDoFicheiro> <ON_SPAWN/ON_REMOVE>`                               |                    Ver [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                     |
| `/em transitiveBlocks edit <nomeDoFicheiro> <ON_SPAWN/ON_REMOVE>`                                   |                    Ver [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                     |
| `/em /em transitiveBlocks registerArea <nomeDoFicheiro> <ON_SPAWN/ON_REMOVE>`                       |                    Ver [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                     |
| `/em transitiveBlocks editArea <nomeDoFicheiro> <ON_SPAWN/ON_REMOVE>`                               |                    Ver [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                     |
| `/em transitiveBlocks cancel`                                                                       |                    Ver [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                     |
| `/em protection bypass`                                                                             |                         Ativa ou desativa a proteção da masmorra. Também funciona para a Guilda dos Aventureiros.                         |

## Comandos internos de administrador

Estes comandos destinam-se a ser executados ao interagir com menus ou texto interativo no chat, e não manualmente.

| Comando                                     |                                   Descrição                                    |
|---------------------------------------------|:------------------------------------------------------------------------------:|
| `/em setup done`                            |       Impede que as mensagens sejam exibidas no login do administrador.        |
| `/em setup toggle <configuraçãoDaMasmorra>` | Permite que ative ou desative a instalação do conteúdo EliteMobs especificado. |

# Permissões brutas:
```
permissions:
  elitemobs.*:
    description: Dá acesso a todos os comandos do elitemobs
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
    description: Permite que os jogadores abram o menu de lojas dinâmicas através de comandos
    default: true
  elitemobs.customshop.npc:
    description: Permite que os jogadores interajam com NPCs para lojas dinâmicas
    default: true
  elitemobs.customshop.command:
    description: Permite que os jogadores abram o menu de lojas dinâmicas através de comandos
    default: true
  elitemobs.currency.pay:
    description: Permite que os jogadores executem /elitemobs pay [nomeDeUtilizador] [quantia]
    default: true
  elitemobs.currency.check:
    description: Permite que os jogadores executem /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Permite que os jogadores executem /elitemobs check [nomeDeUtilizador]
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
    description: Permite que os jogadores se teletransportem para o hub da guilda dos aventureiros utilizando /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Permite que os jogadores acedam ao menu de ranking utilizando o comando /em adventurersguild
    default: true
  elitemobs.rank.command:
    description: Permite que os jogadores abram o menu de ranking através de /em rank
    default: true
  elitemobs.rank.npc:
    description: Permite que os jogadores acedam ao menu /em rank através de NPCs
    default: true
  elitemobs.quest.command:
    description: Permite que os jogadores aceitem missões por comando
    default: true
  elitemobs.quest.npc:
    description: Permite que os jogadores aceitem missões através de um NPC EliteMobs
    default: true
  elitemobs.dungeontp:
    description: Permite que os jogadores se teletransportem para uma localização definida pelo elitemobs
    default: true
  elitemobs.spawntp:
    description: Permite que os jogadores se teletransportem para a localização de spawn predefinida do servidor.
    default: true
  elitemobs.back.npc:
    description: Permite que os jogadores interajam com um npc para voltar a uma localização anterior.
    default: true
  elitemobs.shareitem:
    description: Partilha um Item de Elite segurado no chat.
    default: true
  elitemobs.scrap.npc:
    description: Permite que os jogadores desfaçam itens num npc
    default: true
  elitemobs.scrap.command:
    description: Permite que os jogadores desfaçam itens utilizando um comando
    default: true
  elitemobs.smelt.command:
    description: Permite que os jogadores fundam itens utilizando um comando
    default: true
  elitemobs.smelt.npc:
    description: Permite que os jogadores fundam itens utilizando um npc
    default: true
  elitemobs.repair.command:
    description: Permite que os jogadores utilizem o comando de reparação para abrir o menu para reparar itens de elite
    default: true
  elitemobs.repair.npc:
    description: Permite que os jogadores interajam com o NPC para reparar itens
    default: true
  elitemobs.refiner.command:
    description: Permite que os jogadores utilizem o comando refinador para abrir o menu para atualizar a Sucata de Elite
    default: true
  elitemobs.refiner.npc:
    description: Permite que os jogadores interajam com o NPC para atualizar a Sucata de Elite
    default: true
  elitemobs.enhancer.command:
    description: Permite que os jogadores utilizem o comando potenciador para abrir o menu para atualizar Itens de Elite
    default: true
  elitemobs.enhancer.npc:
    description: Permite que os jogadores interajam com o NPC para atualizar Itens de Elite
    default: true
  elitemobs.unbind.command:
    description: Permite que os jogadores utilizem o comando de desvinculação para abrir o menu para desvincular Itens de Elite
    default: true
  elitemobs.unbind.npc:
    description: Permite que os jogadores interajam com o NPC desvinculador para desvincular Itens de Elite
    default: true
  elitemobs.soulbind.bypass:
    description: Permite que os utilizadores ignorem as restrições de vinculação à alma. Apenas recomendado para administradores!
    default: false
  elitequest.*:
    description: Usado para permissões relacionadas com missões
    default: false
    op: false
```