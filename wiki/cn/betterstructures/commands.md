# BetterStructures 命令

以下是 BetterStructures 插件可用的命令的完整列表，以及它们各自所需的权限。

## 重载命令

**命令:** `/betterstructures reload`

**权限:** `betterstructures.*`

**描述:** 重载插件。同时导入任何需要导入的结构。

## Lootify 命令

**命令:** `/betterstructures lootify <宝藏文件名> <稀有度> <最小数量> <最大数量> <权重>`

**权限:** `betterstructures.*`

**描述:** 将当前持有的物品添加到特定 `生成器` 的特定 `稀有度` 表中，随机化物品在箱子中找到的数量，范围在 `最小数量`
和 `最大数量` 之间，权重为指定的 `权重`。

这是一个非常特定的系统，有关这些值如何工作的更多详细信息，您可以阅读[此页面]($language$/betterstructures/creating_structures.md)。

## 放置命令

**命令:** `/betterstructures place <结构文件名> <生成器类型>`

**权限:** `betterstructures.*`

**描述:** 强制在你所在的位置放置选定的结构。

## Teleportcoords 命令

**命令:** `/betterstructures teleporttocoords <世界名称> <x> <y> <z>`

**权限:** `betterstructures.*`

**描述:** 不打算直接使用，这是当管理员点击聊天警告时运行的命令，允许他们传送到一个结构。

## 版本命令

**命令:** `/betterstructures version`

**权限:** `betterstructures.*`

**描述:** 在聊天中输出插件版本。

## 静默命令

**命令:** `/betterstructures silent`

**权限:** `betterstructures.*`

**描述:** 静默或取消静默服务器操作员在服务器中生成结构时在聊天中出现的警告。
