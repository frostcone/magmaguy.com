はい、承知いたしました。入力されたテキストをMarkdown形式を維持したまま日本語に翻訳します。

```markdown
# エリートスクリプトの条件

条件を使用すると、スクリプターは特定の条件に基づいてスクリプトやアクションを**実行しない**ように設定できます。

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
      conditionType: BLOCKING
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
        conditionType: BLOCKING
        Target:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

この例では、`Example` スクリプトはエリートがまだ生きている場合にのみ実行され、エリートの位置から3ブロック上のブロックが空気ブロックである場合にのみ土ブロックを配置します。個々のアクションは個別の条件を持つことができます。

</div>

</details>

</div>

## ターゲット

条件は、[ターゲット]($language$/elitemobs/elitescript_targets.md) システムを使用して、どのエンティティまたは位置が条件の対象となるかを指定します。これにより、ボスやプレイヤー、またはターゲット可能な他のあらゆるものに条件を関連付けることができます。

---

## 条件タイプ

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `conditionType` | 条件のタイプを設定します | `BLOCKING` / `FILTERING` |

条件には `BLOCKING` と `FILTERING` の2種類があります。`BLOCKING` 条件は、スクリプトやアクションの実行を停止させます。`FILTERING` 条件は、条件を満たさないターゲットをアクションがスキップするようにします。つまり、空気ブロックではないブロックのみをターゲットにしたい場合は `FILTERING` 条件が必要ですが、プレイヤーが死亡している場合にアクションを停止したい場合は `BLOCKING` 条件が必要になります。

**アクションの外にある条件は常に `BLOCKING` です**。アクションの中にある条件は `BLOCKING` または `FILTERING` にすることができます。

_**注: ターゲットが `SELF` (ボス自身) であり、条件チェックが `isAlive` の場合、そのチェックは常に `BLOCKING` になります！**_ これは `FILTERING` 条件の中に置くこともできますが、この特定の部分は依然として `BLOCKING` として振る舞います。

アクションの中にある条件は、デフォルトで `FILTERING` に設定されています。

---

## 条件ブロックの配置

条件ブロックは、以下の2つの方法で配置またはネストできます。

1.  **個々のアクションの下** – 条件は特定のアクションにのみ適用されます。条件が満たされた場合、アクションは実行されます。満たされない場合、実行されません。

2.  **スクリプト全体の下** – 条件はスクリプト内のすべてのアクションに適用されます。条件が満たされない場合、どのアクションも実行されません。

以下に、個々のアクションとスクリプト全体の両方で条件ブロックをネストする方法を示す例を示します。

**個々のアクションの下:**

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        locationIsAir: true
        Target:
          targetType: SELF
          offset: "0,3,0"
```

ボスが立っている場所から2ブロック上の位置が空気であるかどうかをチェックし、空気であればモブが攻撃されたときにSET_WEATHERアクションを実行します。そうでなければ、SET_WEATHERアクションをブロックします。しかし、MESSAGEアクションには条件が適用されていないため、ボスは攻撃されたときに常にMESSAGEアクションを実行します。

</div>

</details>

</div>

**スクリプト全体の下:**

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
    Conditions:
      conditionType: BLOCKING
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

ボスが立っている場所から2ブロック上の位置にあるブロックが空気である場合、モブが攻撃されたときにすべてのスクリプトの実行を許可します。そうでなければ、SET_WEATHERアクションとMESSAGEアクションを含むスクリプト全体の実行をブロックします。

</div>

</details>

</div>

---

## 位置ベースの条件

### locationIsAir

ターゲットの位置が空気であるかどうかを条件として設定します。

| キー | 詳細 | 値 |
| --- | :-: |:-------------------:|
| `locationIsAir` | 位置が空気ブロックであるか（またはその逆か）をチェックするように設定します。 | [真偽値](#boolean) |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        locationIsAir: true
        Target:
          targetType: SELF
          offset: "0,3,0"
```

ボスが立っている場所から2ブロック上の位置が空気であるかどうかをチェックし、空気であればモブが攻撃されたときに天候スクリプトの実行をブロックしません。そうでなければ、アクションをブロックします。

</div>

</details>

</div>

---

### isOnFloor

位置が床の上にあるかどうかをチェックします。これは、その位置にあるブロックは固体ではないが、その下のブロックは固体であることを意味します。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `isOnFloor` | 位置が床の位置であるか（またはその逆か）をチェックするように設定します。 | [真偽値](#boolean) |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isOnFloor: true
        Target:
          targetType: SELF
```

ボスが固体ブロックの上にいるかどうかをチェックし、固体ブロックの上にいる場合はスクリプトを実行し、そうでない場合はスクリプトの実行をブロックします。

</div>

</details>

</div>

---

### isStandingOnMaterial

ターゲットの下にある位置が一致するマテリアルタイプであるかどうかをチェックします。

| キー | 詳細 | 値 |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | チェックするマテリアルタイプを設定します。 | [マテリアル](#material) |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isStandingOnMaterial: BIRCH_WOOD
        Target:
          targetType: SELF
```

ボスがBIRCH_WOODブロックの上に立っている場合にのみ実行され、そうでない場合はスクリプトの実行がブロックされます。

</div>

</details>

</div>

## エンティティベースの条件

### isAlive

条件ターゲットエンティティが生きているかどうかを条件として設定します。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `isAlive` | エンティティが生きているか（または死亡しているか）をチェックするように設定します。 | [真偽値](#boolean) |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isAlive: true
        Target:
          targetType: SELF
```

ボスが現在生きている場合にのみ実行され、そうでない場合はスクリプトがブロックされます。

</div>

</details>

</div>

---

### hasTags

ターゲットエンティティが特定のタグを持っているかどうかをチェックします。スクリプターはアクションを通じて任意のタグを割り当てたり解除したりでき、それらを後の動作の条件として使用できます。タグは、ボスに割り当てることができる単なる文字列（単語）です。

| キー | 詳細 | 値 |
| --- | :-: |:---------------------------:|
| `hasTags` | エンティティがタグのリストを持っているかどうかをチェックするように設定します。 | [文字列リスト](#string_list) |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        hasTags:
        - isCool
        - hasANiceBeard
        Target:
          targetType: SELF
```

ボスが「isCool」と「hasANiceBeard」のタグを持っている場合にのみ実行され、そうでない場合はスクリプトがブロックされます。

</div>

</details>

</div>

---

### doesNotHaveTags

`hasTags` と同じですが、ボスがこれらの値を持っていないかどうかをチェックします。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `doesNotHaveTags` | エンティティがタグのリストを持っていないかどうかをチェックするように設定します。 | [文字列リスト](#string_list) |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        doesNotHaveTags:
        - isStinky
        - isSus
        Target:
          targetType: SELF
```

ボスが「isStinky」と「isSus」のタグを持っていない場合にのみ実行され、そうでない場合はスクリプトがブロックされます。

</div>

</details>

</div>

## その他の条件

### randomChance

条件が有効になるランダムな確率を与えます。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `randomChance` | 条件が有効になる確率。 | 0.0から1.0までの数値 |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        randomChance: 0.1
        Target: # Not required
          targetType: SELF # Not required
```

これにより、スクリプトが実行される確率が10%になり、そうでない場合はスクリプトがブロックされます。

</div>

</details>

</div>

この条件はターゲットを必要としないため、特別な条件であることに注意してください。

## タグでNEARBYをフィルタリングする

特定のタグに基づいて `NEARBY_MOBS` または `NEARBY_PLAYERS` をフィルタリングするには、条件のターゲットとして `ACTION_TARGET` を使用します（条件がスクリプト自体ではなくアクションに適用される場合）。これにより、スクリプトは指定されたタグを持つモブ/プレイヤーのみを正確にフィルタリングできます。

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
        conditionType: FILTERING
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

このスクリプトは、近くにいるモブの中で `TurnOff` タグを持つものを探し、そのタグを持っていればAIをオフにします。

</div>

</details>

</div>
```