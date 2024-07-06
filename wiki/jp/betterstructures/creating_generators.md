## ジェネレーター

ジェネレーターは、BetterStructures の構成システムの中で最も強力な部分です。デフォルトでは、現在 BetterStructures によって配布されている 200 以上の構造を管理する 27 個のジェネレーターがあります。独自のジェネレーターを作成することもできますが、既存のジェネレーターをショートカットとして使用することもできます。

ジェネレーターは、プラグインに構造をどこに正確にスポーンするかを指示し、戦利品テーブルを定義します。デフォルトのジェネレーターは、名前が分かりやすく、ジェネレーターが何を生成するかを簡単に推測できます。

ジェネレーターの唯一の必須フィールドは `structureType` 設定で、これはプラグインに構造が空中に、浅い地下に、深い地下に、地上に、または地上の液体にスポーンすることを意図しているのかを伝えます。

***

### isEnabled

ジェネレーターを有効にするかどうかを設定します。

***

### structureType

構造の種類を設定します。**複数のタイプをリストにできることに注意してください！**

有効な構造タイプの値は以下のとおりです。

***

#### surface

```yml
structureType: 
- SURFACE
```

地上構造は、世界の地上にスポーンします。唯一の例外は、ネザー環境で、プラグインが十分な地上と判断したポイントにスポーンすることです。

***

#### sky

```yml
structureType: 
- SKY
```

空の構造は、config.yml で設定可能な地上から 80～120 ブロック上にスポーンします。唯一の例外は、ネザー環境で、プラグインが十分な空気と判断したポイントにスポーンすることです。

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

地下浅い構造は、オーバーワールドでは y=0 と y=60 の間、ネザーでは y=60 と y=120 の間、エンドでは有効な地下の高さの間にスポーンします。

_**注意:**_ 1 つの地下設定しかない場合、地下が非常にまばらになることがわかるでしょう。Minecraft には地下スペースがたくさんあり、プレイヤーは地下構造が深すぎて見つけられないことがよくあります。これにより、さまざまな深さで均等に広がるようにすることができます。

***

#### underground_deep

```yml
structureType: 
- UNDERGROUND_DEEP
```

地下深い構造は、オーバーワールドでは y=-64 と y=0 の間、ネザーでは y=0 と y=60 の間、エンドではスポーンしません。

***

#### liquid_surface

```yml
structureType: 
- LIQUID_SURFACE
```

液体の表面構造は液体上にスポーンします。オーバーワールドの場合、水上に、ほとんどの場合海上にスポーンします。ネザーの場合、溶岩湖にスポーンします。エンドではスポーンしません。

***

### lowestYLevel

構造がスポーンする最低の Y レベル（高度）を設定します。

***

### highestYLevel

構造がスポーンする最高の Y レベル（高度）を設定します。

***

### validWorlds

構造がスポーンするワールドのリストを設定します。**リストが存在しない場合は、プラグインによって許可されているすべてのワールドを使用します。**ただし、環境タイプやバイオームなどによって制限される場合を除きます。

***

### validWorldEnvironments

構造がスポーンするワールド環境のリストを設定します。**リストが存在しない場合は、プラグインによって許可されているすべてのワールド環境を使用します。** 有効な値: `NORMAL`、`NETHER`、`END` および `CUSTOM`。

***

### validBiomes

構造がスポーンする有効なバイオームのリストを設定します。**リストが定義されていない場合は、すべてのバイオームが有効であると見なされます！**。

これには、[Spigot API](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) で定義されているバイオームのリストを使用する必要があります。

***

### treasureFilename

ジェネレーターが使用する宝のファイルを設定します。これは、このジェネレーターを使用するすべての構造のチェストにスポーンするものを設定します。ただし、[構造の構成の `treasureFile` 設定]($language$/betterstructures/creating_structures.md&section=treasurefile) で別の値が設定されている場合を除きます。

```




