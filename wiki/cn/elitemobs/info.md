欢迎来到 EliteMobs Wiki！

# 许可

EliteMobs 源代码受 [GPLV3](https://choosealicense.com/licenses/gpl-3.0/) 许可覆盖，本 Wiki 则采用 [CC0 许可](https://choosealicense.com/licenses/cc0-1.0/) 提供。

您可以随意重新分发和修改本 Wiki 中的信息。

# 版本

从 EliteMobs 9.0.0 版本开始，唯一支持的 Minecraft 版本是 1.21 及以上。

对于寻求与旧版 Minecraft (1.19.4 - 1.20.4) 兼容的用户，请使用 EliteMobs 版本 8。

**注意：EliteMobs 的任何版本都不支持 Minecraft 1.20.5 和 1.20.6 版本。**

# EliteMobs 是用来做什么的？

EliteMobs 旨在通过实现各种与 Boss 相关的内容来扩展 Minecraft 的后期游戏体验。

这意味着：
- 动态 Boss (分级怪物)
- 自定义 Boss
- 事件
- 竞技场
- 世界型地下城
- 副本型地下城
- 开放世界随机地下城 (集成 BetterStructures)
- 自定义物品 (精英物品/战利品)
- ... 以及更多！

该插件并非旨在取代原版 Minecraft 内容，而是对其进行补充，允许玩家在需要时选择退出 EliteMobs 内容。EliteMobs 物品通常不影响 PvP 或原版 Minecraft 战斗，因为它们的伤害和防御加成仅在与 EliteMobs 战斗时生效。

# EliteMobs 功能概览

在本节中，我们将介绍 EliteMobs 提供的一些**主要**功能，它们是什么以及如何禁用它们。有关完整功能列表，请参阅[此页面]($language$/elitemobs/feature_list.md&section=feature-list)。

您还可以查看[此页面]($language$/elitemobs/understanding_the_basics_of_elitemobs.md)，了解玩家应如何与 EliteMobs 互动。

## 动态 Boss

动态 Boss 是 EliteMobs 的主要功能之一。它将一部分原版 Minecraft 生成替换为精英怪物生成。

精英怪物是更强大的怪物，旨在挑战玩家并在被击败时奖励他们可能的战利品掉落。精英怪物的等级由玩家装备的盔甲和装备品质决定。原版 Minecraft 装备的等级由材料品质决定，如[此处]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels)所述。然而，随着玩家击败精英怪物并获得更好的战利品，他们最终将开始获得具有固定等级的精英物品，从而更容易预测将生成的精英怪物的等级。

这意味着玩家等级由他们穿戴的装备决定，而精英怪物等级由玩家等级决定。
EliteMobs 中没有经验系统，所有玩家等级提升都依赖于装备。

您可以通过修改 *MobCombatSettings.yml* 中的 `damageToEliteMobMultiplierV2` 和 `damageToPlayerMultiplierV2` 值来调整精英怪物的难度。有关更多信息，请参阅[此处]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml)。

如果您希望完全禁用此功能，可以将 `doNaturalEliteMobSpawning` 值设置为 `false`。

<div align="center">

<details>

<summary><b>视觉示例</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## 精英物品/战利品

EliteMobs 具有随机生成的物品，可以在商店中找到或由精英怪物掉落。还有通常在地下城和其他精英内容中找到的自定义物品。

精英物品就像原版物品一样，但它们通常配备额外的属性，并且比您在原版 Minecraft 中找到的任何物品都更强大。一些精英物品会带有称为**精英锋利度**和**精英防御**的属性，这些属性仅在玩家与精英怪物战斗时生效，不影响原版怪物。

精英物品还可以拥有附魔、[自定义附魔]($language$/elitemobs/custom_enchantments_list.md) 和药水效果。

您可以通过打开 *ItemSettings.yml* 并将 `doEliteMobsLoot` 值设置为 `false` 来禁用精英物品。（不推荐，这会使 MMORPG 等级 progression 变得不可能。）

<div align="center">

<details>

<summary><b>视觉示例</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## 事件

事件是 EliteMobs 中独特的遭遇，可以根据计时器或特定的玩家行为（例如挖掘方块或砍伐树木）随机触发。

这些遭遇战中会出现自定义的独特精英怪物，它们带来更大的挑战，并在被击败时提供宝贵的战利品。

当事件发生时，玩家会在聊天中收到通知，并可以选择通过可点击的链接跟踪精英怪物的生命值和位置。如果在一定时间内未能击败精英怪物，事件将结束，精英怪物将消失。

您可以通过打开 events.yml 并将 `actionEventsEnabled` 和 `timedEventsEnabled` 值设置为 `false` 来禁用所有事件。

如果您想禁用单个事件，可以前往 *~plugins\EliteMobs\customevents*。在那里您会找到每个事件的配置文件，您可以通过打开其配置文件并将 `isEnabled` 值设置为 `false` 来禁用任何事件。

<div align="center">

<details>

<summary><b>视觉示例</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## 冒险者公会

冒险者公会是一个您可以安装的额外中心世界，它也是玩家可以使用的一组命令。

如果未安装中心世界，玩家将不得不使用命令；否则，在安装中心世界的情况下运行命令会将玩家传送到中心世界，在那里他们可以与 NPC 互动，而无需输入命令。

哪些命令？EliteMobs 有几个玩家可以用来出售和购买物品、修理物品、附魔物品等的命令。在此处了解更多关于玩家可以使用哪些命令的信息：[此处]($language$/elitemobs/permissions_and_commands.md&section=npc-commands)。

有关冒险者公会以及如何安装中心世界的更多信息，请查看[此页面]($language$/elitemobs/adventurers_guild_world.md)。

您可以通过打开 *AdventurersGuild.yml* 并将 `guildHubIsEnabledv2` 设置为 `false` 来禁用中心世界。

<div align="center">

<details>

<summary><b>视觉示例</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## 公会等级/阶级

随着玩家的进步并获得更好的物品，他们最终会达到一个限制，怪物将停止掉落更高级别的物品，这被称为公会等级战利品限制器。

公会等级战利品限制器根据玩家的公会等级限制玩家可以获得的最高战利品，并对从 1 级到 10 级物品应用默认限制，以及相应的怪物等级。声望等级解锁更高的阶级，允许获得更高级的战利品和更强大的怪物，确保平衡的游戏体验。

该系统与灵魂绑定附魔相结合，减轻了代练问题，维护了服务器平衡，并培养了玩家对其获得的战利品的依恋。您可以在[此处]($language$/elitemobs/guild_tier_loot_limiter.md)阅读更多关于公会等级的信息。

公会等级的所有设置都可以调整，并且位于 *AdventurersGuild.yml* 中。

<div align="center">

<details>

<summary><b>视觉示例</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## 竞技场

竞技场是基于波次的挑战，玩家可以在其中进行战斗。一个或多个玩家可以加入竞技场，面对越来越困难的敌人波次，奖励随着挑战的进展而提高。

安装冒险者公会中心世界后，玩家可以通过与中心世界中的 NPC 互动或通过 */em* 菜单访问木材联盟竞技场，这是一个免费的竞技场。

您可以通过访问 [Itch.io](https://magmaguy.itch.io/) 或订阅 [Patreon](https://www.patreon.com/magmaguy) 来获取额外的竞技场。

您可以通过前往 *~plugins\EliteMobs\customarenas*，然后打开竞技场配置文件（例如 *wood_league.yml*），找到 `isEnabled` 值并将其设置为 `false` 来禁用竞技场。

<div align="center">

<details>

<summary><b>视觉示例</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## 世界型地下城

世界型地下城是您可以为 EliteMobs 下载的额外自定义内容。地下城通常有自定义精英 Boss、自定义世界、自定义战利品和自定义 Boss 能力。

所有世界型地下城都位于它们自己的世界中，这意味着当玩家进入时，他们会被传送到一个除了该地下城之外什么都没有的世界。

世界型地下城有几种类型，要了解更多类型，请点击[此处]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory)。

所有世界型地下城都有一个设定的等级，尝试地下城的任何玩家都应该在该等级附近以获得最佳体验。

您可以通过访问 [Itch.io](https://magmaguy.itch.io/) 或订阅 [Patreon](https://www.patreon.com/magmaguy) 来获取地下城。您可以从[此处](https://magmaguy.itch.io/em-free-content)下载几个免费地下城。

您可以通过前往 *~plugins\EliteMobs\content_packages*，打开您希望禁用的地下城的配置文件，并将 `isEnabled` 值设置为 `false` 来禁用单个地下城。

<div align="center">

<details>

<summary><b>视觉示例</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## 副本型地下城

副本型地下城与世界型地下城在几个方面有所不同。它们是副本化的，这意味着会根据蓝图动态创建一个新世界，为玩家及其朋友提供类似于 MMO 中的私人地下城体验。

副本型地下城提供各种难度，随着难度增加，Boss 能力独特，生命值更高，战利品更优越。它们还引入了角色，允许玩家根据其装备（特定角色装备仅限于副本型地下城）扮演坦克或 DPS 角色。在此处阅读更多关于难度如何运作的信息：[此处]($language$/elitemobs/instanced_dungeon_difficulty.md)。

此外，玩家可以在副本型地下城中互相复活，如果他们行动够快，可以迅速恢复战斗。

您可以通过访问 [Itch.io](https://magmaguy.itch.io/) 或订阅 [Patreon](https://www.patreon.com/magmaguy) 来获取副本型地下城。您可以从[此处](https://magmaguy.itch.io/em-free-content)下载免费的副本型地下城。

您可以通过前往 *~plugins\EliteMobs\dungeonpackages*，打开您希望禁用的地下城的配置文件，并将 `isEnabled` 值设置为 `false` 来禁用单个地下城。

<div align="center">

<details>

<summary><b>视觉示例</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## 冒险

冒险代表了 EliteMobs 最庞大的额外内容，拥有一个广阔的世界，包含引人入胜的故事情节和大量供玩家踏上的任务。

冒险拥有数百个自定义 Boss、能力和物品，提供沉浸式游戏体验。冒险中的任务功能类似于传统 MMO 中的任务，要求玩家完成击败怪物、寻找物品、与 NPC 互动或它们的任意组合等目标。

冒险非常庞大，甚至在其内部包含其他子地下城或子竞技场。

虽然冒险通常会为玩家推荐一个设定的等级范围，但建议玩家从等级范围的较低端开始他们的冒险，以获得最佳体验。

您可以通过访问 [Itch.io](https://magmaguy.itch.io/) 或订阅 [Patreon](https://www.patreon.com/magmaguy) 来获取冒险。

您可以通过前往 *~plugins\EliteMobs\dungeonpackages*，打开您希望禁用的冒险的配置文件，并将 `isEnabled` 值设置为 `false` 来禁用单个冒险。冒险可能包含额外的子地下城和子竞技场，因此如果您禁用某个冒险，请确保也禁用这些内容。

<div align="center">

<details>

<summary><b>视觉示例</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## 虫洞传送

EliteMobs 还提供简单的 A 到 B 传送器，称为虫洞。您会发现这些主要用于冒险者公会中心世界，作为将玩家从那里传送到地下城或返回服务器出生点的方式。

它们通常是由粒子组成的六边形、立方体或菱形。这些粒子有时可能导致基岩版客户端卡顿，因此您可能需要通过打开 *Wormholes.yml* 并将 `noParticlesMode` 设置为 `true` 来禁用粒子效果。

您可以创建自己的虫洞并随意使用它们。点击[此处]($language$/elitemobs/creating_wormholes.md)了解如何操作。

<div align="center">

<details>

<summary><b>视觉示例</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## 自定义内容

EliteMobs 还为您提供了创建自己内容的机会，包括[Boss]($language$/elitemobs/creating_bosses.md)、[地下城]($language$/elitemobs/dungeon_packager.md)、[能力]($language$/elitemobs/creating_powers.md)、[NPC]($language$/elitemobs/creating_npcs.md)、[任务]($language$/elitemobs/creating_quests.md)、[竞技场]($language$/elitemobs/creating_arenas.md)等等！您可以在 Wiki 的侧边栏菜单中找到创建除上述内容之外的其他类型内容的指南。

为了获得最简单高效的内容创建体验，我们推荐使用 WebApp。此工具使您能够生成即用型配置文件，而无需大量浏览 Wiki 来确保正确性，特别是如果您正在考虑创建 EliteScript Boss 能力。在此处访问 [WebApp](https://magmaguy.com/webapp/webapp.html)。

# 致管理员和服务器所有者

此插件专为生存和类似生存的服务器（例如空岛生存、空战生存和大量模组生存变体）设计。

该插件旨在通过简单地将插件 jar 文件拖放到服务器中即可轻松使用。默认设置是我自己在服务器上使用的设置，并且会随时间变化。

**然而！** 可定制性一直是 EliteMobs 开发过程中的首要任务。插件的几乎每个方面都可以翻译、自定义、禁用或修改。

# 致其他开发者

尽管本项目采用 GPLV3 许可并具有开源性质，但我目前既不寻求也不接受任何代码添加或更改。我欢迎对插件进行分支（fork），并且非常乐意看到您可能会用它们做什么；然而，这是我的第一个大型编程项目，因此也是一个学习经历。

**然而！** 不要认为我声称自己不受任何批评或不会听取反馈——恰恰相反，我喜欢人们指出我在插件中完成事情的更好方法。我希望这个项目是我从头到尾自己编写的，没有任何我不知道或不理解的代码片段。