
# 入门指南

此页帮助你理解如何正确编辑 .yml (.yaml) 文件。我所有的插件都使用 .yml 配置文件，如果你编辑得不正确，文件将会重置或停止工作。

下面，你会找到每个配置项的类型以及如果你要修改任何值，它们应该遵循的格式！

# 如何编辑 .yml 文件

文件存储在 `.yml` 文件格式中，[Notepad++](https://notepad-plus-plus.org/) 是推荐的配置工作编辑软件。当然你也可以使用任何你选择的文本编辑器。

<div id="config_boolean">

# `布尔值`

`布尔值` 是 `真` 或 `假`。看起来像这样：

```yml
value1: true
value2: false
```

`布尔值` 只接受 `真` 或 `假` 的值。它们通常用于开启或关闭特定功能。

</div>

<div id="config_string">

# `字符串`

`字符串` 的值通常只是普通文本。强烈推荐你在引号间创建 `字符串` 值，遵循以下格式：

```yml
value: "String"
```

虽然这并不总是必需的，但对于包含色彩代码的任何字符串是必需的，尤其是当第一个字符以 [色彩代码](#color_codes) 开始时。***色彩代码遵循游戏内的色彩代码格式***，这意味着 `"&aTest"` 将产生绿色文字。彩色文字的可用性因配置设置而异。查看 [这个页面](https://minecraft.gamepedia.com/Formatting_codes) 获取色彩代码。

</div>

<details>

<summary>为什么呢？</summary>
配置字符串可以接受特殊字符，例如 `&`。如果这些特殊字符在第一字符，例如在 `value: "&aString"` 中，如果 `字符串` 不在引号中，则会清空值，该配置选项将重置为默认值。这是 Spigot 使用的配置系统的限制。
</details>

<div id="config_serialized_location">

# `序列化位置`

`序列化位置` 是一种特殊类型的字符串，看起来像这样：

```yml
location: world,1.0,2.0,3.0,4.0,5.0
```

这些用于存储和配置位置。采取这样的格式：`世界名称,X,Y,Z,PITCH,YAW`。仰角和偏角仅决定玩家看到的方向，就像 Minecraft 的位置一样实现的。

</div>

<div id="config_multiplier">

# `乘法器`

`乘法器` 的值是一个数，这个数会将插件的值乘以它。这些值***决不***应该在引号间。下面是一个示例：

```yml
damageMultiplier: 1.0
```

在此情况下，伤害乘数将乘以 1，表示默认值没有任何变化。如果 `乘法器` 是 `2.0`，那么这个值就会乘以 `2.0`。如果它是 `0.5`，那么就会乘以 `0.5`。

对于不擅长处理分数的人来说，乘以 `0.5` 等同于除以 2。`乘数` 的值应始终大于 0（`0.0001` 有效），并且一般不设上限。

</div>

<div id="config_integer">

# `整数`

`整数` 的值只是整数。示例：

```yml
value: 10
```

`整数` 值的重要之处在于它们必须是整数。这意味着 `10.1` 是无效的。

</div>

<div id="config_double">

# `双精度浮点数`

`双精度浮点数` 是无理数。示例：

```yml
value: 10.01
```

`双精度浮点数` 也可以是整数，就像 `10.0`，甚至可以表示为 `10`。

</div>

<div id="config_string_list">

# `字符串列表`
`字符串列表` 是 `字符串` 值的列表。这些值往往是最难配置的，因为它们需要非常特定的配置格式：

```yml
valuesList:
- "value,1"
- "value,2"
- "value,3"
```

像 `字符串` 一样，建议在引号内保留值。每个 `字符串列表` 有自己的格式，所以你必须找到你正在编辑的列表的特定格式。不过，通常这就是总体格式。

</div>

<div id="config_map_list">

# `映射列表`

'映射列表' 是 '映射' 值的列表。这些只用于精英脚本，需要以下的配置格式：

```yml
parentMap:
- Map1:
  key: value
- Map2:
  key: value
  keyForList:
    - "value1"
    - "value2"
```

如你所看到的，映射列表可以在其中包含任何格式，但如果你在脚本中使用它们，你需要查看文档以了解哪些是不同映射的有效键和值。

</div>

<div id="config_color_codes">

# `色彩代码`

你也可以使用以下修饰符来指定颜色或使文本加粗：

| 代码        | 颜色          | 示例                                                |
|-------------|----------------|--------------------------------------------------------|
| **&4**      | 深红色        | <div style="color: darkred;">&4深红色示例。</div> |
| **&c**      | 红色         | <div style="color: red;">&c红色示例。</div>          |
| **&6**      | 橙色          | <div style="color: orange;">&6橙色示例。</div>    |
| **&e**      | 黄色          | <div style="color: yellow;">&e黄色示例。</div>    |
| **&2**      | 深绿色     | <div style="color: darkgreen;">&2深绿色示例。</div> |
| **&a**      | 绿色          | <div style="color: green;">&a绿色示例。</div>      |
| **&b**      | 青色           | <div style="color: aqua;">&b青色示例。</div>        |
| **&3**      | 深青色      | <div style="color: cadetblue;">&3深青色示例。</div> |
| **&1**      | 深蓝色      | <div style="color: darkblue;">&1深蓝色示例。</div> |
| **&9**      | 蓝色          | <div style="color: blue;">&9蓝色示例。</div>        |
| **&d**      | 浅紫色    | <div style="color: hotpink;">&d浅紫色示例。</div> |
| **&5**      | 深紫色    | <div style="color: purple;">&5深紫色示例。</div> |
| **&f**      | 白色          | <div style="color: white;">&f白色示例。</div>      |
| **&7**      | 灰色          | <div style="color: darkgray;">&7灰色示例。</div>    |
| **&8**      | 深灰色      | <div style="color: gray;">&8深灰色示例。</div>   |
| **&0**      | 黑色          | <div style="color: black;">&0黑色示例。</div>      |
| **&r**      | 复位颜色    | &r复位示例.                                       |
| **&i**      | 加粗           | **&i粗体示例.**                                    |
| **&o**      | 斜体           | _&o斜体示例._                                    |
| **&n**      | 下划线      | <u>&n下划线示例.</u>                            |
| **&m**      | 删除线    | ~~&m删除线示例.~~                           |
| **&k**      | 随机         | &k<div class="magic-text"></div> &f示例.            |


如你在示例中看到的，修饰符遵循常规的 minecraft 语法，除了在使用 EliteMobs 时，§ 被 & 替换。你可以用它来修改大部分 EliteMobs 文字，例如，怪物名，任务文本，地牢名等等。

请注意，当修饰符工作正常时，它们自身不会在你的文本中显示。它们只是为了演示目的才在这里显示的。

它也可能结合颜色和其他文本修饰符。例如，你可以做：

*<div style="color: green;">&a&o要得到斜体的绿色文本。</div>*

如果我们想要我们的定制怪物拥有一个漂亮的多彩名字，我们会这样做：

```yml
name: $normalBossLevel &aScary &dDragon
```

</div>

<div id="config_material">

# `物质`

`物质` 的值只是你可以在 MineCraft 中找到的物质，例如 `IRON_CHESTPLATE`。对于有效的 `物质`，查看这个 [页面](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```yml
helmet: IRON_HELMET
```

`物质` 用作众多设置中的值，如怪物的设备，掉落物，任务奖励等。

</div>

<div id="config_filename">

# `文件名`

`文件名` 的值只是以 .yml 配置文件格式排列的，以适合 MagmaGuy 的插件。这些可以是任何东西，从物品到任务。

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

</div>

<div id="config_trimming_worlds">

# 裁剪世界

有时，你可能需要缩小你的 Minecraft 世界的规模，使其更轻，因此更容易分发。这可以通过使用 [WorldBorder 插件](https://www.spigotmc.org/resources/worldborder-1-15.80466/) 来实现。尽管插件被列为只支持 MineCraft 到 1.19 版本，但它在 2024 年 1 月 25 日的最新 MineCraft 版本上运行无缝。

<details>
<summary>提示</summary>
如果你是第一次做这个，最好备份你的世界，以防有什么事情出错。
</details>

一旦插件安装了，导航到世界的中部或你希望裁剪的特定区域。然後，执行命令 `/wb set x`，其中 `x` 代表你希望区域的大致半径。

<details>
<summary>提示</summary>
如果 <code>/wb</code> 没有为你工作，试试 <code>/worldborder:wb</code>.
</details>

执行命令后，飞到你的世界的边缘，验证世界边界是否正确设置并覆盖了预期的规模。当你被推回并同伴聊天中的一条消息时，你会认出已经到达世界边界的边缘。

![trim_pic_1.jpg](trim_pic_1.jpg)

在上面的图片中，我们的目标是围绕紫色的块裁剪世界，只剩下它们周围的几个区块。为了达到这个目标，我们站在红色方块上的紫色区域的中间，执行 `/wb set 50`，将世界边界设置在紫色区域之外。

接下来，我们使用 `/wb trim [freq] [pad]` 命令，频率设置为 200，pad 为 20. pad 决定世界边界（紫色区域）周围应该留下多少区块，频率决定每秒应该处理多少区块。运行 `/wb trim 200 20` 后，我们将提示确认执行 `/wb trim confirm`。确认操作后，在一段时间后，我们的世界将被尽量修剪，减小其大小，使其更便于分发。

你现在可以使用 `/wb clear all` 移除世界边界，或者如果你愿意，你可以将其留下。

## 裁剪世界文件夹

在你的世界文件夹中有几个文件和文件夹，我们可以删除，因为插件并不使用所有的。这将减少你的世界的大小，便于分发。

对于 NORMAL 的世界环境：

为准备你的世界，保留以下文件和文件夹：

1. **区域** 文件夹
2. 在 **数据** 文件夹中的 **raids.dat** （在复制时确保它在 **数据** 文件夹内）
3. **level.dat** 文件

你可以安全地删除位于世界文件夹中的所有其他文件和文件夹。这将正确地为 NORMAL 环境设置你的世界。

对于 NETHER 和 THE_END 世界环境：

为准备你的世界，保留以下文件和文件夹：

1. 在 **DIM-1** 文件夹内的 **区域** 文件夹（在复制时确保它在 **DIM-1** 文件夹内）
2. 在 **数据** 文件夹中的 **raids.dat** （在复制时确保它在 **数据** 文件夹内）
3. **level.dat** 文件

你可以安全地删除位于世界文件夹中的所有其他文件和文件夹。这将正确地为 NETHER 和 THE_END 环境设置你的世界。