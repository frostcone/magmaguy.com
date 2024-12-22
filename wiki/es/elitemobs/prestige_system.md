# ¿Qué es el Sistema de Prestigio?

El Sistema de Prestigio recompensa a los jugadores por restablecer su rango, objetos y moneda de EliteMobs (en resumen,
toda su progresión) con dos beneficios: **grandes bonificaciones fijas** y **presumir**.

Es posible, y se recomienda, poner los rangos de los jugadores como prefijos en el chat mediante el uso de Placeholder
API en combinación con cualquier plugin de chat que sea compatible con Placeholder API.

Uno de los propósitos de esto es permitir que los jugadores se distingan claramente por no solo haber superado toda la progresión de EliteMobs, sino que potencialmente lo hayan hecho varias veces, estableciendo su estado como un jugador de élite muy genial.

## ¿Cómo pueden los jugadores desbloquear el Sistema de Prestigio?

Una vez que los jugadores hayan alcanzado el rango máximo del gremio, se les dará la opción de restablecer su progreso y
obtener Prestigio. Esto se hace a través del menú de rango del gremio o hablando con el NPC del Asistente del Gremio en
el Gremio de Aventureros.

<div align="center">

![prestige_guild_rank.jpg](../../../img/wiki/prestige_guild_rank.jpg)

</div>

## ¿Cuál es el costo del Sistema de Prestigio?

**Todo.** Al menos, todo lo relacionado con EliteMobs. El rango actual del gremio del jugador se restablecerá a 1, la
moneda se borrará y **todos los objetos perderán su vinculación con el jugador**, lo que significa que cuando el jugador
intente equiparlo, se caerá y no podrá volver a recogerlo.

Es bastante gracioso ver que esto sucede todo a la vez cuando un jugador completamente equipado activa el prestigio
mientras tiene todo el equipo equipado, haciendo que parezca que está naciendo de nuevo.

## ¿Cuáles son las grandes bonificaciones fijas del Sistema de Prestigio?

Activar el sistema de prestigio desbloqueará lo siguiente en diferentes cantidades, según el nivel de prestigio y el
nivel de rango del gremio:

- Salud máxima (a partir del prestigio 1)
- Probabilidad de crítico (a partir del prestigio 2)
- Probabilidad de esquivar (a partir del prestigio 3)

Además, los jugadores obtendrán más dinero por muerte por cada nivel de prestigio que aumenten, pero los costos de rango
también aumentarán proporcionalmente. <br> Esto es para recompensar a los jugadores por mejorar, pero también para
disminuir el incentivo que un jugador podría tener para intentar cultivar en un nivel realmente alto y luego encontrar
una manera de usar ese dinero para acelerar los rangos de la próxima carrera de prestigio.

Un jugador completamente actualizado puede experimentar 100 de salud máxima (en comparación con los 20 estándar), 10% de
probabilidad base de esquivar, 10% de probabilidad base de crítico y un multiplicador de caída de moneda de 15x. Esto
asume una configuración predeterminada.
***También es importante tener en cuenta que esto es para el rango máximo de Prestigio 10 rango 20, que a los jugadores
dedicados les lleva años obtener.*** La mayoría de las personas dejarán de jugar Minecraft antes de cultivar lo
suficiente para alcanzar este nivel.

## Resumen de bonificaciones del Sistema de Prestigio

A continuación, se muestra una lista de bonificaciones y cuándo se desbloquean según lo establecido **por defecto** en
la configuración del Gremio de Aventureros:

<div align="center">

|  Prestigio   | Bonificación | Valor |
|:------------:|:------------:|:-----:|
| Prestigio 1  |   Salud 1    |   2   |
| Prestigio 2  |  Crítico 1   |   3   | En realidad 3
| Prestigio 3  |  Esquivar 1  |   3   | En realidad 4
| Prestigio 4  |   Salud 2    |  2.5  |
| Prestigio 5  |  Crítico 2   |   6   |
| Prestigio 6  |  Esquivar 2  |   6   |
| Prestigio 7  |   Salud 3    |   3   |
| Prestigio 8  |  Crítico 3   |  10   |
| Prestigio 9  |  Esquivar 3  |  10   |
| Prestigio 10 |   Salud 4    |   4   |

</div>

Estos valores se sobrescriben entre sí, lo que indica que, por ejemplo, en Prestigio 1, los jugadores recibirían una
bonificación de 2 de salud por cada rango. Sin embargo, al llegar a Prestigio 4, esta bonificación aumenta a 2,5 por
rango.
<br>Los valores de bonificación de esquivar y crítico establecen cuál será la bonificación en el rango máximo para ese
nivel de Prestigio. Lo que significa que si un jugador maximiza todos los rangos en el nivel de Prestigio 6, tendría una
bonificación de esquivar y crítico del 6%.
