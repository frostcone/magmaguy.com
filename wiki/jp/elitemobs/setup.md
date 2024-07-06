```markdown
# セットアップビデオ

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***


*このガイドは、EliteMobs ***7.2.37*** 以降を対象としています。*

# 最初の起動

サーバーを 1 回再起動します。

<details>

<summary><b>なぜですか？</b></summary>

EliteMobs は、サーバーが最初に起動したときに、`spigot.yml` 設定ファイルの最大体力を増やします。これは、Elite モブの体力を 2000 を超えるようにするためです。他のモブの体力は変更されません。つまり、vanilla モブやプラグインモブは変更されません。

この変更は、実際に動作させるためにサーバーの再起動が必要です。

</details>

# 権限

EliteMobs 7.2.23 以降、推奨されるすべての権限は、デフォルトで設定されています。権限の詳細については、[こちら]($language$/elitemobs/permissions_and_commands.md) をご覧ください。

# ダンジョンとアドベンチャーギルドハブワールド

EliteMobs 7.2.35 以降、EliteMobs ディレクトリに `imports` フォルダが追加されました。ダンジョンとアドベンチャーギルドワールドのインストールプロセスは次のとおりです。

1) ファイルをダウンロードします。`/em setup` で赤いガラスをクリックすると、ダウンロードへのリンクが表示されます。

2) サーバーの `/plugins/EliteMobs/imports` フォルダに、ファイルをアップロードまたは移動します。**ZIP 化された** ファイルを `imports` フォルダに配置し、変更を加えないようにしてください。EliteMobs は自動的にファイルを解凍し、正しい場所に移動します。

<div align="center">

<details>

<summary>ビジュアル例</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

3) サーバーを再起動するか、`/em reload` を実行します。数秒後、ダンジョンが自動的にインストールされます。`/em setup` を実行すると、ダウンロードしたダンジョンのインジケーターが緑になり、ダンジョンが正しくインストールされ、最新の状態であることが示されます。ダンジョンに黄色のガラスパネルが表示される場合は、ダンジョンの新しいバージョンがあり、更新する必要があることを意味します。

<div align="center">

<details>

<summary>ビジュアル例</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

4) ***ダンジョンファイルにカスタムモデルが含まれている場合***、必要に応じて、[こちら]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) に記載されているインストール手順に従って、モデルをインストールできます。

これで完了です！ **インストールされたダンジョンとアドベンチャーギルドへのテレポートは、`/em` の「テレポート」ページにあります！**

[アドベンチャーギルドの詳細はこちら！]($language$/elitemobs/adventurers_guild_world.md)
<br>[アドベンチャーギルドハブワールドをダウンロード！](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# 推奨プラグイン

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): フラグに使用されます。 [EliteMobs のフラグリスト]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): 反飛行フラグに使用されます。あると便利です。
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): チャットなど、他のプラグインで EliteMobs の情報を表示するために使用されます。 [詳細情報]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): カスタムボスを他のものに（他のプレイヤーを含む）変装させるために使用されます。変装は、公式ダンジョンで頻繁に使用されるため、このプラグインをインストールすることを強くお勧めします。 [詳細情報]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): EliteMobs のアナウンスを Discord チャットにリンクするために使用されます。 [詳細情報]($language$/elitemobs/discordsrv.md)

# ダンジョンコンテンツの更新

ダンジョンコンテンツを更新するには、上記と同じインストール手順を繰り返します。**ファイルを削除する必要はありません。** EliteMobs は、インポート時に自動的に処理します。

# よくある質問 (FAQ)

## ミニダンジョンがただの平らな地形です。

<details><summary>回答</summary>

95% の場合、これは設定手順に従っていないことが原因です。ファイルを解凍したり、他のプラグインを使用してワールドをロードしたりした場合は、上記の手順に従ってコンテンツを再インストールしてください。ワールドを正しくロードするために、他のプラグインは必要ありません。

</details>

## ダンジョンを設定した後に、NPC のチャットが変に見えたり、ワープホールが機能しなかったり、その他の奇妙な動作が発生します。

<details>

<summary>回答</summary>

すべて値が正しく初期化されるように、ダンジョンを設定した後に、コマンド `/em reload` を実行してください。サーバーを再起動する方が良いですが、必要ない場合もあります。

</details>

## ボスがスポーンしません

### 以前はボスがスポーンしていました！

<details>

<summary>回答</summary>

リージョンボスには、リスポーン時間が設定されています。ボスがいつリスポーンされる予定かを確認するには、ボスの設定ファイルに移動し、スポーン位置セクションの `:` の後の数字をコピーします。

例：

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

この場合、探している数字は `1643259941451` です。[この](https://www.unixtimestamp.com/index.php) ウェブサイトを使用して、特定の日時に変換できます。数字を削除すると、ボスが強制的にリスポーンします。削除したら、`/em reload` を実行してください。

</details>

### ボスがまったくスポーンしません！

<details>

<summary>回答</summary>

次のことを確認してください。

- あなたまたは他のプレイヤーがボスを倒したか、またはタイムアウト機能によってボスが脱出したか？ボスがリスポーンしている可能性があります。上記セクションのクールダウンを確認してください。
- コンソールにエラーが表示されていないかを確認してください。特に、ダンジョンをインストールした後、または `/em reload` を実行した後は、エラーが表示されるはずです。エラーから問題点がわかります。
- リージョンが、モブのスポーンを妨げる可能性のある、他のプラグインによって保護されていないかを確認してください。
- ワールドの難易度を確認してください。モブは、平和難易度ではスポーンしません。
- WorldGuard のフラグを確認してください。モブのスポーンが許可されているかを確認してください。
- ダンジョンコンテンツを、デフォルトで保護されているスポーンエリアにインストールしていないかを確認してください。
- 非常にまれに、サーバーが現在の日付と時刻を正しく認識していないことが原因である場合があります。サーバーマシンの日付と時刻が正しいことを確認してください。そうしないと、リスポーンメカニズムが問題を引き起こす可能性があります。

</details>


## 何かがうまくいかず、修正できません

<details>

<summary>回答</summary>

これは、EliteMobs が自己修復できない方法でファイルを修正しようとして失敗した場合に発生することがよくあります。コンソールの起動/ダンジョンのインストール時のメッセージから修復方法がわからずに困っている場合は、EliteMobs をクリーンインストールすることをお勧めします。

プレイヤーデータを保存するために、`~/plugins/EliteMobs/data` フォルダをバックアップし、`~/plugins/EliteMobs/` フォルダを削除します。サーバーを起動し、シャットダウンして、**サーバーがオフラインの間** にバックアップした data フォルダの内容を復元し、サーバーを再び起動します。これで、EliteMobs のコンテンツのインストールを再開できます。

</details>


```



