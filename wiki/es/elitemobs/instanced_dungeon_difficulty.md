Las mazmorras instanciadas tienen una configuración especial para definir fácilmente diferentes dificultades para la mazmorra.

# Cómo funciona

Las dificultades se modelan en parte después del sistema de sincronización de nivel de Final Fantasy 14.

La armadura y las armas de élite obtienen daño de élite específico y defensa de élite basada en su nivel, como puedes ver en los objetos. Cuando estás en una mazmorra instanciada con una dificultad activada, el nivel del objeto se reducirá temporal e invisiblemente para igualar la sincronización de nivel.

Aquí te proporcionamos un ejemplo específico: una espada de nivel 100 causa 100 de daño sin encantar. Si un jugador está en una mazmorra instanciada con una dificultad que sincroniza el equipo al nivel 50, la espada actuará como una espada de nivel 50 y causará 50 de daño.

Sin embargo, si esa espada tiene un nivel 10 de nitidez, aún agregará la misma cantidad de daño adicional al daño base.

Esto significa que, en las mazmorras instanciadas con dificultades, lo que importa no es tanto el nivel del equipo sino la calidad del equipo. Los jugadores que buscan vencer la dificultad mítica tendrán que trabajar para obtener objetos de alta calidad de otras mazmorras instanciadas e interactuar posiblemente de manera intensiva con el sistema de mejora de objetos.

Esto también hace que sea casi imposible para los jugadores veteranos aplastar contenidos antiguos de alta dificultad y proporciona un incentivo para hacerlo incluso si su nivel está muy por encima del nivel de la mazmorra.

# Sistema de grupos

Para tener en cuenta a las partidas de jugadores, los jefes están diseñados con poderes específicos que se vuelven más peligrosos a medida que se unen más jugadores al arena. Además, los jefes obtienen un aumento de salud no lineal a medida que más jugadores se unen a la instancia.

# Cómo definir una dificultad

Las dificultades se definen en la carpeta `dungeonpackager` en el archivo de paquete de mazmorras instanciadas.

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

El nombre es el nombre de la dificultad, como aparecerá en la configuración de dificultad en el juego. Esto puede tener cualquier nombre.

La sincronización de nivel establece el límite de nivel de objeto para la mazmorra instanciada, como se explicó anteriormente en esta página.

Puedes tener tantas o tan pocas dificultades definidas como quieras. Simplemente agrega o elimina entradas a la configuración de dificultades usando el mismo formato.

## Poderes basados en la dificultad

Es posible configurar a los jefes para que solo tengan poderes en dificultades específicas. Veamos un ejemplo:

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Nota: ¡esta es una parte del archivo de configuración del jefe personalizado!**

En este caso, el jefe solo tendrá invulnerabilidad al fuego para dificultades con la ID `1` y `2`.

*Cuando agregues dificultades, sus ID comenzarán a contar desde 0 e incrementarán a medida que agregues más dificultades.*

## Botín basado en la dificultad

Es posible configurar a los jefes para que dejen caer botín específico a una dificultad de mazmorra instanciada. Veamos un ejemplo:

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```

**Nota: ¡esta es una parte del archivo de configuración del jefe personalizado!**

En este caso, el jefe solo soltará el botín `himiko_boss_drop_axe_tank_normal.yml` para la dificultad `0` y tiene un 5% de probabilidad de hacerlo.