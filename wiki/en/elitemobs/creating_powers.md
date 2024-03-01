[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs Scripting system

The following page covers how to Create Elite Scripts!

This is an advanced feature and requires some in-depth knowledge of EliteMobs.

**Note: Elite Scripts can be added as power files or to custom boss files!** If used as power files, you can add them as normal powers to bosses using the [powers]($language$/elitemobs/creating_bosses.md&section=powers%powers) configuration setting of Custom Bosses, as per usual.

## Adding an EliteScript

To start adding an EliteScript to a boss, add the following entry to the boss file:

```yml
eliteScript:
```

**Note: The following is extremely case and space sensitive! Make sure your spaces, line breaks and overall formatting matches the examples!**

Now that you have your script start declared, you can add your specific script. For this example, we're going to create a script called `Example`:

```yml
eliteScript:
  Example:
```

EliteScripts have 5 different sections: `Events`, `Conditions`, `Zones`, `Actions` and `Cooldowns`. Only `Actions` are mandatory.

Let's take a look at a simple example:

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
```

This script makes an elite get pushed up when hit by a player, and will not do so again for 3 seconds (and will stop other powers from triggering for 1 second due to the settings we have set in the Cooldowns section).

Now that you know the general format of how scripts are structured, it's time to learn what you can do with each section!

----

# Events

[Events]($language$/elitemobs/elitescript_events.md)

Click on the link above to learn how to use events!

# Targets

[Targets]($language$/elitemobs/elitescript_targets.md)

Click on the link above to learn how to use targets!

# Actions

[Actions]($language$/elitemobs/elitescript_actions.md)

Click on the link above to learn how to use actions!

# Zones

[Zones]($language$/elitemobs/elitescript_zones.md)

Click on the link above to learn how to use zones!

# Conditions

[Conditions]($language$/elitemobs/elitescript_conditions.md)

Click on the link above to learn how to use conditions!

# Cooldowns

[Cooldowns]($language$/elitemobs/elitescript_cooldowns.md)

Click on the link above to learn how to use cooldowns!

----

## Adding multiple EliteScripts

You can have multiple actions on an event, but what if you want multiple scripts on the same boss? This is as simple as creating a new script entry! Let us expand on the previous example and add another script to it:

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
  Example2:
    Events:
    - PlayerDamagedByEliteMobEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: DIRECT_TARGET
    Cooldowns:
      local: 200
      global: 60
```
In this example we have added a second script called Example2. Example2 will set-on-fire the player that gets damaged by the boss, this is due to the targetType being set to [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br>The cooldown for this script is set to 200 ticks meaning that the boss will only be able to set-on-fire players every 10 seconds.

## Making standalone powers

Standalone powers are almost entirely composed by the Elite Script. There are only two fields that are optional. Do not forget that for the standalone powers to work they must be placed in the `~plugins/EliteMobs/powers` folder. </br>Standalone power example:

```yml
isEnabled: true
powerType: UNIQUE
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

### isEnabled

Same with everywhere else in the plugin, sets if the power is enabled.

### powerType

Power type sets how the power gets assigned. The values are:

- `UNIQUE`: The power will only be applied to custom bosses that have the power set in the powers section.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: ANY elite will be able to get these powers, and they will count to a specific subset of powers.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Only elites of the adequate entity type will be able to spawn naturally with these powers, and they will count towards major powers.