```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite スクリプトイベント

Elite スクリプトはイベントベースです。つまり、特定のイベントがトリガーされると起動されます。現在有効なイベントを以下に示します。

| イベント | 詳細 | 直接ターゲット [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | エリートが別のエリートからダメージを受けた |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | エリートがプレイヤーからダメージを受けた |                         ダメージを与えたプレイヤー                          |
| EliteMobDamagedEvent | エリートが何かからダメージを受けた |                                ❌                                 |
| EliteMobDeathEvent | エリートが死亡した |                                ❌                                 |
| EliteMobEnterCombatEvent | エリートがプレイヤーと戦闘状態になった |                         戦闘を開始したプレイヤー                          |
| EliteMobExitCombatEvent | エリートが戦闘状態から外れた |                                ❌                                 |
| EliteMobHealEvent | エリートが完全に回復した |                                ❌                                 |
| EliteMobSpawnEvent | エリートがスポーンした |                                ❌                                 |
| EliteMobTargetPlayerEvent | エリートがプレイヤーをターゲットにした |                         ターゲットにされたプレイヤー                          |
| PlayerDamagedByEliteMobEvent | エリートがプレイヤーにダメージを与えた |                          ダメージを受けたプレイヤー                          |
| ElitePhaseSwitchEvent | ボスのフェーズが切り替わったときにボスがスポーン |                                ❌                                 |
| ZoneEnterEvent | エンティティがゾーンに入った。ゾーンが設定されている必要があります！ | ゾーンに入ったエンティティ                                 |
| ZoneLeaveEvent | エンティティがゾーンから出た。ゾーンが設定されている必要があります！ | ゾーンから出たエンティティ                                 |

**注意: 「エリート」とは、援軍、ボスなどにかかわらず、プラグインによってスポーンされた攻撃的なエンティティを指します。**
**注意: ZoneEnterEvent と ZoneLeaveEvent は、実行コストが高いため、控えめに使用してください！**

`Direct Target` は、スクリプトターゲットで使用されます。詳細はこちらをご覧ください。[こちら]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` と `ZoneLeaveEvent` は、スクリプトで設定されたゾーンに入ったり出たりしたエンティティに基づいてアクションをトリガーできる特別なイベントです。ZoneEnterEvent と ZoneLeaveEvent の DIRECT\_TARGET は、ゾーンに出入りしたエンティティです（つまり、直接ターゲットをゾーンのターゲットとして使用することはできません）。また、内部ロジックの仕組み上、ゾーンに出入りするスキャンには、絶対ポイント（特定の座標）とボスを基準としたポイントのみを使用できます（プレイヤーをターゲットにするゾーンは使用できません）。

スクリプトごとに、[イベント]($language$/elitemobs/elitescript_events.md) セクションは 1 つしか設定できません。ただし、複数のイベントをスクリプトのトリガーとして設定できます。

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

このスクリプトにより、エリートは、プレイヤーから攻撃を受けた場合、またはプレイヤーをターゲットにした場合にジャンプします。

</div>

</details>

</div>


```

