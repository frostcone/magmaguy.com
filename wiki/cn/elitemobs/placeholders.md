[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

以下是 EliteMobs 的 PAPI 占位符的完整列表。

| 占位符 | 描述 |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%` | 显示玩家的战斗等级，即用于在玩家周围生成精英生物的等级。 |
| `%elitemobs_player_active_guild_rank_numerical%` | 以数字形式显示玩家的活动公会等级。请注意，如果玩家故意降低了活动公会等级，则该等级可能低于实际最大公会等级。 |
| `%elitemobs_player_maximum_guild_rank_numerical%` | 以数字形式显示玩家的最大公会等级。请注意，如果玩家故意降低了等级，则该等级可能高于他们活动的公会等级。 |
| `%elitemobs_player_active_guild_rank_name%` | 显示活动公会等级的名称。如果您想显示玩家的活动公会等级，则这可能是您可能想要使用的选项。 |
| `%elitemobs_player_maximum_guild_rank_name%` | 显示最大公会等级的名称。如果您想显示玩家的最大公会等级，则这可能是您可能想要使用的选项。 |
| `%elitemobs_player_prestige_guild_rank_numerical%` | 以数字形式显示玩家的声望等级。 |
| `%elitemobs_player_money%` | 显示玩家当前拥有的 EliteMobs 货币量。 |
| `%elitemobs_player_top_tier%` | 显示任何在线玩家的最高威胁等级。 |
| `%elitemobs_player_top_guild_rank%` | 显示拥有最高公会等级的在线玩家的姓名。 |
| `%elitemobs_player_shortened_guild_rank%` | 显示声望和活动公会等级的缩短版本，专门用于聊天或其他等级名称无法占用太多空间的位置（记分牌）。默认情况下，使用百合花和星形 unicode 分别表示声望等级和活动公会等级，并使用罗马数字表示数字。这在 AdventurersGuild.yml 配置文件中是 100% 可配置的。 |
| `%elitemobs_player_top_guild_rank%` | 显示拥有最高公会等级的在线玩家的姓名。 |
| `%elitemobs_player_shortened_guild_rank%` | 显示声望和活动公会等级的缩短版本，专门用于聊天或其他等级名称无法占用太多空间的位置（记分牌）。默认情况下，使用百合花和星形 unicode 分别表示声望等级和活动公会等级，并使用罗马数字表示数字。这在 AdventurersGuild.yml 配置文件中是 100% 可配置的。 |
| `%elitemobs_player_kills%` | 显示玩家的精英击杀数量。 |
| `%elitemobs_player_deaths%` | 显示玩家死于精英的次数。 |

# 如何使用

1) ***EliteMobs 不需要使用 PAPI eCloud。***只要 EliteMobs 在您的服务器上，它就可以正常工作。您可以跳过此步骤。
2) 如果您想使用占位符，您将需要在您的服务器上安装 ***PAPI***，以及一个***使用这些占位符的插件***。这意味着如果您想在聊天中使用它，您将需要一个聊天插件。如果您想制作标题、记分牌、标签列表或任何其他内容，情况也是如此。

-----

## 以下是使用 PAPI 的一些常用插件的简短列表：
### 聊天：
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### 其他：
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***以上列表仅是一些最常见的示例。还有其他的。请不要要求提供更多建议或为这些插件提供支持。我没有制作它们，也不会为它们提供支持。***

-----

3) 在您选择的插件中添加占位符（列表在上面）。

***注意：大多数插件使用 `{elitemobs_XXXXXXX_YYYYYY}` 格式而不是 `%elitemobs_XXXXXXX_YYYYYY%`***

如果它对您不起作用，请尝试将您使用的 `%%` 更改为 `{}`。如果在那之后仍然不起作用，请尝试在游戏中使用命令 `/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%`（替换大写字母）。

如果这为您提供了有效输出，则表示您的配置有误，您需要向您使用占位符的任何插件寻求支持。
