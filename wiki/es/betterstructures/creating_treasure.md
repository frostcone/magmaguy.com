```markdown
# ¿Qué es un archivo de tesoro?

Los archivos de tesoro son los que determinan las tablas de botín para los cofres de BetterStructures. Normalmente se asignan
a [generadores](es/betterstructures/creating_generators.md&section=treasurefilename) pero también se pueden establecer a nivel de una
[configuración de construcción individual](es/betterstructures/creating_structures.md&section=treasurefile).

Estas tablas de botín son bastante potentes, pero también requieren conocimientos de algunos conceptos básicos de estadística para entenderlas.

<details>
<summary>
¡Lee sobre esos conceptos aquí, el resto de la página asume que los entiendes!
</summary>

***Probabilidad ponderada***

BetterStructures y EliteMobs utilizan frecuentemente el concepto de probabilidad ponderada. Esto es para resolver un problema simple: ¿cómo puedes establecer la probabilidad de elegir un objeto de una lista de objetos potencialmente infinitos?

La probabilidad ponderada resuelve este problema asignando un peso a cada objeto. Si tienes 100 objetos y cada uno tiene un peso de 1, entonces todos tienen la misma probabilidad - 1% - de ser elegidos. Si añades un objeto más, elevando el total a 101 objetos, y le das a ese último objeto una probabilidad de 1, todos los objetos siguen teniendo la misma probabilidad - ~0.99% - de ser elegidos. Si le das al último objeto un peso de 2, la probabilidad de que sea elegido aumenta - el nuevo peso total es 102, el último elemento tiene un peso de 2 y 100/102 = ~0.98% por lo que 0.98%+0.98% = 1.96% de probabilidad de ser elegido. Si le das al último objeto un peso de 100, el nuevo peso es 200, y como la mitad de ese peso es tu nuevo objeto, tu nuevo objeto tiene un 50% de probabilidad de ser elegido.

Como puedes ver, esto es bueno para usar cuando puedes tener listas de cientos de cosas para aleatorizar.

***Distribución Gaussiana***

Una distribución gaussiana es una función matemática en forma de campana.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Quizás te preguntes cómo esto es relevante para el sistema de botín. Una cosa que BetterStructures tiene que decidir al establecer el botín en los cofres es cuánta cantidad de botín aparece en esos cofres. La cantidad debe ser consistentemente alrededor de un número específico, pero idealmente no tan predecible como para que abrir un cofre se vuelva menos emocionante.

Para lograr este efecto semi-aleatorio, se utiliza la distribución gaussiana para aleatorizar *cuántos* objetos se eligen. Una vez que se elige esta cantidad, la *probabilidad ponderada* elige un elemento de la tabla de rarity al azar y teniendo en cuenta los pesos.

Entonces, ¿cómo funciona la distribución gaussiana?

Afortunadamente, no tienes que preocuparte por cómo funciona la matemática detrás de ella, y en su lugar puedes centrarte en las dos configuraciones que la modifican: media y desviación estándar.

*Media*

En pocas palabras, `mean` establece el centro de la curva gaussiana, lo que significa que establece la cantidad más probable de objetos que aparecerán en un cofre. Esencialmente, si quieres que tus cofres suelan tener 5 objetos, establece tu mean en 5.

*Desviación estándar*

Imagina que el número promedio de objetos en un cofre es 5. La `standard deviation` ayuda a decidir cuánto puede cambiar este número de un cofre a otro.

`Standard Deviation` pequeña (por ejemplo, 1): Esto significa que la mayoría de los cofres tendrán objetos muy cercanos al promedio, como 4, 5 o 6 objetos. Es una experiencia más predecible. Por ejemplo, si un cofre tiene una desviación estándar de 1, puedes esperar que casi todos los cofres tengan entre 4 y 6 objetos.

`Standard Deviation` media (por ejemplo, 2): Aquí hay más variedad. Los cofres pueden tener de 3 a 7 objetos. Aunque 5 objetos siguen siendo comunes, no es inusual encontrar cofres con un poco más o menos. Así, con una desviación estándar de 2, podrías encontrar ocasionalmente un cofre con solo 3 objetos, o si tienes suerte, uno con 7 objetos.

`Standard Deviation` grande (por ejemplo, 3 o más): ¡Ahora las cosas se vuelven realmente sorprendentes! Los cofres podrían tener tan solo 2 objetos o tantos como 8 o más. Significa que podrías encontrar un cofre con solo un par de objetos, pero también existe la posibilidad de encontrar un cofre cargado de golosinas. Por ejemplo, con una desviación estándar de 3, un cofre podría tener entre 2 y 8 objetos, haciendo que cada apertura de cofre sea una apuesta emocionante.

***La media por defecto es 4, y la desviación estándar por defecto es 3.***

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

*Nota: esta es una versión muy reducida del archivo, el archivo real tiene 2599 líneas ya que cubre mucho más botín y todos los encantamientos posibles.*

# isEnabled

| Clave |       Valores        | Por defecto |
|-|:-------------------:|-|
| `isEnabled` | [Boolean](#boolean) | `true` |

***

# mean

| Clave    |      Valores       | Por defecto |
|--------|:-----------------:|---------|
| `mean` | [Double](#double) | `4`     |

Establece la `mean`. Lee los detalles al respecto [aquí](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# standardDeviation

| Clave                 |      Valores       | Por defecto |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Double](#double) | `3`     |

Establece la `standardDeviation`. Lee los detalles al respecto [aquí](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# items

Aquí es donde se pone un poco complicado, ya que muchas de las opciones pueden ser configuradas por los administradores. Ampliemos el ejemplo de archivo de configuración anterior.

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

Aquí, puedes ver que bajo la clave de configuración `items` tenemos un mapa con `common` y `rare`. ¡Estas son `rarities`!
***

## rarities

Las rarities no tienen un nombre fijo. Puedes añadirlas o eliminarlas, y personalizarlas tanto como quieras, siempre y cuando uses el mismo formato.

¡Ten en cuenta que lo que hace que estas tablas de rarity sean más o menos raras es el `weight` de la tabla de botín!

Por defecto:
- `common` tiene un `weight` por defecto de 60
- `rare` tiene un `weight` por defecto de 30
- `epic` tiene un `weight` por defecto de 10

Haciendo que los objetos common tengan 6 veces más probabilidades de caer que los objetos epic. ¡Puedes leer más sobre los `weight`s [aquí](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)!

Aparte del weight, cada tabla de rarity tiene su propia lista de `items`.

***

### rarity items

Los rarity items son una [lista de mapas](https://magmaguy.com/wiki.html#lang=en&article=global+configuration_file_guide.md&section=map-list) que enumera todos los objetos que tiene la tabla de rarity.

Estos items tienen las siguientes configuraciones:

| Clave                                |           Valores            | Por defecto |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Integer](#integer) | variable |
| `material`                         |    [Material](#Material)    | variable |
| `procedurallyGenerateEnchantments` |     [Boolean](#boolean)     | variable |
| `weight`                           |      [Double](#double)      | variable |

***

#### amount

***

Establece la cantidad a soltar. Esto se expresa como un rango de la siguiente manera `amount: MIN-MAX`. Como ejemplo, para soltar entre 1 y 5
objetos: `amount: 1-5`.

#### material

Establece el material usando los [nombres de la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) del
objeto que potencialmente puede caer.

***

##### Caso especial - serialized

Al usar el comando lootify, en lugar de un material, lootify proporcionará una configuración `serialized`. Esto es generado automáticamente por el plugin y no debe ser generado manualmente. Está en un formato que no es legible por humanos.

***

#### weight

Establece el weight para la probabilidad ponderada. Más sobre eso [aquí](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)!

***

#### procedurallyGenerateItems

Establece si el objeto debe ser generado proceduralmente basándose en la configuración de `procedurallyGeneratedItemSettings`. Ten en cuenta que, basándose en la configuración, esto podría resultar en que un objeto se genere sin encantamientos de todos modos.


# procedurallyGeneratedItemSettings

Echemos otro vistazo a nuestro ejemplo de archivo de configuración:

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

Como puedes ver, este archivo lista tipos de material, seguidos por encantamientos y luego por niveles mínimo y máximo y una probabilidad.

Ten en cuenta que no puedes añadir materiales personalizados de otros plugins en estas configuraciones, y probablemente no puedas añadir encantamientos personalizados de otros plugins a menos que su autor diga explícitamente que han hecho su sistema compatible.

En cuanto a la configuración de encantamientos:

| Clave        |       Valores        | Por defecto |
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

Establece la probabilidad de que ocurra el encantamiento. Esto no utiliza probabilidad ponderada, solo una tirada de dado normal.
```