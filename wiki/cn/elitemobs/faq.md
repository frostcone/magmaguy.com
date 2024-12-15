如果您有此处未列出的问题，请***查看侧边栏***，以查看 wiki 中是否有专门介绍它的页面！

# 设置和安装常见问题解答

### 如何设置自定义模型？

<details>
<summary>
信息
</summary>

有两个不同的插件可以处理“自定义模型”。

- LibsDisguises（包括免费版）允许您将生物伪装成其他生物或自定义玩家皮肤。如果您看到自定义首领上带有玩家伪装，则它正在使用 LibsDisguises 进行伪装。您必须下载 LibsDisguises 才能使此特定功能正常工作。

- FreeMinecraftModels（和 ModelEngine R3，尽管不再推荐使用 ModelEngine）允许您将生物伪装成任何自定义模型，且限制非常少。FreeMinecraftModels 允许您免费执行此操作，并且建议使用。您必须使用 FreeMinecraftModels 或 ModelEngine R3（而不是 R4）才能使自定义模型工作。FreeMinecraftModels 可以与 ModelEngine 一起运行，因此您也可以同时运行两者。
<br>如果您已安装 FreeMinecraftModels/ModelEngine，并且自定义模型仍然无法正常工作，则您可能在安装模型插件之前安装了内容。为确保这不是问题，请使用自定义伪装重新导入 EliteMobs 内容并再次安装。

</details>

### 控制台/EliteMobs 说我使用的 WorldGuard 版本不正确

<details>
<summary>
信息
</summary>

如果 EliteMobs 报告 WorldGuard 未安装，那是因为您使用的 WorldGuard 版本不适用于您的服务器平台。WorldGuard 对您使用的版本非常敏感，并且为服务器软件提供了不同的版本。

- 您可以在此处下载 Spigot/Paper 的 WorldGuard 版本：https://dev.bukkit.org/projects/worldguard - 确保它表明它与您的 Minecraft 版本兼容！

</details>

### 在安装后，虫洞/竞技场/NPC 似乎无法立即正常工作

<details>
<summary>
信息
</summary>

如果虫洞/竞技场/NPC 在安装内容后似乎无法立即正常工作，您应该运行 `/em reload`。在安装 EliteMobs 内容后运行它始终是一个好习惯。

</details>

### 地牢首领在被杀死后没有重新出现

<details>
<summary>
信息
</summary>

大多数情况下，这只是因为某些首领的重生时间较长。世界结合者的阴影的实际重生时间为 1 周。巢穴首领通常具有 4 小时的重生计时器。其他所有内容往往都有 5-30 分钟的重生计时器。您可以在 `~/plugins/EliteMobs/custombosses` 文件夹中的其配置文件中编辑自定义首领的重生计时器。

</details>

### 安装后地牢首领从未出现

<details>
<summary>
信息
</summary>

这几乎可以肯定是由于第三方插件的干扰。检查以下内容：
- 您的世界是否处于和平难度？生物不会在和平难度下生成

- 您的区域是否受到保护以防止生成？EliteMobs 地牢通过 WorldGuard 处理它们自己的区域保护，您无需保护 EliteMobs 地牢世界，实际上如果使用错误的标志，则这样做可能会阻止生成。

- 是否有其他插件阻止 EliteMobs 首领生成或移除它们？这些冲突通常会显示在控制台中，因此请检查您的控制台日志。

</details>

### 该插件没有自动完成我刚安装的内容的命令

<details>
<summary>
信息
</summary>

命令中的自动建议由 CloudCommandFramework 处理，并且仅在**服务器重新启动后**才更新命令建议。不幸的是，对此我无能为力。

</details>

### 如何使用 EliteMobs 翻译？

<details>
<summary>
信息
</summary>

您可以通过运行 `/em language <languagename>.yml` 来更改 EliteMob 的语言。以使用由 EliteMobs 社区创建和管理的默认插件翻译

要添加插件中没有的语言或自定义现有语言，建议您使用 `custom_language.yml`。

语言文件仅在您切换语言时生成其内容！

如果您破坏了 yml 文件的格式（这很容易出错），它将重置文件！***如果您要手动翻译内容，请确保保留翻译的本地备份！***

在社区翻译网站中翻译语言文件更容易，因为它可以为您处理格式！它还会自动建议翻译。您可以在此处找到：https://crowdin.com/project/elitemobs

提醒一下，如果您正在翻译，如果您使用特殊字符（例如 `&`）开始配置值，则必须将该值放在引号之间，例如 \"&cCool value\"！否则，文件将损坏，并且它将重置您的进度。您可以使用 linter 来检查 yml 文件的有效性 - 只需在此处粘贴您的 yml 内容：<https://www.yamllint.com/>

</details>

# EliteMobs 和 BetterStructures 兼容性常见问题解答

### 我可以在 BetterStructure 中获得带有 EliteMobs 首领的结构吗？

<details>
<summary>
信息
</summary>

是的，BetterStructures 圣地包正是这种内容。您可以从 [itch.io](https://magmaguy.itch.io/) 下载圣地包。

</details>

### 为什么圣地受 WorldGuard 保护，以及如何防止这种情况

<details>
<summary>
信息
</summary>

默认情况下，EliteMobs 圣地结构受 WorldGuard 保护，以确保玩家不会在战斗区域内建造用来滥用 Minecraft 战斗系统的装置。

一旦首领被击败，保护就会自动被删除。

每个圣地都有玩家必须挖掘周围才能找到的入口（如果它们在地下）。

如果您不想使用 WorldGuard 保护，您可以在 BetterStructures config.yml 配置文件中禁用它。

</details>

### 为什么圣地生成时没有精英？

<details>
<summary>
信息
</summary>

如果您在安装 EliteMobs 之前安装了 BetterStructures 圣地，则可能会发生这种情况。要解决此问题，请在安装 EliteMobs **后**重新导入并将圣地重新安装到您的服务器中。

</details>

### 我可以在不使用 EliteMobs 的情况下使用圣地吗

<details>
<summary>
信息
</summary>

这些圣地是专门为与其中的首领战斗而制作的，但如果您只想要美观的战斗竞技场，则可以在未安装 EliteMobs 的情况下运行圣地包。

</details>

# EliteMobs 和 FreeMinecraftModels 兼容性常见问题解答

### FreeMinecraftModels 是否与 EliteMobs 兼容？

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

您可以从 https://www.patreon.com/magmaguy 和 https://magmaguy.itch.io/ 下载 EliteMobs 的自定义模型。安装完成后，如果您想使用官方资源包并通过在网上托管资源包将其分发给玩家，则**必须将** FreeMinecraftModels 在其输出文件夹中生成的资源包与 EliteMobs 的官方资源包**合并**。

</details>

### 如何安装 EliteMobs 自定义模型？

<details>
<summary>
信息
</summary>

您可以从 https://www.patreon.com/magmaguy 和 https://magmaguy.itch.io/ 下载 EliteMobs 的自定义模型。安装完成后，如果您想使用官方资源包并通过在网上托管资源包将其分发给玩家，则**必须将** FreeMinecraftModels 在其输出文件夹中生成的资源包与 EliteMobs 的官方资源包**合并**。

</details>

# EliteMobs 和 ResurrectionChest 兼容性常见问题解答

### EliteMobs 是否与 ResurrectionChest 配合使用？

<details>
<summary>
信息
</summary>

是的。ResurrectionChest 专门为 EliteMobs 内容制作，并且完全兼容。

</details>

# 与其他插件的兼容性常见问题解答

### 我可以将 EliteMobs 与类似于 MCMMO 或 AureliumSkills 的插件一起使用吗

<details>
<summary>
信息
</summary>

是的。话虽如此，您可能需要禁用 EliteMobs 声望系统中的额外生命值。

</details>

### 我可以将 EliteMobs 与另一个自定义物品插件一起使用吗

<details>
<summary>
信息
</summary>

是的。如果您希望首领掉落该插件中的特定物品，您可以在死亡时设置要运行的命令，然后以这种方式向玩家提供物品。但是，没有真正的方法可以使用您正在使用的任何物品系统来平衡 EliteMobs。精英的生命值从 7 点到数十万点不等，因此其他物品插件要么会非常强大，要么会非常弱。EliteMobs 已经内置了一个物品系统，不需要任何外部物品插件。

</details>

# 其他常见问题解答

### 在精英生物死亡时运行命令或在精英生物死亡时给予其他插件的战利品/奖励？

[可在此处获得信息。]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Vault 支持？

[可在此处获得信息。]($language$/elitemobs/vault.md)

### PlaceholderAPI 占位符？

[可在此处获得信息。]($language$/elitemobs/placeholders.md)

### 使用 WorldGuard 标志允许 EliteMobs 在某些位置而非其他位置？

[可在此处获得信息。]($language$/elitemobs/worldguard_flags.md)

### 我可以将生成的 100% 的生物设为精英生物吗？

这是一个糟糕的主意，但是，您可以访问 `MobCombatSettings.yml` 配置文件并编辑 `eliteMobsSpawnPercentage` 来设置精英生物的生成百分比。

### 我可以创建自定义能力吗？

[可在此处获得信息。]($language$/elitemobs/creating_powers.md)

### 我可以创建自定义附魔吗？

这在我们的待办事项列表中，应该很快就会推出，但目前尚不可能。

### 我可以创建自定义药水效果吗？

唯一的方法是学习 Java 并自己编写它们。那时，您不妨修改 EliteMobs 源代码。

### 如何关闭虫洞粒子？

要关闭虫洞粒子，请导航到 *~plugins\EliteMobs\Wormholes.yml*，然后找到 `noParticlesMode` 并将该值更改为 `false`。

### 如何编辑 AG 生成中的虫洞以将玩家传送到我想要的位置？

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

您可以通过打开 *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml* 来做到这一点。

然后找到以下设置
`location2: your_world_here,0.5,64,0.5,0,0`
并将值更改为您喜欢的位置。

请记住执行 `/em reload` 以使更改生效。

### 如何解绑物品？

从物品中移除灵魂绑定的唯一方法是使用解绑卷轴。阅读有关此内容的更多信息[此处]($language$/elitemobs/soulbind.md)。

### 如何合并资源包？

可以手动合并资源包，但我们建议使用在线工具（例如 [merge.elmakers](https://merge.elmakers.com/)）来合并您的资源包。

### EliteMobs 命令占位符有哪些？

| 占位符 |          详细信息           |
| --- |:--------------------------:|
| `$player` | 玩家的显示名称 |
| `$bossName` |  首领的显示名称  |
| `$bossLevel` |     首领的等级      |

### 我该怎么做才能关闭强制资源包？

此设置实际上位于您的 `server.properties` 文件中。您通常可以在您的服务器根目录中找到此文件。打开该文件后，找到 `require-resource-pack` 设置并将该值更改为 `false` 以关闭强制资源包。

### 如何关闭事件？

如果您想关闭武器地精、护符地精等事件，则可以打开 *~plugins\EliteMobs\events.yml*，然后找到设置 `actionEventsEnabled`、`timedEventsEnabled` 并将它们设置为 `false`。

### 如何编辑地牢世界或冒险者公会世界？

从 EliteMobs 9 开始，EliteMobs 不再依赖 WorldGuard 来进行地牢和内容保护。要临时绕过此保护，请使用命令 `/em protection bypass`。

如果您想永久禁用特定地牢的保护，请按照以下步骤操作：

1. 导航到 *plugins/EliteMobs/content_packages/*。
2. 找到您要修改的地牢的 *dungeon_config.yml* 文件。
3. 打开配置文件并找到 `protect:` 设置。
4. 将值更改为 `false` 以禁用保护。
