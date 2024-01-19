[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# Example Quest

EliteMobs comes prepackaged with a `test_quest.yml`, which will be analyzed here as a simple quest format to follow.

_Custom Quests are in the `customquests` folder!_

`test_quest.yml`

```yaml
isEnabled: true
customObjectives:
- KILL_CUSTOM:filename=test_boss.yml:amount=1
customRewards:
- filename=magmaguys_toothpick.yml:amount=1:chance=1
name: Kill the Test Boss
questLore: '&cEnd the test boss'' reign of terror!'
```

## Creating Custom Quests

| Key | Description | Values | Default |
|-|:-:|:-:|:-:|
| `customObjectives `| Sets the quest objectives | Check below [1] | none |
| `customRewards`| Sets the quest rewards | [Universal EliteMobs loot format](https://magmaguy.com/wiki.html#en+elitemobs+elitemobs+loot_tables.md) | none |
| `questAcceptPermissions` | Sets the permissions the player must have in order to accept the quest | STRING LIST | none |
| `questLockoutPermission` | Sets the permission that the player will get upon completing the quest which will lock them out from doing the quest again. | String | none |
| `questLockoutMinutes` | Sets how long, in minutes, the player will have to wait before being able to do the quest again (works by removing the quest lockout permission)| INTEGER | `-1`(will never repeat) |
| `questName` | Sets the quest name | STRING | none |
| `questLore` | Sets the lore of the quest that will appear in the in-game quest menu | STRING LIST | none |
| `temporaryPermissions` | Sets the permissions assigned to the player until they turn the quest in | STRING LIST | none |
| `questAcceptDialog` | Sets the dialog that appears on chat on quest accept | STRING LIST | none |
| `questCompleteDialog` | Sets the dialog that appears on chat on quest completion | STRING LIST | none |
| `questCompleteCommands` | Sets the commands that will run on quest completion | STRING LIST | none |
| `turnInNPC` | Sets the filename of the NPC that will complete the quest | FILENAME | none |
| `trackable` | Sets if the quest will use the quest tracker | `true` / `false` | `true` |
| `questLevel` | Sets the level of the quest | INTEGER | `0` |

[1] Custom Objectives are constructed using the following format:

1.  `- KILL_CUSTOM`, `- FETCH_ITEM` or `- DIALOG`: Used to set the type of objective this represents. `KILL_CUSTOM` indicates the quest involves killing a specific Custom Boss, `FETCH_ITEM` indicates that the quest involves getting a specific Custom Item and `DIALOG` indicates that the quest involves talking to an NPC.
2.  `filename=your_filename_here.yml` : Used to set the file name of the Custom Boss, the Custom Item that the player has to kill / obtain or the NPC they have to talk to.
3.  `amount=x` : Used to set the amount of Custom Bosses that must be killed or items that must be obtained.
4. `dialog=x` : Used to set the dialog of the NPC the player talks to.
6. `name=x`: Used to set the name of the quest objective, be it an NPC or a custom item. For visual purposes only.

_Please note that every Custom Objective field is separated with a `:` !_
