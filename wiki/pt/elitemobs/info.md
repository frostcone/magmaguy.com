Bem-vindo ao wiki do EliteMobs!

# Licença

O código fonte do EliteMobs está coberto pela licença [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), e este wiki
é fornecido com a licença [CC0](https://choosealicense.com/licenses/cc0-1.0/).

Sinta-se à vontade para redistribuir e modificar as informações neste wiki.

# Versões

A partir da versão 9.0.0 do EliteMobs, a única versão do Minecraft suportada é a 1.21 e superior.

Para aqueles que procuram compatibilidade com versões mais antigas do Minecraft (1.19.4 - 1.20.4), por favor, usem a
versão 8 do EliteMobs.

**Nota: Nenhuma versão do EliteMobs suporta as versões 1.20.5 e 1.20.6 do Minecraft.**

# Para que serve o EliteMobs?

O EliteMobs tem como objetivo estender o end-game do Minecraft, implementando vários conteúdos relacionados com bosses.

Isto significa:

- Bosses Dinâmicos (Mobs com Níveis)
- Bosses Personalizados
- Eventos
- Arenas
- Masmorras Baseadas no Mundo
- Masmorras Instanciadas
- Masmorras Aleatórias de Mundo Aberto (com integração BetterStructures)
- Itens Personalizados (Itens de Elite/Loot)
- ... e muito mais!

O plugin não tem como objetivo substituir o conteúdo vanilla do Minecraft, mas sim complementá-lo, permitindo que os
jogadores optem por não participar no conteúdo do EliteMobs, se desejarem. Os itens do EliteMobs geralmente não afetam o
PvP ou o combate vanilla do Minecraft, pois os seus bónus de dano e defesa aplicam-se apenas durante o combate com
EliteMobs.

# Visão Geral das Funcionalidades do EliteMobs

Nesta seção, vamos dar uma olhada em algumas das principais funcionalidades que o EliteMobs tem para oferecer, o que são
e como você pode desativá-las. Para uma lista completa de funcionalidades,
veja [esta página]($language$/elitemobs/feature_list.md&section=feature-list).

Você também pode consultar [esta]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) página para descobrir a
maneira como os jogadores devem interagir com o EliteMobs.

## Bosses Dinâmicos

Bosses Dinâmicos é uma das principais funcionalidades do EliteMobs. Ele substitui uma porcentagem de spawns vanilla do
Minecraft por spawns de Elite Mobs.

Elites são mobs mais resistentes, projetados para desafiar os jogadores e recompensá-los com possíveis drops de loot ao
serem derrotados. O nível dos Elites é determinado pela qualidade da armadura e equipamento usado pelo jogador. O
equipamento normal do Minecraft tem um nível determinado pela qualidade do material, conforme
explicado [aqui]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). No entanto, à medida que os
jogadores derrotam Elites e adquirem melhor loot, eles eventualmente começarão a obter itens de Elite com níveis
definidos, facilitando a previsão dos níveis dos Elites que irão spawnar.

Isso implica que os níveis dos jogadores são determinados pelo equipamento que usam, enquanto os níveis dos Elites são
determinados pelos níveis dos jogadores.
Não há sistema de experiência no EliteMobs, toda a progressão de nível do jogador depende do equipamento.

Você pode ajustar a dificuldade dos elites modificando os valores `damageToEliteMobMultiplierV2`
e `damageToPlayerMultiplierV2` em *MobCombatSettings.yml*. Mais informações sobre isso podem ser
encontradas [aqui]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Se você deseja desativar totalmente essa funcionalidade, pode fazê-lo definindo o valor `doNaturalEliteMobSpawning`
como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Itens/Loot de Elite

O EliteMobs apresenta itens gerados aleatoriamente que podem ser encontrados em lojas ou dropados por Elites. Também há
itens personalizados que geralmente são encontrados em masmorras e outros conteúdos do Elite.

Os itens de Elite são como itens vanilla, exceto que geralmente são equipados com extras e são mais poderosos do que
qualquer coisa que você possa encontrar no vanilla MineCraft. Alguns itens de Elite terão estatísticas chamadas *
*Afiamento de Elite** e **Defesa de Elite**, essas estatísticas só se aplicarão quando os jogadores estiverem lutando
contra Elites e não afetam mobs vanilla.

Os itens de Elite também podem ter
encantamentos, [Encantamentos Personalizados]($language$/elitemobs/custom_enchantments_list.md) e efeitos de poções.

Você pode desativar os itens de Elite abrindo *ItemSettings.yml* e definindo o valor `doEliteMobsLoot` como `false`. (
Não recomendado, torna a progressão de nível MMORPG impossível.)

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Eventos

Eventos são encontros únicos no EliteMobs que podem ser acionados aleatoriamente com base em um temporizador ou por
ações específicas do jogador, como minerar um bloco ou cortar uma árvore.

Esses encontros apresentam Elites personalizados e únicos que representam um desafio maior e oferecem loot valioso ao
serem derrotados.

Os jogadores recebem notificações no chat quando um evento ocorre, com a opção de rastrear a saúde e a localização do
Elite por meio de um link clicável. Se o Elite não for derrotado dentro de um determinado período de tempo, o evento
termina e o Elite desaparece.

Você pode desativar todos os eventos abrindo events.yml e definindo os valores `actionEventsEnabled`
e `timedEventsEnabled` como `false`.

Se você quiser desativar eventos individuais, pode ir para *~plugins\EliteMobs\customevents*. lá você encontrará
configurações para cada evento e poderá desativar qualquer evento abrindo sua configuração e definindo o
valor `isEnabled` como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Guilda dos Aventureiros

A Guilda dos Aventureiros é um mundo hub adicional que você pode instalar e também é um conjunto de comandos que os jogadores podem usar.

Se o mundo hub não estiver instalado, os jogadores terão que usar comandos, caso contrário, executar comandos com o mundo hub instalado irá teletransportar os jogadores para o mundo hub e lá eles podem interagir com NPCs em vez de ter que digitar comandos.

Quais comandos? O EliteMobs tem vários comandos que os jogadores podem usar para vender e comprar itens, reparar itens,
encantar itens e muito mais. Saiba mais sobre quais comandos os jogadores podem
usar [aqui]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Para mais informações sobre a Guilda dos Aventureiros e como instalar o mundo hub,
consulte [esta]($language$/elitemobs/adventurers_guild_world.md) página.

Você pode desativar o mundo hub abrindo *AdventurersGuild.yml* e definindo `guildHubIsEnabledv2` como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Tier/Rank da Guilda

À medida que os jogadores progridem e adquirem itens melhores, eles eventualmente atingirão um limite e os mobs pararão
de dropar itens de nível superior, isso é chamado de limitador de loot de tier da guilda.

O limitador de loot de tier da guilda restringe o loot mais alto que os jogadores podem obter com base no seu tier da
guilda e aplica limitações padrão de itens de tier 1 a tier 10, com níveis de mob correspondentes. Os níveis de
prestígio desbloqueiam tiers superiores, permitindo o acesso a loot superior e mobs mais resistentes, garantindo uma
jogabilidade equilibrada.

Este sistema, combinado com o encantamento soulbind, mitiga problemas de powerleveling, mantém o equilíbrio do servidor
e promove o apego dos jogadores ao seu loot adquirido. Você pode ler mais sobre o tier da
guilda [aqui]($language$/elitemobs/guild_tier_loot_limiter.md).

Todas as configurações para o Tier da Guilda podem ser ajustadas e estão localizadas em *AdventurersGuild.yml*.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arenas

As arenas são desafios baseados em ondas onde os jogadores podem se envolver em combate. Um ou vários jogadores podem
entrar numa arena e enfrentar ondas de inimigos cada vez mais difíceis, com recompensas a melhorar à medida que o
desafio progride.

Ao instalar o mundo hub da Guilda dos Aventureiros, os jogadores ganham acesso à Arena da Liga da Madeira, uma arena
gratuita acessível através da interação com um NPC no mundo hub ou através do menu */em*.

Você pode obter arenas adicionais indo para: [Itch.io](https://magmaguy.itch.io/) ou inscrevendo-se
no [Patreon](https://www.patreon.com/magmaguy).

Você pode desativar arenas indo para *~plugins\EliteMobs\customarenas*
e então abrindo a configuração da arena, por exemplo, *wood_league.yml* e então encontrando o valor `isEnabled` e
definindo-o como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Masmorras do Mundo

Masmorras do Mundo são conteúdo personalizado adicional que você pode baixar para o EliteMobs. As masmorras geralmente
têm bosses Elite personalizados, mundos personalizados, loot personalizado e poderes de boss personalizados.

Todas as masmorras do mundo são masmorras que estão localizadas no seu próprio mundo, o que significa que quando os
jogadores acessam, eles são teletransportados para um mundo que não tem nada além daquela masmorra.

Existem vários tipos de masmorras do mundo, para saber mais sobre os tipos,
clique [aqui]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Todas as masmorras do mundo têm um nível definido e quaisquer jogadores que tentem as masmorras devem estar perto desse
nível para a melhor experiência.

Você pode obter masmorras indo para: [Itch.io](https://magmaguy.itch.io/) ou inscrevendo-se
no [Patreon](https://www.patreon.com/magmaguy). Existem várias masmorras gratuitas que você pode
baixar [aqui](https://magmaguy.itch.io/em-free-content).

Você pode desativar masmorras individuais indo para *~plugins\EliteMobs\content_packages* e abrindo a configuração da
masmorra para a masmorra que deseja desativar e definindo o valor `isEnabled` como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Masmorras Instanciadas

As Masmorras Instanciadas diferem das Masmorras do Mundo de várias maneiras. Elas são instanciadas, o que significa que
um novo mundo é criado dinamicamente a partir de um modelo, fornecendo aos jogadores e aos seus amigos uma experiência
de masmorra privada semelhante às encontradas em MMOs.

As Masmorras Instanciadas oferecem várias dificuldades com poderes de boss únicos, maior saúde e loot superior à medida
que a dificuldade aumenta. Elas também introduzem funções, permitindo que os jogadores adotem funções de tanque ou DPS
com base no seu equipamento (o equipamento específico da função é exclusivo das Masmorras Instanciadas). Leia mais sobre
como a dificuldade funciona [aqui]($language$/elitemobs/instanced_dungeon_difficulty.md).

Além disso, os jogadores podem ressuscitar uns aos outros dentro das Masmorras Instanciadas, permitindo que retomem
rapidamente a batalha se agirem rápido o suficiente.

Você pode obter masmorras instanciadas indo para: [Itch.io](https://magmaguy.itch.io/) ou inscrevendo-se
no [Patreon](https://www.patreon.com/magmaguy). Existem masmorras instanciadas gratuitas que você pode
baixar [aqui](https://magmaguy.itch.io/em-free-content).

Você pode desativar masmorras individuais indo para *~plugins\EliteMobs\dungeonpackages* e abrindo a configuração da
masmorra para a masmorra que deseja desativar e definindo o valor `isEnabled` como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventuras

Aventuras representam o conteúdo adicional mais extenso disponível para EliteMobs, ostentando um vasto mundo completo
com um enredo cativante e uma infinidade de quests para os jogadores embarcarem.

Com centenas de bosses, poderes e itens personalizados, as Aventuras oferecem uma experiência de jogo imersiva. As
quests dentro das Aventuras funcionam de forma semelhante às dos MMOs tradicionais, incumbindo os jogadores com
objetivos como derrotar mobs, localizar itens, interagir com NPCs ou qualquer combinação desses.

As aventuras são tão grandes que até têm outras submasmorras ou subarenas localizadas dentro.

Embora as Aventuras normalmente recomendem um nível definido para os jogadores, é aconselhável que os jogadores comecem
a sua aventura na extremidade inferior da escala de nível para um melhor aproveitamento.

Você pode obter aventuras indo para: [Itch.io](https://magmaguy.itch.io/) ou inscrevendo-se
no [Patreon](https://www.patreon.com/magmaguy).

Você pode desativar aventuras individuais indo para *~plugins\EliteMobs\dungeonpackages* e abrindo a configuração da
aventura que deseja desativar e definindo o valor `isEnabled` como `false`. As aventuras podem ter submasmorras e
subarenas adicionais que vêm com aventuras, então certifique-se de desativá-las também se estiver desativando uma
aventura.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Teletransportes Wormhole

O EliteMobs também apresenta teletransportadores simples de A para B chamados wormholes. Você os verá principalmente
usados ​​no mundo hub da Guilda dos Aventureiros como forma de teletransportar os jogadores de lá para uma masmorra ou
de volta ao spawn do servidor.

Eles geralmente têm a forma de um hexágono, cubo ou diamante feito de partículas. Essas partículas às vezes podem causar
lag em clientes bedrock, então você pode querer desativar os efeitos de partícula abrindo *Wormholes.yml* e
definindo `noParticlesMode` como `true`.

Você pode fazer seus próprios wormholes e usá-los como quiser. Clique [aqui]($language$/elitemobs/creating_wormholes.md)
para descobrir como.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Conteúdo Personalizado

O EliteMobs também oferece a oportunidade de criar o seu próprio conteúdo,
incluindo [bosses]($language$/elitemobs/creating_bosses.md), [masmorras]($language$/elitemobs/dungeon_packager.md), [poderes]($language$/elitemobs/creating_powers.md), [NPCs]($language$/elitemobs/creating_npcs.md), [quests]($language$/elitemobs/creating_quests.md), [arenas]($language$/elitemobs/creating_arenas.md)
e muito mais! Você pode encontrar guias para criar outros tipos de conteúdo que não os listados acima no menu da barra
lateral do wiki.

Para a experiência de criação de conteúdo mais fácil e eficiente, recomendamos usar o WebApp. Essa ferramenta permite
que você gere arquivos de configuração prontos para uso sem a necessidade de navegar extensivamente pelo wiki para
garantir a correção, principalmente se você estiver considerando criar poderes de boss EliteScript. Acesse
o [WebApp aqui](https://magmaguy.com/webapp/webapp.html).

# Para Admins e Donos de Servidores

Este plugin foi projetado para servidores de survival e semelhantes (como Skyblock, Skywars e variantes de survival
fortemente modded).

O plugin foi concebido para ser facilmente utilizável, simplesmente arrastando e soltando o jar do plugin no servidor.
As configurações padrão são as que eu uso nos meus próprios servidores e estão sujeitas a alterações ao longo do tempo.

**No entanto!** A personalização tem sido uma prioridade máxima durante todo o processo de desenvolvimento do EliteMobs.
Quase todos os aspectos do plugin podem ser traduzidos, personalizados, desativados ou modificados.

# Para outros desenvolvedores

Apesar da natureza GPLV3 e open-source deste projeto, eu não estou procurando nem aceitarei nenhuma adição ou alteração
de código neste momento. Dou as boas-vindas a forks do plugin e ficaria muito satisfeito em ver o que você pode fazer
com eles; no entanto, este é o meu primeiro projeto de programação massiva e, como tal, também é uma experiência de
aprendizado.

**No entanto!** Não interpretem isso como eu afirmando que estou acima de qualquer crítica ou que não vou ouvir
feedback - muito pelo contrário, eu adoro quando as pessoas apontam maneiras melhores de realizar coisas que eu fiz no
plugin. Eu desejo que este projeto seja algo que eu escrevi do início ao fim, sem snippets de código que eu não conheça
ou que eu não entenda.
