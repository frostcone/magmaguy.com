
如果你有一个问题在这里没有列出，***请查看侧边栏***看看它是否在wiki中有专门的页面。

# 设置和安装FAQ

### 我如何设置自定义模型？

<details>
<summary>
信息
</summary>

处理“自定义模型”的有两种不同的插件。

- LibsDisguises（包括免费版本）允许你将怪物伪装成其他怪物或自定义玩家皮肤。如果你看到一个有玩家伪装的自定义Boss，它就是使用LibsDisguises进行伪装的。你需要下载LibsDisguises才能让这个特定功能工作。

- FreeMinecraftModels（和ModelEngine R3，尽管不再推荐使用ModelEngine）让你可以将怪物伪装成任何自定义模型，限制非常少。FreeMinecraftModels允许你免费做到这一点并且推荐使用。你必须使用FreeMinecraftModels或ModelEngine R3（不是R4）才能让自定义模型工作。FreeMinecraftModels可以和ModelEngine一起运行，所以你也可以同时运行两者。
  <br>如果你已经安装了FreeMinecraftModels/ModelEngine，但自定义模型还是无法使用，则可能是你在安装模型插件之前已经安装了内容。为了确保这不是问题，重新导入具有自定义伪装的EliteMobs内容并重新安装。

</details>

### 控制台 / EliteMobs说我使用的是错误的 WorldGuard / WorldEdit版本

<details>
<summary>
信息
</summary>

如果EliteMobs报告说 WorldGuard 或 WorldEdit 没有被安装，那是因为你正在为你的服务器平台使用错误的 WorldGuard / WorldEdit 版本。WorldGuard / WorldEdit 对你使用的版本非常敏感，并且对于服务器软件有不同的版本。
- 你可以从这里下载 Spigot / Paper 的 WorldEdit 版本：https://dev.bukkit.org/projects/worldedit - 确保它说它与你的 Minecraft 版本兼容！


- 你可以从这里下载 Spigot / Paper 的 WorldGuard 版本：https://dev.bukkit.org/projects/worldguard - 确保它说它与你的 Minecraft 版本兼容！

</details>

### 仅在安装后 Wormholes / 竞技场 / NPC 似乎并未正常工作

<details>
<summary>
信息
</summary>

如果 wormholes / 竞技场 / NPC 在安装内容后似乎并未正常工作，你应该运行 `/em reload`。在安装 EliteMobs 内容后运行它总是很好的。

</details>

### 杀死他们后，Dungeon Bosses 不再出现

<details>
<summary>
信息
</summary>

大多数情况下，这只是因为一些boss有长时间的重生时间。The Shadow of the Binder of Worlds具有最长的一周的重生时间。Lair bosses 通常有4个小时的重生时间。其他的都倾向于在5-30分钟内重生。你可以在 `~/plugins/EliteMobs/custombosses` 文件夹中的配置文件中编辑一个自定义 Boss 的重生时间。

</details>

### 安装后，Dungeon Bosses 从未出场

<details>
<summary>
信息
</summary>

这几乎肯定是由于第三方插件的干扰。检查以下情况：
- 你的世界处于和平难度吗？怪物不会在和平难度下生成


- 你的区域是否被保护，无法生成？EliteMobs dungeons 通过 WorldGuard 处理自己的区域保护，你不需要保护 EliteMobs dungeon worlds，实际上如果使用错误的标记，则可能会阻止生成。


- 还有其他插件阻止 EliteMobs bosses 生成或删除它们吗？这些冲突经常会在控制台中出现，所以检查你的控制台日志。

</details>

### 插件无法自动完成我刚安装的内容的命令

<details>
<summary>
信息
</summary>

命令中的自动建议由 CloudCommandFramework处理，并在**服务器重启后**只更新命令建议。对此，我无能为力。

</details>

### 我如何使用 EliteMobs 的翻译？

<details>
<summary>
信息
</summary>

你可以通过运行 `/em language <languagename>.yml`来更改 EliteMob 的语言。使用默认的插件翻译，由 EliteMobs 社区创建和管理。

要添加插件中没有的语言，或者自定义现有的语言，推荐你使用 `custom_language.yml`。

只有在你切换语言时，语言文件才会生成它们的内容！

如果你破坏了 yml 文件的格式，这是很容易在错误中做的，它将重置文件! ***确保你有你的翻译的本地备份，如果你正在手动翻译的内容!***

在社区翻译网站上翻译语言文件更容易，因为它会为你处理格式问题！它还会自动建议翻译。你可以在这里找到：https://crowdin.com/project/elitemobs

作为提醒，如果你正在翻译，如果你使用特殊字符，如 `&` ，来开始一个配置值，你必须将该值放在引号之间，比如 \"&cCool value\"！否则，文件将被破坏，并且会重置你的进度。你可以使用 linter 来检查 yml 文件的有效性 - 只需在这里粘贴你的 yml 内容：<https://www.yamllint.com/>

</details>

# EliteMobs 和 BetterStructures 兼容性FAQ

### 是否可以在 BetterStructure 中得到带有 EliteMobs boss 的结构？

<details>
<summary>
信息
</summary>

是的，BetterStructures 圣殿包就是这种类型的内容。你可以从 [itch.io](https://magmaguy.itch.io/) 下载圣殿包。

</details>

### 为什么洞中天主教堂被 WorldGuard 保护，我如何阻止这个

<details>
<summary>
信息
</summary>

EliteMobs的洞穴结构默认是被WorldGuard保护的，以确保玩家不在战斗区内建造装置来滥用Minecraft的战斗系统。

一旦boss被击败，保护将自动被删除。

每个洞都有入口点，玩家必须在地下找到这些入口点才能挖掘。

如果你不希望使用WorldGuard的保护，你可以在BetterStructures的config.yml配置文件中禁用它。

</details>

### 为什么洞穴在没有精英之前就开始产生？

<details>
<summary>
信息
</summary>

如果你在安装EliteMobs之前安装了BetterStructures的洞穴，就可能会出现这种情况。要解决这个问题，重新导入并重新安装洞穴到你的服务器**在**安装EliteMobs之后。

</details>

### 我可以在不使用EliteMobs的情况下使用洞穴吗？

<details>
<summary>
信息
</summary>

这些洞穴是专门为了在其中与boss进行战斗而制作的，但是如果你只是喜欢战斗竞技场的美学，你可以只运行洞穴包而不安装EliteMobs。

</details>

# EliteMobs 和 FreeMinecraftModels兼容性FAQ

### FreeMinecraftModels 是否兼容 EliteMobs?

<details>
<summary>
信息
</summary>

是的，FreeMinecraftModels插件正是围绕EliteMobs和EternalTD制作的。

</details>

### 我怎样安装 EliteMobs 的自定义模型？

<details>
<summary>
信息
</summary>

你可以从 https://www.patreon.com/magmaguy 和 https://magmaguy.itch.io/ 下载EliteMobs的自定义模型。一旦你安装它们，**你将不得不将由FreeMinecraftModels在其输出文件夹中生成的资源包与EliteMobs的官方资源包合并**，如果你想要使用官方资源包并通过在线托管将其分发给玩家。

</details>

### 我如何安装 EliteMobs 的自定义模型？

<details>
<summary>
信息
</summary>

你可以从 https://www.patreon.com/magmaguy 和 https://magmaguy.itch.io/ 下载EliteMobs的自定义模型。一旦你安装它们，你需要**将由FreeMinecraftModels在其输出文件夹中生成的资源包与来自EliteMobs的官方资源包合并**如果你想要使用官方资源包，并且将它通过在线托管分发给玩家。

</details>

# EliteMobs and ResurrectionChest 兼容性FAQ

### EliteMobs 是否与 ResurrectionChest 兼容？

<details>
<summary>
信息
</summary>

是，ResurrectionChest 就是专为EliteMobs内容制作的，完全兼容。

</details>

# 与其他插件的兼容性FAQ

### 我可以与 MCMMO 或 AureliumSkills 这样的插件一起使用 EliteMobs 吗？

<details>
<summary>
信息
</summary>

是的，尽管如此，你可能想要禁用 EliteMobs 声望系统中的额外健康奖励。

</details>

### 我可以用另一款自定义物品插件和 EliteMobs 一起使用吗？

<details>
<summary>
信息
</summary>

是的。 如 果 您 想 要 该 插 件 的 bosses 偷 夺 特 定 项 目 ， 您 可 以 设置 死 亡 命 令 来 运 行 并 以 这 种 方 式 将 项 目 给 玩 家。 但 是 ， 您 无 法 真 正 平 衡 您 正 在 使 用 的 项 目 系 统 和 EliteMobs。 精 英 点 从 具 有 7 个 健 康 点 到 数 十 万 个 健 康 点 ， 因 此 ， 其 他 项 目 插 件 无 论 是 过 度 功 能 强 大 还 是 功 能 不 强 ， 都 没 有 所 说 的 。 EliteMobs 已 经 内 建 了 一 个 项 目 系 统 ， 不 需 要 任 何 外 部 项 目 插 件。

</details>

# 其他FAQ

### 在 Elite Mob 死亡时运行命令或在 Elite Mob 死亡时从其他插件中获取战利品/奖励？

[这里提供信息。]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Vault 的支持？

[这里提供信息。]($language$/elitemobs/vault.md)

### PlaceholderAPI 占位符？

[这里提供信息。]($language$/elitemobs/placeholders.md)

### 使用 WorldGuard 标记在某些地方允许 EliteMobs，但在其他地方不允许？

[这里提供信息。]($language$/elitemobs/worldguard_flags.md)

### 我可以使100％生成的怪物都是精英怪物吗？

这是个糟糕的主意，但是，你可以访问 `MobCombatSettings.yml` 配置文件
编辑 `eliteMobsSpawnPercentage` 设置精英怪物的生成百分比。

### 我可以制作自定义力量吗？

[这里提供信息。]($language$/elitemobs/creating_powers.md)

### 我可以创建自定义的附魔吗？

这个功能在我们的待办事项列表中并应该很快实现，但是目前无法实现。

### 我可以创建自定义药水效果吗？

做这个的唯一方法就是学习 Java然后自己编写它们。在那个点上，你可能已经修改了
EliteMobs 的源代码。

### 我如何关闭虫洞粒子？

要关闭虫洞粒子，导航到 *~plugins\EliteMobs\Wormholes.yml*, 然后定位 `noParticlesMode` 并更改值为 `false`.

### 我如何编辑在 AG 出生地的虫洞以将玩家传送去我想去的地方？

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

你可以通过打开 *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml* 来做到这一点。

然后找到以下设置
`location2: your_world_here,0.5,64,0.5,0,0`
并将值改为你想要的位置。

### 我要如何解绑物品？

去掉物品上的soulbound的唯一方法就是使用Unbind Scrolls。在
[这里]($language$/elitemobs/soulbind.md)了解更多。

### 我如何禁用 Super Mobs？

Super Mobs 是农场动物，当同一种动物近距离在一起有50只时，它们会堆叠成一种动物。如果你想禁用这个功能，你
可以去 *~plugins\EliteMobs\mobproperties* 然后进入任何文件名前缀 *super_* (例如: *super_pig.yml*) 并把 `isEnabled` 切换到 `false。

### 我如何合并资源包？

可以手动合并资源包，但我们推荐使用一个在线工具，如 [merge.elmakers](https://merge.elmakers.com/) 来合并你的资源包。

### 什么是 EliteMobs 命令占位符？

| 占位符 |          详细信息           |
| --- |:--------------------------:|
| `$player` | 玩家显示的名字 |
| `$bossName` |  boss显示的名字  |
| `$bossLevel` |     boss的级别      |

### 我该怎么做才能关闭强制资源包？

这个设置实际上位于你的 `server.properties` 文件中。你通常可以在服务器的根目录中找到这个文件。打开文件后，找到 `require-resource-pack` 设置，将其值更改为 `false` 即可关闭强制资源包。

### 我该如何关闭事件？

如果你想关闭诸如武器地精、魅力地精等事件。然后可以打开 *~plugins\EliteMobs\events.yml* 找到 `actionEventsEnabled`, `timedEventsEnabled` 设置，并设置它们为 `false`。


