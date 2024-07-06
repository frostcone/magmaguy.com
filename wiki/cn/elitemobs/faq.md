如果您有此处未列出的问题，***请查看侧边栏***，看看维基中是否有专门介绍它的页面！

# 设置和安装常见问题解答

### 如何设置自定义模型？

<details>
<summary>
信息
</summary>

有两个不同的插件可以处理“自定义模型”。

- LibsDisguises（包括免费版）允许您将怪物伪装成其他怪物或自定义玩家皮肤。如果您看到一个自定义 Boss 上有玩家伪装，则它使用 LibsDisguises 进行伪装。您必须下载 LibsDisguises 才能使此特定功能正常工作。


- FreeMinecraftModels（和 ModelEngine R3，尽管不再推荐 ModelEngine）允许您将怪物伪装成任何自定义模型，几乎没有任何限制。FreeMinecraftModels 允许您免费执行此操作，并且是推荐的插件。您必须使用 FreeMinecraftModels 或 ModelEngine R3（不是 R4）才能使自定义模型正常工作。FreeMinecraftModels 可以与 ModelEngine 一起运行，因此您也可以同时运行两者。
<br>如果您已经安装了 FreeMinecraftModels/ModelEngine，但自定义模型仍然无法正常工作，则可能是您在安装模型插件之前安装了内容。为确保这不是问题，请在安装了自定义伪装后重新导入 EliteMobs 内容并再次安装。

</details>

### 控制台/EliteMobs 说我使用的 WorldGuard 版本错误

<details>
<summary>
信息
</summary>

如果 EliteMobs 报告 WorldGuard 未安装，那是因为您为服务器平台使用了错误的 WorldGuard 版本。WorldGuard 对您使用的版本非常敏感，并且对于服务器软件有不同的版本。

- 您可以从此处下载适用于 Spigot/Paper 的 WorldGuard 版本：https://dev.bukkit.org/projects/worldguard - 确保它显示与您的 Minecraft 版本兼容！

</details>

### 安装内容后，虫洞/竞技场/NPC 似乎无法立即正常工作

<details>
<summary>
信息
</summary>

如果在安装内容后虫洞/竞技场/NPC 似乎无法立即正常工作，您应该运行 `/em reload`。在安装 EliteMobs 内容后运行它始终是一个好习惯。

</details>

### 地下城 Boss 在被杀死后没有重新出现

<details>
<summary>
信息
</summary>

大多数情况下，这仅仅是因为某些 Boss 的重生时间很长。世界束缚者的阴影的重生时间最长，为现实生活中的一周。巢穴 Boss 通常的重生时间为 4 小时。其他所有东西的重生时间通常为 5-30 分钟。您可以在 `~/plugins/EliteMobs/custombosses` 文件夹中的配置文件中编辑自定义 Boss 的重生时间。

</details>

### 安装后，地下城 Boss 从未出现过

<details>
<summary>
信息
</summary>

这几乎可以肯定是由于第三方插件的干扰。检查以下内容：
- 您的世界是否处于和平难度？怪物不会在和平难度下生成。


- 您的区域是否受到防止生成的保护？EliteMobs 地下城通过 WorldGuard 处理其自身的区域保护，您无需保护 EliteMobs 地下城世界，实际上这样做可能会在使用错误的标志时阻止生成。


- 是否有其他插件阻止 EliteMobs Boss 生成或移除它们？这些冲突通常会显示在控制台中，因此请检查您的控制台日志。

</details>

### 该插件不会自动完成我刚刚安装的内容的命令

<details>
<summary>
信息
</summary>

命令中的自动建议由 CloudCommandFramework 处理，并且仅在**服务器重新启动后**更新命令建议。不幸的是，我对此无能为力。

</details>

### 如何使用 EliteMobs 翻译？

<details>
<summary>
信息
</summary>

您可以通过运行 `/em language <语言名称>.yml` 来更改 EliteMob 的语言。使用由 EliteMobs 社区创建和管理的默认插件翻译。

要添加插件中没有的语言，或自定义现有语言，建议您使用 `custom_language.yml`。

语言文件仅在您切换语言时才会生成其内容！

如果您破坏了 yml 文件的格式（这很容易出错），它将重置文件！***如果您要手动翻译内容，请确保保留本地翻译备份！***

在社区翻译网站上翻译语言文件更容易，因为它会为您处理格式！它还会自动建议翻译。您可以在这里找到它：https://crowdin.com/project/elitemobs

提醒一下，如果您正在翻译，如果您使用特殊字符（例如 `&`）来启动配置值，则必须将该值放在引号之间，例如““&c酷值””！否则，文件将被破坏，并且会重置您的进度。您可以使用 linter 检查 yml 文件的有效性 - 只需将您的 yml 内容粘贴到此处：<https://www.yamllint.com/>

</details>

# EliteMobs 和 BetterStructures 兼容性常见问题解答

### 我可以在 BetterStructure 中获得带有 EliteMobs Boss 的结构吗？

<details>
<summary>
信息
</summary>

是的，BetterStructures 神殿包正是这种内容。您可以从 [itch.io](https://magmaguy.itch.io/) 下载神殿包。

</details>

### 为什么神殿默认情况下受 WorldGuard 保护，我如何阻止这种情况

<details>
<summary>
信息
</summary>

默认情况下，EliteMobs 神殿结构受 WorldGuard 保护，以确保玩家不会在战斗区域内建造装置来滥用 Minecraft 战斗系统。

一旦 Boss 被击败，保护就会自动删除。

每个神殿都有入口点，如果玩家在地下，则必须四处挖掘才能找到它们。

如果您不想使用 WorldGuard 保护，可以在 BetterStructures config.yml 配置文件中禁用它。

</details>

### 为什么神殿在生成时没有精英？

<details>
<summary>
信息
</summary>

如果您在安装 EliteMobs 之前安装 BetterStructures 神殿，则可能会发生这种情况。要解决此问题，请在安装 EliteMobs **之后**重新导入并将神殿重新安装到您的服务器中。

</details>

### 我可以在不使用 EliteMobs 的情况下使用神殿吗？

<details>
<summary>
信息
</summary>

神殿是专门为对抗其中的 Boss 而制作的，但如果您只是为了美观而想要战斗竞技场，您可以在没有安装 EliteMobs 的情况下运行神殿包。

</details>

# EliteMobs 和 FreeMinecraftModels 兼容性常见问题解答

### FreeMinecraftModels 与 EliteMobs 兼容吗？

<details>
<summary>
信息
</summary>

是的。FreeMinecraftModels 插件是专门围绕 EliteMobs 和 EternalTD 制作的。

</details>

### 如何安装 EliteMobs 自定义模型？

<details>
<summary>
信息
</summary>

您可以从 https://www.patreon.com/magmaguy 和 https://magmaguy.itch.io/ 下载 EliteMobs 的自定义模型。安装它们后，**您必须将** FreeMinecraftModels 在其输出文件夹中生成的资源包**与 EliteMobs 的官方资源包合并**，如果您想使用官方资源包并将其在线托管以分发给玩家。

</details>

### 如何安装 EliteMobs 自定义模型？

<details>
<summary>
信息
</summary>

您可以从 https://www.patreon.com/magmaguy 和 https://magmaguy.itch.io/ 下载 EliteMobs 的自定义模型。安装它们后，**您必须将** FreeMinecraftModels 在其输出文件夹中生成的资源包**与 EliteMobs 的官方资源包合并**，如果您想使用官方资源包并将其在线托管以分发给玩家。

</details>


# EliteMobs 和 ResurrectionChest 兼容性常见问题解答

### EliteMobs 可以与 ResurrectionChest 一起使用吗？

<details>
<summary>
信息
</summary>

是的。ResurrectionChest 是专门为 EliteMobs 内容制作的，并且完全兼容。

</details>

# 与其他插件的兼容性常见问题解答

### 我可以将 EliteMobs 与类似于 MCMMO 或 AureliumSkills 的插件一起使用吗？

<details>
<summary>
信息
</summary>

是的。话虽如此，您可能需要禁用 EliteMobs 声望系统的奖励生命值。

</details>

### 我可以将 EliteMobs 与另一个自定义物品插件一起使用吗？

<details>
<summary>
信息
</summary>

是的。如果您希望 Boss 掉落该插件中的特定物品，您可以设置死亡时运行的命令，并以这种方式给予玩家物品。但是，没有真正的方法可以平衡 EliteMobs 与您正在使用的任何物品系统。精英的生命值从 7 点增加到数十万点，因此其他物品插件要么过于强大，要么极其弱小。EliteMobs 已经内置了一个物品系统，不需要任何外部物品插件。

</details>

# 其他常见问题解答

### 在精英怪物死亡时运行命令或在精英怪物死亡时给予来自其他插件的战利品/奖励？

[信息可在此处获取。]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### 支持 Vault 吗？

[信息可在此处获取。]($language$/elitemobs/vault.md)

### PlaceholderAPI 占位符？

[信息可在此处获取。]($language$/elitemobs/placeholders.md)

### 使用 WorldGuard 标志在某些地方允许 EliteMobs，而在其他地方不允许？

[信息可在此处获取。]($language$/elitemobs/worldguard_flags.md)

### 我可以让 100% 生成的怪物都是精英怪物吗？

这是一个糟糕的主意，但是，您可以访问 `MobCombatSettings.yml` 配置文件，
并将 `eliteMobsSpawnPercentage` 编辑为 Elite 怪物生成百分比。

### 我可以创建自定义力量吗？

[信息可在此处获取。]($language$/elitemobs/creating_powers.md)

### 我可以创建自定义附魔吗？

这在我们的待办事项列表中，应该很快就会推出，但目前还不可能。

### 我可以创建自定义药水效果吗？

唯一的方法是学习 Java 并自己编写它们。在那一点上，您不妨修改
EliteMobs 源代码。

### 如何关闭虫洞粒子？

要关闭虫洞粒子，请导航到 *~plugins\EliteMobs\Wormholes.yml*，然后找到 `noParticlesMode` 并
将值更改为 `false`。

### 如何编辑 AG 生成中的虫洞以将玩家传送到我想要的位置？

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

您可以通过打开 *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml* 来实现。

然后找到以下设置
`location2: your_world_here,0.5,64,0.5,0,0`
并将值更改为您的首选位置。

### 如何解绑物品？

从物品中移除灵魂绑定的唯一方法是使用解绑卷轴。[此处]($language$/elitemobs/soulbind.md) 了解更多信息。

### 如何合并资源包？

可以手动合并资源包，但我们建议使用在线工具（例如 [merge.elmakers](https://merge.elmakers.com/)）来合并您的资源包。

### EliteMobs 命令占位符是什么？

| 占位符     | 详细信息                   |
|------------|:----------------------------:|
| `$player`   | 玩家的显示名称。          |
| `$bossName` | Boss 的显示名称。           |
| `$bossLevel` | Boss 的等级。             |

### 如何关闭强制资源包？

此设置实际上位于您的 `server.properties` 文件中。您通常可以在服务器的根目录中找到此文件。打开文件后，找到 `require-resource-pack` 设置并将值更改为 `false` 以关闭强制资源包。

### 如何关闭事件？

如果您想关闭武器哥布林、饰品哥布林等事件，您可以打开 *~plugins\EliteMobs\events.yml*，然后找到设置 `actionEventsEnabled`、`timedEventsEnabled` 并将它们设置为 `false`。



