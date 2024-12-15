# Elite Script イベント

EliteScript はイベントベースです。つまり、特定のイベントがトリガーされたときに起動します。現在有効なイベントは以下のとおりです。

| イベント | 詳細 | 直接ターゲット [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | エリートが別のエリートによってダメージを受けた |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | エリートがプレイヤーによってダメージを受けた |                         ダメージを与えたプレイヤー                          |
| EliteMobDamagedEvent | エリートが何らかの要因によってダメージを受けた |                                ❌                                 |
| EliteMobDeathEvent | エリートの死亡 |                                ❌                                 |
| EliteMobEnterCombatEvent | エリートがプレイヤーと戦闘を開始した |                         交戦中のプレイヤー                          |
| EliteMobExitCombatEvent | エリートが戦闘を終了した |                                ❌                                 |
| EliteMobHealEvent | エリートが完全に回復した |                                ❌                                 |
| EliteMobSpawnEvent | エリートのスポーン |                                ❌                                 |
| EliteMobTargetPlayerEvent | エリートがプレイヤーをターゲットにした |                         ターゲットされたプレイヤー                          |
| PlayerDamagedByEliteMobEvent | エリートがプレイヤーにダメージを与えた |                          ダメージを受けたプレイヤー                          |
| ElitePhaseSwitchEvent | フェーズ切り替えからのボススポーン |                                ❌                                 |
| ZoneEnterEvent | エンティティがゾーンに入った。ゾーンの設定が必要！ | ゾーンに入ったエンティティ                                 |
| ZoneLeaveEvent | エンティティがゾーンから出た。ゾーンの設定が必要！ | ゾーンから出たエンティティ                                 |

**注：「エリート」とは、リインフォースメント、ボスなど、プラグインによってスポーンされたすべてのアグレッシブなエンティティを指します。**
**注：ZoneEnterEventとZoneLeaveEventは計算コストが高いため、使用は控えめにしてください！**

`直接ターゲット`はスクリプトターゲットによって使用されます。詳細については[こちら]($language$/elitemobs/elitescript_targets.md)をご覧ください。

`ZoneEnterEvent`と`ZoneLeaveEvent`は、スクリプトで設定されたゾーンへのエンティティの出入りに基づいてアクションをトリガーできる特別なイベントです。ZoneEnterEventとZoneLeaveEventのDIRECT_TARGETは、出入りしたエンティティです（これは、ゾーンのターゲットとして直接ターゲットを使用できないことを意味します）。また、内部ロジックの仕組み上、絶対座標（特定の座標）とボスからの相対座標のみを使用して、出入りのスキャンを行うことができます（プレイヤーをターゲットにするゾーンは使用できません）。

スクリプトごとに[Event]($language$/elitemobs/elitescript_events.md)セクションは1つしか存在できません。ただし、1つのスクリプトのトリガーとして複数のイベントを設定できます。

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

このスクリプトでは、エリートがプレイヤーに攻撃されたとき、またはプレイヤーをターゲットにしたときにジャンプします。

</div>

</details>

</div>
