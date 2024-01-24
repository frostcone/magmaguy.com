If you have a question that isn't listed here, ***take a look at the sidebar*** to see if it has a page dedicated to it in the wiki!

# Run a command on Elite Mob death or give loot/rewards from other plugins on Elite Mob death?

[Information available here.]($language$/elitemobs/creating_bosses.md%ondeathcommands)

***

# Vault support?

[Information available here.]($language$/elitemobs/vault.md)

***

# PlaceholderAPI placeholders?

[Information available here.]($language$/elitemobs/placeholders.md)

***

# Use WorldGuard flags to allow EliteMobs in some places but not others?

[Information available here.]($language$/elitemobs/worldguard_flags.md)

***

# Can I make 100% of mobs that spawn be Elite Mobs?

It's a really bad idea. You can access the `MobCombatSettings.yml` configuration file and change `eliteMobsSpawnPercentage: 1` to accomplish this.

***


# Can I create custom powers?

[Information available here.]($language$/elitemobs/creating_powers.md)

***

# Can I create custom enchantments?

This is on our to do list and should be coming soon, but it is currently not possible.

***

# Can I create custom potion effects?

The only way to do this is to learn Java and writing them yourselves. At that point, you might as well modify the EliteMobs source code.

***

# How can I turn off wormhole particles?

To turn of the wormhole particles navigate to *~plugins\EliteMobs\Wormholes.yml* and then locate `noParticlesMode` and change the value to `false`.

***

# How can I unbind items?

The only way to remove soulbound from items is to use Unbind Scrolls. Read more about that [here]($language$/elitemobs/soulbind.md).

***

# How can I disable Super Mobs?

Super Mobs are farm animals which stack when 50 are in close proximity. If you would like to disable this feature you can go to *~plugins\EliteMobs\mobproperties* then go into any file that is prefixed with *super_* (example: *super_pig.yml*) and toggle `isEnabled` to `false`.

***