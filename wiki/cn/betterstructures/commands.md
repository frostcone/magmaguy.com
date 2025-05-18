好的，以下是翻译成简体中文并保留 Markdown 格式的文本：

# BetterStructures 命令

以下是 BetterStructures 插件可用的完整命令列表，以及它们各自所需的权限。

## Reload 命令

**命令:** `/betterstructures reload`

**权限:** `betterstructures.*`

**描述:** 重新加载插件。同时导入任何需要导入的结构。

## Lootify 命令

**命令:** `/betterstructures lootify <treasure filename> <rarity> <minAmount> <maxAmount> <weight>`

**权限:** `betterstructures.*`

**描述:** 将当前手持的物品添加到特定 `generator` 的特定 `rarity` 表中，随机化在箱子中找到该物品的数量，范围在 `minAmount` 和 `maxAmount` 之间，并带有指定的 `weight`。

这是一个非常具体的系统，有关这些值如何工作的更多详细信息，您可以阅读[此页面]($language$/betterstructures/creating_structures.md)。

## Place 命令

**命令:** `/betterstructures place <structure filename> <generator type>`

**权限:** `betterstructures.*`

**描述:** 在您的位置强制放置选定的结构。

## Teleportcoords 命令

**命令:** `/betterstructures teleporttocoords <worldName> <x> <y> <z>`

**权限:** `betterstructures.*`

**描述:** 不建议直接使用，这是管理员点击聊天警告时运行的命令，该警告允许他们传送到结构位置。

## Version 命令

**命令:** `/betterstructures version`

**权限:** `betterstructures.*`

**描述:** 在聊天中输出插件版本。

## Silent 命令

**命令:** `/betterstructures silent`

**权限:** `betterstructures.*`

**描述:** 静默或取消静默服务器操作员在聊天中收到的关于服务器中生成结构的警告。