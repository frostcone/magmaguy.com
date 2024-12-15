[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Sistema de secuencias de comandos de EliteMobs

¡La siguiente página cubre cómo crear secuencias de comandos de élite!

Esta es una característica avanzada y requiere un conocimiento profundo de EliteMobs.

**Nota: ¡Las secuencias de comandos de élite se pueden agregar como archivos de poder o a archivos de jefes personalizados!** Si se usan como archivos de poder, puede agregarlos como poderes normales a los jefes usando la configuración de [poderes]($language$/elitemobs/creating_bosses.md&section=powers) de los jefes personalizados, como de costumbre.

## Agregar una secuencia de comandos de élite

Para comenzar a agregar una secuencia de comandos de élite a un jefe, agregue la siguiente entrada al archivo del jefe:

```yml
eliteScript:
```

**Nota: ¡Lo siguiente es extremadamente sensible a mayúsculas y espacios! Asegúrese de que sus espacios, saltos de línea y formato general coincidan con los ejemplos!**

Ahora que tiene su inicio de script declarado, puede agregar su script específico. Para este ejemplo, vamos a crear un script llamado `Ejemplo`:

```yml
eliteScript:
  Ejemplo:
```

EliteScripts tiene 5 secciones diferentes: `Eventos`, `Condiciones`, `Zonas`, `Acciones` y `Tiempos de Espera`. Solo `Acciones` es obligatorio.

Echemos un vistazo a un ejemplo sencillo:

```yml
eliteScript:
  Ejemplo:
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

Este script hace que un élite sea empujado hacia arriba cuando es golpeado por un jugador, y no lo volverá a hacer durante 3 segundos (e impedirá que otros poderes se activen durante 1 segundo debido a la configuración que hemos establecido en la sección de tiempos de espera).

Ahora que conoce el formato general de cómo se estructuran los scripts, ¡es hora de aprender lo que puede hacer con cada sección!

---

# Eventos

[Eventos]($language$/elitemobs/elitescript_events.md)

¡Haga clic en el enlace de arriba para aprender a usar eventos!

# Objetivos

[Objetivos]($language$/elitemobs/elitescript_targets.md)

¡Haga clic en el enlace de arriba para aprender a usar objetivos!

# Acciones

[Acciones]($language$/elitemobs/elitescript_actions.md)

¡Haga clic en el enlace de arriba para aprender a usar acciones!

# Zonas

[Zonas]($language$/elitemobs/elitescript_zones.md)

¡Haga clic en el enlace de arriba para aprender a usar zonas!

# Condiciones

[Condiciones]($language$/elitemobs/elitescript_conditions.md)

¡Haga clic en el enlace de arriba para aprender a usar condiciones!

# Tiempos de espera

[Tiempos de espera]($language$/elitemobs/elitescript_cooldowns.md)

¡Haga clic en el enlace de arriba para aprender a usar los tiempos de espera!

---

## Agregar múltiples secuencias de comandos de élite

Puede tener varias acciones en un evento, pero ¿qué sucede si desea varios scripts en el mismo jefe? ¡Esto es tan simple como crear una nueva entrada de script! Ampliemos el ejemplo anterior y agreguemos otro script:

```yml
eliteScript:
  Ejemplo:
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
  Ejemplo2:
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
En este ejemplo, hemos agregado un segundo script llamado Ejemplo2. Ejemplo2 hará que el jugador que reciba daño del jefe se incendie, esto se debe a que el targetType se establece en [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br>El tiempo de espera para este script está establecido en 200 ticks, lo que significa que el jefe solo podrá incendiar a los jugadores cada 10 segundos.

## Creación de poderes independientes

Los poderes independientes están compuestos casi en su totalidad por el script de élite. Solo hay dos campos que son opcionales. No olvide que para que los poderes independientes funcionen, deben colocarse en la carpeta `~plugins/EliteMobs/powers`. </br>Ejemplo de poder independiente:

```yml
isEnabled: true
powerType: UNIQUE
eliteScript:
  Ejemplo:
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

Al igual que en todas partes del plugin, establece si el poder está habilitado.

### powerType

El tipo de poder establece cómo se asigna el poder. Los valores son:

- `UNIQUE`: El poder solo se aplicará a los jefes personalizados que tengan el poder establecido en la sección de poderes.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: CUALQUIER élite podrá obtener estos poderes y contarán para un subconjunto específico de poderes.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Solo las élites del tipo de entidad adecuado podrán aparecer de forma natural con estos poderes, y contarán para los poderes principales.
