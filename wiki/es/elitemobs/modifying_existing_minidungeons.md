Aquí tienes la traducción al español, manteniendo el formato markdown:

# Modificando minidungeons existentes

Basado en la solicitud popular, esta página cubre los conceptos básicos para modificar Minidungeons existentes. Esta no es una guía paso a paso, sino una visión más amplia de cómo se deben modificar los sistemas. Tendrás que leer las páginas de la wiki sobre [Jefes Personalizados]($language$/elitemobs/creating_bosses.md) y [Objetos Personalizados]($language$/elitemobs/creating_items.md) para poder modificar esos valores.

### Modificando la dificultad de la mazmorra

Hay tres razones por las que podrías querer modificar la dificultad de las mazmorras, y son las siguientes:

### Modificando los multiplicadores de daño/salud de los jefes

Esta es la modificación más fácil de hacer. Si crees que los jefes infligen muy poco o demasiado daño, o que tienen muy poca o demasiada salud, puedes modificar los valores asociados a estos modificadores en los archivos de jefe contenidos en la carpeta `custombosses`.

Ejemplo de valores que querrías modificar:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Más sobre las estadísticas de los jefes [aquí]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Ten en cuenta que para muchas habilidades, el multiplicador de daño no modifica el daño aplicado por la habilidad. Consulta la siguiente sección sobre cómo modificar habilidades.

### Modificando las habilidades de los jefes

La principal dificultad de EliteMobs es lidiar con las diversas habilidades que pueden tener los jefes. Los jefes de nivel superior tienden a tener más habilidades y más difíciles, y los jefes de nivel inferior tienden a tener menos habilidades y más fáciles. Ciertas habilidades usadas juntas en el mismo jefe facilitan las peleas, y otras habilidades combinadas pueden hacer que la pelea sea significativamente más difícil.

Ejemplo de valores que querrías modificar:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Más sobre las habilidades de los jefes [aquí]($language$/elitemobs/creating_bosses.md&section=powers).

Dado que hay demasiadas combinaciones de habilidades para enumerar aquí, tendrás que aprender cómo funcionan las habilidades y probar tus encuentros para encontrar el punto óptimo para lo que consideras un encuentro que no es ni demasiado difícil ni demasiado fácil.

### Modificando el nivel de los jefes

Esta es la pregunta más frecuente, y aunque es posible hacerlo, requiere algunos pasos para asegurarte de que estás escalando adecuadamente a tus jefes hacia arriba o hacia abajo.

Ejemplo de valores que querrías modificar:
```yml
level: 21
```
Más sobre los niveles de los jefes [aquí]($language$/elitemobs/creating_bosses.md&section=level).

Esto requiere una combinación de lo dicho sobre los multiplicadores de daño/salud, ya que los jefes en niveles inferiores/superiores podrían necesitar multiplicadores de salud y daño ligeramente diferentes para que la pelea se sienta bien.

Sin embargo, el aspecto más importante a considerar aquí son las habilidades del jefe. Los jefes de nivel inferior y superior tienden a tener conjuntos de habilidades bastante diferentes dependiendo de cuán difícil se supone que sea la pelea. Tener el mismo conjunto de habilidades para un jefe de nivel 10 y un jefe de nivel 200 generalmente resulta en peleas cuya dificultad se siente drásticamente diferente. De nuevo, la única forma de encontrar realmente el punto óptimo es aprender cómo funcionan las habilidades del plugin y probarlas.

¡Y por último, **pero no menos importante!** Probablemente querrás ajustar el botín personalizado. La mayoría de los jefes en EliteMobs tienen botín personalizado, y si estás cambiando el nivel del jefe, es probable que quieras cambiar la naturaleza del botín que suelta.

Ejemplo de valores que querrías modificar:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Más sobre las caídas de botín [aquí]($language$/elitemobs/loot_tables.md).

### Acreditación / publicación de contenido modificado

Bajo EliteMobs, eres libre de publicar las mazmorras que crees en los canales apropiados para ello (Discord). Sin embargo, si tu creación es solo una modificación de una mazmorra existente, tu envío puede ser eliminado, especialmente si es solo un pequeño ajuste o si contiene o deriva de contenido premium (por razones obvias).

Eres libre y bienvenido a modificar cualquier contenido que hayas comprado o descargado de otra manera para ajustarlo a las necesidades de tu servidor para usarlo dentro de tu propia red; sin embargo, por razones obvias, esto no te otorga derechos de redistribución.

Nos reservamos el derecho de eliminar envíos de la comunidad por cualquier motivo y en cualquier momento, aunque odiaríamos tener que hacerlo.

### Más información

Si crees que esta página debería ampliarse aún más, deja una sugerencia en Discord diciendo qué se debería añadir. Más información sobre los diversos sistemas mencionados aquí está presente en las otras páginas de la wiki.