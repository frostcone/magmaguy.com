[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creación de objetos personalizados

## ¿Qué son los objetos personalizados?

Los objetos personalizados son objetos definidos por EliteMobs a través de archivos de configuración. ¡Puede personalizar varios aspectos sobre estos objetos, como el nivel del objeto, los encantamientos, el nombre, la tradición, la textura y más!

## Aplicación web

Puede crear objetos personalizados de forma fácil y rápida [aquí](https://magmaguy.com/webapp/webapp.html).

## Antes de comenzar

### ¿Dónde van los objetos personalizados?

Los archivos de objetos personalizados van a la carpeta de configuración `~/plugins/EliteMobs/customitems`

Es posible crear subcarpetas, como `~/plugins/EliteMobs/customitems/myitems`. Se recomienda esto para mantener las cosas organizadas.

Los archivos se almacenan en formato de archivo `.yml` y [Notepad++] (https://notepad-plus-plus.org/) es el software de edición de archivos recomendado para el trabajo de configuración. Un archivo define un jefe, aunque es posible generar el mismo jefe varias veces e incluso establecer varias ubicaciones de generación para el mismo archivo de jefe.

Es posible utilizar la [aplicación web](https://magmaguy.com/webapp/webapp.html) para crear jefes personalizados y más de forma rápida y sencilla.

<div align="center">

### La configuración más pequeña posible

**Tenga en cuenta que el archivo de configuración más pequeño posible para un objeto personalizado es:**

```yml
```

Observe cómo este es solo un archivo vacío. Esto hará que se use una espada de madera llamada "Nombre predeterminado" de forma predeterminada. **¡Todo en esta página es opcional!**

### Objeto de ejemplo

Echemos un vistazo a un ejemplo de cómo se ve un archivo de objeto.

<details>
<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4Objeto de prueba'
lore:
- Este es un objeto genial
- Tiene una tradición genial
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

##  Configuración de objetos personalizados

La siguiente es una lista de todas las cosas que puede configurar para los objetos personalizados:

<div align="center">

***

### isEnabled

Establece si el objeto está habilitado. No afecta a los objetos que ya se han generado.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece el material del objeto.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `material` | [¡Elija de esta lista!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

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

Establece el nivel del objeto.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `level` | [Entero](#integer) | `0` |

Tenga en cuenta que esta configuración no es relevante si establece la [`escalabilidad`](#scalability) del objeto en `scalable`. Si lo establece en `limited`, este será el nivel máximo posible del objeto.

Además, los materiales tienen un nivel mínimo. Los materiales de hierro son de nivel 6, los materiales de diamante son de nivel 7. No puede forzar que los objetos tengan un nivel más bajo que el nivel del material.

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

Establece el nombre para mostrar del objeto.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `material` | [Cadena](#string) con [códigos de color](#color-codes) | "Nombre predeterminado" |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "&2Objeto genial"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

Establece la tradición del objeto.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `lore` | [Lista](#list) con [códigos de color](#color-codes) | ninguno |

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

Establece los encantamientos en el objeto.

| Clave |                                                                                                       Valores                                                                                                        | Predeterminado |
|---|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [Lista](#list) con [encantamientos de Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) o [encantamientos personalizados de EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | ninguno |

Tenga en cuenta que estas entradas siguen el formato `nombreDeEncantamiento:nivelDeEncantamiento`. ¡Consulte el ejemplo a continuación!

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

También tenga en cuenta que los encantamientos como la nitidez se convierten en nitidez de élite de forma predeterminada si el nivel comienza a superar los límites de vainilla de Minecraft.

***

### potionEffects

Establece los efectos de poción que tendrá el objeto. Estos se pueden aplicar al jugador o a una entidad dañada por el jugador.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `potionEffects` | [Lista](#list) con [efectos de poción de Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ninguno |

Además, los efectos de poción usan un formato específico que permite a los administradores seleccionar a quién afecta y cuándo:

| Configuración | Descripción | Valores | Predeterminado |
|---|:-:|:-:|---|
| Nivel de efecto de poción | Establece el nivel del efecto de poción. **¡Los efectos de poción comienzan en el nivel 0**! | [Entero](#integer) | ninguno |
| Entidad afectada | Establece a quién afecta el efecto de poción. | `self` (el jugador) / `target` (entidad que recibe el golpe) | ninguno |
| Método de aplicación | Establece cuándo se aplica el efecto de poción. | `onHit` / `continuous` (se vuelve a aplicar constantemente) | ninguno |

El formato para los efectos de poción es `nombreDelEfectoDePoción,nivelDelEfectoDePoción,entidadAfectada,métodoDeAplicación`. ¡Consulte el ejemplo a continuación!

EliteMobs también incluye objetos personalizados que funcionan como amuletos. Estos objetos no hacen nada más que proporcionar efectos de poción al jugador cuando el objeto se sostiene o se equipa en una ranura.

ADVERTENCIA: El uso del efecto de poción INSTANT_DAMAGE curará a los mobs no muertos al impactar, ya que esta es una mecánica predeterminada en la versión vainilla de Minecraft.

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

Con este conjunto de efectos de poción, sucederán las siguientes cosas:

Al golpear, el efecto de poción de veneno (nivel 1) se aplicará a la entidad que fue golpeada por el jugador. Además, el jugador se verá afectado por un efecto de poción de curación instantánea de nivel 2.

Continuamente, el jugador recibirá visión nocturna. Esto significa que el jugador tendrá visión nocturna mientras lleve puesto o sostenga el objeto.

</details>

***

### scalability

Establece cómo el nivel del objeto crece con el nivel del jefe que lo deja caer.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `scalability` | `fixed`, `limited` o `scalable`. ¡Consulte a continuación! | scalable |

Consulte esta lista para comprender lo que hacen las diferentes opciones.

| Configuración | Descripción |
|---|:-:|
| `fixed` | El nivel del objeto siempre será el nivel establecido en el archivo de configuración. |
| `limited` | El nivel máximo del objeto estará limitado por el establecido en el archivo de configuración o el nivel del jefe, el que sea más bajo. |
| `scalable` | El nivel del objeto se basará por completo en el nivel del jefe que lo deja caer. |

Tenga en cuenta que los objetos con un dropWeight siempre tendrán una escalabilidad `fixed`.

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

Establece de dónde puede obtener el objeto.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `itemType` | `custom` o `unique`. ¡Consulte a continuación! | `custom` |

Hay dos tipos de objetos:

| Configuración | Descripción |
|---|:-:|
| `custom` | El objeto podrá obtenerse de cualquier mob de EliteMobs capaz de dejar caer botín, y estará en la tienda personalizada. |
| `unique` | Ningún jefe dejará caer el objeto y no estará en la tienda personalizada. ¡La única forma de obtenerlo es configurando un jefe personalizado para que lo deje caer a través de su `uniqueLootTable`! |

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

Establece la tabla de botín en la que encajará el objeto.

| Clave |                  Valores                  | Predeterminado |
|---|:----------------------------------------:|-|
| `dropWeight` | `dynamic` o un valor [Doble](#double). | `dynamic` |

EliteMobs tiene 5 tablas de botín diferentes para objetos personalizados, excluyendo las que se configuran directamente como `uniqueLootList` en los jefes personalizados.

Estas son las siguientes:

| Tabla de botín | Descripción | Peso predeterminado |
|---|:-:|:-:|
| Objetos generados por procedimientos | Objetos que se generan aleatoriamente según los archivos de configuración del servidor | `90.0` |
| Objetos ponderados | Objetos que tienen un peso diferente de `dynamic` | `1.0` |
| Objetos fijos | Objetos que tienen una escalabilidad fija | `10.0` |
| Objetos limitados | Objetos que tienen una escalabilidad limitada | `3.0` |
| Objetos escalables | Objetos que son escalables | `6.0` |

Cuando un jefe muere, se selecciona un objeto de estas tablas según el archivo de configuración ItemSettings.yml. Los valores predeterminados para los pesos se enumeran arriba en `Peso predeterminado`. Cuanto mayor sea el peso, más probable es que caiga un objeto.

Los `Objetos ponderados` tienen un `Peso predeterminado` pequeño, lo que significa que no aparecerán con mucha frecuencia. Los objetos con un `dropWeight` que no sea `dynamic` están destinados a ser raros y solo se utilizan en los valores predeterminados para los amuletos que dejan caer los jefes, objetos que no se utilizan directamente para el combate, sino más bien para mejorar a los jugadores con efectos de poción.

El `dropWeight` que establezca aquí establece la probabilidad de que un `Objeto ponderado` específico caiga de la lista de `Objetos ponderados`. No aumenta la posibilidad de que caigan `Objetos ponderados`.

**Si está confundido y solo quiere hacer armas y armaduras, omita esta configuración, ya que se establece correctamente en `dynamic` de forma predeterminada.**

Los `Objetos ponderados` suelen tener un peso de 1.0.

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

Establece la textura del objeto. ¡Requiere el uso de una textura válida del paquete de recursos!

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `customModelID` | [Entero](#integer) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

Esto usará la textura personalizada 1 de las espadas de diamante del paquete de recursos que esté usando el jugador. Se recomienda configurar su servidor para que proporcione a los jugadores paquetes de recursos al iniciar sesión si desea usar esta función correctamente.

</details>

***

### customModelV2

A partir de la versión 1.21.4 de Minecraft (EM 9.1.13), esta es la nueva configuración obligatoria para configurar ID de modelo de objeto personalizado.
Establece la textura del objeto. ¡Requiere el uso de una textura válida del paquete de recursos!

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `customModelV2` | [Cadena](#string) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customModelV2: elitemobs:equipment/magmaguys_toothpick
```

Esta configuración asigna una textura específica a un objeto. Así es como funciona:

- `elitemobs:` es el directorio principal en la carpeta `assets` del paquete de recursos.
- `equipment` es un subdirectorio dentro de `assets/elitemobs/models`.
- `magmaguys_toothpick` es el archivo de modelo ubicado en `assets/elitemobs/models/equipment` en el paquete de recursos.

La ruta completa al archivo de modelo en este ejemplo sería:
`\.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\equipment\magmaguys_toothpick.json`

</div>

Esto usará la textura personalizada `magmaguys_toothpick` del paquete de recursos EliteMobs que esté usando el jugador. Se recomienda configurar su servidor para que proporcione a los jugadores paquetes de recursos al iniciar sesión si desea usar esta función correctamente.

</details>

***

### permission

Establece el permiso requerido para obtener el objeto.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `permission` | [Cadena](#string) | ninguno |

Necesitará un plugin de administración de permisos para otorgar permisos a los jugadores. Esto solo funcionará correctamente si no ha deshabilitado el encantamiento de enlace de alma.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permission: "elitemobs.cool.permission"
```

</div>

Con esta configuración, solo los jugadores con el permiso `elitemobs.cool.permission` podrán obtener este objeto.

</details>

***

### soulbound

Establece si el objeto debe tener un enlace de alma al caer.

| Clave |       Valores        | Predeterminado |
|---|:-------------------:|---------|
| `soulbound` | [Booleano](#booleano) | `true`  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>

</div>
