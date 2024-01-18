This is a comprehensive breakdown of how the health / damage scales in EliteMobs. It should be used as a reference when designing dungeons.

It's focused on Custom Bosses, but normal Elites scale in the same way.

# Before you start!

You don't need to read all of this if you just want to do quick tweaks. Skip to the "Using this data for dungeons" section to see very simplified quick maths and a series of premade recommended settings!

# Scaling (in general)

In EliteMobs, by default, bosses get 7 max health and deal 1 more damage per level.

Player weapons deal 7 more damage per level, and armor reduces 0.25 damage per level (but there are 4 armor slots that contribute to the total, which amounts to 1). Finally, players gain maximum health as they unlock the prestige ranks.

# Damage dealt by Custom Bosses

The damage formula for Custom Bosses is:

```
( ( ( baseline damage / 2 ) * custom boss damage multiplier) + level of the boss - player armor reduction ) * global damage multiplier
```

## baseline damage

This can be one of two things:

1.  The value in mobproperties for the entity type of the boss.
2.  Since this can be hard to keep in mind to while designing dungeons and other content, Custom Bosses can have the normalizedCombat field, which applies a standard 5 damage, which has the best scaling for EliteMobs progression. In a later update, normalized combat will be enabled by default for all regional bosses.

## custom boss damage multiplier

This is the damage multiplier in the Custom Boss file. Defaults to 1.

## level of the boss

As you might guess, this is just the level of the boss. This means that bosses deal one more damage per level.

## player armor reduction

Player armor reduces 0.25 damage per level, and there are 4 armor slots that can contribute to the total. Additionally, each level of projectile protection reduces projectile damage by 0.025.

## global damage multiplier

This is the multiplier in MobCombatSettings. Defaults to 1.

# Maximum health of Custom Bosses

The health formula for Custom Bosses is:

```
( baseline max health + level of the boss * 7 ) * custom boss health multiplier
```

## baseline max health

This can be one of two things:

1.  The default maximum health of the vanilla Minecraft entity.
2.  Since this can be hard to keep in mind to while designing dungeons and other content, Custom Bosses can have the normalizedCombat field, which applies a standard 7 health, which has the best scaling for EliteMobs progression. Normalized combat is enabled by default for all regional bosses.

## level

This is the level of the boss

## custom boss health multiplier

This is the multiplier in the Custom Boss file. Defaults to 1.

# Damage dealt to Custom Bosses

The damage formula that players hit Custom Bosses with has too many small variables like critical strikes and cooldowns to explain in-depth here. A simplified version looks like this:

```
damage = Level of the weapon
```

This is what the damage should roughly look like in an ideal average setting.

# Using this data for dungeons

**NOTE: THIS ASSUMES YOU'RE USING THE normalizedCombat VALUES!** Those values were specifically made for balancing dungeons more easily.

Part of a boss' difficulty is making it have the appropriate health and damage for the encounter. However, keep in mind that this is only a part of it, and that powers are just as important.

The following is presented in the correct format for the Custom Boss file.

## The easy quick maths

1.  EliteMobs has 7 hits as the amount of hits that a player with a weapon of the same level as a boss takes to kill it, assuming no modifiers.
    1.  This means that a 2.0 multiplier means players will have to hit the boss 2 x 7 = 14 times. 0.5 means 7 / 2 = 3.5 .
2.  The baseline normalizedCombat damage, assuming the player's armor is the same level as the boss, is 2.5 damage or 1.25 hearts of damage per hit.
    1.  This means that a 2.0 multiplier means that players will lose 3 hearts per hit, and a 0.5 multiplier will make players lose 0.75 hearts per hit.

**Keep in mind that players tend to prioritize weapons, and often end up with much worse armor than weapons. Unless you design very specific types of arenas with range combat, you probably don't want to deal a lot of damage per hit.** Playtest your content!

## Creating an average dungeon mob

With the scaling of normalizedCombat, you can apply a very minimalistic configuration:

```yaml
normalizedCombat: true
healthMultiplier: 1.0
damageMultiplier: 1.0
```

**Note: since 1.0 is the default, this means you can also just not define anything**.

## Creating trash packs

Trash packs are numerous but not very dangerous:

```yaml
normalizedCombat: true
healthMultiplier: 0.75
damageMultiplier: 0.5
```

## Creating reinforcements

Reinforcements should die very easily, but pose a danger damage-wise (these values recommended for 4+ melee entities, actual use may vary):

```yaml
normalizedCombat: true
healthMultiplier: 0.25
damageMultiplier: 0.8
```

## Creating minibosses

Minibosses should hold their ground, and pose a mechanic challenge to players. It should be a test of skill that lasts for a little while, but not something extremely deadly:

```yaml
normalizedCombat: true
healthMultiplier: 2.0 - 3.0
damageMultiplier: 2.0
```

## Creating bosses

Bosses are a real challenge, the conclusion of a buildup in a dungeon and a real test of skill with everything on the line. Encounters should be long and death should be a present threat.

```yaml
normalizedCombat: true
healthMultiplier: 4.0-6.0
damageMultiplier: 2.0
```

## Creating World Bosses

World bosses are dangerous, but most of all they have a lot of health and summon a lot of reinforcements / have a lot of area of effect attacks. These are meant to be fought by large groups of players over the longest amount of time an elite encounter should last. They aren't very deadly, but have a lot of mechanics that can overwhelm underprepared players.

```yaml
normalizedCombat: true
healthMultiplier: 30.0
damageMultiplier: 1.5
```