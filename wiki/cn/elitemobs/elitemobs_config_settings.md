# EliteMobs 默认配置

**EliteMobs 默认安装了推荐的默认设置。 如果你随机更改，很可能只会让整体体验变得更糟。**

_**EliteMobs 为所有用户提供了推荐的默认设置。 如果你随机更改然后请求支持， 你很有可能会被告知要重置你的配置文件。 对插件的修改应该来自于游戏测试，而不是仅仅的猜测。**_

## 入门

由于对定制化的需求很高，EliteMobs 目前提供了大量的配置选项。 为了使本维基页面简洁明了，这里只显示默认配置。

如果你想了解更多关于特定设置的信息，你可以参考配置文件并查看注释。

---

## config.yml

`config.yml` 主要包含一些随机设置，在创建它们的时候还不能很好地归类到其他地方。 它是最有可能在版本之间发生变化的配置文件。

<div align="left">

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置 EliteMobs 使用的语言文件
# 不要手动更改此设置！ 它应该使用命令 '/em language <languagefile>' 安装
language: english
# 设置由 elitemobs 生成的精英和 Boss 是否总是显示他们的姓名标签。
# 不推荐！
alwaysShowEliteMobNameTags: false
# 设置被动生物必须在附近有多少只才能被合并。
# 不要设置为 0！
superMobStackAmount: 50
# 使精英不会用爆炸伤害被动生物。
preventEliteCreeperDamageToPassiveMobs: true
# 设置 EliteMobs 是否将使用标题来警告玩家缺少权限
useTitlesForMissingPermissionMessages: true
# 设置 EliteMobs 是否阻止将命名生物转换为精英。
# 对于与其他插件的兼容性尤其重要。
preventEliteMobConversionOfNamedMobs: true
# 设置 EliteMobs 是否转换具有自定义生成原因的生物。
# 运行某些 Boss 插件将自动将其设置为 true，无论配置中的值是什么。
enableHighCompatibilityMode: false
# 设置梦魇游戏模式下的精英生成奖励
nightmareWorldSpawnBonus: 0.5
# 设置集中式 /em 命令是否打开插件的主状态页面。
# 强烈推荐！
emLeadsToStatusMenu: true
# 设置运行特定命令（如 /em wallet）是否会打开集中显示该信息的 /em 菜单。
otherCommandsLeadToEMStatusMenu: true
# 设置设置是否完成。
# 不要手动设置此值，它应该通过游戏内命令进行修改。
setupDoneV3: true
# 设置精英是否会阻止生成普通增援，例如僵尸增援功能。
preventVanillaReinforcementsForEliteEntities: true
# 为 EliteMobs 设置服务器的默认生成位置。 /em spawntp 将指向此位置。
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# 设置 EliteMobs 是否会重新生成被精英炸毁的方块。
doExplosionRegen: true
# 设置爆炸再生是否也会重新生成容器（如箱子）的内容。
# 将其设置为 false 将使精英爆炸不会炸毁容器。
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# 设置 /em 菜单是否仅使用与基岩版兼容的基于物品栏的菜单样式。
# 提醒一下，玩家可以使用命令 /em alt 在 /em 菜单样式之间切换
onlyUseBedrockMenus: false
# 设置书籍菜单页面每行的字符限制。
# 如果文本在书籍菜单中被截断，例如任务，请降低此值
characterLimitForBookMenuPagesV2: 170
# 设置是否使用玻璃板填充空的菜单空间。
# 如果你正在使用 EliteMobs 资源包，则不推荐使用此选项。
useGlassToFillMenuEmptySpace: false
# 设置是否使用 unicode 来格式化 EliteMobs 资源包。
# 不要手动设置此选项，它会在安装资源包时自动设置。
# 只有在你不得不合并 EliteMobs 资源包时才手动设置它，并且要知道如果你这样做，间距可能无法正常工作。
menuUnicodeFormatting: false
# 设置玩家在没有待处理命令的情况下运行 '/em confirm' 时发送的消息。
noPendingCommands: '&c你当前没有任何待处理的命令！'
# 设置发送跟踪消息的 Boss 的跟踪消息。
trackMessage: 跟踪 $name
# 设置发送给打开等级要求高于其公会等级的宝箱的玩家的消息。
chestLowRankMessage: '&7[EM] &c你的公会等级需要至少达到 $rank &c才能打开这个箱子！'
# 设置发送给尝试重新打开他们已经打开过的宝箱的玩家的消息。
chestCooldownMessage: '&7[EM] &c你最近已经打开过这个箱子了！ 等 $time!'
# 设置为在 /em 命令出现问题的玩家推荐 /em alt 命令的消息
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &f菜单无法正常工作？ 尝试使用 &2/elitemobs
  alt &f查看菜单的替代版本！ &c不想再看到此消息？ &4/em dismiss'
# 设置玩家运行 /em alt 命令时出现的消息。
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &f菜单样式已更改！ 快去看看吧！'
# 设置玩家打开宝箱但什么也没得到时出现的消息
treasureChestNoDropMessage: '&8[EliteMobs] &c你什么也没得到！ 祝下次好运！'
# 设置玩家尝试跟踪不再有效的 Boss 时出现的消息
bossAlreadyGoneMessage: '&c[EliteMobs] 抱歉，这个 Boss 已经消失了！'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` 包含与冒险家公会中心（世界）相关的配置设置，以及与冒险家公会等级提升系统相关的设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置 EliteMobs 在解锁公会等级时是否会增加最大生命值作为声望奖励
Add max health when unlocking higher guild ranks: true
# 设置 EliteMobs 在解锁公会等级时是否会增加暴击几率作为声望奖励
Add critical chance when unlocking higher guild ranks: true
# 设置 EliteMobs 在解锁公会等级时是否会增加闪避几率作为声望奖励
Add dodge chance when unlocking higher guild ranks: true
# 设置用户命令是否会被重新路由到冒险家公会中心。 强烈建议这样做，以增强游戏沉浸感和教程目的。
userCommandsTeleportToAdventurersGuild: true
# 设置冒险家公会在游戏中的显示名称
adventurersGuildMenuName: '&6&l冒险家中心'
Prestige 0 rank 0: '&8平民 - 禁用精英！'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# 设置玩家的战利品是否受其公会等级的限制。
#  这是 EliteMobs 中一个非常重要的部分，强烈建议启用。
limitLootBasedOnGuildTier: true
# 设置玩家的战利品因其公会等级低而被削弱时发送的消息。
lootLimiterMessage: '&7[EM] &c你必须通过 /ag 解锁下一个公会等级才能获得更好的物品！'
# 设置公会等级提升时运行的命令。 占位符：
# $prestigerank - 输出声望等级
# $activerank - 输出当前的活跃等级
# $player - 输出玩家名称
onRankUpCommand: []
# 设置声望等级提升时运行的命令。
# $prestigerank - 输出声望等级
# $activerank - 输出当前的活跃等级
# $player - 输出玩家名称
onPrestigeUpCommand: []
# 设置第一个闪避奖励的声望等级。
dodgePrestige3Bonus: 3.0
# 设置第二个闪避奖励的声望等级。
dodgePrestige6Bonus: 6.0
# 设置第三个闪避奖励的声望等级。
dodgePrestige9Bonus: 10.0
# 设置第一个暴击奖励的声望等级。
critPrestige2Bonus: 3.0
# 设置第二个暴击奖励的声望等级。
critPrestige5Bonus: 6.0
# 设置第三个暴击奖励的声望等级。
critPrestige8Bonus: 10.0
# 设置第一个最大生命值奖励的声望等级。
healthPrestige1Bonus: 2.0
# 设置第二个最大生命值奖励的声望等级。
healthPrestige4Bonus: 2.5
# 设置第三个最大生命值奖励的声望等级。
healthPrestige7Bonus: 3.0
# 设置第三个最大生命值奖励的声望等级。
healthPrestige10Bonus: 4.0
# 设置能够负担得起等级提升所需的估计基础 Boss 击杀数量。
baseKillsForRankUp: 100
# 设置能够提升等级所需的估计额外 Boss 击杀数量（每个等级）。
# 公式是这个数量 x 玩家当前的等级。
additionalKillsForRankUpPerTier: 50
# 设置玩家解锁声望等级时发送的标题。
# $player 是一个占位符，将被替换为玩家的显示名称。
prestigeUnlockMessageTitle: $player
# 设置玩家解锁声望等级时发送的副标题。
# $tier 是一个占位符，将被替换为玩家的声望等级。
prestigeUnlockMessageSubtitle: '&2已解锁 $tier&2！'
# 设置玩家使用和平（平民）等级时将应用于生成几率的乘数。
peacefulModeEliteChanceDecrease: 0.2
# 设置不应用公会等级奖励的世界列表
worldsWithoutAGBonuses: []
# 禁用用户切换到 EliteMobs 的和平模式的能力。 和平模式会降低该玩家周围生物的等级和生成率
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` 允许管理员自定义反作弊系统的不同方面。 反作弊系统的存在是为了防止玩家使用生物刷怪笼之类的东西轻松地刷取金币和战利品，并促使他们进行真正的战斗和地下城探险，而不是通过挂机点击的方式达到插件的顶端。

如果你不想让玩家只是挂机刷完整个插件，而是想让他们真正地与地下城互动，那么这是一个非常关键的系统。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置触发反作弊时显示的消息。
AntiExploit message: '&c[EM 反作弊] &7附近的精英不会掉落特殊战利品。'
# 设置是否启用暗室反作弊 1。
# 特定的反作弊功能不会被故意记录下来。 服务器运营商可以看到触发了什么类型的反作弊，但不会提供有关其具体工作原理的更多信息。
Enable darkroom antiexploit 1: true
# 设置是否启用暗室反作弊 2。
# 特定的反作弊功能不会被故意记录下来。 服务器运营商可以看到触发了什么类型的反作弊，但不会提供有关其具体工作原理的更多信息。
Enable darkroom antiexploit 2: true
# 设置是否启用暗室反作弊 3。
# 特定的反作弊功能不会被故意记录下来。 服务器运营商可以看到触发了什么类型的反作弊，但不会提供有关其具体工作原理的更多信息。
Enable darkroom antiexploit 3: true
# 设置是否启用大型暗室反作弊 1。
# 特定的反作弊功能不会被故意记录下来。 服务器运营商可以看到触发了什么类型的反作弊，但不会提供有关其具体工作原理的更多信息。
Enable large darkroom antiexploit 1: true
# 设置是否启用末影人高度反作弊。
# 特定的反作弊功能不会被故意记录下来。 服务器运营商可以看到触发了什么类型的反作弊，但不会提供有关其具体工作原理的更多信息。
Enable enderman height antiexploit: true
# 设置是否启用坐骑反作弊。
# 特定的反作弊功能不会被故意记录下来。 服务器运营商可以看到触发了什么类型的反作弊，但不会提供有关其具体工作原理的更多信息。
Enable mount antiexploit: true
# 设置精英生物是否可以捡起物品
preventItemPickupByMobs: true
# 设置是否启用环境伤害反作弊。
# 特定的反作弊功能不会被故意记录下来。 服务器运营商可以看到触发了什么类型的反作弊，但不会提供有关其具体工作原理的更多信息。
Enable ambient damage antiexploit: true
# 设置是否启用蜂蜜块反作弊。
# 特定的反作弊功能不会被故意记录下来。 服务器运营商可以看到触发了什么类型的反作弊，但不会提供有关其具体工作原理的更多信息。
Enable honey block antiexploit: true
# 设置反作弊激活的阈值。 值越高，容忍度越高。 不建议修改此设置。
antiExploitThreshold: 10
# 设置是否启用无路径反作弊
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` 包含战斗标签系统的配置设置。 这个系统还远远没有完成，但它试图管理玩家进入战斗后的行为。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否启用战斗标签。
# 启用后，参与战斗的飞行玩家将被设置为停止飞行。
Enable combat tag: true
# 设置激活战斗标签时发送的消息。
Combat tag message: '&c[EliteMobs] 战斗标签已激活！'
# 设置 /ag 命令在传送前是否会有一个计时器
Enable adventurers guild teleport timer: true
# 设置等待传送计时器时设置的动作消息。
Teleport time left: '&7[EM] 传送将在 &a$time &7秒后开始...'
# 设置玩家在等待传送时移动时发送的消息。
Teleport cancelled: '&7[EM] &c传送中断！'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` 包含 DiscordSRV 的配置设置。 如果你想了解如何配置此功能，[请点击此处！]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>展开表格</b></summary>

```yml
# 文档可在此处找到：https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: 你需要填写你希望 EliteMobs 公告广播到的 Discord 房间名称，就像你在 DiscordSRV 配置文件中所做的那样，请查看 EliteMobs Wiki 了解更多细节

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` 包含 EliteMobs 经济系统的配置设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否启用 EliteMobs 经济系统。 这意味着精英硬币、买卖装备的能力以及升级公会等级的能力
# 如果禁用，玩家将无法在插件中取得进展！
enableEconomy: true
# 设置物品的转售价格，以原始价格的百分比表示。 5 就是 5%
itemResaleValue: 5.0
# 设置游戏中使用的货币名称。
currencyName: 精英硬币
# 设置插件使用 Vault。 不推荐这样做！ 阅读原因：https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# 设置精英是否会根据其等级掉落硬币。
enableCurrencyShower: true
# 设置精英掉落的货币的乘数。
currencyShowerTierMultiplier: 1.0
# 设置玩家捡起精英货币时发送的消息。
chatCurrencyShowerMessage: '&7[EM] 你捡到了 &a$amount $currency_name！'
# 设置玩家捡起精英货币时发送的动作栏消息。
actionbarCurrencyShowerMessage: '&7[EM] 你捡到了 &a$amount $currency_name！'
# 发送玩家在拾取货币后收到的消息。 对教程目的很有用。
adventurersGuildNotificationMessages: '&7[EM] 想赚外快吗？ 试试 &a/ag !'
# 设置玩家之间交易的税率。
# 出于平衡原因，强烈建议这样做，因为高级玩家可以获得高达 6 倍的货币，并试图利用其他玩家绕过声望货币重置。
playerToPlayerPaymentTaxes: 0.2
# 向其他玩家发送精英货币时发送的消息。
Economy pay message v2: '&2你已向 $receiver&2 支付了 &2$amount_sent $currency_name&2，
  扣除税款后，他/她实际收到了 $amount_received！'
# 玩家发送货币后发送的消息。
Economy currency left message: 你现在有 &2$amount_left $currency_name
# 接收货币时收到的消息。
Economy money from payment message: 你已收到来自 $sender 的 &2$amount_received $currency_name
# 玩家尝试发送他们没有的硬币数量时发送的消息。
Economy payment insufficient currency: '&c你没有足够的 $currency_name 来完成此操作！'
# /em balance 消息
Wallet command message: 你有 &2$balance $currency_name
# 玩家尝试向另一个玩家发送货币时发送的确认消息。
Tax confirmation message: '&c发送付款将收取 $percentage% 的税款。 &a输入 &9$command &a继续！'
# 玩家从商店购买物品时发送的消息。
Shop buy message: '&a你已花费 &a$item_value $currency_name&a 购买了 $item_name！'
# 玩家与商店互动时发送的消息。
Shop current balance message: '&a你有 $currency_amount $currency_name。'
# 玩家没有足够的货币购买物品时发送的消息
Shop insufficient funds message: '&c你没有足够的 $currency_name！'
# 玩家尝试购买他们买不起的物品时发送的第二部分消息。
Shop item cost message: 该物品售价 &c$item_value $currency_name。
# 向商店出售物品时发送的消息。
Shop sell message: '&a你已以 &a$currency_amount $currency_name&a 的价格售出了 $item_name！'
# 尝试出售不属于该玩家的物品时发送的消息。
Shop sale player items warning: '&c你不能出售当前未与你灵魂绑定的物品！ 这包括来自其他声望等级的物品！'
# 尝试出售非 EliteMobs 物品时发送的消息
Shop sale instructions: '&c你只能在这里出售 EliteMobs 战利品！ （从显示价值的精英身上掉落的盔甲/武器）'
# 批量出售精英物品时发送的消息。
shopBatchSellItem: '&a你已以 &a$currency_amount $currency_name&a 的价格售出了你的物品！'
lootShowerMaterial:
  # 设置 1 个掉落的精英硬币的材质类型。
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # 设置 1 个掉落的精英硬币的自定义模型 ID。 由资源包使用。
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
  # 设置未明确定义的物品的默认材质价值。
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` 包含事件的配置选项。

_**注意：这些只是非常基本的全局设置。**_

你可以在 `events` 文件夹中进一步修改特定事件。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置事件消息是否仅在事件发生的世界中广播。
Only broadcast event message in event worlds: false
# 设置定时事件之间的最小冷却时间（以分钟为单位）
actionEventMinimumCooldownMinutes: 240
# 设置是否发生行动事件。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# 设置是否发生定时事件。
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
# 设置物品描述中普通附魔名前缀的字符。
noItemDurabilityMessage: '&8[EliteMobs] $item &4已损坏！ 修理之前无法使用！'
# 设置是否掉落任何 EliteMobs 战利品。
# 包括精英硬币、自定义物品、程序生成物品 - 应有尽有！
# 不推荐，会使 mmorpg 进展变得不可能。
doEliteMobsLoot: true
# 设置程序生成的战利品是否会根据物品的品质显示不同的颜色。
doMMORPGColorsForItems: true
# 设置是否阻止放置自定义物品，如旗帜或方块。
# 建议这样做 - 自定义物品放置后会损坏，并且无法恢复！
preventCustomItemPlacement: true
# 设置所有 EliteMobs 物品的描述格式！
# 以下是有效的占位符：
# $itemLevel - 显示物品等级
# $prestigeLevel - 显示声望等级
# $weaponOrArmorStats - 显示精英 DPS 或精英护甲属性，具体取决于物品
# $soulbindInfo - 显示物品是否与某人灵魂绑定
# $itemSource - 显示物品的来源，如生物或商店
# $ifLore - 仅当物品具有自定义描述时才显示一行。 仅适用于自定义物品
# $customLore - 显示自定义描述的全部内容。 仅适用于自定义物品
# $ifEnchantments - 仅当物品有任何附魔时才显示一行
# $enchantments - 显示物品上的附魔
# $eliteEnchantments - 显示物品上的精英附魔
# $ifCustomEnchantments - 显示物品上的自定义附魔
# $customEnchantments - 显示物品上的自定义附魔
# $ifPotionEffects - 仅当物品具有药水效果时才显示该行
# $potionEffects - 显示物品上的药水效果
# $loreResaleValue - 显示物品的价值。 可能会显示购买价格或出售价格，具体取决于查看位置
# 重要提示：以下配置设置可以进一步自定义多个占位符
itemLoreStructureV2:
- §7§m§l---------§7<§l装备信息§7>§m§l---------
- '§7物品等级：§f$itemLevel §7声望 §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§l描述§7 >§m§l-----------
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
# 设置商店购买的物品来源描述
shopSourceItemLores: '&7从商店购买'
# 设置从 Boss 身上掉落的物品的来源描述
mobSourceItemLores: '&7从 $mob 身上掉落'
# 设置物品价值描述
loreWorths: '&7价值 $worth $currencyName'
# 设置物品转售价值描述
loreResaleValues: '&7售价 $resale $currencyName'
# 设置任何精英物品从精英生物身上掉落的几率。
flatDropRateV3: 0.2
# 设置任何精英物品从区域 Boss 身上掉落的几率。
regionalBossNonUniqueDropRate: 0.05
# 设置区域 Boss 是否掉落普通战利品
regionalBossesDropVanillaLoot: false
# 设置精英物品掉落几率根据 Boss 等级的增加幅度。
# Boss 的等级乘以该值，然后添加到基础几率中。
# 不再建议将其设置为高于 0.0！
levelIncreaseDropRateV2: 0.0
# 设置程序生成物品掉落的加权几率。
# 该系统使用加权概率！ 如果你不知道这是什么，请在谷歌上搜索。
proceduralItemDropWeight: 90.0
# 设置加权物品掉落的相对几率。
# 加权物品是自定义物品，没有动态权重，例如护符。
weighedItemDropWeight: 1.0
# 设置固定物品掉落的相对几率。 这些是不会扩展的自定义物品。
fixedItemDropWeight: 10.0
# 设置受限物品掉落的相对几率。 这些是扩展到特定等级的自定义物品
limitedItemDropWeight: 3.0
# 设置可扩展物品掉落的相对几率。 这些是可以扩展到任何等级的自定义物品，是插件中最常见的物品。
scalableItemDropWeight: 6.0
# 设置生物普通战利品的乘数，基于生物的等级。
defaultLootMultiplier: 0.0
# 设置默认战利品乘数的最高等级。
levelCapForDefaultLootMultiplier: 200
# 设置 Boss 掉落的 Minecraft 经验值乘数，基于 Boss 的等级。
defaultExperienceMultiplier: 1.0
# 设置 EliteMobs 掉落的最高等级战利品的等级。 强烈建议将其保留为 200。
maximumItemLevel: 200
# 设置是否使用精英附魔。
# 当精英物品的附魔等级超过普通限制时，精英附魔将取代普通附魔。
# 例如：如果一把精英剑应该具有 10 级锋利，由于 Minecraft 的限制是 5 级，因此它将具有 5 级锋利和 5 级精英锋利。
# 精英锋利只对 EliteMobs 生成的生物有效。 这样做是为了防止 PVP 和普通战斗变得不平衡。
useEliteEnchantments: true
# 设置物品描述中用于精英附魔的显示名称。
eliteEnchantmentLoreStrings: 精英
# 设置 EliteMobs 是否将锄头视为伤害计算的有效武器。
useHoesAsWeapons: false
# 设置 EliteMobs 是否会在掉落的优质物品上方生成特殊粒子效果。
enableRareItemParticleEffects: true
# 设置物品描述中用于表示药水效果在击中时应用于被击中实体的符号。
potionEffectOnHitTargetLore: '&4⚔☠'
# 设置物品描述中用于表示药水效果在击中时应用于进行击中的玩家的符号。
potionEffectOnHitSelfLore: '&9⚔🛡'
# 设置物品描述中用于表示药水效果将持续重新应用，只要玩家手持该物品的符号。
potionEffectContinuousLore: '&6⟲'
# 设置物品描述中精英附魔前缀的字符。
eliteEnchantmentLoreColor: '&9◇'
# 设置物品描述中普通附魔前缀的字符。
vanillaEnchantmentLoreColor: '&7◇'
# 设置物品描述中自定义附魔前缀的字符。
customEnchantmentColor: '&3◇'
# 设置物品描述中药水效果前缀的字符。
potionEffectLoreColor: '&5◇'
# 设置物品未灵魂绑定时显示在物品上的文本。
noSoulbindLore: '&7未灵魂绑定！'
# 设置精英物品是否可以通过普通方式附魔。 不推荐这样做，因为 EliteMobs 有自己的自定义附魔系统，有自己的平衡！
preventEliteItemEnchantment: true
# 设置精英物品是否可以通过普通方式移除附魔。
preventEliteItemDisenchantment: true
# 设置玩家尝试移除物品附魔但操作不允许时显示的消息。
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] 无法移除精英物品的附魔！'
# 设置精英物品是否可以通过普通方式从钻石升级到下界合金。 不推荐！
preventEliteItemDiamondToNetheriteUpgrade: true
# 设置精英物品是否只在死亡时损失耐久度。
# 这是 EliteMobs 的一个重要系统，强烈建议启用它，因为没有它，高级战斗几乎是不可能的！
eliteItemsDurabilityLossOnlyOnDeath: true
# 设置精英物品在设置为死亡时损失耐久度的耐久度损失乘数。
# 0.0 到 1.0 之间的值会降低耐久度损失，高于 1.0 的值会增加耐久度损失。
# 例如：0.5 会造成 50% 的耐久度损失，2.0 会造成 200% 的耐久度损失。
eliteItemsDurabilityLossMultiplier: 1.0
# 设置物品分解成功时显示的消息。
scrapSucceededMessageV2: '&8[EliteMobs] &2物品分解成功 $amount 次！'
# 设置物品分解失败时显示的消息。
scrapFailedMessageV2: '&8[EliteMobs] &c物品分解失败 $amount 次！'
# 设置是否应将精英战利品直接放入玩家的物品栏中。
putLootDirectlyIntoPlayerInventory: false
# 设置玩家在无法再获得等级过低的物品之前的最大等级差异。
# 这是根据玩家所穿戴战利品的平均等级计算的。
# 例如，如果设置为 10，并且玩家拥有 50 级装备，则他们将无法刷 39 级 Boss。
lootLevelDifferenceLockout: 10
# 设置 EliteMobs 是否会在使用死亡时损失耐久度系统时防止精英物品损坏。
# 无论如何，玩家将无法使用耐久度为 0 的物品，这只是为了防止意外丢失高级但低耐久度的物品。
preventEliteItemsFromBreaking: true
# 设置 Boss 可以程序生成掉落钻石装备的最低等级 +7。
# EliteMobs 中没有程序生成的下界合金装备，只有自定义战利品。
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# 设置通过 /em simloot <等级> <次数> 命令成功掷骰获得战利品时在聊天中显示的消息。
simlootMessageSuccess: '&8[EliteMobs] &2掷骰获得战利品并获得了 $itemName &2！'
# 设置通过 /em simloot <等级> <次数> 命令掷骰获得战利品失败时在聊天中显示的消息。
simlootMessageFailure: '&8[EliteMobs] &c掷骰获得战利品但什么也没得到！'
# 设置玩家将精英战利品直接存入其物品栏时收到的消息。
directDropCustomLootMessage: '&8[EliteMobs] &2已获得 $itemName &2！'
# 设置玩家将普通战利品直接存入其物品栏时收到的消息。
directDropMinecraftLootMessage: '&8[EliteMobs] &a已获得 $itemName &a！'
# 设置玩家将精英硬币直接存入其物品栏时收到的消息。
directDropCoinMessage: '&8[EliteMobs] &a已获得 &2$amount $currencyName &a！'
# 设置 EliteMobs 是否隐藏普通 Minecraft 属性。
hideItemAttributes: true
# 设置精英物品上的武器特定描述条目。 $EDPS 占位符将被替换为武器的精英 DPS（每秒伤害）。
weaponEntry: '&7精英 DPS：&2$EDPS'
# 设置精英物品上的护甲特定描述条目。 $EDEF 占位符将被替换为武器的精英 DEF（防御）。
armorEntry: '&7精英护甲：&2$EDEF'
# 设置玩家击杀 Boss 但装备等级与 Boss 等级相差太大而无法获得硬币时发送的消息
levelRangeTooDifferent: '&8EM] &4你的装备等级为 $playerLevel，Boss 等级为
  $bossLevel，等级差异过大，无法获得硬币！'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` 包含与自定义战斗系统相关的所有配置选项，以及与精英生物工作方式相关的多数配置选项。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否生成自然生成的精英。 注意：像僵尸王这样的事件生物不是自然生成的精英！ 如果你想禁用事件 Boss，则必须禁用事件。
doNaturalEliteMobSpawning: true
# 设置从生物刷怪笼生成的生物是否可以转换为精英。 不推荐！
doSpawnersSpawnEliteMobs: false
# 设置转换为精英生物的自然生成生物的百分比。
eliteMobsSpawnPercentage: 0.05
# 设置超级生物扫描超级生物堆叠的范围
superMobStackRange: 15
# 设置精英可以生成的最高等级。
# 注意：精英生物等级基于玩家所穿戴的盔甲和武器，而盔甲最高只能扩展到 200 级。
naturalEliteMobsLevelCap: 250
# 设置精英是否会根据其等级穿戴盔甲。 这仅用于视觉效果，不会影响战斗。
doElitesWearArmor: true
# 设置精英是否会根据其等级佩戴头盔。 这将防止他们在白天轻易地被烧毁。
doElitesWearHelmets: true
# 设置精英周围是否会有视觉轨迹，警告玩家他们拥有什么玩家。
doNaturalEliteMobVisualEffects: true
# 设置从刷怪笼生成的精英是否会产生视觉效果。
doSpawnerEliteMobVisualEffects: false
# 设置某些技能是否会进入技能的警告阶段。 这非常重要，因为警告阶段通常意味着可以躲避技能，而视觉效果可以让玩家知道应该躲避到哪里。
doPowerBuildupVisualEffects: true
# 设置玩家被精英杀死时是否使用自定义死亡消息。
doCustomEliteMobsDeathMessages: true
# 设置 EliteMobs 是否显示精英的生命值指示器。
doDisplayMobHealthOnHit: true
# 设置 EliteMobs 是否显示对精英造成的伤害指示器。
doDisplayMobDamageOnHit: true
# 设置精英的等级是否会根据距离出生点的距离而增加。
# 这是一个添加到其正常等级之上的值，这意味着如果一个玩家在出生点附近穿着 100 级的装备，而 Boss 由于距离出生点的距离而获得了 +1 级，那么 Boss 将以 101 级生成。
# 通常不建议使用此选项，尤其是在你的服务器上有随机传送系统的情况下。
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# 设置基于距离的等级增加的等级增量之间的距离。
distanceBetweenIncrements: 100.0
# 设置基于距离的等级增加的每个距离增量增加的等级数。
levelIncreaseAtIncrements: 1.0
# 设置是否隐藏精英的技能，直到他们进入战斗。 出于性能原因，建议这样做。
hideEliteMobPowersUntilAggro: true
# 设置对 EliteMobs 生成的所有 Boss 造成的伤害的乘数，使用标准化伤害系统（区域地下城 Boss）的 Boss 除外。 值越高，造成的伤害越高，Boss 越容易被杀死。
# 2.0 = 200%，0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# 设置精英对玩家造成的伤害的乘数。 值越高，Boss 对玩家造成的伤害越高，使用标准化伤害系统（区域地下城 Boss）的 Boss 除外，这使得 Boss 的攻击力更强。
# 2.0 = 200%，0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# 设置是否可以跟踪特殊 Boss。
showCustomBossLocation: true
# 设置发送给玩家以跟踪 Boss 位置的消息。
bossLocationMessage: '&7[EM] &2[点击跟踪！]'
# 设置精英死亡时运行的命令。 有效的占位符有：
# $level 表示 Boss 的等级
# $name 表示 Boss 的名称
# $players 将使命令对参与击杀的每个玩家运行。 例如，如果 Bob 和 Steve 杀死了 Boss，“broadcast $players killed the boss!” 将运行 “bob killed the boss” 和 “steve killed the boss!”
commandsOnEliteMobDeath: []


```

</details>

---

# 设置参与大型 Boss 击杀的玩家收到消息。
bossKillParticipationMessage: '&e你的伤害：&2$playerDamage'
# 设置 Boss 在脱离战斗后是否会恢复生命值。 强烈推荐。
regenerateCustomBossHealthOnCombatEnd: true
# 设置尝试跟踪当前位于不同世界的 Boss 的玩家收到的消息。
defaultOtherWorldBossLocationMessage: '$name：在不同的世界！'
# 设置当玩家使用 Boss 弱点的攻击击中 Boss 时，添加到伤害指示器的前缀。
weakTextColor: '&9'
# 设置当玩家使用 Boss 抵抗的攻击击中 Boss 时，添加到伤害指示器的前缀。
resistTextColor: '&c'
# 设置当玩家使用 Boss 弱点的攻击击中 Boss 时显示的消息。
weakText: '&9&l弱点攻击！'
# 设置当玩家使用 Boss 抵抗的攻击击中 Boss 时显示的消息。
resistText: '&c&l抵抗攻击！'
# 设置是否使用视觉效果来显示 Boss 受到弱点攻击。
doWeakEffect: true
# 设置是否使用视觉效果来显示 Boss 抵抗攻击。
doResistEffect: true
# 设置对使用标准化伤害系统（区域地下城 Boss）的 Boss 造成的伤害的乘数。 值越高，造成的伤害越高，Boss 越容易被杀死。
# 2.0 = 200%，0.5 = 50%
damageToEliteMobMultiplier: 1.0
# 设置使用标准化伤害系统（区域地下城 Boss）的 Boss 对玩家造成的伤害的乘数。 值越高，Boss 对玩家造成的伤害越高，这使得 Boss 的攻击力更强。
# 2.0 = 200%，0.5 = 50%
damageToPlayerMultiplier: 1.0
# 设置使用标准化伤害（通常是区域 Boss）的自定义 Boss 的基础伤害。
normalizedRegionalBossBaselineDamageV2: 3.0
# 设置使用标准化生命值（通常是区域 Boss）的自定义 Boss 的基础生命值。
normalizedRegionalBossBaselineHealthV3: 4.0
# 设置区域 Boss 是否使用标准化战斗系统。
# 强烈建议这样做，如果修改了预制内容，则不会进行适当的平衡。
normalizeRegionalBosses: true
# 设置 Boss 在脱离战斗后恢复生命值时显示的消息。
fullHealMessage: '&2生命值已回满！'
# 设置应用于 Boss 抵抗和弱点攻击的乘数。
strengthAndWeaknessDamageMultipliers: 2.0
# 设置应用于玩家抵抗药水效果的伤害减免的乘数。
resistanceDamageMultiplier: 1.0
# 设置当玩家举起盾牌抵挡近战攻击（不包括技能）时应用于伤害减免的乘数。
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` 包含用于配置程序生成物品的所有配置选项。

<details>

<summary><b>展开表格</b></summary>

```yml
dropProcedurallyGeneratedItems: true
customEnchantmentsChance: 0.5
materialNames:
  swordName: 剑
  bowName: 弓
  pickaxe: 镐
  spade: 铲
  hoe: 锄
  axe: 斧
  helmet: 头盔
  chestplate: 胸甲
  leggings: 护腿
  boots: 靴子
  shears: 剪刀
  fishingRod: 鱼竿
  shield: 盾牌
  trident: 三叉戟
  crossbow: 十字弓
nameFormats:
- $verb $itemType of the $adjective $noun
- $itemType of the $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
nouns:
- MagmaGuy
- Dawn
...
adjectives:
- 可爱的
- 美丽的
...
verbs:
- 挥砍
- 切割
...
verb-ers (noun):
- 世界破坏者
- 世界粉碎者
...
validMaterials:
  DIAMOND_HELMET: true
  DIAMOND_CHESTPLATE: true
  DIAMOND_LEGGINGS: true
  DIAMOND_BOOTS: true
  DIAMOND_SWORD: true
  DIAMOND_AXE: true
  IRON_HELMET: true
  IRON_CHESTPLATE: true
  IRON_LEGGINGS: true
  IRON_BOOTS: true
  IRON_SWORD: true
  IRON_AXE: true
  GOLDEN_HELMET: true
  GOLDEN_CHESTPLATE: true
  GOLDEN_LEGGINGS: true
  GOLDEN_BOOTS: true
  GOLDEN_SWORD: true
  GOLDEN_AXE: true
  CHAINMAIL_HELMET: true
  CHAINMAIL_CHESTPLATE: true
  CHAINMAIL_LEGGINGS: true
  CHAINMAIL_BOOTS: true
  LEATHER_HELMET: true
  LEATHER_CHESTPLATE: true
  LEATHER_LEGGINGS: true
  LEATHER_BOOTS: true
  STONE_SWORD: true
  STONE_AXE: true
  WOODEN_SWORD: true
  WOODEN_AXE: true
  SHIELD: true
  TURTLE_HELMET: true
  TRIDENT: true
  BOW: true
  CROSSBOW: true
```

</details>

---

## ValidWorlds.yml

`ValidWorlds.yml` 包含 EliteMobs 检测到的世界列表，以及用于自定义其中 EliteMobs 功能的选项。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置基于区域的世界列表。
# 基于区域的游戏模式已过时，即将移除！
zoneBasedWorlds: []
# 设置梦魇模式世界的列表。
# 梦魇模式世界是一种游戏模式，其中白天更短，玩家无法睡觉。
# 梦魇世界中的精英生物生成数量也更多。
# https://github.com/MagmaGuy/EliteMobs/wiki/%5BGame-Mode%5D-Nightmare-mode
nightmareWorlds: []
Valid worlds:
  world: true
  world_nether: true
  world_the_end: true
```

</details>

---

## Arenas.yml

`Arenas.yml` 包含你可以修改的竞技场的默认消息和设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 当没有足够的玩家开始竞技场时出现的消息。
notEnoughPlayersMessage: '&8[EliteMobs] &c你需要至少 $amount 名玩家才能开始比赛！'
# 竞技场开始时出现的标题。
startingMessage: '&2开始！'
# 竞技场开始时出现的副标题。
startingSubtitle: '&2倒计时 $count...'
# 竞技场已满时出现的消息。
arenaFullMessage: '&4[EliteMobs] &c竞技场已满！ 你可以在等待比赛结束的同时观战！'
# 当玩家尝试加入正在进行的竞技场时出现的消息。
arenasOngoingMessage: '&4[EliteMobs] &c现在无法加入竞技场 - 比赛正在进行中！ 你可以在等待比赛结束的同时观战！'
# 在玩家加入后提醒他们如何开始竞技场的消息。
instanceStartHintMessage: '&2[EliteMobs] &a你可以通过输入 &2/em
  start &a来开始游戏'
# 提醒玩家如何离开竞技场的消息。
instanceQuitHintMessage: '&4[EliteMobs] &c你可以通过输入 &4/em
  quit &c来离开游戏'
# 玩家加入竞技场时出现的消息。
arenaJoinPlayerMessage: "&2[EliteMobs] &a如果有至少 &2$count &a名玩家，你可以通过输入 &2/em start &a来开始竞技场！\n你可以通过输入 &c/em quit &c来离开竞技场"
# 在观众加入后提醒他们如何离开竞技场的消息。
arenaJoinSpectatorMessage: '&2[EliteMobs] &a你可以随时使用 &2/em quit &a离开竞技场'
# 一波开始时出现的标题消息。
waveTitle: '&a第 &2$wave &a波'
# 一波开始时出现的副标题消息。
waveSubtitle: ''
# 竞技场完成时出现的标题。
victoryTitle: '&2胜利！'
# 竞技场完成时出现的副标题。
victorySubtitle: '&a已完成 &2$wave &a波！'
# 玩家未通过竞技场时出现的标题。
defeatTitle: '&4失败！'
# 玩家未通过竞技场时出现的副标题。
defeatSubtitle: '&c已到达第 &4$wave &c波！'
# 玩家通关竞技场时广播的消息。
victoryBroadcast: 竞技场 $arenaName 已被 $players 征服！
# 玩家加入竞技场时出现的标题。
joinPlayerTitle: '&a使用 &2/em start &a开始游戏！'
# 玩家加入竞技场时出现的副标题。
joinPlayerSubtitle: '&c使用 &4/em quit &c离开游戏！'
# 观众加入竞技场时出现的标题。
joinSpectatorTitle: '&a正在观战！'
# 观众加入竞技场时出现的副标题。
joinSpectatorSubtitle: '&c使用 &4/em quit &c离开游戏！'
# 设置玩家没有权限进入竞技场时发送的消息。
noArenaPermissionMessage: '[EliteMobs] 你没有权限进入此竞技场！'
```

</details>

---

## Database.yml

`Database.yml` 包含有关你希望 EM 如何处理数据库的设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否使用 MySQL。 默认情况下，EliteMobs 使用 SQLite。 如果你希望使用 MySQL，则需要有效的 MySQL 配置。
useMySQL: false
# MySQL 数据库的主机
mysqlHost: localhost
# MySQL 数据库的端口
mysqlPort: '3306'
# 数据库名称
mysqlDatabaseName: elitemobs
# MySQl 的用户名
mysqlUsername: 你的 MySQL 用户名
# MysSQL 数据库的密码
mysqlPassword: 你的 MySQL 密码
# 是否使用 SSL
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` 包含允许你调整地下城中显示的消息的设置，以及其他设置，例如应用效果的伤害乘数。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置地下城中毒害的伤害乘数
# 这对于平衡很重要，因为默认情况下，对于我们设计的地下城来说，伤害有点过高
poisonDamageMultiplier: 0.5
# 设置地下城中火焰伤害的伤害乘数
# 这对于平衡很重要，因为默认情况下，对于我们设计的地下城来说，伤害有点过高
fireDamageMultiplier: 0.5
# 设置地下城中凋零伤害的伤害乘数
# 这对于平衡很重要，因为默认情况下，对于我们设计的地下城来说，伤害有点过高
witherDamageMultiplier: 0.5
# 设置在地下城中是否允许 PvP
friendlyFireInDungeons: false
# 设置地下城中复活旗帜上方显示的文本
dungeonRezInstructions: '&a点击复活！'
# 设置显示玩家在地下城中剩余的生命值数量的文本！占位符：
# $amount - 剩余的生命值数量
dungeonLivesLeftText: '&c剩余 $amount 点生命值！'
# 设置以玩家身份加入地下城的文本！占位符：
# $dungeonName - 地下城的名称
joinDungeonAsPlayerText: '&f以玩家身份加入 $dungeonName！'
# 设置以观众身份加入地下城的文本！占位符：
# $dungeonName - 地下城的名称
joinDungeonAsSpectatorText: '&f以观众身份加入 $dungeonName！'
# 设置将显示在实例化地下城菜单的物品描述中的标题
# $difficulty 是地下城配置文件中难度的占位符
instancedDungeonTitle: 开始 $difficulty 难度地下城！
# 设置将显示在实例化地下城菜单的物品描述中的描述
# $dungeonName 是地下城配置文件中地下城名称的占位符
instancedDungeonDescription:
- '&f为你自己创建新的地下城实例'
- $dungeonName &f，也许还有
- '&f一些朋友！'
# 设置是否可以观战实例化内容。
allowSpectatorsInInstancedContent: true
# 设置实例化地下城完成时显示的消息
instancedDungeonCompleteMessage: '[EliteMobs] 地下城已完成！ 它将在 2 分钟后自毁！'
# 设置实例化地下城关闭时显示的消息
instancedDungeonClosingInstanceMessage: '[EliteMobs] 正在关闭实例！'
```

</details>

---

## Quests.yml

`Quests.yml` 包含任务的设置以及显示哪些消息。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否必须将任务交还给任务发布者才能完成任务。
requireQuestTurnIn: true
# 设置接受任务时发送的消息。
questJoinMessage: '&a你已接受任务 $questName &a！'
# 设置放弃任务时发送的消息。
questLeaveMessage: '&c你已放弃任务 $questName &c！'
# 设置完成任务时发送的消息。
questCompleteMessage: '&2你已完成任务 $questName &2！'
# 设置当玩家尝试在没有任何活动任务时放弃任务时发送的消息。
leaveWhenNoActiveQuestsExist: '&c你当前没有活动任务！'
# 设置玩家尝试离开任务时发送的确认消息。
questLeaveConfirmationMessage: '&c你确定要放弃当前任务吗？ 输入 &a/em confirm &c确认你的选择！'
# 设置与任务相关的一些消息是否使用标题而不是聊天消息。
useQuestAcceptTitles: true
# 设置玩家开始任务时发送的标题。
questStartTitle: '&a任务已接受！'
# 设置玩家开始任务时发送的副标题。
questStartSubtitle: $questName
# 设置玩家完成任务时是否发送标题。
useQuestCompleteTitles: true
# 设置玩家完成任务时发送的标题。
questCompleteTitle: '&2任务已完成！'
# 设置玩家完成任务时发送的副标题。
questCompleteSubtitle: $questName
# 设置玩家离开任务时是否发送标题。
useQuestLeaveTitles: true
# 设置玩家离开任务时发送的标题。
questLeaveTitle: '&c任务已放弃！'
# 设置玩家离开任务时发送的副标题。
questLeaveSubtitle: $questName
# 设置是否在聊天中发送报告任务目标进度的消息。
doQuestChatProgression: true
# 设置已完成目标的颜色代码。
ongoingQuestColorCode: '&2'
# 设置击杀任务进度消息的格式。
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤击杀 $name:$color$current&0/$color$target'
# 设置收集任务进度消息的格式。
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤获取 $name:$color$current&0/$color$target'
# 设置对话任务进度消息的格式。
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤与 $name 对话:$color$current&0/$color$target'
# 设置玩家可以拥有的最大接受任务数量。
maximumActiveQuests: 10
# 设置当玩家尝试接受超过活动任务上限的任务数量时发送的消息。
questCapMessage: '&8[EliteMobs] &c你已达到最大活动任务数量 (10)！ &4如果你想获得更多任务，请放弃或完成至少一项活动任务！'
# 设置是否为任务使用记分板消息。
useQuestScoreboards: true
# 设置击杀任务记分板进度消息的格式。
killQuestScoreboardProgressionMessage: '&c➤击杀 $name:$color$current&0/$color$target'
# 设置收集任务记分板进度消息的格式。
fetchQuestScoreboardProgressionMessage: '&c➤获取 $name:$color$current&0/$color$target'
# 设置对话任务记分板进度消息的格式。
dialogQuestScoreboardProgressionMessage: '&c➤与 $name 对话:$color$current&0/$color$target'
questEntityTypes:
- BLAZE
- CAVE_SPIDER
- DROWNED
- ELDER_GUARDIAN
- ENDERMAN
- ENDERMITE
- EVOKER
- GHAST
- GUARDIAN
- HUSK
- ILLUSIONER
- IRON_GOLEM
- PILLAGER
- RAVAGER
- SILVERFISH
- SKELETON
- SPIDER
- STRAY
- VINDICATOR
- WITCH
- WITHER_SKELETON
- WOLF
- ZOMBIE
- HOGLIN
- ZOGLIN
- PIGLIN_BRUTE
- PIGLIN
- ZOMBIFIED_PIGLIN
# 设置激活任务跟踪时发送给玩家的消息。
chatTrackMessage: '&8[EliteMobs]&2 点击此处跟踪你的任务！'
# 设置任务跟踪消息的悬停消息。
chatTrackHover: '&2点击跟踪！'
# 设置点击跟踪消息时发送的命令。 你真的不应该修改它。
chatTrackCommand: /elitemobs quest track $questID
# 设置激活任务跟踪时发送给玩家的消息。
chatTrackingMessage: '&8[EliteMobs]&9 你现在正在跟踪一个任务！'
# 设置启用任务跟踪的消息的悬停消息。
chatTrackingHover: '&2点击取消/跟踪！ /em -> 任务以跟踪不同的任务！'
# 设置点击任务跟踪激活消息时发送的命令。 你真的不应该修改它。
chatTrackingCommand: /elitemobs quest track $questID
# 设置在接受任务时是否自动跟踪任务。
autoTrackQuestsOnAccept: true
# 设置在找不到任务目的地时显示的消息。
noQuestDestinationFound: '[EM] 找不到任务目的地！'
# 设置任务目标位于不同世界时显示的消息。
questDestinationInOtherWorld: '[EM] 前往世界 $world！'
# 设置当玩家尝试接受他们已经完成的任务时发送的消息。
questAlreadyCompletedMessage: '&8[EliteMobs] &c你已经完成了这个任务！'
# 设置当玩家尝试接受他们没有权限的任务时发送的消息。
questPrerequisitesMissingMessage: '&8[EliteMobs] &c这个 NPC 有一些你目前无法接受的任务！'
# 设置当玩家尝试获取他们没有激活正确公会等级的任务时发送的消息。
lowRankDynamicQuestWarning: '&8[EliteMobs] &c以你当前的公会等级，你不能接受这些任务！ 提升你的公会等级以接受这些任务。'
# 设置任务交付消息的格式。
questTurnInObjective: '&a2与 $npcName 对话'
# 设置任务的基于物品栏的菜单在换行之前的最大字符数。
horizontalCharacterLimitBedrockMenu: 30
# 设置任务的基于物品栏的菜单中每个物品条目在创建另一个物品以继续该条目之前的最大字符数。
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` 包含与 EliteMobs 资源包相关的设置。

<details>

<summary><b>展开表格</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] 强烈建议使用资源包！'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` 包含定义在执行某些 EliteMobs 交互时应播放哪些声音的设置。 声音文件存储在资源包中。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置打开宝箱时播放的声音
treasureChestOpenSound: elitemobs:treasure_chest.open
# 设置玩家在公会升级时播放的声音
guildRankUpSound: elitemobs:guild.rankup
# 设置玩家在公会获得声望时播放的声音
guildPrestigeSound: elitemobs:guild.prestige
# 设置玩家完成任务目标时播放的声音
questProgressionSound: elitemobs:quest.progression
# 设置玩家完成任务时播放的声音
questCompleteSound: elitemobs:quest.completion
# 设置玩家放弃任务时播放的声音
questAbandonSound: elitemobs:quest.abandon
# 设置玩家接受任务时播放的声音
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` 包含 EliteMobs 虫洞传送的设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置为未安装的地下城使用传送时出现的消息。
dungeonNotInstalledMessage: '&8[EliteMobs] &c地下城 $dungeonID &c未安装！ 此传送将不起作用。'
# 设置为未安装的地下城使用虫洞时出现的消息。
defaultPortalMissingMessage: '&8[EliteMobs] &c此传送门似乎没有通往任何地方！'
# 设置是否为虫洞使用减少粒子模式。 如果您允许基岩版客户端进入，则特别建议这样做。
reducedParticlesMode: true
# 设置虫洞是否根本不使用粒子。 不推荐，但对于非常糟糕的基岩版客户端可能是必要的。
noParticlesMode: false
# 设置当玩家尝试使用虫洞但没有足够的货币使用它时发送的消息。
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &c货币不足！ 你需要 $amount 才能使用此虫洞！'
```

</details>


