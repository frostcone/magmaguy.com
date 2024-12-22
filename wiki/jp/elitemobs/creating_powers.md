[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs スクリプトシステム

このページでは、Elite スクリプトの作成方法について説明します。

これは高度な機能であり、EliteMobs の詳細な知識が必要です。

**注意: Elite スクリプトはパワーファイルまたはカスタムボスファイルとして追加できます！**
パワーファイルとして使用する場合、通常のボスへのパワーとして追加できます。これは、カスタムボスの [powers]($language$/elitemobs/creating_bosses.md&section=powers)
設定を使用して、通常どおりに行います。

## EliteScript の追加

ボスに EliteScript を追加するには、ボスファイルに次のエントリを追加します。

```yml
eliteScript:
```

**注意: 次の内容は、大文字と小文字、およびスペースに非常に敏感です！スペース、改行、および全体的なフォーマットが例と一致していることを確認してください！
**

スクリプトの開始を宣言したので、特定のスクリプトを追加できます。この例では、`Example` というスクリプトを作成します。

```yml
eliteScript:
  Example:
```

EliteScripts には、`Events`、`Conditions`、`Zones`、`Actions`、`Cooldowns` の 5 つの異なるセクションがあります。`Actions`
のみが必須です。

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

このスクリプトは、プレイヤーに攻撃されるとエリートが上に押し上げられ、3 秒間は二度とそうしない（また、Cooldowns
セクションで設定した設定により、他のパワーが 1 秒間トリガーされなくなる）ようにします。

スクリプトの構造の一般的な形式を理解したので、各セクションで何ができるかを学ぶ時が来ました！

----

# Events

[Events]($language$/elitemobs/elitescript_events.md)

イベントの使用方法については、上記のリンクをクリックしてください！

# Targets

[Targets]($language$/elitemobs/elitescript_targets.md)

ターゲットの使用方法については、上記のリンクをクリックしてください！

# Actions

[Actions]($language$/elitemobs/elitescript_actions.md)

アクションの使用方法については、上記のリンクをクリックしてください！

# Zones

[Zones]($language$/elitemobs/elitescript_zones.md)

ゾーンの使用方法については、上記のリンクをクリックしてください！

# Conditions

[Conditions]($language$/elitemobs/elitescript_conditions.md)

条件の使用方法については、上記のリンクをクリックしてください！

# Cooldowns

[Cooldowns]($language$/elitemobs/elitescript_cooldowns.md)

クールダウンの使用方法については、上記のリンクをクリックしてください！

----

## 複数の EliteScript の追加

1
つのイベントに複数のアクションを設定できますが、同じボスに複数のスクリプトを設定したい場合はどうすればよいでしょうか？これは、新しいスクリプトエントリを作成するのと同じくらい簡単です！前の例を拡張して、別のスクリプトを追加してみましょう。

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

この例では、Example2 という 2 番目のスクリプトを追加しました。Example2 は、ボスによってダメージを受けたプレイヤーを炎上させます。これは、targetType
が [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types) に設定されているためです。</br>
このスクリプトのクールダウンは 200 ティックに設定されており、ボスは 10 秒ごとにプレイヤーを炎上させることができるだけであることを意味します。

## スタンドアロンパワーの作成

スタンドアロンパワーは、ほぼ完全に Elite スクリプトで構成されています。オプションのフィールドは 2
つだけです。スタンドアロンパワーを機能させるには、`~plugins/EliteMobs/powers`
フォルダーに配置する必要があることを忘れないでください。</br>スタンドアロンパワーの例：

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

プラグインの他の場所と同じように、パワーが有効かどうかを設定します。

### powerType

パワータイプは、パワーの割り当て方法を設定します。値は次のとおりです。

- `UNIQUE`: パワーは、パワーセクションにパワーが設定されているカスタムボスにのみ適用されます。
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: すべてのエリートがこれらのパワーを取得でき、特定のパワーのサブセットにカウントされます。
- `MAJOR_ZOMBIE`、`MAJOR_SKELETON`、`MAJOR_BLAZE`、`MAJOR_ENDERMAN`、`MAJOR_GHAST`:
  適切なエンティティタイプのエリートのみがこれらのパワーで自然にスポーンでき、主要なパワーにカウントされます。
