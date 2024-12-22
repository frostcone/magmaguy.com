# EliteMobs 配置默认值

**EliteMobs 默认安装推荐的默认设置。如果您随意更改设置，很可能会使整体体验更糟。**

_**所有用户都使用推荐的默认设置来提供 EliteMobs。如果您随意更改设置然后请求支持，则您很可能会被告知重置您的配置文件。对插件的修改应该基于游戏测试，而不是仅仅是猜测。
**_

## 入门

由于对自定义的高度需求，EliteMobs 目前提供了大量的配置选项。为了使本维基页面简洁，只会显示默认配置。

如果您想了解有关特定设置的更多信息，可以参考配置文件并查看注释。

---

## config.yml

`config.yml` 主要包含一些随机设置，在创建时无法舒适地放入其他地方。它是版本之间最有可能发生更改的配置文件。

<div align="left">

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置 EliteMobs 使用的语言文件
# 不要手动更改此设置！它旨在通过命令“/em language <languagefile>”安装
language: english
# 设置由 elitemobs 生成的精英和 Boss 是否始终显示他们的名称标签。
# 不建议！
alwaysShowEliteMobNameTags: false
# 设置在可以合并之前必须在附近存在的被动生物的数量。
# 不要将其设置为 0！
superMobStackAmount: 50
# 使精英的爆炸不会伤害被动生物。
preventEliteCreeperDamageToPassiveMobs: true
# 设置 EliteMobs 是否使用标题来警告玩家缺少权限
useTitlesForMissingPermissionMessages: true
# 设置 EliteMobs 是否阻止将命名的生物转换为精英。
# 对于与其他插件的兼容性尤为重要。
preventEliteMobConversionOfNamedMobs: true
# 设置 EliteMobs 是否转换具有自定义生成原因的生物。
# 运行某些 Boss 插件会自动将其设置为 true，无论配置中的值是什么。
enableHighCompatibilityMode: false
# 设置噩梦游戏模式的精英生成奖励
nightmareWorldSpawnBonus: 0.5
# 设置集中的 /em 命令是否打开插件的主状态页面。
# 强烈推荐！
emLeadsToStatusMenu: true
# 设置运行特定的命令（如 /em 钱包）是否会引导至集中该信息的 /em 菜单。
otherCommandsLeadToEMStatusMenu: true
# 设置是否完成设置。
# 不要手动设置此值，它旨在通过游戏内命令进行修改。
setupDoneV3: true
# 设置精英是否会阻止生成原版的援军，例如僵尸的援军功能。
preventVanillaReinforcementsForEliteEntities: true
# 设置 EliteMobs 服务器的默认生成位置。/em spawntp 将引导至此位置。
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# 设置 EliteMobs 是否会重新生成精英炸毁的方块。
doExplosionRegen: true
# 设置爆炸再生是否也会再生容器（例如箱子）的内容。
# 将其设置为 false 将使精英爆炸不会炸毁容器。
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# 设置 /em 菜单是否仅使用与基岩版兼容的基于物品栏的菜单样式。
# 作为提醒，玩家也可以执行命令 /em alt 在 /em 菜单样式之间切换
onlyUseBedrockMenus: false
# 设置书本菜单页面每行的字符限制。
# 如果文本在书本菜单中（例如任务）被截断，请降低此数量
characterLimitForBookMenuPagesV2: 170
# 设置是否用玻璃板填充空菜单空间。
# 如果您正在使用 EliteMobs 资源包，则不建议使用。
useGlassToFillMenuEmptySpace: false
# 设置是否使用 Unicode 格式化 EliteMobs 资源包。
# 不要手动设置此值，它会在安装资源包后自动设置。
# 仅当您必须合并 EliteMobs 资源包时才手动设置，并且预计如果您这样做，间距可能无法正常工作。
menuUnicodeFormatting: false
# 设置当玩家运行“/em confirm”时没有待处理的命令时发送给玩家的消息。
noPendingCommands: '&c您当前没有任何待处理的命令！'
# 设置发送跟踪消息的 Boss 的跟踪消息。
trackMessage: 跟踪 $name
# 设置发送给打开宝箱的玩家的消息，该宝箱的等级要求高于其公会等级。
chestLowRankMessage: '&7[EM] &c您的公会等级必须至少为 $rank &c才能打开此宝箱！'
# 设置发送给尝试重新打开他们已经打开过的宝箱的玩家的消息。
chestCooldownMessage: '&7[EM] &c您最近已经打开过这个宝箱了！请等待 $time！'
# 设置出现的消息，建议 /em alt 命令给遇到 /em 命令问题的玩家
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &f菜单对您不起作用？尝试 &2/elitemobs alt &f查看菜单的替代版本！&c不想再次看到此消息？&4/em dismiss'
# 设置当玩家运行 /em alt 命令时出现的消息。
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &f菜单样式已更改！来看看！'
# 设置当玩家打开宝箱但什么也没得到时出现的消息
treasureChestNoDropMessage: '&8[EliteMobs] &c您什么也没得到！下次运气更好！'
# 设置当玩家尝试跟踪一个不再有效的 Boss 时出现的消息
bossAlreadyGoneMessage: '&c[EliteMobs] 对不起，这个 Boss 已经消失了！'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` 包含与冒险者公会中心（世界）相关的配置设置，以及与冒险者公会升级系统相关的设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置 EliteMobs 在解锁公会等级作为声望奖励时是否增加最大生命值
Add max health when unlocking higher guild ranks: true
# 设置 EliteMobs 在解锁公会等级作为声望奖励时是否增加暴击几率
Add critical chance when unlocking higher guild ranks: true
# 设置 EliteMobs 在解锁公会等级作为声望奖励时是否增加闪避几率
Add dodge chance when unlocking higher guild ranks: true
# 设置用户命令是否会被重新路由到冒险者公会中心。强烈推荐用于游戏沉浸式体验和教程目的。
userCommandsTeleportToAdventurersGuild: true
# 设置冒险者公会在游戏中的显示名称
adventurersGuildMenuName: '&6&l冒险者中心'
Prestige 0 rank 0: '&8平民 - 禁用精英！'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# 设置玩家战利品是否受其公会等级限制。
# 这是 EliteMobs 的一个非常重要的部分，并且强烈推荐。
limitLootBasedOnGuildTier: true
# 设置如果玩家的战利品因其公会等级较低而被削弱时发送给玩家的消息。
lootLimiterMessage: '&7[EM] &c您必须通过 /ag 解锁下一个公会等级才能获得更好的物品！'
# 设置在公会等级提升时运行的命令。占位符为：
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
# 设置第三次最大生命值奖励的声望等级。
healthPrestige10Bonus: 4.0
# 设置估计的必须击杀的 Boss 基本数量，才能负担得起升级。
baseKillsForRankUp: 100
# 设置估计的必须击杀的额外 Boss 数量，才能升级，每个等级。
# 公式为该数量 x 玩家当前所在的等级。
additionalKillsForRankUpPerTier: 50
# 设置当有人解锁声望等级时发送给玩家的标题。
# $player 是一个占位符，将被替换为玩家的显示名称。
prestigeUnlockMessageTitle: $player
# 设置当有人解锁声望等级时发送给玩家的副标题。
# $tier 是一个占位符，将被替换为玩家的声望等级。
prestigeUnlockMessageSubtitle: '&2已解锁 $tier&2！'
# 设置当玩家使用和平（平民）等级时，将应用于生成几率的乘数。
peacefulModeEliteChanceDecrease: 0.2
# 设置不应用公会等级奖励的世界列表
worldsWithoutAGBonuses: []
# 禁用用户切换到 EliteMobs 的和平模式的能力。和平模式会降低该玩家周围生物的等级和生成率
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` 允许管理员自定义反利用系统的不同方面。反利用系统的存在是为了防止玩家使用诸如怪物研磨机之类的东西来轻松地养殖金币和战利品，并促使他们进行真正的战斗和迷你地下城，而不是通过挂机点击来达到插件的顶部。

如果您不希望人们只是挂机研磨整个插件，并且希望他们真正与迷你地下城互动，那么保持此系统开启至关重要。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置当反利用被触发时显示的消息。
AntiExploit message: '&c[EM 反利用] &7附近的精英不会掉落特殊战利品。'
# 设置是否启用暗室反利用 1。
# 具体反利用功能没有被有意记录。服务器操作员可以看到触发了哪种反利用类型，但有关其具体工作原理的更多信息不可用。
Enable darkroom antiexploit 1: true
# 设置是否启用暗室反利用 2。
# 具体反利用功能没有被有意记录。服务器操作员可以看到触发了哪种反利用类型，但有关其具体工作原理的更多信息不可用。
Enable darkroom antiexploit 2: true
# 设置是否启用暗室反利用 3。
# 具体反利用功能没有被有意记录。服务器操作员可以看到触发了哪种反利用类型，但有关其具体工作原理的更多信息不可用。
Enable darkroom antiexploit 3: true
# 设置是否启用大型暗室反利用 1。
# 具体反利用功能没有被有意记录。服务器操作员可以看到触发了哪种反利用类型，但有关其具体工作原理的更多信息不可用。
Enable large darkroom antiexploit 1: true
# 设置是否启用末影人高度反利用。
# 具体反利用功能没有被有意记录。服务器操作员可以看到触发了哪种反利用类型，但有关其具体工作原理的更多信息不可用。
Enable enderman height antiexploit: true
# 设置是否启用坐骑反利用。
# 具体反利用功能没有被有意记录。服务器操作员可以看到触发了哪种反利用类型，但有关其具体工作原理的更多信息不可用。
Enable mount antiexploit: true
# 设置精英生物是否可以捡起物品
preventItemPickupByMobs: true
# 设置是否启用环境伤害反利用。
# 具体反利用功能没有被有意记录。服务器操作员可以看到触发了哪种反利用类型，但有关其具体工作原理的更多信息不可用。
Enable ambient damage antiexploit: true
# 设置是否启用蜜块反利用。
# 具体反利用功能没有被有意记录。服务器操作员可以看到触发了哪种反利用类型，但有关其具体工作原理的更多信息不可用。
Enable honey block antiexploit: true
# 设置反利用激活的阈值。更高的值使其更容忍。不建议修改此值。
antiExploitThreshold: 10
# 设置是否启用无路径反利用
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` 包含战斗标签系统的配置设置。此系统仍远未完成，但它尝试管理玩家进入战斗后的行为。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否启用战斗标签。
# 启用后，参与战斗的飞行玩家将设置为停止飞行。
Enable combat tag: true
# 设置在战斗标签激活时发送的消息。
Combat tag message: '&c[EliteMobs] 战斗标签已激活！'
# 设置 /ag 命令在传送前是否有计时器
Enable adventurers guild teleport timer: true
# 设置等待传送计时器时的操作消息。
Teleport time left: '&7[EM] 将在 &a$time &7秒后传送...'
# 设置在等待传送时移动的玩家发送的消息。
Teleport cancelled: '&7[EM] &c传送已中断！'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` 包含 DiscordSRV 的配置设置。如果您想了解如何配置此功能，[请点击这里！]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>展开表格</b></summary>

```yml
# 文档可以在这里找到：https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: 您需要在此处填写您在 DISCORDSRV 配置文件中设置的用于 ELITEMOBS 公告的 DISCORD 房间名称。请查看 ELITEMOBS 维基以获取详细信息。
```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` 包含 EliteMobs 经济的配置设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否启用 EliteMobs 经济。这意味着精英硬币，购买和出售装备的能力以及升级公会等级的能力
# 如果禁用，玩家将无法在插件中取得进展！
enableEconomy: true
# 设置物品的转售价值，为原价的 %。5 为 5%
itemResaleValue: 5.0
# 设置所用货币的游戏内名称。
currencyName: 精英硬币
# 设置使用 Vault 的插件。不推荐！请在此处阅读原因：https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# 设置精英是否会根据其等级掉落硬币。
enableCurrencyShower: true
# 设置精英掉落货币的乘数。
currencyShowerTierMultiplier: 1.0
# 设置当玩家捡起精英货币时发送的消息。
chatCurrencyShowerMessage: '&7[EM] 您捡起了 &a$amount $currency_name！'
# 设置当玩家捡起精英货币时发送的操作栏消息。
actionbarCurrencyShowerMessage: '&7[EM] 您捡起了 &a$amount $currency_name！'
# 发送玩家在掠夺货币后获得的消息。对教程目的很有用。
adventurersGuildNotificationMessages: '&7[EM] 有额外的零花钱？试试 &a/ag ！'
# 设置玩家之间交易的税率。
# 强烈建议为了平衡性考虑，因为高等级玩家可以获得高达 6 倍的货币，并尝试使用其他玩家来绕过声望货币重置。
playerToPlayerPaymentTaxes: 0.2
# 当将精英货币发送给其他玩家时发送的消息。
Economy pay message v2: '&2您已向 $receiver&2 支付了 &2$amount_sent $currency_name&2，
  他在税后得到了 $amount_received！'
# 在玩家发送货币后发送的消息。
Economy currency left message: 您现在有 &2$amount_left $currency_name
# 在接收货币时收到的消息。
Economy money from payment message: 您从 $sender 获得了 &2$amount_received $currency_name
# 设置当玩家尝试发送他们没有的硬币数量时发送的消息。
Economy payment insufficient currency: '&c您没有足够的 $currency_name 来执行此操作！'
# /em 余额消息
Wallet command message: 您有 &2$balance $currency_name
# 当玩家尝试向另一个玩家发送货币时发送的确认消息。
Tax confirmation message: '&c发送付款将产生 $percentage% 的税费。&a执行 &9$command &a继续！'
# 当玩家从商店购买时发送的消息。
Shop buy message: '&a您已购买了 $item_name &a，价格为 $item_value $currency_name！'
# 当玩家与商店互动时发送的消息。
Shop current balance message: '&a您有 $currency_amount $currency_name。'
# 当玩家没有足够的货币购买物品时发送的消息
Shop insufficient funds message: '&c您没有足够的 $currency_name！'
# 当玩家尝试购买他们负担不起的物品时发送的消息的第二部分。
Shop item cost message: 该物品的价格为 &c$item_value $currency_name。
# 在将物品出售给商店时发送的消息。
Shop sell message: '&a您已出售了 $item_name &a，价格为 $currency_amount $currency_name！'
# 设置当尝试出售不属于该玩家的物品时发送的消息。
Shop sale player items warning: '&c您不能出售当前不绑定到您的物品！这包括来自其他声望等级的物品！'
# 当尝试出售非 EliteMobs 物品时发送的消息
Shop sale instructions: '&c您只能在此处出售 EliteMobs 战利品！（从精英掉落的盔甲/武器，其描述上显示价值）'
# 设置当出售一批精英物品时发送的消息。
shopBatchSellItem: '&a您已出售物品 &a，价格为 $currency_amount $currency_name！'
lootShowerMaterial:
  # 设置 1 枚掉落的精英硬币的材料类型。
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # 设置 1 枚掉落的精英硬币的自定义模型 ID。资源包使用。
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # 设置该材料对 elitemobs 货币系统的价值。
  DIAMOND_AXE: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  DIAMOND_BOOTS: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  DIAMOND_CHESTPLATE: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  DIAMOND_LEGGINGS: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  DIAMOND_HELMET: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  DIAMOND_PICKAXE: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  DIAMOND_SHOVEL: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  DIAMOND_SWORD: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  DIAMOND_HOE: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  IRON_AXE: 16.0
  # 设置该材料对 elitemobs 货币系统的价值。
  IRON_BOOTS: 16.0
  # 设置该材料对 elitemobs 货币系统的价值。
  IRON_LEGGINGS: 16.0
  # 设置该材料对 elitemobs 货币系统的价值。
  IRON_CHESTPLATE: 16.0
  # 设置该材料对 elitemobs 货币系统的价值。
  IRON_HELMET: 16.0
```

</details>
```yml
# 设置该材料对 elitemobs 货币系统的价值。
  IRON_PICKAXE: 16.0
  # 设置该材料对 elitemobs 货币系统的价值。
  IRON_SHOVEL: 16.0
  # 设置该材料对 elitemobs 货币系统的价值。
  IRON_HOE: 16.0
  # 设置该材料对 elitemobs 货币系统的价值。
  IRON_SWORD: 16.0
  # 设置该材料对 elitemobs 货币系统的价值。
  SHIELD: 16.0
  # 设置该材料对 elitemobs 货币系统的价值。
  BOW: 16.0
  # 设置该材料对 elitemobs 货币系统的价值。
  CHAINMAIL_BOOTS: 15.0
  # 设置该材料对 elitemobs 货币系统的价值。
  CHAINMAIL_LEGGINGS: 15.0
  # 设置该材料对 elitemobs 货币系统的价值。
  CHAINMAIL_CHESTPLATE: 15.0
  # 设置该材料对 elitemobs 货币系统的价值。
  CHAINMAIL_HELMET: 15.0
  # 设置该材料对 elitemobs 货币系统的价值。
  STONE_SWORD: 15.0
  # 设置该材料对 elitemobs 货币系统的价值。
  STONE_AXE: 15.0
  # 设置该材料对 elitemobs 货币系统的价值。
  STONE_PICKAXE: 15.0
  # 设置该材料对 elitemobs 货币系统的价值。
  STONE_SHOVEL: 15.0
  # 设置该材料对 elitemobs 货币系统的价值。
  STONE_HOE: 15.0
  # 设置该材料对 elitemobs 货币系统的价值。
  GOLDEN_AXE: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  GOLDEN_BOOTS: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  GOLDEN_LEGGINGS: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  GOLDEN_CHESTPLATE: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  GOLDEN_HELMET: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  GOLDEN_SWORD: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  GOLDEN_SHOVEL: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  GOLDEN_PICKAXE: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  GOLDEN_HOE: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  GOLDEN_APPLE: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  ENCHANTED_GOLDEN_APPLE: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  LEATHER_BOOTS: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  LEATHER_LEGGINGS: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  LEATHER_CHESTPLATE: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  LEATHER_HELMET: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  WOODEN_SWORD: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  WOODEN_AXE: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  WOODEN_HOE: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  WOODEN_PICKAXE: 13.0
   # 设置该材料对 elitemobs 货币系统的价值。
  TRIDENT: 17.0
  # 设置该材料对 elitemobs 货币系统的价值。
  ELYTRA: 17.0
   # 设置该材料对 elitemobs 货币系统的价值。
  TURTLE_HELMET: 13.0
  # 设置该材料对 elitemobs 货币系统的价值。
  NETHERITE_AXE: 18.0
  # 设置该材料对 elitemobs 货币系统的价值。
  NETHERITE_PICKAXE: 18.0
  # 设置该材料对 elitemobs 货币系统的价值。
  NETHERITE_SHOVEL: 18.0
  # 设置该材料对 elitemobs 货币系统的价值。
  NETHERITE_HOE: 18.0
  # 设置该材料对 elitemobs 货币系统的价值。
  NETHERITE_SWORD: 18.0
  # 设置该材料对 elitemobs 货币系统的价值。
  NETHERITE_HELMET: 18.0
  # 设置该材料对 elitemobs 货币系统的价值。
  NETHERITE_CHESTPLATE: 18.0
  # 设置该材料对 elitemobs 货币系统的价值。
  NETHERITE_LEGGINGS: 18.0
  # 设置该材料对 elitemobs 货币系统的价值。
  NETHERITE_BOOTS: 18.0
  # 设置未特别定义的物品的默认材料价值。
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
# 设置事件是否仅在事件发生的世界中广播。
Only broadcast event message in event worlds: false
# 设置定时事件之间的最小冷却时间（以分钟为单位）
actionEventMinimumCooldownMinutes: 240
# 设置是否会发生动作事件。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# 设置是否会发生定时事件。
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` 包含 Elite 物品的全局设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置物品描述中添加到原版附魔前的字符。
noItemDurabilityMessage: '&8[EliteMobs] $item &4坏了！在修复之前它无法工作！'
# 设置是否掉落任何 EliteMobs 战利品。
# 包括精英硬币、自定义物品、程序生成的物品 - 一切！
# 不推荐，使 mmorpg 进度变得不可能。
doEliteMobsLoot: true
# 设置程序生成的战利品是否会根据物品的质量而具有不同的颜色。
doMMORPGColorsForItems: true
# 设置是否阻止放置自定义物品，例如横幅或方块。
# 建议这样做 - 自定义物品在放置时会损坏并且无法恢复！
preventCustomItemPlacement: true
# 设置所有 EliteMobs 自定义物品的描述格式！
# 以下是有效的占位符：
# $itemLevel - 显示物品等级
# $prestigeLevel - 显示声望等级
# $weaponOrArmorStats - 显示精英 DPS 或精英护甲属性，具体取决于物品
# $soulbindInfo - 显示物品绑定给谁（如果有）
# $itemSource - 显示物品的来源，如怪物或商店
# $ifLore - 仅当物品具有自定义描述时才显示一行。仅适用于自定义物品
# $customLore - 显示整个自定义描述。仅适用于自定义物品
# $ifEnchantments - 仅当物品具有任何附魔时才显示一行
# $enchantments - 显示物品上的附魔
# $eliteEnchantments - 显示物品上的精英附魔
# $ifCustomEnchantments - 显示物品上的自定义附魔
# $customEnchantments - 显示物品上的自定义附魔
# $ifPotionEffects - 仅当物品具有药水效果时才显示该行
# $potionEffects - 显示物品上的药水效果
# $loreResaleValue - 显示物品的价值。可能显示购买价格或销售价格，具体取决于查看位置
# 重要提示：可以通过以下配置设置进一步自定义几个占位符
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
# 设置商店购买的商品来源描述
shopSourceItemLores: '&7从商店购买'
# 设置从 Boss 掠夺的物品的商店来源描述
mobSourceItemLores: '&7从 $mob 掠夺'
# 设置物品价值描述
loreWorths: '&7价值 $worth $currencyName'
# 设置物品转售价值描述
loreResaleValues: '&7售价 $resale $currencyName'
# 设置任何精英物品从精英怪物掉落的基本几率
flatDropRateV3: 0.2
# 设置任何精英物品从区域 Boss 掉落的基本几率
regionalBossNonUniqueDropRate: 0.05
# 设置区域 Boss 是否可以掉落原版战利品
regionalBossesDropVanillaLoot: false
# 设置精英物品掉落的几率基于 Boss 等级的增加量。
# Boss 的等级乘以该值并添加到基本几率中。
# 不再建议将此值设置为高于 0.0！
levelIncreaseDropRateV2: 0.0
# 设置程序生成物品掉落的加权几率。
# 此系统使用加权概率！如果您不知道那是什么，请在谷歌上搜索。
proceduralItemDropWeight: 90.0
# 设置加权物品掉落的相对几率。
# 加权物品是不具有动态权重的自定义物品，如护符。
weighedItemDropWeight: 1.0
# 设置固定物品掉落的相对几率。这些是不缩放的自定义物品。
fixedItemDropWeight: 10.0
# 设置有限物品掉落的相对几率。这些是缩放到特定等级的自定义物品
limitedItemDropWeight: 3.0
# 设置可缩放物品掉落的相对几率。这些是可以缩放到任何等级的自定义物品，并且是插件中最常见的物品。
scalableItemDropWeight: 6.0
# 设置基于怪物等级的怪物原版战利品的乘数。
defaultLootMultiplier: 0.0
# 设置默认战利品乘数的最高等级。
levelCapForDefaultLootMultiplier: 200
# 设置基于 Boss 等级的 Boss 掉落的原版 Minecraft 经验值乘数。
defaultExperienceMultiplier: 1.0
# 设置 EliteMobs 将掉落的最高战利品等级。强烈建议保持为 200。
maximumItemLevel: 200
# 设置是否使用精英附魔。
# 当精英物品获得超出原版限制的附魔等级时，精英附魔将替换原版附魔。
# 例如：如果一把精英剑应该具有锋利 10，由于 Minecraft 的限制为 5 级，则它将具有锋利 5 和精英锋利 5。
# 精英锋利度仅影响 EliteMobs 生成的怪物。这样做是为了 PVP 和原版战斗不会变得不平衡。
useEliteEnchantments: true
# 设置在物品描述中用于精英附魔的显示名称。
eliteEnchantmentLoreStrings: 精英
# 设置 EliteMobs 是否将锄头视为计算伤害的有效武器。
useHoesAsWeapons: false
# 设置 EliteMobs 是否在掉落的高质量物品上生成特殊粒子。
enableRareItemParticleEffects: true
# 设置将在物品描述中使用的符号，以显示药水效果对被击中的实体生效。
potionEffectOnHitTargetLore: '&4⚔☠'
# 设置将在物品描述中使用的符号，以显示药水效果对击中的玩家生效。
potionEffectOnHitSelfLore: '&9⚔🛡'
# 设置将在物品描述中使用的符号，以显示药水效果将在玩家使用物品时持续重新生效。
potionEffectContinuousLore: '&6⟲'
# 设置物品描述中添加到精英附魔前的字符。
eliteEnchantmentLoreColor: '&9◇'
# 设置物品描述中添加到原版附魔前的字符。
vanillaEnchantmentLoreColor: '&7◇'
# 设置物品描述中添加到自定义附魔前的字符。
customEnchantmentColor: '&3◇'
# 设置物品描述中添加到药水效果前的字符。
potionEffectLoreColor: '&5◇'
# 设置如果物品未灵魂绑定，将在物品上显示的文本。
noSoulbindLore: '&7未灵魂绑定！'
# 设置精英物品是否可以通过原版方式附魔。不建议这样做，因为 EliteMobs 有自己的自定义附魔系统，具有自己的平衡！
preventEliteItemEnchantment: true
# 设置精英物品是否可以通过原版方式解除附魔。
preventEliteItemDisenchantment: true
# 设置当玩家尝试解除不允许解除附魔的物品的附魔时显示的消息。
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] 无法解除精英物品的附魔！'
# 设置精英物品是否可以通过原版方式从钻石升级到下界合金。不推荐！
preventEliteItemDiamondToNetheriteUpgrade: true
# 设置精英物品是否仅在死亡时才会损失耐久度。
# 这是 EliteMobs 的一个重要系统，强烈建议这样做，因为没有它，高等级战斗几乎是不可能的！
eliteItemsDurabilityLossOnlyOnDeath: true
# 设置精英物品设置为在死亡时损失耐久度时的耐久度损失乘数。
# 0.0 和 1.0 之间的值降低耐久度损失，而高于 1.0 的值会增加耐久度损失。
# 例如：0.5 处理 50% 的耐久度损失，2.0 处理 200% 的耐久度损失。
eliteItemsDurabilityLossMultiplier: 1.0
# 设置当物品报废成功时显示的消息。
scrapSucceededMessageV2: '&8[EliteMobs] &2报废成功 $amount 次！'
# 设置当物品报废失败时显示的消息。
scrapFailedMessageV2: '&8[EliteMobs] &c报废失败 $amount 次！'
# 设置精英战利品是否应直接放入玩家的物品栏中。
putLootDirectlyIntoPlayerInventory: false
# 设置玩家在无法再掠夺等级过低的物品之前可以拥有的最大等级差异。
# 这是根据玩家穿着的战利品的平均等级计算得出的。
# 例如，如果设置为 10，并且玩家拥有 50 级装备，则他们将无法养殖 39 级 Boss。
lootLevelDifferenceLockout: 10
# 设置 EliteMobs 在使用死亡时损失耐久度系统时是否会阻止精英物品损坏。
# 玩家反正也无法使用剩余耐久度为 0 的物品，这仅仅是为了防止意外丢失高等级但耐久度低的物品。
preventEliteItemsFromBreaking: true
# 设置精英怪物中可以程序生成的掉落钻石装备的 Boss 的最低等级（+7）。
# EliteMobs 中没有程序生成的下界合金装备，只有自定义战利品。
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# 设置在通过 /em simloot <level> <times> 命令成功滚动战利品时在聊天中显示的消息。
simlootMessageSuccess: '&8[EliteMobs] &2滚动战利品并获得 $itemName &2！'
# 设置在通过 /em simloot <level> <times> 命令滚动战利品失败时在聊天中显示的消息。
simlootMessageFailure: '&8[EliteMobs] &c滚动战利品但什么也没得到！'
# 设置精英战利品直接存入其物品栏时玩家获得的消息。
directDropCustomLootMessage: '&8[EliteMobs] &2获得 $itemName &2！'
# 设置原版战利品直接存入其物品栏时玩家获得的消息。
directDropMinecraftLootMessage: '&8[EliteMobs] &a获得 $itemName &a！'
# 设置精英硬币直接存入其物品栏时玩家获得的消息。
directDropCoinMessage: '&8[EliteMobs] &a获得 &2$amount $currencyName &a！'
# 设置 EliteMobs 是否隐藏原版 Minecraft 属性。
hideItemAttributes: true
# 设置精英物品上的特定于武器的描述条目。$EDPS 占位符将被武器的精英 DPS（每秒伤害）替换。
weaponEntry: '&7精英 DPS：&2$EDPS'
# 设置精英物品上的特定于护甲的描述条目。$EDEF 占位符将被武器的精英 DEF（防御）替换。
armorEntry: '&7精英护甲：&2$EDEF'
# 设置当玩家击杀 Boss 但装备等级与 Boss 等级相差太大而无法获得硬币时发送的消息
levelRangeTooDifferent: '&8EM] &4您的装备等级为 $playerLevel，而 Boss 等级为 $bossLevel，等级差异太大而无法获得硬币！'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` 包含与自定义战斗系统相关的所有配置选项，以及与精英怪物工作方式相关的大多数配置选项。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否会生成自然生成的精英。注意：像僵尸国王这样的事件怪物不是自然生成的精英！如果要禁用事件 Boss，则必须禁用事件。
doNaturalEliteMobSpawning: true
# 设置是否可以将怪物生成器生成的生物转换为精英。不推荐！
doSpawnersSpawnEliteMobs: false
# 设置转换为精英怪物的自然生成怪物的百分比。
eliteMobsSpawnPercentage: 0.05
# 设置扫描超级怪物堆叠的超级怪物范围
superMobStackRange: 15
# 设置精英可以生成的最大等级。
# 注意：精英怪物等级基于玩家穿着的盔甲和武器，并且盔甲仅缩放到 200 级。
naturalEliteMobsLevelCap: 250
# 设置精英是否会根据其等级穿戴盔甲。这仅用于视觉目的，不会影响战斗。
doElitesWearArmor: true
# 设置精英是否会根据其等级穿戴头盔。这将防止他们在白天轻易被烧毁。
doElitesWearHelmets: true
# 设置精英周围是否有视觉轨迹，警告玩家他们拥有的能力。
doNaturalEliteMobVisualEffects: true
# 设置从生成器生成的精英是否会产生视觉效果。
doSpawnerEliteMobVisualEffects: false
# 设置某些能力是否会执行能力的警告阶段。这非常重要，因为警告阶段通常意味着可以躲避该能力，并且视觉效果会让玩家知道躲避的方向。
doPowerBuildupVisualEffects: true
# 设置当玩家死于精英时是否使用自定义死亡消息。
doCustomEliteMobsDeathMessages: true
# 设置 EliteMobs 是否会显示精英的生命值指示器。
doDisplayMobHealthOnHit: true
# 设置 EliteMobs 是否会显示对精英造成的伤害指示器。
doDisplayMobDamageOnHit: true
# 设置精英的等级是否会根据与生成点的距离而增加。
# 这是在其正常等级之上添加的值，这意味着如果玩家在生成点附近穿着 100 级装备，并且 Boss 的等级因与生成点的距离而增加 +1，则 Boss 将以 101 级生成。
# 如果您的服务器上有随机传送系统，则通常不建议使用此选项。
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# 设置基于距离的等级增加的等级增量之间的距离。
distanceBetweenIncrements: 100.0
# 设置在基于距离的等级增加的每个距离增量处增加的等级数量。
levelIncreaseAtIncrements: 1.0
# 设置精英的能力是否会被隐藏，直到他们进入战斗。为了性能原因，建议这样做。
hideEliteMobPowersUntilAggro: true
# 设置对 EliteMobs 生成的所有 Boss 造成的伤害的乘数，除了那些使用标准化伤害系统（区域地下城 Boss）的 Boss。更高的值会增加造成的伤害，使 Boss 更容易被杀死。
# 2.0 = 200%，0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# 设置精英对玩家造成的伤害的乘数。更高的值会增加 Boss 对玩家造成的伤害，除了那些使用标准化伤害系统（区域地下城 Boss）的 Boss，使 Boss 的攻击更强。
# 2.0 = 200%，0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# 设置是否可以跟踪特殊 Boss。
showCustomBossLocation: true
# 设置发送给玩家以跟踪 Boss 位置的消息。
bossLocationMessage: '&7[EM] &2[点击跟踪！]'
# 设置在精英死亡时运行的命令。有效占位符为：
# $level Boss 的等级
# $name Boss 的名称
# $players 将使该命令为参与击杀的每个玩家运行。例如，如果 Bob 和 Steve 击杀了一个 Boss，“broadcast $players 击杀了 Boss！”将运行“bob 击杀了 Boss”和“steve 击杀了 Boss！”
commandsOnEliteMobDeath: []
```

```yml
# 设置发送给参与大型 Boss 击杀的玩家的消息。
bossKillParticipationMessage: '&e您的伤害：&2$playerDamage'
# 设置 Boss 在脱离战斗后是否会恢复生命值。强烈建议。
regenerateCustomBossHealthOnCombatEnd: true
# 设置发送给尝试跟踪当前位于不同世界的 Boss 的玩家的消息。
defaultOtherWorldBossLocationMessage: '$name：在不同的世界！'
# 设置当玩家用 Boss 弱的攻击击中 Boss 时添加到伤害指示器前缀的文本颜色。
weakTextColor: '&9'
# 设置当玩家用 Boss 强的攻击击中 Boss 时添加到伤害指示器前缀的文本颜色。
resistTextColor: '&c'
# 设置当玩家用 Boss 弱的攻击击中 Boss 时显示的消息。
weakText: '&9&l弱！'
# 设置当玩家用 Boss 强的攻击击中 Boss 时显示的消息。
resistText: '&c&l抵抗！'
# 设置是否使用视觉效果来显示 Boss 弱于某种攻击。
doWeakEffect: true
# 设置是否使用视觉效果来显示 Boss 强于某种攻击。
doResistEffect: true
# 设置对使用标准化伤害系统（区域地下城 Boss）的 Boss 造成的伤害的乘数。更高的值会增加造成的伤害，使 Boss 更容易被杀死。
# 2.0 = 200%，0.5 = 50%
damageToEliteMobMultiplier: 1.0
# 设置使用标准化伤害系统（区域地下城 Boss）的 Boss 对玩家造成的伤害的乘数。更高的值会增加 Boss 对玩家造成的伤害，使 Boss 的攻击更强。
# 2.0 = 200%，0.5 = 50%
damageToPlayerMultiplier: 1.0
# 设置使用标准化伤害的自定义 Boss（通常是区域 Boss）的基线伤害。
normalizedRegionalBossBaselineDamageV2: 3.0
# 设置使用标准化生命值（通常是区域 Boss）的自定义 Boss 的基线生命值。
normalizedRegionalBossBaselineHealthV3: 4.0
# 设置区域 Boss 是否将使用标准化战斗系统。
# 强烈建议这样做，如果修改，预制内容将无法正确平衡。
normalizeRegionalBosses: true
# 设置当 Boss 因脱离战斗而恢复生命值时出现的消息。
fullHealMessage: '&2完全治愈！'
# 设置应用于 Boss 强弱攻击的乘数。
strengthAndWeaknessDamageMultipliers: 2.0
# 设置应用于玩家对抵抗药水效果的伤害减少的乘数。
resistanceDamageMultiplier: 1.0
# 设置当玩家举起盾牌进行近战攻击（不包括能力）时应用于伤害减少的乘数。
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
  fishingRod: 钓鱼竿
  shield: 盾
  trident: 三叉戟
  crossbow: 弩
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
- 黎明
...
adjectives:
- 可爱的
- 美丽的
...
verbs:
- 斩击
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

`ValidWorlds.yml` 包含 EliteMobs 检测到的世界列表，以及在其中自定义 EliteMobs 功能的选项。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置基于区域的世界列表。
# 基于区域的游戏模式已过时，并将很快删除！
zoneBasedWorlds: []
# 设置噩梦模式世界列表。
# 噩梦模式世界是一种游戏模式，其中白天较短，玩家无法睡觉。
# 噩梦世界也有更高数量的精英生成。
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

`Arenas.yml` 包含您可以修改的竞技场的默认消息和设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 当没有足够的玩家开始竞技场时出现的消息。
notEnoughPlayersMessage: '&8[EliteMobs] &c您至少需要 $amount 才能开始比赛！'
# 当竞技场开始时出现的标题。
startingMessage: '&2开始！'
# 当竞技场开始时出现的副标题。
startingSubtitle: '&2在 $count 中...'
# 当竞技场满员时出现的消息。
arenaFullMessage: '&4[EliteMobs] &c竞技场已满！您可以改为旁观，同时等待它完成！'
# 当玩家尝试加入活动竞技场时出现的消息。
arenasOngoingMessage: '&4[EliteMobs] &c现在无法加入竞技场 - 当前正在进行比赛！您可以改为旁观，同时等待它完成！'
# 当玩家作为玩家加入后提醒玩家如何开始竞技场的消息。
instanceStartHintMessage: '&2[EliteMobs] &a您可以通过执行 &2/em start &a来开始实例'
# 提醒玩家如何离开竞技场的消息。
instanceQuitHintMessage: '&4[EliteMobs] &c您可以通过执行 &4/em quit &c来离开实例'
# 当玩家加入竞技场时出现的消息。
arenaJoinPlayerMessage: "&2[EliteMobs] &a您可以通过执行 &2/em start &a来开始竞技场，如果其中至少有 &2$count &a个玩家！\n您可以通过执行 &c/em quit 来离开竞技场"
# 提醒玩家如何以旁观者身份加入后离开竞技场的消息。
arenaJoinSpectatorMessage: '&2[EliteMobs] &a您可以使用 &2/em quit &a随时离开竞技场'
# 当波浪开始时出现的标题消息。
waveTitle: '&a波浪 &2$wave'
# 当波浪开始时出现的副标题消息。
waveSubtitle: ''
# 当竞技场完成时出现的标题。
victoryTitle: '&2胜利！'
# 当竞技场完成时出现的副标题。
victorySubtitle: '&a已完成 &2$wave &a波浪！'
# 当玩家在竞技场中失败时出现的标题。
defeatTitle: '&4失败！'
# 当玩家在竞技场中失败时出现的副标题。
defeatSubtitle: '&c达到波浪 &4$wave&c！'
# 当玩家击败竞技场时广播的消息。
victoryBroadcast: 竞技场 $arenaName 被 $players 征服了！
# 当玩家加入竞技场时出现的标题。
joinPlayerTitle: '&a使用 &2/em start &a 开始！'
# 当玩家加入竞技场时出现的副标题。
joinPlayerSubtitle: '&c使用 &4/em quit &c 离开！'
# 当旁观者加入竞技场时出现的标题。
joinSpectatorTitle: '&a现在旁观！'
# 当旁观者加入竞技场时出现的副标题。
joinSpectatorSubtitle: '&c使用 &4/em quit &c 离开！'
# 设置当玩家没有进入竞技场的权限时发送给玩家的消息。
noArenaPermissionMessage: '[EliteMobs] 您没有进入此竞技场的权限！'
```

</details>

---

## Database.yml

`Database.yml` 包含您希望 EM 如何处理数据库的设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否将使用 MySQL。默认情况下，EliteMobs 使用 SQLite。如果您希望使用 MySQL，则需要有效的 MySQL 配置。
useMySQL: false
# 您的 MySQL 数据库的主机
mysqlHost: localhost
# 您的 MySQL 数据库的端口
mysqlPort: '3306'
# 数据库的名称
mysqlDatabaseName: elitemobs
# MySQl 的用户名
mysqlUsername: 您在此处输入您的_mysql_用户名
# 您的 MysSQL 数据库的密码
mysqlPassword: 您在此处输入您的_mysql_密码
# 是否使用 SSL
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` 包含可让您调整地牢中出现的消息以及其他设置（如应用于效果的伤害乘数）的设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置地牢中毒伤害的伤害乘数
# 这对于平衡很重要，因为默认情况下，对于我们设计的地牢而言，伤害有点太高
poisonDamageMultiplier: 0.5
# 设置地牢中火焰伤害的伤害乘数
# 这对于平衡很重要，因为默认情况下，对于我们设计的地牢而言，伤害有点太高
fireDamageMultiplier: 0.5
# 设置地牢中凋零伤害的伤害乘数
# 这对于平衡很重要，因为默认情况下，对于我们设计的地牢而言，伤害有点太高
witherDamageMultiplier: 0.5
# 设置是否允许在地牢中进行 PvP
friendlyFireInDungeons: false
# 设置地牢中复活横幅上显示的文本
dungeonRezInstructions: '&a点击复活！'
# 设置显示玩家在地牢中剩余生命数量的文本！占位符：
# $amount - 剩余生命数量
dungeonLivesLeftText: '&c剩余 $amount 条生命！'
# 设置作为玩家加入地牢的文本！占位符：
# $dungeonName - 地牢的名称
joinDungeonAsPlayerText: '&f作为玩家加入 $dungeonName！'
# 设置作为旁观者加入地牢的文本！占位符：
# $dungeonName - 地牢的名称
joinDungeonAsSpectatorText: '&f作为旁观者加入 $dungeonName！'
# 设置将在实例地牢菜单的物品描述中显示的标题
# $difficulty 是地牢配置文件中难度名称的占位符
instancedDungeonTitle: 开始 $difficulty 难度地牢！
# 设置将在实例地牢菜单的物品描述中显示的描述
# $dungeonName 是地牢配置文件中地牢名称的占位符
instancedDungeonDescription:
- '&f为自己以及可能的朋友创建地牢的新实例！'
- $dungeonName &f为自己以及可能的朋友！
# 设置是否可以旁观实例内容。
allowSpectatorsInInstancedContent: true
# 设置当实例地牢完成时出现的消息
instancedDungeonCompleteMessage: '[EliteMobs] 地牢已完成！它将在 2 分钟后自毁！'
# 设置当实例地牢关闭时出现的消息
instancedDungeonClosingInstanceMessage: '[EliteMobs] 正在关闭实例！'
```

</details>

---

## Quests.yml

`Quests.yml` 包含任务的设置以及显示的消息。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置是否必须将任务返回给任务发布者才能完成任务。
requireQuestTurnIn: true
# 设置接受任务时发送的消息。
questJoinMessage: '&a您已接受任务 $questName &a！'
# 设置放弃任务时发送的消息。
questLeaveMessage: '&c您已放弃任务 $questName &c！'
# 设置完成任务时发送的消息。
questCompleteMessage: '&2您已完成任务 $questName &2！'
# 设置当玩家尝试放弃任务时，如果没有任何激活的任务则发送的消息。
leaveWhenNoActiveQuestsExist: '&c您当前没有任何激活的任务！'
# 设置当玩家尝试放弃任务时发送的确认消息。
questLeaveConfirmationMessage: '&c您确定要放弃当前任务吗？执行 &a/em confirm &c 以确认您的选择！'
# 设置与任务相关的一些消息是否将使用标题而不是聊天消息。
useQuestAcceptTitles: true
# 设置当玩家开始任务时发送的标题。
questStartTitle: '&a已接受任务！'
# 设置当玩家开始任务时发送的副标题。
questStartSubtitle: $questName
# 设置是否在玩家完成任务时发送标题。
useQuestCompleteTitles: true
# 设置当玩家完成任务时发送的标题。
questCompleteTitle: '&2已完成任务！'
# 设置当玩家完成任务时发送的副标题。
questCompleteSubtitle: $questName
# 设置是否在玩家离开任务时发送标题。
useQuestLeaveTitles: true
# 设置当玩家离开任务时发送的标题。
questLeaveTitle: '&c已放弃任务！'
# 设置当玩家离开任务时发送的副标题。
questLeaveSubtitle: $questName
# 设置是否在聊天中发送报告任务目标进度的消息。
doQuestChatProgression: true
# 设置已完成目标的颜色代码。
ongoingQuestColorCode: '&2'
# 设置击杀任务进度消息的格式。
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤击杀 $name:$color$current&0/$color$target'
# 设置获取任务进度消息的格式。
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤获取 $name:$color$current&0/$color$target'
# 设置对话任务进度消息的格式。
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤与 $name 对话:$color$current&0/$color$target'
# 设置玩家可以拥有的最大已接受任务数量。
maximumActiveQuests: 10
# 设置当尝试接受超出活动任务上限的任务数量时发送给玩家的消息。
questCapMessage: '&8[EliteMobs] &c您已达到最大活动任务数量 (10)！&4如果您想获得更多任务，请放弃或完成至少一个活动任务！'
# 设置是否将为任务使用记分板消息。
useQuestScoreboards: true
# 设置击杀任务的记分板进度消息的格式。
killQuestScoreboardProgressionMessage: '&c➤击杀 $name:$color$current&0/$color$target'
# 设置获取任务的记分板进度消息的格式。
fetchQuestScoreboardProgressionMessage: '&c➤获取 $name:$color$current&0/$color$target'
# 设置对话任务的记分板进度消息的格式。
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
# 设置发送给玩家以激活任务跟踪的消息。
chatTrackMessage: '&8[EliteMobs]&2 点击此处跟踪您的任务！'
# 设置任务跟踪消息的悬停消息。
chatTrackHover: '&2点击跟踪！'
# 设置单击跟踪消息时发送的命令。您真的不应该修改此项。
chatTrackCommand: /elitemobs quest track $questID
# 设置在激活任务跟踪时发送给玩家的消息。
chatTrackingMessage: '&8[EliteMobs]&9 您现在正在跟踪任务！'
# 设置任务跟踪启用消息的悬停消息。
chatTrackingHover: '&2单击以取消跟踪/跟踪！/em -> 任务以跟踪其他任务！'
# 设置单击任务跟踪激活消息时发送的命令。您真的不应该修改此项。
chatTrackingCommand: /elitemobs quest track $questID
# 设置是否在接受任务时自动跟踪任务。
autoTrackQuestsOnAccept: true
# 设置当找不到任务目的地时显示的消息。
noQuestDestinationFound: '[EM] 未找到任务目的地！'
# 设置当任务目标位于另一个世界时出现的消息。
questDestinationInOtherWorld: '[EM] 前往世界 $world！'
# 设置当尝试接受已完成的任务时发送给玩家的消息。
questAlreadyCompletedMessage: '&8[EliteMobs] &c您已经完成了这个任务！'
# 设置当尝试接受您没有权限接受的任务时发送给玩家的消息。
questPrerequisitesMissingMessage: '&8[EliteMobs] &c此 NPC 有一些您尚无法接受的任务！'
# 设置当玩家尝试获取未激活正确公会等级的任务时发送的消息。
lowRankDynamicQuestWarning: '&8[EliteMobs] &c您无法使用当前的公会等级来接受这些任务！请提高您的公会等级以接受这些任务。'
# 设置任务交接消息的格式。
questTurnInObjective: '&a2 与 $npcName 对话'
# 设置任务的基于物品栏的菜单中每行显示的最大字符数。
horizontalCharacterLimitBedrockMenu: 30
# 设置任务的基于物品栏的菜单中每个物品条目在创建另一个物品以继续该条目之前所允许的最大字符数。
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

`Sounds.yml` 包含定义在执行某些 EliteMobs 交互时应播放哪些声音的设置。声音文件存储在资源包中。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置打开宝箱时将播放的声音
treasureChestOpenSound: elitemobs:treasure_chest.open
# 设置当玩家在公会中升级时将播放的声音
guildRankUpSound: elitemobs:guild.rankup
# 设置当玩家在公会中晋升时将播放的声音
guildPrestigeSound: elitemobs:guild.prestige
# 设置当玩家推进任务时将播放的声音
questProgressionSound: elitemobs:quest.progression
# 设置当玩家完成任务时将播放的声音
questCompleteSound: elitemobs:quest.completion
# 设置当玩家放弃任务时将播放的声音
questAbandonSound: elitemobs:quest.abandon
# 设置当玩家接受任务时将播放的声音
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` 包含 EliteMobs 虫洞传送的设置。

<details>

<summary><b>展开表格</b></summary>

```yml
# 设置当传送用于未安装的地牢时出现的消息。
dungeonNotInstalledMessage: '&8[EliteMobs] &c未安装地牢 $dungeonID &c！此传送将无法工作。'
# 设置当虫洞用于未安装的地牢时出现的消息。
defaultPortalMissingMessage: '&8[EliteMobs] &c此传送门似乎没有任何去处！'
# 设置是否使用虫洞的减少粒子模式。如果您允许基岩版客户端加入，则特别建议使用此模式。
reducedParticlesMode: true
# 设置虫洞是否完全不使用粒子。不推荐，但对于真正糟糕的基岩版客户端可能需要使用。
noParticlesMode: false
# 设置当玩家尝试使用虫洞但没有足够的货币使用时发送的消息。
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &c货币不足！您需要 $amount 才能使用此虫洞！'
```

</details>
