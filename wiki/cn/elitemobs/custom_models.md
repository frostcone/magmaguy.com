自 EliteMobs 7.3.12 版本起，已通过 [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) 和 [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/) 为 EliteMobs 添加了自定义模型。

# 前言

从 EliteMobs 的角度来看，自定义模型系统非常简单，管理员唯一需要做的就是向 NPC 或自定义 Boss 的配置文件中添加一行，告诉它使用哪个自定义模型。然而，为了使该系统完全正常运行，需要对 Model Engine 和 Minecraft 执行正确的步骤，而这些步骤并不那么容易上手。

本指南将详细介绍如何与 Model Engine 和 Minecraft 进行交互。它不会告诉你如何使用 Blockbench 创建自定义 Boss，也不会详细介绍 Model Engine 的工作原理。关于这些内容，其他地方已经有很多指南了，如果你想了解更多关于这些系统的信息，最好直接查阅它们的文档。

## FreeMineCraft Models

如果你想了解如何使用 FMM 使你的模型工作，你可以查看 [此]($language$/freeminecraftmodels/info.md) Wiki 页面了解更多信息。

# 最低要求

EliteMobs 7.3.12 或更高版本，Model Engine R2.2.0\* 或更高版本，Blockbench\*\*，以及使用 Minecraft 资源包。

\* 此插件可能有其他依赖项。请查阅其文档。
\*\* 创建和编辑自定义模型所需。如果你只是想安装内容而不修改它，则不需要。

# 手动设置自定义模型

注意：本指南假设你已经拥有一个有效的自定义模型。这些模型采用 Blockbench 文件格式 (`.bbmodel`)。

EliteMobs 能够为 NPC 和自定义 Boss 使用自定义模型。两者的过程相同，如下所示：

## 步骤 1. 设置 EliteMobs 配置

转到你要修改的自定义 Boss 或 NPC 的配置文件，并添加以下行：

```yaml
customModel: modelname
```

将 `modelname` 替换为你的模型的名称。该名称是你正在使用的自定义模型文件的名称。例如，测试 Boss 的自定义模型文件是 `showcase_boss.bbmodel`。因此，配置选项应为

```yaml
customModel: showcase_boss
```

EliteMobs 的设置就到这里了！现在事情变得有点棘手了。

## 步骤 2. 生成 Model Engine 数据

[_注意：如有疑问或问题，请参阅此处的 Model Engine Wiki。_](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  将你的自定义模型 Blockbench 文件 (`.bbmodel`) 放入目录 `(你的服务器)/plugins/ModelEngine/blueprints` 中。
2.  运行命令 `/meg reload`。如果一切正常，你应该会收到一条消息，显示 `[Model Engine] X models loaded`，其中 `X` 是你已注册的模型数量。

## 步骤 3. 生成资源包

[**注意：现在可以通过此链接找到执行此步骤的另一种更简单的方法。**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) 但是，它比此处列出的方法灵活性稍差。

如果你想让你的服务器管理下载，这可能是最棘手的部分。**在考虑自动分发之前，请先尝试在你的客户端上安装资源包，检查系统是否正常工作！**

1.  转到目录 `(你的服务器)/plugins/ModelEngine/resource pack`，并使用该数据创建一个资源包，或者将其中的 `assets` 文件夹添加到你的资源包的 `assets` 中。
    1.  如果你要创建一个新的资源包，你可以将 `resource pack` 中的文件放入一个压缩文件中，这将是一个有效的资源包，你可以分发它。[更多信息](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
    2.  如果你已经有一个资源包，请确保你没有意外覆盖现有模型。[更多信息](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
2.  将你的资源包分发给你的玩家。**只有拥有资源包的玩家才能看到自定义模型**，对于其他人来说，它会看起来非常奇怪和损坏。如果你打算大量使用这些模型，你可能需要强制使用资源包。
    1.  (可选) 为了让玩家在登录时下载资源包，你需要将文件托管在某个在线位置，并将 server.properties 中的 `resource-pack=` 字段指向该地址。**\***
    2.  (可选) 如果你正在修改资源包，你会想要使用 `resource-pack-sha1=` 选项，以便服务器可以检查玩家的资源包是否需要更新。要生成此值，请将你的资源包上传到 [http://onlinemd5.com/](http://onlinemd5.com/) 并确保选择 SHA1 选项。每次更新资源包时，你都必须这样做，否则你的用户将无法获得更新。**\***
    3.  (可选) 要强制玩家使用资源包，请在 server.properties 中使用选项 `require-resource-pack=true`。**\***

**如果你修改了 server.properties，你需要重启服务器！**

**\*** 注意：如果这些说明对你没有帮助，网上有很多指南可以帮助你实现此功能。

### 合并资源包

如果你需要合并你的资源包，你可以手动进行。但我们建议使用在线工具，例如 [merge.elmakers](https://merge.elmakers.com/) 来合并你的资源包。

## 步骤 4. 希望它能工作

假设一切都已正确完成，你现在应该能够在你的 Boss 或 NPC 上看到自定义模型了。你可以通过以下命令生成它们：

*   自定义 Boss：`/em spawncustom filename.yml`
*   NPC：`/em spawnnpc filename.yml`

然后你可以通过命令 `/em remove` 移除它们。

# 为 EliteMobs 创建和调整自定义模型

EliteMobs 能够使用 Model Engine 认为有效的任何模型，这意味着几乎没有什么事情是做不到的。

然而，在动画方面，需要使用特定的动画名称来确保 Boss 可以使用这些动画。

这些动画名称是在 Blockbench 的动画选项卡中设置的。你可以随时重命名它们，这意味着你可以改造任何现有模型以使其与 EliteMobs 一起工作。

## 动画

请注意，本节仍在扩展中，因为此系统仍然非常新。随着功能请求的涌入，将添加更多内容。

### idle

`idle` 是非战斗状态且未移动的实体的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认闲置动画系统。

### walk

`walk` 是正在移动的实体的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认闲置动画系统。

### attack

攻击动画有三种类型：

#### attack

`attack` 是 Boss 攻击时的正确通用动画名称。

#### attack_melee

`attack_melee` 是自定义 Boss 使用原版 Minecraft 近战攻击实体时执行的攻击的正确动画名称。它会覆盖 `attack`。请注意，动画在造成伤害**之后**播放。不幸的是，目前这是一个限制。因此，请尽量使动画非常快速。

#### attack_ranged

`attack_ranged` 是自定义 Boss 生成投射物实体时执行的攻击的正确动画名称。它会覆盖 `attack`。请注意，动画在投射物发射**之后**播放。不幸的是，目前这是一个限制。因此，请尽量使动画非常快速。

### damaged

`damaged` 是自定义 Boss 受伤时播放的受伤动画的正确动画名称。

### death

`death` 是死亡动画的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认闲置动画系统。

### powers

注意：此部分仍在开发中。以下是计划中的功能。

EliteMobs 中的每个能力都可以为其分配一个动画。动画总是在能力触发时开始，并且在使用能力的过程中目前没有提供进一步的触发器。某些能力，例如无敌，不会做任何事情，因为它们没有触发器，只是 Boss 的被动属性。

为了将动画分配给能力，动画的名称必须与 elitemobs 能力文件的名称相同。

例如，要为僵尸亡灵书能力添加动画，动画应命名为 `zombie_necronomicon.yml`。它将在能力触发时立即开始播放，并在动画结束（如果未设置为循环）或能力完成时结束。

# 从地下城导入自定义模型

## 步骤 1. 正常导入

导入包含自定义模型的地下城打包器压缩文件夹后，自定义模型会自动移动到 `(你的服务器)/plugins/ModelEngine/blueprints`，并且 Model Engine 会自动重新加载以生成相关的资源包和 Model Engine 文件。

## 步骤 2. 生成资源包

如果你在在线状态下重新加载 EliteMobs 以导入文件，EliteMobs 将自动在聊天中发布一条消息，你可以点击该消息来生成 EliteMobs 资源包。或者，你可以运行命令 `/em generateresourcepack` 来生成它。

运行此命令会将所有资源包文件以非破坏性方式复制到 EliteMobs 的 `exports` 文件夹中。这意味着如果你使用资源包名称 `elitemobs_resource_pack` 将一个资源包解压到 exports 文件夹中，EliteMobs 不会删除其中的任何文件，除非从 ModelEngine 获取到同名文件（pack.meta 和 pack.png 除外）。通过这种方式，你可以在不丢失之前放入的模型的情况下更新你的资源包。

最后，EliteMobs 会将 `exports` 文件夹中的资源包压缩，此文件即可用于分发。

完成此操作后，EliteMobs 还会建议更新你的资源包的 SHA1 代码。

### 步骤 2.5. 更新 SHA1

`server.properties` 文件中的 SHA1 代码用于告知客户端其资源包是否已过期，并在必要时使其更新。此代码可以通过 EliteMobs 生成，方法是点击步骤 2 后出现在聊天中的选项，或运行命令 `/em updateresourcepack`。

**请记住，这会使用 `exports` 文件夹中压缩资源包的正确 SHA1 代码更新你的 server.properties 文件。** 如果你在运行命令后删除或修改了压缩文件，它将无法工作。

## 步骤 3. 使文件公开可用

将文件托管在你选择的位置。有些人使用 Google Drive 或 Dropbox 来完成此操作。如果你有能力，最好自己托管此文件。一些插件也可能帮助你直接从你的 Minecraft 服务器托管它。如果你找到一个可以工作的此类插件，请在 Discord 上告知 MagmaGuy，此帖子将更新该信息。