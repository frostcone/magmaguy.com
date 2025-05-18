Bem-vindo à wiki do EliteMobs!

# Licença

O código fonte do EliteMobs está coberto pela licença [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), e esta wiki é fornecida com a licença [CC0](https://choosealicense.com/licenses/cc0-1.0/).

Sinta-se à vontade para redistribuir e modificar as informações nesta wiki.

# Versões

A partir da versão 9.0.0 do EliteMobs, a única versão de Minecraft suportada é a 1.21 e superior.

Para aqueles que procuram compatibilidade com versões mais antigas do Minecraft (1.19.4 - 1.20.4), por favor, usem a versão 8 do EliteMobs.

**Nota: Nenhuma versão do EliteMobs suporta as versões 1.20.5 e 1.20.6 do Minecraft.**

# Para que serve o EliteMobs?

O EliteMobs tem como objetivo estender o *end-game* do Minecraft implementando vários conteúdos relacionados a bosses.

Isto significa:
- Bosses Dinâmicos (Mobs Nivelados)
- Bosses Personalizados
- Eventos
- Arenas
- Masmorras Baseadas em Mundo (*World Based Dungeons*)
- Masmorras Instanciadas (*Instanced Dungeons*)
- Masmorras Aleatórias de Mundo Aberto (*Open-World Random Dungeons*) (com integração BetterStructures)
- Itens Personalizados (*Custom Items*) (Itens/Loot de Elite)
- ... e mais!

O plugin não tem como objetivo substituir o conteúdo *vanilla* do Minecraft, mas sim complementá-lo, permitindo que os jogadores optem por não participar do conteúdo do EliteMobs, se desejarem. Os itens do EliteMobs tipicamente não afetam o PvP ou o combate *vanilla* do Minecraft, pois os seus bónus de dano e defesa apenas se aplicam durante o combate com EliteMobs.

# Visão Geral das Funcionalidades do EliteMobs

Nesta secção, vamos dar uma olhada em algumas das funcionalidades **principais** que o EliteMobs tem para oferecer, o que são e como as pode desativar. Para uma lista completa de funcionalidades, veja [esta página]($language$/elitemobs/feature_list.md&section=feature-list).

Também pode consultar [esta página]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) para descobrir a forma pretendida como os jogadores devem interagir com o EliteMobs.

## Bosses Dinâmicos

Bosses Dinâmicos é uma das principais funcionalidades do EliteMobs. Substitui uma percentagem dos *spawns* *vanilla* do Minecraft por *spawns* de Elite Mob.

Elites são mobs mais resistentes, projetados para desafiar os jogadores e recompensá-los com possíveis *drops* de *loot* após a derrota. O nível dos Elites é determinado pela qualidade da armadura e equipamento usados pelo jogador. Equipamento *vanilla* normal do Minecraft tem um nível determinado pela qualidade do material, como explicado [aqui]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). No entanto, à medida que os jogadores derrotam Elites e adquirem melhor *loot*, acabarão por começar a obter itens de Elite com níveis definidos, tornando mais fácil prever os níveis dos Elites que irão aparecer.

Isto implica que os níveis dos jogadores são determinados pelo equipamento que usam, enquanto os níveis dos Elites são determinados pelos níveis dos jogadores.
Não há sistema de experiência no EliteMobs, toda a progressão de nível do jogador depende do equipamento.

Pode ajustar a dificuldade dos elites modificando os valores `damageToEliteMobMultiplierV2` e `damageToPlayerMultiplierV2` em *MobCombatSettings.yml*. Mais informações sobre isto podem ser encontradas [aqui]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Se desejar desativar esta funcionalidade completamente, pode fazê-lo definindo o valor `doNaturalEliteMobSpawning` para `false`.

<div align="center">

<details>

<summary><b>Exemplo Visual</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Itens/Loot de Elite

O EliteMobs apresenta itens gerados aleatoriamente que podem ser encontrados em lojas ou serem *dropados* por Elites. Existem também itens personalizados que são geralmente encontrados em masmorras e outro conteúdo de Elite.

Itens de Elite são como itens *vanilla*, exceto que geralmente vêm equipados com extras e são mais poderosos do que qualquer coisa que possa encontrar no Minecraft *vanilla*. Alguns itens de Elite terão estatísticas neles chamadas **Elite Sharpness** e **Elite Defense**, estas estatísticas apenas se aplicarão quando os jogadores estiverem a lutar contra Elites e não afetam mobs *vanilla*.

Itens de Elite também podem ter encantamentos, [Encantamentos Personalizados]($language$/elitemobs/custom_enchantments_list.md) e efeitos de poção.

Pode desativar os itens de Elite abrindo o *ItemSettings.yml* e definindo o valor `doEliteMobsLoot` para `false`. (Não recomendado, torna a progressão de nível MMORPG impossível.)

<div align="center">

<details>

<summary><b>Exemplo Visual</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Eventos

Eventos são encontros únicos no EliteMobs que podem ser acionados aleatoriamente com base num temporizador ou por ações específicas do jogador, como minerar um bloco ou cortar uma árvore.

Estes encontros apresentam Elites personalizados e únicos que representam um desafio maior e oferecem *loot* valioso após a derrota.

Os jogadores recebem notificações no chat quando um evento ocorre, com a opção de rastrear a saúde e localização do Elite através de um link clicável. Se o Elite não for derrotado dentro de um certo período de tempo, o evento termina e o Elite desaparece (*despawns*).

Pode desativar todos os eventos abrindo o events.yml e definindo os valores `actionEventsEnabled` e `timedEventsEnabled` para `false`.

Se desejar desativar eventos individuais, pode ir a *~plugins\EliteMobs\customevents*. Lá encontrará as configurações para cada evento e pode desativar qualquer evento abrindo a sua configuração e definindo o valor `isEnabled` para `false`.

<div align="center">

<details>

<summary><b>Exemplo Visual</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Guilda dos Aventureiros

A Guilda dos Aventureiros (*Adventurer's Guild*) é um mundo *hub* adicional que pode instalar e é também um conjunto de comandos que os jogadores podem usar.

Se o mundo *hub* não estiver instalado, os jogadores terão de usar comandos; caso contrário, executar comandos com o mundo *hub* instalado irá teleportar os jogadores para o mundo *hub* e lá poderão interagir com NPCs em vez de terem de digitar comandos.

Que comandos? O EliteMobs tem vários comandos que os jogadores podem usar para vender e comprar itens, reparar itens, encantar itens e mais. Saiba mais sobre quais comandos os jogadores podem usar [aqui]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Para mais informações sobre a Guilda dos Aventureiros e como instalar o mundo *hub*, consulte [esta página]($language$/elitemobs/adventurers_guild_world.md).

Pode desativar o mundo *hub* abrindo o *AdventurersGuild.yml* e definindo o `guildHubIsEnabledv2` para `false`.

<div align="center">

<details>

<summary><b>Exemplo Visual</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Nível/Rank da Guilda (*Guild Tier*)

À medida que os jogadores progridem e adquirem melhores itens, acabarão por atingir um limite e os mobs deixarão de *dropar* itens de nível superior; isto é chamado de limitador de *loot* por nível de guilda (*guild tier loot limiter*).

O limitador de *loot* por nível de guilda restringe o *loot* mais alto que os jogadores podem obter com base no seu nível de guilda e aplica limitações padrão de itens de nível 1 a nível 10, com níveis de mob correspondentes. Níveis de prestígio desbloqueiam níveis superiores, permitindo acesso a *loot* superior e mobs mais resistentes, garantindo uma jogabilidade equilibrada.

Este sistema, combinado com o encantamento *soulbind*, atenua problemas de *powerleveling*, mantém o equilíbrio do servidor e promove o apego do jogador ao *loot* adquirido. Pode ler mais sobre o nível de guilda [aqui]($language$/elitemobs/guild_tier_loot_limiter.md).

Todas as configurações para o Nível de Guilda podem ser ajustadas e estão localizadas em *AdventurersGuild.yml*.

<div align="center">

<details>

<summary><b>Exemplo Visual</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arenas

Arenas são desafios baseados em ondas onde os jogadores podem participar em combate. Um ou múltiplos jogadores podem juntar-se a uma arena e enfrentar ondas de inimigos cada vez mais difíceis, com as recompensas a melhorar à medida que o desafio progride.

Após instalar o mundo *hub* da Guilda dos Aventureiros, os jogadores ganham acesso à Arena da Liga da Madeira (*Wood League Arena*), uma arena gratuita acessível através da interação com um NPC no mundo *hub* ou através do menu */em*.

Pode obter arenas adicionais indo a: [Itch.io](https://magmaguy.itch.io/) ou subscrevendo no [Patreon](https://www.patreon.com/magmaguy).

Pode desativar arenas indo a *~plugins\EliteMobs\customarenas* e depois abrindo a configuração da arena, por exemplo *wood_league.yml*, e encontrando o valor `isEnabled` e definindo-o para `false`.

<div align="center">

<details>

<summary><b>Exemplo Visual</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Masmorras de Mundo (*World Dungeons*)

Masmorras de Mundo (*World Dungeons*) são conteúdo personalizado adicional que pode descarregar para o EliteMobs. Masmorras geralmente têm bosses de Elite personalizados, mundos personalizados, *loot* personalizado e poderes de boss personalizados.

Todas as masmorras de mundo são masmorras que estão localizadas no seu próprio mundo, o que significa que quando os jogadores acedem a elas, são teleportados para um mundo que não tem nada além dessa masmorra.

Existem vários tipos de masmorras de mundo; para saber mais sobre os tipos, clique [aqui]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Todas as masmorras de mundo têm um nível definido e quaisquer jogadores que tentem as masmorras devem estar perto desse nível para a melhor experiência.

Pode obter masmorras indo a: [Itch.io](https://magmaguy.itch.io/) ou subscrevendo no [Patreon](https://www.patreon.com/magmaguy). Existem várias masmorras gratuitas que pode descarregar [aqui](https://magmaguy.itch.io/em-free-content).

Pode desativar masmorras individuais indo a *~plugins\EliteMobs\content_packages* e abrindo a configuração da masmorra que deseja desativar e definindo o valor `isEnabled` para `false`.

<div align="center">

<details>

<summary><b>Exemplo Visual</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Masmorras Instanciadas (*Instanced Dungeons*)

Masmorras Instanciadas (*Instanced Dungeons*) diferem das Masmorras de Mundo (*World Dungeons*) de várias formas. São instanciadas, o que significa que um novo mundo é criado dinamicamente a partir de um *blueprint*, proporcionando aos jogadores e aos seus amigos uma experiência de masmorra privada semelhante às encontradas em MMOs.

Masmorras Instanciadas oferecem várias dificuldades com poderes de boss únicos, saúde aumentada e *loot* superior à medida que a dificuldade aumenta. Também introduzem papéis (*roles*), permitindo que os jogadores adotem papéis de *tank* ou DPS com base no seu equipamento (equipamento específico de papel é exclusivo para Masmorras Instanciadas). Leia mais sobre como a dificuldade funciona [aqui]($language$/elitemobs/instanced_dungeon_difficulty.md).

Adicionalmente, os jogadores podem ressuscitar uns aos outros dentro de Masmorras Instanciadas, permitindo-lhes retomar rapidamente a batalha se agirem rápido o suficiente.

Pode obter masmorras instanciadas indo a: [Itch.io](https://magmaguy.itch.io/) ou subscrevendo no [Patreon](https://www.patreon.com/magmaguy). Existem masmorras instanciadas gratuitas que pode descarregar [aqui](https://magmaguy.itch.io/em-free-content).

Pode desativar masmorras individuais indo a *~plugins\EliteMobs\dungeonpackages* e abrindo a configuração da masmorra que deseja desativar e definindo o valor `isEnabled` para `false`.

<div align="center">

<details>

<summary><b>Exemplo Visual</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventuras

Aventuras representam o conteúdo adicional mais expansivo disponível para o EliteMobs, ostentando um vasto mundo completo com uma história cativante e uma multidão de missões para os jogadores embarcarem.

Apresentando centenas de bosses, poderes e itens personalizados, as Aventuras oferecem uma experiência de jogo imersiva. Missões dentro das Aventuras funcionam de forma semelhante às encontradas em MMOs tradicionais, atribuindo aos jogadores objetivos como derrotar mobs, localizar itens, interagir com NPCs, ou qualquer combinação destes.

As Aventuras são tão grandes que até têm outras sub-masmorras ou sub-arenas localizadas dentro delas.

Embora as Aventuras tipicamente recomendem um intervalo de nível definido para os jogadores, é aconselhável que os jogadores comecem a sua aventura na extremidade inferior da escala de nível para um aproveitamento ótimo.

Pode obter aventuras indo a: [Itch.io](https://magmaguy.itch.io/) ou subscrevendo no [Patreon](https://www.patreon.com/magmaguy).

Pode desativar aventuras individuais indo a *~plugins\EliteMobs\dungeonpackages* e abrindo a configuração para a aventura que deseja desativar e definindo o valor `isEnabled` para `false`. As Aventuras podem ter sub-masmorras e sub-arenas adicionais que vêm com as aventuras, por isso certifique-se de que também as desativa se estiver a desativar uma aventura.

<div align="center">

<details>

<summary><b>Exemplo Visual</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Teleportes de Wormhole (*Wormhole Teleports*)

O EliteMobs também apresenta teleportes simples de A para B chamados *wormholes*. Verá estes a serem usados principalmente no mundo *hub* da Guilda dos Aventureiros como forma de teleportar jogadores de lá para uma masmorra ou de volta para o *spawn* do servidor.

Geralmente têm a forma de um hexágono, cubo ou diamante feito de partículas. Estas partículas podem por vezes causar *lag* a clientes Bedrock, por isso pode querer desativar os efeitos de partícula abrindo o *Wormholes.yml* e definindo `noParticlesMode` para `true`.

Pode criar os seus próprios *wormholes* e usá-los como desejar. Clique [aqui]($language$/elitemobs/creating_wormholes.md) para descobrir como.

<div align="center">

<details>

<summary><b>Exemplo Visual</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Conteúdo Personalizado

O EliteMobs também lhe oferece a oportunidade de criar o seu próprio conteúdo, incluindo [bosses]($language$/elitemobs/creating_bosses.md), [masmorras]($language$/elitemobs/dungeon_packager.md), [poderes]($language$/elitemobs/creating_powers.md), [NPCs]($language$/elitemobs/creating_npcs.md), [missões]($language$/elitemobs/creating_quests.md), [arenas]($language$/elitemobs/creating_arenas.md), e muito mais! Pode encontrar guias para criar outros tipos de conteúdo além dos listados acima no menu lateral da wiki.

Para a experiência de criação de conteúdo mais fácil e eficiente, recomendamos usar a WebApp. Esta ferramenta permite gerar ficheiros de configuração prontos a usar sem a necessidade de navegar extensivamente pela wiki para garantir a correção, particularmente se estiver a considerar criar poderes de boss EliteScript. Aceda à [WebApp aqui](https://magmaguy.com/webapp/webapp.html).

# Para Admins & Donos de Servidor

Este plugin foi projetado para servidores de sobrevivência e semelhantes (como Skyblock, Skywars e variantes de sobrevivência fortemente modificadas).

O plugin destina-se a ser facilmente utilizável simplesmente arrastando e soltando o ficheiro .jar do plugin para o servidor. As configurações padrão são as que uso nos meus próprios servidores e estão sujeitas a alterações ao longo do tempo.

**No entanto!**
A personalização tem sido uma prioridade máxima ao longo do processo de desenvolvimento do EliteMobs. Quase todos os aspetos do plugin podem ser traduzidos, personalizados, desativados ou modificados.

# Para outros desenvolvedores

Apesar da natureza GPLV3 e de código aberto deste projeto, não estou à procura nem aceitarei quaisquer adições ou alterações de código neste momento. Acolho *forks* do plugin e teria imenso prazer em ver o que podem fazer com eles; no entanto, este é o meu primeiro projeto de programação massivo e, como tal, é também uma experiência de aprendizagem.

**No entanto!**
Não interpretem isto como eu a afirmar que estou acima de qualquer crítica ou que não ouvirei feedback - muito pelo contrário, adoro quando as pessoas apontam melhores formas de realizar coisas que fiz no plugin. Desejo que este projeto seja algo que escrevi de ponta a ponta, sem trechos de código dos quais não esteja ciente ou que não compreenda.