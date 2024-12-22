# Modificación de minidungeons existentes

A petición popular, esta página repasa los conceptos básicos de la modificación de minidungeons existentes. Esta no es
una guía paso a paso, sino una visión más amplia de cómo deben modificarse los sistemas. Tendrás que leer las páginas de
la wiki sobre [Jefes Personalizados]($language$/elitemobs/creating_bosses.md)
e [Ítems Personalizados]($language$/elitemobs/creating_items.md) para modificar esos valores.

### Modificación de la dificultad de la mazmorra

Hay tres razones por las que podrías querer modificar la dificultad de las mazmorras, y son las siguientes:

### Modificación de los multiplicadores de daño/salud de los jefes

Esta es la modificación más fácil de hacer. Si crees que los jefes hacen demasiado poco o demasiado daño, o que tienen
muy poca o demasiada salud, puedes modificar los valores asociados a estos modificadores en los archivos de jefe
contenidos en la carpeta `custombosses`.

Ejemplo de valores que querrías modificar:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```

Más información sobre las estadísticas de los
jefes [aquí]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Ten en cuenta que para muchos poderes el multiplicador de daño no modifica el daño aplicado por el poder. Consulta la
siguiente sección sobre cómo modificar los poderes.

### Modificación de los poderes de los jefes

La principal dificultad de EliteMobs es lidiar con los diversos poderes que pueden tener los jefes. Los jefes de nivel
superior tienden a tener más poderes y más difíciles, y los jefes de nivel inferior tienden a tener menos poderes y más
fáciles. Ciertos poderes usados juntos en el mismo jefe facilitan las peleas, y otros poderes juntos pueden hacer que la
pelea sea significativamente más difícil.

Ejemplo de valores que querrías modificar:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Más información sobre los poderes de los jefes [aquí]($language$/elitemobs/creating_bosses.md&section=powers).

Dado que hay demasiadas combinaciones de poderes para enumerar aquí, tendrás que aprender cómo funcionan los poderes y
probar tus encuentros para encontrar el punto ideal para lo que crees que es un encuentro que no es ni demasiado difícil
ni demasiado fácil.

### Modificación del nivel de los jefes

Esta es la pregunta más frecuente, y aunque es posible hacerlo, se necesitan algunos pasos para asegurarse de que estás
escalando tus jefes adecuadamente hacia arriba o hacia abajo.

Ejemplo de valores que querrías modificar:
```yml
level: 21
```

Más información sobre los niveles de los jefes [aquí]($language$/elitemobs/creating_bosses.md&section=level).

Esto requiere una combinación de lo que se dice sobre los multiplicadores de daño/salud, ya que los jefes en niveles
inferiores/superiores podrían necesitar multiplicadores de salud y daño ligeramente diferentes para que la pelea se
sienta bien.

Sin embargo, el aspecto más importante a considerar aquí son los poderes del jefe. Los jefes de nivel inferior y
superior tienden a tener conjuntos de poderes bastante diferentes dependiendo de lo difícil que se suponga que sea la
pelea. Tener el mismo conjunto de poderes para un jefe de nivel 10 y un jefe de nivel 200 generalmente resulta en peleas
cuya dificultad se siente drásticamente diferente. Nuevamente, la única manera de encontrar realmente el punto ideal es
aprender cómo funcionan los poderes del plugin y probarlos.

Y por último, **¡pero no menos importante!** Probablemente querrás ajustar el botín personalizado. La mayoría de los
jefes en EliteMobs tienen botín personalizado, y si estás cambiando el nivel del jefe, lo más probable es que quieras
cambiar la naturaleza del botín que deja caer.

Ejemplo de valores que querrías modificar:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```

Más información sobre las recompensas de botín [aquí]($language$/elitemobs/loot_tables.md).

### Acreditación/publicación de contenido modificado

En EliteMobs eres libre de publicar las mazmorras que crees en los canales apropiados para hacerlo (Discord). Sin
embargo, si tu creación es solo una modificación de una mazmorra existente, tu envío puede ser eliminado, especialmente
si es solo un pequeño ajuste o si contiene o se deriva de contenido premium (por razones obvias).

Eres libre y bienvenido a modificar cualquier contenido que hayas comprado o descargado de otra manera para ajustarlo a
las necesidades de tu servidor para usarlo dentro de tu propia red, sin embargo, por razones obvias, esto no te
proporciona derechos de redistribución.

Nos reservamos el derecho de eliminar los envíos de la comunidad por cualquier razón y en cualquier momento, aunque
odiaríamos tener que hacerlo realmente.

### Más información

Si crees que esta página debería ampliarse aún más, deja una sugerencia en Discord diciendo qué se debe agregar a ella.
Más información sobre los diversos sistemas mencionados aquí se encuentra en las otras páginas de la wiki.
