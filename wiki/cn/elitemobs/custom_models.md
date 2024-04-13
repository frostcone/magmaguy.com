
从EliteMobs 7.3.12开始，通过[Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/)和[FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/) 将自定义模型添加到EliteMobs。

# 前言

从EliteMobs的角度看，自定义模型系统非常简单，管理员唯一要做的就是在NPC或自定义Boss配置文件中添加一行，告诉它要使用哪个自定义模型。然而，需要采取正确的步骤与Model Engine和Minecraft进行交互，以使这个系统完全运作，并且这并不是那么容易进入的。

本指南将详细讲解与Model Engine和Minecraft的接口。它不会告诉你如何使用Blockbench创建自定义boss，也不会详细说明Model Engine的工作方式。在其他地方已经有很多如何做到这一点的指南，如果你想了解更多关于这些系统的信息，你最好直接查看他们的文档。

## FreeMineCraft Models

如果你想了解如何使用FMM来使你的模型工作，你可以查看[这个]($language$/freeminecraftmodels/info.md)wiki页面以了解更多。

# 最低要求

EliteMobs 7.3.12或更高版本，Model Engine R2.2.0*或更高版本，Blockbench**，使用Minecraft资源包。

\*这个插件可能有进一步的依赖。请在他们那边查看文档。  
\*\*用于创建和编辑自定义模型。如果你只是想安装不修改的内容，则不需要。

# 手动设置自定义模型

注意：本指南假设你已经有一个有效的自定义模型。这些模型以Blockbench文件格式（`.bbmodel`）呈现。

EliteMobs能够为NPC和自定义Boss使用自定义模型。做到这一点的过程对于这两者都是相同的，如下所示：

## 步骤1.设置EliteMobs配置

转到你要修改的自定义Boss或NPC的配置文件，并添加以下行：

```yaml
customModel: modelname
```

用你的模型的名称替换`modelname`。名称是你使用的自定义模型文件的名称。举例来说，测试Boss的自定义模型文件是`showcase_boss.bbmodel`。因此，配置选项应为

```yaml
customModel: showcase_boss
```

这就是EliteMobs的全部内容！现在情况变得有点棘手。

## 步骤2.生成Model Engine数据

[_注意：如有疑问或问题，请参考这里的Model Engine wiki。_](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.把你的自定义模型Blockbench文件（`.bbmodel`）放到目录`(yourServer)/plugins/ModelEngine/blueprints`中.
2. 运行命令`/meg reload`。如果一切正常，你应该会收到一条说`[Model Engine] X models loaded`的消息，其中`x`是你注册的模型的数量。

## 步骤3. 生成资源包

[**注意：现在有一个更简单的替代方法可以实现这一步，在这个链接。**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack)然而，它比这里列出的略微不够灵活。

这可能是最棘手的部分，如果你想让你的服务器管理下载。**在查看如何自动分发它之前，试一试如果你在客户端有资源包时，系统是否能正常工作！**

1. 转到目录`(yourServer)/plugins/ModelEngine/resource pack`并使用那里的数据创建一个资源包，或者将`assets`文件夹添加到你的资源包的`assets`
    1. 如果你正在创建一个新的资源包，你可以将`resource pack`中的文件放入一个压缩文件中，这将是一个你可以分发的有效资源包。[更多信息](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
    2. 如果你已经有一个资源包，确保你不会无意中覆盖现有的模型。[更多信息](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
2. 将你的资源包分发给你的玩家。**只有拥有资源包的玩家才能看到自定义模型**，对其他人来说，它看起来非常奇怪，而且是错误的。如果你打算大量使用这些东西，你可能想强制使用资源包。
    1. （可选）要允许玩家在登录时下载资源包，你需要在某个在线位置托管文件，并将server.properties的`resource-pack=`字段改为指向该地址。**\***
    2. （可选）如果你正在修改资源包，你会想用`resource-pack-sha1=`这个选项，这样服务器可以检查玩家的资源包是否需要更新。为了生成这个值，上传你的资源包到[http://onlinemd5.com/](http://onlinemd5.com/)，并确保你选择了SHA1选项。每次你更新资源包时，你都需要这样做，否则你的用户将不会收到更新。**\***
    3. （可选）要强制玩家使用资源包，使用`require-resource-pack=true`这个选项在server.properties。**\***

**如果你修改了server.properties，你需要重新启动！**

**\***注意：如果这些指令对你不起作用，网上有很多指南可以帮助你实现这个功能。

### 合并资源包

如果你需要合并你的资源包，你可以手动进行。但是我们建议使用一个在线工具，如[merge.elmakers](https://merge.elmakers.com/)，合并你的资源包。

## 步骤4. 希望它能工作

假设所有的事情都正确完成了，你现在应该能在你的boss或NPC上看到自定义模型。你可以通过以下命令生成他们：

* 自定义Boss:`/em spawncustom filename.yml`
* NPC:`/em spawnnpc filename.yml`

然后你可以通过命令`/em remove`来删除他们。

# 为EliteMobs创建和适应自定义模型

EliteMobs能使用Model Engine认定有效的任何模型，这意味着几乎没有什么不能用它做到的。

然而，对于动画来说，需要使用特定的动画名，以保证boss可以使用动画。

这些动画名是在Blockbench的动画选项卡中设置的。你可以随时重命名他们，这意味着你可以改装任何现有模型以使用EliteMobs。

## 动画

请注意这个部分仍在扩展，因为这个系统还很新。随着功能请求的推进，将有更多的内容被添加到它。

### idle（静止）

`idle`是对于不在战斗中且不移动的实体的正确动画名称。EliteMobs不修改Model Engine使用的默认idle动画系统。

### walk（走路）

`walk`是移动的实体的正确动画名称。EliteMobs不修改Model Engine使用的默认idle动画系统。

### attack（攻击）

有三种类型的攻击动画：

#### attack（攻击）

`attack`是当一个boss攻击时的正确的通用动画名称。

#### attack_melee（近战攻击）

`attack_melee`是对于当一个自定义Boss使用vanilla Minecraft近战攻击攻击实体时的正确动画名称。覆盖`attack`。请注意，动画在造成伤害**之后**播放。这不幸是目前的一个限制。因此，尝试使动画非常快。

#### attack_ranged（远程攻击）

`attack_ranged`是对于当一个自定义Boss产生一个投射体实体的攻击的正确动画名称。覆盖`attack`。请注意，动画在发射投射体**之后**播放。这不幸是目前的一个限制。因此，尝试使动画非常快。

### damaged（受损）

`damaged`是当一个自定义Boss受到伤害时播放的正确的恼火动画名称。

### death（死亡）

`death`是死亡动画的正确动画名称。EliteMobs不修改Model Engine使用的默认idle动画系统。

### powers（力量）

注意：这个部分还在开发中。以下是它们计划的功能。

在EliteMobs中，每个力量都可以分配一个动画。动画总是在触发力量时开始，而在使用力量期间不提供更多的触发器。一些力量，如无敌性，因为他们没有触发器，而只是boss的被动属性，所以不会做任何事情。

为了为一个力量分配一个动画，动画的名字必须和elitemobs力量文件的名字一样。

举例来说，为僵尸 Necronomicon 力量添加一个动画，动画应该被命名为`zombie_necronomicon.yml`。只要触发力量，它就会开始播放，并在动画结束时结束，如果它没有设置为循环或当力量完成时结束。

# 从地牢导入自定义模型

## 步骤1. 正常导入

在导入包含自定义模型的地牢包裹器压缩文件夹时，自定义模型会自动被移动到`(yourServer)/plugins/ModelEngine/blueprints`，Model Engine会自动重新加载以生成相关的资源包和Model Engine文件。

## 步骤2. 生成资源包

如果你在线的时候重新加载EliteMobs导入文件，EliteMobs会自动在聊天中发布一条消息，你可以点击它生成EliteMobs资源包。或者，你可以运行命令`/em generateresourcepack`以生成它。

运行此命令将以非破坏的方式将所有资源包文件复制到EliteMobs的`exports`文件夹中。这意味着，如果你使用资源包的名称`elitemobs_resource_pack`为你的资源包文件夹在exports文件夹中解压资源包，EliteMobs将不会删除任何文件，除非从ModelEngine获取的文件名字相同（除了pack.meta和pack.png）.这样，你就可以更新你的资源包，而不会丢失你之前放入的模型。

最后，EliteMobs在`exports`文件夹中将资源包压缩，这个文件就可以分发了。

在做完这个之后，EliteMobs还会建议更新你的资源包的SHA1代码。

### 步骤2.5. 更新SHA1

`server.properties`中的SHA1代码用于让客户端知道它们的资源包是否过时，并在必要时更新它。这个代码可以通过点击步骤2后聊天中的选项，或运行命令`/em updateresourcepack`通过EliteMobs生成。

**请记住，这将用正确的SHA1代码更新你的`server.properties`文件中的`exports`文件夹中的已压缩资源包。**如果你在运行命令后删除或修改了压缩文件，它将不起作用。

## 步骤3. 使文件公开可用

在你选择的地方托管文件。有些人使用Google Drive 或 Dropbox 来做这个。如果你有能力这样做，最好是自己托管这个文件。还可能有一些插件可以帮助你直接从你的Minecraft服务器中托管它。如果你找到了这样的插件，请在Discord上告诉MagmaGuy，这个帖子会使用那个信息更新的。