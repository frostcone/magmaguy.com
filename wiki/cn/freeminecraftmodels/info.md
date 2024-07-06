# ***开始之前！***

FreeMinecraftModels (FMM) 目前处于 **alpha** 阶段！这意味着还有几个功能尚未完成，并且正在积极开发中。

但是，目前，该插件的核心功能已经完全可用 - 转换 bbmodel 文件、生成资源包、在游戏中生成实体和管理它们的动画都已正常工作，即使可能没有 100% 完善。

请考虑在 https://www.patreon.com/magmaguy 支持开发！

导出的资源包内容在 CC0 许可下获得许可，不保留任何权利。您可以自由地出于任何目的使用、分发、修改，不受任何限制或需要署名。

# 使用此插件

## FreeMinecraftModels (FMM) 可以为 Minecraft 服务器管理员做些什么？

它可以：

- 导入 .bbmodel 或 fmmodel（FFM 的自定义格式）模型
- 生成具有超过正常 Minecraft 资源包模型限制的模型的资源包（最多 ~~112x112x112~~ 106x106x106 个单位或 7x7x7 个游戏内方块）
- 通过使用命令 `/fmm spawn static <id>` 在游戏中显示这些模型，其中 id 是模型的文件名，小写且不带文件扩展名
- 在 Blockbench 中配置动画后，对这些模型进行动画处理
- 处理默认状态动画，无需其他插件（行走、空闲、死亡、攻击、生成）

### 如何添加现有模型？

要导入模型，只需将 .bbmodel 拖放到 imports 文件夹中，然后执行 `/fmm reload`。这将在 `models` 文件夹中生成一个 .fmmodel 文件，并将模型添加到 `outputs` 文件夹中的资源包中。

***您需要使用该资源包才能正确查看模型！*** 它是一个普通的资源包，因此您需要做的就是将其放入您的资源包文件夹中。Minecraft 服务器可以通过第三方服务（例如 Google 云端硬盘）或专门的服务（例如 https://resourcepack.host/）托管资源包，最后一个网站可能是最简单的方法。

### 如何在游戏中查看模型？

有两种（计划中的）模型类别。

- `静态` 模型用于不移动的模型（但可以具有动画），并且更像装饰 - 比如路灯或圣诞树。
- `动态` 模型用于像 Minecraft 怪物一样行为的模型，也就是说它们会四处移动并执行与怪物相关的各种行为。例如自定义 Boss 模型或向 Minecraft 添加全新的实体类型。

#### 在游戏中查看静态模型

要在游戏中查看静态模型，请使用命令 `/fmm spawn static <id>`，其中 id 是模型的文件名，小写且不带文件扩展名。

#### 在游戏中查看动态模型

要在游戏中查看动态模型，请使用命令 `/fmm spawn dynamic <id>`，其中 id 是模型的文件名，小写且不带文件扩展名。

## FreeMinecraftModels (FMM) 可以为建模师做些什么？

FMM 遵循用于生成资源包的标准资源包规则。此外，它尝试尽可能地与 ModelEngine 兼容的模型兼容，以便尝试在插件之间标准化模型创建。

### 模型生成功能/限制

如果您曾经为 ModelEngine 创建过模型，您将熟悉许多 Minecraft 资源包生成限制：

#### **立方体：**

这里的立方体与 Blockbench 中的立方体相同，它们是构成模型的立方体。

- 立方体最多可以有 ~~112x112x112~~ 106x106x106 个“像素”（Blockbench 单位）或 7x7x7 个游戏内方块（使用显示尺寸绕过正常的 Minecraft 限制，很快将通过显示实体进一步绕过 1.19.4+ 的限制）
- 立方体的合法旋转角度为 0、22.5、-22.5、45 和 -45。其他旋转角度无效。
- 立方体只能在一个轴上旋转，这意味着 [22.5, 0, 0] 的旋转是可以的，[22.5, 0, 45] 的旋转将无法完全工作，并且只能在一个轴上旋转。

#### **骨骼：**

骨骼是 Blockbench 中的“组”。它们用于将立方体组合在一起，并且应该用于将骨骼组合在一起以用于动画蓝图。

- 骨骼最多可以有 ~~112x112x112~~ 106x106x106 个（应该是 112，不知道为什么是这样）“像素”（Blockbench 单位）或 7x7x7 个游戏内方块。*请注意，骨骼的大小是由它们所拥有的东西决定的，因此如果您有超过 7 个方块间隔的立方体，您可能会超过此大小限制。绕过此限制就像将这些方块放入不包含在第一个骨骼蓝图中的不同骨骼蓝图中一样简单！*
- 可以有任何旋转！

骨骼比立方体灵活得多，但您应该尽可能少地使用骨骼！在 FMM 中，由于 Minecraft 的限制，每个骨骼蓝图都是一个不同的实体。从规模上来说，这会很快影响性能！始终尽可能少地使用骨骼，并注意您计划生成的模型数量 - 您计划拥有的模型越多，您应该拥有的骨骼就越少！

#### **虚拟骨骼**

如果您来自 ModelEngine，您可能想知道虚拟骨骼是否/如何在 FMM 中实现。虚拟骨骼已被标记，但目前除了非常基础的工作之外尚未实现。

但是，至少以下虚拟骨骼将很快与 FMM 兼容：

- 命中框/眼睛高度：一个名为“hitbox”的骨骼蓝图，带有一个定义边界的立方体蓝图，并且具有相同的 x 和 z 值（如果它们不同，将选择最大值）定义了命中框。眼睛高度设置在命中框的骨骼蓝图的枢轴点处。
- 名称标签：名称以“tag_”开头的骨骼蓝图。老实说，我更喜欢这里特定于模式，并使用“tag_name”以便将标签用于其他事物，但这将在以后认真考虑。

不能保证在不久的将来会添加任何其他虚拟骨骼蓝图功能。

## 合并资源包

在使用 FMM 时，您可能需要合并资源包。

您可以手动合并资源包，但我们建议使用在线工具（例如 [merge.elmakers](https://merge.elmakers.com/)）来合并您的资源包。

#### **更安全、更轻松、不可编辑的文件分发**

FMM 尝试解决的一件事是用户重新利用他们获得的模型以模型创建者不希望他们编辑的方式编辑它们，特别是为了重新着色或以其他方式稍微改变模型，并可能试图将其作为原创作品转售。

为此，FMM 使用 `.fmmodel` 文件格式，旨在将 `.bbmodel` 文件精简到可以被插件使用但不能在 Blockbench 中编辑的程度。

作为建模师，您现在可以选择是否要发布不可编辑的 `.fmmodel` 文件、可编辑的 `.bbmodel` 文件，甚至为两者执行差异定价或分发服务条款。

生成 `.fmmodel` 文件就像将您的 `.bbmodel` 文件放在 `~/plugins/FreeMinecraftModels/imports` 文件夹中
并使用 `/fmm reload` 重新加载插件或重新启动服务器一样简单。然后，您的 `.fmmodel` 文件将位于
`~/plugins/FreeMinecraftModels/models` 文件夹中。

## FreeMinecraftModels (FMM) 可以为希望将其集成到其插件中的开发者做些什么？

FMM 有一个 Maven 仓库！
Maven：

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

Gradle：

```kotlin
compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: '1.1.2-SNAPSHOT'
```

*注意 FreeMinecraftModels meant to be 用作 API，并且需要在服务器上安装该插件。不要将其打包到您的插件中！*

FMM 旨在尽可能轻松地用作 API。

现在，如果您希望将 FMM 用作插件的 API，您只需要了解一个类，那就是 `StaticEntity`。

以下是如何处理静态模型的代码片段：

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //创建模型
    public FreeMinecraftModelsModel(String id, Location location) {
        //这将生成实体！
        staticEntity = StaticEntity.create(id, location);
        //这将检查实体是否已正确生成
        if (staticEntity == null) Logger.warningMessage("FMM 无法找到名为 " + id + " 的模型！");
    }

    public void remove() {
        //这将移除实体
        staticEntity.remove();
    }
}
```

请记住，静态模型 meant to be 保持在原地并作为固定位置的装饰元素（这里的动画不算作“移动”）。虽然可以移动它们，但如果您打算这样做，请考虑是否应该改用动态模型。

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

动态模型构建在生物实体之上，可以在使用 create 方法（如上例所示）或在动态实体上运行 spawn 方法时提供。

虽然现在没有正式的 API 资源，但所有 meant to be 用于 API 的元素都包含在 ModeledEntity（所有实体的基类）、StaticEntity、DynamicEntity 和 ModeledEntityManager 中。99% 的开发者应该会在这三个类中找到他们需要的所有方法。

# 作为开发者为 FreeMinecraftModels (FMM) 项目做出贡献

FMM 在 GPLV3 许可下分发，欢迎代码贡献。以下是一些基本的贡献准则：

- 遵循现有的命名约定，保持现有的详细程度，并添加足够的文档以使您的贡献易于理解
- 使贡献与插件的范围相关。如果您不知道它是否相关，请随时提前询问。
- 注意您代码的性能影响。如果某些贡献的优化程度过低或对性能造成过大的影响，则可能会被拒绝。

## 插件大纲

为了节省您一些时间，以下是对 FMM 逻辑流程的快速细分：

1) 读取 `imports` 文件夹
2) 将文件从 `imports` 文件夹移动到 `models` 文件夹。如果文件是 `.bbmodel`，它会在 models 文件夹中转换为 `.fmmodel`。
3) 读取 `models` 文件夹中的文件。
4) 解释所有模型结构，创建包含 `Bone` 组的 `Skeleton`，这些骨骼包含子 `Bone` 和 `Cube` 组。`Cube` 和 `Bone` 生成它们各自相关的 JSON 资源包数据。这意味着 `Cube` 生成特定于立方体的 JSON，而 `Bone` 生成轮廓和单个骨骼蓝图文件。请注意，一个骨骼蓝图会生成一个资源包文件。生成模型时，会将它们添加到列表中。
5) 仍在 `Skeleton` 中，解释模型中的所有 `Animations`（如果有）
6) 现在所有数据都已初始化，资源包已在 `outputs` 文件夹中生成，插件已准备好使用。

## 此插件中使用的技巧：

这里使用的技巧相当成熟和标准化，但仍然会列出，因为它们可能违反直觉。

请注意，这些技巧对用户和模型制作者来说是完全不可见的；限制和解决方法仅列出是为了帮助您了解 FMM 如何绕过各种 Minecraft 限制。

- 所有模型都被放大 4 倍，然后在代码中重新调整大小和枢轴点，以便扩展模型的理论最大尺寸。
- 因为资源包模型只能使模型的尺寸从 -16 到 +32，所以模型在后台进行了移位。这对玩家来说是完全不可见的。
- 皮革马盔甲用于创建可以通过代码影响色调的模型（即用于伤害指示）。马盔甲必须设置为白色才能显示正确的颜色！
- Blockbench 使用特定的纹理 ID 系统，但实际上是从配置中按顺序读取纹理。ID 在此处根据它们在纹理列表中的位置进行分配，遵循 Blockbench 的方式。
- 由于 Minecraft 的限制，每个骨骼蓝图都是一个不同的盔甲架实体。
- 皮革马盔甲位于盔甲架的头部插槽上
- 盔甲架用于默认的静态物品。 //todo：很快我将不得不实现 MC 1.19.4+ 中的新替代显示系统，它的效率更高。
- 为了避免与修改皮革马盔甲的其他插件冲突，FMM 使用从 50,000 开始的自定义模型数据值。

# 总体而言，为 FreeMinecraftModels (FMM) 项目做出贡献

FMM 实际上是由 https://www.patreon.com/magmaguy 上的可爱人们众筹的！所有贡献都比您想象的更有帮助 ;)

# 当前计划的功能：
- 基岩版客户端 RSP 生成。
- 与 Geyser 集成的独立于服务器属性的 RSP 管理。
- 自定义实体（？）。
- tag_projectile 作为元骨骼，可以从中发射抛射物（每个模型可以有多个）。

# 当前需要修复的奇怪限制：
- 如果骨骼蓝图的枢轴点（原点）设置为超过 67 左右，则模型会开始漂浮。



