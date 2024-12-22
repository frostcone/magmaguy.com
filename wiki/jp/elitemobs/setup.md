# セットアップ動画

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***

*このガイドは、EliteMobs ***7.2.37***以降を使用していることを前提としています。*

# 初回起動

サーバーを一度再起動してください。

<details>

<summary><b>理由</b></summary>

EliteMobsは、サーバーの初回起動時にspigot.yml構成ファイルの最大ヘルス値を増やします。これは、Eliteモブが2000を超えるヘルスを持てるようにするためです。他のモブのヘルスは変更しないため、バニラやプラグインのモブは変更されません。

この変更を実際に機能させるには、サーバーの再起動が必要です。

</details>

# 権限

EliteMobs
7.2.23以降では、推奨されるすべての権限がデフォルトで設定されています。権限の詳細については、[こちら]($language$/elitemobs/permissions_and_commands.md)
をご覧ください。

# ダンジョンと冒険者ギルドのハブワールド

EliteMobs 7.2.35以降では、EliteMobsディレクトリに`imports`フォルダが追加されました。ダンジョンと冒険者ギルドのワールドのインストールプロセスは同じです。

1) ファイルをダウンロードします。 `/em setup`で赤いガラスをクリックすると、ダウンロードへのリンクが表示されます。

2) ファイルをサーバーの`/plugins/EliteMobs/imports`フォルダにアップロードまたは移動します。**ZIP**
   ファイルをそのまま`imports`フォルダ内に入れてください。EliteMobsが自動的にファイルを解凍し、正しい場所に移動します。

<div align="center">

<details>

<summary>視覚的な例</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  お使いのブラウザはvideoタグをサポートしていません。
</video>

</details>

</div>

3) 再起動するか、`/em reload`を実行します。数秒後、ダンジョンが自動的にインストールされ、`/em setup`
   を実行すると、ダウンロードしたダンジョンのインジケーターが緑色になり、ダンジョンが正しくインストールされ、最新であることを示すようになります。ダンジョンに黄色のガラス板が表示される場合は、ダンジョンの新しいバージョンがあり、更新が必要であることを意味します。

<div align="center">

<details>

<summary>視覚的な例</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  お使いのブラウザはvideoタグをサポートしていません。
</video>

</details>

</div>

4) ***ダンジョンファイルにカスタムモデルがある場合***
   、必要に応じて[こちら]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons)
   に記載されているインストール手順に従ってインストールできます。

以上です！**インストールしたダンジョンと冒険者ギルドへのテレポートは、/emのテレポートページにあります！**

[冒険者ギルドの詳細はこちら！]($language$/elitemobs/adventurers_guild_world.md)
<br>[冒険者ギルドのハブワールドはこちらからダウンロードしてください！](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# 推奨プラグイン

- [WorldGuard](https://dev.bukkit.org/projects/worldguard)
  ：フラグに使用します。[EliteMobsフラグリスト]($language$/elitemobs/worldguard_flags.md)。
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/)：アンチフライフラグに使用します。あると便利です。
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/)
  ：チャットなど、他のプラグインでEliteMobsの情報を表示するために使用します。[詳細はこちら]($language$/elitemobs/placeholders.md)。
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/)
  ：カスタムボスを他のものに変装させるために使用します。変装は公式ダンジョンで多用されているため、このプラグインをインストールすることを強くお勧めします。[詳細はこちら]($language$/elitemobs/libsdisguises.md)。
- [DiscordSRV]($language$/elitemobs/discordsrv.md)
  ：EliteMobsのお知らせをDiscordチャットにリンクするために使用します。[詳細はこちら]($language$/elitemobs/discordsrv.md)

# ダンジョンコンテンツの更新

ダンジョンコンテンツを更新するには、上記のインストール手順を繰り返すだけです。**ファイルを削除する必要はありません**
。EliteMobsは更新をインポートするときにそれを処理します。

# よくある質問（FAQ）

## ミニダンジョンが平坦な地形になっている

<details><summary>回答</summary>

95％の場合、これはセットアップ手順に従っていないことを意味します。ファイルを解凍したり、他のプラグインを使用してワールドをロードしたりした場合は、上記のリストの手順に従ってコンテンツを再インストールしてください。ワールドを正しくロードするために他のプラグインは必要ありません。

</details>

## NPCのチャットがおかしい/ワームホールが機能しない/インストール後に他の奇妙な動作が発生する

<details>

<summary>回答</summary>

ダンジョンを設定した後、すべての値が完全に初期化されるように、`/em reload`コマンドを実行します。再起動がさらに良いですが、必要ではありません。

</details>

## ボスがスポーンしない

### 以前はボスがスポーンしていた！

<details>

<summary>回答</summary>

地域ボスにはリスポーン時間があります。ボスのリスポーン予定時間は、構成ファイルに移動し、スポーン場所セクションの`:`
の後の数値をコピーすることで確認できます。

例：

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

この場合、探している数値は`1643259941451`です。[この](https://www.unixtimestamp.com/index.php)
ウェブサイトを使用して、特定の日付に変換できます。数値を削除してボスを強制的にリスポーンさせることができます。削除後に必ず`/em reload`
を実行してください。

</details>

### ボスが一度もスポーンしない！

<details>

<summary>回答</summary>

次の点を確認してください。

- あなたまたは他の誰かがボスを倒したか、タイムアウト機能で逃げたか？ボスがリスポーンしている可能性があります。クールダウンを確認してください。詳細については、上記のセクションを参照してください。
- コンソールにエラーがあるかどうか、特にダンジョンをインストールした後または`/em reload`
  の後にエラーがあるかどうかを確認します。エラーは問題が何であるかを教えてくれます。
- あなたの地域が、モブのスポーンを妨げるような他のプラグインによって保護されていないかを確認してください。
- あなたの世界の難易度を確認してください。モブは平和難易度ではスポーンできません。
- WorldGuardフラグを確認し、モブのスポーンが許可に設定されているかどうかを確認してください。
- スポーンエリアにダンジョンコンテンツをインストールしたかどうかを確認してください。デフォルトで保護されています。
- ごくまれに、問題がサーバーが認識している日付に関連している可能性があります。サーバーマシンの日付が正しいことを確認してください。そうしないと、リスポーンメカニズムで問題が発生する可能性があります。

</details>

## 何かがめちゃくちゃになっていて、どうにも直せない

<details>

<summary>回答</summary>

これは通常、EliteMobsが自己修復できない方法でファイルを修正しようとして失敗した後に発生します。起動時/ダンジョンインストール時のコンソールメッセージから修復方法がわからずに行き詰まった場合は、EliteMobsをクリーンインストールするのが最善です。

プレーヤーデータを保持するために`~/plugins/EliteMobs/data`フォルダーをバックアップし、`~/plugins/EliteMobs/`
フォルダーを削除します。サーバーを起動して停止し、バックアップしたデータフォルダーの内容を**サーバーがオフラインの間に**
復元してから、再度起動します。これで、EliteMobsコンテンツのインストールを再開できます。

</details>
