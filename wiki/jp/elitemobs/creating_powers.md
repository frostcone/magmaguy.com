[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs スクリプトシステム

以下のページでは、エリートスクリプトの作成方法について説明します！

これは高度な機能であり、EliteMobsに関するある程度の深い知識が必要です。

**注：エリートスクリプトは、パワーファイルとして、またはカスタムボスファイルに追加できます！** パワーファイルとして使用する場合、通常のパワーとして、カスタムボスの[powers](ja/elitemobs/creating_bosses.md&section=powers)設定を使用してボスに追加できます。

## エリートスクリプトの追加

ボスにエリートスクリプトを追加するには、ボスファイルに以下のエントリを追加します。

```yml
eliteScript:
```

**注：以下は、大文字/小文字およびスペースに対して非常に敏感です！スペース、改行、および全体的なフォーマットが例と一致していることを確認してください！**

スクリプトの開始を宣言したので、特定のスクリプトを追加できます。この例では、`Example`という名前のスクリプトを作成します。

```yml
eliteScript:
  Example:
```

エリートスクリプトには、`Events`、`Conditions`、`Zones`、`Actions`、`Cooldowns`の5つの異なるセクションがあります。`Actions`のみが必須です。

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

このスクリプトは、エリートがプレイヤーに攻撃されたときに上に押し上げられるようにし、3秒間は再びそうしません（そして、Cooldownsセクションで設定した設定により、他のパワーが1秒間トリガーされるのを停止します）。

スクリプトがどのように構成されているかの一般的な形式がわかったので、各セクションで何ができるかを学ぶ時です！

----

# イベント

[イベント](ja/elitemobs/elitescript_events.md)

上記のリンクをクリックして、イベントの使用方法を学びましょう！

# ターゲット

[ターゲット](ja/elitemobs/elitescript_targets.md)

上記のリンクをクリックして、ターゲットの使用方法を学びましょう！

# アクション

[アクション](ja/elitemobs/elitescript_actions.md)

上記のリンクをクリックして、アクションの使用方法を学びましょう！

# ゾーン

[ゾーン](ja/elitemobs/elitescript_zones.md)

上記のリンクをクリックして、ゾーンの使用方法を学びましょう！

# 条件

[条件](ja/elitemobs/elitescript_conditions.md)

上記のリンクをクリックして、条件の使用方法を学びましょう！

# クールダウン

[クールダウン](ja/elitemobs/elitescript_cooldowns.md)

上記のリンクをクリックして、クールダウンの使用方法を学びましょう！

----

## 複数のエリートスクリプトの追加

1つのイベントに対して複数のアクションを設定できますが、同じボスに複数のスクリプトを設定したい場合はどうでしょうか？これは、新しいスクリプトエントリを作成するのと同じくらい簡単です！前の例を拡張して、別のスクリプトを追加してみましょう。

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
この例では、Example2という名前の2番目のスクリプトを追加しました。Example2は、ボスによってダメージを受けたプレイヤーを燃やします。これは、targetTypeが[DIRECT_TARGET](ja/elitemobs/elitescript_targets.md&section=target-types)に設定されているためです。</br>このスクリプトのクールダウンは200ティックに設定されており、これはボスが10秒ごとにプレイヤーを燃やすことができることを意味します。

## スタンドアロンパワーの作成

スタンドアロンパワーは、ほぼ完全にエリートスクリプトで構成されています。オプションのフィールドは2つだけです。スタンドアロンパワーが機能するためには、`~plugins/EliteMobs/powers`フォルダに配置する必要があることを忘れないでください。</br>スタンドアロンパワーの例：

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

プラグインの他の場所と同様に、パワーが有効になっているかどうかを設定します。

### powerType

パワータイプは、パワーがどのように割り当てられるかを設定します。値は次のとおりです。

- `UNIQUE`: powersセクションでパワーが設定されているカスタムボスにのみ適用されます。
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: どのエリートでもこれらのパワーを取得でき、特定のパワーのサブセットとしてカウントされます。
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: 適切なエンティティタイプのエリートのみがこれらのパワーを持って自然にスポーンでき、メジャーパワーとしてカウントされます。