```markdown
# コマンドの使い方
- ヘルプについては、コマンドページを参照してください: [コマンドページ]($language$/betterstructures/commands.md)

# 構造物がどこに出現するかを確認する
- サーバーの管理者で、警告をオフにしていない場合は、構造物が現れるとチャットに通知されます。
- チャットメッセージをクリックして、構造物にテレポートします（Bedrock Edition では使用できません）。
- `/betterstructures warn` を使用して、警告をオン/オフにします。

# 構造物が表示されない理由
- 通常、構造物は、すでに探索されたエリアには表示されません。構造物を見つけるには、新しいエリアに移動してください。

<details> 
<summary>詳細</summary>

構造物は、すでに探索されたエリアには表示されません。これは、エリアを過度に埋め尽くしたり、プレイヤーの建築物を破壊したりするのを防ぐためです。BetterStructures は、インストールされる前にエリアが探索されたかどうかを認識し、そこに構造物を配置しません。BetterStructures をインストールする前にワールドが完全に探索されていた場合は、ワールドを再生成するか、新しいワールドを作成する必要があります。

</details>

# EliteMobs と BetterStructures

## EliteMobs が提供するもの
- EliteMobs について学ぶ: [EliteMobs Wiki](#)
- 構造物にボスを追加します。

## 事前作成された EliteMobs コンテンツの取得
- [magmaguy.itch.io](https://magmaguy.itch.io/) と [patreon.com/magmaguy](https://www.patreon.com/magmaguy) から入手できます。

## 他の機能を使用せずに EliteMobs を使用する
- EliteMobs の他の機能をオフにすることができます。無効にするには、次の設定を変更します。
    - `events.yml`: `timedEventsEnabled: false` と `actionEventsEnabled: false` に設定すると、すべてのイベントが無効になります。
    - `MobCombatSettings.yml`: `doNaturalMobSpawning: false` に設定すると、自然発生するエリートのスポーンが無効になります。

## 構造物に EliteMobs のボスを追加する

- 看板の最初の行に `[elitemobs]` を追加します。
- 看板の 2 行目/3 行目/4 行目に、ボスのファイル名（`test_boss.yml` など）を追加します。
- 詳細は [こちら]($language$/betterstructures/creating_structures.md) をご覧ください。

# BetterStructures と他のプラグインの連携

## MythicMobs
- 看板の最初の行に `[mythicmobs]` と入力し、その後に他の行にモブの識別子を入力することで、Mythic Mobs をスポーンさせます。
- EliteMobs は、BetterStructures との組み合わせでボスを使用するのに適しています。これは、私が両方を作成したためです。

## MMOItems
- `mmoitems=<TYPE>@<ITEM-ID>` を宝箱の設定ファイルに追加します。

## 他のプラグインのカスタムアイテム
- lootify コマンドを使用して、チェストにアイテムを追加します。[コマンドページ]($language$/betterstructures/commands.md) をご覧ください。

# 独自の構造物の作成
- 作成方法はこちらをご覧ください: [構造物の作成ガイド]($language$/betterstructures/creating_structures.md)

# パフォーマンスへの影響と最小化
- 多くの構造物を生成すると、サーバーの速度が遅くなる可能性があります。
- [Chunky](https://www.spigotmc.org/resources/chunky.81534/) を使用して、ワールドを事前に生成し、パフォーマンスの問題を回避してください。
- EliteMobs を使用していない場合は、ワールド生成後に BetterStructures を削除できます。
- EliteMobs を使用している場合は、パフォーマンスへの影響を最小限に抑えるために、BetterStructures を使用して、保護されたエリアを管理してください。


```


