日本語に翻訳します。Markdownの書式は維持します。

# エリートスクリプトイベント

エリートスクリプトはイベントベースです。これは、特定イベントがトリガーされたときに起動されることを意味します。現在有効なイベントは以下の通りです。

| イベント                           | 詳細                                     | 直接ターゲット [[?]($language$/elitemobs/elitescript_targets.md)] |
| :--------------------------------- | :--------------------------------------- | :---------------------------------------------------------------: |
| EliteMobDamagedByEliteMobEvent     | エリートが他のエリートからダメージを受けた |                                ❌                                 |
| EliteMobDamagedByPlayerEvent       | エリートがプレイヤーからダメージを受けた |                         ダメージを与えたプレイヤー                          |
| EliteMobDamagedEvent               | エリートが何らかからダメージを受けた     |                                ❌                                 |
| EliteMobDeathEvent                 | エリートが死亡した                       |                                ❌                                 |
| EliteMobEnterCombatEvent           | エリートがプレイヤーと戦闘に入った       |                         交戦中のプレイヤー                          |
| EliteMobExitCombatEvent            | エリートが戦闘から離脱した               |                                ❌                                 |
| EliteMobHealEvent                  | エリートが完全に回復した                 |                                ❌                                 |
| EliteMobSpawnEvent                 | エリートがスポーンした                   |                                ❌                                 |
| EliteMobTargetPlayerEvent          | エリートがプレイヤーをターゲットにした   |                         ターゲットにされたプレイヤー                          |
| PlayerDamagedByEliteMobEvent       | エリートがプレイヤーにダメージを与えた   |                          ダメージを受けたプレイヤー                          |
| ElitePhaseSwitchEvent              | フェーズ切り替えによりボスがスポーンした |                                ❌                                 |
| ZoneEnterEvent                     | エンティティがゾーンに入った。ゾーン設定が必要！ | ゾーンに入ったエンティティ                                 |
| ZoneLeaveEvent                     | エンティティがゾーンから出た。ゾーン設定が必要！ | ゾーンから出たエンティティ                                 |

**注：「エリート」とは、増援、ボス、その他を問わず、プラグインによってスポーンされたあらゆる攻撃的なエンティティを指します。**
**注：ZoneEnterEventとZoneLeaveEventは計算コストが高いため、控えめに使用してください！**

`直接ターゲット`はスクリプトターゲットによって使用されます。詳細については[こちら]($language$/elitemobs/elitescript_targets.md)をご覧ください。

`ZoneEnterEvent`と`ZoneLeaveEvent`は、スクリプトで設定されたゾーンへのエンティティの出入りに基づいてアクションをトリガーできる特殊なイベントです。ZoneEnterEventとZoneLeaveEventのDIRECT_TARGETは、ゾーンに入ったまたは出たエンティティです（これは、ゾーンのターゲットとして直接ターゲットを使用できないことを意味します）。また、内部ロジックの仕組み上、出入りのスキャンには絶対座標（特定の座標）とボスに対する相対座標のみを使用できます（プレイヤーをターゲットとするゾーンは使用できません）。

1つのスクリプトには1つの[Event]($language$/elitemobs/elitescript_events.md)セクションのみを含めることができます。ただし、スクリプトのトリガーとして複数のイベントを設定できます。

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

このスクリプトは、エリートがプレイヤーからダメージを受けたとき、またはプレイヤーをターゲットにしたときに、エリートをジャンプさせます。

</div>

</details>

</div>