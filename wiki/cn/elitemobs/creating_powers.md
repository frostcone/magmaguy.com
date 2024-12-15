[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs 脚本系统

以下页面介绍了如何创建 Elite Script！

这是一项高级功能，需要深入了解 EliteMobs。

**注意：可以将 Elite Script 添加为能力文件或自定义首领文件！** 如果用作能力文件，您可以像往常一样，使用自定义首领的 [powers]($language$/elitemobs/creating_bosses.md&section=powers) 配置设置将其作为普通能力添加到首领。

## 添加 Elite Script

要开始向首领添加 Elite Script，请将以下条目添加到首领文件：

```yml
eliteScript:
```

**注意：以下内容对大小写和空格极其敏感！请确保您的空格、换行符和整体格式与示例匹配！**

现在您已经声明了脚本开始，您可以添加特定的脚本。在此示例中，我们将创建一个名为 `Example` 的脚本：

```yml
eliteScript:
  Example:
```

EliteScripts 有 5 个不同的部分：`Events`、`Conditions`、`Zones`、`Actions` 和 `Cooldowns`。只有 `Actions` 是强制性的。

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

此脚本使一个精英在被玩家击中时被向上推，并且在 3 秒内不会再次这样做（并且由于我们在 Cooldowns 部分中设置的设置，将阻止其他能力触发 1 秒）。

现在您已经了解了脚本结构的一般格式，现在是时候了解每个部分可以做什么了！

----

# 事件

[事件]($language$/elitemobs/elitescript_events.md)

单击上面的链接以了解如何使用事件！

# 目标

[目标]($language$/elitemobs/elitescript_targets.md)

单击上面的链接以了解如何使用目标！

# 动作

[动作]($language$/elitemobs/elitescript_actions.md)

单击上面的链接以了解如何使用动作！

# 区域

[区域]($language$/elitemobs/elitescript_zones.md)

单击上面的链接以了解如何使用区域！

# 条件

[条件]($language$/elitemobs/elitescript_conditions.md)

单击上面的链接以了解如何使用条件！

# 冷却时间

[冷却时间]($language$/elitemobs/elitescript_cooldowns.md)

单击上面的链接以了解如何使用冷却时间！

----

## 添加多个 EliteScript

您可以在一个事件中执行多个操作，但是如果您想在同一个首领身上执行多个脚本怎么办？这与创建一个新的脚本条目一样简单！让我们扩展前面的示例并向其中添加另一个脚本：

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
在此示例中，我们添加了第二个名为 Example2 的脚本。Example2 将点燃被首领伤害的玩家，这是因为 targetType 设置为 [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types)。</br>此脚本的冷却时间设置为 200 个刻度，这意味着首领只能每 10 秒点燃一次玩家。

## 制作独立能力

独立能力几乎完全由 Elite Script 组成。只有两个字段是可选的。请不要忘记，为了使独立能力起作用，必须将其放置在 `~plugins/EliteMobs/powers` 文件夹中。</br>独立能力示例：

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

与插件中的其他位置一样，设置是否启用该能力。

### powerType

能力类型设置如何分配能力。值如下：

- `UNIQUE`：该能力只会应用于在能力部分中设置了该能力的自定义首领。
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`：任何精英都将能够获得这些能力，并且它们将计入特定能力子集。
- `MAJOR_ZOMBIE`、`MAJOR_SKELETON`、`MAJOR_BLAZE`、`MAJOR_ENDERMAN`、`MAJOR_GHAST`：只有具有足够实体类型的精英才能自然生成这些能力，并且它们将计入主要能力。
