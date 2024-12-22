[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs 脚本系统

以下页面介绍了如何创建精英脚本！

这是一个高级功能，需要对 EliteMobs 有一些深入的了解。

**注意：精英脚本可以作为能力文件添加到自定义 Boss 文件中！** 如果用作能力文件，您可以像往常一样使用自定义 Boss
的 [powers]($language$/elitemobs/creating_bosses.md&section=powers) 配置设置将它们作为普通能力添加到 Boss 中。

## 添加 EliteScript

要开始向 Boss 添加 EliteScript，请将以下条目添加到 Boss 文件中：

```yml
eliteScript:
```

**注意：以下内容对大小写和空格极其敏感！请确保您的空格、换行符和整体格式与示例匹配！**

现在您已经声明了脚本的开始，您可以添加您的特定脚本。在本例中，我们将创建一个名为 `Example` 的脚本：

```yml
eliteScript:
  Example:
```

EliteScript 有 5 个不同的部分：`Events`、`Conditions`、`Zones`、`Actions` 和 `Cooldowns`。只有 `Actions` 是强制性的。

让我们看一个简单的例子：

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
```

此脚本使精英在被玩家击中时向上推，并且在 3 秒内不会再次执行（并且由于我们在 Cooldowns 部分中设置的设置，将阻止其他能力触发
1 秒）。

现在您已经了解了脚本的一般结构，是时候了解每个部分可以做什么了！

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

# 冷却

[冷却]($language$/elitemobs/elitescript_cooldowns.md)

点击上面的链接了解如何使用冷却！

----

## 添加多个 EliteScript

您可以在一个事件中执行多个动作，但是如果您想在同一个 Boss 上执行多个脚本怎么办？这就像创建一个新的脚本条目一样简单！让我们扩展前面的示例并向其中添加另一个脚本：

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
  Example2:
    Events:
    - PlayerDamagedByEliteMobEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: DIRECT_TARGET
    Cooldowns:
      local: 200
      global: 60
```

在此示例中，我们添加了第二个名为 Example2 的脚本。由于 targetType
设置为 [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types)，Example2 将使被 Boss
伤害的玩家着火。此脚本的冷却时间设置为 200 刻，这意味着 Boss 每 10 秒才能使玩家着火一次。

## 制作独立的能量

独立能量几乎完全由精英脚本组成。只有两个字段是可选的。不要忘记，要使独立能量起作用，它们必须放置在 `~plugins/EliteMobs/powers`
文件夹中。独立能量示例：

```yml
isEnabled: true
powerType: UNIQUE
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

### isEnabled

与插件中的其他任何地方一样，设置是否启用该能量。

### powerType

能力类型设置能量的分配方式。这些值是：

- `UNIQUE`: 该能量将仅应用于在 powers 部分中设置了该能量的自定义 Boss。
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: 任何精英都可以获得这些能量，并且它们将被计入特定的能量子集。
- `MAJOR_ZOMBIE`、`MAJOR_SKELETON`、`MAJOR_BLAZE`、`MAJOR_ENDERMAN`、`MAJOR_GHAST`：只有足够实体类型的精英才能自然地生成这些能量，并且它们将被计入主要能量。
