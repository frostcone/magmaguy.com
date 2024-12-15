[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Tiempos de espera de Elite Script

Los tiempos de espera establecen la cantidad de tiempo que debe transcurrir antes de que el jefe sea elegible para ejecutar tanto el mismo script como cualquier otro poder\*.

- nota: algunos poderes no se ven afectados actualmente por los tiempos de espera.

Los tiempos de espera tienen dos valores:

## local

`local` establece el tiempo, en ticks, antes de que el mismo script pueda volver a suceder. Ejemplo:

Ejemplo

```yaml
local: 60
```

Establece que el poder pueda volver a ejecutarse durante 3 segundos.

## global

`global` establece el tiempo, en ticks, antes de que cualquier otro script o poder pueda volver a suceder[1]. Ejemplo:

Ejemplo

```yaml
global: 20
```

Establece que todos los demás poderes no puedan comenzar durante 1 segundo.

[1] algunos de los poderes más antiguos no se ven afectados actualmente por esto, es un trabajo en progreso.

**Nota: al hacer que el tiempo de espera local sea más largo y el tiempo de espera global más corto, ¡puede garantizar que el jefe se alternará entre sus poderes disponibles!** Nunca haga que el tiempo de espera global sea más largo, y recomiendo dejar al menos un segundo de tiempo de espera local para dar a otros poderes la oportunidad de activarse.

Además, si su poder tiene una duración específica durante la cual está activo, debe utilizar este sistema para evitar que otros poderes se ejecuten simultáneamente y que potencialmente arruinen su poder.

### Ejecutar scripts una vez con tiempos de espera
Para asegurarse de que los scripts se activen solo una vez mientras siguen usando un [Evento]($language$/elitemobs/elitescript_events.md) que puede ocurrir varias veces durante una pelea, establezca el tiempo de espera local en un número alto, como `99999`. Este ejemplo demuestra el concepto:

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
En este escenario, `EliteMobDamagedByPlayerEvent` activa la acción `SET_ON_FIRE`. Sin tiempos de espera, la acción se activaría cada vez que el jugador golpea al mob.

Sin embargo, con un tiempo de espera local establecido en `99999`, la acción solo se activará cada `99999` ticks (83 minutos).

</div>

</details>

</div>
