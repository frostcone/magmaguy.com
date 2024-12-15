[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs 配置默认值

**EliteMobs 默认安装了推荐的默认设置。如果您随意更改内容，很可能会使整体体验更差。**

_**EliteMobs 为所有用户提供了推荐的默认设置。如果您随意更改内容然后请求支持，很有可能您将被告知重置您的配置文件。对插件的修改应以游戏测试为基础，而不是仅凭猜测。**_

## 入门

由于对自定义的高需求，EliteMobs 目前提供了大量的配置选项。为了保持此 wiki 页面的简洁，仅显示默认配置。

如果您想了解有关特定设置的更多信息，可以参考配置文件并查看注释。

---

## config.yml

`config.yml` 包含主要是在创建时无法轻易放在其他地方的随机设置。它是最有可能在版本之间发生更改的配置文件。

<div align="left">

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置 EliteMobs 使用的语言文件
# 请勿手动更改此文件！它旨在与命令“/em language <语言文件>”一起安装
language: english
# 设置是否由 elitemobs 生成的精英和首领将始终显示其名称标签。
# 不建议！
alwaysShowEliteMobNameTags: false
# 设置在合并之前必须紧密相邻的被动生物的数量。
# 请勿将其设置为 0！
superMobStackAmount: 50
# 使精英生物不会因爆炸而损坏被动生物。
preventEliteCreeperDamageToPassiveMobs: true
# 设置 EliteMobs 是否将使用标题来警告玩家缺少权限
useTitlesForMissingPermissionMessages: true
# 设置 EliteMobs 是否会阻止将命名的生物转换为精英生物。
# 对于与其他插件的兼容性尤为重要。
preventEliteMobConversionOfNamedMobs: true
# 设置 EliteMobs 是否会转换具有自定义生成原因的生物。
# 运行某些首领插件会自动将其设置为 true，无论配置中的值是什么。
enableHighCompatibilityMode: false
# 设置噩梦游戏模式的精英生成奖励
nightmareWorldSpawnBonus: 0.5
# 设置集中的 /em 命令是否打开插件的主状态页面。
# 强烈建议！
emLeadsToStatusMenu: true
# 设置运行特定命令（例如 /em wallet）是否将导致在其中集中该信息的 /em 菜单。
otherCommandsLeadToEMStatusMenu: true
# 设置设置是否完成。
# 请勿手动设置此值，它旨在通过游戏内命令进行修改。
setupDoneV3: true
# 设置精英是否会阻止生成原版增援，例如僵尸增援功能。
preventVanillaReinforcementsForEliteEntities: true
# 设置 EliteMobs 的服务器默认生成位置。/em spawntp 将引导至此位置。
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# 设置 EliteMobs 是否会再生被精英炸毁的方块。
doExplosionRegen: true
# 设置爆炸再生是否也会再生容器（例如箱子）的内容。
# 将其设置为 false 将使精英爆炸不会炸毁容器。
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# 设置 /em 菜单是否仅使用与基岩兼容的基于库存的菜单样式。
# 提醒一下，玩家也可以执行命令 /em alt 来在 /em 菜单样式之间切换
onlyUseBedrockMenus: false
# 设置书本菜单页面每行的字符限制。
# 如果书本菜单（例如任务）中的文本被截断，请降低此数量
characterLimitForBookMenuPagesV2: 170
# 设置是否用玻璃板填充空白菜单空间。
# 如果您正在使用 EliteMobs 资源包，则不建议这样做。
useGlassToFillMenuEmptySpace: false
# 设置是否将使用 unicode 格式化 EliteMobs 资源包。
# 请勿手动设置此项，它会在安装资源包时自动设置。
# 如果您必须合并 EliteMobs 资源包，请仅手动设置它，并预计如果您这样做，间距可能无法正常工作。
menuUnicodeFormatting: false
# 设置在没有挂起命令的情况下运行 '/em confirm' 时发送给玩家的消息。
noPendingCommands: '&c您当前没有任何挂起的命令！'
# 为发送跟踪消息的首领设置跟踪消息。
trackMessage: 跟踪 $name
# 设置在玩家打开等级要求高于其公会等级的宝箱时发送给玩家的消息。
chestLowRankMessage: '&7[EM] &c您的公会等级至少需要为 $rank &c才能打开此宝箱！'
# 设置在玩家尝试重新打开他们已经打开过的宝箱时发送给玩家的消息。
chestCooldownMessage: '&7[EM] &c您最近已经打开过此宝箱！请等待 $time！'
# 设置在玩家尝试重新打开他们已经打开过的宝箱时发送给玩家的消息。
# 设置当玩家打开宝箱但什么也没得到时发送给玩家的消息
treasureChestNoDropMessage: '&8[EliteMobs] &c您什么都没得到！下次好运！'
# 设置当玩家尝试跟踪不再有效的首领时发送的消息
bossAlreadyGoneMessage: '&c[EliteMobs] 对不起，此首领已经离开！'
# 设置当玩家因 /em 命令出现问题时推荐 /em alt 命令的消息
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &f菜单对您不起作用？请尝试 &2/elitemobs alt &f以查看菜单的替代版本！&c不想再看到此消息？&4/em dismiss'
# 设置当玩家运行 /em alt 命令时显示的消息。
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &f菜单样式已更改！请查看！'
# 设置当玩家打开宝箱但什么也没得到时显示的消息
treasureChestNoDropMessage: '&8[EliteMobs] &c您什么也没得到！下次好运！'
# 设置当玩家尝试跟踪不再有效的首领时发送的消息
bossAlreadyGoneMessage: '&c[EliteMobs] 对不起，此首领已经离开！'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` 包含与冒险者公会中心（世界）相关的配置设置，以及与冒险者公会升级系统相关的设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置 EliteMobs 是否在解锁更高公会等级时添加最大生命值作为声望奖励
Add max health when unlocking higher guild ranks: true
# 设置 EliteMobs 是否在解锁更高公会等级时添加致命一击几率作为声望奖励
Add critical chance when unlocking higher guild ranks: true
# 设置 EliteMobs 是否在解锁更高公会等级时添加闪避几率作为声望奖励
Add dodge chance when unlocking higher guild ranks: true
# 设置用户命令是否重定向到冒险者公会中心。强烈建议用于游戏沉浸和教程目的。
userCommandsTeleportToAdventurersGuild: true
# 设置冒险者公会在游戏内的显示名称
adventurersGuildMenuName: '&6&l冒险者中心'
Prestige 0 rank 0: '&8平民 - 禁用精英！'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# 设置玩家战利品是否受其公会等级限制。
# 这是 EliteMobs 中一个极其重要的部分，并且强烈推荐。
limitLootBasedOnGuildTier: true
# 设置当玩家的战利品因其公会等级较低而被削弱时发送给玩家的消息。
lootLimiterMessage: '&7[EM] &c您必须通过 /ag 解锁下一个公会等级才能掠夺更好的物品！'
# 设置在公会升级时运行的命令。占位符为：
# $prestigerank - 输出声望等级
# $activerank - 输出当前活动等级
# $player - 输出玩家姓名
onRankUpCommand: []
# 设置在声望等级提升时运行的命令。
# $prestigerank - 输出声望等级
# $activerank - 输出当前活动等级
# $player - 输出玩家姓名
onPrestigeUpCommand: []
# 设置第一次闪避奖励的声望等级。
dodgePrestige3Bonus: 3.0
# 设置第二次闪避奖励的声望等级。
dodgePrestige6Bonus: 6.0
# 设置第三次闪避奖励的声望等级。
dodgePrestige9Bonus: 10.0
# 设置第一次致命一击奖励的声望等级。
critPrestige2Bonus: 3.0
# 设置第二次致命一击奖励的声望等级。
critPrestige5Bonus: 6.0
# 设置第三次致命一击奖励的声望等级。
critPrestige8Bonus: 10.0
# 设置第一次最大生命值奖励的声望等级。
healthPrestige1Bonus: 2.0
# 设置第二次最大生命值奖励的声望等级。
healthPrestige4Bonus: 2.5
# 设置第三次最大生命值奖励的声望等级。
healthPrestige7Bonus: 3.0
# 设置第三次最大生命值奖励的声望等级。
healthPrestige10Bonus: 4.0
# 设置能够负担得起等级提升的首领估计基础击杀量。
baseKillsForRankUp: 100
# 设置每个等级必须被击杀才能升级的估计首领额外数量。
# 公式是这个数量 x 玩家当前所处的等级。
additionalKillsForRankUpPerTier: 50
# 设置在有人解锁声望等级时发送给玩家的标题。
# $player 是一个占位符，将被替换为玩家的显示名称。
prestigeUnlockMessageTitle: $player
# 设置在有人解锁声望等级时发送给玩家的副标题。
# $tier 是一个占位符，将被替换为玩家的声望等级。
prestigeUnlockMessageSubtitle: '&2已解锁 $tier&2！'
# 设置当玩家使用和平（平民）等级时将应用于生成几率的倍数。
peacefulModeEliteChanceDecrease: 0.2
# 设置不应用公会等级奖励的世界列表
worldsWithoutAGBonuses: []
# 禁用用户切换到 EliteMobs 和平模式的能力。和平模式会降低该玩家周围的生物的等级和生成率
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` 允许管理员自定义反作弊系统的不同方面。反作弊系统的存在是为了防止玩家使用诸如生物磨床之类的方式轻松地刷硬币和战利品，并促使他们进行真正的战斗和迷你地牢，而不是通过 afk 点击方式到达插件的顶部。

如果您不希望人们只是 afk 刷完整个插件，并且希望他们实际与迷你地牢互动，则保持启用此关键系统。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置当反作弊被触发时显示的消息。
AntiExploit message: '&c[EM 反作弊] &7附近的精英不会掉落特殊战利品。'
# 设置是否启用黑暗房间反作弊 1。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable darkroom antiexploit 1: true
# 设置是否启用黑暗房间反作弊 2。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable darkroom antiexploit 2: true
# 设置是否启用黑暗房间反作弊 3。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable darkroom antiexploit 3: true
# 设置是否启用大型黑暗房间反作弊 1。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable large darkroom antiexploit 1: true
# 设置是否启用末影人高度反作弊。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable enderman height antiexploit: true
# 设置是否启用坐骑反作弊。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable mount antiexploit: true
# 设置是否禁止精英生物捡起物品
preventItemPickupByMobs: true
# 设置是否启用环境伤害反作弊。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable ambient damage antiexploit: true
# 设置是否启用蜂蜜块反作弊。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable honey block antiexploit: true
# 设置反作弊激活的阈值。值越高，容错能力越强。不建议修改此设置。
antiExploitThreshold: 10
# 设置是否启用无路径反作弊
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` 包含战斗标签系统的配置设置。该系统仍远未完成，但它尝试管理玩家进入战斗后的行为。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否启用战斗标签。
# 启用后，与战斗交战的飞行玩家将被设置为停止飞行。
Enable combat tag: true
# 设置在战斗标签激活时发送的消息。
Combat tag message: '&c[EliteMobs] 战斗标签已激活！'
# 设置 /ag 命令是否在传送前具有计时器
Enable adventurers guild teleport timer: true
# 设置等待传送计时器时设置的操作消息。
Teleport time left: '&7[EM] &a$time &7秒后传送...'
# 设置当玩家在等待传送时移动时发送的消息。
Teleport cancelled: '&7[EM] &c传送已中断！'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` 包含 DiscordSRV 的配置设置。如果您想了解如何配置此功能，请[单击此处！]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>展开表格</b></summary>

```yml
# 文档可以在这里找到：https://magmaguy.com/wiki.html#lang=zh-cn&article=elitemobs+discordsrv.md
announcementRoomName: 您需要输入您在 DISCORDSRV 配置文件中设置的 DISCORD 房间名称，在其中广播 ELITEMOBS 公告，请查看 ELITEMOBS WIKI 以获取详细信息
```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` 包含 EliteMobs 经济的配置设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否启用 EliteMobs 经济。这意味着精英币、购买和出售装备的能力以及升级公会等级的能力
# 如果禁用，玩家将无法在该插件中取得进展！
enableEconomy: true
# 设置物品的转售价值，占原始价格的百分比。5 是 5%
itemResaleValue: 5.0
# 设置所用货币的游戏内名称。
currencyName: 精英币
# 设置插件以使用 Vault。不建议这样做！在此处阅读原因：https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# 设置精英是否会根据其等级掉落硬币。
enableCurrencyShower: true
# 设置精英掉落的货币的倍数。
currencyShowerTierMultiplier: 1.0
# 设置玩家捡起精英货币时发送的消息。
chatCurrencyShowerMessage: '&7[EM] 您捡起了 &a$amount $currency_name！'
# 设置当玩家捡起精英货币时发送的操作栏消息。
actionbarCurrencyShowerMessage: '&7[EM] 您捡起了 &a$amount $currency_name！'
# 发送在掠夺货币后玩家获得的消息。对于教程目的很有用。
adventurersGuildNotificationMessages: '&7[EM] 有多余的零用钱？请尝试 &a/ag !'
# 设置玩家之间交易的税率。
# 强烈建议出于平衡原因，因为高等级玩家可以获得高达 6 倍的货币，并尝试使用其他玩家来绕过声望货币重置。
playerToPlayerPaymentTaxes: 0.2
# 发送精英货币给其他玩家时发送的消息。
Economy pay message v2: '&2您已向 &2$receiver&2 支付 &2$amount_sent $currency_name，他/她收到了税后的 $amount_received！'
# 在玩家发送货币后发送的消息。
Economy currency left message: 您现在有 &2$amount_left $currency_name
# 在收到货币时收到的消息。
Economy money from payment message: 您已从 $sender 收到 &2$amount_received $currency_name
# 在玩家尝试发送他们没有的硬币数量时发送的消息。
Economy payment insufficient currency: '&c您没有足够的 $currency_name 来执行此操作！'
# /em 余额消息
Wallet command message: 您有 &2$balance $currency_name
# 在玩家尝试向另一位玩家发送货币时发送的确认消息。
Tax confirmation message: '&c发送付款将收取 $percentage% 的税。&a执行 &9$command &a以继续！'
# 在玩家从商店购买时发送的消息。
Shop buy message: '&a您已花费 $item_value $currency_name 购买了 $item_name &a！'
# 在玩家与商店交互时发送的消息。
Shop current balance message: '&a您拥有 $currency_amount $currency_name。'
# 在玩家没有足够的货币来购买物品时发送的消息
Shop insufficient funds message: '&c您没有足够的 $currency_name！'
# 当玩家尝试购买他们负担不起的物品时发送的消息的第二部分。
Shop item cost message: 该物品需要 &c$item_value $currency_name。
# 在向商店出售物品时发送的消息。
Shop sell message: '&a您已出售 $item_name &a，获得 $currency_amount $currency_name！'
# 在尝试出售不属于该玩家的物品时发送的消息。
Shop sale player items warning: '&c您无法出售当前不灵魂绑定到您的物品！这包括来自其他声望等级的物品！'
# 在尝试出售非 EliteMobs 物品时发送的消息
Shop sale instructions: '&c您只能在此处出售 EliteMobs 战利品！（从在其背景故事中显示值的精英掉落的盔甲/武器）'
# 在出售一批精英物品时发送的消息。
shopBatchSellItem: '&a您已将您的物品以 $currency_amount $currency_name 的价格出售！'
lootShowerMaterial:
  # 设置 1 个掉落精英币的材质类型。
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # 设置 1 个掉落精英币的自定义模型 ID。由资源包使用。
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_AXE: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_BOOTS: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_CHESTPLATE: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_LEGGINGS: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_HELMET: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_PICKAXE: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_SHOVEL: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_SWORD: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_HOE: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_AXE: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_BOOTS: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_LEGGINGS: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_CHESTPLATE: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_HELMET: 16.0
```

</details>
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_PICKAXE: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_SHOVEL: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_HOE: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_SWORD: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  SHIELD: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  BOW: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  CHAINMAIL_BOOTS: 15.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  CHAINMAIL_LEGGINGS: 15.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  CHAINMAIL_CHESTPLATE: 15.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  CHAINMAIL_HELMET: 15.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  STONE_SWORD: 15.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  STONE_AXE: 15.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  STONE_PICKAXE: 15.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  STONE_SHOVEL: 15.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  STONE_HOE: 15.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  GOLDEN_AXE: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  GOLDEN_BOOTS: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  GOLDEN_LEGGINGS: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  GOLDEN_CHESTPLATE: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  GOLDEN_HELMET: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  GOLDEN_SWORD: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  GOLDEN_SHOVEL: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  GOLDEN_PICKAXE: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  GOLDEN_HOE: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  GOLDEN_APPLE: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  ENCHANTED_GOLDEN_APPLE: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  LEATHER_BOOTS: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  LEATHER_LEGGINGS: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  LEATHER_CHESTPLATE: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  LEATHER_HELMET: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  WOODEN_SWORD: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  WOODEN_AXE: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  WOODEN_HOE: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  WOODEN_PICKAXE: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  TRIDENT: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  ELYTRA: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  TURTLE_HELMET: 13.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  NETHERITE_AXE: 18.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  NETHERITE_PICKAXE: 18.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  NETHERITE_SHOVEL: 18.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  NETHERITE_HOE: 18.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  NETHERITE_SWORD: 18.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  NETHERITE_HELMET: 18.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  NETHERITE_CHESTPLATE: 18.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  NETHERITE_LEGGINGS: 18.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  NETHERITE_BOOTS: 18.0
  # 设置未专门定义的物品的默认材质价值。
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` 包含事件的配置选项。

_**注意：这些只是非常基本的全局设置。**_

您可以在 `events` 文件夹中进一步修改特定事件。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否仅在事件发生的世界中广播事件。
Only broadcast event message in event worlds: false
# 设置定时事件之间的最短冷却时间（以分钟为单位）
actionEventMinimumCooldownMinutes: 240
# 设置是否会发生操作事件。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# 设置是否会发生定时事件。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` 包含精英物品的全局设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置在物品背景故事中添加到原版附魔的字符前缀。
noItemDurabilityMessage: '&8[EliteMobs] $item &4已损坏！在修复之前无法使用！'
# 设置是否掉落任何 EliteMobs 战利品。
# 包括精英币、自定义物品、程序化生成的物品 - 一切！
# 不建议这样做，会使 mmorpg 进展不可能。
doEliteMobsLoot: true
# 设置程序化生成的战利品是否会根据物品的质量具有不同的颜色。
doMMORPGColorsForItems: true
# 设置是否阻止自定义物品（例如横幅或方块）的放置。
# 建议这样做 - 自定义物品在放置时会损坏，并且无法恢复！
preventCustomItemPlacement: true
# 设置所有 EliteMobs 物品的自定义背景故事格式！
# 以下是有效的占位符：
# $itemLevel - 显示物品等级
# $prestigeLevel - 显示声望等级
# $weaponOrArmorStats - 根据物品显示精英 DPS 或精英护甲属性
# $soulbindInfo - 显示物品灵魂绑定到谁（如果有）
# $itemSource - 显示物品来源，例如生物或商店
# $ifLore - 使该行仅在物品具有自定义背景故事时显示。仅适用于自定义物品
# $customLore - 显示整个自定义背景故事。仅适用于自定义物品
# $ifEnchantments - 使该行仅在物品具有任何附魔时显示
# $enchantments - 显示物品上的附魔
# $eliteEnchantments - 显示物品上的精英附魔
# $ifCustomEnchantments - 显示物品上的自定义附魔
# $customEnchantments - 显示物品上的自定义附魔
# $ifPotionEffects - 如果物品具有药水效果，则仅显示该行
# $potionEffects - 显示物品上的药水效果
# $loreResaleValue - 显示物品的价值。可能会根据查看位置显示购买价格或出售价格
# 重要提示：可以通过下方的配置设置进一步自定义多个占位符
itemLoreStructureV2:
- §7§m§l---------§7<§l装备信息§7>§m§l---------
- '§7物品等级：§f$itemLevel §7声望 §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§l背景故事§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§l附魔§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§l自定义附魔§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§l效果§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# 设置商店购买的商店来源背景故事
shopSourceItemLores: '&7从商店购买'
# 设置从首领掠夺的物品的商店来源背景故事
mobSourceItemLores: '&7从 $mob 掠夺'
# 设置物品价值背景故事
loreWorths: '&7价值 $worth $currencyName'
# 设置物品转售价值背景故事
loreResaleValues: '&7以 $resale $currencyName 出售'
# 设置任何精英物品从精英生物掉落的基本几率
flatDropRateV3: 0.2
# 设置任何精英物品从区域首领掉落的基本几率
regionalBossNonUniqueDropRate: 0.05
# 设置区域首领是否可以掉落原版战利品
regionalBossesDropVanillaLoot: false
# 设置精英物品掉落的几率基于首领等级的增加量。
# 首领的等级乘以该值并添加到基本几率中。
# 不再建议将此值设为高于 0.0！
levelIncreaseDropRateV2: 0.0
# 设置程序化生成物品掉落的加权几率。
# 此系统使用加权概率！如果您不知道那是什么，请在 google 上搜索。
proceduralItemDropWeight: 90.0
# 设置加权物品掉落的相对几率。
# 加权物品是不具有动态权重的自定义物品，例如护符。
weighedItemDropWeight: 1.0
# 设置固定物品掉落的相对几率。这些是不缩放的自定义物品。
fixedItemDropWeight: 10.0
# 设置有限物品掉落的相对几率。这些是缩放到特定等级的自定义物品
limitedItemDropWeight: 3.0
# 设置可缩放物品掉落的相对几率。这些是可以缩放到任何等级的自定义物品，并且是插件中最常见的。
scalableItemDropWeight: 6.0
# 设置生物原版战利品的倍数，基于生物的等级。
defaultLootMultiplier: 0.0
# 设置默认战利品倍数的最大等级。
levelCapForDefaultLootMultiplier: 200
# 设置基于首领等级的首领掉落的默认 Minecraft 经验值倍数。
defaultExperienceMultiplier: 1.0
# 设置 EliteMobs 将掉落的最大战利品等级。强烈建议将其保留在 200。
maximumItemLevel: 200
# 设置是否使用精英附魔。
# 当精英物品的附魔等级超出原版限制时，精英附魔会替换原版附魔。
# 例如：如果精英剑应该具有锋利 10，由于 Minecraft 限制为 5 级，它将具有锋利 5 和精英锋利 5。
# 精英锋利仅影响 EliteMobs 生成的生物。这样做是为了使 PVP 和原版战斗不会变得不平衡。
useEliteEnchantments: true
# 设置将用于物品背景故事中的精英附魔的显示名称。
eliteEnchantmentLoreStrings: 精英
# 设置是否 EliteMobs 会将锄头视为损坏计算的有效武器。
useHoesAsWeapons: false
# 设置 EliteMobs 是否会在高品质的掉落物品上生成特殊粒子。
enableRareItemParticleEffects: true
# 设置将在物品背景故事中用于显示药水效果对被击中实体生效的符号。
potionEffectOnHitTargetLore: '&4⚔☠'
# 设置将在物品背景故事中用于显示药水效果对攻击的玩家生效的符号。
potionEffectOnHitSelfLore: '&9⚔🛡'
# 设置将在物品背景故事中用于显示药水效果将持续应用（只要玩家挥舞它）的符号。
potionEffectContinuousLore: '&6⟲'
# 设置在物品背景故事中添加到精英附魔的字符前缀。
eliteEnchantmentLoreColor: '&9◇'
# 设置在物品背景故事中添加到原版附魔的字符前缀。
vanillaEnchantmentLoreColor: '&7◇'
# 设置在物品背景故事中添加到自定义附魔的字符前缀。
customEnchantmentColor: '&3◇'
# 设置在物品背景故事中添加到药水效果的字符前缀。
potionEffectLoreColor: '&5◇'
# 设置如果物品未灵魂绑定将出现在物品上的文本。
noSoulbindLore: '&7未灵魂绑定！'
# 设置是否可以通过原版手段附魔精英物品。不建议这样做，因为 EliteMobs 有自己的自定义附魔系统及其自己的平衡！
preventEliteItemEnchantment: true
# 设置是否可以通过原版手段解除精英物品的附魔。
preventEliteItemDisenchantment: true
# 设置当玩家尝试解除附魔物品并且不允许时显示的消息。
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] 无法解除精英物品的附魔！'
# 设置是否可以通过原版手段将精英物品从钻石升级到下界合金。不建议这样做！
preventEliteItemDiamondToNetheriteUpgrade: true
# 设置精英物品是否仅在死亡时失去耐久度。
# 这是 EliteMobs 的一个重要系统，强烈建议使用，因为没有它，高级战斗几乎是不可能的！
eliteItemsDurabilityLossOnlyOnDeath: true
# 设置精英物品如果设置为在死亡时失去耐久度的耐久度损失倍数。
# 介于 0.0 和 1.0 之间的值会降低耐久度损失，而高于 1.0 的值会增加耐久度损失。
# 示例：0.5 处理 50% 的耐久度损失，2.0 处理 200% 的耐久度损失。
eliteItemsDurabilityLossMultiplier: 1.0
# 设置在物品报废成功后显示的消息。
scrapSucceededMessageV2: '&8[EliteMobs] &2报废成功 $amount 次！'
# 设置在物品报废失败时显示的消息。
scrapFailedMessageV2: '&8[EliteMobs] &c报废失败 $amount 次！'
# 设置是否将精英战利品直接放入玩家的背包中。
putLootDirectlyIntoPlayerInventory: false
# 设置玩家在获得等级过低的物品时必须存在的最大等级差异，之后他们将无法再获得该物品。
# 这是根据玩家穿着的战利品的平均等级计算的。
# 例如，如果设置为 10，并且玩家拥有 50 级装备，则他们将无法刷 39 级首领。
lootLevelDifferenceLockout: 10
# 设置 EliteMobs 是否会在使用死亡时耐久度损失系统时阻止精英物品损坏。
# 玩家无论如何都将无法使用耐久度为 0 的物品，这只是为了防止意外丢失高等级但耐久度低的物品。
preventEliteItemsFromBreaking: true
# 设置 EliteMobs 中可以程序化生成掉落钻石装备的最低首领等级 +7。
# EliteMobs 中没有程序化生成的下界合金装备，只有自定义战利品。
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# 设置通过 /em simloot <等级> <次数> 命令成功滚动战利品时在聊天中显示的消息。
simlootMessageSuccess: '&8[EliteMobs] &2为战利品掷骰子，获得了 $itemName &2！'
# 设置通过 /em simloot <等级> <次数> 命令无法滚动战利品时在聊天中显示的消息。
simlootMessageFailure: '&8[EliteMobs] &c为战利品掷骰子，什么也没得到！'
# 设置当精英战利品直接放入玩家背包时玩家获得的消息。
directDropCustomLootMessage: '&8[EliteMobs] &2获得了 $itemName &2！'
# 设置当原版战利品直接放入玩家背包时玩家获得的消息。
directDropMinecraftLootMessage: '&8[EliteMobs] &a获得了 $itemName &a！'
# 设置当精英币直接放入玩家背包时玩家获得的消息。
directDropCoinMessage: '&8[EliteMobs] &a获得了 &2$amount $currencyName &a！'
# 设置 EliteMobs 是否会隐藏原版 Minecraft 属性。
hideItemAttributes: true
# 设置精英物品上特定于武器的背景故事条目。$EDPS 占位符将被替换为武器的精英 DPS（每秒伤害）。
weaponEntry: '&7精英 DPS：&2$EDPS'
# 设置精英物品上特定于盔甲的背景故事条目。$EDEF 占位符将被替换为武器的精英 DEF（防御）。
armorEntry: '&7精英护甲：&2$EDEF'
# 设置当玩家杀死首领但装备等级与首领等级相差太大而无法获得硬币时发送的消息
levelRangeTooDifferent: '&8EM] &4您的装备等级为 $playerLevel，首领等级为 $bossLevel，等级差异太大，无法获得硬币！'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` 包含与自定义战斗系统相关的所有配置选项，以及与 Elite Mobs 的工作方式相关的最常见的配置选项。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否会生成自然生成的精英。注意：像僵尸国王这样的事件生物不是自然生成的精英！如果您想禁用事件首领，则必须禁用事件。
doNaturalEliteMobSpawning: true
# 设置是否可以将从生物刷怪笼生成的生物转换为精英。不建议！
doSpawnersSpawnEliteMobs: false
# 设置自然生成的生物转换为精英生物的百分比。
eliteMobsSpawnPercentage: 0.05
# 设置扫描超级生物堆叠的超级生物范围
superMobStackRange: 15
# 设置精英可以生成的最大等级。
# 注意：精英生物等级是基于玩家佩戴的护甲和武器，并且护甲的等级最高只能达到 200。
naturalEliteMobsLevelCap: 250
# 设置精英是否会根据其等级佩戴护甲。这仅用于视觉目的，不会影响战斗。
doElitesWearArmor: true
# 设置精英是否会根据其等级佩戴头盔。这将阻止它们在白天轻易燃烧殆尽。
doElitesWearHelmets: true
# 设置精英周围是否会显示视觉轨迹，以警告玩家他们拥有哪些玩家。
doNaturalEliteMobVisualEffects: true
# 设置从刷怪笼生成的精英是否会产生视觉效果。
doSpawnerEliteMobVisualEffects: false
# 设置某些能力是否会执行该能力的警告阶段。这非常重要，因为警告阶段通常意味着可以躲避能力，并且视觉效果让玩家知道该躲避到哪里。
doPowerBuildupVisualEffects: true
# 设置当玩家死于精英时是否会使用自定义死亡消息。
doCustomEliteMobsDeathMessages: true
# 设置 EliteMobs 是否会显示精英的生命值指示器。
doDisplayMobHealthOnHit: true
# 设置 EliteMobs 是否会显示对精英造成的伤害指示器。
doDisplayMobDamageOnHit: true
# 设置精英的等级是否会根据距生成点的距离而增加。
# 这是在正常等级之上添加的值，这意味着如果玩家在生成点附近佩戴 100 级装备，并且首领的等级因距生成点的距离而增加 +1，则首领将以 101 级生成。
# 通常不建议使用此选项，尤其是在您的服务器上具有随机 tp 系统时。
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# 设置基于距离的等级增加的每次等级增量的距离。
distanceBetweenIncrements: 100.0
# 设置基于距离的等级增加的每次距离增量中增加的等级数。
levelIncreaseAtIncrements: 1.0
# 设置精英的能力是否会被隐藏，直到它们进入战斗。为了性能原因，建议使用此选项。
hideEliteMobPowersUntilAggro: true
# 设置对 EliteMobs 生成的所有首领造成的伤害的倍数，但使用标准化伤害系统（区域地牢首领）的首领除外。较高的值会增加造成的伤害，从而使首领更容易被杀死。
# 2.0 = 200%，0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# 设置精英对玩家造成的伤害的倍数。较高的值会增加首领（但使用标准化伤害系统（区域地牢首领）的首领除外）造成的伤害量，从而使首领的攻击力更强。
# 2.0 = 200%，0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# 设置是否可以跟踪特殊首领。
showCustomBossLocation: true
# 设置发送给玩家以跟踪首领位置的消息。
bossLocationMessage: '&7[EM] &2[单击以跟踪！]'
# 设置在精英死亡时运行的命令。有效占位符为：
# $level 表示首领的等级
# $name 表示首领的名称
# $players 将使该命令为参与击杀的每个玩家运行。例如，如果 Bob 和 Steve 杀死了首领，则 “broadcast $players killed the boss!” 将运行 “bob killed the boss” 和 “steve killed the boss!”
commandsOnEliteMobDeath: []
```

</details>

---
# EliteMobs 配置默认值

**EliteMobs 默认安装了推荐的默认值。如果您随意更改内容，很可能会使整体体验更差。**

_**EliteMobs 为所有用户提供了建议的默认设置。如果您随意更改内容然后请求支持，很有可能会被告知重置您的配置文件。对插件的修改应以游戏测试为基础，而不是仅凭猜测。**_

## 入门

由于对自定义的高需求，EliteMobs 目前提供了大量的配置选项。为了保持此 wiki 页面的简洁，仅显示默认配置。

如果您想了解有关特定设置的更多信息，可以参考配置文件并查看注释。

---

## config.yml

`config.yml` 主要包含在创建时无法轻易放在其他位置的随机设置。它是最有可能在版本之间发生更改的配置文件。

<div align="left">

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置 EliteMobs 使用的语言文件
# 请勿手动更改此文件！它旨在与命令“/em language <语言文件>”一起安装
language: english
# 设置是否由 elitemobs 生成的精英和首领将始终显示其名称标签。
# 不建议！
alwaysShowEliteMobNameTags: false
# 设置在合并之前必须紧密相邻的被动生物的数量。
# 请勿将其设置为 0！
superMobStackAmount: 50
# 使精英生物不会因爆炸而损坏被动生物。
preventEliteCreeperDamageToPassiveMobs: true
# 设置 EliteMobs 是否将使用标题来警告玩家缺少权限
useTitlesForMissingPermissionMessages: true
# 设置 EliteMobs 是否会阻止将命名的生物转换为精英生物。
# 对于与其他插件的兼容性尤为重要。
preventEliteMobConversionOfNamedMobs: true
# 设置 EliteMobs 是否会转换具有自定义生成原因的生物。
# 运行某些首领插件会自动将其设置为 true，无论配置中的值是什么。
enableHighCompatibilityMode: false
# 设置噩梦游戏模式的精英生成奖励
nightmareWorldSpawnBonus: 0.5
# 设置集中的 /em 命令是否打开插件的主状态页面。
# 强烈建议！
emLeadsToStatusMenu: true
# 设置运行特定命令（例如 /em wallet）是否将导致在其中集中该信息的 /em 菜单。
otherCommandsLeadToEMStatusMenu: true
# 设置设置是否完成。
# 请勿手动设置此值，它旨在通过游戏内命令进行修改。
setupDoneV3: true
# 设置精英是否会阻止生成原版增援，例如僵尸增援功能。
preventVanillaReinforcementsForEliteEntities: true
# 设置 EliteMobs 的服务器默认生成位置。/em spawntp 将引导至此位置。
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# 设置 EliteMobs 是否会再生被精英炸毁的方块。
doExplosionRegen: true
# 设置爆炸再生是否也会再生容器（例如箱子）的内容。
# 将其设置为 false 将使精英爆炸不会炸毁容器。
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# 设置 /em 菜单是否仅使用与基岩兼容的基于库存的菜单样式。
# 提醒一下，玩家也可以执行命令 /em alt 来在 /em 菜单样式之间切换
onlyUseBedrockMenus: false
# 设置书本菜单页面每行的字符限制。
# 如果书本菜单（例如任务）中的文本被截断，请降低此数量
characterLimitForBookMenuPagesV2: 170
# 设置是否用玻璃板填充空白菜单空间。
# 如果您正在使用 EliteMobs 资源包，则不建议这样做。
useGlassToFillMenuEmptySpace: false
# 设置是否将使用 unicode 格式化 EliteMobs 资源包。
# 请勿手动设置此项，它会在安装资源包时自动设置。
# 如果您必须合并 EliteMobs 资源包，请仅手动设置它，并预计如果您这样做，间距可能无法正常工作。
menuUnicodeFormatting: false
# 设置在没有挂起命令的情况下运行 '/em confirm' 时发送给玩家的消息。
noPendingCommands: '&c您当前没有任何挂起的命令！'
# 为发送跟踪消息的首领设置跟踪消息。
trackMessage: 跟踪 $name
# 设置在玩家打开等级要求高于其公会等级的宝箱时发送给玩家的消息。
chestLowRankMessage: '&7[EM] &c您的公会等级至少需要为 $rank &c才能打开此宝箱！'
# 设置在玩家尝试重新打开他们已经打开过的宝箱时发送给玩家的消息。
chestCooldownMessage: '&7[EM] &c您最近已经打开过此宝箱！请等待 $time！'
# 设置当玩家尝试重新打开他们已经打开过的宝箱时发送给玩家的消息。
# 设置当玩家打开宝箱但什么也没得到时发送给玩家的消息
treasureChestNoDropMessage: '&8[EliteMobs] &c您什么也没得到！下次好运！'
# 设置当玩家尝试跟踪不再有效的首领时发送的消息
bossAlreadyGoneMessage: '&c[EliteMobs] 对不起，此首领已经离开！'
# 设置当玩家因 /em 命令出现问题时推荐 /em alt 命令的消息
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &f菜单对您不起作用？请尝试 &2/elitemobs alt &f以查看菜单的替代版本！&c不想再看到此消息？&4/em dismiss'
# 设置当玩家运行 /em alt 命令时显示的消息。
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &f菜单样式已更改！请查看！'
# 设置当玩家打开宝箱但什么也没得到时显示的消息
treasureChestNoDropMessage: '&8[EliteMobs] &c您什么也没得到！下次好运！'
# 设置当玩家尝试跟踪不再有效的首领时发送的消息
bossAlreadyGoneMessage: '&c[EliteMobs] 对不起，此首领已经离开！'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` 包含与冒险者公会中心（世界）相关的配置设置，以及与冒险者公会升级系统相关的设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置 EliteMobs 是否在解锁更高公会等级时添加最大生命值作为声望奖励
Add max health when unlocking higher guild ranks: true
# 设置 EliteMobs 是否在解锁更高公会等级时添加致命一击几率作为声望奖励
Add critical chance when unlocking higher guild ranks: true
# 设置 EliteMobs 是否在解锁更高公会等级时添加闪避几率作为声望奖励
Add dodge chance when unlocking higher guild ranks: true
# 设置用户命令是否重定向到冒险者公会中心。强烈建议用于游戏沉浸和教程目的。
userCommandsTeleportToAdventurersGuild: true
# 设置冒险者公会在游戏内的显示名称
adventurersGuildMenuName: '&6&l冒险者中心'
Prestige 0 rank 0: '&8平民 - 禁用精英！'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# 设置玩家战利品是否受其公会等级限制。
# 这是 EliteMobs 中一个极其重要的部分，并且强烈推荐。
limitLootBasedOnGuildTier: true
# 设置当玩家的战利品因其公会等级较低而被削弱时发送给玩家的消息。
lootLimiterMessage: '&7[EM] &c您必须通过 /ag 解锁下一个公会等级才能掠夺更好的物品！'
# 设置在公会升级时运行的命令。占位符为：
# $prestigerank - 输出声望等级
# $activerank - 输出当前活动等级
# $player - 输出玩家姓名
onRankUpCommand: []
# 设置在声望等级提升时运行的命令。
# $prestigerank - 输出声望等级
# $activerank - 输出当前活动等级
# $player - 输出玩家姓名
onPrestigeUpCommand: []
# 设置第一次闪避奖励的声望等级。
dodgePrestige3Bonus: 3.0
# 设置第二次闪避奖励的声望等级。
dodgePrestige6Bonus: 6.0
# 设置第三次闪避奖励的声望等级。
dodgePrestige9Bonus: 10.0
# 设置第一次致命一击奖励的声望等级。
critPrestige2Bonus: 3.0
# 设置第二次致命一击奖励的声望等级。
critPrestige5Bonus: 6.0
# 设置第三次致命一击奖励的声望等级。
critPrestige8Bonus: 10.0
# 设置第一次最大生命值奖励的声望等级。
healthPrestige1Bonus: 2.0
# 设置第二次最大生命值奖励的声望等级。
healthPrestige4Bonus: 2.5
# 设置第三次最大生命值奖励的声望等级。
healthPrestige7Bonus: 3.0
# 设置第三次最大生命值奖励的声望等级。
healthPrestige10Bonus: 4.0
# 设置能够负担得起等级提升的首领估计基础击杀量。
baseKillsForRankUp: 100
# 设置每个等级必须被击杀才能升级的估计首领额外数量。
# 公式是这个数量 x 玩家当前所处的等级。
additionalKillsForRankUpPerTier: 50
# 设置在有人解锁声望等级时发送给玩家的标题。
# $player 是一个占位符，将被替换为玩家的显示名称。
prestigeUnlockMessageTitle: $player
# 设置在有人解锁声望等级时发送给玩家的副标题。
# $tier 是一个占位符，将被替换为玩家的声望等级。
prestigeUnlockMessageSubtitle: '&2已解锁 $tier&2！'
# 设置当玩家使用和平（平民）等级时将应用于生成几率的倍数。
peacefulModeEliteChanceDecrease: 0.2
# 设置不应用公会等级奖励的世界列表
worldsWithoutAGBonuses: []
# 禁用用户切换到 EliteMobs 和平模式的能力。和平模式会降低该玩家周围的生物的等级和生成率
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` 允许管理员自定义反作弊系统的不同方面。反作弊系统的存在是为了防止玩家使用诸如生物磨床之类的方式轻松地刷硬币和战利品，并促使他们进行真正的战斗和迷你地牢，而不是通过 afk 点击方式到达插件的顶部。

如果您不希望人们只是 afk 刷完整个插件，并且希望他们实际与迷你地牢互动，则保持启用此关键系统。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置当反作弊被触发时显示的消息。
AntiExploit message: '&c[EM 反作弊] &7附近的精英不会掉落特殊战利品。'
# 设置是否启用黑暗房间反作弊 1。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable darkroom antiexploit 1: true
# 设置是否启用黑暗房间反作弊 2。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable darkroom antiexploit 2: true
# 设置是否启用黑暗房间反作弊 3。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable darkroom antiexploit 3: true
# 设置是否启用大型黑暗房间反作弊 1。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable large darkroom antiexploit 1: true
# 设置是否启用末影人高度反作弊。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable enderman height antiexploit: true
# 设置是否启用坐骑反作弊。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable mount antiexploit: true
# 设置是否禁止精英生物捡起物品
preventItemPickupByMobs: true
# 设置是否启用环境伤害反作弊。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable ambient damage antiexploit: true
# 设置是否启用蜂蜜块反作弊。
# 未刻意记录特定的反作弊功能。服务器操作员可以看到触发了哪种反作弊类型，但关于其具体工作方式的更多信息不可用。
Enable honey block antiexploit: true
# 设置反作弊激活的阈值。值越高，容错能力越强。不建议修改此设置。
antiExploitThreshold: 10
# 设置是否启用无路径反作弊
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` 包含战斗标签系统的配置设置。此系统仍远未完成，但它会尝试管理玩家进入战斗后的行为。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否启用战斗标签。
# 启用后，与战斗交战的飞行玩家将被设置为停止飞行。
Enable combat tag: true
# 设置在战斗标签激活时发送的消息。
Combat tag message: '&c[EliteMobs] 战斗标签已激活！'
# 设置 /ag 命令是否在传送前具有计时器
Enable adventurers guild teleport timer: true
# 设置等待传送计时器时设置的操作消息。
Teleport time left: '&7[EM] &a$time &7秒后传送...'
# 设置当玩家在等待传送时移动时发送的消息。
Teleport cancelled: '&7[EM] &c传送已中断！'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` 包含 DiscordSRV 的配置设置。如果您想了解如何配置此功能，请[单击此处！]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>展开表格</b></summary>

```yml
# 文档可以在这里找到：https://magmaguy.com/wiki.html#lang=zh-cn&article=elitemobs+discordsrv.md
announcementRoomName: 您需要输入您在 DISCORDSRV 配置文件中设置的 DISCORD 房间名称，在其中广播 ELITEMOBS 公告，请查看 ELITEMOBS WIKI 以获取详细信息
```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` 包含 EliteMobs 经济的配置设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否启用 EliteMobs 经济。这意味着精英币、购买和出售装备的能力以及升级公会等级的能力
# 如果禁用，玩家将无法在该插件中取得进展！
enableEconomy: true
# 设置物品的转售价值，占原始价格的百分比。5 是 5%
itemResaleValue: 5.0
# 设置所用货币的游戏内名称。
currencyName: 精英币
# 设置插件以使用 Vault。不建议这样做！在此处阅读原因：https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# 设置精英是否会根据其等级掉落硬币。
enableCurrencyShower: true
# 设置精英掉落的货币的倍数。
currencyShowerTierMultiplier: 1.0
# 设置玩家捡起精英货币时发送的消息。
chatCurrencyShowerMessage: '&7[EM] 您捡起了 &a$amount $currency_name！'
# 设置当玩家捡起精英货币时发送的操作栏消息。
actionbarCurrencyShowerMessage: '&7[EM] 您捡起了 &a$amount $currency_name！'
# 发送在掠夺货币后玩家获得的消息。对于教程目的很有用。
adventurersGuildNotificationMessages: '&7[EM] 有多余的零用钱？请尝试 &a/ag !'
# 设置玩家之间交易的税率。
# 强烈建议出于平衡原因，因为高等级玩家可以获得高达 6 倍的货币，并尝试使用其他玩家来绕过声望货币重置。
playerToPlayerPaymentTaxes: 0.2
# 发送精英货币给其他玩家时发送的消息。
Economy pay message v2: '&2您已向 &2$receiver&2 支付 &2$amount_sent $currency_name，他/她收到了税后的 $amount_received！'
# 在玩家发送货币后发送的消息。
Economy currency left message: 您现在有 &2$amount_left $currency_name
# 在收到货币时收到的消息。
Economy money from payment message: 您已从 $sender 收到 &2$amount_received $currency_name
# 在玩家尝试发送他们没有的硬币数量时发送的消息。
Economy payment insufficient currency: '&c您没有足够的 $currency_name 来执行此操作！'
# /em 余额消息
Wallet command message: 您有 &2$balance $currency_name
# 在玩家尝试向另一位玩家发送货币时发送的确认消息。
Tax confirmation message: '&c发送付款将收取 $percentage% 的税。&a执行 &9$command &a以继续！'
# 在玩家从商店购买时发送的消息。
Shop buy message: '&a您已花费 $item_value $currency_name 购买了 $item_name &a！'
# 在玩家与商店交互时发送的消息。
Shop current balance message: '&a您拥有 $currency_amount $currency_name。'
# 在玩家没有足够的货币来购买物品时发送的消息
Shop insufficient funds message: '&c您没有足够的 $currency_name！'
# 当玩家尝试购买他们负担不起的物品时发送的消息的第二部分。
Shop item cost message: 该物品需要 &c$item_value $currency_name。
# 在向商店出售物品时发送的消息。
Shop sell message: '&a您已出售 $item_name &a，获得 $currency_amount $currency_name！'
# 在尝试出售不属于该玩家的物品时发送的消息。
Shop sale player items warning: '&c您无法出售当前不灵魂绑定到您的物品！这包括来自其他声望等级的物品！'
# 在尝试出售非 EliteMobs 物品时发送的消息
Shop sale instructions: '&c您只能在此处出售 EliteMobs 战利品！（从在其背景故事中显示值的精英掉落的盔甲/武器）'
# 在出售一批精英物品时发送的消息。
shopBatchSellItem: '&a您已将您的物品以 $currency_amount $currency_name 的价格出售！'
lootShowerMaterial:
  # 设置 1 个掉落精英币的材质类型。
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # 设置 1 个掉落精英币的自定义模型 ID。由资源包使用。
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_AXE: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_BOOTS: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_CHESTPLATE: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_LEGGINGS: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_HELMET: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_PICKAXE: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_SHOVEL: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_SWORD: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  DIAMOND_HOE: 17.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_AXE: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_BOOTS: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_LEGGINGS: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_CHESTPLATE: 16.0
  # 设置此材质在 elitemobs 货币系统中的价值。
  IRON_HELMET: 16.0
```

</details>

---

## events.yml

`events.yml` 包含事件的配置选项。

_**注意：这些只是非常基本的全局设置。**_

您可以在 `events` 文件夹中进一步修改特定事件。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否仅在事件发生的世界中广播事件。
Only broadcast event message in event worlds: false
# 设置定时事件之间的最短冷却时间（以分钟为单位）
actionEventMinimumCooldownMinutes: 240
# 设置是否会发生操作事件。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# 设置是否会发生定时事件。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` 包含精英物品的全局设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置在物品背景故事中添加到原版附魔的字符前缀。
noItemDurabilityMessage: '&8[EliteMobs] $item &4已损坏！在修复之前无法使用！'
# 设置是否掉落任何 EliteMobs 战利品。
# 包括精英币、自定义物品、程序化生成的物品 - 一切！
# 不建议这样做，会使 mmorpg 进展不可能。
doEliteMobsLoot: true
# 设置程序化生成的战利品是否会根据物品的质量具有不同的颜色。
doMMORPGColorsForItems: true
# 设置是否阻止自定义物品（例如横幅或方块）的放置。
# 建议这样做 - 自定义物品在放置时会损坏，并且无法恢复！
preventCustomItemPlacement: true
# 设置所有 EliteMobs 物品的自定义背景故事格式！
# 以下是有效的占位符：
# $itemLevel - 显示物品等级
# $prestigeLevel - 显示声望等级
# $weaponOrArmorStats - 根据物品显示精英 DPS 或精英护甲属性
# $soulbindInfo - 显示物品灵魂绑定到谁（如果有）
# $itemSource - 显示物品来源，例如生物或商店
# $ifLore - 使该行仅在物品具有自定义背景故事时显示。仅适用于自定义物品
# $customLore - 显示整个自定义背景故事。仅适用于自定义物品
# $ifEnchantments - 使该行仅在物品具有任何附魔时显示
# $enchantments - 显示物品上的附魔
# $eliteEnchantments - 显示物品上的精英附魔
# $ifCustomEnchantments - 显示物品上的自定义附魔
# $customEnchantments - 显示物品上的自定义附魔
# $ifPotionEffects - 如果物品具有药水效果，则仅显示该行
# $potionEffects - 显示物品上的药水效果
# $loreResaleValue - 显示物品的价值。可能会根据查看位置显示购买价格或出售价格
# 重要提示：可以通过下方的配置设置进一步自定义多个占位符
itemLoreStructureV2:
- §7§m§l---------§7<§l装备信息§7>§m§l---------
- '§7物品等级：§f$itemLevel §7声望 §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§l背景故事§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§l附魔§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§l自定义附魔§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§l效果§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# 设置商店购买的商店来源背景故事
shopSourceItemLores: '&7从商店购买'
# 设置从首领掠夺的物品的商店来源背景故事
mobSourceItemLores: '&7从 $mob 掠夺'
# 设置物品价值背景故事
loreWorths: '&7价值 $worth $currencyName'
# 设置物品转售价值背景故事
loreResaleValues: '&7以 $resale $currencyName 出售'
# 设置任何精英物品从精英生物掉落的基本几率
flatDropRateV3: 0.2
# 设置任何精英物品从区域首领掉落的基本几率
regionalBossNonUniqueDropRate: 0.05
# 设置区域首领是否可以掉落原版战利品
regionalBossesDropVanillaLoot: false
# 设置精英物品掉落的几率基于首领等级的增加量。
# 首领的等级乘以该值并添加到基本几率中。
# 不再建议将此值设为高于 0.0！
levelIncreaseDropRateV2: 0.0
# 设置程序化生成物品掉落的加权几率。
# 此系统使用加权概率！如果您不知道那是什么，请在 google 上搜索。
proceduralItemDropWeight: 90.0
# 设置加权物品掉落的相对几率。
# 加权物品是不具有动态权重的自定义物品，例如护符。
weighedItemDropWeight: 1.0
# 设置固定物品掉落的相对几率。这些是不缩放的自定义物品。
fixedItemDropWeight: 10.0
# 设置有限物品掉落的相对几率。这些是缩放到特定等级的自定义物品
limitedItemDropWeight: 3.0
# 设置可缩放物品掉落的相对几率。这些是可以缩放到任何等级的自定义物品，并且是插件中最常见的。
scalableItemDropWeight: 6.0
# 设置生物原版战利品的倍数，基于生物的等级。
defaultLootMultiplier: 0.0
# 设置默认战利品倍数的最大等级。
levelCapForDefaultLootMultiplier: 200
# 设置基于首领等级的首领掉落的原版 Minecraft 经验值倍数。
defaultExperienceMultiplier: 1.0
# 设置 EliteMobs 将掉落的最大战利品等级。强烈建议将其保留在 200。
maximumItemLevel: 200
# 设置是否将使用精英附魔。
# 当精英物品获得超出原版限制的附魔等级时，精英附魔会替换原版附魔。
# 例如：如果精英剑应该具有锋利 10，由于 Minecraft 限制为 5 级，它将具有锋利 5 和精英锋利 5。
# 精英锋利仅影响 EliteMobs 生成的生物。这样做是为了使 PVP 和原版战斗不会变得不平衡。
useEliteEnchantments: true
# 设置将用于物品背景故事中的精英附魔的显示名称。
eliteEnchantmentLoreStrings: 精英
# 设置是否 EliteMobs 会将锄头视为损坏计算的有效武器。
useHoesAsWeapons: false
# 设置 EliteMobs 是否会在高品质的掉落物品上生成特殊粒子。
enableRareItemParticleEffects: true
# 设置将在物品背景故事中用于显示药水效果对被击中实体生效的符号。
potionEffectOnHitTargetLore: '&4⚔☠'
# 设置将在物品背景故事中用于显示药水效果对攻击的玩家生效的符号。
potionEffectOnHitSelfLore: '&9⚔🛡'
# 设置将在物品背景故事中用于显示药水效果将持续应用（只要玩家挥舞它）的符号。
potionEffectContinuousLore: '&6⟲'
# 设置在物品背景故事中添加到精英附魔的字符前缀。
eliteEnchantmentLoreColor: '&9◇'
# 设置在物品背景故事中添加到原版附魔的字符前缀。
vanillaEnchantmentLoreColor: '&7◇'
# 设置在物品背景故事中添加到自定义附魔的字符前缀。
customEnchantmentColor: '&3◇'
# 设置在物品背景故事中添加到药水效果的字符前缀。
potionEffectLoreColor: '&5◇'
# 设置如果物品未灵魂绑定将出现在物品上的文本。
noSoulbindLore: '&7未灵魂绑定！'
# 设置是否可以通过原版手段附魔精英物品。不建议这样做，因为 EliteMobs 有自己的自定义附魔系统及其自己的平衡！
preventEliteItemEnchantment: true
# 设置是否可以通过原版手段解除精英物品的附魔。
preventEliteItemDisenchantment: true
# 设置当玩家尝试解除附魔且不允许的物品时显示的消息。
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] 无法解除精英物品的附魔！'
# 设置是否可以通过原版手段将精英物品从钻石升级到下界合金。不建议这样做！
preventEliteItemDiamondToNetheriteUpgrade: true
# 设置精英物品是否仅在死亡时失去耐久度。
# 这是 EliteMobs 的一个重要系统，强烈建议使用，因为没有它，高级战斗几乎是不可能的！
eliteItemsDurabilityLossOnlyOnDeath: true
# 设置精英物品（如果设置为在死亡时失去耐久度）的耐久度损失倍数。
# 介于 0.0 和 1.0 之间的值会降低耐久度损失，而高于 1.0 的值会增加耐久度损失。
# 示例：0.5 处理 50% 的耐久度损失，2.0 处理 200% 的耐久度损失。
eliteItemsDurabilityLossMultiplier: 1.0
# 设置在物品报废成功后显示的消息。
scrapSucceededMessageV2: '&8[EliteMobs] &2报废成功 $amount 次！'
# 设置在物品报废失败时显示的消息。
scrapFailedMessageV2: '&8[EliteMobs] &c报废失败 $amount 次！'
# 设置是否应将精英战利品直接放入玩家的背包中。
putLootDirectlyIntoPlayerInventory: false
# 设置玩家在获得等级过低的物品之前可以具有的最大等级差异。
# 这是根据玩家穿着的战利品的平均等级计算的。
# 例如，如果设置为 10 并且玩家拥有 50 级装备，则他们将无法刷 39 级首领。
lootLevelDifferenceLockout: 10
# 设置 EliteMobs 是否会在使用死亡时耐久度损失系统时阻止精英物品损坏。
# 玩家无论如何都将无法使用耐久度为 0 的物品，这只是为了防止意外丢失高等级但耐久度低的物品。
preventEliteItemsFromBreaking: true
# 设置 EliteMobs 中可以程序化生成掉落钻石装备的最低首领等级 +7。
# EliteMobs 中没有程序化生成的下界合金装备，只有自定义战利品。
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# 设置当通过 /em simloot <等级> <次数> 命令成功滚动战利品时在聊天中显示的消息。
simlootMessageSuccess: '&8[EliteMobs] &2为战利品掷骰子，获得了 $itemName &2！'
# 设置通过 /em simloot <等级> <次数> 命令无法滚动战利品时在聊天中显示的消息。
simlootMessageFailure: '&8[EliteMobs] &c为战利品掷骰子，什么也没得到！'
# 设置当精英战利品直接放入玩家背包时玩家获得的消息。
directDropCustomLootMessage: '&8[EliteMobs] &2获得了 $itemName &2！'
# 设置当原版战利品直接放入玩家背包时玩家获得的消息。
directDropMinecraftLootMessage: '&8[EliteMobs] &a获得了 $itemName &a！'
# 设置当精英币直接放入玩家背包时玩家获得的消息。
directDropCoinMessage: '&8[EliteMobs] &a获得了 &2$amount $currencyName &a！'
# 设置 EliteMobs 是否会隐藏原版 Minecraft 属性。
hideItemAttributes: true
# 设置精英物品上特定于武器的背景故事条目。$EDPS 占位符将被替换为武器的精英 DPS（每秒伤害）。
weaponEntry: '&7精英 DPS：&2$EDPS'
# 设置精英物品上特定于盔甲的背景故事条目。$EDEF 占位符将被替换为武器的精英 DEF（防御）。
armorEntry: '&7精英护甲：&2$EDEF'
# 设置当玩家杀死首领但装备等级与首领等级相差太大而无法获得硬币时在聊天中显示的消息
levelRangeTooDifferent: '&8EM] &4您的装备等级为 $playerLevel，首领等级为 $bossLevel，等级差异太大，无法获得硬币！'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` 包含与自定义战斗系统相关的所有配置选项，以及通常与 Elite Mobs 的工作方式相关的大多数配置选项。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否会生成自然生成的精英。注意：像僵尸国王这样的事件生物不是自然生成的精英！如果您想禁用事件首领，则必须禁用事件。
doNaturalEliteMobSpawning: true
# 设置是否可以将从生物刷怪笼生成的生物转换为精英。不建议！
doSpawnersSpawnEliteMobs: false
# 设置自然生成的生物转换为精英生物的百分比。
eliteMobsSpawnPercentage: 0.05
# 设置扫描超级生物堆叠的超级生物范围
superMobStackRange: 15
# 设置精英可以生成的最大等级。
# 注意：精英生物等级是基于玩家佩戴的护甲和武器，并且护甲的等级最高只能达到 200。
naturalEliteMobsLevelCap: 250
# 设置精英是否会根据其等级佩戴护甲。这仅用于视觉目的，不会影响战斗。
doElitesWearArmor: true
# 设置精英是否会