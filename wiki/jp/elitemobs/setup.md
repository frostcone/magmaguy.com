# セットアップ動画

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***

*このガイドは、EliteMobs ***7.2.37*** 以降を使用していることを前提としています。*

# 初回起動

サーバーを一度再起動してください。

<details>

<summary><b>理由</b></summary>

EliteMobsは、サーバーが最初に起動したときにspigot.yml設定ファイルの最大ヘルスを増やします。これは、Eliteモブが2000以上のヘルスを持てるようにするためです。他のモブのヘルスは変更しないため、バニラやプラグインのモブは変更しません。

この変更を実際に有効にするには、サーバーの再起動が必要です。

</details>

# パーミッション

EliteMobs 7.2.23以降、推奨されるすべてのパーミッションはデフォルトで設定されています。パーミッションの詳細については、[こちら]($language$/elitemobs/permissions_and_commands.md)を参照してください。

# ダンジョンと冒険者ギルドのハブワールド

EliteMobs 7.2.35以降、EliteMobsディレクトリに`imports`フォルダーが追加されました。ダンジョンと冒険者ギルドワールドのインストールプロセスは同じです。

1) ファイルをダウンロードします。 `/em setup` で赤いガラスをクリックすると、ダウンロードへのリンクが表示されます。

2) ファイルをサーバーの `/plugins/EliteMobs/imports` フォルダーにアップロードまたは移動します。必ず**ZIP圧縮された**ファイルを `imports` フォルダー内に入れ、一切変更を加えないでください。EliteMobsは自動的にファイルを展開し、正しい場所に移動します。

<div align="center">

<details>

<summary>図解</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  あなたのブラウザは動画タグをサポートしていません。
</video>

</details>

</div>

3) 再起動するか、`/em reload` を実行します。数秒後、ダンジョンは自動的にインストールされ、`/em setup` を実行すると、ダウンロードしたダンジョンのインジケーターが緑色になり、ダンジョンが正しくインストールされ、最新であることを示します。ダンジョンが黄色いガラス板で表示されている場合は、ダンジョンの新しいバージョンがあり、更新する必要があることを意味します。

<div align="center">

<details>

<summary>図解</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  あなたのブラウザは動画タグをサポートしていません。
</video>

</details>

</div>

4) ***ダンジョンファイルにカスタムモデルが含まれている場合***、必要に応じて、[こちら]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons)に記載されているインストール手順に従ってインストールできます。

以上です！**インストールされたダンジョンと冒険者ギルドへのテレポートは、/em のテレポートページにあります！**

[冒険者ギルドの詳細はこちら！]($language$/elitemobs/adventurers_guild_world.md)
<br>[冒険者ギルドハブワールドをこちらからダウンロード！](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# 推奨プラグイン

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): フラグに使用します。[EliteMobsフラグ一覧]($language$/elitemobs/worldguard_flags.md)。
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): アンチフライフラグに使用し、あると便利です。
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): チャットなど、他のプラグインでEliteMobsの情報を表示するために使用します。[詳細]($language$/elitemobs/placeholders.md)。
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): カスタムボスを他の何かに偽装するために使用します。偽装は公式ダンジョンで頻繁に使用されるため、このプラグインをインストールすることを強くお勧めします。[詳細]($language$/elitemobs/libsdisguises.md)。
- [DiscordSRV]($language$/elitemobs/discordsrv.md): EliteMobsの告知をDiscordチャットにリンクするために使用します。[詳細]($language$/elitemobs/discordsrv.md)

# ダンジョンコンテンツの更新

ダンジョンコンテンツを更新するには、上記のインストール手順を繰り返すだけです。**ファイルを削除する必要は***ありません***。EliteMobsは更新をインポートするときにそれを処理します。

# よくある質問 (FAQ)

## ミニダンジョンがただの平坦な地形になっている

<details><summary>回答</summary>

95％の場合、これはセットアップ手順に従わなかったことを意味します。ファイルを解凍したり、他のプラグインを使用してワールドをロードしたりした場合は、上記の手順に従ってコンテンツを再インストールしてください。ワールドを正しくロードするために他のプラグインは必要ありません。

</details>

## NPCのチャットがおかしい / ワームホールが機能しない / インストール後にその他の奇妙な動作が発生する

<details>

<summary>回答</summary>

ダンジョンをセットアップした後、`/em reload`コマンドを実行して、すべての値が完全に初期化されていることを確認してください。再起動がさらに良いですが、必要はないはずです。

</details>

## ボスがスポーンしない

### 以前はボスがスポーンしていた！

<details>

<summary>回答</summary>

地域のボスにはリスポーン時間があります。ボスがリスポーンするようにスケジュールされている時間は、設定ファイルに移動し、スポーン場所のセクションの `:` の後の数字をコピーすることで確認できます。

例：

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

この場合、探している数字は`1643259941451`です。[この](https://www.unixtimestamp.com/index.php)ウェブサイトを使用して、特定の日付に変換できます。数字を削除してボスを強制的にリスポーンさせることができます。削除したら必ず`/em reload`を実行してください。

</details>

### ボスが一度もスポーンしたことがない！

<details>

<summary>回答</summary>

次のことを確認してください。

- あなたまたは他の誰かがボスを倒したか、タイムアウト機能でボスが逃げ出したか？ボスがリスポーンしている可能性があります。クールダウンを確認してください。詳細については、上のセクションに記載されています。
- コンソール、特にダンジョンをインストールした後、または`/em reload`の後にエラーがないか確認してください。エラーには何が問題なのかが記述されているはずです。
- あなたの地域がモブのスポーンを妨げるような他のプラグインによって保護されていないか確認してください
- ワールドの難易度を確認してください。モブはピースフル難易度ではスポーンできません
- WorldGuardフラグを確認してください。モブのスポーンが許可に設定されているか確認してください
- スポーンエリアの上にダンジョンコンテンツをインストールしていないか確認してください。デフォルトで保護されています
- ごくまれに、問題がサーバーが認識している日付に関係している可能性があります。サーバーマシンの日付が正しいことを確認してください。そうでないと、リスポーンメカニズムに問題が発生する可能性があります。

</details>

## 何かがおかしくて直せない

<details>

<summary>回答</summary>

これは通常、EliteMobsが自己修復できないような方法でファイルを修正しようとして失敗した後に発生します。起動時やダンジョンインストール時のコンソールメッセージから修復方法を特定できない場合は、EliteMobsをクリーンインストールするのが最適です。

プレイヤーデータを保持するために`~/plugins/EliteMobs/data`フォルダーをバックアップしてから、`~/plugins/EliteMobs/`フォルダーを削除してください。サーバーを起動し、シャットダウンし、バックアップしたデータフォルダーの内容を**サーバーがオフラインのときに**復元してから、再度起動します。これで、EliteMobsコンテンツのインストールを再開できます。

</details>
