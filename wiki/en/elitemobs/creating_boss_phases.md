# Creating Boss Phases


Boss Phases are a sub-mechanic of Custom Bosses. The system behind these phases is so flexible and powerful that it requires its own dedicated explanation in order to make sure that you make good use of this feature.

### How do Boss Phases work?

Boss Phases can be added to any Custom Boss in EliteMobs using the following config format:

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Note: the boss your originally spawn which contains the info for all other phases will be referred to as the phase 1 boss. It should not be in the phases entry.**_

The basic intent behind this mechanic is to allow admins to change Custom Boss attributes during combat. By using the config format above, you are able to completely change configuration files from phase to phase, meaning that you can change 99.99% of attributes - like powers, damage multipliers, health multipliers, entity type, disguise, armor worn...

In order to achieve this, EliteMobs deletes your boss during combat and instantly replaces it with the version from the next phase. The process behind this is instant, so it tends to be pretty seamless - unless you want to make it flashy on purpose.

### Example

Take this example phase boss:

File: phase\_1\_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: STRAY
powers:
- attack_gravity.yml
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

File: phase\_2\_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: SKELETON
powers:
- attack_gravity.yml
- arrow_fireworks.yml
```

File: phase\_3\_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: WITHER_SKELETON
powers:
- arrow_rain
```

This constitutes a valid Phase Boss. If you spawn phase\_1\_boss.yml, it will spawn a Stray with the attributes listed above. After being damaged down to _60%_ of its health, it will immediately be replaced in the same location by the Custom Boss as formed in phase\_2\_boss.yml, since the configuration file states `- phase_2_boss.yml:0.60` (_phase\_2\_boss.yml is the file name for that custom boss, 0.60 is 60% health_). _Note that the phase 2 boss will spawn with 60% of its health, since that's when it changes to that phase._ The boss will have the powers listed on the phase\_2\_boss.yml file. Once the phase 2 boss is damaged down to 30% of its health, it spawns the boss set for phase 3. Note that the powers for phase 3 are unrelated to the ones from before - you can completely change powers between phases, just like nearly all other attributes.

## Advanced

### Inherited mechanics

Here's a list of things that do not change from phase to phase:

- The first Phase Boss in the chain determines which phases the boss will go through, meaning that you shouldn't put a phases entry for the other bosses in the phase.

- Threat table / Damage table stays the same, meaning loot distribution and the advanced aggro system are unaffected by a phase change

- Switching phases is based on % of health lost, which is preserved from phase to phase. This means that if your boss is set to enter phase 2 at 50% health, the boss that will appear to replace the phase 1 boss will still be at 50% health. This also means each phase can have completely different amounts of health without it causing issues.

- Phase Bosses revert to Phase 1 if they are healed back to full health via the default out of combat boss regen system

- Phase Bosses which are also Regional Bosses share the same leash radius and timeout mechanic across all phases, and will respawn as the phase 1 boss after the respawn timer is finished.


#### Warnings

Here's a list of mechanics that work in a way that may initially be counter-intuitive:

- If a Phase Boss gets killed during any phase, it will drop the loot from that phase. This means that if someone manages to kill a phase boss too quickly (1-shot), it will actually die and drop the loot that is configured for that boss file, which may not necessarily be the final phase. You can fix this by setting the loot table to be the same across all the boss files for this phase boss, or by making sure that your Phase Bosses have enough HP to the point where it is impossible to kill them in just a few hits. Alternatively, you can have special loot tables for people able to skip phases.

- Since Phase Bosses actually cause Custom Bosses to spawn during combat, they will do their entire spawning routine when they spawn. As such, be careful when it comes to spawn messages and commands that run on spawn. Additionally, phase bosses do not die if they change phases, they are simply swapped with something else. This means that commands that run on death will only run for the last Phase Boss, or if the player manages to skip a phase by dealing enough damage. Commands that run on spawn can be used to hook into phase changes. \*Note: \* the spawn message will not be sent again for the phase 1 boss if they respawn due to the phase boss being regenerated back to full health.

- Phase bosses can come mounted or cease to be mounted between phases. If the phase boss is killed before the mount is dead, the mount will persist through to the next phase. If the boss regenerates back to full, the mount is deleted and the boss becomes unmounted, unless it is configured to mount an entity during phase 1.

- Since new Custom Bosses are spawned between phases, the 1-time spawn mechanic resets between phases and on full heals.


### Tips & tricks

- You can use the fact that equipment and entity types can be changed throughout combat to make the boss look more and more (or less and less) dangerous throughout the fight

- While possible, unless there is a specific design goal in mind, it is probably best that the powers the Phase Boss has don't change too drastically between phases, as players are more likely to enjoy a progression that feels natural throughout the fight.

- You can use onSpawn commands to run commands between phases

- Phases can be used to switch the boss from melee to ranged mode and vice-versa

- Phase Bosses were built to be tough bosses with lots of HP. They are usually best served as final boss encounter for dungeons or as big World Bosses.

- When designing encounters, keep in mind that it is possible reinforcements will not be killed by players between phases.

- Bosses can have any number of phases you want, but the more phases they have, the more health they will need to make each phase matter.