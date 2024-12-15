# ¿Qué es un archivo de tesoro?

Los archivos de tesoro son los que determinan las tablas de botín para los cofres de BetterStructures. Por lo general, se asignan a los
[generadores]($language$/betterstructures/creating_generators.md&section=treasurefilename), pero también se pueden establecer en el nivel de una [configuración de compilación individual]($language$/betterstructures/creating_structures.md&section=treasurefile).

Estas tablas de botín son bastante poderosas, pero también requieren conocimiento de algunos conceptos básicos de estadística para entenderlas.

<details>
<summary>
Lea sobre esos conceptos aquí, ¡el resto de la página asume que los entiende!
</summary>

***Probabilidad ponderada***

BetterStructures y EliteMobs usan con frecuencia el concepto de probabilidad ponderada. Esto es para resolver un problema simple: ¿cómo puede establecer la posibilidad de elegir un elemento de una lista de elementos potencialmente infinitos?

La probabilidad ponderada resuelve este problema dando a cada elemento un peso. Si tiene 100 elementos y cada uno tiene un peso de 1, entonces todos tienen la misma posibilidad, 1%, de ser elegidos. Si agrega un elemento más, elevando el total a 101 elementos, y le da a ese último elemento una posibilidad de 1, todos los elementos aún tienen la misma posibilidad, ~0,99%, de ser elegidos. Si le da al último elemento un peso de 2, la posibilidad de que sea elegido aumenta: el nuevo peso total es 102, el último elemento tiene un peso de 2 y 100/102 = ~0,98%, por lo que 0,98% + 0,98% = 1,96% de posibilidades de ser elegido. Si le da al último elemento un peso de 100, el nuevo peso es 200, y dado que la mitad de ese peso es su nuevo elemento, su nuevo elemento tiene un 50% de posibilidades de ser elegido.

Como puede ver, esto es bueno para usar cuando puede tener listas de cientos de cosas de las que aleatorizar.

***Distribución gaussiana***

Una distribución gaussiana es una función matemática en forma de campana.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Es posible que se pregunte cómo esto es relevante para el sistema de botín. Una cosa que BetterStructures tiene que decidir al establecer el botín en los cofres es cuánto botín aparece en esos cofres. La cantidad debería estar constantemente alrededor de un número específico, pero idealmente no tan predecible como para que abrir un cofre sea menos emocionante.

Para lograr este efecto semi-aleatorio, la distribución gaussiana se utiliza para aleatorizar *cuántos* elementos se eligen. Una vez que se elige esta cantidad, la *probabilidad ponderada* elige un elemento de la tabla de rareza al azar y teniendo en cuenta los pesos.

Entonces, ¿cómo funciona la distribución gaussiana?

Afortunadamente, no tiene que preocuparse por cómo funciona la matemática detrás de ella, y en su lugar puede concentrarse en las dos configuraciones que la modifican: media y desviación estándar.

*Media*

En pocas palabras, `media` establece el centro de la curva gaussiana, lo que significa que establece la cantidad más probable de elementos que aparecerán en un cofre. Esencialmente, si desea que sus cofres suelan tener 5 elementos, establezca su media en 5.

*Desviación estándar*

Imagine que el número promedio de elementos en un cofre es 5. La `desviación estándar` ayuda a decidir cuánto puede cambiar este número de un cofre a otro.

`Desviación estándar` pequeña (por ejemplo, 1): esto significa que la mayoría de los cofres tendrán elementos muy cercanos al promedio, como 4, 5 o 6 elementos. Es una experiencia más predecible. Por ejemplo, si un cofre tiene una desviación estándar de 1, puede esperar que casi todos los cofres tengan entre 4 y 6 elementos.

`Desviación estándar` media (por ejemplo, 2): Aquí, hay más variedad. Los cofres pueden tener de 3 a 7 elementos. Si bien 5 elementos siguen siendo comunes, no es inusual encontrar cofres con un poco más o menos. Entonces, con una desviación estándar de 2, es posible que ocasionalmente encuentre un cofre con solo 3 elementos o, si tiene suerte, uno con 7 elementos.

`Desviación estándar` grande (por ejemplo, 3 o más): ¡Ahora las cosas se vuelven realmente sorprendentes! Los cofres podrían tener tan solo 2 elementos o hasta 8 o más. Significa que puede encontrar un cofre con solo un par de elementos, pero también existe la posibilidad de encontrar un cofre lleno de golosinas. Por ejemplo, con una desviación estándar de 3, un cofre podría tener entre 2 y 8 elementos, lo que hace que cada apertura de cofre sea una apuesta emocionante.

***La media predeterminada es 4 y la desviación estándar predeterminada es 3.***

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

*Nota: esta es una versión muy reducida del archivo, el archivo real tiene 2599 líneas, ya que cubre mucho más botín y todos los encantamientos posibles.*

# isEnabled

| Clave |       Valores        | Predeterminado |
|---|:-------------------:|---|
| `isEnabled` | [Booleano](#booleano) | `true` |

***

# mean

| Clave    |      Valores       | Predeterminado |
|--------|:-----------------:|---------|
| `mean` | [Doble](#doble) | `4`     |

Establezca la `media`. Lea los detalles sobre eso [aquí](https://magmaguy.com/wiki.html#lang=es&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# standardDeviation

| Clave                 |      Valores       | Predeterminado |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Doble](#doble) | `3`     |

Establezca la `desviación estándar`. Lea los detalles sobre eso [aquí](https://magmaguy.com/wiki.html#lang=es&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# items

Aquí es donde se vuelve complicado, ya que los administradores pueden establecer muchas de las opciones. Analicemos el ejemplo de archivo de configuración anterior.

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

Aquí, puede ver que debajo de la clave de configuración `items` tenemos un mapa con `common` y `rare`. ¡Estas son `rareza`!
***

## rareza

Las rarezas no tienen un nombre fijo. Puede agregarlas o eliminarlas, y personalizarlas tanto como desee, siempre que use el mismo formato.

¡Tenga en cuenta que lo que hace que estas tablas de rareza sean más o menos raras es el `peso` de la tabla de botín!

Por defecto:
- `common` tiene un `peso` predeterminado de 60
- `rare` tiene un `peso` predeterminado de 30
- `epic` tiene un `peso` predeterminado de 10

Haciendo que los elementos comunes tengan 6 veces más probabilidades de aparecer que los elementos épicos. Puede leer más sobre `peso`s [aquí](https://magmaguy.com/wiki.html#lang=es&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)!

Además del peso, cada tabla de rareza tiene su propia lista de `items`.

***

### items de rareza

Los elementos de rareza son una [lista de mapas](https://magmaguy.com/wiki.html#lang=es&article=global+configuration_file_guide.md&section=map-list) que enumera todos los elementos que tiene la tabla de rareza.

Estos elementos tienen las siguientes configuraciones:

| Clave                                |           Valores            | Predeterminado |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Entero](#entero) | variable |
| `material`                         |    [Material](#material)    | variable |
| `procedurallyGenerateEnchantments` |     [Booleano](#booleano)     | variable |
| `weight`                           |      [Doble](#doble)      | variable |

***

#### amount

***

Establece la cantidad que se debe soltar. Esto se expresa como un rango de la siguiente manera `amount: MIN-MAX`. Como ejemplo, para soltar entre 1 y 5
elementos: `amount: 1-5`.

#### material

Establece el material utilizando los [nombres de la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) del
elemento para que potencialmente caiga.

***

##### Caso especial: serializado

Al usar el comando lootify, en lugar de un material, lootify proporcionará una configuración `serialized`. Esto es generado automáticamente por el plugin y no debe generarse manualmente. Está en un formato que no es legible por humanos.

***

#### weight

Establece el peso para la posibilidad ponderada. Más sobre eso [aquí](https://magmaguy.com/wiki.html#lang=es&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

#### procedurallyGenerateItems

Establece si el objeto debe generarse procedimentalmente según la configuración si `procedurallyGeneratedItemSettings`. Tenga en cuenta que, según la configuración, esto podría resultar en la generación de un objeto sin encantamientos.

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

Como puede ver, este archivo enumera los tipos de materiales, seguidos de los encantamientos y luego seguidos de los niveles mínimo y máximo y una probabilidad.

Tenga en cuenta que no puede agregar materiales personalizados de otros plugins en estas configuraciones, y probablemente no pueda agregar encantamientos personalizados de otros plugins a menos que su autor diga explícitamente que han hecho que su sistema sea compatible.

En cuanto a la configuración de encantamiento:

| Clave        |       Valores        | Predeterminado |
|------------|:-------------------:|----------|
| `minLevel` | [Entero](#entero) | variable |
| `maxLevel` | [Entero](#entero) | variable |
| `chance`   |  [Probabilidad](#probabilidad)  | variable |

***

## minLevel

Establece el nivel de encantamiento mínimo.

***

## maxLevel

Establece el nivel de encantamiento máximo.

***

## chance

Establece la probabilidad de que ocurra el encantamiento. Esto no está utilizando probabilidad ponderada, solo una tirada de dados normal.
