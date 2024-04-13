# ***在开始之前！***

FreeMinecraftModels（FMM）当前处于**alpha**阶段！这意味着许多功能还没有完成，我们正在积极进行开发工作。

然而，此刻，插件的核心功能已经完全功能正常 - 转换 bbmodel 文件，生成资源包，游戏中生成实体以及管理他们的动画都已经在工作，即使这些工作可能并不100%完善。

请考虑在 https://www.patreon.com/magmaguy 上支持开发！

导出的资源包内容根据CC0许可证许可，不保留任何权利。您有权使用、分发、修改用于任何目的，无需任何限制或归属需求。

# 使用此插件

## FreeMinecraftModels（FMM）可以为Minecraft服务器管理员做什么？

它可以：

- 导入 .bbmodel 或 fmmodel（FFM的自定义格式）模型
- 生成超出正常Minecraft资源包模型限制的模型的资源包（最高~~112x112x112~~ 106x106x106 单位或7x7x7的游戏方块）
- 通过命令`/fmm spawn static <id>`在游戏中显示这些模型，其中id是模型的文件名，以小写字母且不加文件扩展名
- 就像在Blockbench中配置的那样，使这些模型动画化
- 无需其他插件即可处理默认状态动画（行走，静止，死亡，攻击，生成）

### 如何添加现有模型？

要导入模型，只需将.bbmodel文件拖到imports文件夹中，然后执行`/fmm reload` 命令。这将在`models`文件夹中生成一个.fmmodel文件，并将模型添加到`outputs`文件夹中的资源包。

***您需要使用该资源包以正确查看模型！***这是一个普通的资源包，您需要做的只是将其放入您的资源包文件夹中。Minecraft服务器有一种方法可以在第三方服务上托管资源包，比如google drive或者一个像https://resourcepack.host/这样的专门服务，这最后一个网站可能是执行这项操作的最简单方法。

### 如何在游戏中查看模型？

有两个（计划中的）模型类别。

- `静态`模型是指那些不移动的模型（但可以有动画），并且更像装饰性的 - 想想像是路灯或者圣诞树这样的东西。
- `动态`模型适用于像Minecraft生物一样行为的模型，也就是说他们会移动并做各种与生物相关的行为。想想像自定义的boss模型或在Minecraft中添加全新种类的实体这样的事情。

#### 在游戏中查看静态模型

要在游戏中查看静态模型，使用命令`/fmm spawn static <id>` ，其中id是模型的文件名，以小写字母并且没有文件扩展名。

#### 在游戏中查看动态模型

要在游戏中查看动态模型，使用命令 `/fmm spawn dynamic <id>` ，其中id是模型的文件名，以小写字母并且没有文件扩展名。

## FreeMinecraftModels（FMM）可以为模型师做什么？

FMM遵循生成资源包的标准资源包规则。此外，它尽量保持与ModelEngine兼容的模型的兼容性，以尽量使插件间的模型创建标准化。

### 模型生成特性 / 限制

如果您曾经为ModelEngine创建过模型，那么您将对Minecraft资源包生成的许多限制非常熟悉：

#### **立方体：**

这里的立方体与Blockbench中的立方体相同，它们构成了模型。

- 立方体最大可达到~~112x112x112~~ 106x106x106 "像素"（Blockbench单位）或在游戏中的7x7x7方块（使用显示大小突破了正常的Minecraft限制，1.19.4+ 版本即将进一步突破这一限制，这要归功于显示实体）
- 立方体的合法旋转角度是0，22.5，-22.5，45和-45。其他任何旋转角度都无法使用。
- 立方体只能在一个轴上旋转，这意味着一个[22.5，0，0]的旋转是粗糙的，一个[22.5，0，45]的旋转将无法完全工作并且仅在一个轴上旋转。

#### **骨骼：**

Blockbench称之为“组”的东西在这里被称为骨骼。他们的作用是将立方体组合在一起，并应该用来将骨骼结合在一起以进行动画Blueprint。

- 骨骼最大可以达到 ~~112x112x112~~ 106x106x106（应该是112，不清楚为什么会这样）"像素"（Blockbench单位）或
  7x7x7个在游戏中的方块。*注意，骨骼的大小是通过他们所拥有的内容设置的，所以如果你有超过7个方块的立方体，
  你很可能会超出这个大小限制。突破这条限制就像把方块放入不在第一个骨骼中的另一个骨骼中一样简单!*
- 可以有任何旋转角度！

骨骼比立方体要灵活许多，但是应该尽可能少使用骨骼！在FMM中，由于Minecraft的限制，每个骨骼都是一个不同的实体。在一定规模下，这将很快影响性能！总是尽可能用少的骨骼，留意你打算生成多少个模型 - 你计划拥有的越多，你应该拥有的骨骼越少！

#### **虚拟骨骼**

如果你来自ModelEngine，你可能想知道FMM如何/是否实现虚拟骨骼。虚拟骨骼已经被标记，但目前除了非常基本的基础工作之外没有实施。

然而，至少有以下的虚拟骨骼很快就会与FMM兼容：

- 碰撞箱 / 视线高度:名为"hitbox"的骨骼，带有定义边界的立方体，并且x和z值相同(如果它们不同，将选取较大的值)定义了碰撞箱。眼睛的高度设置在碰撞箱的骨骼的枢轴点处。
- 名牌:名字以"tag_"开头的骨骼。说实话我更愿意在这里设置模式特定的东西，比如"tag_name"，以便使用标签做其他事情，但这将会在以后严重考虑。

未来没有其他任何虚拟骨骼特性将被保证在短期内添加。

## 合并资源包

在使用FMM时，你可能需要合并资源包。

你可以手动合并资源包，但我们建议使用像[merge.elmakers](https://merge.elmakers.com/)这样的在线工具来合并你的资源包。

#### **更安全，更容易，无法编辑的文件分发**

FMM尝试解决的一个问题是用户重新使用他们获取的模型以以模型创建者不希望的方式编辑它们，具体来说，是为了重新设置或以其他方式稍微修改一个模型并尝试将其作为原创作品出售。

为此，FMM使用`.fmmodel`文件格式，该格式旨在将`.bbmodel`文件剥离到可以由插件使用但不能在Blockbench中编辑的程度。

作为模型师，你现在有了选择是否你想要发布一个无法编辑的`.fmmodel`文件，一个可编辑的`.bbmodel`文件，甚至可以为这两者制定差异化的定价或分发服务条款。

生成一个`.fmmodel`就像把你的`.bbmodel`放在`~/plugins/FreeMinecraftModels/imports`文件夹中，然后用`/fmm reload`命令重载插件或重启服务器一样简单。你的`.fmmodel`将会在
`~/plugins/FreeMinecraftModels/models` 文件夹中。

## 对于想在他们的插件中集成的开发者，FreeMinecraftModels（FMM）可以做什么？

FMM有一个maven仓库！
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

*注意FreeMinecraftModels旨在作为一个API使用，并且需要在服务器上安装插件。不要将其遮蔽到你的插件中！*

FMM旨在尽可能容易地使用API。

现在，如果你希望将FMM作为你插件的API，你只需要知道一个类，那就是`StaticEntity`。

这有一段处理静态模型的片段：

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    // 创建模型
    public FreeMinecraftModelsModel(String id, Location location) {
        // 这个命令生成实体！
        staticEntity = StaticEntity.create(id, location);
        // 这个命令检查实体是否正确生成
        if (staticEntity == null) Logger.warningMessage("FMM failed to find a model named " + id + " !");
    }

    public void remove() {
        //这个命令移除实体
        staticEntity.remove();
    }
}
```

请记住静态模型是要在固定位置放置和充当固定位置的装饰元素（‘动画’在这不算‘移动’）。虽然它们是有可能移动的，考虑一下如果移动是你的目标是否你可能会更想使用动态模型。

这个是EliteMobs，我的自定义boss插件，如何使用动态实体的方法：

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

动态模型是建立在一个活动实体的基础之上，可以在使用上面示例中的创建方法时提供，或在运行动态实体的生成方法时提供。

虽然现在还没有正式的API资源，但所有用于API使用的元素都包含在ModeledEntity（所有实体的基类），StaticEntity，DynamicEntity和ModeledEntityManager中。99%的开发者应该能在这三个类中找到他们需要的所有方法。

# 作为开发者对FreeMinecraftModels（FMM）项目做出贡献

FMM是在GPLV3许可证下分发的，欢迎提供代码贡献。以下是基本贡献准则：

- 遵循现有的命名约定，保持现有的详细程度并添加足够的文档使你的贡献易于理解
- 保持贡献与插件的范围相关。如果你不知道它是否会相关，随时可以提前询问。
- 注意你的代码对性能的影响。一些贡献可能会被拒绝，如果他们过于不优化或者其他方式太大的影响性能。

## 插件总的概览

为了节省你的时间，这是FMM的逻辑流程的快速概述：

1) 读取`imports`文件夹
2) 将文件从`imports`文件夹移动到`models`文件夹。如果文件是`.bbmodel`，则在模型文件夹中转换为`.fmmodel`。
3) 读取`models`文件夹中的文件。
4) 解释所有模型结构，创建包含`Bone`组的`Skeleton`，这些骨骼包含子`Bone`和`Cube`的组。`Cube`和`Bone`生成与它们每个相关的JSON资源包数据。这意味着`Cube`生成特定于立方体的JSON，而`Bone`生成大纲和单个骨图的文件。注意，一个骨图的结果是一个资源包文件。模型在生成时被添加到一个列表中。
5) 在`Skeleton`中，如果有`Animations`，解释模型中的所有动画
6) 所有数据现在已经初始化，资源包在`outputs`文件夹中生成，插件准备好被使用。

## 在此插件中使用的技巧:

这里使用的技巧都是经过深入研究和标准化的，但由于可能与直觉相反，仍将予以列出。

请注意，这些技巧对于用户和模型制造者来说都是完全不可见的；限制和变通的唯一目的是帮助您理解FMM如何绕过各种Minecraft的限制。

- 所有模型都先放大4倍，然后在代码中重新调整大小和轴心点，以扩展模型的理论最大尺寸。
- 由于资源包模型只能让模型从-16到+32大小，模型在后台移位。这对玩家来说是完全不可见的。
- 用皮马甲做模型，可以通过代码影响色调（例如，表示伤害）。马甲必须设为白色才能显示正确的颜色！
- Blockbench使用了特定的纹理ID系统，但实际上是从配置中按顺序读取纹理。在此处，根据Blockbench的方式，根据纹理在纹理列表中的位置分配ID。
- 每个骨骼图都是一个不同的盔甲架实体，因为Minecraft的限制。
- 皮马甲在盔甲架的头插槽上
- 盔甲架用于默认的静态物品。//todo: 很快我就必须实现MC 1.19.4+的新替代显示
  系统，它更有效率。
- 为避免与其他修改皮马甲的插件冲突，FMM使用自定义模型数据值，开始于
  50,000。

# 为FreeMinecraftModels (FMM)项目做出贡献

FMM实际上是由[https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy)上的可爱人们众筹的！所有的贡献都比你想象的帮助大；)

# 当前计划的功能:
- 贝德洛克客户端RSP生成。
- 与服务器属性独立的RSP管理，具有geyser集成。
- 自定义实体(?)。
- tag_projectile作为元骨骼，从其中可以发射射弹(can have more than one per model)。

# 当前需要解决的奇怪限制：
- 如果骨骼图的枢轴点（原点）设置为超过67左右，模型会开始浮动。