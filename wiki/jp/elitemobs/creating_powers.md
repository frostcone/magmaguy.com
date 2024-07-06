# EliteMobs スクリプティングシステム

次のページでは、Elite スクリプトの作成方法について説明します！

これは高度な機能であり、EliteMobs について深い知識が必要です。

**注意: Elite スクリプトは、パワーファイルまたはカスタムボスファイルに追加できます！** パワーファイルとして使用する場合、カスタムボスの [power]($language$/elitemobs/creating_bosses.md&section=powers) 構成設定を使用して、通常の power としてボスに追加できます。

## Elite スクリプトの追加

Elite スクリプトをボスに追加するには、ボスファイルに次のエントリを追加します。

```yml
eliteScript:
```

**注意: 以下は非常に大文字小文字とスペースに敏感です！スペース、改行、全体的なフォーマットが例と一致していることを確認してください！**

スクリプトの開始を宣言したら、特定のスクリプトを追加できます。この例では、`Example` というスクリプトを作成します。

```yml
eliteScript:
  Example:
```

Elite スクリプトには、`Events`、`Conditions`、`Zones`、`Actions`、`Cooldowns` の 5 つの異なるセクションがあります。`Actions` のみが必須です。

簡単な例を見てみましょう。

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

このスクリプトにより、エリートはプレイヤーに攻撃されたときに上に押し上げられ、3 秒間は再び押し上げられなくなります (Cooldowns セクションの設定により、1 秒間は他のパワーがトリガーされなくなります)。

これで、スクリプトの構造に関する一般的な形式がわかったため、各セクションで何ができるかについて説明します！

----

# イベント

[イベント]($language$/elitemobs/elitescript_events.md)

イベントの使い方については、上記のリンクをクリックしてください。

# ターゲット

[ターゲット]($language$/elitemobs/elitescript_targets.md)

ターゲットの使い方については、上記のリンクをクリックしてください。

# アクション

[アクション]($language$/elitemobs/elitescript_actions.md)

アクションの使い方については、上記のリンクをクリックしてください。

# ゾーン

[ゾーン]($language$/elitemobs/elitescript_zones.md)

ゾーンの使い方については、上記のリンクをクリックしてください。

# 条件

[条件]($language$/elitemobs/elitescript_conditions.md)

条件の使い方については、上記のリンクをクリックしてください。

# クールダウン

[クールダウン]($language$/elitemobs/elitescript_cooldowns.md)

クールダウンの使い方については、上記のリンクをクリックしてください。

----

## 複数の Elite スクリプトの追加

イベントに複数のアクションを追加できますが、同じボスに複数のスクリプトを追加したい場合はどうでしょうか？これは、新しいスクリプトエントリを作成するだけなので簡単です。前の例を拡張して、別のスクリプトを追加してみましょう。

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
この例では、`Example2` という 2 番目のスクリプトを追加しました。`Example2` は、ボスにダメージを与えられたプレイヤーに炎を付けるようにします。これは、`targetType` が [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types) に設定されているためです。 </br>このスクリプトのクールダウンは 200 ティックに設定されているため、ボスは 10 秒おきにしかプレイヤーに炎を付けることができません。

## スタンドアロンパワーの作成

スタンドアロンパワーは、ほとんどすべて Elite スクリプトで構成されています。オプションのフィールドは 2 つだけです。スタンドアロンパワーが機能するためには、`~plugins/EliteMobs/powers` フォルダーに配置する必要があることに注意してください。 </br>スタンドアロンパワーの例:

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

プラグインの他の場所と同様に、power を有効にするかどうかを設定します。

### powerType

Power type は、パワーをどのように割り当てるかを設定します。値は次のとおりです。

- `UNIQUE`: パワーは、パワーセクションにパワーが設定されているカスタムボスにのみ適用されます。
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: すべてのエリートにこれらのパワーを付与でき、特定のパワーのサブセットにカウントされます。
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: これらのパワーは、適切なエンティティタイプのエリートにのみ自然にスポーンすることができ、メジャーパワーにカウントされます。

```



