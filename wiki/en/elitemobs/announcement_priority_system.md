The Announcement Priority System manages how important EliteMobs messages are. These are currently only used to manage the messages sent by Custom Boss spawns.

# Short-form cheat sheet:

*   Level 0: Silent / Local to players that fought the boss
*   Level 1: Chat Messages (if it has spawn messages)
*   Level 2: Tracking (if it has a location message)
*   Level 3: [Discord announcements (if it has spawn messages and DiscordSRV is installed & configured correctly)](https://magmaguy.com/wiki.html#en+elitemobs+discordsrv.md)

# How it works:

Note: You need to set your Custom Boss up with this priority system if you want to use a non-default value. Click [here](https://magmaguy.com/wiki.html#en+elitemobs+creating_bosses.md%announcementpriority) to learn how to do that.

## Level 0

Forces the Custom Boss to be silent. This means that no messages will be sent about it, even if it is configured to have them, with one exception: They will send death messages directly to players who damaged the boss.

## Level 1

**This is the default.** The Custom Boss will be able to send a message in chat if they are configured to do it. They will send spawn, death and  
escape messages if they are configured to have them.

## Level 2

The Custom Boss will have the same behavior as in Level 1, and will also be able to be tracked by players upon spawning if it has a location message associated to it. Players can click on chat to track it when it spawns, or they can use the /em menu to track it.

## Level 3

The Custom Boss have the same behavior as in Level 2, and will also send messages to the Discord room configured to send notifications about EliteMobs. [The page on how to set this feature up can be found here.](https://magmaguy.com/wiki.html#en+elitemobs+discordsrv.md) The messages on discord will be the same as the chat messages - spawn/death/escape