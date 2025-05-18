好的，我将把输入的文本翻译成简体中文，并保留 Markdown 格式。

```markdown
# EliteMobs 配置默认值

**EliteMobs 默认安装了推荐的默认设置。如果您随意更改设置，很可能只会让整体体验变差。**

_**EliteMobs 为所有用户提供了推荐的默认设置。如果您随意更改设置然后请求支持，很可能您会被告知重置您的配置文件。对插件的修改应该基于实际测试，而不是随意猜测。**_

## 入门

由于对自定义的需求很高，EliteMobs 目前提供了大量的配置选项。为了保持本维基页面的简洁，此处仅显示默认配置。

如果您想了解更多关于特定设置的信息，可以查阅配置文件并查看其中的注释。

---

## config.yml

`config.yml` 包含大部分在创建时无法方便地放入其他位置的随机设置。它是版本之间最有可能发生更改的配置文件。

<div align="left">

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置 EliteMobs 使用的语言文件
# 请勿手动更改此项！它应该通过命令 '/em language <languagefile>' 安装
language: english
# 设置 EliteMobs 生成的精英怪和 Boss 是否总是显示其名称标签。
# 不推荐！
alwaysShowEliteMobNameTags: false
# 设置需要靠近多少被动生物才能将其合并。
# 不要将其设置为 0！
superMobStackAmount: 50
# 使精英怪的爆炸不会伤害被动生物。
preventEliteCreeperDamageToPassiveMobs: true
# 设置 EliteMobs 是否使用标题来警告玩家缺少权限
useTitlesForMissingPermissionMessages: true
# 设置 EliteMobs 是否阻止将命名生物转换为精英怪。
# 对于与其他插件的兼容性尤为重要。
preventEliteMobConversionOfNamedMobs: true
# 设置 EliteMobs 是否转换具有自定义生成原因的生物。
# 运行某些 Boss 插件会自动将此项设置为 true，无论配置文件中的值是什么。
enableHighCompatibilityMode: false
# 设置噩梦游戏模式下的精英怪生成奖励
nightmareWorldSpawnBonus: 0.5
# 设置集中式的 /em 命令是否打开插件的主状态页面。
# 强烈推荐！
emLeadsToStatusMenu: true
# 设置运行特定命令（如 /em wallet）是否会引导至集中显示该信息的 /em 菜单。
otherCommandsLeadToEMStatusMenu: true
# 设置安装是否完成。
# 请勿手动设置此值，它应该通过游戏内命令修改。
setupDoneV3: true
# 设置精英怪是否阻止生成原版增援，例如僵尸增援功能。
preventVanillaReinforcementsForEliteEntities: true
# 设置 EliteMobs 的服务器默认生成位置。/em spawntp 将引导至此位置。
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# 设置 EliteMobs 是否会再生被精英怪炸毁的方块。
doExplosionRegen: true
# 设置爆炸再生是否也会再生容器（如箱子）的内容。
# 将其设置为 false 将使精英怪的爆炸不会炸毁容器。
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# 设置 /em 菜单是否仅使用与基岩版兼容的基于物品栏的菜单样式。
# 提醒一下，玩家也可以使用命令 /em alt 在 /em 菜单样式之间切换
onlyUseBedrockMenus: false
# 设置书本菜单页面每行的字符限制。
# 如果书本菜单（例如任务菜单）中的文本被截断，请降低此数值
characterLimitForBookMenuPagesV2: 170
# 设置是否用玻璃板填充菜单的空白区域。
# 如果您正在使用 EliteMobs 资源包，则不推荐。
useGlassToFillMenuEmptySpace: false
# 设置是否使用 Unicode 格式化 EliteMobs 资源包。
# 请勿手动设置此项，它在安装资源包时自动设置。
# 仅在您必须合并 EliteMobs 资源包时手动设置此项，并且请注意这样做可能会导致间距不正常。
menuUnicodeFormatting: false
# 设置玩家运行 '/em confirm' 但没有待处理命令时发送的消息。
noPendingCommands: '&c您当前没有待处理的命令！'
# 设置发送追踪消息的 Boss 的追踪消息。
trackMessage: 追踪 $name
# 设置玩家打开宝箱时，如果等级要求高于其公会等级，则发送的消息。
chestLowRankMessage: '&7[EM] &c您的公会等级需要至少达到 $rank &c才能打开此宝箱！'
# 设置玩家尝试重新打开已打开的宝箱时发送的消息。
chestCooldownMessage: '&7[EM] &c您最近已经打开过此宝箱了！请等待 $time！'
# 设置当玩家使用 /em 命令遇到问题时，推荐使用 /em alt 命令的消息。
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &f菜单对您不起作用？尝试 &2/elitemobs
  alt &f查看另一种菜单版本！&c不想再看到此消息？&4/em dismiss'
# 设置玩家运行 /em alt 命令时显示的消息。
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &f菜单样式已更改！快去看看吧！'
# 设置玩家打开宝箱但未获得任何物品时显示的消息。
treasureChestNoDropMessage: '&8[EliteMobs] &c您什么都没得到！下次好运！'
# 设置玩家尝试追踪已失效的 Boss 时显示的消息。
bossAlreadyGoneMessage: '&c[EliteMobs] 抱歉，这个 Boss 已经离开了！'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` 包含与冒险者公会中心（世界）以及冒险者公会升级系统相关的配置设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置 EliteMobs 在解锁公会等级作为声望奖励时是否增加最大生命值
Add max health when unlocking higher guild ranks: true
# 设置 EliteMobs 在解锁公会等级作为声望奖励时是否增加暴击几率
Add critical chance when unlocking higher guild ranks: true
# 设置 EliteMobs 在解锁公会等级作为声望奖励时是否增加闪避几率
Add dodge chance when unlocking higher guild ranks: true
# 设置用户命令是否重定向到冒险者公会中心。这对于游戏沉浸感和教程目的强烈推荐。
userCommandsTeleportToAdventurersGuild: true
# 设置冒险者公会的游戏内显示名称。
adventurersGuildMenuName: '&6&lAdventurer''s Hub'
Prestige 0 rank 0: '&8Commoner - disables elites!'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# 设置玩家掉落物是否受其公会等级限制。
# 这是 EliteMobs 中极其重要且强烈推荐的部分。
limitLootBasedOnGuildTier: true
# 设置玩家因公会等级低而导致掉落物被削弱时发送的消息。
lootLimiterMessage: '&7[EM] &c您必须通过 /ag 解锁下一个公会等级才能获得更好的物品！'
# 设置公会等级提升时运行的命令。占位符有：
# $prestigerank - 输出声望等级
# $activerank - 输出当前活跃等级
# $player - 输出玩家名称
onRankUpCommand: []
# 设置声望等级提升时运行的命令。
# $prestigerank - 输出声望等级
# $activerank - 输出当前活跃等级
# $player - 输出玩家名称
onPrestigeUpCommand: []
# 设置第一次闪避奖励的声望等级。
dodgePrestige3Bonus: 3.0
# 设置第二次闪避奖励的声望等级。
dodgePrestige6Bonus: 6.0
# 设置第三次闪避奖励的声望等级。
dodgePrestige9Bonus: 10.0
# 设置第一次暴击奖励的声望等级。
critPrestige2Bonus: 3.0
# 设置第二次暴击奖励的声望等级。
critPrestige5Bonus: 6.0
# 设置第三次暴击奖励的声望等级。
critPrestige8Bonus: 10.0
# 设置第一次最大生命值奖励的声望等级。
healthPrestige1Bonus: 2.0
# 设置第二次最大生命值奖励的声望等级。
healthPrestige4Bonus: 2.5
# 设置第三次最大生命值奖励的声望等级。
healthPrestige7Bonus: 3.0
# 设置第四次最大生命值奖励的声望等级。
healthPrestige10Bonus: 4.0
# 设置升级所需击杀 Boss 的估计基础数量。
baseKillsForRankUp: 100
# 设置每升一级所需额外击杀 Boss 的估计数量。
# 公式是此数量 x 玩家当前等级。
additionalKillsForRankUpPerTier: 50
# 设置当有人解锁声望等级时发送给玩家的标题。
# $player 是一个占位符，将被玩家的显示名称替换。
prestigeUnlockMessageTitle: $player
# 设置当有人解锁声望等级时发送给玩家的副标题。
# $tier 是一个占位符，将被玩家的声望等级替换。
prestigeUnlockMessageSubtitle: '&2已解锁 $tier&2！'
# 设置玩家使用和平（普通人）等级时应用于生成几率的乘数。
peacefulModeEliteChanceDecrease: 0.2
# 设置不应用公会等级奖励的世界列表
worldsWithoutAGBonuses: []
# 禁用用户切换到 EliteMobs 和平模式的能力。和平模式会专门降低该玩家周围生物的等级和生成率
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` 允许管理员自定义反作弊系统的不同方面。反作弊系统的存在是为了防止玩家使用刷怪塔等方式轻松刷取金币和掉落物，并促使他们进行真实的战斗和迷你地下城，而不是通过挂机点击来达到插件的顶端。

如果您不希望玩家只是挂机刷遍整个插件，而是希望他们真正与迷你地下城互动，那么这是一个必须开启的关键系统。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置触发反作弊时显示的消息。
AntiExploit message: '&c[EM 反作弊] &7附近的精英怪不会掉落特殊战利品。'
# 设置是否启用暗室反作弊 1。
# 特定的反作弊功能故意未文档化。服务器操作员可以看到触发了哪种反作弊类型，但不会提供其具体工作原理的进一步信息。
Enable darkroom antiexploit 1: true
# 设置是否启用暗室反作弊 2。
# 特定的反作弊功能故意未文档化。服务器操作员可以看到触发了哪种反作弊类型，但不会提供其具体工作原理的进一步信息。
Enable darkroom antiexploit 2: true
# 设置是否启用暗室反作弊 3。
# 特定的反作弊功能故意未文档化。服务器操作员可以看到触发了哪种反作弊类型，但不会提供其具体工作原理的进一步信息。
Enable darkroom antiexploit 3: true
# 设置是否启用大型暗室反作弊 1。
# 特定的反作弊功能故意未文档化。服务器操作员可以看到触发了哪种反作弊类型，但不会提供其具体工作原理的进一步信息。
Enable large darkroom antiexploit 1: true
# 设置是否启用末影人高度反作弊。
# 特定的反作弊功能故意未文档化。服务器操作员可以看到触发了哪种反作弊类型，但不会提供其具体工作原理的进一步信息。
Enable enderman height antiexploit: true
# 设置是否启用坐骑反作弊。
# 特定的反作弊功能故意未文档化。服务器操作员可以看到触发了哪种反作弊类型，但不会提供其具体工作原理的进一步信息。
Enable mount antiexploit: true
# 设置精英怪是否可以捡起物品
preventItemPickupByMobs: true
# 设置是否启用环境伤害反作弊。
# 特定的反作弊功能故意未文档化。服务器操作员可以看到触发了哪种反作弊类型，但不会提供其具体工作原理的进一步信息。
Enable ambient damage antiexploit: true
# 设置是否启用蜂蜜块反作弊。
# 特定的反作弊功能故意未文档化。服务器操作员可以看到触发了哪种反作弊类型，但不会提供其具体工作原理的进一步信息。
Enable honey block antiexploit: true
# 设置反作弊激活阈值。值越高，容忍度越高。不建议修改此项。
antiExploitThreshold: 10
# 设置是否启用无路径反作弊
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` 包含战斗标签系统的配置设置。此系统远未完成，但它试图在玩家进入战斗后管理其行为。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否启用战斗标签。
# 启用后，进入战斗的飞行玩家将被强制停止飞行。
Enable combat tag: true
# 设置战斗标签激活时发送的消息。
Combat tag message: '&c[EliteMobs] 战斗标签已激活！'
# 设置 /ag 命令在传送前是否会有计时器
Enable adventurers guild teleport timer: true
# 设置等待传送计时器时显示的动作栏消息。
Teleport time left: '&7[EM] 正在传送，剩余 &a$time &7秒...'
# 设置玩家在等待传送时移动时发送的消息。
Teleport cancelled: '&7[EM] &c传送已中断！'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` 包含 DiscordSRV 的配置设置。如果您想了解如何配置此功能，请[点击此处！](simplifiedchinese/elitemobs/discordsrv.md)

<details>

<summary><b>展开表格</b></summary>

```yml
# 文档可以在这里找到：https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: YOU_NEED_TO_PUT_THE_NAME_OF_THE_DISCORD_ROOM_YOU_WANT_ELITEMOBS_ANNOUNCEMENTS_TO_BE_BROADCASTED_IN_AS_YOU_HAVE_IN_YOUR_DISCORDSRV_CONFIGURATION_FILE_CHECK_ELITEMOBS_WIKI_FOR_DETAILS

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` 包含 EliteMobs 经济系统的配置设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否启用 EliteMobs 经济系统。这意味着精英币、购买和出售装备的能力以及升级公会等级的能力
# 如果禁用，玩家将无法在插件中取得进展！
enableEconomy: true
# 设置物品的转售价值，以原价的百分比表示。5 表示 5%
itemResaleValue: 5.0
# 设置所用货币的游戏内名称。
currencyName: Elite Coins
# 设置插件使用 Vault。强烈不推荐！在此处阅读原因：https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# 设置精英怪是否根据其等级掉落金币。
enableCurrencyShower: true
# 设置精英怪掉落货币的乘数。
currencyShowerTierMultiplier: 1.0
# 设置玩家捡起精英货币时发送的消息。
chatCurrencyShowerMessage: '&7[EM] 您捡起了 &a$amount $currency_name！'
# 设置玩家捡起精英货币时发送的动作栏消息。
actionbarCurrencyShowerMessage: '&7[EM] 您捡起了 &a$amount $currency_name！'
# 发送玩家拾取货币后收到的消息。对于教程目的很有用。
adventurersGuildNotificationMessages: '&7[EM] 有额外的零花钱？试试 &a/ag !'
# 设置玩家之间交易的税率。
# 强烈推荐用于平衡目的，因为高级玩家可以获得高达 6 倍的货币，并试图利用其他玩家绕过声望货币重置。
playerToPlayerPaymentTaxes: 0.2
# 向其他玩家发送精英货币时发送的消息。
Economy pay message v2: '&2您已向 $receiver&2 支付了 &2$amount_sent $currency_name&2，
  扣除税费后对方收到了 $amount_received！'
# 玩家发送货币后发送的消息。
Economy currency left message: 您现在拥有 &2$amount_left $currency_name
# 收到货币时接收的消息。
Economy money from payment message: 您从 $sender 处收到了 &2$amount_received $currency_name
  &f
# 玩家尝试发送其不拥有的金币数量时发送的消息。
Economy payment insufficient currency: '&c您的 $currency_name 不足！'
# /em balance 消息
Wallet command message: 您拥有 &2$balance $currency_name
# 玩家尝试向另一名玩家发送货币时发送的确认消息。
Tax confirmation message: '&c发送付款将产生 $percentage% 的税费。&a执行
  &9$command &a继续！'
# 玩家从商店购买时发送的消息。
Shop buy message: '&a您以 $item_value $currency_name 购买了 $item_name！'
# 玩家与商店互动时发送的消息。
Shop current balance message: '&a您拥有 $currency_amount $currency_name。'
# 玩家没有足够货币购买物品时发送的消息
Shop insufficient funds message: '&c您的 $currency_name 不足！'
# 玩家尝试购买其无法负担的物品时发送的消息的第二部分。
Shop item cost message: 该物品需要 &c$item_value $currency_name。
# 向商店出售物品时发送的消息。
Shop sell message: '&a您以 $currency_amount $currency_name 出售了 $item_name！'
# 尝试出售不属于该玩家的物品时发送的消息。
Shop sale player items warning: '&c您不能出售当前未与您灵魂绑定的物品！这包括来自其他声望等级的物品！'
# 尝试出售非 EliteMobs 物品时发送的消息
Shop sale instructions: '&c您只能在此处出售 EliteMobs 掉落物！（精英怪掉落的、其说明中显示价值的盔甲/武器）'
# 出售一批精英物品时发送的消息。
shopBatchSellItem: '&a您已出售您的物品，获得 &a$currency_amount $currency_name！'
lootShowerMaterial:
  # 设置掉落的 1 个精英币的物品类型。
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # 设置掉落的 1 个精英币的自定义模型 ID。由资源包使用。
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # 设置此物品在 elitemobs 货币系统中的价值。
  DIAMOND_AXE: 17.0
  # 设置此物品在 elitemobs 货币系统中的价值。
  DIAMOND_BOOTS: 17.0
  # 设置此物品在 elitemobs 货币系统中的价值。
  DIAMOND_CHESTPLATE: 17.0
  # 设置此物品在 elitemobs 货币系统中的价值。
  DIAMOND_LEGGINGS: 17.0
  # 设置此物品在 elitemobs 货币系统中的价值。
  DIAMOND_HELMET: 17.0
  # 设置此物品在 elitemobs 货币系统中的价值。
  DIAMOND_PICKAXE: 17.0
  # 设置此物品在 elitemobs 货币系统中的价值。
  DIAMOND_SHOVEL: 17.0
  # 设置此物品在 elitemobs 货币系统中的价值。
  DIAMOND_SWORD: 17.0
  # 设置此物品在 elitemobs 货币系统中的价值。
  DIAMOND_HOE: 17.0
  # 设置此物品在 elitemobs 货币系统中的价值。
  IRON_AXE: 16.0
```

</details>
```Please specify the language you would like the text translated into. I will then translate it while retaining the markdown formatting.Please specify the language you would like the text translated into. I will translate it while retaining all the markdown formatting.Please specify the language you would like me to translate the text into.