    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_BORDER
        repeatEvery: 1
        times: 200
```

If we instead changed `filter: ELITE` to `filter: PLAYER`, only players would be targeted. Finally, if we did not define any filter at all, it will only target any kind of entities (players, animals, elites...).

Note that most abilities that use a zone will by default use players. This is usually what makes the most sense.

</details>

</div>
