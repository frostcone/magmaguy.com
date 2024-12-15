[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是自定义模型？

从 EliteMobs 7.3.12 开始，已通过 [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) 和 [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/) 将自定义模型添加到 EliteMobs。

# 前言

从 EliteMobs 的角度来看，自定义模型系统非常简单，因为管理员唯一需要做的就是在 NPC 或自定义首领配置文件中添加一行，告诉它要使用哪个自定义模型。但是，必须使用 Model Engine 和 Minecraft 采取正确的步骤才能使该系统完全正常工作，并且这些步骤不太容易上手。

本指南将详细介绍与 Model Engine 和 Minecraft 交互的步骤。它不会告诉您如何使用 Blockbench 创建自定义首领，也不会详细介绍 Model Engine 的工作原理。在其他地方已经有很多关于如何执行此操作的指南，如果您想了解有关这些系统的更多信息，最好直接查看它们的文档。

## FreeMineCraft 模型

如果您想了解如何使用 FMM 使您的模型工作，您可以查看[此]($language$/freeminecraftmodels/info.md) wiki 页面以了解更多信息。

# 最低要求

EliteMobs 7.3.12 或更高版本、Model Engine R2.2.0\* 或更高版本、Blockbench\*\*、使用 Minecraft 资源包。

\* 此插件可能具有其他依赖项。请查看其文档。
\*\* 创建和编辑自定义模型所必需的。如果您只是想安装内容而不对其进行修改，则不需要。

# 手动设置自定义模型

注意：本指南假设您已经拥有一个有效的自定义模型。这些模型采用 Blockbench 文件格式 (`.bbmodel`)。

EliteMobs 能够将自定义模型用于 NPC 和自定义首领。执行此操作的过程对于两者是相同的，并且如下所示：

## 步骤 1. 设置 EliteMobs 配置

转到您要修改的自定义首领或 NPC 的配置文件，并添加以下行：

```yaml
customModel: modelname
```

将 `modelname` 替换为您的模型的名称。该名称是您正在使用的自定义模型文件的名称。例如，测试首领的自定义模型文件为 `showcase_boss.bbmodel`。因此，配置选项应为

```yaml
customModel: showcase_boss
```

EliteMobs 到此为止！现在变得有点棘手了。

## 步骤 2. 生成 Model Engine 数据

[_注意：如有疑问或问题，请参阅 Model Engine wiki 此处。_](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  将您的自定义模型 Blockbench 文件 (`.bbmodel`) 放入目录 `(您的服务器)/plugins/ModelEngine/blueprints`。
2.  运行命令 `/meg reload`。如果一切正常，您应该会收到一条消息，显示 `[Model Engine] 已加载 X 个模型`，其中 `x` 是您已注册的模型数量。

## 步骤 3. 生成资源包

[**注意：现在有一种更简单的方法可以在此链接上执行此步骤。**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) 但是，它的灵活性不如此处列出的方法。

如果您希望服务器管理下载，这可能是最棘手的部分。**在研究如何自动分发资源包之前，请先检查当您的客户端拥有资源包时，该系统是否可以正常工作！**

1.  转到目录 `(您的服务器)/plugins/ModelEngine/resource pack` 并使用该数据创建资源包，或将 `assets` 文件夹添加到您的资源包的 `assets` 中
    1.  如果您要创建新的资源包，您可以将 `resource pack` 中的文件放入一个压缩文件中，这将是一个您可以在其中分发的有效资源包。[更多信息](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
    2.  如果您已经拥有资源包，请确保您没有意外覆盖现有模型。[更多信息](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
2.  将您的资源包分发给您的玩家。**只有拥有资源包的玩家才能看到自定义模型**，而其他所有人的模型看起来都会非常奇怪和损坏。如果您打算大量使用这些模型，您可能需要强制使用资源包。
    1.  （可选）要允许玩家在登录时下载资源包，您需要在网上某个位置托管该文件，并将 server.properties `resource-pack=` 字段更改为指向该地址。**\***
    2.  （可选）如果您正在修改资源包，您将需要使用 `resource-pack-sha1=` 选项，以便服务器可以检查玩家的资源包是否需要更新。要生成此值，请将您的资源包上传到 [http://onlinemd5.com/](http://onlinemd5.com/) 并确保选择 SHA1 选项。您每次更新资源包都必须执行此操作，否则您的用户将不会获得更新。**\***
    3.  （可选）要强制玩家使用资源包，请在 server.properties 中使用选项 `require-resource-pack=true`。**\***

**如果您修改了 server.properties，则需要重新启动！**

**\*** 注意：如果这些说明没有帮助您，网上有很多指南可以帮助您使其工作。

### 合并资源包

如果您需要合并资源包，您可以手动进行。但是，我们建议使用在线工具（例如 [merge.elmakers](https://merge.elmakers.com/)）来合并您的资源包。

## 步骤 4. 希望它可以工作

假设一切都正确完成，您现在应该能够在您的首领或 NPC 上看到自定义模型。您可以使用以下命令生成它们：

*   自定义首领：`/em spawncustom filename.yml`
*   NPC：`/em spawnnpc filename.yml`

然后您可以使用命令 `/em remove` 将它们删除。

# 创建和调整用于 EliteMobs 的自定义模型

EliteMobs 能够使用 Model Engine 认为有效的任何模型，这意味着没有什么是不可能的。

但是，在涉及到动画时，需要使用动画的特定名称才能保证首领可以使用动画。

这些动画名称是在 Blockbench 的动画选项卡中设置的名称。您可以随时重命名它们，这意味着您可以改造任何现有模型以使其与 EliteMobs 一起使用。

## 动画

请注意，本节仍在扩展中，因为此系统仍然很新。随着功能请求的不断涌入，将添加更多内容。

### idle

`idle` 是不在战斗且未移动的实体的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认闲置动画系统。

### walk

`walk` 是移动的实体的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认闲置动画系统。

### attack

攻击动画有三种类型：

#### attack

`attack` 是首领攻击时正确的通用动画名称。

#### attack_melee

`attack_melee` 是当自定义首领使用原版 Minecraft 近战攻击攻击实体时完成的攻击的正确动画名称。覆盖 `attack`。请注意，动画会在造成伤害**后**播放。不幸的是，这目前是一个限制。因此，请尽量使动画速度非常快。

#### attack_ranged

`attack_ranged` 是当自定义首领生成弹丸实体时完成的攻击的正确动画名称。覆盖 `attack`。请注意，动画会在弹丸发射**后**播放。不幸的是，这目前是一个限制。因此，请尽量使动画速度非常快。

### damaged

`damaged` 是自定义首领在受到伤害时播放的受伤动画的正确动画名称。

### death

`death` 是死亡动画的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认闲置动画系统。

### powers

注意：此部分仍在开发中。以下是计划的功能。

EliteMobs 中的每个能力都可以分配一个动画。动画始终在能力被触发时开始，并且目前在整个能力使用过程中没有提供进一步的触发。某些能力（例如无敌）将不会执行任何操作，因为它们没有触发，而只是首领的被动属性。

为了将动画分配给能力，动画的名称必须与 elitemobs 能力文件的名称相同。

例如，要将动画添加到僵尸死灵书能力，该动画应命名为 `zombie_necronomicon.yml`。它会在能力被触发后立即开始播放，并在动画结束时结束（如果它未设置为循环）或在能力完成时结束。

# 从地牢导入自定义模型

## 步骤 1. 正常导入

导入包含自定义模型的地牢包压缩文件夹后，自定义模型会自动移动到 `(您的服务器)/plugins/ModelEngine/blueprints`，并且 Model Engine 会自动重新加载以生成相关的资源包和 Model Engine 文件。

## 步骤 2. 生成资源包

如果您在重新加载 EliteMobs 以导入文件时处于在线状态，EliteMobs 将自动在聊天中发布一条消息，您可以单击该消息以生成 EliteMobs 资源包。或者，您可以运行命令 `/em generateresourcepack` 来生成它。

运行此命令会将所有资源包文件以非破坏性的方式复制到 EliteMobs `exports` 文件夹。这意味着如果您使用资源包名称 `elitemobs_resource_pack` 将资源包解压缩到 exports 文件夹中，EliteMobs 将不会删除其中的任何文件，除非从 ModelEngine 获取了具有相同名称的文件（`pack.meta` 和 `pack.png` 除外）。这样，您就可以更新您的资源包而不会丢失您先前放入其中的模型。

最后，EliteMobs 将资源包压缩在 `exports` 文件夹中，并且此文件已准备好分发

完成此操作后，EliteMobs 还建议更新您的资源包的 SHA1 代码。

### 步骤 2.5. 更新 SHA1

`server.properties` 文件中的 SHA1 代码用于让客户端知道其资源包是否已过时，并在必要时使其更新。此代码可以通过单击步骤 2 后出现在聊天中的选项或通过运行命令 `/em updateresourcepack` 通过 EliteMobs 生成

**请记住，这会使用 `exports` 文件夹中压缩资源包的正确 SHA1 代码更新您的 server.properties 文件。** 如果您在运行命令后删除它或修改压缩文件，它将无法工作。

## 步骤 3. 使文件公开可用

将文件托管在您选择的位置。有些人为此使用 Google 云端硬盘或 Dropbox。如果您有能力，最好自己托管此文件。那里的一些插件也可能会帮助您直接从您的 Minecraft 服务器托管它。如果您找到一个有效的插件，请在 Discord 上通知 MagmaGuy，此帖子将更新该信息。
