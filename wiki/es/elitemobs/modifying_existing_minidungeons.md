# Modificar minidungeons existentes

Según la solicitud popular, esta página repasa los conceptos básicos de la modificación de minidungeons existentes. Esta no es una guía paso a paso, sino una visión más amplia de cómo se deben modificar los sistemas. Tendrás que leer las páginas wiki sobre [Jefes personalizados]($language$/elitemobs/creating_bosses.md) y [Objetos personalizados]($language$/elitemobs/creating_items.md) para modificar esos valores.

### Modificar la dificultad de la mazmorra

Hay tres razones por las que puedes querer modificar la dificultad de las mazmorras, y son las siguientes:

### Modificar los multiplicadores de daño/salud de los jefes

Esta es la modificación más fácil de hacer. Si crees que los jefes infligen demasiado poco o demasiado daño, o que tienen muy poca o demasiada salud, puedes modificar los valores asociados a estos modificadores en los archivos de jefe contenidos en la carpeta `custombosses`.

Ejemplo de valores que querrías modificar:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Más sobre las estadísticas de los jefes [aquí]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Ten en cuenta que, para muchos poderes, el multiplicador de daño no modifica el daño aplicado por el poder. Consulta la siguiente sección sobre cómo modificar los poderes.

### Modificar los poderes de los jefes

La principal dificultad de EliteMobs es lidiar con los diversos poderes que pueden tener los jefes. Los jefes de nivel superior tienden a tener más y más poderes, y los jefes de nivel inferior tienden a tener menos y más fáciles poderes. Ciertos poderes utilizados juntos en el mismo jefe hacen que las peleas sean más fáciles, y otros poderes juntos pueden hacer que la pelea sea significativamente más difícil.

Ejemplo de valores que querrías modificar:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Más sobre los poderes de los jefes [aquí]($language$/elitemobs/creating_bosses.md&section=powers).

Dado que hay demasiadas combinaciones de poderes para enumerar aquí, tendrás que aprender cómo funcionan los poderes y probar tus encuentros para encontrar el punto ideal para lo que crees que es un encuentro que no sea ni demasiado difícil ni demasiado fácil.

### Modificar el nivel de los jefes

Esta es la pregunta más frecuente y, si bien es posible hacerlo, se necesitan algunos pasos para asegurarte de que estás escalando adecuadamente a tus jefes hacia arriba o hacia abajo.

Ejemplo de valores que querrías modificar:
```yml
level: 21
```
Más sobre los niveles de jefe [aquí]($language$/elitemobs/creating_bosses.md&section=level).

Esto requiere una combinación de lo que se dice sobre los multiplicadores de daño/salud, ya que los jefes de niveles inferiores/superiores pueden necesitar multiplicadores de salud y daño ligeramente diferentes para que la pelea se sienta bien.

Sin embargo, el aspecto más importante a considerar aquí son los poderes del jefe. Los jefes de nivel inferior y superior tienden a tener conjuntos de poderes bastante diferentes según lo difícil que se supone que debe ser la pelea. Tener el mismo conjunto de poderes para un jefe de nivel 10 y un jefe de nivel 200 generalmente da como resultado peleas cuya dificultad se siente drásticamente diferente. Una vez más, la única forma de encontrar realmente el punto ideal es aprender cómo funcionan los poderes del complemento y probarlos.

Y por último, **¡pero no menos importante!** Probablemente querrás modificar el botín personalizado. La mayoría de los jefes en EliteMobs tienen botín personalizado, y si estás cambiando el nivel del jefe, es probable que quieras cambiar la naturaleza del botín que suelta.

Ejemplo de valores que querrías modificar:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Más sobre las caídas de botín [aquí]($language$/elitemobs/loot_tables.md).

### Acreditar/publicar contenido modificado

En EliteMobs, eres libre de publicar las mazmorras que crees en los canales apropiados para hacerlo (Discord). Sin embargo, si tu creación es solo una modificación de una mazmorra existente, tu envío puede ser eliminado, especialmente si es solo un pequeño ajuste o si contiene o se deriva de contenido premium (por razones obvias).

Eres libre y bienvenido a modificar cualquier contenido que hayas comprado o descargado para ajustarlo a las necesidades de tu servidor para su uso dentro de tu propia red, sin embargo, por razones obvias, esto no te otorga derechos de redistribución.

Nos reservamos el derecho de eliminar los envíos de la comunidad por cualquier motivo y en cualquier momento, aunque odiaríamos tener que hacerlo.

### Más información

Si crees que esta página debe ampliarse, deja una sugerencia en Discord diciendo qué se debe agregar. Puedes encontrar más información sobre los distintos sistemas mencionados aquí en las otras páginas wiki.



