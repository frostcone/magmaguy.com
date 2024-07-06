[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Sistema de scripting de EliteMobs

¡La siguiente página cubre cómo crear scripts de élite!

Esta es una función avanzada y requiere un conocimiento profundo de EliteMobs.

**Nota: ¡Los scripts de élite se pueden agregar como archivos de poder o a archivos de jefe personalizados!** Si se utilizan como archivos de poder, puedes agregarlos como poderes normales a los jefes utilizando la configuración de configuración de [poderes]($language$/elitemobs/creating_bosses.md&section=powers) de los jefes personalizados, como de costumbre.

## Agregar un EliteScript

Para empezar a agregar un EliteScript a un jefe, agrega la siguiente entrada al archivo de jefe:

```yml
eliteScript:
```

**Nota: ¡Lo siguiente es extremadamente sensible a mayúsculas y espacios! ¡Asegúrate de que tus espacios, saltos de línea y formato general coincidan con los ejemplos!**

Ahora que has declarado el inicio de tu script, puedes agregar tu script específico. Para este ejemplo, vamos a crear un script llamado `Ejemplo`:

```yml
eliteScript:
  Ejemplo:
```

EliteScripts tiene 5 secciones diferentes: `Eventos`, `Condiciones`, `Zonas`, `Acciones` y `Enfriamientos`. Solo las `Acciones` son obligatorias.

Echemos un vistazo a un ejemplo simple:

```yml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Enfriamientos:
      local: 60
      global: 20
```

Este script hace que una élite sea empujada hacia arriba cuando un jugador la golpea, y no lo volverá a hacer durante 3 segundos (y evitará que se activen otros poderes durante 1 segundo debido a la configuración que hemos establecido en la sección Enfriamientos).

¡Ahora que conoces el formato general de cómo se estructuran los scripts, es hora de aprender lo que puedes hacer con cada sección!

----

# Eventos

[Eventos]($language$/elitemobs/elitescript_events.md)

¡Haz clic en el enlace de arriba para aprender a usar eventos!

# Objetivos

[Objetivos]($language$/elitemobs/elitescript_targets.md)

¡Haz clic en el enlace de arriba para aprender a usar objetivos!

# Acciones

[Acciones]($language$/elitemobs/elitescript_actions.md)

¡Haz clic en el enlace de arriba para aprender a usar acciones!

# Zonas

[Zonas]($language$/elitemobs/elitescript_zones.md)

¡Haz clic en el enlace de arriba para aprender a usar zonas!

# Condiciones

[Condiciones]($language$/elitemobs/elitescript_conditions.md)

¡Haz clic en el enlace de arriba para aprender a usar condiciones!

# Enfriamientos

[Enfriamientos]($language$/elitemobs/elitescript_cooldowns.md)

¡Haz clic en el enlace de arriba para aprender a usar enfriamientos!

----

## Agregar múltiples EliteScripts

Puedes tener varias acciones en un evento, pero ¿qué sucede si quieres varios scripts en el mismo jefe? ¡Esto es tan simple como crear una nueva entrada de script! Ampliemos el ejemplo anterior y agreguémosle otro script:

```yml
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Enfriamientos:
      local: 60
      global: 20
  Ejemplo2:
    Eventos:
    - PlayerDamagedByEliteMobEvent
    Acciones:
    - action: SET_ON_FIRE
      Target:
        targetType: DIRECT_TARGET
    Enfriamientos:
      local: 200
      global: 60
```
En este ejemplo, hemos agregado un segundo script llamado Ejemplo2. El ejemplo 2 prenderá fuego al jugador que sea dañado por el jefe, esto se debe a que `targetType` está establecido en [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br>El tiempo de reutilización de este script está establecido en 200 ticks, lo que significa que el jefe solo podrá prender fuego a los jugadores cada 10 segundos.

## Hacer poderes independientes

Los poderes independientes están compuestos casi en su totalidad por Elite Script. Solo hay dos campos que son opcionales. No olvides que para que los poderes independientes funcionen, deben colocarse en la carpeta `~plugins/EliteMobs/powers`. </br> Ejemplo de poder independiente:

```yml
isEnabled: true
powerType: UNIQUE
eliteScript:
  Ejemplo:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Enfriamientos:
      local: 60
      global: 20
```

### isEnabled

Igual que en cualquier otro lugar del complemento, establece si el poder está habilitado.

### powerType

El tipo de poder establece cómo se asigna el poder. Los valores son:

- `UNIQUE`: el poder solo se aplicará a los jefes personalizados que tengan el poder establecido en la sección de poderes.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: CUALQUIER élite podrá obtener estos poderes, y contarán para un subconjunto específico de poderes.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Solo las élites del tipo de entidad adecuado podrán generar naturalmente con estos poderes, y contarán para los poderes principales.



