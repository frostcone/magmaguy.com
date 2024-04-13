
这是EliteMobs的WorldGuard标志及其功能的列表。

***

# elitemob-spawning (允许/拒绝)
设置区域中是否可以生成Elite Mobs。默认行为是允许Elite Mobs在任何地方生成，因此这个标志的主要用途是禁用特定区域的它们。如果你要禁用整个世界的精英Mob生成，我建议编辑ValidWorlds.yml文件。

***

# elitemob-only-spawning (允许/拒绝)
设置是否只能在区域中生成Elite Mobs。这并不增加在区域中生成的精英Mob的数量，它只阻止非精英mob实体在该区域种生成。这适用于希望有整个区域只能生成精英Mob的用户，比如竞技场或更高难度的区域。

***

# elitemobs-antiexploit (允许/拒绝)
设置区域中是否可以触发防护机制。允许将运行防护机制，否认将阻止它的运行。对于已经测试过地形以利用的预制竞技场和地牢，推荐使用否认。

***

也请注意：NPC始终是为了与WorldGuard的第三方兼容性而覆盖了mob-spawning拒绝标志。如果你不希望在一个区域中有NPC，我建议手动删除它们。

***

# elitemobs-maximum-level
设置可以在区域中生成的精英mob的最大等级。只影响自然生成的精英者（自定义Boss忽视此）。等级必须是整数值（没有像`1.5`这样的值，你必须使用像`1`或`2`的整数）。

***

# elitemobs-minimum-level
设置可以在区域中生成的精英mob的最小等级。只影响自然生成的精英者（自定义Boss忽视此）。等级必须是整数值（没有像`1.5`这样的值，你必须使用像`1`或`2`的整数）。

***

# elitemobs-dungeon
设置该区域只允许生成具有CUSTOM生成原因的普通mobs，以及区域Boss和自定义Boss。这用于在迷你地牢中使用。