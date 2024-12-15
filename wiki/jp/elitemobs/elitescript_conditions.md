# エリートスクリプトの条件

条件を使うと、スクリプターは特定の条件に基づいてスクリプトやアクションを**実行しない**ようにすることができます。

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

この例では、`Example`スクリプトはエリートがまだ生きている場合にのみ実行され、エリートの位置から3ブロック上のブロックが空気ブロックの場合にのみ、その位置に土ブロックを配置します。個々のアクションは個々の条件を持つことができます。

</div>

</details>

</div>

## ターゲット

条件は、[ターゲット]($language$/elitemobs/elitescript_targets.md)システムを使用して、条件の対象となるエンティティまたは場所をターゲットにします。これは、条件をボスやプレイヤー、またはターゲットにできるその他のものに関連付けることができることを意味します。

---

## 条件タイプ

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `conditionType` | 条件のタイプを設定します | `BLOCKING` / `FILTERING` |

条件には、`BLOCKING`と`FILTERING`の2つのタイプがあります。`BLOCKING`条件は、スクリプトやアクションの実行を停止させます。`FILTERING`条件は、条件を満たさないターゲットをアクションでスキップさせます。つまり、空気ではないブロックのみをターゲットにしたい場合は`FILTERING`条件を使用し、プレイヤーが死んでいる場合はアクションを停止させたい場合は`BLOCKING`条件を使用します。

**アクション外の条件は常に`BLOCKING`です**。アクション内の条件は`BLOCKING`または`FILTERING`にすることができます。

_**注：ターゲットが`SELF`（ボス）で、条件チェックが`isAlive`の場合、チェックは常に`BLOCKING`です！**_ これは`FILTERING`条件内に入れることができ、それでもこの特定の部分は`BLOCKING`として動作します。

アクション内の条件は、デフォルトで`FILTERING`に設定されています。

---

## 場所ベースの条件

### locationIsAir

ターゲットの場所が空気であるかどうかを条件として設定します。

| キー | 詳細 | 値 |
| --- | :-: |:-------------------:|
| `locationIsAir` | 場所が空気ブロックかどうか（またはその逆）をチェックするように設定します。 | [真偽値](#boolean) |

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

ボスの立っている場所から2ブロック上の場所が空気であるかどうかを確認します。

</div>

</details>

</div>

---

### isOnFloor

場所が床の上にあるかどうかを確認します。これは、場所にあるブロックが固体ではなく、その下のブロックが固体であることを意味します。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `isOnFloor` | 場所が床の場所かどうか（またはその逆）をチェックするように設定します。 | [真偽値](#boolean) |

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

ターゲットの下の場所が一致する素材タイプであるかどうかを確認します。

| キー | 詳細 | 値 |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | チェックする素材タイプを設定します。 | [素材](#material) |

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

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `isAlive` | エンティティが生きている（または死んでいる）かどうかをチェックするように設定します。 | [真偽値](#boolean) |

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

ターゲットエンティティに特定のタグがあるかどうかを確認します。スクリプターは、アクションを通じて任意のタグを割り当てたり割り当て解除したりでき、それらを後の動作の条件として使用できます。タグは、ボスに割り当てることができる単なる文字列（単語）です。

| キー | 詳細 | 値 |
| --- | :-: |:---------------------------:|
| `hasTags` | エンティティにタグのリストがあるかどうかをチェックするように設定します。 | [文字列リスト](#string_list) |

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

ボスに「isCool」と「hasANiceBeard」のタグがある場合にのみ実行されます。

</div>

</details>

</div>


---

### doesNotHaveTags

`hasTags`と同じですが、ボスがこれらの値を持っていないかどうかを確認します。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `doesNotHaveTags` | エンティティにタグのリストがないかどうかをチェックするように設定します。 | [文字列リスト](#string_list) |

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

ボスに「isStinky」と「isSus」のタグがない場合にのみ実行されます。

</div>

</details>

</div>

## その他の条件

### randomChance

条件に有効なランダムなチャンスを与えます。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `randomChance` | 条件が有効になる確率。 | 0.0〜1.0の間の数値 |

この条件は、ターゲットを必要としないため、特別なものであることに注意してください。

## タグによるNEARBYフィルタリング

特定のタグに基づいて`NEARBY_MOBS`または`NEARBY_PLAYERS`をフィルタリングするには、条件のターゲットとして`ACTION_TARGET`を使用します（条件がスクリプト自体ではなくアクションに適用されている場合）。これにより、スクリプトが指定されたタグを持つmob/プレイヤーのみを正確にフィルタリングするようにします。

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

このスクリプトは、`TurnOff`タグを持つ近くのmobを探し、そのタグを持っている場合は、そのAIをオフにします。

</div>

</details>

</div>
