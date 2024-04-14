Este es un desglose completo de cómo se escala la salud / daño en EliteMobs. Debería usarse como referencia al diseñar mazmorras.

Está enfocado en los Jefes Personalizados, pero los Elites normales se escalan de la misma manera.

# ¡Antes de empezar!

No necesitas leer todo esto si solo quieres hacer ajustes rápidos. Salta a la sección "Usando estos datos para mazmorras" para ver matemáticas rápidas muy simplificadas y una serie de configuraciones recomendadas predefinidas.

# Escala (en general)

En EliteMobs, por defecto, los jefes obtienen 7 de salud máxima y hacen 1 más de daño por nivel.

Las armas de los jugadores hacen 7 más de daño por nivel y la armadura reduce 0.25 de daño por nivel (pero hay 4 ranuras de armadura que contribuyen al total, que suma 1). Finalmente, los jugadores ganan salud máxima a medida que desbloquean los rangos de prestigio.

# Daño infligido por Jefes Personalizados

La fórmula de daño para Jefes Personalizados es:

``` 
( ( ( daño base / 2 ) * multiplicador de daño del jefe personalizado) + nivel del jefe - reducción de armadura del jugador) * multiplicador de daño global 
```

## daño base

Esto puede ser una de dos cosas:

1.  El valor en mobproperties para el tipo de entidad del jefe.
2.  Dado que esto puede ser difícil de recordar al diseñar mazmorras y otros contenidos, los Jefes Personalizados pueden tener el campo normalizedCombat, que aplica un estándar de 5 de daño, que tiene la mejor escala para la progresión de EliteMobs. En una actualización posterior, el combate normalizado estará habilitado por defecto para todos los jefes regionales.

## multiplicador de daño del jefe personalizado

Este es el multiplicador de daño en el archivo Jefe Personalizado. Por defecto es 1.

## nivel del jefe

Como podrías adivinar, esto es simplemente el nivel del jefe. Esto significa que los jefes hacen un daño adicional por nivel.

## reducción de armadura del jugador

La armadura del jugador reduce 0.25 de daño por nivel, y hay 4 ranuras de armadura que pueden contribuir al total. Además, cada nivel de protección de proyectiles reduce el daño de los proyectiles en 0.025.

## multiplicador de daño global

Esto es el multiplicador en MobCombatSettings. Por defecto es 1.

# Salud máxima de Jefes Personalizados

La fórmula de salud para Jefes Personalizados es:

```
( salud máxima base + nivel del jefe * 7 ) * multiplicador de salud del jefe personalizado 
```

## salud máxima base

Esto puede ser una de dos cosas:

1.  La salud máxima predeterminada de la entidad vanilla Minecraft.
2.  Dado que esto puede ser difícil de recordar al diseñar mazmorras y otros contenidos, los Jefes Personalizados pueden tener el campo normalizedCombat, que aplica un estándar de 7 de salud, que tiene la mejor escala para la progresión de EliteMobs. El combate normalizado está habilitado por defecto para todos los jefes regionales.

## nivel

Este es el nivel del jefe

## multiplicador de salud del jefe personalizado

Este es el multiplicador en el archivo Jefe Personalizado. Por defecto es 1.

# Daño infligido a los Jefes Personalizados

La fórmula de daño que los jugadores golpean a los Jefes Personalizados tiene variables pequeñas como golpes críticos y tiempos de espera por explicar en profundidad aquí. Una versión simplificada se parece a esto:

```
daño = Nivel del arma 
```

Esto es lo que el daño debería parecer aproximadamente en un escenario promedio ideal.

# Usando estos datos para mazmorras

**NOTA: ¡ESTO SUPONE QUE ESTÁS USANDO LOS VALORES `normalizedCombat`!** Esos valores fueron específicamente creados para balancear las mazmorras más fácilmente.

Parte de la dificultad de un jefe es hacer que tenga la salud y el daño apropiados para el encuentro. Sin embargo, ten en cuenta que esto es solo una parte de él y que los poderes son igual de importantes.

Lo siguiente se presenta en el formato correcto para el archivo Jefe Personalizado.

## Las matemáticas rápidas y fáciles

1.  EliteMobs tiene 7 golpes como la cantidad de golpes que un jugador con un arma del mismo nivel que un jefe toma para matarlo, suponiendo que no existan modificadores.
    1.  Esto significa que un multiplicador de 2.0 significa que los jugadores tendrán que golpear al jefe 2 x 7 = 14 veces. 0.5 significa 7 / 2 = 3.5 .
2.  El daño de normalizedCombat base, suponiendo que la armadura del jugador es del mismo nivel que el jefe, es 2.5 de daño o 1.25 de corazones de daño por golpe.
    1.  Esto significa que un multiplicador de 2.0 hará que los jugadores pierdan 3 corazones por golpe, y un multiplicador de 0.5 hará que los jugadores pierdan 0.75 corazones por golpe.

**Ten en cuenta que los jugadores tienden a priorizar las armas, y a menudo terminan con una armadura mucho peor que las armas. A menos que diseñes tipos muy específicos de arenas con combate a distancia, probablemente no querrás repartir mucho daño por golpe.** ¡Prueba tu contenido!

## Creando un mob de mazmorra promedio

Con la escala de normalizedCombat, puedes aplicar una configuración muy minimalista:

```yaml
normalizedCombat: true 
healthMultiplier: 1.0 #4 golpes para matar 
damageMultiplier: 1.0 #1.5 corazones de daño
```

**Nota: ya que 1.0 es el default, esto significa que también puedes simplemente no definir nada**.

## Creando paquetes de basura

Los paquetes de basura son numerosos pero no muy peligrosos:

```yaml
normalizedCombat: true 
healthMultiplier: 0.7 #3 golpes para matar 
damageMultiplier: 0.5 #0.5 corazones de daño
```

## Creando refuerzos

Los refuerzos deben morir muy fácilmente, pero suponen un peligro en cuanto a daño (estos valores se recomiendan para 4+ entidades cuerpo a cuerpo, el uso real puede variar):

```yaml
normalizedCombat: true 
healthMultiplier: 0.25 #1 golpe para matar 
damageMultiplier: 0.6 #1 corazón de daño
```

## Creando minibosses

Los minibosses deberían mantener su posición y suponer un desafío mecánico para los jugadores. Debería ser una prueba de habilidad que dure un poco, pero no algo extremadamente mortal:

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

## Creando Jefes Mundiales

Los jefes mundiales son peligrosos, pero sobre todo tienen mucha salud e invocan muchos refuerzos / tienen muchos ataques de área de efecto. Estos están destinados a ser combatidos por grandes grupos de jugadores durante el mayor tiempo que debería durar un encuentro élite. No son muy mortales, pero tienen muchas mecánicas que pueden abrumar a los jugadores poco preparados.

```yaml
normalizedCombat: true 
healthMultiplier: 40.0 #160 golpes para matar 
damageMultiplier: 1.5 #2.5-3 corazones de daño
```

Estos son solo valores aproximados recomendados y cualquier valor final debería ajustarse en torno a los propios encuentros.