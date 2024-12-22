# ¿Qué es un archivo de tesoro?

Los archivos de tesoro son los que determinan las tablas de botín para los cofres de BetterStructures. Normalmente se
asignan
a [generadores]($language$/betterstructures/creating_generators.md&section=treasurefilename), pero también se pueden
establecer a nivel de
una [configuración de construcción individual]($language$/betterstructures/creating_structures.md&section=treasurefile).

Estas tablas de botín son bastante potentes, pero también requieren conocimiento de algunos conceptos básicos de
estadística para entenderlas.

<details>
<summary>
¡Lee sobre esos conceptos aquí, el resto de la página asume que los entiendes!
</summary>

***Probabilidad ponderada***

BetterStructures y EliteMobs utilizan con frecuencia el concepto de probabilidad ponderada. Esto es para resolver un
problema simple: ¿cómo se puede establecer la probabilidad de elegir un elemento de una lista de elementos
potencialmente infinita?

La probabilidad ponderada resuelve este problema dando a cada elemento un peso. Si tienes 100 elementos y cada uno tiene
un peso de 1, todos tienen la misma probabilidad - 1% - de ser elegidos. Si añades un elemento más, con lo que el total
es de 101 elementos, y le das a ese último elemento una probabilidad de 1, todos los elementos siguen teniendo la misma
probabilidad - ~0,99% - de ser elegidos. Si le das al último elemento un peso de 2, la probabilidad de que sea elegido
aumenta: el nuevo peso total es de 102, el último elemento tiene un peso de 2 y 100/102 = ~0,98%, por lo que
0,98%+0,98% = 1,96% de probabilidad de ser elegido. Si le das al último elemento un peso de 100, el nuevo peso es de
200, y como la mitad de ese peso es tu nuevo elemento, tu nuevo elemento tiene un 50% de posibilidades de ser elegido.

Como puedes ver, esto es bueno para usar cuando puedes tener listas de cientos de cosas para aleatorizar.

***Distribución gaussiana***

Una distribución gaussiana es una función matemática en forma de campana.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Quizás te preguntes cómo es esto relevante para el sistema de botín. Una de las cosas que BetterStructures tiene que
decidir al establecer el botín en los cofres es cuánto botín aparece en esos cofres. La cantidad debería ser
constantemente alrededor de un número específico, pero idealmente no tan predecible que abrir un cofre se vuelva menos
emocionante.

Para lograr este efecto semi-aleatorio, se utiliza la distribución gaussiana para aleatorizar *cuántos* elementos se
eligen. Una vez que se elige esta cantidad, la *probabilidad ponderada* elige un elemento de la tabla de rareza al azar
y teniendo en cuenta los pesos.

Entonces, ¿cómo funciona la distribución gaussiana?

Afortunadamente, no tienes que preocuparte de cómo funciona la matemática detrás de ella, y en su lugar puedes centrarte
en las dos configuraciones que la modifican: la media y la desviación estándar.

*Media*

Para decirlo de forma sencilla, `mean` establece el centro de la curva gaussiana, lo que significa que establece la
cantidad más probable de elementos que aparecerán en un cofre. Esencialmente, si quieres que tus cofres tengan
normalmente 5 objetos, establece tu media en 5.

*Desviación estándar*

Imagina que el número medio de objetos en un cofre es 5. La `desviación estándar` ayuda a decidir cuánto puede cambiar
este número de un cofre a otro.

`Desviación estándar` pequeña (por ejemplo, 1): Esto significa que la mayoría de los cofres tendrán objetos muy cerca de
la media, como 4, 5 o 6 objetos. Es una experiencia más predecible. Por ejemplo, si un cofre tiene una desviación
estándar de 1, puedes esperar que casi todos los cofres tengan entre 4 y 6 objetos.

`Desviación estándar` media (por ejemplo, 2): Aquí hay más variedad. Los cofres podrían tener de 3 a 7 objetos. Aunque 5
objetos siguen siendo comunes, no es raro encontrar cofres con un poco más o menos. Por lo tanto, con una desviación
estándar de 2, es posible que ocasionalmente encuentres un cofre con sólo 3 objetos, o si tienes suerte, uno con 7
objetos.

`Desviación estándar` grande (por ejemplo, 3 o más): ¡Ahora las cosas se vuelven realmente sorprendentes! Los cofres
podrían tener tan pocos como 2 objetos o tantos como 8 o más. Esto significa que podrías encontrar un cofre con sólo un
par de objetos, pero también existe la posibilidad de encontrar un cofre lleno de golosinas. Por ejemplo, con una
desviación estándar de 3, un cofre podría tener entre 2 y 8 objetos, lo que hace que cada apertura de cofre sea una
emocionante apuesta.

***La media predeterminada es 4 y la desviación estándar predeterminada es 3.***

</details>

***

# Formato especial

Los archivos de tesoro tienen un formato especial que se parece a esto:

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

*Nota: esta es una versión muy reducida del archivo, el archivo real tiene 2599 líneas, ya que cubre mucho más botín y
cada encantamiento posible.*

# isEnabled

| Clave       |        Valores        | Por defecto |
|-------------|:---------------------:|-------------|
| `isEnabled` | [Booleano](#booleano) | `true`      |

***

# mean

| Clave  |     Valores     | Por defecto |
|--------|:---------------:|-------------|
| `mean` | [Doble](#doble) | `4`         |

Establece la `media`. Lee los detalles sobre
eso [aquí](https://magmaguy.com/wiki.html#lang=es&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# standardDeviation

| Clave               |     Valores     | Por defecto |
|---------------------|:---------------:|-------------|
| `standardDeviation` | [Doble](#doble) | `3`         |

Establece la `desviación estándar`. Lee los detalles sobre
eso [aquí](https://magmaguy.com/wiki.html#lang=es&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# items

Aquí es donde se pone complicado, ya que muchas de las opciones pueden ser establecidas por los administradores.
Analicemos el ejemplo de archivo de configuración anterior.

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

Aquí puedes ver que bajo la clave de configuración `items` tenemos un mapa con `common` y `rare`. Estas son `rarezas`!
***

## rarezas

Las rarezas no tienen un nombre fijo. Puedes añadirlas o eliminarlas, y personalizarlas tanto como quieras, siempre y
cuando utilices el mismo formato.

Ten en cuenta que lo que hace que estas tablas de rareza sean más o menos raras es el `peso` de la tabla de botín.

Por defecto:
- `common` tiene un `peso` predeterminado de 60
- `rare` tiene un `peso` predeterminado de 30
- `epic` tiene un `peso` predeterminado de 10

Haciendo que los objetos comunes tengan 6 veces más probabilidades de aparecer que los objetos épicos. Puedes leer más
sobre
los `pesos` [aquí](https://magmaguy.com/wiki.html#lang=es&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)!

Además del peso, cada tabla de rareza tiene su propia lista de `items`.

***

### objetos de rareza

Los objetos de rareza son
una [lista de mapas](https://magmaguy.com/wiki.html#lang=es&article=global+configuration_file_guide.md&section=map-list)
que enumera todos los objetos que tiene la tabla de rareza.

Estos objetos tienen las siguientes configuraciones:

| Clave                              |          Valores          | Por defecto |
|------------------------------------|:-------------------------:|-------------|
| `amount`                           | min-max [Entero](#entero) | variable    |
| `material`                         |   [Material](#material)   | variable    |
| `procedurallyGenerateEnchantments` |   [Booleano](#booleano)   | variable    |
| `weight`                           |      [Doble](#doble)      | variable    |

***

#### amount

***

Establece la cantidad que debe aparecer. Esto se expresa como un rango de la siguiente manera `amount: MIN-MAX`. Como
ejemplo, para que aparezcan entre 1 y 5
objetos: `amount: 1-5`.

#### material

Establece el material usando
los [nombres de la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) del
objeto que puede aparecer.

***

##### Caso especial - serialized

Cuando se utiliza el comando lootify, en lugar de un material lootify proporcionará un ajuste `serialized`. Esto es
generado automáticamente por el plugin y no debe ser generado manualmente. Está en un formato que no es legible por
humanos.

***

#### weight

Establece el peso para la probabilidad ponderada. Más información sobre
esto [aquí](https://magmaguy.com/wiki.html#lang=es&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

#### procedurallyGenerateItems

Establece si el objeto debe ser generado procedimentalmente en base a los ajustes de configuración
si `procedurallyGeneratedItemSettings`. Ten en cuenta que, según los ajustes, esto podría resultar en que un objeto se
genere sin encantamientos.

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

Como puedes ver, este archivo enumera los tipos de material, seguidos de los encantamientos y luego seguidos de los
niveles mínimo y máximo y una probabilidad.

Ten en cuenta que no puedes añadir materiales personalizados de otros plugins en estos ajustes, y probablemente no
podrás añadir encantamientos personalizados de otros plugins a menos que su autor diga explícitamente que ha hecho su
sistema compatible.

En cuanto a la configuración de los encantamientos:

| Clave      |            Valores            | Por defecto |
|------------|:-----------------------------:|-------------|
| `minLevel` |       [Entero](#entero)       | variable    |
| `maxLevel` |       [Entero](#entero)       | variable    |
| `chance`   | [Probabilidad](#probabilidad) | variable    |

***

## minLevel

Establece el nivel mínimo del encantamiento.

***

## maxLevel

Establece el nivel máximo del encantamiento.

***

## chance

Establece la probabilidad de que el encantamiento se produzca. Esto no está utilizando la probabilidad ponderada, sólo
una tirada de dados normal.
