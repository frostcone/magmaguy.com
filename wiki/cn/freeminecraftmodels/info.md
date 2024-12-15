# ***开始之前！***

FreeMinecraftModels (FMM) 目前处于 **alpha** 阶段！这意味着一些功能尚未完成，并且正在积极开发中。

但是，目前插件的核心功能已完全正常运行 - 转换 bbmodel 文件、生成资源包、在游戏中生成实体以及管理它们的动画都在工作，尽管可能不是 100% 精雕细琢。

请考虑在 https://www.patreon.com/magmaguy 支持开发！

导出的资源包内容在 CC0 许可下获得许可，不保留任何权利。您可以自由地使用、分发、修改用于任何目的，不受限制或无需署名。

# 使用此插件

## FreeMinecraftModels (FMM) 可以为 Minecraft 服务器管理员做些什么？

它可以：

- 导入 .bbmodel 或 fmmodel（FMM 的自定义格式）模型
- 生成具有超过普通 Minecraft 资源包模型限制的模型（高达 ~~112x112x112~~
  106x106x106 单位或 7x7x7 个游戏方块）的资源包
- 通过使用命令 `/fmm spawn static <id>` 在游戏中显示这些模型，其中 id 是模型的​​文件名，小写且不带文件扩展名
- 按照在 Blockbench 中配置的方式为这些模型设置动画
- 无需其他插件即可处理默认状态动画（行走、空闲、死亡、攻击、生成）

### 如何添加现有模型？

要导入模型，只需将 .bbmodel 拖到 imports 文件夹并执行 `/fmm reload`。这将在 `models` 文件夹中生成一个 .fmmodel 文件，并将模型添加到 `outputs` 文件夹中的资源包中。

***您需要使用该资源包才能正确查看模型！*** 这是一个普通的资源包，因此您所需要做的就是将其放入您的资源包文件夹中。Minecraft 服务器可以在第三方服务（如 Google 云端硬盘）或专门的服务（如 https://resourcepack.host/）上托管资源包，最后一个网站可能是最简单的方式。

### 如何在游戏中查看模型？

有两种（计划的）模型类别。

- `静态`模型用于不移动（但可以有动画）的模型，更像是装饰品 - 想想类似于路灯或圣诞树的东西。
- `动态`模型用于行为类似于 Minecraft 生物的模型，也就是说，它们会四处移动并执行与生物相关的各种行为。想想类似于自定义 Boss 模型或向 Minecraft 添加全新实体类型的东西。

#### 在游戏中查看静态模型

要在游戏中查看静态模型，请使用命令 `/fmm spawn static <id>`，其中 id 是模型的​​文件名，小写且不带文件扩展名。

#### 在游戏中查看动态模型

要在游戏中查看动态模型，请使用命令 `/fmm spawn dynamic <id>`，其中 id 是模型的​​文件名，小写且不带文件扩展名。

## FreeMinecraftModels (FMM) 可以为建模者做些什么？

FMM 遵循资源包生成标准的资源包规则。此外，它会尽量与 ModelEngine 兼容的模型兼容，以便尝试标准化插件中的模型创建。

### 模型生成功能/限制

如果您曾经为 ModelEngine 创建过模型，您将熟悉许多 Minecraft 资源包生成限制：

#### **立方体：**

立方体在这里与 Blockbench 中的立方体相同，它们是构成模型的立方体。

- 立方体可以达到 ~~112x112x112~~ 106x106x106“像素”（Blockbench 单位）或 7x7x7 个游戏方块（使用显示大小绕过正常的 Minecraft
  限制，感谢显示实体，很快将进一步绕过 1.19.4+ 的限制）
- 立方体的合法旋转为 0、22.5、-22.5、45 和 -45。没有其他旋转有效。
- 立方体仅在一个轴上旋转，这意味着 [22.5, 0, 0] 的旋转可以，[22.5, 0, 45] 的旋转将无法完全工作，并且仅在一个轴上旋转。

#### **骨骼：**

骨骼是 Blockbench 称为“组”的。它们用于将立方体组合在一起，并且应该用于将骨骼组合在一起以进行动画蓝图。

- 骨骼可以达到 ~~112x112x112~~ 106x106x106（应该是 112，不确定为什么是这样）“像素”（Blockbench 单位）或
  7x7x7 个游戏方块。*请注意，骨骼的大小由它们拥有的东西设置，因此，如果您拥有的立方体之间的距离超过 7 个方块，则可能会超过此大小限制。绕过此限制就像将方块放在第一个骨骼蓝图中未包含的其他骨骼蓝图中一样简单！*
- 可以有任何旋转！

骨骼比立方体灵活得多，但您应该尽可能少地使用骨骼！在 FMM 中，由于 Minecraft 的限制，每个骨骼蓝图都是一个不同的实体。从规模上讲，这将很快影响性能！始终尽可能少地使用骨骼，并注意您计划生成多少个该模型 - 您计划拥有的越多，您应该拥有的骨骼就越少！

#### **虚拟骨骼**

如果您来自 ModelEngine，您可能想知道 FMM 中是否/如何实现虚拟骨骼。虚拟骨骼已被标记，但目前尚未实现超出非常基础的工作之外的实现。

但是，至少以下虚拟骨骼将很快与 FMM 兼容：

- 碰撞箱/视线高度：一个名为“hitbox”的骨骼蓝图，其中包含一个定义边界的立方体蓝图，并且具有相同的 x 和 z 值（如果它们不相同，则会选择最大的值）定义碰撞箱。视线高度设置在碰撞箱骨骼蓝图的支点处。
- 名称标签：名称以“tag_”开头的骨骼蓝图。老实说，我更喜欢在这里使用特定模式并使用“tag_name”以便将标签用于其他事情，但这将在稍后认真考虑。

不保证在不久的将来添加其他虚拟骨骼蓝图功能。

## 合并资源包

在使用 FMM 时，您可能需要合并资源包。

您可以手动合并资源包，但我们建议使用在线工具（如 [merge.elmakers](https://merge.elmakers.com/)）来合并您的资源包。

#### **更安全、更简单、不可编辑的文件分发**

FMM 尝试解决的一个问题是，用户重新利用他们获得的模型，以模型创建者不希望他们编辑的方式进行编辑，特别是为了重新着色或以其他方式稍微更改模型，并可能尝试将其作为原创作品转售。

为此，FMM 使用 `.fmmodel` 文件格式，该格式旨在将 `.bbmodel` 文件精简到可供插件使用但无法在 Blockbench 中编辑的程度。

作为建模者，您现在可以选择是否要发布不可编辑的 `.fmmodel` 文件、可编辑的 `.bbmodel` 文件，甚至对这两者进行差异化定价或分发服务条款。

生成 `.fmmodel` 就像将您的 `.bbmodel` 放入 `~/plugins/FreeMinecraftModels/imports` 文件夹中，并通过 `/fmm reload` 重新加载插件或重新启动服务器一样简单。您的 `.fmmodel` 将位于 `~/plugins/FreeMinecraftModels/models` 文件夹中。

## FreeMinecraftModels (FMM) 可以为希望将其集成到其插件中的开发人员做些什么？

FMM 有一个 maven 仓库！
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

*注意 FreeMinecraftModels 旨在用作 API，并且需要在服务器上安装插件。请不要将其着色到您的插件中！*

FMM 旨在尽可能轻松地用作 API。

现在，如果您希望将 FMM 用作插件的 API，则只需要了解一个类，那就是 `StaticEntity`。

以下是处理静态模型的代码片段：

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //创建模型
    public FreeMinecraftModelsModel(String id, Location location) {
        //这会生成实体！
        staticEntity = StaticEntity.create(id, location);
        //这会检查实体是否正确生成
        if (staticEntity == null) Logger.warningMessage("FMM 未能找到名为 " + id + " 的模型！");
    }

    public void remove() {
        //这会移除实体
        staticEntity.remove();
    }
}
```

请记住，静态模型旨在保持在原位并充当固定位置的装饰元素（动画不在此处算作“移动”）。虽然可以移动它们，但如果这是您的目的，请考虑是否可能希望改为使用动态模型。

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

动态模型构建在生物实体的基础上，可以在使用 create 方法（如上面的示例）时提供该实体，也可以在动态实体上运行 spawn 方法时提供该实体。

虽然现在没有正式的 API 资源，但所有用于 API 的元素都包含在 ModeledEntity（所有实体的基类）、StaticEntity、DynamicEntity 和 ModeledEntityManager 中。99% 的开发人员应该会发现他们需要的所有方法都分散在这三个类中。

# 作为开发人员为 FreeMinecraftModels (FMM) 项目做贡献

FMM 在 GPLV3 许可下分发，欢迎代码贡献。以下是基本的贡献指南：

- 遵循现有的命名约定，保持现有的详细程度，并添加足够的文档，以便您的贡献易于理解
- 使贡献与插件的范围相关。如果您不知道它是否相关，请随时提前询问。
- 注意代码的性能影响。如果某些贡献过于未经优化或以其他方式导致过大的性能影响，则可能会被拒绝。

## 插件总体纲要

为了节省您的一些时间，以下是 FMM 的逻辑流程的快速分解：

1) 读取 `imports` 文件夹
2) 将文件从 `imports` 文件夹移动到 `models` 文件夹。如果文件是 `.bbmodel`，则会在 models 文件夹中将其转换为 `.fmmodel`。
3) 读取 `models` 文件夹中的文件。
4) 解释所有模型结构，创建包含 `Bone` 组的 `Skeleton`，这些骨骼包含子 `Bone` 和 `Cube` 组。`Cube` 和 `Bone` 生成它们各自相关的 JSON 资源包数据。这意味着 `Cube` 生成特定于立方体的 JSON，`Bone` 生成轮廓和单个骨骼蓝图文件。请注意，一个骨骼蓝图会导致一个资源包文件。模型在生成时被添加到列表中。
5) 仍然在 `Skeleton` 中，解释模型中的所有 `Animations`（如果有）。
6) 现在已初始化所有数据，资源包已在 `outputs` 文件夹中生成，并且插件已准备好使用。

## 此插件中使用的技巧：

这里使用的技巧是相当成熟和标准化的，但为了它们可能违反直觉，仍然会列出它们。

请注意，这些技巧对于用户和模型制作者来说都是完全不可见的；列出的限制和解决方法仅是为了帮助您了解 FMM 如何绕过各种 Minecraft 限制。

- 所有模型都放大 4 倍，然后在代码中重新调整大小和支点，以便扩展模型的理论最大大小。
- 由于资源包模型只能将模型的大小从 -16 调整到 +32，因此模型会在后台移动。这对玩家是完全不可见的。
- 皮马盔甲用于创建可以通过代码影响色调的模型（例如，用于损坏指示）。必须将马盔甲设置为白色才能显示正确的颜色！
- Blockbench 为纹理使用特定的 ID 系统，但实际上会从配置中按顺序读取纹理。ID 在这里根据它们在纹理列表中的位置分配，遵循 Blockbench 的方式。
- 由于 Minecraft 的限制，每个骨骼蓝图都是不同的盔甲架实体。
- 皮马盔甲在盔甲架的头部槽上
- 盔甲架用于默认的静态物品。 //待办事项：我很快将必须实现 MC 1.19.4+ 中的新替代显示系统，它效率更高。
- 为了避免与其他修改皮马盔甲的插件发生冲突，FMM 使用从 50,000 开始的自定义模型数据值。

# 一般来说，为 FreeMinecraftModels (FMM) 项目做出贡献

FMM 实际上由 [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy) 上的可爱的人们众筹！所有贡献的帮助都超出您的想象 ;)

# 当前计划的功能：
- 基岩客户端 RSP 生成。
- 具有 Geyser 集成的服务器属性无关的 RSP 管理。
- 自定义实体（？）。
- tag_projectile 作为可以从中射出投射物的元骨骼（每个模型可以有多个）。

# 当前需要修复的奇怪限制：
- 如果骨骼蓝图的支点（原点）设置为超过 67 左右，模型会开始漂浮。
