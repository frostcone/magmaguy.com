# Modificando minidungeons existentes

Basándonos en las solicitudes populares, esta página cubre los fundamentos de modificar Minidungeons existentes. Esto no es una guía paso a paso, sino una visión más amplia de cómo deben modificarse los sistemas. Tendrás que leer las páginas de la wiki sobre [Jefes Personalizados]($language$/elitemobs/creando_bosses.md) y [Ítems Personalizados]($language$/elitemobs/creando_items.md) para modificar esos valores.

### Modificando la dificultad del dungeon

Hay tres razones por las que puedes querer modificar la dificultad de los dungeons, y son las siguientes:

### Modificando los multiplicadores de daño/salud de los jefes

Esta es la modificación más fácil de hacer. Si piensas que los jefes infligen daño en exceso o en defecto, o que tienen demasiada o muy poca salud, puedes modificar los valores asociados a estos modificadores en los archivos de los jefes contenidos en el directorio `custombosses`.

Valores que podrías querer modificar:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Más sobre las estadísticas de los jefes [aquí]($language$/elitemobs/creando_bosses.md&section=healthmultiplier).

Por favor ten en cuenta que para muchos poderes, el multiplicador de daño no modifica el daño aplicado por el poder. Consulta la siguiente sección sobre cómo modificar los poderes.

### Modificando los poderes de los jefes

La principal dificultad de EliteMobs es lidiar con los diversos poderes que los jefes pueden tener. Los jefes de nivel superior tienden a tener más y poderes más difíciles, y los jefes de nivel inferior tienden a tener menos y fácil poderes. Ciertos poderes usados juntos en el mismo jefe hacen las peleas más fáciles, y otros poderes juntos pueden hacer la pelea significativamente más difícil.

Valores que podrías querer modificar:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Más acerca de los poderes de los jefes [aquí]($language$/elitemobs/creando_bosses.md&section=powers).

Como hay demasiadas combinaciones de poderes para enumerar aquí, tendrás que aprender cómo funcionan los poderes y jugar tus encuentros para encontrar el punto dulce para lo que piensas es un encuentro que no es ni muy duro ni muy fácil.

### Modificando el nivel de los jefes

Esta es la pregunta más frecuente, y aunque es posible hacerlo, se requieren algunos pasos para asegurar que estás escalando tus jefes adecuadamente hacia arriba o hacia abajo.

Valores que podrías querer modificar:
```yml
level: 21
```
Más acerca de los niveles de los jefes [aquí]($language$/elitemobs/creando_bosses.md&section=level).

Esto toma una combinación de ambos, lo que se dice acerca de los multiplicadores de daño / salud, ya que los jefes en niveles más bajos / altos puede necesitar ligeramente distintos multiplicadores de salud y daño para hacer que la pelea se sienta justa.

Sin embargo, el aspecto más importante a considerar aquí son los poderes en el jefe. Jefes de nivel inferior y superior suelen tener conjuntos de poder bastante diferentes dependiendo de lo difícil que esté destinada a ser la pelea. Tener el mismo conjunto de poderes para un jefe de nivel 10 y un jefe de nivel 200 normalmente resulta en peleas cuya dificultad se siente drásticamente diferente. De nuevo, la única manera de realmente encontrar el punto dulce es aprender cómo funcionan los poderes del plugin y probarlos.

Y por último, **¡pero no menos importante!** Probablemente querrás ajustar el botín personalizado. La mayoría de los jefes en EliteMobs tienen botín personalizado, y si estás cambiando el nivel del jefe, es probable que quieras cambiar la naturaleza de lo que éste suelta.

Valores que podrías querer modificar:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Más sobre las caídas de botín [aquí]($language$/elitemobs/loot_tables.md).

### Acreditación / publicación de contenido modificado

Bajo EliteMobs eres libre de publicar los dungeons que crees en los canales apropiados para hacerlo (Discord). Sin embargo, si tu creación es sólo una modificación de un dungeon existente, tu envío puede ser eliminado, especialmente si es sólo un pequeño ajuste o si contiene o se deriva de contenido premium (por razones obvias).

Eres libre y bienvenido de modificar cualquier contenido que hayas comprado o por otro medio descargado para ajustarlo a las necesidades de tu servidor para el uso dentro de tu propia red, sin embargo por razones obvias esto no te proporciona derechos de redistribución.

Nos reservamos el derecho de eliminar envíos de la comunidad por cualquier razón y en cualquier momento, aunque nos gustaría no tener que hacerlo.

### Más información

Si crees que esta página debería estar más desarrollada, deja una sugerencia en Discord diciendo qué debería agregarse a ella. Más información sobre los varios sistemas mencionados aquí están presentes en las otras páginas de la wiki.