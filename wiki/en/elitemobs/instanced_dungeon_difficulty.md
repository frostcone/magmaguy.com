Instanced dungeons have a special setting to easily define different difficulties for the dungeon.

# How it works

Difficulties are modeled in part after Final Fantasy 14's level sync system.

Elite armor and weapons get specific elite damage and elite defense based on their level, as you can see on items. When in an instanced dungeon with a difficulty on, the level of item will be temporarily and invisibly lowered to match the level sync.

Here is a specific example: a level 100 sword does 100 damage unenchanted. If a player is in an instanced dungeon with a difficulty that level syncs gear to level 50, the sword will act as a level 50 sword and do 50 damage.

However, if that sword has level 10 sharpness, it will still add the same amount of damage on top of the base damage.

This means that, in instanced dungeons with difficulties, what matters is not so much the level of the gear but the quality of the gear. Players seeking to beat the mythic difficulty will have to work towards getting high quality items from other instanced dungeons and possibly heavily interact with the (upcoming) item upgrade system.

This also makes it nearly impossible for veteran players to stomp on old high-difficulty content and provides an incentive to do it even if their level is well beyond the level of the dungeon.

# Party system

To account for player parties, bosses are designed with specific powers which get more dangerous as more players join the arena. Additionally, bosses get a non-linear health boost amount as more players join the instance.

# How to define a difficulty

Difficulties are defined in the `dungeonpackager` folder in the dungeon package file of instanced dungeons.

Let's take a look at an example:

```yml
difficulties:
- levelSync: 60
  name: normal
- levelSync: 50
  name: hard
- levelSync: 40
  name: mythic
```

This sets three difficulties. Difficulties have two mandatory optional fields, `name` and `levelSync`. 

The name is the name of the difficulty, as will appear in the difficulty setting in-game. This can have any name.

The level sync sets the item level cap for the instanced dungeon, as explained above in this page.

You can have as many or as few difficulties defined as you want. Simply add or remove entries to the difficulties setting using the same format.


## Powers based on difficulty

It is possible to configure bosses to only have powers at specific difficulties.  Let's look at an example:

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Note: this is a part of the configuration file of the custom boss!**

In this case, the boss will only have fire invulnerability for difficulties with the ID `1` and `2`.

## Loot based on difficulty

It is possible to configure bosses to drop loot specific to an instanced dungeon difficulty. Let's look at an example:

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```


**Note: this is a part of the configuration file of the custom boss!**

In this case, the boss will only drop the loot `himiko_boss_drop_axe_tank_normal.yml` for difficulty `0` and has 5% chance of doing so.