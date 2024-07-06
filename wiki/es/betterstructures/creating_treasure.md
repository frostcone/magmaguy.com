# ¿Qué es un archivo de tesoro?

Los archivos de tesoro son los que determinan las tablas de botín para los cofres de BetterStructures. Suelen asignarse
a [generadores]($language$/betterstructures/creating_generators.md&section=treasurefilename) pero también se pueden establecer a
nivel de una [configuración de compilación individual]($language$/betterstructures/creating_structures.md&section=treasurefile).

Estas tablas de botín son bastante poderosas, pero también requieren conocimientos de algunos conceptos estadísticos básicos para comprenderlas.

<details>
<summary>
¡Lee sobre esos conceptos aquí, el resto de la página asume que los entiendes!
</summary>

***Probabilidad ponderada***

BetterStructures y EliteMobs utilizan con frecuencia el concepto de probabilidad ponderada. Esto es para resolver un problema simple: ¿cómo puedes establecer la posibilidad de elegir un elemento de una lista de elementos potencialmente infinitos?

La probabilidad ponderada resuelve este problema dando a cada elemento un peso. Si tienes 100 elementos y cada uno tiene un peso de 1, entonces todos tienen la misma probabilidad, 1%, de ser elegidos. Si agregas un elemento más, lo que eleva el total a 101 elementos, tú le das a ese último elemento una probabilidad de 1, todos los elementos aún tienen la misma probabilidad, ~ 0.99%, de ser elegidos. Si le das al último elemento un peso de 2, la probabilidad de que se elija aumenta: el nuevo peso total es 102, el último elemento tiene un peso de 2 y 100/102 = ~ 0.98%, por lo que 0.98% + 0.98% = 1.96% de probabilidad de ser elegido. Si le das al último elemento un peso de 100, el nuevo peso es 200, y dado que la mitad de ese peso es tu nuevo elemento, tu nuevo elemento tiene un 50% de posibilidades de ser elegido.

Como puedes ver, esto es bueno para usar cuando puedes tener listas de cientos de cosas para aleatorizar.

***Distribución gaussiana***

Una distribución gaussiana es una función matemática en forma de campana.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Es posible que te preguntes cómo se relaciona esto con el sistema de botín. Una cosa que BetterStructures tiene que decidir al colocar el botín en los cofres es cuántos botines aparecen en esos cofres. La cantidad debe ser constantemente alrededor de un número específico, pero idealmente no tan predecible que abrir un cofre pueda volverse menos emocionante.

Para lograr este efecto semialeatorio, la distribución gaussiana se utiliza para aleatorizar *cuántos* elementos se eligen. Una vez que se elige esta cantidad, la *probabilidad ponderada* elige un elemento de la tabla de rareza al azar y teniendo en cuenta los pesos.

Entonces, ¿cómo funciona la distribución gaussiana?

Afortunadamente, no tienes que preocuparte por cómo funcionan las matemáticas detrás de esto, y en su lugar puedes concentrarte en las dos configuraciones que lo modifican: media y desviación estándar.

*Significar*

En pocas palabras, `mean` establece la mitad de la curva gaussiana, lo que significa que establece la cantidad más probable de elementos que aparecerán en un cofre. Esencialmente, si deseas que tus cofres generalmente tengan 5 elementos, establece tu media en 5.

*Desviación Estándar*

Imagina que el número promedio de elementos en un cofre es 5. La `desviación estándar` ayuda a decidir cuánto puede cambiar este número de un cofre a otro.

Pequeña `desviación estándar` (por ejemplo, 1): esto significa que la mayoría de los cofres tendrán elementos muy cercanos al promedio, como 4, 5 o 6 elementos. Es una experiencia más predecible. Por ejemplo, si un cofre tiene una desviación estándar de 1, puedes esperar que casi todos los cofres tengan entre 4 y 6 elementos.

`Desviación estándar` media (por ejemplo, 2): aquí hay más variedad. Los cofres pueden tener de 3 a 7 elementos. Si bien 5 artículos siguen siendo comunes, no es inusual encontrar cofres con un poco más o menos. Entonces, con una desviación estándar de 2, es posible que ocasionalmente encuentres un cofre con solo 3 elementos, o si tienes suerte, uno con 7 elementos.

`Desviación estándar` grande (por ejemplo, 3 o más): ¡ahora las cosas se ponen realmente sorprendentes! Los cofres podrían tener tan solo 2 artículos o hasta 8 o más. Significa que puedes encontrar un cofre con solo un par de artículos, pero también existe la posibilidad de encontrar un cofre cargado de golosinas. Por ejemplo, con una desviación estándar de 3, un cofre podría tener entre 2 y 8 elementos, lo que hace que cada apertura de cofre sea una apuesta emocionante.

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

*Nota: esta es una versión muy recortada del archivo, el archivo real tiene 2599 líneas de largo ya que cubre mucho más botín y todos los encantamientos posibles.*

# isEnabled

| Clave |       Valores        | Defecto |
|-|:-------------------:|-|
| `isEnabled` | [Booleano](#boolean) | `true` |

***

# mean

| Clave    |      Valores       | Defecto |
|--------|:-----------------:|---------|
| `mean` | [Doble](#double) | `4`     |

Establezca la `media`. Lea los detalles sobre eso [aquí](#what-is-a-treasure-file).

***

# standardDeviation

| Clave                 |      Valores       | Defecto |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Doble](#double) | `3`     |

Establezca la `desviación estándar`. Lea los detalles sobre eso [aquí](#what-is-a-treasure-file).

***

# items

Aquí es donde se vuelve complicado, ya que los administradores pueden configurar muchas de las opciones. Ampliemos el ejemplo de archivo de configuración de antes.

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

Aquí, puedes ver que bajo la clave de configuración `items` tenemos un mapa con `common` y `rare`. ¡Estas son `rarezas`!
***

## rarities

Las rarezas no tienen un nombre fijo. Puedes agregarlos o eliminarlos, y personalizarlos tanto como desees, siempre que uses el mismo formato.

¡Tenga en cuenta que lo que hace que estas tablas de rareza sean más o menos raras es el `peso` de la tabla de botín!

Por defecto:
- `common` tiene un `peso` predeterminado de 60
- `rare` tiene un `peso` predeterminado de 30
- `epic` tiene un `peso` predeterminado de 10

Haciendo que los artículos comunes tengan 6 veces más probabilidades de caer que los artículos épicos. ¡Puedes leer más sobre los `pesos` aquí](#what-is-a-treasure-file)!

Además del peso, cada tabla de rareza tiene su propia lista de `elementos`.

***

### rarity items

Los elementos de rareza son una [lista de mapas]($language$/global/configuration_file_guide.md&section=map_list) que enumera todos los elementos que tiene la tabla de rareza.

Estos artículos tienen las siguientes configuraciones:

| Clave                                |           Valores            | Defecto  |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Entero](#integer) | variable |
| `material`                         |    [Material](#Material)    | variable |
| `procedurallyGenerateEnchantments` |     [Booleano](#boolean)     | variable |
| `weight`                           |      [Doble](#double)      | variable |

***

#### amount

***

Establece la cantidad a soltar. Esto se expresa como un rango de la siguiente manera `amount: MIN-MAX`. Como ejemplo, para soltar entre 1 y 5
artículos: `amount: 1-5`.

#### material

Establece el material utilizando los [nombres de la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) del
elemento que potencialmente caerá.

***

##### Caso especial - serializado

Cuando se usa el comando lootify, en lugar de un material, lootify proporcionará una configuración `serializada`. Esto lo genera automáticamente el complemento y no debe generarse manualmente. ¿Está en un formato que no es legible por humanos?

***

#### weight

Establece el peso para la probabilidad ponderada. Más sobre eso [aquí](#what-is-a-treasure-file).

***

#### procedurallyGenerateItems

Establece si el elemento debe generarse procedimentalmente en función de la configuración de configuración si `procedurallyGeneratedItemSettings`. Tenga en cuenta que, según la configuración, esto podría dar como resultado que un elemento se genere sin encantamientos independientemente.


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

Como puede ver, este archivo enumera los tipos de materiales, seguidos de encantamientos y luego seguidos de niveles mínimos y máximos y una posibilidad.

Tenga en cuenta que no puede agregar materiales personalizados de otros complementos en esta configuración, y es probable que no pueda agregar encantamientos personalizados de otros complementos a menos que su autor diga explícitamente que ha hecho que su sistema sea compatible.

En cuanto a la configuración de encantamiento:

| Clave        |       Valores        | Defecto  |
|------------|:-------------------:|----------|
| `minLevel` | [Entero](#integer) | variable |
| `maxLevel` | [Entero](#integer) | variable |
| `chance`   |  [Oportunidad](#chance)  | variable |

***

## minLevel

Establece el nivel mínimo de encantamiento.

***

## maxLevel

Establece el nivel máximo de encantamiento.

***

## chance

Establece la posibilidad de que ocurra el encantamiento. Esto no está usando probabilidad ponderada, solo una tirada de dados normal.