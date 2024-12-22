# エリートスクリプトイベント

EliteScriptsはイベントベースです。これは、特定イベントがトリガーされたときに起動されることを意味します。以下は現在有効なイベントです。

| イベント                           |               詳細               | ダイレクトターゲット [[?]($language$/elitemobs/elitescript_targets.md)] |
|:-------------------------------|:------------------------------:|:-------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent |   エリートが別のエリートによってダメージを受けた場合    |                               ❌                               |
| EliteMobDamagedByPlayerEvent   |    エリートがプレイヤーによってダメージを受けた場合    |                         ダメージを与えたプレイヤー                         |
| EliteMobDamagedEvent           |   エリートが何らかの攻撃によってダメージを受けた場合    |                               ❌                               |
| EliteMobDeathEvent             |          エリートが死亡した場合           |                               ❌                               |
| EliteMobEnterCombatEvent       |      エリートがプレイヤーとの戦闘に入った場合      |                         戦闘を開始したプレイヤー                          |
| EliteMobExitCombatEvent        |        エリートが戦闘から離脱した場合         |                               ❌                               |
| EliteMobHealEvent              |         エリートが完全に回復した場合         |                               ❌                               |
| EliteMobSpawnEvent             |         エリートがスポーンした場合          |                               ❌                               |
| EliteMobTargetPlayerEvent      |      エリートがプレイヤーをターゲットした場合      |                         ターゲットされたプレイヤー                         |
| PlayerDamagedByEliteMobEvent   |     エリートがプレイヤーにダメージを与えた場合      |                         ダメージを受けたプレイヤー                         |
| ElitePhaseSwitchEvent          |       フェーズ切り替えによるボスのスポーン       |                               ❌                               |
| ZoneEnterEvent                 | エンティティがゾーンに入った場合。ゾーンの設定が必要です！  |                         ゾーンに入ったエンティティ                         |
| ZoneLeaveEvent                 | エンティティがゾーンから離れた場合。ゾーンの設定が必要です！ |                        ゾーンから離れたエンティティ                         |

**注: 「エリート」とは、リインフォースメント、ボスなど、プラグインによってスポーンされたすべてのアグレッシブなエンティティを指します。
**
**注: ZoneEnterEventとZoneLeaveEventは計算コストが高いため、使用は控えめにしてください！**

`ダイレクトターゲット`
はスクリプトターゲットによって使用されます。詳細はこちら[here]($language$/elitemobs/elitescript_targets.md)をご覧ください。

`ZoneEnterEvent` と `ZoneLeaveEvent` は、スクリプトで設定されたゾーンへのエンティティの出入りに基づいてアクションをトリガーできる特別なイベントです。ZoneEnterEvent
と ZoneLeaveEvent の DIRECT_TARGET
は、入ったまたは出たエンティティです（つまり、ダイレクトターゲットをゾーンのターゲットとして使用することはできません）。また、内部ロジックの都合上、絶対座標（特定の座標）とボスからの相対座標のみが出入りスキャンに使用できます（プレイヤーをターゲットにするゾーンは使用できません）。

スクリプトごとに1つの[Event]($language$/elitemobs/elitescript_events.md)セクションのみが存在できます。ただし、スクリプトのトリガーとして複数のイベントを設定できます。

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    - EliteMobTargetPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

このスクリプトでは、エリートがプレイヤーに殴られたとき、またはプレイヤーをターゲットにしたときにジャンプします。

</div>

</details>

</div>
