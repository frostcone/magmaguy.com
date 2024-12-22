# Tiempos de Recarga de Elite Script

Los tiempos de recarga establecen la cantidad de tiempo que debe pasar antes de que el jefe sea elegible para realizar
tanto el mismo script como cualquier otro poder\*.

- nota: algunos poderes no se ven afectados actualmente por los tiempos de recarga.

Los tiempos de recarga tienen dos valores:

## local

`local` establece el tiempo, en ticks, antes de que el mismo script pueda volver a suceder. Ejemplo:

Ejemplo

```yaml
local: 60
```

Establece el poder para que pueda volver a ejecutarse en 3 segundos.

## global

`global` establece el tiempo, en ticks, antes de que cualquier otro script o poder pueda volver a suceder\[1\]. Ejemplo:

Ejemplo

```yaml
global: 20
```

Establece que todos los demás poderes no puedan iniciarse durante 1 segundo.

[1] algunos de los poderes más antiguos no se ven afectados actualmente por esto, es un trabajo en progreso.

**Nota: al hacer que el tiempo de recarga local sea más largo y el tiempo de recarga global más corto, ¡puedes
garantizar que el jefe alternará entre sus poderes disponibles!** Nunca hagas que el tiempo de recarga global sea más
largo, y recomiendo dejar al menos un segundo de tiempo de recarga local para darles a otros poderes la oportunidad de
activarse.

Además, si tu poder tiene una duración específica durante la cual está activo, debes utilizar este sistema para evitar
que otros poderes se ejecuten simultáneamente y potencialmente arruinen tu poder.

### Ejecutar Scripts una Vez con Tiempos de Recarga

Para asegurar que los scripts se activen solo una vez mientras se utiliza
un [Evento]($language$/elitemobs/elitescript_events.md) que puede ocurrir varias veces durante una pelea, establece el
tiempo de recarga local en un número alto, como `99999`. Este ejemplo demuestra el concepto:

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  SetMeOnFireOnlyOnce:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      duration: 60
      Target:
      targetType: DIRECT_TARGET
    Cooldowns:
    local: 99999
    global: 50
```

En este escenario, el `EliteMobDamagedByPlayerEvent` activa la acción `SET_ON_FIRE`. Sin tiempos de recarga, la acción
se activaría cada vez que el jugador golpeara al mob.

Sin embargo, con un tiempo de recarga local establecido en `99999`, la acción solo se activará cada `99999` ticks (83
minutos).

</div>

</details>

</div>
