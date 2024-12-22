自 EliteMobs 7.3.12
版本起，通过 [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/)
和 [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/)，EliteMobs 添加了自定义模型。

# 前言

从 EliteMobs 的角度来看，自定义模型系统非常简单，因为管理员唯一需要做的就是在 NPC 或自定义 Boss
的配置文件中添加一行，告知它要使用哪个自定义模型。然而，为了使这个系统完全正常运行，有必要在 Model Engine 和 Minecraft
中采取正确的步骤，而这些步骤并不那么容易上手。

本指南将详细介绍与 Model Engine 和 Minecraft 的交互。它不会告诉你如何使用 Blockbench 创建自定义 Boss，也不会详细介绍 Model
Engine 的工作原理。关于如何执行这些操作的指南已经有很多了，如果你想了解更多关于这些系统的信息，最好直接查看它们的文档。

## FreeMineCraft 模型

如果你想了解如何使用 FMM 使你的模型工作，你可以查看 [此]($language$/freeminecraftmodels/info.md) wiki 页面了解更多。

# 最低要求

EliteMobs 7.3.12 或更高版本，Model Engine R2.2.0\* 或更高版本，Blockbench\*\*, 以及使用 Minecraft 资源包。

\* 此插件可能还有其他依赖项。请查看他们端的文档。
\*\* 创建和编辑自定义模型所必需。如果你只是想安装内容而不修改它，则不需要。

# 手动设置自定义模型

注意：本指南假设你已经有一个有效的自定义模型。这些模型以 Blockbench 文件格式（`.bbmodel`）提供。

EliteMobs 能够将自定义模型用于 NPC 和自定义 Boss。两者执行此操作的过程是相同的，如下所示：

## 步骤 1. 设置 EliteMobs 配置

转到你要修改的自定义 Boss 或 NPC 的配置文件，并添加以下行：

```yaml
customModel: 模型名称
```

将 `模型名称` 替换为你的模型的名称。该名称是你正在使用的自定义模型文件的名称。例如，测试 Boss
的自定义模型文件是 `showcase_boss.bbmodel`。因此，配置选项应为

```yaml
customModel: showcase_boss
```

对于 EliteMobs 来说就这些了！现在它变得有点棘手了。

## 步骤 2. 生成 Model Engine 数据

[_注意：如有疑问或问题，请参阅此处的 Model Engine
wiki。_](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1. 将你的自定义模型 Blockbench 文件 (`.bbmodel`) 放入目录 `(你的服务器)/plugins/ModelEngine/blueprints` 中。
2. 运行命令 `/meg reload`。如果一切正常，你应该收到一条消息，显示 `[Model Engine] 加载了 X 个模型`，其中 `x` 是你已注册的模型数量。

## 步骤 3. 生成资源包

[**注意：现在有一种替代的、更简单的方法可以在此链接上执行此步骤。
**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) 然而，它比这里列出的方法灵活度稍低。

如果你想让你的服务器管理下载，这可能是最棘手的部分。**在考虑自动分发之前，请先检查当你客户端上的资源包正常时，系统是否工作！
**

1. 转到目录 `(你的服务器)/plugins/ModelEngine/resource pack` 并使用该数据创建资源包，或者将 `assets`
   文件夹添加到你的资源包的 `assets` 中。
    1. 如果你正在创建一个新的资源包，你可以将 `resource pack`
       中的文件放入一个压缩文件中，这将是一个有效的你可以分发的资源包。[更多信息](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
    2.
    如果你已经有一个资源包，请确保你不会意外覆盖现有模型。[更多信息](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
2. 将你的资源包分发给你的玩家。**只有拥有资源包的玩家才能看到自定义模型**
   ，并且对于其他所有人来说，它看起来会非常奇怪和破碎。如果你打算大量使用它们，你可能需要强制使用资源包。
    1. (可选) 要允许玩家在登录时下载资源包，你需要在某个在线位置托管该文件，并将 server.properties 的 `resource-pack=`
       字段更改为指向该地址。\*\*\*
    2. (可选) 如果你正在修改资源包，你将需要使用 `resource-pack-sha1=`
       选项，以便服务器可以检查玩家的资源包是否需要更新。要生成此值，请将你的资源包上传到 [http://onlinemd5.com/](http://onlinemd5.com/)
       ，并确保你选择 SHA1 选项。每次更新资源包时，你都必须执行此操作，否则你的用户将不会获得更新。\*\*\*
    3. (可选) 要强制玩家使用资源包，请在 server.properties 中使用选项 `require-resource-pack=true`。\*\*\*

**如果你修改了 server.properties，则需要重新启动！**

\*\*\* 注意：如果这些说明没有帮助你，网上有很多指南可以帮助你使其正常工作。

### 合并资源包

如果你需要合并你的资源包，你可以手动执行此操作。但我们建议使用在线工具，如 [merge.elmakers](https://merge.elmakers.com/)
来合并你的资源包。

## 步骤 4. 希望它能工作

假设一切都正确完成，你现在应该能够在你的 Boss 或 NPC 上看到自定义模型。你可以通过以下命令生成它们：

* 自定义 Boss：`/em spawncustom 文件名.yml`
* NPC：`/em spawnnpc 文件名.yml`

然后你可以通过命令 `/em remove` 将它们移除。

# 为 EliteMobs 创建和调整自定义模型

EliteMobs 能够使用 Model Engine 认为有效的任何模型，这意味着它没有什么不能完成的。

然而，当涉及到动画时，需要使用特定名称的动画来保证 Boss 可以使用这些动画。

这些动画名称是在 Blockbench 的动画选项卡中设置的名称。你可以随时重命名它们，这意味着你可以改装任何现有模型以与 EliteMobs
一起工作。

## 动画

请注意，由于此系统仍是新推出的，因此此部分仍在扩展。随着功能请求的不断涌入，将添加更多内容。

### idle

`idle` 是实体不在战斗且不移动时的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认空闲动画系统。

### walk

`walk` 是实体正在移动时的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认空闲动画系统。

### attack

有三种类型的攻击动画：

#### attack

`attack` 是 Boss 攻击时的正确通用动画名称。

#### attack_melee

`attack_melee` 是自定义 Boss 使用原版 Minecraft 近战攻击攻击实体时所做的攻击的正确动画名称。覆盖 `attack`。请注意，动画会在造成伤害
**后**播放。不幸的是，这目前是一个限制。因此，请尝试使动画非常快。

#### attack_ranged

`attack_ranged` 是自定义 Boss 生成投射实体时所做的攻击的正确动画名称。覆盖 `attack`。请注意，动画会在投射物发射**后**
播放。不幸的是，这目前是一个限制。因此，请尝试使动画非常快。

### damaged

`damaged` 是自定义 Boss 在受到伤害时播放的受伤动画的正确动画名称。

### death

`death` 是死亡动画的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认空闲动画系统。

### powers

注意：此部分仍在开发中。以下是计划中的功能。

EliteMobs 中的每个能力都可以分配一个动画。动画始终在能力被触发时开始，并且在整个能力使用过程中目前不提供其他触发器。一些能力，如无敌，不会做任何事情，因为它们没有触发器，只是
Boss 的被动属性。

为了将动画分配给能力，动画的名称必须与 elitemobs 能力文件相同。

例如，要向僵尸亡灵书能力添加动画，动画应命名为 `zombie_necronomicon.yml`。它将在能力被触发后立即开始播放，并在动画结束时结束（如果未设置为循环）或在能力完成时结束。

# 从地下城导入自定义模型

## 步骤 1. 正常导入

在导入包含自定义模型的地下城打包压缩文件夹后，自定义模型会自动移动到 `(你的服务器)/plugins/ModelEngine/blueprints`，并且
Model Engine 会自动重新加载以生成相关的资源包和 Model Engine 文件。

## 步骤 2. 生成资源包

如果你在重新加载 EliteMobs 以导入文件时在线，EliteMobs 将在聊天中自动发布一条消息，你可以单击该消息来生成 EliteMobs
资源包。或者，你可以运行命令 `/em generateresourcepack` 来生成它。

运行此命令会将所有资源包文件以非破坏性方式复制到 EliteMobs 的 `exports`
文件夹。这意味着如果你使用资源包名称 `elitemobs_resource_pack` 将资源包解压缩到 exports 文件夹中，EliteMobs
将不会删除其中的任何文件，除非从 ModelEngine 获取了同名的文件（除了 pack.meta 和 pack.png）。这样你就可以更新你的资源包，而不会丢失你之前放入其中的模型。

最后，EliteMobs 会在 `exports` 文件夹中压缩资源包，并且此文件已准备好进行分发。

完成后，EliteMobs 还会建议更新资源包的 SHA1 代码。

### 步骤 2.5. 更新 SHA1

`server.properties` 文件中的 SHA1 代码用于让客户端知道他们的资源包是否已过时，并在必要时使他们更新它。此代码可以通过
EliteMobs 生成，方法是单击步骤 2 之后出现在聊天中的选项，或运行命令 `/em updateresourcepack`。

**请记住，这会使用 `exports` 文件夹中压缩资源包的正确 SHA1 代码更新你的 server.properties 文件。**
如果你删除它或在运行命令后修改压缩文件，它将不起作用。

## 步骤 3. 使文件公开可用

将文件托管在你选择的位置。有些人为此使用 Google Drive 或 Dropbox。如果你有能力这样做，最好自己托管此文件。那里的一些插件也可能帮助你直接从你的
Minecraft 服务器托管它。如果你找到像那样工作的插件，请在 Discord 上告知 MagmaGuy，此帖子将更新该信息。
