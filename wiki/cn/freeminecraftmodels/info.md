好的，这是将您输入的文本翻译成简体中文并保留 Markdown 格式的结果：

# ***开始之前！***

FreeMinecraftModels (FMM) 目前正处于**积极开发中**！这意味着一些功能尚未完成，并且正在积极开发中。

然而，目前插件的核心功能已完全可用——转换 bbmodel 文件、生成资源包、在游戏内生成实体并管理其动画、放置持久性道具的能力，这些大部分都已正常工作。

考虑在 https://www.patreon.com/magmaguy 支持开发！

导出的资源包内容在 FreeMinecraftModels 端根据 CC0 许可授权，不保留任何权利。您可以自由使用、分发、修改，用于任何目的，不受限制，也无需署名。

# 使用此插件

## FreeMinecraftModels (FMM) 能为 Minecraft 服务器管理员做什么？

它可以：

- 导入 .bbmodel 或 .fmmodel (FMM 的自定义格式) 模型
- 生成包含超出普通 Minecraft 资源包模型限制的模型（最大可达 112x112x112 单位或游戏内 7x7x7 方块，使用多个骨骼时功能上不受限制）的资源包
- 在游戏内显示这些模型，向基岩版客户端发送特定的基岩版兼容数据包，同时向 1.19.4+ Java 版客户端发送显示实体
- 按照在 Blockbench 中配置的方式为这些模型添加动画
- 处理默认状态动画，无需其他插件（行走、待机、死亡、攻击、生成）
- 处理随底层实体旋转且具有不同 x 和 z 轴的碰撞箱
- 管理三种类型的模型：静态模型 (static)、动态模型 (dynamic) 和道具模型 (props)
    - 道具模型是持久性的，可以放置在世界中，即使服务器重启也会保留，并且可以将包含道具模型的地图分发给其他服务器
    - 动态模型适用于需要底层生物实体才能运行的模型，非常适合用于自定义 Boss 插件或宠物插件
    - 静态模型适用于不持久且不应移动的模型，基本上是临时的装饰或效果

### 如何添加现有模型？

要导入模型，只需将 .bbmodel 文件拖到 imports 文件夹中，然后执行 `/fmm reload` 命令。这将在 `models` 文件夹中生成一个 .fmmodel 文件，并将模型添加到 `outputs` 文件夹中的资源包里。

***您需要使用该资源包才能正确查看模型！*** 这是一个普通的资源包，所以您只需将其放入您的资源包文件夹即可。Minecraft 服务器有托管资源包的方式。我推荐使用我的插件 [ResourcePackManager](https://www.spigotmc.org/resources/resource-pack-manager.118574/)，它可以自动抓取文件并为您远程托管，甚至可以与其他插件的文件合并。

### 如何在游戏内查看模型？

需要注意的是，虽然 FreeMinecraftModels 可以作为独立插件用于查看道具模型（基本上是可以放置在世界中的自定义模型），但当与 [EliteMobs](https://www.spigotmc.org/resources/elitemobs.40090/) 等插件搭配使用时，插件通常能发挥最佳效果，因为模型在这种情况下被积极用于具体用途，例如 Boss 战。

有三种类型的模型：静态模型 (static)、动态模型 (dynamic) 和道具模型 (props)。
- 道具模型是持久性的，可以放置在世界中，即使服务器重启也会保留，并且可以将包含道具模型的地图分发给其他服务器
- 动态模型适用于需要底层生物实体才能运行的模型，非常适合用于自定义 Boss 插件或宠物插件
- 静态模型适用于不持久且不应移动的模型，基本上是临时的装饰或效果

#### 在游戏内查看静态模型

要在游戏内查看静态模型，请使用命令 `/fmm spawn static <id>`，其中 id 是模型的文件名，小写且不带文件扩展名。

#### 在游戏内查看动态模型

要在游戏内查看动态模型，请使用命令 `/fmm spawn dynamic <id>`，其中 id 是模型的文件名，小写且不带文件扩展名。

#### 在游戏内查看道具模型

要在游戏内查看道具模型，请使用命令 `/fmm spawn prop <id>`，其中 id 是模型的文件名，小写且不带文件扩展名。

## FreeMinecraftModels (FMM) 能为模型制作者做什么？

FMM 遵循标准的资源包规则来生成资源包。此外，它尽量与 ModelEngine 兼容的模型保持兼容，以尝试在不同插件之间标准化模型创建。

### 模型生成特性 / 限制

如果您曾经为 ModelEngine 创建过模型，您将熟悉许多 Minecraft 资源包生成限制：

#### **方块 (Cubes)：**

这里的方块与 Blockbench 中的相同，它们是构成模型的方块。

- 方块最大可达 112x112x112 “像素”（Blockbench 单位）或游戏内 7x7x7 方块（使用显示尺寸绕过了普通 Minecraft 限制，对于 1.19.4+ 版本很快将通过显示实体进一步绕过）
- 方块的合法旋转角度为 0、22.5、-22.5、45 和 -45。其他旋转角度无效。
- 方块只能沿一个轴旋转，这意味着 [22.5, 0, 0] 的旋转是有效的，而 [22.5, 0, 45] 的旋转将无法完全工作，只能沿一个轴旋转。

#### **骨骼 (Bones)：**

骨骼是 Blockbench 中称为“组”的东西。它们用于将方块组合在一起，并且应该用于将骨骼组合在一起以进行动画。

- 骨骼最大可达 112x112x112 “像素”（Blockbench 单位）或游戏内 7x7x7 方块。*请注意，骨骼的大小由其包含的内容决定，因此如果您的方块相距超过 7 个方块，您可能会超出此大小限制。绕过此限制就像将方块放入不包含在第一个骨骼中的另一个骨骼一样简单！*
- 可以有任何旋转！但是，建议避免使用 90、-90、180 和 -180 的默认旋转，因为这些角度通常会导致意外行为。请注意，这并不真正适用于动画，仅适用于骨骼的默认静止位置。

骨骼比方块灵活得多，但您应该尽可能少地使用骨骼！在 FMM 中，由于 Minecraft 的限制，每个骨骼都是一个不同的实体。大规模使用时，这会很快影响性能！始终尽可能少地使用骨骼，并注意您计划生成多少个该模型——您计划拥有的模型越多，您应该拥有的骨骼就越少！

#### **虚拟骨骼 (Virtual Bones)**

虚拟骨骼是模型引擎的术语，指具有特定元数据（通常以特定名称的形式）的骨骼，用于特定目的。

FreeMinecraftModels 中已实现以下虚拟骨骼：

- 碰撞箱 / 眼睛高度：一个名为“hitbox”的骨骼，带有一个定义边界的方块，并且具有相同的 x 和 z 值（如果不同则选择最大值）定义了碰撞箱。眼睛高度设置在碰撞箱骨骼的轴心点。
- 命名牌：名称以“tag_”开头的骨骼。老实说，我更倾向于在此处更具体，使用“tag_name”，以便将标签用于其他用途，但这将在以后认真考虑。
- 头部：名称以 h_ 开头的骨骼。这是一个虚拟骨骼，用于定义模型的头部，该头部将根据底层实体的头部旋转而旋转。

#### **更安全、更简单、不可编辑的文件分发**

FMM 试图解决的一个问题是用户将获得的模型重新用于模型创建者不希望他们编辑的方式，特别是为了重新贴图或以其他方式轻微修改模型，并可能试图作为原创作品转售。

为此，FMM 使用 `.fmmodel` 文件格式，旨在将 `.bbmodel` 文件精简到插件可以使用但无法在 Blockbench 中编辑的程度。

作为模型制作者，您现在可以选择是发布不可编辑的 `.fmmodel` 文件、可编辑的 `.bbmodel` 文件，甚至可以对两者采用不同的定价或分发条款。

生成 `.fmmodel` 文件非常简单，只需将您的 `.bbmodel` 文件放入 `~/plugins/FreeMinecraftModels/imports` 文件夹，然后使用 `/fmm reload` 命令重新加载插件或重启服务器即可。您的 `.fmmodel` 文件随后将位于 `~/plugins/FreeMinecraftModels/models` 文件夹中。

## FreeMinecraftModels (FMM) 能为希望将其集成到插件中的开发者做什么？

FMM 有一个 Maven 仓库！
Maven：

```xml
<repository>
    <id>magmaguy-repo-releases</id>
    <name>MagmaGuy's Repository</name>
    <url>https://repo.magmaguy.com/releases</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>LATEST.VERSION.HERE</version>
</dependency>
```

Gradle：

```kotlin
maven {
    name = "magmaguyRepoReleases"
    url = uri("https://repo.magmaguy.com/releases")
}

compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: 'LATEST.VERSION.HERE'
```

*注意 FreeMinecraftModels 旨在用作 API，需要在服务器上安装插件。请勿将其打包到您的插件中！*

## API 使用

FMM 旨在尽可能易于用作 API。

目前，如果您希望将 FreeMinecraftModels 用作 API 以访问自定义模型，您只需要了解以下四个类：

- `ModeledEntity` - 所有实体的基类
- `StaticEntity` - 用于您希望使用非永久性静态模型时
- `DynamicEntity` - 用于您希望用模型伪装另一个生物实体时
- `PropEntity` - 用于您希望在世界中放置一个即使服务器重启也会保留的模型时

以下是处理静态模型的代码片段：

```java
import org.bukkit.Bukkit;

public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Create the model
    public FreeMinecraftModelsModel(String id, Location location) {
        //This spawns the entity!
        staticEntity = StaticEntity.create(id, location);
        //This checks if the entity spawned correctly
        if (staticEntity == null) Bukkit.getLogger().warning(("FMM failed to find a model named " + id + " !"));
    }

    public void remove() {
        //This removes the entity
        staticEntity.remove();
    }
}
```

请记住，静态模型旨在保持在原地，并作为固定位置的装饰元素（动画在此处不计为“移动”）。虽然可以移动它们，但如果这是您的目的，请考虑是否应该使用动态模型。

以下是我的自定义 Boss 插件 EliteMobs 如何使用动态实体：

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import api.com.magmaguy.freeminecraftmodels.ModeledEntityManager;
import customentity.com.magmaguy.freeminecraftmodels.DynamicEntity;
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

动态模型构建在生物实体之上，可以在使用上面的示例中的 create 方法时提供，或者在 Dynamic 实体上运行 spawn 方法时提供。

# 作为开发者为 FreeMinecraftModels (FMM) 项目贡献代码

FMM 根据 GPLV3 许可分发，欢迎代码贡献。以下是基本的贡献指南：

- 遵循现有的命名约定，保持现有的详细程度，并添加足够的文档，使您的贡献易于理解
- 保持贡献与插件范围相关。如果您不确定是否相关，请随时提前询问。
- 注意您的代码对性能的影响。如果某些贡献优化不足或对性能影响过大，可能会被拒绝。

## 插件总体概述

为了节省您的时间，以下是 FMM 逻辑流程的快速分解：

1) 读取 `imports` 文件夹
2) 将文件从 `imports` 文件夹移动到 `models` 文件夹。如果文件是 `.bbmodel`，它将在 `models` 文件夹中转换为 `.fmmodel`。
3) 读取 `models` 文件夹中的文件。
4) 解析所有模型结构，创建包含 `Bone` 组的 `Skeleton`，这些骨骼包含子 `Bone` 和 `Cube` 组。`Cube` 和 `Bone` 生成各自相关的 JSON 资源包数据。这意味着 `Cube` 生成特定于方块的 JSON，而 `Bone` 生成轮廓和单个骨骼文件。请注意，一个骨骼会生成一个资源包文件。模型在生成时被添加到列表中。
5) 仍在 `Skeleton` 中，解析模型中的所有 `Animations`（如果有）
6) 所有数据现已初始化，资源包已在 `outputs` 文件夹中生成，插件已准备好使用。

## 此插件中使用的技巧：

此处使用的技巧相当成熟且标准化，但仍会列出，因为它们可能违反直觉。

请注意，这些技巧对用户和模型制作者来说是完全不可见的；列出限制和解决方法仅是为了帮助您理解 FMM 如何绕过各种 Minecraft 限制。

- 所有模型都放大 4 倍，然后在代码中重新调整大小和轴心点，以扩展模型的理论最大尺寸
- 由于资源包模型的大小只能在 -16 到 +32 之间，模型在后台进行了偏移。这对玩家来说是完全不可见的。
- 使用皮革马铠创建具有可以通过代码影响色调的模型（例如用于伤害指示）。马铠必须设置为白色才能显示正确的颜色！
- Blockbench 使用特定的 ID 系统来处理纹理，但实际上是按顺序从配置中读取纹理的。此处根据纹理列表中它们的位置分配 ID，遵循 Blockbench 的做法。
- 由于 Minecraft 限制，每个骨骼都是一个不同的实体
- 皮革马铠位于盔甲架的头部槽位
- 盔甲架和显示实体都用于默认的静态物品；基岩版客户端获得盔甲架，1.19.4+ 客户端获得显示实体（旧版本客户端将获得盔甲架）

# 总体上为 FreeMinecraftModels (FMM) 项目贡献

FMM 实际上是由 https://www.patreon.com/magmaguy 上的可爱人们众筹支持的！所有的贡献都比您想象的更有帮助 ;)

# 当前计划的功能：
- 基岩版客户端资源包生成
- 集成 Geyser 的资源包管理
- tag_projectile 作为元骨骼，可以从中发射投射物（每个模型可以有多个）

# 当前希望修复的奇怪限制：

- TransformationMatrix 是一团糟，但目前还没有更好的解决方案。它们需要擅长矩阵的人进行一些工作。