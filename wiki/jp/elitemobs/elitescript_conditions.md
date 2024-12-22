# エリートスクリプトの条件

条件を使用すると、スクリプト作成者は特定の条件に基づいてスクリプトやアクションを**実行しない**ようにすることができます。

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Conditions:
      isAlive: true
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: DIRECT_TARGET
      duration: 20
      material: DIRT
      offset: 0,3,0
      Conditions:
        locationIsAir: true
        Target:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

この例では、エリートがまだ生きている場合にのみ`Example`
スクリプトが実行され、エリートの位置から3ブロック上のブロックが空気ブロックの場合にのみ、土ブロックが配置されます。個々のアクションには、個別の条件を設定できます。

</div>

</details>

</div>

## ターゲット

条件は、どのエンティティまたは場所が条件の対象となるかをターゲットとする[ターゲット]($language$/elitemobs/elitescript_targets.md)
システムを使用します。つまり、条件をボス、プレイヤー、またはターゲットにできる他のものに関連付けることができます。

---

## 条件タイプ

| キー              |    詳細     |            値             |
|-----------------|:---------:|:------------------------:|
| `conditionType` | 条件のタイプを設定 | `BLOCKING` / `FILTERING` |

条件には、`BLOCKING`と`FILTERING`の2つのタイプがあります。`BLOCKING`
条件は、スクリプトやアクションの実行を停止させます。`FILTERING`
条件は、条件を満たさないターゲットをアクションがスキップするようにします。つまり、空気ではないブロックのみをターゲットにしたい場合は`FILTERING`
条件が必要になりますが、プレイヤーが死亡した場合にアクションを停止させたい場合は`BLOCKING`条件が必要になります。

**アクション外の条件は常に`BLOCKING`です**。アクション内の条件は、`BLOCKING`または`FILTERING`にできます。

_**注：ターゲットが`SELF`（ボス）であり、条件チェックが`isAlive`の場合、チェックは常に`BLOCKING`です！**_これは`FILTERING`
条件内に入れることができますが、この特定の部分は`BLOCKING`として動作します。

アクション内の条件は、デフォルトで`FILTERING`に設定されます。

---

## 場所ベースの条件

### locationIsAir

ターゲットの場所が空気かどうかを条件として設定します。

| キー              |                  詳細                   |          値          |
|-----------------|:-------------------------------------:|:-------------------:|
| `locationIsAir` | 場所が空気ブロックかどうかをチェックするように設定します（またはその逆）。 | [Boolean](#boolean) |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

ボスの立っている場所から2ブロック上の場所が空気かどうかをチェックします。

</div>

</details>

</div>

---

### isOnFloor

場所が床にあるかどうかをチェックします。これは、場所のブロックが固体ではなく、その下のブロックが固体であることを意味します。

| キー          |                 詳細                  |          値          |
|-------------|:-----------------------------------:|:-------------------:|
| `isOnFloor` | 場所が床の場所かどうかをチェックするように設定します（またはその逆）。 | [Boolean](#boolean) |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isOnFloor: true
      Target:
        targetType: SELF
```

</div>

</details>

</div>

---

### isStandingOnMaterial

ターゲットの下の場所が一致する素材タイプであるかどうかをチェックします。

| キー                     |         詳細         |           値           |
|------------------------|:------------------:|:---------------------:|
| `isStandingOnMaterial` | チェックする素材タイプを設定します。 | [Material](#material) |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isStandingOnMaterial: BIRCH_WOOD
      Target:
        targetType: SELF
```

ボスがBIRCH_WOODの上に立っている場合にのみ実行されます。

</div>

</details>

</div>

## エンティティベースの条件

### isAlive

条件ターゲットエンティティが生きているかどうかを条件として設定します。

| キー        |                    詳細                    |          値          |
|-----------|:----------------------------------------:|:-------------------:|
| `isAlive` | エンティティが生きているか（または死んでいるか）をチェックするように設定します。 | [Boolean](#boolean) |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      isAlive: false
      Target:
        targetType: SELF
```

ボスが死んでいる場合にのみ実行されます。

</div>

</details>

</div>

---

### hasTags

ターゲットエンティティに特定のタグがあるかどうかをチェックします。スクリプト作成者は、アクションを通じて任意のタグを割り当てたり、割り当て解除したりし、後で動作の条件として使用できます。タグは、ボスに割り当てることができる単なる文字列（単語）です。

| キー        |                   詳細                    |              値              |
|-----------|:---------------------------------------:|:---------------------------:|
| `hasTags` | エンティティがタグのリストを持っているかどうかをチェックするように設定します。 | [String List](#string_list) |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      hasTags:
      - isCool
      - hasANiceBeard
      Target:
        targetType: SELF
```

ボスが「isCool」と「hasANiceBeard」のタグを持っている場合にのみ実行されます。

</div>

</details>

</div>

---

### doesNotHaveTags

`hasTags`と同じですが、ボスがこれらの値を持っていないかどうかをチェックします。

| キー                |                    詳細                    |              値              |
|-------------------|:----------------------------------------:|:---------------------------:|
| `doesNotHaveTags` | エンティティがタグのリストを持っていないかどうかをチェックするように設定します。 | [String List](#string_list) |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Conditions:
      doesNotHaveTags:
      - isStinky
      - isSus
      Target:
        targetType: SELF
```

ボスが「isStinky」と「isSus」のタグを持っていない場合にのみ実行されます。

</div>

</details>

</div>

## その他の条件

### randomChance

条件が有効になるランダムなチャンスを与えます。

| キー             |     詳細      |       値       |
|----------------|:-----------:|:-------------:|
| `randomChance` | 条件が有効になる確率。 | 0.0から1.0の間の数値 |

この条件は、ターゲットを必要としないため特別であることに注意してください。

## タグ付きのNEARBYをフィルター処理

特定のタグに基づいて`NEARBY_MOBS`または`NEARBY_PLAYERS`をフィルター処理するには、条件のターゲットとして`ACTION_TARGET`
を使用します（条件がスクリプト自体ではなくアクションに適用されている場合）。これにより、スクリプトが指定されたタグを持つモブ/プレイヤーのみを正確にフィルター処理することが保証されます。

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Actions:
    - action: SET_MOB_AI
      Target:
        targetType: NEARBY_MOBS
        range: 40
      bValue: false
      Conditions:
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

このスクリプトは、タグ`TurnOff`が付いた近くのモブを探し、タグが付いている場合はそのAIをオフにします。

</div>

</details>

</div>
