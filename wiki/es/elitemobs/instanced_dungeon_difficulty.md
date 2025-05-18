Las mazmorras instanciadas tienen una configuración especial para definir fácilmente diferentes dificultades para la mazmorra.

# Cómo funciona

Las dificultades se modelan en parte a partir del sistema de sincronización de nivel de Final Fantasy 14.

La armadura y las armas de élite obtienen daño de élite y defensa de élite específicos basados en su nivel, como puedes ver en los objetos. Cuando estás en una mazmorra instanciada con una dificultad activada, el nivel del objeto se reducirá temporalmente e invisiblemente para coincidir con la sincronización de nivel.

Aquí tienes un ejemplo específico: una espada de nivel 100 hace 100 de daño sin encantar. Si un jugador está en una mazmorra instanciada con una dificultad que sincroniza el equipo al nivel 50, la espada actuará como una espada de nivel 50 y hará 50 de daño.

Sin embargo, si esa espada tiene afilado de nivel 10, seguirá añadiendo la misma cantidad de daño además del daño base.

Esto significa que, en las mazmorras instanciadas con dificultades, lo que importa no es tanto el nivel del equipo como la calidad del equipo. Los jugadores que busquen superar la dificultad mítica tendrán que esforzarse por conseguir objetos de alta calidad de otras mazmorras instanciadas y posiblemente interactuar mucho con el sistema de mejora de objetos.

Esto también hace que sea casi imposible para los jugadores veteranos arrasar contenido antiguo de alta dificultad y proporciona un incentivo para hacerlo incluso si su nivel está muy por encima del nivel de la mazmorra.

# Sistema de grupo

Para tener en cuenta los grupos de jugadores, los jefes están diseñados con poderes específicos que se vuelven más peligrosos a medida que más jugadores se unen a la arena. Además, los jefes obtienen una cantidad de aumento de salud no lineal a medida que más jugadores se unen a la instancia.

# Cómo definir una dificultad

Las dificultades se definen en la carpeta `dungeonpackager` en el archivo de paquete de mazmorra de las mazmorras instanciadas.

Veamos un ejemplo:

```yml
difficulties:
- levelSync: 60
  name: normal
- levelSync: 50
  name: hard
- levelSync: 40
  name: mythic
```

Esto establece tres dificultades. Las dificultades tienen dos campos obligatorios, `name` y `levelSync`.

El nombre es el nombre de la dificultad, tal como aparecerá en la configuración de dificultad en el juego. Puede tener cualquier nombre.

La sincronización de nivel establece el límite de nivel de objeto para la mazmorra instanciada, como se explicó anteriormente en esta página.

Puedes tener tantas o tan pocas dificultades definidas como quieras. Simplemente añade o elimina entradas a la configuración de dificultades usando el mismo formato.

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

En este caso, el jefe solo tendrá invulnerabilidad al fuego para las dificultades con ID `1` y `2`.

*Al añadir dificultades, sus ID's comenzarán a contar desde 0 y aumentarán a medida que añadas más dificultades.*

## Botín basado en la dificultad

Es posible configurar a los jefes para que suelten botín específico de una dificultad de mazmorra instanciada. Veamos un ejemplo:

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```

**Nota: ¡esto es parte del archivo de configuración del jefe personalizado!**

En este caso, el jefe solo soltará el botín `himiko_boss_drop_axe_tank_normal.yml` para la dificultad `0` y tiene un 5% de probabilidad de hacerlo.