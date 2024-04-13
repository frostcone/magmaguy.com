
以下是EliteMobs的PAPI占位符的完整列表。

| 占位符 | 描述 |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     显示玩家的战斗等级，指用于在玩家周围生成精英怪物的等级。     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     以数字形式显示玩家的活跃公会等级。请注意，如果玩家故意降低其等级，活跃的公会等级可能会低于实际的最大公会等级。   |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     以数字形式显示玩家的最大公会等级。请注意，如果玩家故意降低其等级，此等级可能会高于他们当前激活的公会等级。   |
| `%elitemobs_player_active_guild_rank_name%`         |     显示活跃公会等级的名称。如果你想显示玩家的活跃公会等级，这可能是你想要使用的选项。     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     显示最大公会等级的名称。如果你想显示玩家的最大公会等级，这可能是你想要使用的选项。     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     以数字形式显示玩家的声望等级。     |
| `%elitemobs_player_money%`         |     显示玩家当前拥有的EliteMobs货币数量。     |
| `%elitemobs_player_top_tier%`         |     显示任何在线玩家中的最高威胁等级。     |
| `%elitemobs_player_top_guild_rank%`         |     显示拥有最高公会等级的在线玩家的名称。     |
| `%elitemobs_player_shortened_guild_rank%`         |     显示声望和活跃公会等级的缩写版，专为聊天或其他等级名称无法占用太多空间的地方（如记分板）而设计。默认使用fleur de lis和星星unicode来代表声望等级和活跃公会等级，数字使用罗马数字。这可以在AdventurersGuild.yml配置文件中100%配置。     |
| `%elitemobs_player_kills%`         |     显示玩家已经击杀的精英怪物数量。     |
| `%elitemobs_player_deaths%`         |     显示玩家死于精英怪物的次数。     |

# 如何使用

1) ***EliteMobs不需要使用PAPI eCloud。*** 只要你的服务器上有EliteMobs，它就可以工作。你可以跳过这一步。
2) 如果你想使用占位符，你需要在你的服务器上安装***PAPI***，以及一个可以使用这些占位符的***插件***。也就是说，如果你想在聊天中使用它，你需要一个聊天插件。如果你想制作标题，记分板，标签列表或其他任何东西，也是如此。

-----

## 下面是一些使用PAPI的插件的短列表：
### 聊天：
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### 其他：
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***以上列表只是最受欢迎的例子之一。还有其他的。请不要要求更多的推荐，或者那些插件的支持。我没有制作它们，我也不会为它们提供支持。***

-----

3) 在你选择的插件中添加占位符（列表在上面）。

***注意：大多数插件使用格式`{elitemobs_XXXXXXX_YYYYYY}`而不是`%elitemobs_XXXXXXX_YYYYYY%`***

如果对你来说不起作用，尝试将你的`%%`改为`{}`。如果在那之后还是无法工作，尝试在游戏中输入命令`/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%`（替换为大写的部分）。

如果这给你一个有效的输出，那么你配置错误了，你需要寻求你在其中使用占位符的插件的支持。