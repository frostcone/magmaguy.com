EliteMobs uses DiscordSRV to enable the broadcast of level 3 priority messages. You can read about the Announcement Priority System [here](https://github.com/MagmaGuy/EliteMobs/wiki/Announcement-Priority-System).

In essence, this means that some very special Custom Bosses are able to send messages on Discord in a way that looks like this:

![discord message example](https://i.imgur.com/sIndft0.png)

The intention is to create a dedicated EliteMobs announcement room that players can take a look at to see if there's any interesting World Bosses currently alive that they can go kill and show off that they did in the kill leaderboard.

# Setting it all up

## Setting up DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) is a different plugin not developed by me. [You can find their extensive setup guide here](https://github.com/discordsrv/discordsrv/wiki/Installation). If you have a hard time setting it up, [their support room is here](https://discord.discordsrv.com/). I am not able to provide support for this plugin, so please refer to them for this part of the installation.

## Setting up the EliteMobs DiscordSRV config

Once you've correctly configured DiscordSRV (*and you have to test to see if it's really working before you move to this step*), **the EliteMobs configuration only has 1 step**.

Go to the `DiscordSRV.yml` configuration file on the EliteMobs configuration folder and you will find a configuration option called `announcementRoomName`.

There are three values you can use for this message. I recommend #1.

1. [Recommended] The name of the room as you configured it on the DiscordSRV configuration file. It does not matter what you called the room, only that you use the correct name. Here's an example of the room I configured to be dedicated to EliteMobs events:
   ![using name example](https://i.imgur.com/a2kMWXv.png)
   In my case, the option should read `announcementRoomName: EMEvents`.

2. The ID of the room as you configured it on the DiscordSRV configuration file. Here's an example of the room. *Please note that each room is unique. I am only showing pictures as an example, do not try to copy the ID numbers. It will not work. Your setup should have a unique set of numbers based on your discord room id.*
   ![using id example](https://i.imgur.com/CGElkdh.png)
3. [Bad] The name of your room as it appears on discord. This is not guaranteed to work correctly due to a number of factors. Keep in mind that your discord room must be set up on DiscordSRV's config files - just because you can put the name of the room in this configuration file does not mean you can skip configuring it on DiscordSRV.

## Testing
You can use the command `/em discord [message]` to see if your configuration is working. If your message shows up, you're done!