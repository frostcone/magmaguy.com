[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Modificación de minimazmorras existentes

Según la solicitud popular, esta página revisa los conceptos básicos de la modificación de minimazmorras existentes. Esta no es una guía paso a paso, sino una visión más amplia de cómo se deben modificar los sistemas. Deberá leer las páginas de la wiki sobre [Jefes personalizados]($language$/elitemobs/creating_bosses.md) y [Objetos personalizados]($language$/elitemobs/creating_items.md) para modificar esos valores.

### Modificación de la dificultad de la mazmorra

Hay tres razones por las que puede querer modificar la dificultad de las mazmorras, y son las siguientes:

### Modificación de los multiplicadores de daño/salud de los jefes

Esta es la modificación más fácil de hacer. Si cree que los jefes infligen muy poco o demasiado daño, o que tienen muy poca o demasiada salud, puede modificar los valores asociados a estos modificadores en los archivos de jefe contenidos en la carpeta `custombosses`.

Ejemplo de valores que desearía modificar:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Más sobre las estadísticas de los jefes [aquí]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Tenga en cuenta que para muchos poderes, el multiplicador de daño no modifica el daño aplicado por el poder. Consulte la siguiente sección sobre cómo modificar los poderes.

### Modificación de los poderes de los jefes

La dificultad principal de EliteMobs es lidiar con los diversos poderes que pueden tener los jefes. Los jefes de nivel superior tienden a tener poderes más y más difíciles, y los jefes de nivel inferior tienden a tener menos poderes y más fáciles. Ciertos poderes utilizados juntos en el mismo jefe facilitan las peleas, y otros poderes combinados pueden hacer que la pelea sea significativamente más difícil.

Ejemplo de valores que desearía modificar:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Más información sobre los poderes de los jefes [aquí]($language$/elitemobs/creating_bosses.md&section=powers).

Dado que hay demasiadas combinaciones de poderes para enumerar aquí, deberá aprender cómo funcionan los poderes y probar sus encuentros para encontrar el punto óptimo para lo que cree que es un encuentro que no es ni demasiado difícil ni demasiado fácil.

### Modificación del nivel de los jefes

Esta es la pregunta más frecuente y, si bien es posible hacerlo, requiere algunos pasos para asegurarse de que está escalando adecuadamente a sus jefes hacia arriba o hacia abajo.

Ejemplo de valores que desearía modificar:
```yml
level: 21
```
Más información sobre los niveles de jefe [aquí]($language$/elitemobs/creating_bosses.md&section=level).

Esto requiere una combinación de lo que se dice sobre los multiplicadores de daño/salud, ya que los jefes en niveles inferiores/superiores pueden necesitar multiplicadores de salud y daño ligeramente diferentes para que la pelea se sienta bien.

Sin embargo, el aspecto más importante a considerar aquí son los poderes en el jefe. Los jefes de nivel inferior y superior tienden a tener conjuntos de poderes bastante diferentes según lo difícil que se suponga que debe ser la pelea. Tener el mismo conjunto de poderes para un jefe de nivel 10 y un jefe de nivel 200 generalmente resulta en peleas cuya dificultad se siente drásticamente diferente. Nuevamente, la única forma de encontrar realmente el punto óptimo es aprender cómo funcionan los poderes del plugin y probarlos.

Y por último, **¡pero no menos importante!** Probablemente querrá ajustar el botín personalizado. La mayoría de los jefes en EliteMobs tienen botín personalizado, y si está cambiando el nivel del jefe, es probable que también quiera cambiar la naturaleza del botín que deja caer.

Ejemplo de valores que desearía modificar:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Más información sobre las caídas de botín [aquí]($language$/elitemobs/loot_tables.md).

### Dar crédito/publicar contenido modificado

En EliteMobs, es libre de publicar las mazmorras que cree en los canales apropiados para hacerlo (Discord). Sin embargo, si su creación es solo una modificación de una mazmorra existente, es posible que se elimine su envío, especialmente si es solo un pequeño ajuste o si contiene o se deriva de contenido premium (por razones obvias).

Es libre y bienvenido de modificar cualquier contenido que haya comprado o descargado para ajustarlo a las necesidades de su servidor para usarlo dentro de su propia red, sin embargo, por razones obvias, esto no le otorga derechos de redistribución.

Nos reservamos el derecho de eliminar envíos de la comunidad por cualquier motivo y en cualquier momento, aunque odiaríamos tener que hacerlo realmente.

### Más información

Si cree que esta página debería ampliarse aún más, deje una sugerencia en Discord diciendo qué debería añadirse a ella. Más información sobre los distintos sistemas mencionados aquí se encuentran en las otras páginas de la wiki.
