Esta es una descripción exhaustiva de cómo escala la salud/daño en EliteMobs. Debe utilizarse como referencia al diseñar
mazmorras.

Está enfocado en los Jefes Personalizados, pero los Elites normales escalan de la misma manera.

# ¡Antes de empezar!

No necesitas leer todo esto si solo quieres hacer ajustes rápidos. ¡Salta a la sección "Usar estos datos para mazmorras"
para ver cálculos rápidos muy simplificados y una serie de configuraciones predefinidas recomendadas!

# Escalado (en general)

En EliteMobs, por defecto, los jefes obtienen 7 de salud máxima y hacen 1 de daño más por nivel.

Las armas de los jugadores infligen 7 de daño más por nivel, y la armadura reduce 0.25 de daño por nivel (pero hay 4
espacios de armadura que contribuyen al total, lo que equivale a 1). Finalmente, los jugadores ganan salud máxima a
medida que desbloquean los rangos de prestigio.

# Daño infligido por Jefes Personalizados

La fórmula de daño para los Jefes Personalizados es:

```
( ( ( daño base / 2 ) * multiplicador de daño de jefe personalizado) + nivel del jefe - reducción de armadura del jugador ) * multiplicador de daño global
```

## daño base

Esto puede ser una de dos cosas:

1. El valor en mobproperties para el tipo de entidad del jefe.
2. Dado que puede ser difícil tener esto en cuenta al diseñar mazmorras y otro contenido, los Jefes Personalizados
   pueden tener el campo normalizedCombat, que aplica un daño estándar de 5, que tiene la mejor escalada para la
   progresión de EliteMobs. En una actualización posterior, el combate normalizado se habilitará de forma predeterminada
   para todos los jefes regionales.

## multiplicador de daño de jefe personalizado

Este es el multiplicador de daño en el archivo de Jefe Personalizado. El valor predeterminado es 1.

## nivel del jefe

Como puedes imaginar, este es solo el nivel del jefe. Esto significa que los jefes infligen un punto más de daño por
nivel.

## reducción de armadura del jugador

La armadura del jugador reduce 0.25 de daño por nivel, y hay 4 espacios de armadura que pueden contribuir al total.
Además, cada nivel de protección contra proyectiles reduce el daño de los proyectiles en 0.025.

## multiplicador de daño global

Este es el multiplicador en MobCombatSettings. El valor predeterminado es 1.

# Salud máxima de Jefes Personalizados

La fórmula de salud para los Jefes Personalizados es:

```
( salud máxima base + nivel del jefe * 7 ) * multiplicador de salud de jefe personalizado
```

## salud máxima base

Esto puede ser una de dos cosas:

1. La salud máxima predeterminada de la entidad de Minecraft vanilla.
2. Dado que puede ser difícil tener esto en cuenta al diseñar mazmorras y otro contenido, los Jefes Personalizados
   pueden tener el campo normalizedCombat, que aplica una salud estándar de 7, que tiene la mejor escalada para la
   progresión de EliteMobs. El combate normalizado está habilitado de forma predeterminada para todos los jefes
   regionales.

## nivel

Este es el nivel del jefe.

## multiplicador de salud de jefe personalizado

Este es el multiplicador en el archivo de Jefe Personalizado. El valor predeterminado es 1.

# Daño infligido a Jefes Personalizados

La fórmula de daño con la que los jugadores golpean a los Jefes Personalizados tiene demasiadas variables pequeñas, como
golpes críticos y tiempos de reutilización, para explicarla en detalle aquí. Una versión simplificada se ve así:

```
daño = Nivel del arma
```

Esto es aproximadamente lo que debería ser el daño en un entorno promedio ideal.

# Usar estos datos para mazmorras

**NOTA: ¡ESTO ASUME QUE ESTÁS USANDO LOS VALORES `normalizedCombat`!** Esos valores fueron hechos específicamente para
equilibrar las mazmorras más fácilmente.

Parte de la dificultad de un jefe es hacer que tenga la salud y el daño apropiados para el encuentro. Sin embargo, ten
en cuenta que esta es solo una parte, y que los poderes son igual de importantes.

Lo siguiente se presenta en el formato correcto para el archivo de Jefe Personalizado.

## Los cálculos rápidos y fáciles

1. EliteMobs tiene 7 golpes como la cantidad de golpes que un jugador con un arma del mismo nivel que un jefe necesita
   para matarlo, asumiendo que no hay modificadores.
    1. Esto significa que un multiplicador de 2.0 significa que los jugadores tendrán que golpear al jefe 2 x 7 = 14
       veces. 0.5 significa 7 / 2 = 3.5.
2. El daño base normalizedCombat, asumiendo que la armadura del jugador es del mismo nivel que el jefe, es de 2.5 de
   daño o 1.25 corazones de daño por golpe.
    1. Esto significa que un multiplicador de 2.0 significa que los jugadores perderán 3 corazones por golpe, y un
       multiplicador de 0.5 hará que los jugadores pierdan 0.75 corazones por golpe.

**Ten en cuenta que los jugadores tienden a priorizar las armas, y a menudo terminan con mucha peor armadura que las
armas. A menos que diseñes tipos de arenas muy específicos con combate a distancia, probablemente no quieras infligir
mucho daño por golpe.** ¡Prueba tu contenido!

## Crear un mob promedio de mazmorra

Con el escalado de normalizedCombat, puedes aplicar una configuración muy minimalista:

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 golpes para matar
damageMultiplier: 1.0 #1.5 corazones de daño
```

**Nota: dado que 1.0 es el valor predeterminado, esto significa que también puedes simplemente no definir nada**.

## Crear grupos de basura

Los grupos de basura son numerosos pero no muy peligrosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 golpes para matar
damageMultiplier: 0.5 #0.5 corazones de daño
```

## Crear refuerzos

Los refuerzos deberían morir muy fácilmente, pero representan un peligro en cuanto al daño (estos valores se recomiendan
para 4+ entidades cuerpo a cuerpo, el uso real puede variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 golpe para matar
damageMultiplier: 0.6 #1 corazón de daño
```

## Crear minijefes

Los minijefes deben mantenerse firmes y plantear un desafío mecánico para los jugadores. Debería ser una prueba de
habilidad que dure un poco, pero no algo extremadamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 golpes para matar
damageMultiplier: 1.2 #2 corazones de daño
```

## Crear jefes

Los jefes son un verdadero desafío, la conclusión de una acumulación en una mazmorra y una verdadera prueba de habilidad con todo en juego. Los encuentros deben ser largos y la muerte debe ser una amenaza presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 golpes para matar
damageMultiplier: 1.4 #2.5 corazones de daño
```

## Crear Jefes de Mundo

Los jefes de mundo son peligrosos, pero sobre todo tienen mucha salud y convocan muchos refuerzos / tienen muchos
ataques de área de efecto. Estos están destinados a ser combatidos por grandes grupos de jugadores durante la mayor
cantidad de tiempo que debería durar un encuentro de élite. No son muy mortales, pero tienen muchas mecánicas que pueden
abrumar a los jugadores que no están preparados.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 #160 golpes para matar
damageMultiplier: 1.5 #2.5-3 corazones de daño
```

Estos son solo valores recomendados aproximados y cualquier valor final debe ajustarse en función de los encuentros en
sí.
