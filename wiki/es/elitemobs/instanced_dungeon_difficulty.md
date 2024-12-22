Las mazmorras instanciadas tienen una configuración especial para definir fácilmente diferentes dificultades para la
mazmorra.

# Cómo funciona

Las dificultades se modelan en parte siguiendo el sistema de sincronización de nivel de Final Fantasy 14.

Las armaduras y armas de élite obtienen daño de élite y defensa de élite específicos según su nivel, como puedes ver en
los objetos. Cuando se está en una mazmorra instanciada con una dificultad activada, el nivel del objeto se reducirá
temporal e invisiblemente para coincidir con la sincronización de nivel.

Aquí tienes un ejemplo concreto: una espada de nivel 100 hace 100 de daño sin encantamientos. Si un jugador está en una
mazmorra instanciada con una dificultad que sincroniza el equipo al nivel 50, la espada actuará como una espada de nivel
50 y hará 50 de daño.

Sin embargo, si esa espada tiene una agudeza de nivel 10, seguirá sumando la misma cantidad de daño por encima del daño
base.

Esto significa que, en las mazmorras instanciadas con dificultades, lo que importa no es tanto el nivel del equipo, sino
la calidad del equipo. Los jugadores que busquen superar la dificultad mítica tendrán que esforzarse por conseguir
objetos de alta calidad de otras mazmorras instanciadas y posiblemente interactuar mucho con el sistema de mejora de
objetos.

Esto también hace que sea casi imposible para los jugadores veteranos arrasar con el antiguo contenido de alta
dificultad y proporciona un incentivo para hacerlo incluso si su nivel está muy por encima del nivel de la mazmorra.

# Sistema de grupo

Para tener en cuenta los grupos de jugadores, los jefes están diseñados con poderes específicos que se vuelven más
peligrosos a medida que se unen más jugadores a la arena. Además, los jefes obtienen un aumento de salud no lineal a
medida que se unen más jugadores a la instancia.

# Cómo definir una dificultad

Las dificultades se definen en la carpeta `dungeonpackager` en el archivo de paquete de mazmorras de las mazmorras
instanciadas.

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

Esto establece tres dificultades. Las dificultades tienen dos campos opcionales obligatorios, `name` y `levelSync`.

El nombre es el nombre de la dificultad, tal como aparecerá en la configuración de dificultad dentro del juego. Este
puede tener cualquier nombre.

La sincronización de nivel establece el límite de nivel de objeto para la mazmorra instanciada, como se explicó
anteriormente en esta página.

Puedes tener tantas o tan pocas dificultades definidas como quieras. Simplemente añade o elimina entradas en la
configuración de dificultades utilizando el mismo formato.

## Poderes basados en la dificultad

Es posible configurar a los jefes para que sólo tengan poderes en dificultades específicas. Veamos un ejemplo:

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Nota: ¡esta es una parte del archivo de configuración del jefe personalizado!**

En este caso, el jefe sólo tendrá invulnerabilidad al fuego para las dificultades con el ID `1` y `2`.

*Al añadir dificultades, sus ID empezarán a contar desde 0 y aumentarán a medida que añadas más dificultades.*

## Botín basado en la dificultad

Es posible configurar a los jefes para que dejen caer botín específico de una dificultad de mazmorra instanciada. Veamos
un ejemplo:

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```

**Nota: ¡esta es una parte del archivo de configuración del jefe personalizado!**

En este caso, el jefe solo dejará caer el botín `himiko_boss_drop_axe_tank_normal.yml` para la dificultad `0` y tiene un
5% de posibilidades de hacerlo.
