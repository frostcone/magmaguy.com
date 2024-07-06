```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite スクリプト条件

条件により、スクリプターは、特定の条件に基づいてスクリプトやアクションを実行しないようにすることができます。

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

この例では、`Example` スクリプトは、エリートがまだ生きている場合にのみ実行され、そのブロックが空気ブロックの場合にのみ、エリートの位置の 3 ブロック上に土ブロックを配置します。個々のアクションには、個別の条件を設定できます。

</div>

</details>

</div>

## ターゲット

条件は、[ターゲット]($language$/elitemobs/elitescript_targets.md) システムを使用して、どのエンティティや場所に条件が適用されるかをターゲットにします。つまり、条件をボスやプレイヤー、またはターゲットにできる他のものすべてに関連付けることができます。

---

## 条件タイプ

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `conditionType` | 条件の種類を設定します | `BLOCKING` / `FILTERING` |

条件には、`BLOCKING` と `FILTERING` の 2 つのタイプがあります。`BLOCKING` 条件は、スクリプトまたはアクションの実行を停止させます。`FILTERING` 条件は、条件を満たさないターゲットをスキップするようにアクションを実行します。つまり、空気以外のブロックのみをターゲットにしたい場合は、`FILTERING` 条件を使用し、プレイヤーが死亡した場合にアクションを停止させたい場合は、`BLOCKING` 条件を使用します。

**アクション以外の条件は常に `BLOCKING` です。** アクション内の条件は、`BLOCKING` または `FILTERING` となります。

_**注意: ターゲットが `SELF`（ボス）で、条件チェックが `isAlive` の場合、チェックは常に `BLOCKING` になります！**_ これは `FILTERING` 条件に含めることもできますが、この特定の部分は `BLOCKING` として動作します。

アクション内の条件は、デフォルトで `FILTERING` に設定されています。

---

## 位置ベースの条件

### locationIsAir

ターゲットの位置が空気ブロックかどうかを条件に設定します。

| キー | 詳細 |       値        |
| --- | :-: |:-------------------:|
| `locationIsAir` | 位置が空気ブロックかどうか（またはその逆）を確認します。 | [Boolean](#boolean) |

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

ボスのいる場所の 2 ブロック上の位置が空気ブロックかどうかを確認します。

</div>

</details>

</div>

---

### isOnFloor

位置が床の上にあるかどうかを確認します。これは、その位置のブロックが固体ではないが、その下のブロックが固体であることを意味します。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `isOnFloor` | 位置が床の位置かどうか（またはその逆）を確認します。 | [Boolean](#boolean) |

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

ターゲットの下にある位置が、一致する素材タイプかどうかを確認します。

| キー |                     詳細                     |        値         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | 確認する素材タイプを設定します。 | [Material](#material) |

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

ボスが BIRCH_WOOD に立っている場合にのみ実行されます。

</div>

</details>

</div>

## エンティティベースの条件

### isAlive

条件ターゲットのエンティティが生きているかどうかを条件に設定します。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `isAlive` | エンティティが生きているかどうか（または死んでいるかどうか）を確認します。 | [Boolean](#boolean) |

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

ターゲットエンティティが特定のタグを持っているかどうかを確認します。スクリプターは、アクションを通じて任意のタグを割り当てたり、解除したりして、後の動作の条件として使用できます。タグは、ボスに割り当てることができる文字列（単語）です。

| キー | 詳細 |           値            |
| --- | :-: |:---------------------------:|
| `hasTags` | エンティティがタグのリストを持っているかどうかを確認します。 | [String List](#string_list) |

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

`hasTags` と同じですが、ボスがこれらの値を持っていないかどうかを確認します。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `doesNotHaveTags` | エンティティがタグのリストを持っていないかどうかを確認します。 | [String List](#string_list) |

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

条件が有効になるランダムな確率を設定します。

| キー | 詳細 | 値 |
| --- | :-: | :-: |
| `randomChance` | 条件が有効になる確率を設定します。 | 0.0 と 1.0 の間の数値 |

この条件は、ターゲットを必要としないため、特殊な条件です。

```



