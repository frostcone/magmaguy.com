Este es un desglose completo de cómo escala la salud/daño en EliteMobs. Debe usarse como referencia al diseñar mazmorras.

Está enfocado en jefes personalizados, pero las élites normales escalan de la misma manera.

# ¡Antes de empezar!

No necesitas leer todo esto si solo quieres hacer ajustes rápidos. ¡Ve a la sección "Usando estos datos para mazmorras" para ver matemáticas rápidas muy simplificadas y una serie de configuraciones recomendadas prefabricadas!

# Escalado (en general)

En EliteMobs, de forma predeterminada, los jefes obtienen 7 de salud máxima e infligen 1 daño más por nivel.

Las armas de los jugadores infligen 7 daños más por nivel y la armadura reduce 0,25 de daño por nivel (pero hay 4 ranuras de armadura que contribuyen al total, lo que equivale a 1). Finalmente, los jugadores ganan la máxima salud a medida que desbloquean los rangos de prestigio.

# Daño infligido por jefes personalizados

La fórmula de daño para jefes personalizados es:

```
( ( ( daño base / 2 ) * multiplicador de daño de jefe personalizado) + nivel del jefe - reducción de armadura del jugador ) * multiplicador de daño global
```

## Daño base

Esto puede ser una de dos cosas:

1.  El valor en mobproperties para el tipo de entidad del jefe.
2.  Dado que esto puede ser difícil de tener en cuenta al diseñar mazmorras y otro contenido, los jefes personalizados pueden tener el campo `normalizedCombat`, que aplica un daño estándar de 5, que tiene la mejor escala para la progresión de EliteMobs. En una actualización posterior, el combate normalizado se habilitará de forma predeterminada para todos los jefes regionales.

## Multiplicador de daño de jefe personalizado

Este es el multiplicador de daño en el archivo de jefe personalizado. El valor predeterminado es 1.

## Nivel del jefe

Como puedes adivinar, este es solo el nivel del jefe. Esto significa que los jefes infligen un daño más por nivel.

## Reducción de armadura del jugador

La armadura del jugador reduce 0,25 de daño por nivel, y hay 4 ranuras de armadura que pueden contribuir al total. Además, cada nivel de protección de proyectiles reduce el daño de proyectiles en 0.025.

## Multiplicador de daño global

Este es el multiplicador en MobCombatSettings. El valor predeterminado es 1.

# Salud máxima de jefes personalizados

La fórmula de salud para jefes personalizados es:

```
( salud máxima base + nivel del jefe * 7 ) * multiplicador de salud de jefe personalizado
```

## Salud máxima base

Esto puede ser una de dos cosas:

1.  La salud máxima predeterminada de la entidad de vainilla de Minecraft.
2.  Dado que esto puede ser difícil de tener en cuenta al diseñar mazmorras y otro contenido, los jefes personalizados pueden tener el campo `normalizedCombat`, que aplica una salud estándar de 7, que tiene la mejor escala para la progresión de EliteMobs. El combate normalizado está habilitado de forma predeterminada para todos los jefes regionales.

## Nivel

Este es el nivel del jefe

## Multiplicador de salud de jefe personalizado

Este es el multiplicador en el archivo de jefe personalizado. El valor predeterminado es 1.

# Daño infligido a jefes personalizados

La fórmula de daño con la que los jugadores golpean a los jefes personalizados tiene demasiadas variables pequeñas, como golpes críticos y tiempos de reutilización, para explicarlas en profundidad aquí. Una versión simplificada se ve así:

```
daño = Nivel del arma
```

Así es como debería verse aproximadamente el daño en una configuración promedio ideal.

# Usando estos datos para mazmorras

**NOTA: ¡ESTO ASUME QUE ESTÁS USANDO LOS VALORES DE `normalizedCombat`!** Esos valores se hicieron específicamente para equilibrar las mazmorras más fácilmente.

Parte de la dificultad de un jefe es hacer que tenga la salud y el daño adecuados para el encuentro. Sin embargo, ten en cuenta que esto es solo una parte, y que los poderes son igual de importantes.

Lo siguiente se presenta en el formato correcto para el archivo de jefe personalizado.

## Las matemáticas fáciles y rápidas

1.  EliteMobs tiene 7 golpes como la cantidad de golpes que un jugador con un arma del mismo nivel que un jefe necesita para matarlo, suponiendo que no haya modificadores.
    1.  Esto significa que un multiplicador de 2,0 significa que los jugadores tendrán que golpear al jefe 2 x 7 = 14 veces. 0.5 significa 7 / 2 = 3.5.
2.  El daño base de `normalizedCombat`, suponiendo que la armadura del jugador sea del mismo nivel que el jefe, es de 2,5 de daño o 1,25 corazones de daño por golpe.
    1.  Esto significa que un multiplicador de 2,0 significa que los jugadores perderán 3 corazones por golpe, y un multiplicador de 0,5 hará que los jugadores pierdan 0,75 corazones por golpe.

**Ten en cuenta que los jugadores tienden a priorizar las armas y, a menudo, terminan con armaduras mucho peores que las armas. A menos que diseñes tipos muy específicos de arenas con combate a distancia, probablemente no quieras infligir mucho daño por golpe.** ¡Prueba tu contenido!

## Creando una mafia de mazmorra promedio

Con el escalado de `normalizedCombat`, puedes aplicar una configuración muy minimalista:

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 golpes para matar
damageMultiplier: 1.0 #1.5 corazones de daño
```

**Nota: dado que 1.0 es el valor predeterminado, esto significa que tampoco puedes definir nada**.

## Creando paquetes de basura

Los paquetes de basura son numerosos pero no muy peligrosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 golpes para matar
damageMultiplier: 0.5 #0.5 corazones de daño
```

## Creando refuerzos

Los refuerzos deberían morir muy fácilmente, pero representan un peligro en términos de daño (estos valores se recomiendan para más de 4 entidades cuerpo a cuerpo, el uso real puede variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 golpe para matar
damageMultiplier: 0.6 #1 corazón de daño
```

## Creando minijefes

Los minijefes deben mantenerse firmes y plantear un desafío mecánico a los jugadores. Debe ser una prueba de habilidad que dure un poco, pero no algo extremadamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 golpes para matar
damageMultiplier: 1.2 #2 corazones de daño
```

## Creando jefes

Los jefes son un verdadero desafío, la conclusión de una acumulación en una mazmorra y una verdadera prueba de habilidad con todo en juego. Los encuentros deben ser largos y la muerte debe ser una amenaza presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 golpes para matar
damageMultiplier: 1.4 #2.5 corazones de daño
```

## Creando jefes mundiales

Los jefes mundiales son peligrosos, pero sobre todo tienen mucha salud e invocan muchos refuerzos/tienen muchos ataques de área de efecto. Estos están destinados a ser combatidos por grandes grupos de jugadores durante el mayor tiempo que debería durar un encuentro de élite. No son muy mortales, pero tienen muchas mecánicas que pueden abrumar a los jugadores mal preparados.

```yaml
normalizedCombat: true
healthMultiplier: 40.0 #160 golpes para matar
damageMultiplier: 1.5 #2.5-3 corazones de daño
```

Estos son solo valores aproximados recomendados y cualquier valor final debe ajustarse en torno a los propios encuentros.




