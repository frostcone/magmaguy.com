```markdown
# Tiempos de Recarga (Cooldowns) de Scripts de Élite

Los tiempos de recarga (cooldowns) establecen la cantidad de tiempo que debe pasar antes de que el jefe sea elegible para realizar tanto el mismo script como cualquier otra habilidad (power)\*.

- nota: algunas habilidades (powers) no se ven afectadas actualmente por los tiempos de recarga.

Los tiempos de recarga tienen dos valores:

## local

`local` establece el tiempo, en ticks, antes de que el mismo script pueda ocurrir de nuevo. Ejemplo:

Ejemplo

```yaml
local: 60
```

Establece que la habilidad (power) pueda ejecutarse de nuevo durante 3 segundos.

## global

`global` establece el tiempo, en ticks, antes de que cualquier otro script o habilidad (power) pueda ocurrir de nuevo\[1\]. Ejemplo:

Ejemplo

```yaml
global: 20
```

Establece que todas las demás habilidades (powers) no puedan comenzar durante 1 segundo.

\[1\] algunas de las habilidades (powers) más antiguas no se ven afectadas actualmente por esto, es un trabajo en progreso.

**Nota: al hacer que el tiempo de recarga local sea más largo y el tiempo de recarga global sea más corto, ¡puedes garantizar que el jefe alternará entre sus habilidades (powers) disponibles!\*\* Nunca hagas que el tiempo de recarga global sea más largo, y recomiendo dejar al menos un segundo de tiempo de recarga local para dar a otras habilidades (powers) la oportunidad de activarse.

Además, si tu habilidad (power) tiene una duración específica durante la cual está activa, deberías usar este sistema para evitar que otras habilidades (powers) se ejecuten simultáneamente y potencialmente arruinen tu habilidad (power).

### Ejecutar Scripts Una Vez con Tiempos de Recarga
Para asegurar que los scripts se activen solo una vez mientras se sigue utilizando un [Evento](es/elitemobs/elitescript_events.md) que puede ocurrir múltiples veces durante una pelea, establece el tiempo de recarga local a un número alto, como `99999`. Este ejemplo demuestra el concepto:

<div align="center">

<details>

<summary>**Ejemplo**</summary>

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
En este escenario, el `EliteMobDamagedByPlayerEvent` activa la acción `SET_ON_FIRE`. Sin tiempos de recarga, la acción se activaría cada vez que el jugador golpea al mob.

Sin embargo, con un tiempo de recarga local establecido en `99999`, la acción solo se activará cada `99999` ticks (83 minutos).

</div>

</details>

</div>
```