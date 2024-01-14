[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs Scripting system

The following page covers how to Create Elite Scripts!

This is an advanced feature and requires some in-depth knowledge of EliteMobs.

**Note: Elite Scripts can be added as power files or to custom boss files!** If used as power files, you can add them as normal powers to bosses using the `powers` configuration setting of Custom Bosses, as per usual.

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
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

This script makes an elite jump up when hit by a player, and will not do so again for 3 seconds (and will stop other powers from triggering for 1 second).

Now that you know the general format of how scripts are structured, it's time to learn what you can do with each section!

----

# [Events](https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Events)

Click on the link above to learn how to use events!

# [Targets](https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Targets)

Click on the link above to learn how to use targets!

# [Actions](https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions)

Click on the link above to learn how to use actions!

# [Zones](https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones)

Click on the link above to learn how to use zones!

# [Conditions](https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Conditions)

Click on the link above to learn how to use conditions!

# [Cooldowns](https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Cooldowns)

Click on the link above to learn how to use cooldowns!

----

## Adding multiple EliteScripts

You can have multiple actions on an event, but what if you want multiple scripts on the same boss? This is as simple as creating a new script entry! Example coming soon.

## Making powers

Powers are almost entirely composed by the Elite Script. There are only two fields that are optional. Example:

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

- `UNIQUE`: The power will only be applied to custom bosses that have the power set in the powers section
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: Any elite will be able to get these powers, and they will count to a specific subset of powers
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Only elites of the adequate entity type will be able to spawn naturally with these powers, and they will count towards major powers