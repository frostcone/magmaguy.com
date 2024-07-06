从 EliteMobs 7.3.12 版本开始，通过 [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) 和 [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/) 将自定义模型添加到 EliteMobs 中。

# 前言

从 EliteMobs 的角度来看，自定义模型系统非常简单，因为管理员唯一需要做的就是在 NPC 或自定义 Boss 配置文件中添加一行，告诉它使用哪个自定义模型。但是，为了使该系统完全正常运行，需要使用 Model Engine 和 Minecraft 执行正确的步骤，而这些步骤并不容易掌握。

本指南将详细介绍与 Model Engine 和 Minecraft 交互的部分。它不会告诉您如何使用 Blockbench 创建自定义 Boss，也不会详细介绍 Model Engine 的工作原理。已经有大量的指南介绍了如何在其他地方执行此操作，如果您想了解更多有关这些系统的信息，最好直接查看它们的文档。

## FreeMineCraft Models

如果您想了解如何使用 FMM 使您的模型正常工作，则可以查看 [此]($language$/freeminecraftmodels/info.md) 维基页面以了解更多信息。

# 最低要求

EliteMobs 7.3.12 或更高版本、Model Engine R2.2.0\* 或更高版本、Blockbench\*\*、使用 Minecraft 资源包。

\* 此插件可能还有其他依赖项。请查看他们那边的文档。  
\*\* 创建和编辑自定义模型所必需。如果您只是想安装内容而不修改它，则不需要。

# 手动设置自定义模型

注意：本指南假设您已经拥有有效的自定义模型。这些模型采用 Blockbench 文件格式 (`.bbmodel`)。

EliteMobs 可以为 NPC 和自定义 Boss 使用自定义模型。这两种方法的步骤相同，如下所示：

## 第 1 步。设置 EliteMobs 配置

转到要修改的自定义 Boss 或 NPC 的配置文件，并添加以下行：

```yaml
customModel: 模型名称
```

将 `模型名称` 替换为您的模型的名称。该名称是您正在使用的自定义模型文件的名称。例如，测试 Boss 的自定义模型文件为 `showcase_boss.bbmodel`。因此，配置选项应为

```yaml
customModel: showcase_boss
```

EliteMobs 的部分就完成了！现在事情变得有点棘手了。

## 第 2 步。生成 Model Engine 数据

[_注意：如有疑问或问题，请参阅此处的 Model Engine 维基。_](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  将您的自定义模型 Blockbench 文件 (`.bbmodel`) 放入目录 `(yourServer)/plugins/ModelEngine/blueprints` 中。
2.  运行命令 `/meg reload`。如果一切正常，您应该会收到一条消息，显示 `[Model Engine] X 个模型已加载`，其中 `x` 是您已注册的模型数量。

## 第 3 步。生成资源包

[**注意：现在有一种替代的、更简单的方法来执行此步骤，请点击此链接。**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) 但是，它比此处列出的方法灵活性稍差。

如果您希望让您的服务器管理下载，这可能是最棘手的部分。**在研究如何自动分发资源包之前，请尝试在您的客户端上安装资源包时检查系统是否正常工作！**

1.  转到目录 `(yourServer)/plugins/ModelEngine/resource pack` 并使用该数据创建资源包，或者将那里的 `assets` 文件夹添加到您的资源包的 `assets` 中
    1.  如果您要创建一个新的资源包，您可以将 `resource pack` 中的文件放入一个压缩文件中，这将是一个您可以分发的有效资源包。[更多信息](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
    2.  如果您已经有一个资源包，请确保您没有意外覆盖现有模型。[更多信息](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
2.  将您的资源包分发给您的玩家。**只有拥有资源包的玩家才能看到自定义模型**，对于其他所有人来说，它看起来会非常奇怪和破碎。如果您打算大量使用这些模型，您可能需要强制使用资源包。
    1.  （可选）要允许玩家在登录时下载资源包，您需要将文件托管在网上的某个地方，并将 server.properties `resource-pack=` 字段更改为指向该地址。**\***
    2.  （可选）如果您正在修改资源包，您将需要使用 `resource-pack-sha1=` 选项，以便服务器可以检查玩家的资源包是否需要更新。要生成此值，请将您的资源包上传到 [http://onlinemd5.com/](http://onlinemd5.com/) 并确保您选择了 SHA1 选项。每次更新资源包时，您都必须执行此操作，否则您的用户将无法获得更新。**\***
    3.  （可选）要强制玩家使用资源包，请在 server.properties 中使用 `require-resource-pack=true` 选项。**\***

**如果您修改了 server.properties，您将需要重新启动！**

**\*** 注意：如果您无法通过这些说明解决问题，网上有很多指南可以帮助您解决问题。

### 合并资源包

如果您需要合并您的资源包，您可以手动进行。但我们建议使用在线工具（例如 [merge.elmakers](https://merge.elmakers.com/)）来合并您的资源包。

## 第 4 步。希望它能正常工作

假设一切都正确完成，您现在应该能够在您的 Boss 或 NPC 上看到自定义模型。您可以通过以下命令生成它们：

*   自定义 Boss：`/em spawncustom filename.yml`
*   NPC：`/em spawnnpc filename.yml`

然后，您可以通过 `/em remove` 命令删除它们。

# 为 EliteMobs 创建和调整自定义模型

EliteMobs 可以使用 Model Engine 认为有效的任何模型，这意味着它几乎可以做任何事情。

但是，在动画方面，需要使用特定名称的动画来确保 Boss 可以使用动画。

这些动画名称是在 Blockbench 的“动画”选项卡中设置的。您可以随时重命名它们，这意味着您可以改造任何现有模型以与 EliteMobs 一起使用。

## 动画

请注意，本节仍在扩展中，因为该系统还很新。随着功能请求的推出，将添加更多内容。

### 空闲

`idle` 是非战斗状态且未移动的实体的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认空闲动画系统。

### 行走

`walk` 是正在移动的实体的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认空闲动画系统。

### 攻击

有三种类型的攻击动画：

#### 攻击

`attack` 是 Boss 攻击时通用的正确动画名称。

#### attack_melee

`attack_melee` 是自定义 Boss 使用普通 Minecraft 近战攻击攻击实体时执行的攻击的正确动画名称。覆盖 `attack`。请注意，动画在造成伤害**之后**播放。不幸的是，这目前是一个限制。因此，请尽量使动画非常快。

#### attack_ranged

`attack_ranged` 是自定义 Boss 生成抛射物实体时执行的攻击的正确动画名称。覆盖 `attack`。请注意，动画在发射抛射物**之后**播放。不幸的是，这目前是一个限制。因此，请尽量使动画非常快。

### 受伤

`damaged` 是自定义 Boss 在受到伤害时播放的受伤动画的正确动画名称。

### 死亡

`death` 是死亡动画的正确动画名称。EliteMobs 不会修改 Model Engine 使用的默认空闲动画系统。

### 力量

注意：此部分仍在开发中。以下是计划的功能。

EliteMobs 中的每种力量都可以分配一个动画。动画总是在触发力量时开始，并且在力量使用过程中当前不提供其他触发器。某些力量，例如无敌，不会执行任何操作，因为它们没有触发器，只是 Boss 的被动属性。

为了将动画分配给力量，动画的命名必须与 elitemobs 力量文件相同。

例如，要为僵尸亡灵法术力量添加动画，动画应命名为 `zombie_necronomicon.yml`。它将在力量被触发时立即开始播放，如果未设置为循环，则在动画结束时结束，或者在力量完成时结束。

# 从地下城导入自定义模型

## 第 1 步。普通导入

导入包含自定义模型的地下城打包程序压缩文件夹后，自定义模型会自动移动到 `(yourServer)/plugins/ModelEngine/blueprints`，并且 Model Engine 会自动重新加载以生成相关的资源包和 Model Engine 文件。

## 第 2 步。生成资源包

如果您在重新加载 EliteMobs 以导入文件时在线，EliteMobs 将在聊天中自动发布一条消息，您可以点击该消息以生成 EliteMobs 资源包。或者，您可以运行命令 `/em generateresourcepack` 以生成它。

运行此命令会以非破坏性方式将所有资源包文件复制到 EliteMobs `exports` 文件夹中。这意味着如果您使用资源包名称 `elitemobs_resource_pack` 将资源包解压缩到导出文件夹中，作为您的资源包文件夹，EliteMobs 将不会删除其中的任何文件，除非从 ModelEngine 获得同名文件（pack.meta 和 pack.png 除外）。这样，您就可以更新您的资源包，而不会丢失您之前放入其中的模型。

最后，EliteMobs 将资源包压缩到 `exports` 文件夹中，此文件已准备好分发

完成此操作后，EliteMobs 还会建议更新您的资源包的 SHA1 代码。

### 第 2.5 步。更新 SHA1

`server.properties` 文件中的 SHA1 代码用于让客户端知道他们的资源包是否过时，并在必要时进行更新。可以通过 EliteMobs 生成此代码，方法是点击步骤 2 后出现在聊天中的选项，或运行命令 `/em updateresourcepack`

**请记住，这会使用 `exports` 文件夹中压缩资源包的正确 SHA1 代码更新您的 server.properties 文件。**如果您在运行命令后删除或修改了压缩文件，它将不起作用。

## 第 3 步。使文件公开可用

将文件托管在您选择的位置。有些人为此使用 Google Drive 或 Dropbox。如果您有能力，最好自己托管此文件。那里的一些插件可能还会帮助您直接从您的 Minecraft 服务器托管它。如果您找到一个有效的插件，请在 Discord 上告知 MagmaGuy，此帖子将使用该信息进行更新。





