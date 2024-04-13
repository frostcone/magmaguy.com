
欢迎来到EliteMobs维基！

# 许可

EliteMobs的源代码在[GPLV3](https://choosealicense.com/licenses/gpl-3.0/)许可下，此维基提供[CC0许可证](https://choosealicense.com/licenses/cc0-1.0/)。

欢迎重新分发并修改此维基中的信息。

# EliteMobs是什么？

EliteMobs旨在通过实现各种与boss相关的内容来扩展Minecraft的末游戏。

这意味着：
- 动态Boss（等级怪物）
- 自定义Boss
- 事件
- 竞技场
- 以世界为基础的地下城
- 实例化地下城
- 开放世界随机地下城（与BetterStructures集成）
- 自定义物品（精英物品/战利品）
- ……还有更多！

该插件的目标并不是要替换原版Minecraft的内容，而是要补充它，允许玩家在需要时选择不使用EliteMobs的内容。EliteMobs的物品通常不会影响PvP或原版Minecraft的战斗，因为它们的伤害和防御奖励只在与EliteMobs战斗时才适用。

# EliteMobs功能概述

在本节中，我们将着眼于EliteMobs提供的一些**主要**功能，它们是什么以及您如何禁用它们。关于完整功能列表，请查看[此页面](\$language$/elitemobs/feature_list.md&section=feature-list)。

您还可以查看[此页面](\$language$/elitemobs/understanding_the_basics_of_elitemobs.md)来了解玩家应该如何与EliteMobs互动。

## 动态Boss

动态Boss是EliteMobs的主要功能之一。它将一部分原版Minecraft的怪物刷新替换为Elite Mob。

精英是韧性更强的怪物，设计用于挑战玩家并在击败后可能有掉落物。精英的等级由玩家装备的护甲和装备的质量决定。普通的Minecraft装备的等级由材料质量决定，这里有解释[此处](\$language$/elitemobs/spawning_tiers_loot.md&section=material-levels)。然而，当玩家击败精英并获取更好的战利品后，他们将最终开始获得带有设定等级的精英物品，从而更容易预测将刷新的精英的等级。

这意味着玩家的等级由他们穿的装备决定，而精英的等级由玩家的等级决定。
EliteMobs中没有经验系统，所有玩家等级的提升都依赖于装备。

您可以通过修改*MobCombatSettings.yml*中的`damageToEliteMobMultiplierV2`和`damageToPlayerMultiplierV2`值来调整精英的难度。您可以在[这里](\$language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml)找到更多信息。

如果您希望完全禁用此功能，可以通过将`doNaturalEliteMobSpawning`值设置为`false`来实现。

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## 精英物品/战利品

EliteMobs具有可以在商店中找到或由精英掉落的随机生成的物品。还有通常在地下城和其他精英内容中找到的自定义物品。

精英物品就像原版物品一样，只是它们通常配备了额外的好东西，并且比你在原版MineCraft中找到的任何东西都更强大。一些精英物品上会有叫做**精英锐度**和**精英防御**的统计数据，这些统计数据只有在玩家和精英战斗时才适用，不影响原版怪物。

精英物品还可以有附魔，[自定义附魔](\$language$/elitemobs/custom_enchantments_list.md)和药水效果。

您可以通过打开*ItemSettings.yml*并将`doEliteMobsLoot`值设置为`false`来禁用精英物品。 (不推荐，这将使得MMORPG等级提升成为不可能。)

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## 事件

事件是EliteMobs中可以基于计时器或特定玩家行为（如挖掘一个方块或砍伐一棵树）随机触发的独特遭遇。

这些遭遇中特有的，独特的精英提出了更大的挑战，并在击败后提供有价值的战利品。

当事件发生时，玩家会在聊天中接收到通知，他们可以选择通过可点击的链接追踪精英的健康和位置。如果精英在一定的时间内没有被击败，事件将结束，精英将消失。

您可以通过打开events.yml并将actionEventsEnabled和timedEventsEnabled的值设置为false来禁用所有事件。

如果您希望禁用个别事件，可以转到~plugins\EliteMobs\customevents。在那里您会找到每个事件的配置，您可以通过打开其配置并将isEnabled的值设置为false来禁用任何事件。

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## 冒险者公会

冒险者公会是您可以安装的附加集线器世界，也是玩家可以使用的一组命令。

如果没有安装集线器世界，那么玩家将不得不使用命令，否则，运行命令将把玩家传送到集线器世界，他们可以在那里与NPC互动，而不必输入命令。

什么命令？EliteMobs有几个玩家可以用来卖出和购买物品，修理物品，附魔物品等的命令。了解更多关于玩家可以使用哪些命令的信息，请点击[这里](\$language$/elitemobs/permissions_and_commands.md&section=npc-commands)。

有关冒险者公会以及如何安装集线器世界的更多信息，请查看[此页](\$language$/elitemobs/adventurers_guild_world.md)。

您可以通过打开*AdventurersGuild.yml*并将`guildHubIsEnabledv2`设置为`false`来禁用集线器世界。

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## 公会等级/排名

当玩家进步并获得更好的物品时，他们会最终达到一定的限度，怪物将停止掉落更高级别的物品，这就是公会等级战利品限制器。

公会等级战利品限制器限制了玩家可以获得的最高战利品，基于他们的公会等级，并从等级1到等级10的物品应用了默认限制，与相应的怪物等级。声望等级可以解锁更高的等级，获得更优质的战利品和更困难的怪物，保证平衡的游戏体验。

这个系统，结合灵魂束缚的附魔，缓解了升级问题，保持了服务器的平衡，并让玩家更喜欢他们获得的战利品。您可以在[这里](\$language$/elitemobs/guild_tier_loot_limiter.md)阅读更多关于公会等级的信息。

公会等级的所有设置可以进行调整，并位于*AdventurersGuild.yml*中。

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## 竞技场

竞技场是基于波的挑战，玩家可以进行战斗。一个或多个玩家可以加入竞技场，并面对越来越困难的敌人波，随着挑战的进展，奖励也会提高。

在安装冒险者公会集线器世界后，玩家可以进入木联赛竞技场，这是一个免费的竞技场，可以通过在集线器世界中与NPC互动或通过 */em* 菜单来访问。

您可以通过以下链接获取额外的竞技场：[Itch.io](https://magmaguy.itch.io/) 或 [Patreon](https://www.patreon.com/magmaguy)。

您可以通过前往 *~plugins\EliteMobs\customarenas* 并打开竞技场配置，例如 *wood_league.yml*，然后找到`isEnabled`的值并将其设置为`false`来禁用竞技场。

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## 世界地下城

世界地下城是您可以为EliteMobs下载的额外自定义内容。地下城通常有自定义精英boss，自定义世界，自定义战利品和自定义boss能力。

所有世界的地下城都位于它们自己的世界中，这意味着玩家进入它们时会被传送到一个世界，这个世界除了那个地下城外没有任何其他东西。

有几种类型的世界地下城，要了解更多类型，请点击[这里](\$language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory)。

所有的世界地下城都有固定的等级，尝试地下城的任何玩家最好在那个等级左右，以获得最佳的体验。

您可以通过以下链接获取地下城：[Itch.io](https://magmaguy.itch.io/) 或 [Patreon](https://www.patreon.com/magmaguy)。您可以从[这里](https://magmaguy.itch.io/em-free-content)下载一些免费的地下城。

您可以禁用单个地下城，只需转到 *~plugins\EliteMobs\dungeonpackages*，打开你希望禁用的地下城的地下城配置，然后将`isEnabled`的值设置为`false`。

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## 实例化地下城

实例化地下城与世界地下城有几个不同之处。它们是实例化的，这意味着从蓝图创建新的世界，为玩家及其朋友提供类似于MMO游戏中的私人地下城体验。

实例化地下城提供多种难度级别，每种难度级别都有独特的boss能力，更高的生命值，随着难度的提高，战利品会更优越。它们还引入了角色，允许玩家根据他们的装备选择坦克或DPS角色（特定角色的装备只在实例化地下城中独有）。阅读更多关于如何工作的难度，请点击[这里](\$language$/elitemobs/instanced_dungeon_difficulty.md)。

此外，玩家可以在实例地下城内相互复活，如果他们的反应足够快，他们就可以迅速回到战斗。

您可以通过以下链接获取实例地下城：[Itch.io](https://magmaguy.itch.io/) 或 [Patreon](https://www.patreon.com/magmaguy)。您可以从[这里](https://magmaguy.itch.io/em-free-content)下载一些免费的实例地下城。

您可以通过转到 *~plugins\EliteMobs\dungeonpackages* 并打开你希望禁用的地下城的地下城配置，然后将`isEnabled`的值设置为`false`来禁用单个地下城。

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## 冒险

冒险代表了EliteMobs可用的最广泛的额外内容，拥有广阔的世界，引人入胜的故事线，以及一 multitude of quests，

冒险的特点是具有数百个自定义boss，力量和物品，提供了沉浸式的游戏体验。冒险中的任务功能类似于传统MMO中的任务，玩家的目标包括击败怪物，找到物品，与NPC互动，或者这些目标的任意组合。

冒险是如此之大，以至于它们甚至有其他子地下城或子竞技场位于其中。

虽然冒险通常建议玩家设置一定的等级范围，但建议玩家在等级范围的较低的一段开始他们的冒险，以便获得最佳的享受。

你可以通过访问 [Itch.io](https://magmaguy.itch.io/) 或在 [Patreon](https://www.patreon.com/magmaguy) 上订阅来获取实例化的地牢。你可以从[这里](https://magmaguy.itch.io/em-free-content)下载免费的实例化地牢。

你可以通过访问 *~plugins\EliteMobs\dungeonpackages* 并打开你希望禁用的地牢的配置文件，并将 `isEnabled` 值设置为 `false` 来禁用单个地牢。

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## 冒险

冒险代表 EliteMobs 可提供的最广泛的附加内容，拥有一个庞大的世界，包含一个引人入胜的剧情和许多玩家可以开始的任务。

冒险具有数百个自定义的boss、力量和物品，提供了沉浸式的游戏体验。冒险内的任务与传统MMO的任务类似，将玩家与诸如击败怪物，定位物品，与NPC交互或任何组合的目标相关联。

冒险如此之大，甚至在内部也有其他子地牢或子竞技场。

虽然冒险通常为玩家推荐一定的等级范围，但建议玩家从等级比例的低端开始他们的冒险以获得最佳的享受。

你可以通过访问 [Itch.io](https://magmaguy.itch.io/) 或在 [Patreon](https://www.patreon.com/magmaguy) 上订阅来获取冒险。

你可以通过访问 *~plugins\EliteMobs\dungeonpackages* 并打开你希望禁用的冒险的配置文件，并将 `isEnabled` 值设置为 `false` 来禁用单个冒险。冒险可能会有额外的子地牢和子竞技场与冒险一起来，如果你正在禁用一个冒险，确保也禁用这些。

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## 虫洞传送

EliteMobs 还具有从 A 到 B 的简单传送器，称为虫洞。你将在冒险者公会的中心世界中主要使用这些，作为将玩家从那里传送到地牢或回到服务器出生点的方式。

它们通常呈六角形、立方体或由粒子构成的钻石形。这些粒子有时可能会导致基岩客户端延迟，因此你可能希望通过打开 *Wormholes.yml* 并将 `noParticlesMode` 设置为 `true` 来禁用粒子效果。

你可以创建你自己的虫洞并按照你的意愿使用它们。点击[这里]($language$/elitemobs/creating_wormholes.md)来了解如何操作。

<div align="center">

<details> 

<summary><b>视觉示例</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## 自定义内容

EliteMobs 还为你提供创建自己的内容的机会，包括 [bosses]($language$/elitemobs/creating_bosses.md)、[dungeons]($language$/elitemobs/dungeon_packager.md)、[powers]($language$/elitemobs/creating_powers.md)、[NPCs]($language$/elitemobs/creating_npcs.md)、[quests]($language$/elitemobs/creating_quests.md)、[arenas]($language$/elitemobs/creating_arenas.md) 和更多！你可以在 wiki 的侧边菜单中找到创建其他类型内容的指南。

为了提供最简单和最有效的内容创建体验，我们建议使用 WebApp。这个工具能让你在不需要大量浏览 wiki 以确保正确性的情况下，特别是如果你考虑创建 EliteScript boss powers，生成可直接使用的配置文件。访问[WebApp here](https://magmaguy.com/webapp/webapp.html)。

# 对管理员和服务器所有者

此插件设计用于生存和生存类服务器(如 Skyblock、Skywars 和大量修改的生存变体)。

该插件旨在通过简单地拖拽插件 jar 到服务器中来轻易地使用。默认的设置就是我在我自己的服务器上使用的，并可能随着时间的推移而改变。

**然而！**可定制性在 EliteMobs 的开发过程中一直是首要任务。几乎插件的每个方面都可以翻译、定制、禁用或修改。

# 对其他开发者

尽管这个项目是 GPLV3 并且是开源的，但我不寻求，也不会接受任何代码添加或更改。我欢迎插件的分支，看到你可能如何使用它们将给我带来极大的愉快；然而，这是我第一个大规模的编程项目，因此也是一次学习经验。

**然而！**不要认为我是在声称我超越了任何批评，或者我不会听取反馈 - 我非常喜欢当人们指出我在插件中所做的事情有更好的办法。我希望这个项目是我从头到尾写的，没有任何我不知道或我不理解的代码片段。