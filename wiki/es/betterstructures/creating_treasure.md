# ¿Qué es un archivo de tesoro?

Los archivos de tesoro son los que determinan las tablas de botín para los cofres de BetterStructures. Suelen estar asignados
a los [generadores]($language$/betterstructures/creating_generators.md&section=nombreDelTesoro), pero también se pueden establecer a nivel de una [configuración de construcción individual]($language$/betterstructures/creating_structures.md&section=treasurefile).

Estas tablas de botín son bastante potentes, pero también requieren conocimientos de algunos conceptos básicos de estadística para entenderlas.

<details>
<summary>
¡Lea sobre esos conceptos aquí, el resto de la página asume que usted los entiende!
</summary>

***Probabilidad ponderada***

BetterStructures y EliteMobs usan frecuentemente el concepto de probabilidad ponderada. Esto resuelve un problema simple: ¿cómo puedes establecer la posibilidad de elegir un artículo de una lista de posibles artículos infinitos?

La probabilidad ponderada resuelve este problema dándole a cada artículo un peso. Si tienes 100 artículos y cada uno tiene un peso de 1, entonces todos tienen la misma posibilidad - 1% - de ser seleccionados. Si añades un artículo más, llevándolo a 101 artículos, y le das a este último artículo una posibilidad de 1, todos los artículos siguen teniendo la misma probabilidad - ~0.99% - de ser seleccionados. Si le das al último artículo un peso de 2, la posibilidad de elegirlo aumenta - el nuevo peso total es 102, el último elemento tiene un peso de 2 y 100/102 = ~0.98% por lo que 0.98%+0.98% = 1.96% de probabilidad de ser seleccionado. Si le das al último artículo un peso de 100, el nuevo peso es 200, y ya que la mitad de ese peso es tu nuevo artículo, tu nuevo artículo tiene un 50% de posibilidades de ser seleccionado.

Como puedes ver, esto es útil para usar cuando podrías tener listas de cientos de cosas de las que elegir de forma aleatoria.

***Distribución de Gauss***

Una distribución de Gauss es una función matemática de forma de campana.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Quizás te preguntes cómo esto es relevante para el sistema de botín. Una cosa que BetterStructures tiene que decidir cuando establece el botín en los cofres es cuánto botín aparece en esos cofres. La cantidad debería ser consistentemente alrededor de un número específico, pero idealmente no tan predecible que abrir un cofre podría volverse menos emocionante.

Para lograr este efecto semi-aleatorio, se utiliza la distribución de Gauss para aleatorizar *cuántos* elementos son seleccionados. Una vez que se ha seleccionado esta cantidad, la *probabilidad ponderada* escoge un elemento de la tabla de rarezas de forma aleatoria y teniendo en cuenta los pesos.

Entonces, ¿cómo funciona la distribución de Gauss?

Afortunadamente, no tienes que preocuparte por cómo funciona matemáticamente, y puedes centrarte en los dos ajustes que la modifican: la media y la desviación estándar.

*Media*

Para decirlo simplemente, la `media` establece el centro de la curva de Gauss, lo que significa que establece la cantidad más probable de elementos que aparecerán en un cofre. En esencia, si quieres que tus cofres normalmente tengan 5 objetos, establece tu media en 5.

*Desviación estándar*

Imagina que el número promedio de elementos en un cofre es 5. La `desviación estándar` ayuda a decidir cuánto puede variar este número de un cofre a otro.

Pequeña `Desviación estándar` (por ejemplo, 1): Esto significa que la mayoría de los cofres tendrán objetos muy cerca de la media, como 4, 5, o 6 objetos. Es una experiencia más predecible. Por ejemplo, si un cofre tiene una desviación estándar de 1, puedes esperar que casi todos los cofres tengan entre 4 a 6 objetos.

Media `Desviación estándar` (por ejemplo, 2): Aquí, hay más variedad. Los cofres podrían tener de 3 a 7 objetos. Mientras que 5 objetos siguen siendo comunes, no es raro encontrar cofres con un poco más o menos. Así que, con una desviación estándar de 2, podrías encontrar ocasionalmente un cofre con sólo 3 objetos, o si tienes suerte, uno con 7 objetos.

Gran `Desviación estándar` (por ejemplo, 3 o más): ¡Ahora las cosas se ponen realmente sorprendentes! Los cofres podrían tener tan poco como 2 objetos o tantos como 8 o más. Significa que podrías encontrar un cofre con solo un par de objetos, pero también existe la posibilidad de encontrar un cofre cargado de regalos. Por ejemplo, con una desviación estándar de 3, un cofre podría tener de 2 a 8 objetos, haciendo que cada apertura de cofre sea una excitante apuesta.

***La media predeterminada es 4, y la desviación estándar predeterminada es 3.***

</details>

***

# Formato especial

Los archivos de tesoro tienen un formato especial que se ve así:

```yml
isEnabled: true
mean: 4.0
standardDeviation: 3.0
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
  epic:
    weight: 10
    items:
    - amount: 2-10
      material: DIAMOND
      weight: 1.0
    - amount: 1-1
      material: DIAMOND_AXE
      weight: 6.0
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2

```

*Nota: esta es una versión muy reducida del archivo, el archivo real tiene 2599 líneas ya que cubre mucho más botín y cada posible encantamiento.*

# isEnabled

| Clave |       Valores        | Predeterminado |
|-|:-------------------:|-|
| `isEnabled` | [Boolean](#boolean) | `true` |

***

# mean

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|---------|
| `mean` | [Double](#double) | `4`     |

Establece la `media`. Lee los detalles sobre esto [aquí](#que-es-un-archivo-de-tesoro).

***

# standardDeviation

| Clave                 |      Valores       | Predeterminado |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Double](#double) | `3`     |

Establece la `desviación estándar`. Lee los detalles sobre esto [aquí](#que-es-un-archivo-de-tesoro).

***

# items

Aquí es donde se complica un poco, ya que muchas de las opciones pueden ser establecidas por los administradores. Vamos a hacer un zoom en el ejemplo de archivo de configuración de antes.

```yml
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
```

Aquí, puedes ver que debajo de la clave de configuración `items` tenemos un mapa con `common` y `rare`. ¡Estas son `rarezas`!
***

## rarezas

Las rarezas no tienen un nombre fijo. Puedes añadir o quitarlas, y personalizarlas tanto como quieras, siempre que uses el mismo formato.

Ten en cuenta que lo que hace que estas tablas de rareza sean más o menos raras es el `peso` de la tabla de botín!

Por defecto:
- `común` tiene un `peso` predeterminado de 60
- `rara` tiene un `peso` predeterminado de 30
- `épica` tiene un `peso` predeterminado de 10

Haciendo que los objetos comunes sean 6 veces más probables que los objetos épicos. Puedes leer más sobre [`pesos aquí`](#que-es-un-archivo-de-tesoro)!

Aparte del peso, cada tabla de rareza tiene su propia lista de `items`.

***

### items de rareza

Los items de rareza son una [lista de mapas]($language$/global/configuration_file_guide.md&section=map_list) que enumera todos los items que tiene la tabla de rareza.

Estos items tienen los siguientes ajustes:

| Clave                                |           Valores            | Predeterminado  |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Integer](#integer) | variable |
| `material`                         |    [Material](#Material)    | variable |
| `procedurallyGenerateEnchantments` |     [Boolean](#boolean)     | variable |
| `weight`                           |      [Double](#double)      | variable |

***

#### amount

***

Establece la cantidad a soltar. Esto se expresa como un rango de la siguiente manera `amount: MIN-MAX`. Como ejemplo, para soltar entre 1 a 5
objetos: `amount: 1-5`.

#### material

Establece el material usando los [nombres de Spigot API](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) del
artículo para caer potencialmente.

***

##### Caso especial - serialized

Al utilizar el comando lootify, en lugar de un material, el lootify proporcionará una configuración `serialized`. Esto es generado automáticamente por el plugin y no debería ser generado manualmente. Está en un formato que no es legible por humanos.

***

#### weight

Establece el peso para la oportunidad ponderada. Más sobre eso [aquí](#que-es-un-archivo-de-tesoro).

***

#### procedurallyGenerateItems

Establece si el objeto debe ser generado de manera procedural basado en las configuraciones de ajustes si `procedurallyGeneratedItemSettings`. Ten en cuenta que basado en los ajustes esto podría resultar en un objeto generando sin encantamientos independientemente.


# procedurallyGeneratedItemSettings

Vamos a echar otro vistazo a nuestro ejemplo de archivo de configuración:

```yml
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2
```

Como puedes ver, este archivo lista tipos de material, seguidos por encantamientos y luego seguidos por niveles mínimos y máximos y una casualidad.

Ten en cuenta que no puedes añadir materiales personalizados de otros plugins en estas configuraciones, y probablemente no seas capaz de añadir encantamientos personalizados de otros plugins a menos que su autor diga explícitamente que han hecho su sistema compatible.

En cuanto a los ajustes de encantamiento:

| Clave        |       Valores        | Predeterminado  |
|------------|:-------------------:|----------|
| `minLevel` | [Integer](#integer) | variable |
| `maxLevel` | [Integer](#integer) | variable |
| `chance`   |  [Chance](#chance)  | variable |

***

## minLevel

Establece el nivel mínimo de encantamiento.

***

## maxLevel

Establece el nivel máximo de encantamiento.

***

## chance

Establece la posibilidad de que ocurra el encantamiento. Esto no utiliza probabilidad ponderada, solo una tirada de dados normal.
