[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Las mazmorras de instancia tienen una configuración especial para definir fácilmente diferentes dificultades para la mazmorra.

# Cómo funciona

Las dificultades se modelan en parte según el sistema de sincronización de nivel de Final Fantasy 14.

La armadura y las armas de élite obtienen un daño de élite y una defensa de élite específicos según su nivel, como puede ver en los objetos. Cuando esté en una mazmorra de instancia con una dificultad activada, el nivel del objeto se reducirá temporalmente e invisiblemente para que coincida con la sincronización de nivel.

Aquí hay un ejemplo específico: una espada de nivel 100 inflige 100 de daño sin encantar. Si un jugador está en una mazmorra de instancia con una dificultad que sincroniza el nivel del equipo con el nivel 50, la espada actuará como una espada de nivel 50 e infligirá 50 de daño.

Sin embargo, si esa espada tiene nitidez de nivel 10, seguirá agregando la misma cantidad de daño sobre el daño base.

Esto significa que, en las mazmorras de instancia con dificultades, lo que importa no es tanto el nivel del equipo, sino la calidad del equipo. Los jugadores que busquen superar la dificultad mítica deberán esforzarse para obtener objetos de alta calidad de otras mazmorras de instancia y, posiblemente, interactuar en gran medida con el sistema de mejora de objetos.

Esto también hace que sea casi imposible para los jugadores veteranos pisotear el contenido antiguo de alta dificultad y proporciona un incentivo para hacerlo incluso si su nivel está muy por encima del nivel de la mazmorra.

# Sistema de grupos

Para tener en cuenta los grupos de jugadores, los jefes están diseñados con poderes específicos que se vuelven más peligrosos a medida que se unen más jugadores a la arena. Además, los jefes obtienen una cantidad de aumento de salud no lineal a medida que más jugadores se unen a la instancia.

# Cómo definir una dificultad

Las dificultades se definen en la carpeta `dungeonpackager` en el archivo del paquete de mazmorras de mazmorras de instancia.

Echemos un vistazo a un ejemplo:

```yml
difficulties:
- levelSync: 60
  name: normal
- levelSync: 50
  name: hard
- levelSync: 40
  name: mythic
```

Esto establece tres dificultades. Las dificultades tienen dos campos opcionales obligatorios, `name` y `levelSync`.

El nombre es el nombre de la dificultad, tal como aparecerá en la configuración de dificultad en el juego. Esto puede tener cualquier nombre.

La sincronización de nivel establece el límite de nivel de objeto para la mazmorra de instancia, como se explicó anteriormente en esta página.

Puede tener tantas o tan pocas dificultades definidas como desee. Simplemente agregue o elimine entradas a la configuración de dificultades utilizando el mismo formato.

## Poderes basados en la dificultad

Es posible configurar a los jefes para que solo tengan poderes en dificultades específicas. Veamos un ejemplo:

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Nota: ¡esto es parte del archivo de configuración del jefe personalizado!**

En este caso, el jefe solo tendrá invulnerabilidad al fuego para dificultades con la ID `1` y `2`.

*Al agregar dificultades, sus ID comenzarán a contar desde 0 y aumentarán a medida que agregue más dificultades.*

## Botín basado en la dificultad

Es posible configurar a los jefes para que dejen caer botín específico para una dificultad de mazmorra de instancia. Veamos un ejemplo:

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```

**Nota: ¡esto es parte del archivo de configuración del jefe personalizado!**

En este caso, el jefe solo dejará caer el botín `himiko_boss_drop_axe_tank_normal.yml` para la dificultad `0` y tiene un 5 % de probabilidad de hacerlo.
