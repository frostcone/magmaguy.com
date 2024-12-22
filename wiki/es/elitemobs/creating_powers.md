[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Sistema de Scripting de EliteMobs

La siguiente página cubre cómo crear Scripts de Elite.

¡Esta es una función avanzada y requiere un conocimiento profundo de EliteMobs!

**Nota: ¡Los Scripts de Elite se pueden agregar como archivos de poder o a archivos de jefes personalizados!** Si se
usan como archivos de poder, puede agregarlos como poderes normales a los jefes usando la
configuración [powers]($language$/elitemobs/creating_bosses.md&section=powers) de Jefes Personalizados, como de
costumbre.

## Agregando un EliteScript

Para comenzar a agregar un EliteScript a un jefe, agregue la siguiente entrada al archivo del jefe:

```yml
eliteScript:
```

**Nota: ¡Lo siguiente es extremadamente sensible a mayúsculas y espacios! ¡Asegúrese de que sus espacios, saltos de
línea y formato general coincidan con los ejemplos!**

Ahora que tiene declarado el inicio de su script, puede agregar su script específico. Para este ejemplo, vamos a crear
un script llamado `Example`:

```yml
eliteScript:
  Example:
```

Los EliteScripts tienen 5 secciones diferentes: `Events`, `Conditions`, `Zones`, `Actions` y `Cooldowns`. Solo `Actions`
es obligatorio.

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

Este script hace que un élite sea empujado hacia arriba cuando es golpeado por un jugador, y no lo volverá a hacer
durante 3 segundos (y evitará que otros poderes se activen durante 1 segundo debido a la configuración que tenemos
establecida en la sección Cooldowns).

Ahora que conoce el formato general de cómo se estructuran los scripts, ¡es hora de aprender lo que puede hacer con cada sección!

----

# Eventos

[Eventos]($language$/elitemobs/elitescript_events.md)

¡Haga clic en el enlace de arriba para aprender cómo usar eventos!

# Objetivos

[Objetivos]($language$/elitemobs/elitescript_targets.md)

¡Haga clic en el enlace de arriba para aprender cómo usar objetivos!

# Acciones

[Acciones]($language$/elitemobs/elitescript_actions.md)

¡Haga clic en el enlace de arriba para aprender cómo usar acciones!

# Zonas

[Zonas]($language$/elitemobs/elitescript_zones.md)

¡Haga clic en el enlace de arriba para aprender cómo usar zonas!

# Condiciones

[Condiciones]($language$/elitemobs/elitescript_conditions.md)

¡Haga clic en el enlace de arriba para aprender cómo usar condiciones!

# Tiempos de Enfriamiento

[Tiempos de Enfriamiento]($language$/elitemobs/elitescript_cooldowns.md)

¡Haga clic en el enlace de arriba para aprender cómo usar los tiempos de enfriamiento!

----

## Agregando múltiples EliteScripts

Puede tener múltiples acciones en un evento, pero ¿qué sucede si desea múltiples scripts en el mismo jefe? ¡Esto es tan
simple como crear una nueva entrada de script! Ampliemos el ejemplo anterior y agreguemos otro script:

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

En este ejemplo, hemos agregado un segundo script llamado Ejemplo2. El Ejemplo2 incendiará al jugador que resulte dañado
por el jefe, esto se debe a que el targetType está configurado
en [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br>El tiempo de enfriamiento
para este script está establecido en 200 ticks, lo que significa que el jefe solo podrá incendiar a los jugadores cada
10 segundos.

## Creando poderes independientes

Los poderes independientes están casi totalmente compuestos por el Script de Elite. Solo hay dos campos que son
opcionales. No olvide que para que los poderes independientes funcionen, deben colocarse en la
carpeta `~plugins/EliteMobs/powers`. </br>Ejemplo de poder independiente:

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

Igual que en cualquier otra parte del complemento, establece si el poder está habilitado.

### powerType

El tipo de poder establece cómo se asigna el poder. Los valores son:

- `UNIQUE`: El poder solo se aplicará a jefes personalizados que tengan el poder establecido en la sección de poderes.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: CUALQUIER élite podrá obtener estos poderes y contarán para un subconjunto específico de poderes.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Solo las élites del tipo de entidad
  adecuado podrán aparecer naturalmente con estos poderes y contarán para los poderes mayores.
