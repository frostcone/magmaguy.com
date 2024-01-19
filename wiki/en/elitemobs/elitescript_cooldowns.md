# Elite Script Cooldowns

Cooldowns set the amount of time that must pass before the boss is eligible to do a both the same script or any other power\*.

- note: some powers are not currently affected by cooldowns.

Cooldowns have two values:

## local

`local` sets the time, in ticks, before the same script can happen again. Example:

Example

```yaml
local: 60
```

Sets the power to be able to run again for 3 seconds.

## global

`global` sets the time, in ticks, before any other script or power can happen again\[1\]. Example:

Example

```yaml
global: 20
```

Sets all other powers to not be able to start for 1 second.

\[1\] some of the older powers are currently unaffected by this, it is a work in progress.

**Note: by making the local cooldown longer and the global cooldown shorter, you can guarantee that the boss will alternate between its available powers!** Never make the global cooldown longer, and I recommend leaving at least one second of local cooldown to give other powers a chance to trigger.

Additionally, if your power has a specific duration during which it is active, you should use this system to prevent other powers from running simultaneously and potentially ruining your power.