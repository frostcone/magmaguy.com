[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creando objetos personalizados

## ¿Qué son los objetos personalizados?

Los objetos personalizados son objetos definidos por EliteMobs a través de archivos de configuración. ¡Puedes personalizar varios aspectos de estos objetos, como el nivel del objeto, los encantamientos, el nombre, la tradición, la textura y más!

## Aplicación web

¡Puedes crear botín personalizado de forma fácil y rápida [aquí](https://magmaguy.com/webapp/webapp.html)!

## Antes de empezar

### ¿Dónde van los objetos personalizados?

Los archivos de objetos personalizados van en la carpeta de configuración `~/plugins/EliteMobs/customitems`.

Es posible crear subcarpetas, como `~/plugins/EliteMobs/customitems/misobjetos`. Se recomienda hacer esto para mantener las cosas organizadas.

Los archivos se almacenan en el formato de archivo `.yml` y [Notepad++](https://notepad-plus-plus.org/) es el software de edición de archivos recomendado para el trabajo de configuración. Un archivo define un jefe, aunque es posible generar el mismo jefe varias veces e incluso establecer varias ubicaciones de generación para el mismo archivo de jefe.

Es posible utilizar la [aplicación web](https://magmaguy.com/webapp/webapp.html) para crear de forma rápida y sencilla jefes personalizados y mucho más.

<div align="center">

### La configuración más pequeña posible

**Ten en cuenta que el archivo de configuración más pequeño posible para un objeto personalizado es:**

```yml
```

Ten en cuenta que este es solo un archivo vacío. Esto utilizará de forma predeterminada una espada de madera llamada "Nombre predeterminado". **¡Todo en esta página es opcional!**

### Ejemplo de objeto

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

## Configuración de objetos personalizados

La siguiente es una lista de todas las cosas que puedes configurar para los objetos personalizados:

<div align="center">

***

### isEnabled

Establece si el objeto está habilitado. No afecta a los objetos que ya se han generado.

| Clave | Valores | Predeterminado |
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

Establece el material del objeto.

| Clave | Valores | Predeterminado |
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

Establece el nivel del objeto.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `level` | [Entero](#entero) | `0` |

Ten en cuenta que esta configuración no es relevante si estableces la [`escalabilidad`](#escalabilidad) del objeto en `escalable`. Si lo configuras como `limitado`, este será el nivel más alto posible del objeto.

Además, los materiales tienen un nivel mínimo. Los materiales de hierro son de nivel 6, los materiales de diamante son de nivel 7. No puedes obligar a los objetos a tener un nivel inferior al nivel del material.

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
|-|:-:|-|
| `material` | [Texto](#texto) con [códigos de color](#códigos-de-color) | "Nombre predeterminado" |

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
|-|:-:|-|
| `lore` | [Lista](#lista) con [códigos de color](#códigos-de-color) | ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
lore:
- "&2Esta es la espada más genial"
- "&2¡de todos los tiempos!"
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
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [Lista](#lista) con [encantamientos de Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) o [encantamientos personalizados de EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | ninguno |

Ten en cuenta que estas entradas siguen el formato `nombreDelEncantamiento:nivelDelEncantamiento`. ¡Consulta el siguiente ejemplo!

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

También ten en cuenta que los encantamientos como la nitidez se convierten en nitidez de élite de forma predeterminada si el nivel comienza a superar los límites de vainilla de Minecraft.

***

### potionEffects

Establece los efectos de poción que tendrá el objeto. Estos se pueden aplicar al jugador oa una entidad dañada por el jugador.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `potionEffects` | [Lista](#lista) con [efectos de poción de Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)| ninguno |

Además, los efectos de poción utilizan un formato específico que permite a los administradores seleccionar quién se ve afectado y cuándo:

| Ajuste | Descripción | Valores | Predeterminado |
|-|:-:|:-:|-|
| Nivel de efecto de poción | Establece el nivel del efecto de poción. **¡Los efectos de poción comienzan en el nivel 0**!  | [Entero](#entero) | ninguno |
| Entidad afectada | Establece quién se ve afectado por el efecto de poción.  | `self` (el jugador) / `target` (entidad que recibe el golpe) | ninguno |
| Método de aplicación | Establece cuándo se aplica el efecto de poción.  | `onHit` / `continuous` (se vuelve a aplicar constantemente) | ninguno |

El formato para los efectos de poción es `nombreDelEfectoDePoción,nivelDelEfectoDePoción,entidadAfectada,métodoDeAplicación`. ¡Consulta el siguiente ejemplo!

EliteMobs también presenta elementos personalizados que funcionan como amuletos. Estos objetos no hacen nada más que proporcionar efectos de poción al jugador cuando el objeto se sostiene o se equipa en una ranura.

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

Continuamente, al jugador se le dará visión nocturna. Esto significa que el jugador tendrá visión nocturna mientras lleve puesto o sostenga el objeto.

</details>

***

### scalability

Establece cómo crece el nivel del objeto con el nivel del jefe que lo deja caer.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `scalability` | `fixed`, `limited` o `scalable`. ¡Consulta a continuación! | scalable |

¡Consulta esta lista para comprender qué hacen las diferentes opciones!

| Ajuste | Descripción |
|-|:-:|
| `fixed` | El nivel del objeto siempre será el nivel establecido en el archivo de configuración. |
| `limited` | El nivel máximo del objeto estará limitado por el establecido en el archivo de configuración o el nivel del jefe, lo que sea más bajo. |
| `scalable` | El nivel del objeto se basará completamente en el nivel del jefe que lo deja caer. |

Ten en cuenta que los objetos con un `dropWeight` siempre tendrán una escalabilidad `fija`.

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

Establece de dónde puedes obtener el objeto.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `itemType` | `custom` o `unique`. ¡Consulta a continuación! | `custom` |

Hay dos tipos de objetos:

| Ajuste | Descripción |
|-|:-:|
| `custom` | El objeto podrá ser dejado caer por cualquier mob de EliteMobs que pueda dejar caer botín, y estará en la tienda personalizada. `
| `unique` | Ningún jefe soltará el objeto y no estará en la tienda personalizada. ¡La única forma de obtenerlo es configurando un jefe personalizado para que lo suelte a través de su `uniqueLootTable`! |

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
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` o un valor [Doble](#doble). | `dynamic` |

EliteMobs tiene 5 tablas de botín diferentes para objetos personalizados, excluyendo las configuradas directamente como `uniqueLootList` en jefes personalizados.

Estos son los siguientes:

| Tabla de botín | Descripción | Peso predeterminado |
|-|:-:|:-:|
| Objetos generados procedimentalmente | Objetos generados aleatoriamente basados ​​en archivos de configuración del servidor | `90.0` |
| Objetos ponderados | Objetos que tienen un peso distinto de `dynamic` | `1.0` |
| Objetos fijos | Objetos que tienen una escalabilidad fija | `10.0` |
| Objetos limitados | Objetos que tienen escalabilidad limitada | `3.0` |
| Objetos escalables | Objetos que son escalables | `6.0` |

Cuando un jefe muere, se selecciona un objeto de estas tablas en función del archivo de configuración ItemSettings.yml. Los valores predeterminados para los pesos se enumeran arriba en `Peso predeterminado`. Cuanto mayor sea el peso, más probable es que caiga un objeto.

Los `Objetos ponderados` tienen un `Peso predeterminado` pequeño, lo que significa que no caerán con mucha frecuencia. Los objetos con un `dropWeight` que no es `dynamic` están destinados a ser raros y solo se utilizan en los valores predeterminados para los amuletos que dejan caer los jefes, objetos que no se utilizan directamente para el combate, sino para mejorar a los jugadores con efectos de poción.

El `dropWeight` que estableces aquí establece la posibilidad de que un `Objeto ponderado` específico caiga de la lista de `Objetos ponderados`. No aumenta la posibilidad de que caigan `Objetos ponderados`.

**Si estás confundido y solo quieres hacer armas y armaduras, omite esta configuración ya que, de forma predeterminada, es `dynamic`.**

Los `Objetos ponderados` suelen tener un peso de 1,0.

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

Establece la textura del objeto. ¡Requiere usar una textura válida del paquete de recursos!

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `customModelID` | [Entero](#entero) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

Esto utilizará la textura personalizada 1 de las espadas de diamantes del paquete de recursos que está utilizando el jugador. Se recomienda que configures tu servidor para que les dé a los jugadores paquetes de recursos al iniciar sesión si deseas utilizar esta función correctamente.

</details>

***

### permission

Establece el permiso requerido para obtener el objeto.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `permission` | [Texto](#texto) | ninguno |

Necesitarás un complemento de administración de permisos para otorgar permisos a los jugadores. Esto solo funcionará correctamente si no has desactivado el encantamiento de vinculación del alma.

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

Establece si el objeto debe estar vinculado al alma al caer.

| Clave |       Valores        | Predeterminado |
|-|:-------------------:|---------|
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


