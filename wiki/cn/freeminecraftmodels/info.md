# ***开始之前！***

FreeMinecraftModels (FMM) 目前处于 **alpha** 阶段！这意味着一些功能尚未完成，并且正在积极开发中。

然而，目前插件的核心功能是完全可用的 - 转换 bbmodel 文件、生成资源包、在游戏中生成实体以及管理它们的动画都可以正常工作，尽管可能不是
100% 精细。

考虑在 https://www.patreon.com/magmaguy 上支持开发！

导出的资源包内容根据 CC0 许可协议授权，不保留任何权利。您可以自由使用、分发、修改用于任何目的，不受限制或无需署名。

# 使用此插件

## FreeMinecraftModels (FMM) 可以为 Minecraft 服务器管理员做什么？

它可以：

- 导入 .bbmodel 或 fmmodel（FMM 的自定义格式）模型
- 生成带有模型的资源包，这些模型超出正常的 Minecraft 资源包模型限制（高达 ~~112x112x112~~ 106x106x106 单位或游戏中 7x7x7
  方块）
- 通过使用命令 `/fmm spawn static <id>` 在游戏中显示这些模型，其中 id 是模型的文件名，小写且不带文件扩展名
- 按照在 Blockbench 中配置的方式为这些模型设置动画
- 处理默认状态动画，而无需其他插件（行走、闲置、死亡、攻击、生成）

### 如何添加现有模型？

要导入模型，只需将 .bbmodel 拖到 imports 文件夹，然后执行 `/fmm reload`。这将在 `models` 文件夹中生成一个 .fmmodel
文件，并将该模型添加到 `outputs` 文件夹中的资源包中。

***您需要使用该资源包才能正确查看模型！*** 它是一个普通的资源包，所以您只需要将其放入您的资源包文件夹中即可。 Minecraft
服务器可以在第三方服务（例如 Google Drive）或专门的服务（例如 https://resourcepack.host/）上托管资源包，最后一个网站可能是最简单的方法。

### 如何在游戏中查看模型？

模型有两种（计划的）类别。

- `Static` 模型用于不移动（但可以有动画）的模型，更像是装饰品 - 例如灯柱或圣诞树。
- `Dynamic` 模型用于行为类似于 Minecraft 生物的模型，也就是说它们会四处移动并执行与生物相关的各种行为。例如自定义 Boss
  模型或向 Minecraft 添加全新的实体类型。

#### 在游戏中查看静态模型

要在游戏中查看静态模型，请使用命令 `/fmm spawn static <id>`，其中 id 是模型的文件名，小写且不带文件扩展名。

#### 在游戏中查看动态模型

要在游戏中查看动态模型，请使用命令 `/fmm spawn dynamic <id>`，其中 id 是模型的文件名，小写且不带文件扩展名。

## FreeMinecraftModels (FMM) 可以为建模者做什么？

FMM 遵循资源包生成的标准资源包规则。此外，它尝试尽可能与兼容 ModelEngine 的模型兼容，以便尝试标准化插件之间的模型创建。

### 模型生成功能/限制

如果您曾经为 ModelEngine 创建过模型，那么您将熟悉许多 Minecraft 资源包的生成限制：

#### **立方体：**

立方体在这里与 Blockbench 中的立方体相同，它们是构成模型的立方体。

- 立方体可以达到 ~~112x112x112~~ 106x106x106 "像素"（Blockbench 单位）或游戏中 7x7x7 方块（使用显示尺寸绕过正常的 Minecraft
  限制，很快将通过显示实体进一步绕过 1.19.4+）
- 立方体的合法旋转角度为 0、22.5、-22.5、45 和 -45。其他旋转不起作用。
- 立方体仅在一个轴上旋转，这意味着 [22.5, 0, 0] 的旋转是没问题的，而 [22.5, 0, 45] 的旋转将无法完全工作，只会在一个轴上旋转。

#### **骨骼：**

骨骼是 Blockbench 所称的“组”。它们用于将立方体分组在一起，应该用于将骨骼分组在一起以进行动画Blueprint。

- 骨骼可以达到 ~~112x112x112~~ 106x106x106（应该是 112，不确定为什么是这样）“像素”（Blockbench 单位）或游戏中 7x7x7 方块。
  *请注意，骨骼的大小由它们所包含的内容决定，因此如果您的立方体相距超过 7
  个方块，则可能会超过此大小限制。绕过此限制就像将方块放入第一个骨骼Blueprint中未包含的不同骨骼Blueprint一样简单！*
- 可以进行任何旋转！

骨骼比立方体灵活得多，但您应该尽可能少地使用骨骼！在 FMM 中，由于 Minecraft
的限制，每个骨骼Blueprint都是一个不同的实体。按比例来看，这会很快影响性能！始终尽可能少地使用骨骼，并注意您计划生成的该模型数量 -
您计划拥有的越多，您应该拥有的骨骼就越少！

#### **虚拟骨骼**

如果您来自 ModelEngine，您可能想知道 FMM 中是否/如何实现虚拟骨骼。虚拟骨骼已被标记，但目前尚未实现超出非常基本的基础。

但是，至少以下虚拟骨骼将很快与 FMM 兼容：

- 碰撞箱/眼睛高度：一个名为“hitbox”的骨骼Blueprint，带有一个定义边界的立方体Blueprint，并且具有相同的 x 和 z
  值（如果它们不相同，将选择最大值）定义碰撞箱。眼睛高度设置为碰撞箱骨骼Blueprint的枢轴点。
- 名称标签：一个名称以“tag_”开头的骨骼Blueprint。老实说，我更倾向于在这里使用更具体的方式，使用“tag_name”以便将标签用于其他目的，但这将在稍后认真考虑。

不保证在近期内添加其他虚拟骨骼Blueprint功能。

## 合并资源包

在使用 FMM 时，您可能需要合并资源包。

您可以手动合并资源包，但我们建议使用在线工具（例如 [merge.elmakers](https://merge.elmakers.com/)）来合并您的资源包。

#### **更安全、更简单、不可编辑的文件分发**

FMM 尝试解决的一个问题是用户重新利用他们获得的模型，以模型创建者不希望他们编辑的方式进行编辑，特别是为了重新换皮或以其他方式稍微更改模型，并可能尝试将其作为原创作品转售。

为此，FMM 使用 `.fmmodel` 文件格式，其目的是将 `.bbmodel` 文件剥离到插件可以使用的程度，但无法在 Blockbench 中编辑。

作为建模者，您现在可以选择是发布不可编辑的 `.fmmodel` 文件、可编辑的 `.bbmodel` 文件，甚至可以对两者进行不同的定价或分发服务条款。

生成 `.fmmodel` 非常简单，只需将您的 `.bbmodel` 放入 `~/plugins/FreeMinecraftModels/imports`
文件夹，然后使用 `/fmm reload` 重新加载插件或重新启动服务器。您的 `.fmmodel` 将位于 `~/plugins/FreeMinecraftModels/models`
文件夹中。

## FreeMinecraftModels (FMM) 可以为希望将其集成到其插件中的开发人员做什么？

FMM 有一个 Maven 仓库！
Maven:

```xml
<repository>
    <id>ossrh-public</id>
    <url>https://s01.oss.sonatype.org/content/groups/snapshots/</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>1.1.3-SNAPSHOT</version>
<scope>provided</scope>
</dependency>
```

Gradle:

```kotlin
compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: '1.1.2-SNAPSHOT'
```

*注意 FreeMinecraftModels 旨在用作 API，并且需要在服务器上安装插件。不要将其阴影化到您的插件中！*

FMM 旨在尽可能易于用作 API。

现在，如果您希望将 FMM 用作插件的 API，您只需要了解一个类，那就是 `StaticEntity`。

以下是处理静态模型的代码片段：

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //创建模型
    public FreeMinecraftModelsModel(String id, Location location) {
        //这会生成实体！
        staticEntity = StaticEntity.create(id, location);
        //这会检查实体是否正确生成
        if (staticEntity == null) Logger.warningMessage("FMM 无法找到名为 " + id + " 的模型！");
    }

    public void remove() {
        //这将删除实体
        staticEntity.remove();
    }
}
```

请记住，静态模型旨在保持在原位，并在固定位置充当装饰元素（动画不计入此处的“移动”）。虽然可以移动它们，但如果您想这样做，请考虑是否应该改用动态模型。

以下是我的自定义 Boss 插件 EliteMobs 如何使用动态实体：

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.mobconstructor.custombosses.CustomBossEntity;
import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import com.magmaguy.freeminecraftmodels.api.ModeledEntityManager;
import com.magmaguy.freeminecraftmodels.customentity.DynamicEntity;
import lombok.Getter;
import org.bukkit.entity.LivingEntity;

public class CustomModelFMM implements CustomModelInterface {
    @Getter
    private DynamicEntity dynamicEntity;

    public CustomModelFMM(LivingEntity livingEntity, String modelName, String nametagName) {
        dynamicEntity = DynamicEntity.create(modelName, livingEntity);
        if (dynamicEntity == null) return;
        dynamicEntity.setName(nametagName);
    }

    public static void reloadModels() {
        ModeledEntityManager.reload();
    }

    public static boolean modelExists(String modelName) {
        return ModeledEntityManager.modelExists(modelName);
    }

    @Override
    public void shoot() {
        if (dynamicEntity.hasAnimation("attack_ranged")) dynamicEntity.playAnimation("attack_ranged", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void melee() {
        if (dynamicEntity.hasAnimation("attack_melee")) dynamicEntity.playAnimation("attack_melee", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void playAnimationByName(String animationName) {
        dynamicEntity.playAnimation(animationName, false);
    }

    @Override
    public void setName(String nametagName, boolean visible) {
        dynamicEntity.setName(nametagName);
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void setNameVisible(boolean visible) {
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void switchPhase() {
        dynamicEntity.stopCurrentAnimations();
    }
}
```

动态模型构建在生物实体之上，可以在使用 create 方法时提供，如上面的示例中所示，或者在对动态实体运行 spawn 方法时提供。

虽然目前没有正式的 API 资源，但所有用于 API 使用的元素都包含在 ModeledEntity（所有实体的基类）、StaticEntity、DynamicEntity 和
ModeledEntityManager 中。99% 的开发人员应该能够在这三个类中找到他们需要的所有方法。

# 作为开发人员为 FreeMinecraftModels (FMM) 项目做出贡献

FMM 根据 GPLV3 许可分发，欢迎代码贡献。以下是基本贡献指南：

- 遵循现有的命名约定，保持现有的详细程度，并添加足够的文档以使您的贡献易于理解
- 使贡献与插件的范围相关。如果您不知道它是否相关，请随时提前询问。
- 注意代码的性能影响。如果某些贡献过于未优化或导致过大的性能影响，则可能会被拒绝。

## 插件概览

为了节省您的时间，以下是 FMM 逻辑流程的快速分解：

1) 读取 `imports` 文件夹
2) 将文件从 `imports` 文件夹移动到 `models` 文件夹。如果文件是 `.bbmodel`，它将在 models 文件夹中转换为 `.fmmodel`。
3) 读取 `models` 文件夹中的文件。
4) 解释所有模型结构，创建包含 `Bone` 组的 `Skeleton`，这些骨骼包含子 `Bone` 和 `Cube` 组。`Cube` 和 `Bone` 生成它们各自相关的
   JSON 资源包数据。这意味着 `Cube` 生成特定于立方体的 JSON，而 `Bone`
   生成轮廓和各个骨骼Blueprint文件。请注意，一个骨骼Blueprint会生成一个资源包文件。模型会在生成时添加到列表中。
5) 仍在 `Skeleton` 中，解释模型中的所有 `Animations`（如果有）。
6) 所有数据现已初始化，资源包已在 `outputs` 文件夹中生成，并且插件已准备好使用。

## 此插件中使用的技巧：

此处使用的技巧相当成熟和标准化，但仍将列出，因为它们可能违反直觉。

请注意，这些技巧对用户和模型制作者来说都是完全不可见的；列出限制和解决方法仅是为了帮助您了解 FMM 如何绕过各种 Minecraft
限制。

- 所有模型都放大 4 倍，然后在代码中重新调整大小和枢轴点，以扩展模型的理论最大大小。
- 由于资源包模型的大小只能从 -16 到 +32，因此模型在后台会发生偏移。这对玩家来说是完全不可见的。
- 皮革马铠用于创建可以通过代码影响色调的模型（即用于损坏指示）。必须将马铠设置为白色才能显示正确的颜色！
- Blockbench 为纹理使用特定的 ID 系统，但实际上会从配置中按顺序读取纹理。此处根据纹理在纹理列表中的位置分配 ID，这与
  Blockbench 的方式相同。
- 由于 Minecraft 的限制，每个骨骼Blueprint都是一个不同的盔甲架实体。
- 皮革马铠位于盔甲架的头部插槽上
- 盔甲架用于默认静态项目。//todo：我很快就必须实现 MC 1.19.4+ 中的新替代显示系统，它效率更高。
- 为了避免与其他修改皮革马铠的插件发生冲突，FMM 使用从 50,000 开始的自定义模型数据值。

# 为 FreeMinecraftModels (FMM) 项目做出贡献

FMM 实际上由 [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy)
上的可爱的人们众筹！所有贡献都比您想象的更有帮助;)

# 目前计划的功能：

- 基岩版客户端 RSP 生成。
- 具有 Geyser 集成的服务器属性无关的 RSP 管理。
- 自定义实体（？）。
- tag_projectile 作为元骨骼，可以从中射出抛射物（每个模型可以有多个）。

# 当前需要修复的奇怪限制：

- 如果骨骼Blueprint的枢轴点（原点）设置为超过 67 左右，模型就会开始漂浮。
