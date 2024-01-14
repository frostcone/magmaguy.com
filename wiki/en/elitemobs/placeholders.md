The following is the full list of PAPI placeholders for EliteMobs.

`%elitemobs_player_combat_tier%` Displays the combat tier of a player, meaning the tier used for spawning Elite Mobs around the player.

`%elitemobs_player_active_guild_rank_numerical%` Displays the active guild rank for the player in number form. Beware that the active guild rank may be lower than the actual maximum guild rank if the player lowers it on purpose.

`%elitemobs_player_maximum_guild_rank_numerical%` Displays the maximum guild rank for the player in number form. Beware that this may be higher than the guild rank they have active if they lowered it on purpose.

`%elitemobs_player_active_guild_rank_name%` Displays the name of the active guild rank. This is the option you probably want to use if you want to display a player's active guild rank.

`%elitemobs_player_maximum_guild_rank_name%` Displays the name of the maximum guild rank. This is the option you probably want to use if you want to display a player's maximum guild rank.

`%elitemobs_player_prestige_guild_rank_numerical%` Displays a player's prestige level, numerically.

`%elitemobs_player_money%` Displays how much EliteMobs currency a player currently has.

`%elitemobs_player_top_tier%` Displays the highest threat tier out of any online players.

`%elitemobs_player_top_guild_rank%` Displays the name of the online player with the highest guild rank.

`%elitemobs_player_shortened_guild_rank%` Displays the shortened version of the prestige and active guild ranks, specifically for chat or other locations where rank names can't take up too much space (scoreboards). By default, uses a fleur de lis and a star unicode to represent the prestige level and active guild rank respectively, and uses roman numerals for the numbers. This is 100% configurable in the AdventurersGuild.yml configuration file.

`%elitemobs_player_kills%` Displays the amount of Elite kills a player has.

`%elitemobs_player_deaths%` Displays the amount of times a player has died to an elite.

# How to use

1) ***EliteMobs does not require using the PAPI eCloud.*** It just works as long as EliteMobs is on your server. You can skip this step.
2) If you want to use placeholders you will need to have ***PAPI*** installed on your server, as well as a ***plugin to use those placeholders***. That means that if you want to use it with chat, you will need a chat plugin. Same thing if you want to make titles, scoreboards, tab lists or anything else.

-----

## Here is a short list of plugins that use PAPI:
### Chat:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### Other:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***The list above is just a few of the most popular examples. There are other. Please don't ask for more recommendations or for support for those plugins. I did not make them and I will not do support for them.***

-----

3) Add the placeholder (the list is above) in the plugin you chose.

***Note: most plugins use the format `{elitemobs_XXXXXXX_YYYYYY}` instead of `%elitemobs_XXXXXXX_YYYYYY%`*** If it's not working for you, try changing your use of `%%` to `{}`. If it's still not working after that, try the command `/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%` from in-game (replace what's capitalized). If that gives you a valid output, then you configured something wrong, and you need to seek support with whichever plugin you're using the placeholders on.