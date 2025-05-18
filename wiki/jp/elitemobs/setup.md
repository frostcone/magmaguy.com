はい、承知いたしました。入力されたテキストを日本語に翻訳し、Markdownの書式を維持します。

```markdown
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

EliteMobsは、サーバーが初めて起動する際に、spigot.yml設定ファイルの最大体力を増加させます。これは、エリートモブが2000以上の体力を持てるようにするためです。他のモブの体力を変更することはありません。したがって、バニラやプラグインのモブは変更されません。

この変更を実際に機能させるには、サーバーの再起動が必要です。

</details>

# 権限

EliteMobs 7.2.23以降、推奨されるすべての権限はデフォルトで既に設定されています。権限の詳細については、[こちら]($language$/elitemobs/permissions_and_commands.md)をご覧ください。

# ダンジョンと冒険者ギルドハブワールド

EliteMobs 7.2.35以降、EliteMobsディレクトリ内に`imports`フォルダが作成されます。ダンジョン、冒険者ギルドワールドのインストール手順は同じです。

1) ファイルをダウンロードします。`/em setup`で赤いガラスをクリックすると、ダウンロードへのリンクが表示されます。

2) ファイルをサーバーの`/plugins/EliteMobs/imports`フォルダにアップロード/移動します。**ZIP圧縮された**ファイルを`imports`フォルダ内に、一切変更を加えずに入れてください。EliteMobsが自動的にファイルを解凍し、正しい場所に移動します。

<div align="center">

<details>

<summary>視覚的な例</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

3) 再起動するか、`/em reload`を実行します。数秒後、ダンジョンが自動的にインストールされます。`/em setup`を実行すると、ダウンロードしたダンジョンのインジケーターが緑色になり、ダンジョンが正しくインストールされ、最新の状態であることを示します。いずれかのダンジョンが黄色のガラス板を表示している場合、それはダンジョンの新しいバージョンがあり、更新が必要であることを意味します。

<div align="center">

<details>

<summary>視覚的な例</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

4) ***ダンジョンファイルにカスタムモデルが含まれている場合***、必要に応じて[こちら]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons)に記載されているインストール手順に従ってインストールできます。

以上です！**インストールされたダンジョンと冒険者ギルドへのテレポートは、/emのテレポートページで見つけることができます！**

[冒険者ギルドの詳細はこちら！]($language$/elitemobs/adventurers_guild_world.md)
<br>[冒険者ギルドハブワールドのダウンロードはこちら！](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# 推奨プラグイン

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): フラグに使用されます。[EliteMobsフラグリスト]($language$/elitemobs/worldguard_flags.md)。
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): アンチフライフラグに使用され、あると便利です。
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): チャットなど、他のプラグインでEliteMobs情報を表示するために使用されます。[詳細]($language$/elitemobs/placeholders.md)。
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): カスタムボスを他の何かに偽装するために使用されます。偽装は公式ダンジョンで多用されているため、このプラグインをインストールすることを強く推奨します。[詳細]($language$/elitemobs/libsdisguises.md)。
- [DiscordSRV]($language$/elitemobs/discordsrv.md): EliteMobsのアナウンスをDiscordチャットにリンクするために使用されます。[詳細]($language$/elitemobs/discordsrv.md)

# ダンジョンコンテンツの更新

ダンジョンコンテンツを更新するには、上記のインストール手順を繰り返すだけです。**ファイルを削除する***必要はありません***。EliteMobsは更新をインポートする際にそれを処理します。

# よくある質問 (FAQ)

## ミニダンジョンが平坦な地形になっている

<details><summary>回答</summary>

95%の場合、これはセットアップ手順に従わなかったことを意味します。ファイルを解凍したり、他のプラグインを使用してワールドをロードしたりした場合、上記の手順に従ってコンテンツを再インストールしてください。ワールドを正しくロードするために他のプラグインは必要ありません。

</details>

## NPCのチャットがおかしい / ワームホールが機能しない / インストール後のその他の奇妙な動作

<details>

<summary>回答</summary>

ダンジョンを設定した後、すべての値が完全に初期化されるように、コマンド`/em reload`を実行してください。再起動はさらに良いですが、必須ではありません。

</details>

## ボスがスポーンしない

### 以前はボスがスポーンしていた！

<details>

<summary>回答</summary>

地域ボスにはリスポーン時間があります。ボスの設定ファイルを開き、スポーン場所セクションの`:`の後の数字をコピーすることで、ボスがいつリスポーンする予定か確認できます。

例:

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

この場合、探している数字は`1643259941451`です。[この](https://www.unixtimestamp.com/index.php)ウェブサイトを使用して、それを特定の日付に変換できます。数字を削除してボスを強制的にリスポーンさせることもできます。削除後、必ず`/em reload`を実行してください。

</details>

### ボスが一度もスポーンしない！

<details>

<summary>回答</summary>

以下の点を確認してください。

- あなたまたは他の誰かがボスを倒したか、またはタイムアウト機能で逃げたか？ボスはリスポーン中かもしれません。クールダウンを確認してください。その情報は上記のセクションにあります。
- コンソールにエラーがないか確認してください。特にダンジョンをインストールした後や`/em reload`の後です。エラーは問題の原因を示しているはずです。
- あなたの地域が、モブのスポーンを妨げる他のプラグインによって保護されていないか確認してください。
- ワールドの難易度を確認してください。ピースフル難易度ではモブはスポーンできません。
- WorldGuardフラグを確認し、モブのスポーンが許可されているか確認してください。
- スポーンエリアの上にダンジョンコンテンツをインストールしていないか確認してください。スポーンエリアはデフォルトで保護されています。
- ごく稀に、サーバーが認識している日付に問題がある場合があります。サーバーマシンの日付が正しいことを確認してください。そうでない場合、リスポーンメカニズムが問題を引き起こす可能性があります。

</details>


## 何かおかしくなってしまい、どうしても直せない

<details>

<summary>回答</summary>

これは通常、EliteMobsが自己修復できない方法でファイルを正しく変更しようとして失敗した後に発生します。起動時やダンジョンインストールの際のコンソールメッセージから修復方法が分からず行き詰まっている場合、最善の方法はEliteMobsのクリーンインストールです。

プレイヤーデータを保持するために、`~/plugins/EliteMobs/data`フォルダをバックアップし、`~/plugins/EliteMobs/`フォルダを削除します。サーバーを起動し、シャットダウンし、バックアップしたdataフォルダの内容を**サーバーがオフラインの間に**復元してから、再度起動します。これでEliteMobsコンテンツのインストールを再開できます。

</details>
```