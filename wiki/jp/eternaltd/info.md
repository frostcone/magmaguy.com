日本語に翻訳します。Markdownの書式は維持します。

# カスタムEternalTDマップの作成方法

## マップ用のlevel.ymlファイルを作成する

以下の簡単な手順に従って、レベル設定ファイルを作成し、マップを開始しましょう。

1. 新しいテキストドキュメントを作成し、*your_level_name.yml* のような名前を付けます（"your_level_name"は実際のレベル/マップ名に置き換えてください）。

2. お気に入りのテキストエディタでファイルを開きます。

3. 楽しい部分から始めましょう！この設定を使用してレベル名を追加します：
```yaml
levelName: "&aMy Awesome Level"
```
Minecraftのカラーコードやその他のテキスト修飾子で装飾しても構いません。

4. 次に、クールな説明でレベルに個性を与えましょう：
```yaml
levelDescription:
- "&aMy level is pretty cool."
- "&aHope you enjoy!"
```
説明にはさらに行を追加できますが、簡潔に保つのが良いでしょう。

5. ウェーブの時間です！レベルで使用するEternalTDウェーブを指定します：
```yaml
wavesConfigFile: my_waves.yml
```
ウェーブファイルの実際の名前を使用することを忘れないでください。1レベルにつき1ウェーブです！

6. レベルが使用するワールド（ビルド）を設定します：
```yaml
worldName: my_world_folder_name
```
EternalTDの*worlds*フォルダ内にある実際のワールド名を使用してください。

7. 最後になりましたが、レベルの設定に最適な環境を選択します：
```yaml
environment: NORMAL
```
NORMAL、NETHER、またはTHE_ENDから選択できます。お好きなものを選んでください。

レベル設定ファイルはこれで準備完了です！ファイルの残りの部分は、次のステップでビルドをマッピングする際に使用するEternalTDコマンドによって入力されます。

## ビルドの準備

EternalTDで使用するためにビルドをマッピングする前に、以下の方法でセットアップすることが不可欠です：

- Voidワールドに設定します。Multiverseを使用している場合は、以下のコマンドを使用できます：
  ```
  /mvcreate yourworldnamehere NORMAL -g VoidGen:.
  ```
- ビルドの周りにタイトなワールドボーダーを設定します。
- ビルドの数ブロック下に、高さ1ブロック、ワールドボーダーに届くのに十分な半径（推奨半径200ブロック）のバリアシリンダーを作成します。WorldEditを使用している場合は、以下を実行できます：
  ```
  //cyl barrier 200 1
  ```
- スポーンポイントをビルドの中心の安全な場所に設定します。
- 以下のルールを適用します：
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- マップのプレイエリアは同じYレベルにある必要があります。マッピングプロセスを開始する際に、それより高いまたは低いものは無視されます。

## EternalTDで使用するためにビルドをマッピングする

EternalTDで使用するためにビルドのプレイエリアをマッピングするには、以下の手順に従います：

1. ビルドを手動で測定し、プレイエリアのみを含め、それ以外は含めないようにします。測定しながら座標をメモします。
<br>プレイエリアには、マップの開始（モンスターのスポーン）および終了セクションを含める必要があります。開始は通常緑色のブロックで、終了は赤色のブロックで構築されます。

2. まず、ビルドのX、Y、Z軸を測定します。マップのプレイエリアのX軸の一方の角に立ち、報告された座標を書き留めます（ブロック座標を使用できます）。X軸の反対側に移動し、その座標を書き留めます。

3. Y軸については、**プレイエリア**に立ち、報告された座標を書き留めます。

4. X軸で行ったのと同じプロセスを繰り返してZ軸を測定します。この例の画像を見て、ここで達成しようとしていることを理解するのに役立ててください：
   ![Mapping Example](https://i.imgur.com/IZfh2Nt.jpeg)
   プレイエリアにしたい座標のみを測定し、それ以外を無視していることに注意してください。例のように、プレイエリアを測定する際には開始と終了を含めるようにしてください。<br>測定しているプレイエリアが一方の端で広く、もう一方の端で狭い場合は、最も広いセクションを測定する必要があります。

5. 測定が完了すると、次のようになります：
   ```
   X axis: -57, 56
   Y axis: 65
   Z axis: 34, -34
   ```

6. これらの数値を高い順から低い順に並べ替えて、XYZ座標の完全なセットを2つ取得します：
   ```
   56 65 34 (最高XYZ値)
   -57 65 -34 (最低XYZ値)
   ```

7. 以下のコマンドを使用して座標を選択します：
   ```
   /etd selectfloorcoordinate Xhigh Y Zhigh Xlow Y Zlow
   例: /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. 座標が選択され、メモリに格納されました。エラーが発生した場合は、測定が間違っているか、プレイエリアが適切に構築されていませんでした。プレイエリアが正しくマッピングされたかを確認するには、以下のコマンドを実行します：
   ```
   /etd register your_level_name.yml test
   ```
   "your_level_name"を、作成しようとしている実際のレベル/マップ名に置き換えてください。すべてが正しく行われた場合、プレイエリア内のすべてのタイルをマークするバリアが表示されるはずです。

9. プレイエリアを確認し、すべてが期待通りに見えることを確認してから、コマンドを再度実行しますが、今回は最後に*test*を付けません。
   ````
   /etd register your_level_name.yml
   ````
   これにより、プレイエリアがレベルファイルに保存され、レベルファイルが使用できるようになります。

## ワールドフォルダのトリミング

ワールドフォルダには、EternalTDがすべてを使用しないため破棄できるいくつかのファイルとフォルダがあります。これにより、ワールドのサイズが削減され、配布が容易になります。

NORMAL環境の場合：

ワールドを準備するには、以下のファイルとフォルダを**保持**します：

1. **region**フォルダ

2. **data**フォルダ内の**raids.dat**（コピーする際は**data**フォルダ内にあることを確認してください）

3. **level.dat**ファイル

ワールドフォルダにある他のすべてのファイルとフォルダは安全に削除できます。これにより、NORMAL環境用にワールドが正しくセットアップされます。

NETHERおよびTHE_END環境の場合：

ワールドを準備するには、以下のファイルとフォルダを保持します：

1. **DIM-1**フォルダ内の**region**フォルダ（コピーする際は**DIM-1**フォルダ内にあることを確認してください）

2. **data**フォルダ内の**raids.dat**（コピーする際は**data**フォルダ内にあることを確認してください）

3. **level.dat**ファイル

ワールドフォルダにある他のすべてのファイルとフォルダは安全に削除できます。これにより、NETHERおよびTHE_END環境用にワールドが正しくセットアップされます。