```markdown
# 既存のミニダンジョンを修正する

多くの要望に基づき、このページでは既存のミニダンジョンを修正する際の基本について説明します。これはステップバイステップのガイドではなく、システムをどのように修正する必要があるかについてのより広い視点を提供します。これらの値を修正するには、[カスタムボス]($language$/elitemobs/creating_bosses.md)と[カスタムアイテム]($language$/elitemobs/creating_items.md)に関するWikiページを読む必要があります。

### ダンジョンの難易度を修正する

ダンジョンの難易度を修正したいと思う理由は3つあり、それらは以下の通りです：

### ボスのダメージ/体力乗数を修正する

これは最も簡単な修正です。ボスが与えるダメージが少なすぎる、または多すぎる、あるいは体力が少なすぎる、または多すぎると感じる場合、`custombosses`フォルダに含まれるボスファイル内のこれらの修飾子に関連付けられた値を修正できます。

修正したい値の例：
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
ボスのステータスに関する詳細はこちら：[ここ]($language$/elitemobs/creating_bosses.md&section=healthmultiplier)。

多くのパワーにおいて、ダメージ乗数がパワーによって適用されるダメージを修正しないことに注意してください。パワーの修正方法については次のセクションを参照してください。

### ボスのパワーを修正する

EliteMobsの主な難しさは、ボスが持つ可能性のある様々なパワーに対処することです。高レベルのボスはより多くの、より難しいパワーを持つ傾向があり、低レベルのボスはより少ない、より簡単なパワーを持つ傾向があります。同じボスで特定のパワーを組み合わせて使用すると戦闘が簡単になり、他のパワーを組み合わせると戦闘が著しく難しくなることがあります。

修正したい値の例：
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
ボスのパワーに関する詳細はこちら：[ここ]($language$/elitemobs/creating_bosses.md&section=powers)。

ここにリストするにはパワーの組み合わせが多すぎるため、パワーがどのように機能するかを学び、遭遇をプレイテストして、難しすぎず簡単すぎないと思う遭遇の最適なバランスを見つける必要があります。

### ボスのレベルを修正する

これは最もよくある質問であり、可能ではありますが、ボスを適切にスケールアップまたはスケールダウンしていることを確認するためにいくつかの手順が必要です。

修正したい値の例：
```yml
level: 21
```
ボスのレベルに関する詳細はこちら：[ここ]($language$/elitemobs/creating_bosses.md&section=level)。

これは、ダメージ/体力乗数について述べられていることの両方の組み合わせが必要です。なぜなら、低レベル/高レベルのボスは、戦闘を適切に感じさせるためにわずかに異なる体力とダメージ乗数が必要になる場合があるからです。

しかし、ここで考慮すべき最も重要な側面は、ボスのパワーです。低レベルと高レベルのボスは、戦闘がどれだけ難しいことを意図しているかに応じて、かなり異なるパワーセットを持つ傾向があります。レベル10のボスとレベル200のボスに同じパワーセットを持たせると、通常、難易度が劇的に異なる戦闘になります。繰り返しになりますが、最適なバランスを本当に見つける唯一の方法は、プラグインのパワーがどのように機能するかを学び、それらをプレイテストすることです。

そして最後に、**重要なことですが！** カスタムルートを調整したいと思うでしょう。EliteMobsのほとんどのボスはカスタムルートを持っており、ボスのレベルを変更している場合、ドロップするルートの性質を変更したいと思う可能性が高いです。

修正したい値の例：
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
ルートドロップに関する詳細はこちら：[ここ]($language$/elitemobs/loot_tables.md)。

### 修正されたコンテンツのクレジット表記/公開

EliteMobsでは、作成したダンジョンを適切なチャンネル（Discord）に自由に投稿できます。ただし、作成したものが既存のダンジョンの単なる修正である場合、特にそれがわずかな調整である場合や、プレミアムコンテンツを含んでいる、またはプレミアムコンテンツから派生している場合（明らかな理由により）、投稿が削除される可能性があります。

購入またはその他の方法でダウンロードしたコンテンツは、ご自身のネットワーク内での使用のためにサーバーのニーズに合わせて自由に修正できますが、明らかな理由により、これにより再配布権が付与されるわけではありません。

コミュニティからの投稿は、いかなる理由であっても、いつでも削除する権利を留保しますが、実際にそうしなければならない状況は避けたいと考えています。

### さらなる情報

このページをさらに拡張する必要があると思われる場合は、Discordで何を追加すべきか提案を残してください。ここで言及されている様々なシステムに関する詳細情報は、他のWikiページにあります。
```