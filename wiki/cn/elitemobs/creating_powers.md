[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs 脚本系统

以下页面介绍了如何创建 Elite 脚本！

这是一个高级功能，需要对 EliteMobs 有一定的深入了解。

**注意：Elite 脚本可以添加为力量文件或添加到自定义 Boss 文件中！**如果用作力量文件，您可以使用自定义 Boss 的 [powers]($language$/elitemobs/creating_bosses.md&section=powers) 配置设置将它们作为普通力量添加到 Boss 中，照常操作即可。

## 添加 EliteScript

要开始向 Boss 添加 EliteScript，请将以下条目添加到 Boss 文件中：

```yml
eliteScript:
```

**注意：以下内容对大小写和空格非常敏感！确保您的空格、换行符和整体格式与示例相匹配！**

现在您已经声明了脚本的开始，您可以添加您的特定脚本。对于此示例，我们将创建一个名为 `示例` 的脚本：

```yml
eliteScript:
  示例:
```

EliteScripts 有 5 个不同的部分：`事件`、`条件`、`区域`、`动作` 和 `冷却时间`。只有 `动作` 是必需的。

让我们看一个简单的例子：

```yml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 推动
      目标:
        目标类型: 自身
      vValue: 0,0.5,0
    冷却时间:
      本地: 60
      全局: 20
```

此脚本使精英在被玩家击中时被向上推动，并且在 3 秒内不会再次这样做（并且由于我们在“冷却时间”部分设置的设置，其他力量将在 1 秒内停止触发）。

现在您已经了解了脚本结构的一般格式，是时候了解您可以使用每个部分做什么了！

----

# 事件

[事件]($language$/elitemobs/elitescript_events.md)

点击上面的链接了解如何使用事件！

# 目标

[目标]($language$/elitemobs/elitescript_targets.md)

点击上面的链接了解如何使用目标！

# 动作

[动作]($language$/elitemobs/elitescript_actions.md)

点击上面的链接了解如何使用动作！

# 区域

[区域]($language$/elitemobs/elitescript_zones.md)

点击上面的链接了解如何使用区域！

# 条件

[条件]($language$/elitemobs/elitescript_conditions.md)

点击上面的链接了解如何使用条件！

# 冷却时间

[冷却时间]($language$/elitemobs/elitescript_cooldowns.md)

点击上面的链接了解如何使用冷却时间！

----

## 添加多个 EliteScripts

您可以在一个事件上有多个动作，但是如果您想在同一个 Boss 上有多个脚本怎么办？这就像创建一个新的脚本条目一样简单！让我们扩展前面的示例，并向其中添加另一个脚本：

```yml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 推动
      目标:
        目标类型: 自身
      vValue: 0,0.5,0
    冷却时间:
      本地: 60
      全局: 20
  示例 2:
    事件:
    - PlayerDamagedByEliteMobEvent
    动作:
    - action: 点燃
      目标:
        目标类型: 直接目标
    冷却时间:
      本地: 200
      全局: 60
```
在此示例中，我们添加了第二个名为“示例 2”的脚本。“示例 2”会点燃受到 Boss 伤害的玩家，这是因为目标类型设置为 [直接目标]($language$/elitemobs/elitescript_targets.md&section=target-types)。</br>此脚本的冷却时间设置为 200 滴答，这意味着 Boss 每 10 秒才能点燃玩家一次。

## 制作独立力量

独立力量几乎完全由 Elite 脚本组成。只有两个字段是可选的。不要忘记，为了使独立力量正常工作，必须将它们放置在 `~plugins/EliteMobs/powers` 文件夹中。</br>独立力量示例：

```yml
isEnabled: true
powerType: UNIQUE
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 推动
      目标:
        目标类型: 自身
      vValue: 0,.3,0
    冷却时间:
      本地: 60
      全局: 20
```

### isEnabled

与插件中的其他任何地方一样，设置力量是否启用。

### powerType

力量类型设置力量的分配方式。值包括：

- `UNIQUE`：力量将仅应用于在力量部分设置了力量的自定义 Boss。
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`：任何精英都将能够获得这些力量，并且它们将计入特定力量子集。
- `MAJOR_ZOMBIE`、`MAJOR_SKELETON`、`MAJOR_BLAZE`、`MAJOR_ENDERMAN`、`MAJOR_GHAST`：只有相应实体类型的精英才能自然生成这些力量，并且它们将计入主要力量。



