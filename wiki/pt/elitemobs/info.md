Bem-vindo à wiki do EliteMobs!

# Licença

O código fonte do EliteMobs está coberto pela licença [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), e esta wiki é fornecida com a licença [CC0](https://choosealicense.com/licenses/cc0-1.0/).

Sinta-se à vontade para redistribuir e modificar a informação nesta wiki.

# Versões

A partir da versão 9.0.0 do EliteMobs, a única versão do Minecraft suportada é a 1.21 e superior.

Para aqueles que procuram compatibilidade com versões mais antigas do Minecraft (1.19.4 - 1.20.4), por favor usem a versão 8 do EliteMobs.

**Nota: Nenhuma versão do EliteMobs suporta as versões 1.20.5 e 1.20.6 do Minecraft.**

# Para que serve o EliteMobs?

O EliteMobs tem como objetivo expandir o final do jogo do Minecraft, implementando vários conteúdos relacionados com bosses.

Isto significa:
- Bosses Dinâmicos (Mobs Nivelados)
- Bosses Personalizados
- Eventos
- Arenas
- Masmorras Baseadas no Mundo
- Masmorras Instanciadas
- Masmorras Aleatórias de Mundo Aberto (com integração BetterStructures)
- Itens Personalizados (Itens de Elite/Saque)
- ... e mais!

O plugin não tem como objetivo substituir o conteúdo vanilla do Minecraft, mas sim complementá-lo, permitindo que os jogadores optem por não participar no conteúdo do EliteMobs, se desejado. Os itens do EliteMobs normalmente não afetam o PvP ou o combate vanilla do Minecraft, uma vez que os seus bónus de dano e defesa só se aplicam durante o combate com EliteMobs.

# Visão Geral das Funcionalidades do EliteMobs

Nesta seção, vamos dar uma olhada em algumas das principais funcionalidades que o EliteMobs tem para oferecer, o que são e como você pode desativá-las. Para uma lista completa de funcionalidades, consulte [esta página]($language$/elitemobs/feature_list.md&section=feature-list).

Você também pode verificar [esta]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) página para encontrar a maneira pretendida para os jogadores interagirem com o EliteMobs.

## Bosses Dinâmicos

Bosses Dinâmicos é uma das principais funcionalidades do EliteMobs. Ele substitui uma porcentagem de spawns vanilla do Minecraft por spawns de Mobs de Elite.

Elites são mobs mais fortes, concebidos para desafiar os jogadores e recompensá-los com possíveis drops de saque ao serem derrotados. O nível de Elites é determinado pela qualidade da armadura e equipamento utilizados pelo jogador. O equipamento normal do Minecraft tem um nível determinado pela qualidade do material, como explicado [aqui]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). No entanto, à medida que os jogadores derrotam Elites e adquirem melhores saques, eventualmente começarão a obter itens de Elite com níveis definidos, tornando mais fácil prever os níveis de Elites que irão aparecer.

Isto implica que os níveis dos jogadores são determinados pelo equipamento que usam, enquanto os níveis de Elite são determinados pelos níveis dos jogadores. Não existe um sistema de experiência no EliteMobs, toda a progressão de nível do jogador depende do equipamento.

Você pode ajustar a dificuldade dos elites modificando os valores `damageToEliteMobMultiplierV2` e `damageToPlayerMultiplierV2` em *MobCombatSettings.yml*. Mais informações sobre isto podem ser encontradas [aqui]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Se você deseja desativar completamente esta funcionalidade, pode fazê-lo definindo o valor `doNaturalEliteMobSpawning` para `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Itens/Saque de Elite

O EliteMobs apresenta itens gerados aleatoriamente que podem ser encontrados em lojas ou serem dropados por Elites. Também existem itens personalizados que geralmente são encontrados em masmorras e outros conteúdos de Elite.

Os itens de Elite são exatamente como os itens vanilla, exceto que geralmente estão equipados com extras e são mais poderosos do que qualquer coisa que você possa encontrar no Minecraft vanilla. Alguns itens de Elite terão estatísticas neles chamadas **Afiamento de Elite** e **Defesa de Elite**, essas estatísticas só serão aplicadas quando os jogadores estiverem a lutar contra Elites e não afetam os mobs vanilla.

Os itens de Elite também podem ter encantamentos, [Encantamentos Personalizados]($language$/elitemobs/custom_enchantments_list.md) e efeitos de poção.

Você pode desativar os itens de Elite abrindo *ItemSettings.yml* e definindo o valor `doEliteMobsLoot` para `false`. (Não recomendado, torna impossível a progressão de nível MMORPG.)

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Eventos

Eventos são encontros únicos no EliteMobs que podem ser acionados aleatoriamente com base num cronômetro ou por ações específicas do jogador, como minerar um bloco ou cortar uma árvore.

Esses encontros apresentam Elites personalizados e únicos que representam um desafio maior e oferecem saques valiosos ao serem derrotados.

Os jogadores recebem notificações no chat quando ocorre um evento, com a opção de rastrear a saúde e localização do Elite através de um link clicável. Se o Elite não for derrotado dentro de um determinado período de tempo, o evento termina e o Elite desaparece.

Você pode desativar todos os eventos abrindo events.yml e definindo os valores `actionEventsEnabled` e `timedEventsEnabled` para `false`.

Se você quiser desativar eventos individuais, você pode ir para *~plugins\EliteMobs\customevents*. lá você encontrará configurações para cada evento e poderá desativar qualquer evento abrindo sua configuração e definindo o valor `isEnabled` para `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Guilda dos Aventureiros

A Guilda dos Aventureiros é um mundo hub adicional que você pode instalar e também é um conjunto de comandos que os jogadores podem usar.

Se o mundo hub não estiver instalado, os jogadores terão que usar comandos, caso contrário, executar comandos com o mundo hub instalado irá teletransportar os jogadores para o mundo hub e lá eles podem interagir com NPCs em vez de ter que digitar comandos.

Que comandos? EliteMobs tem vários comandos que os jogadores podem usar para vender e comprar itens, reparar itens, encantar itens e muito mais. Saiba mais sobre quais comandos os jogadores podem usar [aqui]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Para mais informações sobre a Guilda dos Aventureiros e como instalar o mundo hub, confira [esta]($language$/elitemobs/adventurers_guild_world.md) página.

Você pode desativar o mundo hub abrindo *AdventurersGuild.yml* e definindo o valor `guildHubIsEnabledv2` para `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Nível/Rank da Guilda

À medida que os jogadores progridem e adquirem itens melhores, eventualmente atingirão um limite e os mobs deixarão de drop itens de nível mais alto, isto é chamado de limitador de saque de nível da guilda.

O limitador de saque de nível da guilda restringe o saque mais alto que os jogadores podem obter com base em seu nível de guilda e aplica limitações padrão de itens de nível 1 a nível 10, com níveis de mob correspondentes. Os níveis de prestígio desbloqueiam níveis mais altos, permitindo o acesso a saques superiores e mobs mais difíceis, garantindo uma jogabilidade equilibrada.

Este sistema, combinado com o encantamento soulbind, mitiga problemas de powerleveling, mantém o equilíbrio do servidor e promove o apego do jogador ao seu saque adquirido. Você pode ler mais sobre o nível da guilda [aqui]($language$/elitemobs/guild_tier_loot_limiter.md).

Todas as configurações para o Nível da Guilda podem ser ajustadas e estão localizadas em *AdventurersGuild.yml*.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arenas

As Arenas são desafios baseados em ondas onde os jogadores podem se envolver em combate. Um ou vários jogadores podem entrar numa arena e enfrentar ondas de inimigos cada vez mais difíceis, com recompensas a melhorar à medida que o desafio progride.

Ao instalar o mundo hub da Guilda dos Aventureiros, os jogadores obtêm acesso à Arena da Liga da Madeira, uma arena gratuita acessível através da interação com um NPC no mundo hub ou através do menu */em*.

Você pode obter arenas adicionais indo para: [Itch.io](https://magmaguy.itch.io/) ou se inscrevendo no [Patreon](https://www.patreon.com/magmaguy).

Você pode desativar as arenas indo para *~plugins\EliteMobs\customarenas*
e então abrindo a configuração da arena, por exemplo *wood_league.yml* e então encontrando o valor `isEnabled` e definindo-o para `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Masmorras Mundiais

As Masmorras Mundiais são conteúdo personalizado adicional que você pode baixar para o EliteMobs. As masmorras geralmente têm bosses de Elite personalizados, mundos personalizados, saques personalizados e poderes de boss personalizados.

Todas as masmorras mundiais são masmorras que estão localizadas em seu próprio mundo, o que significa que quando os jogadores as acedem são teletransportados para um mundo que não tem nada nele além dessa masmorra.

Existem vários tipos de masmorras mundiais, para saber mais sobre os tipos clique [aqui]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Todas as masmorras mundiais têm um nível definido e quaisquer jogadores que tentem as masmorras devem estar próximos desse nível para a melhor experiência.

Você pode obter masmorras indo para: [Itch.io](https://magmaguy.itch.io/) ou se inscrevendo no [Patreon](https://www.patreon.com/magmaguy). Existem várias masmorras gratuitas que você pode baixar [aqui](https://magmaguy.itch.io/em-free-content).

Você pode desativar masmorras individuais indo para *~plugins\EliteMobs\content_packages* e abrindo a configuração da masmorra para a masmorra que você deseja desativar e definindo o valor `isEnabled` para `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Masmorras Instanciadas

As Masmorras Instanciadas diferem das Masmorras Mundiais de várias maneiras. Elas são instanciadas, o que significa que um novo mundo é criado dinamicamente a partir de um projeto, proporcionando aos jogadores e aos seus amigos uma experiência de masmorra privada semelhante às encontradas nos MMOs.

As Masmorras Instanciadas oferecem várias dificuldades com poderes de boss únicos, maior saúde e saque superior à medida que a dificuldade aumenta. Elas também introduzem papéis, permitindo que os jogadores adotem papéis de tanque ou DPS com base no equipamento que usam (o equipamento específico para papéis é exclusivo das Masmorras Instanciadas). Leia mais sobre como a dificuldade funciona [aqui]($language$/elitemobs/instanced_dungeon_difficulty.md).

Além disso, os jogadores podem ressuscitar uns aos outros dentro das Masmorras Instanciadas, permitindo-lhes retomar rapidamente a batalha se agirem rápido o suficiente.

Você pode obter masmorras instanciadas indo para: [Itch.io](https://magmaguy.itch.io/) ou se inscrevendo no [Patreon](https://www.patreon.com/magmaguy). Existem masmorras instanciadas gratuitas que você pode baixar [aqui](https://magmaguy.itch.io/em-free-content).

Você pode desativar masmorras individuais indo para *~plugins\EliteMobs\dungeonpackages* e abrindo a configuração da masmorra para a masmorra que você deseja desativar e definindo o valor `isEnabled` para `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventuras

As Aventuras representam o conteúdo adicional mais expansivo disponível para EliteMobs, ostentando um vasto mundo completo com uma história cativante e uma infinidade de missões para os jogadores embarcarem.

Apresentando centenas de bosses, poderes e itens personalizados, as Aventuras oferecem uma experiência de jogo imersiva. As missões dentro das Aventuras funcionam de forma semelhante às dos MMOs tradicionais, incumbindo os jogadores de objetivos como derrotar mobs, localizar itens, interagir com NPCs ou qualquer combinação dos mesmos.

As Aventuras são tão grandes que até têm outras sub-masmorras ou sub-arenas localizadas no seu interior.

Embora as Aventuras normalmente recomendem uma faixa de nível definida para os jogadores, é aconselhável que os jogadores comecem a sua aventura na extremidade inferior da escala de níveis para uma diversão ideal.

Você pode obter aventuras indo para: [Itch.io](https://magmaguy.itch.io/) ou se inscrevendo no [Patreon](https://www.patreon.com/magmaguy).

Você pode desativar aventuras individuais indo para *~plugins\EliteMobs\dungeonpackages* e abrindo a configuração da aventura que você deseja desativar e definindo o valor `isEnabled` para `false`. As aventuras podem ter sub-masmorras e sub-arenas adicionais que vêm com as aventuras, por isso certifique-se de que as desativa também se estiver a desativar uma aventura.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Teletransportes de Buraco de Minhoca

O EliteMobs também apresenta teletransportes simples de A para B chamados buracos de minhoca. Você verá estes usados principalmente no mundo hub da Guilda dos Aventureiros como uma forma de teletransportar os jogadores de lá para uma masmorra ou de volta ao spawn do servidor.

Geralmente, eles têm a forma de um hexágono, cubo ou diamante feito de partículas. Essas partículas podem, às vezes, causar lag nos clientes bedrock, então você pode querer desativar os efeitos de partículas abrindo *Wormholes.yml* e definindo `noParticlesMode` como `true`.

Você pode fazer seus próprios buracos de minhoca e usá-los como quiser. Clique [aqui]($language$/elitemobs/creating_wormholes.md) para descobrir como.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Conteúdo Personalizado

O EliteMobs também oferece a você a oportunidade de criar seu próprio conteúdo, incluindo [bosses]($language$/elitemobs/creating_bosses.md), [masmorras]($language$/elitemobs/dungeon_packager.md), [poderes]($language$/elitemobs/creating_powers.md), [NPCs]($language$/elitemobs/creating_npcs.md), [missões]($language$/elitemobs/creating_quests.md), [arenas]($language$/elitemobs/creating_arenas.md) e muito mais! Você pode encontrar guias para criar outros tipos de conteúdo além dos listados acima no menu lateral da wiki.

Para a experiência de criação de conteúdo mais fácil e eficiente, recomendamos o uso do WebApp. Esta ferramenta permite que você gere arquivos de configuração prontos para uso sem a necessidade de navegar extensivamente pela wiki para garantir a correção, principalmente se você estiver pensando em criar poderes de boss EliteScript. Acesse o [WebApp aqui](https://magmaguy.com/webapp/webapp.html).

# Para Admins e Donos de Servidores

Este plugin foi concebido para servidores de sobrevivência e semelhantes a sobrevivência (como Skyblock, Skywars e variantes de sobrevivência muito modificadas).

O plugin destina-se a ser facilmente utilizável, simplesmente arrastando e soltando o jar do plugin no servidor. As configurações padrão são as que eu uso nos meus próprios servidores e estão sujeitas a alterações ao longo do tempo.

**No entanto!** A personalização tem sido uma prioridade máxima durante todo o processo de desenvolvimento do EliteMobs. Quase todos os aspetos do plugin podem ser traduzidos, personalizados, desativados ou modificados.

# Para outros programadores

Apesar da natureza GPLV3 e de código aberto deste projeto, eu não estou à procura nem aceitarei quaisquer adições ou alterações de código neste momento. Dou as boas-vindas aos forks do plugin e teria imenso prazer em ver o que você poderia fazer com eles; no entanto, este é o meu primeiro projeto de programação massivo e, como tal, também é uma experiência de aprendizagem.

**No entanto!** Não interprete isso como se eu estivesse afirmando que estou acima de qualquer crítica ou que não vou ouvir o feedback - muito pelo contrário, eu adoro quando as pessoas apontam maneiras melhores de realizar as coisas que eu fiz no plugin. Eu desejo que este projeto seja algo que eu escrevi de ponta a ponta, sem trechos de código que eu não conheço ou que eu não entendo.
