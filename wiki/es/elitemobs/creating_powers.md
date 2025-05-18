[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Sistema de Scripting de EliteMobs

La siguiente página cubre cómo crear Scripts de Élite!

Esta es una característica avanzada y requiere un conocimiento profundo de EliteMobs.

**Nota: ¡Los Scripts de Élite se pueden añadir como archivos de poder o a archivos de jefes personalizados!** Si se usan como archivos de poder, puedes añadirlos como poderes normales a los jefes usando la configuración [powers](es/elitemobs/creating_bosses.md&section=powers) de Jefes Personalizados, como de costumbre.

## Añadiendo un EliteScript

Para empezar a añadir un EliteScript a un jefe, añade la siguiente entrada al archivo del jefe:

```yml
eliteScript:
```

**Nota: ¡Lo siguiente es extremadamente sensible a mayúsculas/minúsculas y espacios! Asegúrate de que tus espacios, saltos de línea y formato general coincidan con los ejemplos!**

Ahora que has declarado el inicio de tu script, puedes añadir tu script específico. Para este ejemplo, vamos a crear un script llamado `Example`:

```yml
eliteScript:
  Example:
```

Los EliteScripts tienen 5 secciones diferentes: `Events`, `Conditions`, `Zones`, `Actions` y `Cooldowns`. Solo `Actions` son obligatorias.

Veamos un ejemplo simple:

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

Este script hace que un élite sea empujado hacia arriba cuando es golpeado por un jugador, y no lo hará de nuevo durante 3 segundos (y detendrá la activación de otros poderes durante 1 segundo debido a la configuración que hemos establecido en la sección Cooldowns).

Ahora que conoces el formato general de cómo se estructuran los scripts, ¡es hora de aprender qué puedes hacer con cada sección!

----

# Eventos

[Eventos](es/elitemobs/elitescript_events.md)

¡Haz clic en el enlace de arriba para aprender a usar eventos!

# Objetivos

[Objetivos](es/elitemobs/elitescript_targets.md)

¡Haz clic en el enlace de arriba para aprender a usar objetivos!

# Acciones

[Acciones](es/elitemobs/elitescript_actions.md)

¡Haz clic en el enlace de arriba para aprender a usar acciones!

# Zonas

[Zonas](es/elitemobs/elitescript_zones.md)

¡Haz clic en el enlace de arriba para aprender a usar zonas!

# Condiciones

[Condiciones](es/elitemobs/elitescript_conditions.md)

¡Haz clic en el enlace de arriba para aprender a usar condiciones!

# Tiempos de Recarga

[Tiempos de Recarga](es/elitemobs/elitescript_cooldowns.md)

¡Haz clic en el enlace de arriba para aprender a usar tiempos de recarga!

----

## Añadiendo múltiples EliteScripts

Puedes tener múltiples acciones en un evento, pero ¿qué pasa si quieres múltiples scripts en el mismo jefe? ¡Esto es tan simple como crear una nueva entrada de script! Ampliemos el ejemplo anterior y añadamos otro script:

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
En este ejemplo hemos añadido un segundo script llamado Example2. Example2 prenderá fuego al jugador que sea dañado por el jefe, esto se debe a que targetType está configurado como [DIRECT_TARGET](es/elitemobs/elitescript_targets.md&section=target-types). </br>El tiempo de recarga para este script está configurado a 200 ticks, lo que significa que el jefe solo podrá prender fuego a los jugadores cada 10 segundos.

## Creando poderes independientes

Los poderes independientes están compuestos casi en su totalidad por el Elite Script. Solo hay dos campos que son opcionales. No olvides que para que los poderes independientes funcionen, deben colocarse en la carpeta `~plugins/EliteMobs/powers`. </br>Ejemplo de poder independiente:

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

Igual que en cualquier otra parte del plugin, establece si el poder está habilitado.

### powerType

El tipo de poder establece cómo se asigna el poder. Los valores son:

- `UNIQUE`: El poder solo se aplicará a los jefes personalizados que tengan el poder configurado en la sección powers.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: CUALQUIER élite podrá obtener estos poderes, y contarán para un subconjunto específico de poderes.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Solo las élites del tipo de entidad adecuado podrán aparecer naturalmente con estos poderes, y contarán para los poderes mayores.