[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creación de elementos personalizados

## ¿Qué son los elementos personalizados?

Los elementos personalizados son elementos definidos por EliteMobs a través de archivos de configuración. Puedes personalizar varios aspectos de estos elementos, como el nivel del elemento, los encantamientos, el nombre, la descripción, la textura, ¡y más!

## Aplicación web

Puedes crear fácil y rápidamente botín personalizado [aquí](https://magmaguy.com/webapp/webapp.html)!

## Antes de comenzar

### ¿Dónde van los elementos personalizados?

Los archivos de elementos personalizados van en la carpeta de configuración `~/plugins/EliteMobs/customitems`

Es posible crear subcarpetas, como `~/plugins/EliteMobs/customitems/miselementos`. Esto es recomendable para mantener las cosas organizadas.

Los archivos se almacenan en el formato de archivo `.yml` y [Notepad++](https://notepad-plus-plus.org/) es el software de edición de archivos recomendado para el trabajo de configuración. Un archivo define un jefe, aunque es posible generar el mismo jefe varias veces e incluso establecer varias ubicaciones de generación para el mismo archivo de jefe.

Es posible utilizar la [aplicación web](https://magmaguy.com/webapp/webapp.html) para crear jefes personalizados y más de manera rápida y fácil.

<div align="center">

### Configuración más pequeña posible

**Por favor, ten en cuenta que el archivo de configuración más pequeño posible para un elemento personalizado es:**

```yml
```

Observa cómo este es simplemente un archivo vacío. Esto se usará por defecto en una espada de madera llamada "Nombre predeterminado". ¡**Todo en esta página es opcional!**

### Elemento de ejemplo

Veamos un ejemplo de cómo se ve un archivo de elemento.

<details> 
<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4Elemento de prueba'
lore:
- Este es un ítem genial
- Tiene leyendas geniales
enchantments:
- DAMAGE_ALL,4
- FLAMETHROWER,1
potionEffects:
- FAST_DIGGING,0,self,onHit
- POISON,0,target,onHit
- GLOWING,0,self,continuous
dropWeight: dynamic
scalability: scalable
itemType: custom
```

</div>

</details>

</div>

##  Configuración de elementos personalizados

A continuación se muestra una lista de todas las cosas que puedes configurar para los elementos personalizados:

<div align="center">

***

### isEnabled

Establece si el elemento está habilitado. No afecta a los elementos que ya se han generado.

| Key | Values | Default |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### material

Establece el material del elemento.

| Key | Values | Default |
|-|:-:|-|
| `material` | [¡Elige de esta lista!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
```

</div>

</details>


***

### level

Establece el nivel del elemento.

| Key | Values | Default |
|-|:-:|-|
| `level` | [Integer](#integer) | `0` |

Ten en cuenta que esta configuración no es relevante si configuras el [`scability`](#scalability) del elemento como `scalable`. Si lo configuras como `limited`, este será el nivel más alto posible del elemento.

Además, los materiales tienen un nivel mínimo. Los materiales de hierro son de nivel 6, los materiales de diamante son de nivel 7. No puedes forzar que los elementos sean de un nivel inferior al nivel del material.

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
level: 100
```

</div>

</details>


***

### name

Establece el nombre visible del elemento.

| Key | Values | Default |
|-|:-:|-|
| `material` | [String](#string) con [códigos de color](#color-codes) | "Nombre predeterminado" |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "&2Item genial"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

Establece la descripción del elemento.

| Key | Values | Default |
|-|:-:|-|
| `lore` | [Lista](#list) con [códigos de color](#color-codes) | ninguna |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
lore:
- "&2Esta es la espada más genial"
- "&2de todos los tiempos!"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

Establece los encantamientos del elemento.

| Key |                                                                                                       Values                                                                                                        | Default |
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [List](#list) con [encantamientos de Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) o [Encantamientos personalizados EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | ninguno |

Ten en cuenta que estas entradas siguen el formato `nombreDelEncantamiento:nivelDelEncantamiento`. ¡Comprueba el ejemplo de abajo!

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
enchantments: 
- "DAMAGE_UNDEAD,8"
- "DURABILITY,4"
- "DAMAGE_ALL,7"
- "LOUD_STRIKES,3"
```

<div align="center">

![create_item_enchantments.jpg](../../../img/wiki/create_item_enchantments.jpg)

</div>

</div>

</details>

También ten en cuenta que los encantamientos como sharpness se convierten por defecto en elite sharpness si el nivel comienza a superar los límites de Minecraft vanilla.

***

### potionEffects

Establece los efectos de pociones que el elemento tendrá. Estos se pueden aplicar al jugador o a una entidad dañada por el jugador.

| Key | Values | Default |
|-|:-:|-|
| `potionEffects` | [List](#list) con [efectos de pociones de Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)| ninguno |

Además, los efectos de las pociones usan un formato específico que permite a los administradores seleccionar a quién afectan y cuándo:

| Configuración | Descripción | Valores | Predeterminado |
|-|:-:|:-:|-|
| Nivel del efecto de poción | Establece el nivel del efecto de poción. ¡**Los efectos de las pociones comienzan en el nivel 0**!  | [Integer](#integer) | ninguno |
| Entidad afectada | Establece quién se ve afectado por el efecto de poción.  | `self` (el jugador) / `target` (entidad que recibe golpes) | ninguno |
| Método de aplicación | Establece cuándo se aplica el efecto de la poción.  | `onHit` / `continuous` (se reaplica constantemente) | ninguno |

El formato para los efectos de las pociones es `nombreDelEfectoDePoción,nivelDelEfectoDePoción,entidadAfectada,métodoDeAplicación`. ¡Comprueba el ejemplo de abajo!

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
potionEffects: 
- "POISON,0,target,onHit"
- "HEAL,1,self,onHit"
- "NIGHT_VISION,0,self,continuous"
```

<div align="center">

![create_item_potion_effects.jpg](../../../img/wiki/create_item_potion_effects.jpg)

</div>

</div>

Con este conjunto de efectos de pociones, ocurrirán las siguientes cosas:

Al golpear, el efecto de poción de veneno (nivel 1) se aplicará a la entidad que fue golpeada por el jugador. Además, el jugador se verá afectado por un efecto de poción de curación instantánea de nivel 2.

Continuamente, al jugador se le dará visión nocturna. Esto significa que el jugador tendrá visión nocturna mientras esté usando o sosteniendo el elemento.

</details>

***

### scalability

Establece cómo crece el nivel del elemento con el nivel del jefe que lo deja caer.

| Key | Values | Default |
|-|:-:|-|
| `scalability` | `fixed`, `limited` o `scalable`. ¡Comprueba más abajo! | scalable |

¡Comprueba esta lista para entender qué hacen las diferentes opciones!

| Configuración | Descripción |
|-|:-:|
| `fixed` | El nivel del elemento siempre será el nivel establecido en el archivo de configuración. |
| `limited` | El nivel máximo del elemento se limitará al configurado en el archivo de configuración o al nivel del jefe, el que sea menor. |
| `scalable` | El nivel del elemento estará completamente basado en el nivel del jefe que lo deje caer. |

Ten en cuenta que los elementos con un peso de caída siempre tendrán una `scalability` `fixed`.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
scalability: "scalable"
```

</div>

</details>

***

### itemType

Establece de dónde puedes obtener el elemento.

| Key | Values | Default |
|-|:-:|-|
| `itemType` | `custom` o `unique`. ¡Comprueba más abajo! | `custom` |

Hay dos tipos de elementos:

| Configuración | Descripción |
|-|:-:|
| `custom` | El elemento podrá ser dejado por cualquier mob EliteMobs capaz de dejar caer botín, y estará en la tienda personalizada. `
| `unique` | El elemento no será dejado por ningún jefe y no estará en la tienda personalizada. ¡La única forma de obtenerlo es configurando un Jefe Personalizado para que lo deje a través de su `uniqueLootTable`! |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
itemType: "unique"
```

</div>

</details>

***

### dropWeight

Establece la tabla de botín en la que se ajustará el elemento.

| Key |                  Values                  | Default |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` o un valor [Double](#double). | `dynamic` |

EliteMobs tiene 5 tablas de botín diferentes para elementos personalizados, excluyendo las que se configuran directamente como la `uniqueLootList` en los Jefes Personalizados.

Estas son las siguientes:

| Tabla de botín | Descripción | Peso predeterminado |
|-|:-:|:-:|
| Elementos generados de manera procedimental | Elementos que se generan al azar según los archivos de configuración del servidor | `90.0` |
| Elementos ponderados | Elementos que tienen un peso distinto de `dynamic` | `1.0` |
| Elementos fijos | Elementos que tienen una `scalability` fija | `10.0` |
| Elementos limitados | Elementos que tienen una `scalability` limitada | `3.0` |
| Elementos escalables | Elementos que son escalables | `6.0` |

Cuando un jefe muere, se selecciona un elemento de estas tablas según el archivo de configuración ItemSettings.yml. Los pesos predeterminados están listados anteriormente en `Peso predeterminado`. Cuanto mayor sea el peso, más probable será que caiga un elemento.

Los `Elementos ponderados` tienen un pequeño `Peso predeterminado`, lo que significa que no caerán con frecuencia. Los elementos con un `dropWeight` distinto de `dynamic` están destinados a ser raros y sólo se utilizan en los valores predeterminados para los encantos que los jefes dejan caer, ítems que no se usan directamente para el combate, sino más bien para fortalecer a los jugadores con efectos de poción.

El `dropWeight` que establezcas aquí establece la probabilidad de que un `Elemento ponderado` específico caiga de la lista de `Elementos ponderados`. No aumenta la posibilidad de que caigan `Elementos ponderados`.

**Si estás confundido y sólo quieres hacer armas y armaduras, omite esta configuración ya que por defecto es `dynamic` correctamente.**

Los `Elementos ponderados` normalmente tienen un peso de 1.0.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dropWeight: "dynamic"
```

</div>

</details>


***

### customModelID

Establece la textura del elemento. ¡Requiere utilizar una textura válida del paquete de recursos!

| Key | Values | Default |
|-|:-:|-|
| `customModelID` | [Integer](#integer) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

Esto usará la textura personalizada 1 de espadas de diamantes del paquete de recursos que está usando el jugador. Se recomienda que configures tu servidor para dar paquetes de recursos a los jugadores al iniciar sesión si quieres utilizar correctamente esta función.

</details>

***

### permission

Establece el permiso necesario para obtener el elemento.

| Key | Values | Default |
|-|:-:|-|
| `permission` | [String](#string) | ninguno |

Necesitarás un plugin de gestión de permisos para dar permisos a los jugadores. Esto sólo funcionará correctamente si no has deshabilitado el encantamiento soulbound.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permission: "elitemobs.permiso.genial"
```

</div>

Con esta configuración, sólo los jugadores con el permiso `elitemobs.permiso.genial` podrán obtener este elemento.

</details>

***

### soulbound

Establece si el elemento debe ser soulbound al caer.

| Key |       Values        | Default |
|-|:-------------------:|---------|
| `soulbound` | [Boolean](#boolean) | `true`  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>


</div>