[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# Example Quest

EliteMobs comes prepackaged with a `test_quest.yml`, which will be analyzed here as a simple quest format to follow.

_Custom Quests are in the `~plugins/EliteMobs/customquests` folder!_

`test_quest.yml`

```yaml
isEnabled: true
customObjectives:
  Objective1:
    amount: '1'
    filename: test_boss.yml
    objectiveType: KILL_CUSTOM
customRewards:
- filename=magmaguys_toothpick.yml:amount=1:chance=1
name: "&aKill the Test Boss"
questLore: 
- "&cEnd the test boss'' reign of terror!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*If your quest UI does not look like this you can change it to match using `/em alt`.*

This example quest will give players the task of slaying 1 test_boss.yml. (The actual name of the boss displayed in the quest tracker will be the `name:` set in test_boss.yml.) And as a reward for completing the quest they will be rewarded with 1 Magmaguy's Toothpick.

## Creating Custom Quests

| Key | Description |                                     Values                                      | Default |
|-|:-:|:-------------------------------------------------------------------------------:|:-:|
| `customObjectives `| Sets the quest objectives |                                 Check below [1]                                 | none |
| `customRewards`| Sets the quest rewards | [Universal EliteMobs loot format]($language$elitemobs/elitemobs+loot_tables.md) | none |
| `questAcceptPermissions` | Sets the permissions the player must have in order to accept the quest |                           [String List](#string_list)                           | none |
| `questLockoutPermission` | Sets the permission that the player will get upon completing the quest which will lock them out from doing the quest again. |                                [String](#string)                                | none |
| `questLockoutMinutes` | Sets how long, in minutes, the player will have to wait before being able to do the quest again (works by removing the quest lockout permission)|                               [Integer](#integer)                               | `-1`(will never repeat) |
| `questName` | Sets the quest name |                                [String](#string)                                | none |
| `questLore` | Sets the lore of the quest that will appear in the in-game quest menu |                           [String List](#string_list)                           | none |
| `temporaryPermissions` | Sets the permissions assigned to the player until they turn the quest in |                           [String List](#string_list)                           | none |
| `questAcceptDialog` | Sets the dialog that appears on chat on quest accept |                           [String List](#string_list)                           | none |
| `questCompleteDialog` | Sets the dialog that appears on chat on quest completion |                           [String List](#string_list)                           | none |
| `questCompleteCommands` | Sets the commands that will run on quest completion |                           [String List](#string_list)                           | none |
| `turnInNPC` | Sets the filename of the NPC that will complete the quest |                              [Filename](#filename)                              | none |
| `trackable` | Sets if the quest will use the quest tracker |                               [Boolean](#boolean)                               | `true` |
| `questLevel` | Sets the level of the quest |                               [Integer](#integer)                               | `0` |

[1] Custom Objectives are constructed using the following format:

1.  `- KILL_CUSTOM`, `- FETCH_ITEM` or `- DIALOG`: Used to set the type of objective this represents. `KILL_CUSTOM` indicates the quest involves killing a specific Custom Boss, `FETCH_ITEM` indicates that the quest involves getting a specific Custom Item and `DIALOG` indicates that the quest involves talking to an NPC.
2.  `filename=your_filename_here.yml` : Used to set the file name of the Custom Boss, the Custom Item that the player has to kill / obtain or the NPC they have to talk to.
3.  `amount=x` : Used to set the amount of Custom Bosses that must be killed or items that must be obtained.
4. `dialog=x` : Used to set the dialog of the NPC the player talks to.
6. `name=x`: Used to set the name of the quest objective, be it an NPC or a custom item. For visual purposes only.

_Please note that every Custom Objective field is separated with a `:` !_

### Permissions

As mentioned in the tables above, permissions are usually [Strings](#string) or [String Lists](#string_list). But let us go into more detail how you will be using these to lock and unlock quests. 

Let us say that you are making quest_3 in a series of quests that you have planned and you do not want players to be able to take quest_3 before they finish quest_2. We would configure the quest file like this:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
By setting the `questAcceptPermissions` to `elitequest.quest_2.yml` we have now prevented players from taking quest_3.yml before they finish quest_2.yml. </br> By setting `questLockoutPermission` to `elitequest.quest_3.yml` we have prevented players from being able to receive that quest as long as they already have that quest in their tracker or if they already finished that quest. This stops players from being able to repeat the quest.

Should you want to make a quest that only becomes available after the players have completed a series of quests, then you would configure the quest file like this:

```yml
questAcceptPermissions: 
  - elitequest.quest_2.yml
  - elitequest.quest_3.yml
  - elitequest.quest_4.yml
```

If you want players to only be able to loot certain items when they have the correct quest active, then we can do that by using `temporaryPermissions`. We would make a permission in the quest file using `temporaryPermissions` then make a matching [permission]($language$/elitemobs/creating_items.md&section=permission%permission) in the item file using `permission`.

For example we would open up our quest file and add the following:

```yml
temporaryPermissions: 
  - elitequest.my_cool_item.yml
```
Then we would open up the item file, in our case *my_cool_item.yml* and then add the following:

```yml
permission: elitequest.my_cool_item.yml
```
Both files have now matching permissions which should now make our item only drop when the players have the correct quest active.