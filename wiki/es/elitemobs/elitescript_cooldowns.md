# Enfriamientos de Elite Script

Los tiempos de reutilización establecen la cantidad de tiempo que debe pasar antes de que el jefe sea elegible para realizar el mismo script o cualquier otro poder\*.

- nota: algunos poderes actualmente no se ven afectados por los tiempos de reutilización.

Los tiempos de reutilización tienen dos valores:

## Local

`local` establece el tiempo, en ticks, antes de que el mismo script pueda volver a ocurrir. Ejemplo:

Ejemplo

```yaml
local: 60
```

Establece el poder para que pueda volver a ejecutarse durante 3 segundos.

## Global

`global` establece el tiempo, en ticks, antes de que cualquier otro script o poder pueda volver a ocurrir \[1\]. Ejemplo:

Ejemplo

```yaml
global: 20
```

Establece que todos los demás poderes no puedan iniciarse durante 1 segundo.

[1] algunos de los poderes más antiguos actualmente no se ven afectados por esto, es un trabajo en progreso.

**Nota: al hacer que el tiempo de reutilización local sea más largo y el tiempo de reutilización global más corto, ¡puedes garantizar que el jefe alternará entre sus poderes disponibles!** Nunca hagas que el tiempo de reutilización global sea más largo, y recomiendo dejar al menos un segundo de tiempo de reutilización local para dar a otros poderes la oportunidad de activarse.

Además, si tu poder tiene una duración específica durante la cual está activo, debes usar este sistema para evitar que otros poderes se ejecuten simultáneamente y potencialmente arruinen tu poder.

### Ejecutar scripts una vez con tiempos de reutilización
Para garantizar que los scripts se activen solo una vez mientras se sigue utilizando un [Evento]($language$/elitemobs/elitescript_events.md) que puede ocurrir varias veces durante una pelea, establece el tiempo de reutilización local en un número alto, como `99999`. Este ejemplo demuestra el concepto:

<div align="center">

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  SetMeOnFireOnlyOnce:
    Eventos:
    - EliteMobDamagedByPlayerEvent
    Acciones:
    - action: SET_ON_FIRE
      duration: 60
      Target:
      targetType: DIRECT_TARGET
    Enfriamientos:
    local: 99999
    global: 50
```
En este escenario, `EliteMobDamagedByPlayerEvent` activa la acción `SET_ON_FIRE`. Sin tiempos de reutilización, la acción se activaría cada vez que el jugador golpea a la mafia.

Sin embargo, con un tiempo de reutilización local establecido en `99999`, la acción solo se activará cada `99999` ticks (83 minutos).

</div>

</details>

</div>


