## Bem-vindo ao Wiki do EliteMobs!

# Licença

O código-fonte do EliteMobs está sob a licença [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), e este wiki é fornecido com a licença [CC0](https://choosealicense.com/licenses/cc0-1.0/).

Sinta-se à vontade para redistribuir e modificar as informações neste wiki.

# Versões

A partir da versão 9.0.0 do EliteMobs, a única versão do Minecraft suportada é a 1.21 e superior.

Para aqueles que procuram compatibilidade com versões mais antigas do Minecraft (1.19.4 - 1.20.4), utilize a versão 8 do EliteMobs.

**Observação: Nenhuma versão do EliteMobs suporta as versões 1.20.5 e 1.20.6 do Minecraft.**

# Para que serve o EliteMobs?

O EliteMobs visa estender o fim de jogo do Minecraft implementando vários conteúdos relacionados a chefes.

Isso significa:
- Chefes Dinâmicos (Mobs com Níveis)
- Chefes Personalizados
- Eventos
- Arenas
- Masmorras Baseadas em Mundo
- Masmorras Instanciadas
- Masmorras Aleatórias de Mundo Aberto (com integração do BetterStructures)
- Itens Personalizados (Itens/Loot Elite)
- ... e muito mais! 

O plugin não visa substituir o conteúdo do vanilla Minecraft, mas sim complementá-lo, permitindo que os jogadores optem por não participar do conteúdo do EliteMobs se desejarem. Os itens do EliteMobs normalmente não afetam o PvP ou o combate vanilla do Minecraft, pois seus bônus de dano e defesa só se aplicam durante o combate com o EliteMobs.

# Visão Geral dos Recursos do EliteMobs

Nesta seção, daremos uma olhada em alguns dos recursos **principais** que o EliteMobs oferece, o que são e como você pode desabilitá-los. Para uma lista completa de recursos, consulte [esta página]($language$/elitemobs/feature_list.md&section=feature-list).

Você também pode conferir [esta]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) página para encontrar a forma pretendida de como os jogadores devem interagir com o EliteMobs.

## Chefes Dinâmicos

Chefes Dinâmicos é uma das principais características do EliteMobs. Ele substitui uma porcentagem de gerações do vanilla Minecraft por gerações de Mobs Elite.

As elites são mobs mais resistentes projetadas para desafiar os jogadores e recompensá-los com possíveis drops de loot ao serem derrotadas. O nível das Elites é determinado pela qualidade da armadura e equipamento equipado pelo jogador. O equipamento normal do Minecraft tem um nível determinado pela qualidade do material, como explicado [aqui]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). No entanto, à medida que os jogadores derrotam Elites e adquirem loot melhor, eles acabarão obtendo itens Elite com níveis definidos, tornando mais fácil prever os níveis das Elites que serão geradas.

Isso implica que os níveis do jogador são determinados pelo equipamento que eles usam, enquanto os níveis Elite são determinados pelos níveis dos jogadores.
Não há sistema de experiência no EliteMobs, toda a progressão de nível do jogador depende do equipamento.

Você pode ajustar a dificuldade das elites modificando os valores `damageToEliteMobMultiplierV2` e `damageToPlayerMultiplierV2` em *MobCombatSettings.yml*. Mais informações sobre isso podem ser encontradas [aqui]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Se você deseja desabilitar totalmente esse recurso, pode fazer isso definindo o valor `doNaturalEliteMobSpawning` como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Itens/Loot Elite

O EliteMobs apresenta itens gerados aleatoriamente que podem ser encontrados em lojas ou serem deixados cair por Elites. Também existem itens personalizados que geralmente são encontrados em masmorras e outros conteúdos Elite.

Os itens Elite são como os itens do vanilla, exceto que geralmente são equipados com extras e são mais poderosos do que qualquer coisa que você possa encontrar no MineCraft vanilla. Alguns itens Elite terão estatísticas neles que são chamadas de **Nitidez Elite** e **Defesa Elite**, essas estatísticas só se aplicarão quando os jogadores estiverem lutando contra Elites e não afetam os mobs vanilla.

Os itens Elite também podem ter encantamentos, [Encantamentos Personalizados]($language$/elitemobs/custom_enchantments_list.md) e efeitos de poção.

Você pode desabilitar os itens Elite abrindo *ItemSettings.yml* e definindo o valor `doEliteMobsLoot` como `false`. (Não recomendado, torna impossível a progressão de nível do MMORPG.)

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Eventos

Os eventos são encontros exclusivos no EliteMobs que podem ser acionados aleatoriamente com base em um cronômetro ou por ações específicas do jogador, como minerar um bloco ou cortar uma árvore. 

Esses encontros apresentam Elites personalizados e exclusivos que representam um desafio maior e oferecem loot valioso ao serem derrotados. 

Os jogadores recebem notificações no bate-papo quando um evento ocorre, com a opção de rastrear a saúde e a localização do Elite por meio de um link clicável. Se o Elite não for derrotado dentro de um determinado período de tempo, o evento termina e o Elite desaparece.

Você pode desabilitar todos os eventos abrindo events.yml e definindo os valores actionEventsEnabled e timedEventsEnabled como false.

Se você deseja desabilitar eventos individuais, pode ir para ~plugins\EliteMobs\customevents. Lá você encontrará as configurações para cada evento e pode desabilitar qualquer evento abrindo sua configuração e definindo o valor isEnabled como false.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Guilda de Aventureiros

A Guilda de Aventureiros é um mundo central adicional que você pode instalar, e também é um conjunto de comandos que os jogadores podem usar.

Se o mundo central não estiver instalado, os jogadores precisarão usar comandos, caso contrário, executar comandos com o mundo central instalado teletransportará os jogadores para o mundo central e lá eles podem interagir com NPCs em vez de ter que digitar comandos.

Quais comandos? O EliteMobs possui vários comandos que os jogadores podem usar para vender e comprar itens, reparar itens, encantar itens e muito mais. Saiba mais sobre quais comandos os jogadores podem usar [aqui]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Para obter mais informações sobre a Guilda de Aventureiros e como instalar o mundo central, consulte [esta]($language$/elitemobs/adventurers_guild_world.md) página.

Você pode desabilitar o mundo central abrindo *AdventurersGuild.yml* e definindo `guildHubIsEnabledv2` como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Nível/Rank da Guilda

À medida que os jogadores progridem e adquirem itens melhores, eles acabarão atingindo um limite e os mobs pararão de deixar cair itens de nível mais alto, isso é chamado de limitador de loot de nível de guilda.

O limitador de loot de nível de guilda restringe o loot de mais alto nível que os jogadores podem obter com base em seu nível de guilda e aplica limitações padrão do nível 1 ao nível 10 de itens, com níveis de mob correspondentes. Os níveis de prestígio desbloqueiam níveis mais altos, permitindo acesso a loot superior e mobs mais difíceis, garantindo uma jogabilidade equilibrada. 

Este sistema, combinado com o encantamento de vínculo de alma, mitiga problemas de powerleveling, mantém o equilíbrio do servidor e promove o apego do jogador ao loot adquirido. Você pode ler mais sobre o nível de guilda [aqui]($language$/elitemobs/guild_tier_loot_limiter.md).

Todas as configurações para o Nível de Guilda podem ser ajustadas e estão localizadas em *AdventurersGuild.yml*.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arenas

As Arenas são desafios baseados em ondas onde os jogadores podem se engajar em combate. Um ou mais jogadores podem se juntar a uma arena e enfrentar ondas de inimigos cada vez mais difíceis, com recompensas melhorando à medida que o desafio avança. 

Ao instalar o mundo central da Guilda de Aventureiros, os jogadores ganham acesso à Arena da Liga de Madeira, uma arena gratuita acessível por meio da interação com um NPC no mundo central ou por meio do menu */em*.

Você pode obter arenas adicionais indo para: [Itch.io](https://magmaguy.itch.io/) ou assinando no [Patreon](https://www.patreon.com/magmaguy).

Você pode desabilitar as arenas indo para *~plugins\EliteMobs\customarenas*
e, em seguida, abrindo a configuração da arena, por exemplo, *wood_league.yml* e, em seguida, encontrando o valor `isEnabled` e definindo-o como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Masmorras Mundiais

Masmorras Mundiais são conteúdos personalizados adicionais que você pode baixar para o EliteMobs. As masmorras geralmente possuem chefes Elite personalizados, mundos personalizados, loot personalizado e poderes de chefe personalizados.


Todas as masmorras mundiais são masmorras que estão localizadas em seu próprio mundo, o que significa que quando os jogadores acessam elas, eles são teletransportados para um mundo que não tem nada nele, além daquela masmorra.

Existem vários tipos de masmorras mundiais, para saber mais sobre os tipos, clique [aqui]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Todas as masmorras mundiais têm um nível definido e qualquer jogador que tentar as masmorras deve estar por volta daquele nível para a melhor experiência.

Você pode obter masmorras indo para: [Itch.io](https://magmaguy.itch.io/) ou assinando no [Patreon](https://www.patreon.com/magmaguy). Existem várias masmorras gratuitas que você pode baixar [aqui](https://magmaguy.itch.io/em-free-content).

Você pode desabilitar masmorras individuais indo para *~plugins\EliteMobs\dungeonpackages* e abrindo a configuração da masmorra para a masmorra que deseja desabilitar e definindo o valor `isEnabled` como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Masmorras Instanciadas

As Masmorras Instanciadas diferem das Masmorras Mundiais em vários aspectos. Elas são instanciadas, o que significa que um novo mundo é criado dinamicamente a partir de um modelo, fornecendo aos jogadores e seus amigos uma experiência privada de masmorra semelhante àquelas encontradas em MMOs. 

As Masmorras Instanciadas oferecem várias dificuldades com poderes de chefe exclusivos, saúde aumentada e loot superior à medida que a dificuldade aumenta. Elas também introduzem papéis, permitindo que os jogadores assumam papéis de tanque ou DPS com base no equipamento que eles usam (o equipamento específico para cada papel é exclusivo das Masmorras Instanciadas). Leia mais sobre como a dificuldade funciona [aqui]($language$/elitemobs/instanced_dungeon_difficulty.md).

Além disso, os jogadores podem ressuscitar uns aos outros dentro de Masmorras Instanciadas, permitindo que eles retomem a batalha rapidamente se agirem rápido o suficiente.

Você pode obter masmorras instanciadas indo para: [Itch.io](https://magmaguy.itch.io/) ou assinando no [Patreon](https://www.patreon.com/magmaguy). Existem masmorras instanciadas gratuitas que você pode baixar [aqui](https://magmaguy.itch.io/em-free-content).

Você pode desabilitar masmorras individuais indo para *~plugins\EliteMobs\dungeonpackages* e abrindo a configuração da masmorra para a masmorra que deseja desabilitar e definindo o valor `isEnabled` como `false`.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventuras

As Aventuras representam o conteúdo adicional mais extenso disponível para o EliteMobs, com um vasto mundo completo com uma história cativante e uma infinidade de missões para os jogadores embarcarem. 

Com centenas de chefes, poderes e itens personalizados, as Aventuras oferecem uma experiência de jogo imersiva. As missões dentro das Aventuras funcionam de forma semelhante às de MMORPGs tradicionais, incumbindo os jogadores de objetivos como derrotar mobs, localizar itens, interagir com NPCs ou qualquer combinação deles.

As Aventuras são tão grandes que até possuem outras sub-masmorras ou sub-arenas localizadas dentro delas.

Embora as Aventuras geralmente recomendem uma faixa de nível definida para os jogadores, é aconselhável que os jogadores comecem sua aventura no nível mais baixo da escala de nível para aproveitar melhor a experiência.

Você pode obter aventuras indo para: [Itch.io](https://magmaguy.itch.io/) ou assinando no [Patreon](https://www.patreon.com/magmaguy).

Você pode desabilitar aventuras individuais indo para *~plugins\EliteMobs\dungeonpackages* e abrindo a configuração da aventura que deseja desabilitar e definindo o valor `isEnabled` como `false`. As aventuras podem ter sub-masmorras e sub-arenas adicionais que vêm com aventuras, então certifique-se de desabilitar essas também se você estiver desabilitando uma aventura.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Teletransportes de Buraco de Minhoca

O EliteMobs também possui teletransportadores simples de A para B chamados buracos de minhoca. Você os verá principalmente usados no mundo central da Guilda de Aventureiros como uma forma de teletransportar os jogadores de lá para uma masmorra ou de volta para a geração do servidor.

Eles geralmente têm a forma de um hexágono, cubo ou diamante feito de partículas. Essas partículas às vezes podem causar lag em clientes bedrock, então você pode querer desabilitar os efeitos de partículas abrindo *Wormholes.yml* e definindo `noParticlesMode` como `true`.

Você pode criar seus próprios buracos de minhoca e usá-los como quiser. Clique [aqui]($language$/elitemobs/creating_wormholes.md) para descobrir como.

<div align="center">

<details> 

<summary><b>Exemplo Visual</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Conteúdo Personalizado

O EliteMobs também oferece a você a oportunidade de criar seu próprio conteúdo, incluindo [chefes]($language$/elitemobs/creating_bosses.md), [masmorras]($language$/elitemobs/dungeon_packager.md), [poderes]($language$/elitemobs/creating_powers.md), [NPCs]($language$/elitemobs/creating_npcs.md), [missões]($language$/elitemobs/creating_quests.md), [arenas]($language$/elitemobs/creating_arenas.md) e muito mais! Você pode encontrar guias para criar outros tipos de conteúdo além dos listados acima no menu lateral do wiki.

Para obter a experiência de criação de conteúdo mais fácil e eficiente, recomendamos o uso do WebApp. Essa ferramenta permite que você gere arquivos de configuração prontos para usar sem a necessidade de navegar extensivamente pelo wiki para garantir a correção, principalmente se você estiver pensando em criar poderes de chefe do EliteScript. Acesse o [WebApp aqui](https://magmaguy.com/webapp/webapp.html).

# Para Administradores e Proprietários de Servidores

Este plugin é projetado para servidores de sobrevivência e servidores semelhantes à sobrevivência (como Skyblock, Skywars e variantes de sobrevivência fortemente modificadas).

O plugin é destinado a ser facilmente usado simplesmente arrastando e soltando o arquivo jar do plugin no servidor. As configurações padrão são as que eu uso em meus próprios servidores e estão sujeitas a alterações ao longo do tempo.

**No entanto!** A personalização foi uma prioridade máxima durante todo o processo de desenvolvimento do EliteMobs. Quase todos os aspectos do plugin podem ser traduzidos, personalizados, desabilitados ou modificados.


# Para outros desenvolvedores

Apesar da natureza GPLV3 e de código aberto deste projeto, não estou procurando e não aceitarei nenhuma adição ou alteração de código neste momento. Dou as boas-vindas a forks do plugin e ficaria imensamente satisfeito em ver o que você pode fazer com eles; no entanto, este é meu primeiro grande projeto de programação e, como tal, também é uma experiência de aprendizado.

**No entanto!** Não considere isso como eu afirmando que estou além de qualquer crítica ou que não ouvirei feedback - pelo contrário, adoro quando as pessoas apontam maneiras melhores de realizar as coisas que fiz no plugin. Desejo que este projeto seja algo que eu escrevi do início ao fim, sem trechos de código que eu não conheço ou que não entenda.


