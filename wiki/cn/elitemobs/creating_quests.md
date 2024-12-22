```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 示例任务

EliteMobs 预先打包了一个 `test_quest.yml` 文件，这里将对其进行分析，作为遵循的简单任务格式。

_自定义任务位于 `~plugins/EliteMobs/customquests` 文件夹中！_

`test_quest.yml`

```yaml
isEnabled: true
customObjectives:
  Objective1:
    amount: '1'
    filename: test_boss.yml
    objectiveType: KILL_CUSTOM
customRewards:
- filename=magmaguys_toothpick.yml:amount=1:chance=1
name: "&a击杀测试 Boss"
questLore: 
- "&c结束测试 Boss 的恐怖统治！"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*如果你的任务 UI 不是这个样子，你可以使用 `/em alt` 将其更改为匹配的样子。*

这个示例任务将给予玩家击杀 1 个 test_boss.yml 的任务。（任务追踪器中显示的 Boss 的实际名称将是 test_boss.yml
中设置的 `name:`。）作为完成任务的奖励，他们将获得 1 个 Magmaguy's Toothpick。

## 创建自定义任务

<div align="center">

### customObjectives

设置任务目标。

| 键                  |   值    | 默认 |
|--------------------|:------:|:--:|
| `customObjectives` | 特殊 [1] | 无  |

*注意：如果你使用多阶段 Boss 作为你的目标，那么该目标应使用第一阶段作为目标。*

<details> 

<summary><b>示例</b></summary>

<div align="left">

`KILL_CUSTOM`：

```yml
customObjectives:
  Objective1:
    amount: '1'
    filename: my_cool_boss.yml
    objectiveType: KILL_CUSTOM
```

`DIALOG`：

```yml
customObjectives:
  Objective1:
    dialog:
    - "&a[对话 NPC] &f你经常来这里吗？"
    - "&7&o我应该多吃些苹果。"
    filename: dialog_npc.yml
    npcName: 对话 NPC
    location: 在对话地点。
    objectiveType: DIALOG
```

`FETCH_ITEM`：

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: 红苹果
    filename: my_quest_item_red_apples.yml
    objectiveType: FETCH_ITEM
```

<div align="center">

![create_quest_objective.jpg](../../../img/wiki/create_quest_objective.jpg)

</div>

</div>

</details>

**特殊 [1]**

<details>

<summary><b>展开表格</b></summary>

<div align="center">

自定义目标使用以下值构建：

| 键                                       | 描述                                                                                                          |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | 用于设置此目标所代表的类型。`KILL_CUSTOM` 表示该任务涉及击杀特定的自定义 Boss，`FETCH_ITEM` 表示该任务涉及获取特定的自定义物品，而 `DIALOG` 表示该任务涉及与 NPC 对话。 |
| `filename`                              | 用于设置玩家必须击杀/获取的自定义 Boss、自定义物品或必须与之对话的 NPC 的文件名。                                                              |
| `amount`                                | 用于设置必须击杀的自定义 Boss 的数量或必须获得的物品的数量。                                                                           |
| `dialog`                                | 用于设置玩家与之交谈的 NPC 的对话内容。                                                                                      |
| `name`                                  | 用于设置任务目标的名称，无论是 NPC 还是自定义物品。仅用于视觉目的。                                                                        |

_请注意，每个自定义目标字段都用 `:` 分隔！_

</div>

</details>

***

### customRewards

设置任务奖励。

| 键               |                            值                             | 默认 |
|-----------------|:--------------------------------------------------------:|:--:|
| `customRewards` | [通用 EliteMobs 战利品格式]($language$elitemobs/loot_tables.md) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
customRewards:
- currencyAmount=50:amount=1:chance=0.05
- material=COOKED_COD:amount=3:chance=1.0
- filename=magmaguys_toothpick.yml:amount=1:chance=1.0
```

<div align="center">

![create_quest_rewards.jpg](../../../img/wiki/create_quest_rewards.jpg)

</div>

</div>

</details>

***

### questAcceptPermission

设置玩家必须拥有的接受任务的权限。

| 键                       |       值        | 默认 |
|-------------------------|:--------------:|:--:|
| `questAcceptPermission` | [字符串](#string) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questAcceptPermission: elitequest.my_permission
```

</div>

</details>

***

### questAcceptPermissions

设置玩家必须拥有的接受任务的权限。

| 键                        |           值           | 默认 |
|--------------------------|:---------------------:|:--:|
| `questAcceptPermissions` | [字符串列表](#string_list) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questAcceptPermissions: 
- elitequest.my_previous_quest_one.yml
- elitequest.my_previous_quest_two.yml
```

</div>

</details>

***

### questLockoutPermission

设置玩家在完成任务后将获得的权限，这将阻止他们再次执行该任务（通常是你正在编辑的任务的[文件名](#fielname)）。

| 键                        |       值        | 默认 |
|--------------------------|:--------------:|:--:|
| `questLockoutPermission` | [字符串](#string) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questLockoutPermission: elitequest.my_quest.yml
```

</div>

</details>

***

### questLockoutMinutes

设置玩家必须等待多长时间（以分钟为单位）才能再次执行该任务（通过删除任务锁定权限来工作）。

| 键                     |       值        |     默认     |
|-----------------------|:--------------:|:----------:|
| `questLockoutMinutes` | [整数](#integer) | `-1`(永不重复) |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questLockoutMinutes: 60
```

</div>

</details>

***

### name

设置任务名称。接受[颜色代码](#color_codes)。

| 键      |       值        | 默认 |
|--------|:--------------:|:--:|
| `name` | [字符串](#string) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "&a我的伟大任务名称"
```

</div>

</details>

***

### questLore

设置将出现在游戏内任务菜单中的任务传说。

| 键           |           值           | 默认 |
|-------------|:---------------------:|:--:|
| `questLore` | [字符串列表](#string_list) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questLore:
- "有趣的传说句子。"
- "又一个有趣的传说句子。"
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

设置在玩家完成任务之前分配给玩家的权限。

如果你使用此设置来确保物品仅在玩家激活特定任务时掉落，你还需要在物品的配置文件中配置[相同权限]($language$/elitemobs/creating_items.md&section=permission)。

| 键                      |           值           | 默认 |
|------------------------|:---------------------:|:--:|
| `temporaryPermissions` | [字符串列表](#string_list) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
temporaryPermissions:
- elitequest.item_that_should_drop_only_during_quest.yml
```

</div>

</details>

***

### questAcceptDialog

设置在接受任务时在聊天中显示的对话。

| 键                   |           值           | 默认 |
|---------------------|:---------------------:|:--:|
| `questAcceptDialog` | [字符串列表](#string_list) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "我的英雄！你真是太棒了！"
- "祝你好运！"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

设置在完成任务时在聊天中显示的对话。

| 键                      |           值           | 默认 |
|------------------------|:---------------------:|:--:|
| `questCompleteMessage` | [字符串列表](#string_list) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "我的英雄！你已经完成了我艰难的任务！"
- "作为奖励，你可以拿走这条面包！"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

设置在任务完成后将运行的命令。

| 键                       |           值           | 默认 |
|-------------------------|:---------------------:|:--:|
| `questCompleteCommands` | [字符串列表](#string_list) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player 完成了一个任务！
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

设置玩家需要与之交谈/交互以完成任务的 NPC 的文件名。这**不**必是发出任务的同一 NPC。

| 键           |        值         | 默认 |
|-------------|:----------------:|:--:|
| `turnInNPC` | [文件名](#filename) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
turnInNPC: my_cool_quest_npc.yml
```

</div>

</details>

***

### trackable

设置任务是否将使用任务追踪器。

| 键           |        值        |   默认   |
|-------------|:---------------:|:------:|
| `trackable` | [布尔值](#boolean) | `true` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
trackable: true
```

</div>

</details>

***

### questLevel

设置任务的等级。这只是一个视觉指南，因此玩家可以知道任务的挑战性如何。这**不会**以任何方式修改 Boss、物品或其他等级。

| 键            |       值        | 默认  |
|--------------|:--------------:|:---:|
| `questLevel` | [整数](#integer) | `0` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questLevel: 10
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questAcceptSound

设置在接受任务时播放的声音。既可以播放 Minecraft 声音，也可以播放资源包中的声音。

| 键                  |       值        | 默认 |
|--------------------|:--------------:|:--:|
| `questAcceptSound` | [字符串](#string) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questAcceptSound: entity.experience_orb.pickup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questCompleteSound

设置在任务完成（上交）时播放的声音。既可以播放 Minecraft 声音，也可以播放资源包中的声音。

| 键                    |       值        | 默认 |
|----------------------|:--------------:|:--:|
| `questCompleteSound` | [字符串](#string) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questCompleteSound: entity.player.levelup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

### 权限

正如上面表格中提到的，权限通常是[字符串](#string)或[字符串列表](#string_list)。但是，让我们更详细地了解你将如何使用这些来锁定和解锁任务。

假设你正在制作一系列计划中的任务中的 quest_3，并且你不希望玩家在完成 quest_2 之前能够接受 quest_3。我们将这样配置任务文件：

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```

通过将 `questAcceptPermissions` 设置为 `elitequest.quest_2.yml`，我们现在阻止了玩家在完成 quest_2.yml 之前接受
quest_3.yml。 </br> 通过将 `questLockoutPermission` 设置为 `elitequest.quest_3.yml`
，我们阻止了玩家只要已经在他们的跟踪器中拥有该任务或如果他们已经完成了该任务，就无法再次接受该任务。这阻止了玩家重复该任务。

如果你想制作一个仅在玩家完成一系列任务后才可用的任务，那么你将这样配置任务文件：

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

如果你希望玩家仅在激活正确任务时才能掠夺某些物品，那么我们可以使用 `temporaryPermissions`
来实现这一点。我们将在任务文件中使用 `temporaryPermissions` 创建一个权限，然后在物品文件中使用 `permission`
创建一个匹配的[权限]($language$/elitemobs/creating_items.md&section=permission)。

例如，我们将打开我们的任务文件并添加以下内容：

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```

然后我们将打开物品文件，在本例中为 *my_cool_item.yml*，然后添加以下内容：

```yml
permission: elitequest.my_cool_item.yml
```

现在两个文件都具有匹配的权限，这应该使我们的物品仅在玩家激活了正确的任务时才会掉落。

</div>
```
