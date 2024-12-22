以下是 EliteMobs 的 PAPI 占位符的完整列表。

| 占位符                                                |                                                                      描述                                                                      |
|----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------:|
| `%elitemobs_player_combat_tier%`                   |                                                         显示玩家的战斗等级，即用于在玩家周围生成精英怪物的等级。                                                         |
| `%elitemobs_player_active_guild_rank_numerical%`   |                                           以数字形式显示玩家的激活公会等级。请注意，如果玩家故意降低其等级，则激活的公会等级可能低于实际的最大公会等级。                                            |
| `%elitemobs_player_maximum_guild_rank_numerical%`  |                                             以数字形式显示玩家的最大公会等级。请注意，如果玩家故意降低其等级，则此等级可能高于他们激活的公会等级。                                              |
| `%elitemobs_player_active_guild_rank_name%`        |                                                  显示激活公会等级的名称。如果您想显示玩家的激活公会等级，这可能是您想要使用的选项。                                                   |
| `%elitemobs_player_maximum_guild_rank_name%`       |                                                  显示最大公会等级的名称。如果您想显示玩家的最大公会等级，这可能是您想要使用的选项。                                                   |
| `%elitemobs_player_prestige_guild_rank_numerical%` |                                                               以数字形式显示玩家的声望等级。                                                                |
| `%elitemobs_player_money%`                         |                                                          显示玩家当前拥有的 EliteMobs 货币数量。                                                           |
| `%elitemobs_player_top_tier%`                      |                                                               显示任何在线玩家的最高威胁等级。                                                               |
| `%elitemobs_player_top_guild_rank%`                |                                                             显示拥有最高公会等级的在线玩家的名称。                                                              |
| `%elitemobs_player_shortened_guild_rank%`          | 显示声望和激活公会等级的缩短版本，专门用于聊天或其他等级名称不应占用太多空间的位置（记分板）。默认情况下，使用百合花饰和星形 Unicode 分别表示声望等级和激活公会等级，并使用罗马数字表示数字。这在 AdventurersGuild.yml 配置文件中是 100% 可配置的。 |
| `%elitemobs_player_top_guild_rank%`                |                                                             显示拥有最高公会等级的在线玩家的名称。                                                              |
| `%elitemobs_player_shortened_guild_rank%`          | 显示声望和激活公会等级的缩短版本，专门用于聊天或其他等级名称不应占用太多空间的位置（记分板）。默认情况下，使用百合花饰和星形 Unicode 分别表示声望等级和激活公会等级，并使用罗马数字表示数字。这在 AdventurersGuild.yml 配置文件中是 100% 可配置的。 |
| `%elitemobs_player_kills%`                         |                                                                显示玩家拥有的精英击杀数量。                                                                |
| `%elitemobs_player_deaths%`                        |                                                                 显示玩家死于精英的次数。                                                                 |

# 如何使用

1) ***EliteMobs 不需要使用 PAPI eCloud。*** 只要您的服务器上有 EliteMobs，它就可以正常工作。您可以跳过此步骤。
2) 如果您想使用占位符，您需要在服务器上安装 ***PAPI*** 以及一个 ***使用这些占位符的插件***
   。这意味着如果您想在聊天中使用它，您将需要一个聊天插件。如果您想制作标题、记分板、标签列表或其他任何内容，也是如此。

-----

## 以下是一些使用 PAPI 的插件的简短列表：
### 聊天：
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### 其他：
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***以上列表仅是一些最流行的示例。还有其他的。请不要要求提供更多建议或对这些插件的支持。我没有制作它们，我也不会为它们提供支持。
***

-----

3) 将占位符（列表在上面）添加到您选择的插件中。

***注意：大多数插件使用格式 `{elitemobs_XXXXXXX_YYYYYY}` 而不是 `%elitemobs_XXXXXXX_YYYYYY%`***

如果它对您不起作用，请尝试将 `%%` 的使用更改为 `{}`
。如果在那之后仍然不起作用，请尝试在游戏中执行命令 `/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%`
（替换大写的内容）。

如果这为您提供了一个有效的输出，那么您配置错误，并且您需要在使用占位符的任何插件上寻求支持。
