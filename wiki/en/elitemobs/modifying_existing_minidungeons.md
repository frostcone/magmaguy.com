# Modifying existing minidungeons

Based on popular request, this page goes over the basics of modifying existing Minidungeons. This is not a step-by-step guide, but a wider look at how the systems need to be modified. You will have to read the wiki pages on [Custom Bosses]($language$/elitemobs/creating_bosses.md) and [Custom Items]($language$/elitemobs/creating_items.md) in order to modify those values.

### Modifying dungeon difficulty

There are three reasons why you may want to modify the difficulty of the dungeons, and they are as follows:

### Modifying the damage/health multipliers of the bosses

This is the easiest modification to do. If you think that the bosses deal too little or too much damage, or that they have too little or too much health, you can modify the values associated to these modifiers in the boss files contained in the `custombosses` folder.

Example of values you would want to modify:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
More about boss stats [here]($language$/elitemobs/creating_bosses.md&section=healthmultiplier%healthmultiplier).

Please keep in mind that for a lot of powers the damage multiplier does not modify the damage applied by the power. Refer to the next section on how to modify powers.

### Modifying the powers of bosses

The main difficulty of EliteMobs is dealing with the various powers that bosses may have. Higher level bosses tend to have more and harder powers, and lower level bosses tend to have fewer and easier powers. Certain powers used together on the same boss make fights easier, and other powers put together can make the fight significantly harder.

Example of values you would want to modify:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
More about boss powers [here]($language$/elitemobs/creating_bosses.md&section=powers%powers).

Since there are too many power combinations to list here, you will have to learn how the powers work and playtest your encounters in order to find the sweet spot for what you think is an encounter that is neither too hard nor too easy.

### Modifying the level of the bosses

This is the most frequently asked question, and while it is possible to do it, it takes a few steps in order to make sure that you are adequately scaling your bosses up or down.

Example of values you would want to modify:
```yml
level: 21
```
More about boss levels [here]($language$/elitemobs/creating_bosses.md&section=level%level).

This takes a combination of both what is said about the damage / health multipliers, as bosses at lower / higher levels might need slightly different health and damage multipliers to make the fight feel right.

However, the most important aspect to consider here is the powers on the boss. Lower level and higher level bosses tend to have fairly different power sets depending on how hard the fight is meant to be. Having the same set of powers for a level 10 boss and a level 200 boss usually results in fights whose difficulty feels drastically different. Again, the only way to really find the sweet spot is to learn how the powers of the plugin work and playtesting them.

And last, **but not least!** You will probably want to tweak the custom loot. Most bosses in EliteMobs have custom loot, and if you are switching the level of the boss around, odds are that you will want to change the nature of the loot it drops.

Example of values you would want to modify:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
More about loot drops [here]($language$/elitemobs/loot_tables.md).

### Crediting / publishing modified content

Under EliteMobs you are free to post the dungeons you create on the appropriate channels to do so (Discord). However, if your creation is just a modification of an existing dungeon, your submission may be removed, especially if it's only a small tweak or if it contains or is derived from premium content (for obvious reasons).

You are free and welcome to modify any content that you have purchased or otherwise downloaded to adjust it to your server's needs for use within your own network, however for obvious reasons this does not provide you with redistribution rights.

We reserve the right to take down community submissions for any reason and at any time, though we would hate to actually have to do that.

### Further info

If you believe that this page should be further expanded upon, leave a suggestion on Discord saying what should be added to it. More info about the various systems mentioned here are present in the other wiki pages.