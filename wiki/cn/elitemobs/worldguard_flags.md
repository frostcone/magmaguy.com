以下列出的是 EliteMobs 的 WorldGuard 标志及其功能。

***

# elitemob-spawning (allow/deny)

设置 Elite 怪物是否可以在该区域生成。默认行为是允许 Elite 怪物在任何地方生成，因此此标志的主要用途是禁用特定区域的 Elite
怪物生成。如果要禁用整个世界的 Elite 怪物生成，我建议编辑 ValidWorlds.yml 文件。

***

# elitemob-only-spawning (allow/deny)

设置是否仅允许 Elite 怪物在该区域生成。这不会增加该区域生成的 Elite 怪物数量，它只会阻止非精英怪物实体在该区域生成。这适用于希望拥有仅允许
Elite 怪物生成的整个区域的用户，例如竞技场或更高难度的区域。

***

# elitemobs-antiexploit (allow/deny)

设置是否可以在该区域触发反作弊机制。允许将允许反作弊运行，拒绝将阻止其运行。对于您已经测试过地形漏洞的预制竞技场和地牢，建议使用拒绝。

***

另请注意：NPC 会覆盖 mob-spawning deny 标志，作为与 WorldGuard 的第三方兼容性形式。如果您不希望在某个区域出现
NPC，我建议手动删除它们。

***

# elitemobs-maximum-level

设置可以在区域中生成的精英怪物的最大等级。仅影响自然生成的精英（自定义 Boss 忽略此设置）。等级必须是整数值（没有像 `1.5`
这样的值，你必须使用像 `1` 或 `2` 这样的整数）。

***

# elitemobs-minimum-level

设置可以在区域中生成的精英怪物的最小等级。仅影响自然生成的精英（自定义 Boss 忽略此设置）。等级必须是整数值（没有像 `1.5`
这样的值，你必须使用像 `1` 或 `2` 这样的整数）。

***

# elitemobs-dungeon

设置该区域仅允许使用 CUSTOM 生成原因生成的普通怪物，以及区域 Boss 和自定义 Boss。这用于迷你地牢。
