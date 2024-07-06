```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 設定

<div align="center">

### isEnabled

NPC を有効にするかどうかを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

NPC の表示名を設定します。[カラーコード](#color_codes) をサポートしています。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `name` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: "&aEnn Peecee"
```

<div align="center">

![create_npc_name.jpg](../../../img/wiki/create_npc_name.jpg)

</div>

</div>

</details>

***

### role

NPC の役割を名前の下に設定します。表示用です。[カラーコード](#color_codes) をサポートしています。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `role` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
role: "&c<Red Fellow>"
```

<div align="center">

![create_npc_role.jpg](../../../img/wiki/create_npc_role.jpg)

</div>

</div>

</details>

***

### profession

NPC の職業を設定します。これは、変装を使用していない場合に、NPC のスキンを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  `NITWIT`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
profession: NITWIT
```

<div align="center">

![create_npc_profession.jpg](../../../img/wiki/create_npc_profession.jpg)

</div>

</div>

</details>

***

### greetings

プレイヤーが近づいたときに NPC が言う挨拶のリストを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `greetings` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
greetings:
- Hi there!
- Good day. 
```

<div align="center">

![create_npc_greetings.jpg](../../../img/wiki/create_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

プレイヤーが NPC の近くに居る間、NPC が言うダイアログを設定します（`DIALOG` インタラクションタイプの場合、これはダイアログになります）。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `dialog` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
dialog:
- I like apples!
- Sure is hot.
```

<div align="center">

![create_npc_dialog.jpg](../../../img/wiki/create_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

NPC の別れ際のメッセージを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `farewell` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
farewell: 
- Until next time!
- Bye!
```

<div align="center">

![create_npc_farewell.jpg](../../../img/wiki/create_npc_farewell.jpg)

</div>

</div>

</details>

***

### canTalk

NPC が話すことができるかどうかを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `canTalk` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
canTalk: true
```

</div>

</details>

***

### activationRadius

NPC がプレイヤーの接近を検出できる半径を設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `activationRadius` | [Double](#double) |  `3.0`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
activationRadius: 3.0
```

</div>

</details>

***

### interactionType

NPC が行うインタラクションの種類を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `interactionType` |    Special [1]    |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
interactionType: TELEPORT_BACK
```

</div>

</details>

***

### noPreviousLocationMessage

テレポートNPCにプレイヤーをテレポートできる以前の場所がない場合、このメッセージが表示されます。[Color Codes](#color_codes) を受け付けます。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `noPreviousLocationMessage` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
noPreviousLocationMessage: '&8[EliteMobs] &cCouldn''t send you back to your previous location - no previous location found!'
```

<div align="center">

![create_npc_noteleportlocation.jpg](../../../img/wiki/create_npc_noteleportlocation.jpg)

</div>

</div>

</details>

***

### timeout

NPC が永続的に消滅するまでの時間（分）を設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `timeout` | [Integer](#integer) |  `0` (never)   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
timeout: 0
```

</div>

</details>

***

### questFileName

NPC が提供するクエストを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `questFileName` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questFileName:
- my_quest_one.yml
- my_quest_two.yml
```

</div>

</details>

***

### disguise

NPC が持つ LibsDisguises 変装を設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `disguise` | [LibsDisguises 形式]($language$/elitemobs/libsdisguises.md) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
disguise: SKELETON
```

<div align="center">

![create_npc_disguise.jpg](../../../img/wiki/create_npc_disguise.jpg)

</div>

</div>

</details>

***

### customDisguiseData

カスタム LibsDisguises 変装のデータを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `customDisguiseData` | [LibsDisguises 形式]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
disguise: custom:my_cool_disguise_name
customDisguiseData: player my_cool_disguise_name setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliYmVkODQzNWY4YmYyNzhhZmUyNmU2NGZkOTI2YjhiMzc3MzJkODhlMzM0ODk3ZGJkNTI3ZDU2ZmY5MTk5MGUiCiAgICB9CiAgfQp9","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv8EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEO+

