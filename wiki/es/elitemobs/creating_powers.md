[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Sistema de scripts EliteMobs

La siguiente página cubre cómo crear scripts Elite!

Esta es una característica avanzada y requiere algunos conocimientos en profundidad de EliteMobs.

**Nota: Los scripts Elite pueden ser añadidos como archivos de poder o a archivos de jefes personalizados!** Si se usan como archivos de poder, puedes añadirlos como poderes normales a los jefes usando la configuración de Personalizar Jefes [powers]($language$/elitemobs/creating_bosses.md&section=powers), como de costumbre.

## Añadir un EliteScript

Para empezar a añadir un EliteScript a un jefe, añade la siguiente entrada al archivo del jefe:

```yml
eliteScript:
```

**Nota: Lo siguiente es extremadamente sensible a mayúsculas y espacios! Asegúrate de que tus espacios, saltos de línea y formato en general coinciden con los ejemplos!**

Ahora que tienes declarado el inicio de tu script, puedes añadir tu script específico. Para este ejemplo, vamos a crear un script llamado `Example`:

```yml
eliteScript:
  Example:
```

Los scripts Elite tienen 5 secciones diferentes: `Events`, `Conditions`, `Zones`, `Actions` y `Cooldowns`. Solo `Actions` son obligatorias.

Echemos un vistazo a un ejemplo simple:

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

Este script hace que un elite sea empujado hacia arriba cuando es golpeado por un jugador, y no lo hará de nuevo durante 3 segundos (y evitará que otros poderes se activan durante 1 segundo debido a la configuración que hemos establecido en la sección de Cooldowns).

Ahora que conoces el formato general de cómo se estructuran los scripts, es hora de aprender qué puedes hacer con cada sección!

----

# Events

[Events]($language$/elitemobs/elitescript_events.md)

Haz clic en el enlace de arriba para aprender cómo usar eventos!

# Targets

[Targets]($language$/elitemobs/elitescript_targets.md)

Haz clic en el enlace de arriba para aprender cómo usar objetivos!

# Actions

[Actions]($language$/elitemobs/elitescript_actions.md)

Haz clic en el enlace de arriba para aprender cómo usar acciones!

# Zones

[Zones]($language$/elitemobs/elitescript_zones.md)

Haz clic en el enlace de arriba para aprender cómo usar zonas!

# Conditions

[Conditions]($language$/elitemobs/elitescript_conditions.md)

Haz clic en el enlace de arriba para aprender cómo usar condiciones!

# Cooldowns

[Cooldowns]($language$/elitemobs/elitescript_cooldowns.md)

Haz clic en el enlace de arriba para aprender cómo usar enfriamientos!

----

## Añadiendo múltiples EliteScripts

Puedes tener múltiples acciones en un evento, pero ¿qué pasa si quieres múltiples scripts en el mismo jefe? ¡Es tan simple como crear una nueva entrada de script! Vamos a ampliar el ejemplo anterior y añadir otro script a ello:

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
En este ejemplo hemos añadido un segundo script llamado Example2. Example2 pondrá en llamas al jugador que sea dañado por el jefe, esto se debe a que targetType está configurado como [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br> El enfriamiento para este script está configurado a 200 ticks, lo que significa que el jefe solo podrá prender fuego a los jugadores cada 10 segundos.

## Haciendo poderes independientes

Los poderes independientes están casi enteramente compuestos por el script Elite. Solo hay dos campos que son opcionales. No olvides que para que los poderes independientes funcionen deben ser colocados en la carpeta `~plugins/EliteMobs/powers`. </br>Ejemplo de poder independiente:

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

Al igual que en todos los demás lugares del plugin, establece si el poder está habilitado.

### powerType

El tipo de poder establece cómo se asigna el poder. Los valores son:

- `UNIQUE`: El poder sólo se aplicará a los jefes personalizados que tengan el poder establecido en la sección de poderes.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: CUALQUIER elite podrá obtener estos poderes, y contarán para un subconjunto específico de poderes.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Sólo las elites del tipo de entidad adecuado podrán aparecer naturalmente con estos poderes, y contarán hacia los poderes mayores.
