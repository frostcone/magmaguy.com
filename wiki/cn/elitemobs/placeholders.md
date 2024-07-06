以下是 EliteMobs 的 PAPI 占位符的完整列表。

| 占位符                                     | 描述                                                                                                                                                                                                       |
|---------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `%elitemobs_player_combat_tier%`          | 显示玩家的战斗等级，即用于在玩家周围生成精英怪物的等级。                                                                                                                                                     |
| `%elitemobs_player_active_guild_rank_numerical%` | 以数字形式显示玩家的活跃公会等级。请注意，如果玩家故意降低活跃公会等级，则它可能低于实际的最大公会等级。                                                                                                              |
| `%elitemobs_player_maximum_guild_rank_numerical%` | 以数字形式显示玩家的最大公会等级。请注意，如果玩家故意降低公会等级，则它可能高于他们活跃的公会等级。                                                                                                              |
| `%elitemobs_player_active_guild_rank_name%` | 显示活跃公会等级的名称。如果您想显示玩家的活跃公会等级，则可能需要使用此选项。                                                                                                                                  |
| `%elitemobs_player_maximum_guild_rank_name%` | 显示最大公会等级的名称。如果您想显示玩家的最大公会等级，则可能需要使用此选项。                                                                                                                                  |
| `%elitemobs_player_prestige_guild_rank_numerical%` | 以数字形式显示玩家的声望等级。                                                                                                                                                                           |
| `%elitemobs_player_money%`                 | 显示玩家当前拥有的 EliteMobs 货币数量。                                                                                                                                                                   |
| `%elitemobs_player_top_tier%`              | 显示所有在线玩家中最高的威胁等级。                                                                                                                                                                       |
| `%elitemobs_player_top_guild_rank%`         | 显示公会等级最高的在线玩家的名称。                                                                                                                                                                            |
| `%elitemobs_player_shortened_guild_rank%`   | 显示声望和活跃公会等级的缩写版本，专门用于聊天或其他等级名称不能占用太多空间的位置（记分板）。默认情况下，使用鸢尾花和星星 unicode 分别表示声望等级和活跃公会等级，并使用罗马数字表示数字。这在 AdventurersGuild.yml 配置文件中 100% 可配置。 |
| `%elitemobs_player_top_guild_rank%`         | 显示公会等级最高的在线玩家的名称。                                                                                                                                                                            |
| `%elitemobs_player_shortened_guild_rank%`   | 显示声望和活跃公会等级的缩写版本，专门用于聊天或其他等级名称不能占用太多空间的位置（记分板）。默认情况下，使用鸢尾花和星星 unicode 分别表示声望等级和活跃公会等级，并使用罗马数字表示数字。这在 AdventurersGuild.yml 配置文件中 100% 可配置。 |
| `%elitemobs_player_kills%`                | 显示玩家的精英击杀次数。                                                                                                                                                                                   |
| `%elitemobs_player_deaths%`               | 显示玩家被精英杀死的次数。                                                                                                                                                                                   |

# 如何使用

1) ***EliteMobs 不需要使用 PAPI eCloud。*** 只要 EliteMobs 在您的服务器上，它就可以正常工作。您可以跳过此步骤。
2) 如果您想使用占位符，您需要在您的服务器上安装 ***PAPI***，以及 ***一个使用这些占位符的插件***。这意味着如果您想在聊天中使用它，您将需要一个聊天插件。如果您想制作标题、记分板、标签列表或其他任何内容，也是如此。

-----

## 以下是一些使用 PAPI 的插件的简短列表：
### 聊天：
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### 其他：
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***上面的列表只是一些最流行的示例。还有其他的。请不要要求更多推荐或这些插件的支持。我没有制作它们，也不会为它们提供支持。***

-----

3) 在您选择的插件中添加占位符（列表在上面）。

***注意：大多数插件使用格式 `{elitemobs_XXXXXXX_YYYYYY}` 而不是 `%elitemobs_XXXXXXX_YYYYYY%`***

如果它对您不起作用，请尝试将您使用的 `%%` 更改为 `{}`。如果之后仍然不起作用，请尝试在游戏中运行命令 `/papi parse 您的用户名 %elitemobs_您的占位符%`（替换大写部分）。

如果这为您提供有效的输出，则您配置错误，您需要向您使用占位符的插件寻求支持。



