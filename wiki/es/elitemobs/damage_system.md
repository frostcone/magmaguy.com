Aquí tienes la traducción al español, conservando el formato markdown:

Este es un desglose completo de cómo escalan la salud y el daño en EliteMobs. Debería usarse como referencia al diseñar mazmorras.

Está enfocado en Jefes Personalizados (Custom Bosses), pero los Elites normales escalan de la misma manera.

# ¡Antes de empezar!

No necesitas leer todo esto si solo quieres hacer ajustes rápidos. Salta a la sección "Usando estos datos para mazmorras" para ver matemáticas rápidas muy simplificadas y una serie de configuraciones recomendadas preestablecidas.

# Escalado (en general)

En EliteMobs, por defecto, los jefes obtienen 7 de salud máxima y causan 1 punto más de daño por nivel.

Las armas de los jugadores causan 7 puntos más de daño por nivel, y la armadura reduce 0.25 de daño por nivel (pero hay 4 ranuras de armadura que contribuyen al total, lo que suma 1). Finalmente, los jugadores ganan salud máxima a medida que desbloquean los rangos de prestigio.

# Daño causado por Jefes Personalizados

La fórmula de daño para Jefes Personalizados es:

```
( ( ( daño base / 2 ) * multiplicador de daño del jefe personalizado) + nivel del jefe - reducción de armadura del jugador ) * multiplicador de daño global
```

## daño base

Esto puede ser una de dos cosas:

1.  El valor en `mobproperties` para el tipo de entidad del jefe.
2.  Dado que esto puede ser difícil de tener en cuenta al diseñar mazmorras y otro contenido, los Jefes Personalizados pueden tener el campo `normalizedCombat`, que aplica un daño estándar de 5, el cual tiene el mejor escalado para la progresión de EliteMobs. En una actualización posterior, `normalizedCombat` estará habilitado por defecto para todos los jefes regionales.

## multiplicador de daño del jefe personalizado

Este es el multiplicador de daño en el archivo del Jefe Personalizado. Por defecto es 1.

## nivel del jefe

Como podrías adivinar, este es simplemente el nivel del jefe. Esto significa que los jefes causan un punto más de daño por nivel.

## reducción de armadura del jugador

La armadura del jugador reduce 0.25 de daño por nivel, y hay 4 ranuras de armadura que pueden contribuir al total. Además, cada nivel de protección contra proyectiles reduce el daño de proyectiles en 0.025.

## multiplicador de daño global

Este es el multiplicador en `MobCombatSettings`. Por defecto es 1.

# Salud máxima de Jefes Personalizados

La fórmula de salud para Jefes Personalizados es:

```
( salud máxima base + nivel del jefe * 7 ) * multiplicador de salud del jefe personalizado
```

## salud máxima base

Esto puede ser una de dos cosas:

1.  La salud máxima por defecto de la entidad vanilla de Minecraft.
2.  Dado que esto puede ser difícil de tener en cuenta al diseñar mazmorras y otro contenido, los Jefes Personalizados pueden tener el campo `normalizedCombat`, que aplica una salud estándar de 7, la cual tiene el mejor escalado para la progresión de EliteMobs. `normalizedCombat` está habilitado por defecto para todos los jefes regionales.

## nivel

Este es el nivel del jefe.

## multiplicador de salud del jefe personalizado

Este es el multiplicador en el archivo del Jefe Personalizado. Por defecto es 1.

# Daño infligido a Jefes Personalizados

La fórmula de daño con la que los jugadores golpean a los Jefes Personalizados tiene demasiadas variables pequeñas como golpes críticos y tiempos de reutilización para explicarla en profundidad aquí. Una versión simplificada se ve así:

```
daño = Nivel del arma
```

Así es como debería verse aproximadamente el daño en una configuración promedio ideal.

# Usando estos datos para mazmorras

**NOTA: ¡ESTO ASUME QUE ESTÁS USANDO LOS VALORES DE `normalizedCombat`!** Esos valores fueron creados específicamente para equilibrar mazmorras más fácilmente.

Parte de la dificultad de un jefe es hacer que tenga la salud y el daño apropiados para el encuentro. Sin embargo, ten en cuenta que esto es solo una parte, y que las habilidades son igual de importantes.

Lo siguiente se presenta en el formato correcto para el archivo del Jefe Personalizado.

## Las matemáticas rápidas y fáciles

1.  EliteMobs tiene 7 golpes como la cantidad de golpes que un jugador con un arma del mismo nivel que un jefe necesita para matarlo, asumiendo que no hay modificadores.
    1.  Esto significa que un multiplicador de 2.0 significa que los jugadores tendrán que golpear al jefe 2 x 7 = 14 veces. 0.5 significa 7 / 2 = 3.5.
2.  El daño base de `normalizedCombat`, asumiendo que la armadura del jugador es del mismo nivel que el jefe, es de 2.5 de daño o 1.25 corazones de daño por golpe.
    1.  Esto significa que un multiplicador de 2.0 significa que los jugadores perderán 3 corazones por golpe, y un multiplicador de 0.5 hará que los jugadores pierdan 0.75 corazones por golpe.

**Ten en cuenta que los jugadores tienden a priorizar las armas, y a menudo terminan con una armadura mucho peor que las armas. A menos que diseñes tipos de arenas muy específicos con combate a distancia, probablemente no querrás causar mucho daño por golpe.** ¡Prueba tu contenido!

## Creando un mob de mazmorra promedio

Con el escalado de `normalizedCombat`, puedes aplicar una configuración muy minimalista:

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 golpes para matar
damageMultiplier: 1.0 #1.5 corazones de daño
```

**Nota: dado que 1.0 es el valor por defecto, esto significa que también puedes simplemente no definir nada**.

## Creando grupos de mobs débiles (trash packs)

Los grupos de mobs débiles son numerosos pero no muy peligrosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 golpes para matar
damageMultiplier: 0.5 #0.5 corazones de daño
```

## Creando refuerzos

Los refuerzos deberían morir muy fácilmente, pero representar un peligro en cuanto a daño (estos valores se recomiendan para 4+ entidades cuerpo a cuerpo, el uso real puede variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 golpe para matar
damageMultiplier: 0.6 #1 corazon de daño
```

## Creando minibosses

Los minibosses deberían resistir, y representar un desafío mecánico para los jugadores. Debería ser una prueba de habilidad que dure un poco, pero no algo extremadamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 golpes para matar
damageMultiplier: 1.2 #2 corazones de daño
```

## Creando jefes

Los jefes son un verdadero desafío, la conclusión de una acumulación en una mazmorra y una verdadera prueba de habilidad con todo en juego. Los encuentros deberían ser largos y la muerte debería ser una amenaza presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 golpes para matar
damageMultiplier: 1.4 #2.5 corazones de daño
```

## Creando Jefes de Mundo

Los Jefes de Mundo son peligrosos, pero sobre todo tienen mucha salud y invocan muchos refuerzos / tienen muchos ataques de área de efecto. Están destinados a ser combatidos por grandes grupos de jugadores durante el mayor tiempo que debería durar un encuentro de élite. No son muy mortales, pero tienen muchas mecánicas que pueden abrumar a los jugadores poco preparados.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 #160 golpes para matar
damageMultiplier: 1.5 #2.5-3 corazones de daño
```

Estos son solo valores recomendados aproximados y cualquier valor final debe ajustarse en función de los encuentros en sí.