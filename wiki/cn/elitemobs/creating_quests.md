[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 示例任务

EliteMobs预装有一个 `test_quest.yml`，这里将分析作为一个简单任务格式来进行跟随。

_在`~plugins/EliteMobs/customquests` 文件夹中有自定义任务！_

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
name: "&aKill the Test Boss"
questLore: 
- "&cEnd the test boss''s reign of terror!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*如果你的任务UI看起来不像这样，你可以使用 `/em alt` 来更改它。*

这个示例任务将给玩家杀死1个 test_boss.yml 的任务。 （任务追踪器中显示的Boss的实际名称将是在 test_boss.yml 中设置的 `name:`。）作为完成任务的奖励，他们将获得一份Magmaguy's Toothpick。

## 创建自定义任务

<div align="center">

### customObjectives

设置任务目标。

| 键       |   值    | 默认值 |
|-----------|:-----------:|:-------:|
| `customObjectives` | 特殊 [1] |  无   |

*注意: 如果你以多阶段Boss为目标，则目标应该使用第一阶段作为目标。*

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
    - "&a[Dialog NPC] &fCome here often?"
    - "&7&oI should eat more apples."
    filename: dialog_npc.yml
    npcName: Dialog NPC
    location: at dialog location.
    objectiveType: DIALOG
```

`FETCH_ITEM`：

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: Red Apples
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

自定义目标使用以下值进行构造：

| 键                                     | 描述 |
|-----------------------------------------|-------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | 用于设置此代表的对象类型。`KILL_CUSTOM` 表示任务涉及杀死特定的自定义Boss，`FETCH_ITEM` 表示任务涉及获取特定的自定义物品，`DIALOG` 表示任务涉及与NPC对话。            |
| `filename`                                    | 设置自定义Boss、玩家需要杀死/获得的自定义物品或他们需要对话的NPC的文件名。            |
| `amount`                                      | 设定需要被杀死的自定义Boss数量或需要获得的物品数量。            |
| `dialog`                                      | 设定玩家与其对话的NPC的对话。            |
| `name`                                        | 用于设置任务目标的名称，无论是NPC还是自定义物品。仅用于视觉目的。            |

_请注意，每个自定义目标字段都以 `:` 分隔！_

</div>

</details>

***

### customRewards

设置任务奖励。

| 键       |                                值                                 | 默认值 |
|-----------|:---------------------------------------------------------------------:|:-------:|
| `customRewards` | [通用EliteMobs物品格式]($language$elitemobs/loot_tables.md) |  无   |

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

设置玩家接受任务时必须拥有的权限。

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `questAcceptPermission` | [字符串](#string) |  无  |

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

设置接受任务时玩家必须拥有的权限。

| 键       |   值    | 默认值 |
|-----------|:-----------:|:-------:|
| `questAcceptPermissions` | [字符串列表](#string_list) |  无  |

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

设置玩家完成任务后会获取的权限，该权限会锁定他们，防止他们再次进行任务（通常是你正在编辑的任务的[文件名](#fielname)）。

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `questLockoutPermission` | [字符串](#string) |  无  |

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

设置玩家完成任务后，要等多久（以分钟为单位）才能再次进行任务（通过删除任务锁定权限）。

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `questLockoutMinutes` | [整数](#integer) |  `-1`(永不重复)   |

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

设置任务名称接受[颜色代码](#color_codes)。

| 键    |      值       | 默认值 |
|--------|:-----------------:|:-------:|
| `name` | [字符串](#string) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "&aMy Great Quest Name"
```

</div>

</details>

***

### questLore

设置将显示在游戏内任务菜单中的任务的传说。

| 键    |      值       | 默认值 |
|--------|:-----------------:|:-------:|
| `questLore` | [字符串列表](#string_list) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questLore:
- "Interesting lore sentence."
- "Yet another interesting lore sentence."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

设置玩家交付任务前分配给他们的权限。

如果你正在使用这个设置来确保当玩家有一个特定的任务活动时才能掉落一个物品，你还需要在物品的配置文件中配置 [相同的权限]($language$/elitemobs/creating_items.md&section=permission)。

| 键    |      值       | 默认值 |
|--------|:-----------------:|:-------:|
| `temporaryPermissions` | [字符串列表](#string_list) |  无  |

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

设置接受任务时在聊天中显示的对话。

| 键    |      值       | 默认值 |
|--------|:-----------------::|:-------:|
| `questAcceptDialog` | [字符串列表](#string_list) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "My hero! You are so helpful!"
- "I wish you the best of luck!"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

设置任务完成（交付）时在聊天中显示的对话。

| 键    |      值       | 默认值 |
|--------|:-----------------:|:-------:|
| `questCompleteMessage` | [字符串列表](#string_list) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "My hero! You have completed my difficult quest!"
- "As a reward you can have this loaf of bread!"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

设置任务完成时将运行的命令。

| 键    |      值       | 默认值 |
|--------|:-----------------:|:-------:|
| `questCompleteCommands` | [字符串列表](#string_list) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player has finished a quest!
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

设置玩家需要与其进行对话/交互以完成任务的NPC的文件名。 这**不**必须是分发任务的同一个NPC。

| 键    |      值       | 默认值 |
|--------|:-----------------:|:-------:|
| `turnInNPC` | [文件名](#filename) |  无  |

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

设置任务是否使用任务追踪器。

| 键    |      值       | 默认值 |
|--------|:-----------------:|:-------:|
| `trackable` | [布尔值](#boolean) | `true`  |

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

设置任务的等级。 这仅仅是一个视觉指南，所以玩家可以知道任务将会有多难。 这**不**以任何方式修改Boss、物品或其他等级。

| 键    |      值       | 默认值 |
|--------|:-----------------:|:-------:|
| `questLevel` | [整数](#integer) | `0`  |

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

设置接受任务时播放的声音。 可以同时播放Minecraft声音和来自资源包的声音。

| 键                |      值       | 默认值 |
|--------------------|:-----------------:|:-------:|
| `questAcceptSound` | [字符串](#string) |  无   |

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

设置任务完成（交付）时播放的声音。 可以同时播放Minecraft声音和来自资源包的声音。

| 键                |      值       | 默认值 |
|--------------------|:-----------------:|:-------:|
| `questCompleteSound` | [字符串](#string) |  无   |

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

如上表所述，权限通常是[字符串](#string)或[字符串列表](#string_list)。但让我们详细讨论如何使用这些权限来锁定和解锁任务。

假设你正在计划一系列任务中制作任务_3，在完成任务_2之前，你不希望玩家能够接受任务_3。我们会这样配置任务文件：

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
通过将 `questAcceptPermissions` 设置为 `elitequest.quest_2.yml`，我们现在防止了玩家在完成quest_2.yml之前能够接受 quest_3.yml。 </br> 通过设置 `questLockoutPermission` 为 `elitequest.quest_3.yml`，我们阻止了玩家能够接收该任务，只要他们的任务追踪器中已经有该任务，或者他们已经完成了该任务。这阻止了玩家能够重复任务。

如果你想在玩家完成一系列任务后才能接受任务，那么你应该这样配置任务文件：

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

如果你只想在玩家有正确任务活动时，只让他们能够掉落特定的物品，我们可以通过使用 `temporaryPermissions` 来做到这一点。我们将在任务文件中使用 `temporaryPermissions` 创建一个权限，然后在物品文件中使用 `permission` 创建一个匹配的 [权限]($language$/elitemobs/creating_items.md&section=permission)。

例如，我们会打开我们的任务文件，然后添加以下内容：

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```
然后我们会打开物品文件，我们的情况是 *my_cool_item.yml*，然后添加