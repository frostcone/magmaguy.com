[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creando Objetos Personalizados

## ¿Qué son los Objetos Personalizados?

Los Objetos Personalizados son objetos definidos por EliteMobs a través de archivos de configuración. ¡Puedes personalizar varios aspectos de estos objetos, como el nivel del objeto, los encantamientos, el nombre, la descripción (lore), la textura y más!

## Aplicación Web

¡Puedes crear Botín Personalizado de forma fácil y rápida [aquí](https://magmaguy.com/webapp/webapp.html)!

## Antes de empezar

### ¿Dónde van los Objetos Personalizados?

Los archivos de objetos personalizados van en la carpeta de configuración `~/plugins/EliteMobs/customitems`

Es posible crear subcarpetas, como `~/plugins/EliteMobs/customitems/myitems`. Esto se recomienda para mantener las cosas organizadas.

Los archivos se almacenan en formato `.yml` y [Notepad++](https://notepad-plus-plus.org/) es el software de edición de archivos recomendado para trabajos de configuración. Un archivo define un jefe, aunque es posible generar el mismo jefe varias veces e incluso establecer varias ubicaciones de aparición para el mismo archivo de jefe.

Es posible usar la [aplicación web](https://magmaguy.com/webapp/webapp.html) para crear jefes personalizados y más de forma rápida y sencilla.

<div align="center">

### Configuración más pequeña posible

**Ten en cuenta que el archivo de configuración más pequeño posible para un Objeto Personalizado es:**

```yml
```

Observa cómo es solo un archivo vacío. Esto por defecto usará una espada de madera llamada "Default name". **¡Todo en esta página es opcional!**

### Ejemplo de objeto

Echemos un vistazo a un ejemplo de cómo se ve un archivo de objeto.

<details>
<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4Test item'
lore:
- This is a cool item
- It has cool lore
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

## Configuración de Objetos Personalizados

La siguiente es una lista de todas las cosas que puedes configurar para los objetos personalizados:

<div align="center">

***

### isEnabled

Establece si el objeto está habilitado. No afecta a los objetos que ya han sido generados.

| Clave | Valores | Por defecto |
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

| Clave | Valores | Por defecto |
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

| Clave | Valores | Por defecto |
|-|:-:|-|
| `level` | [Entero](#integer) | `0` |

Ten en cuenta que esta configuración no es relevante si estableces la [`scalability`](#scalability) del objeto como `scalable`. Si la estableces como `limited`, este será el nivel más alto posible del objeto.

Además, los materiales tienen un nivel mínimo. Los materiales de hierro son de nivel 6, los materiales de diamante son de nivel 7. No puedes forzar a que los objetos tengan un nivel inferior al nivel del material.

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

Establece el nombre de visualización del objeto.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `material` | [Cadena de texto](#string) con [códigos de color](#color-codes) | "Default name" |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "&2Cool item"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

Establece la descripción (lore) del objeto.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `lore` | [Lista](#list) con [códigos de color](#color-codes) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
lore:
- "&2This is the coolest sword"
- "&2of all time!"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

Establece los encantamientos en el objeto.

| Clave | Valores | Por defecto |
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [Lista](#list) con [encantamientos de Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) o [Encantamientos Personalizados de EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | ninguno |

Ten en cuenta que estas entradas siguen el formato `nombreEncantamiento:nivelEncantamiento`. ¡Consulta el ejemplo a continuación!

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

También ten en cuenta que los encantamientos como Sharpness se convierten en Elite Sharpness por defecto si el nivel supera los límites de Minecraft vanilla.

***

### potionEffects

Establece los efectos de poción que tendrá el objeto. Estos pueden aplicarse al jugador o a una entidad dañada por el jugador.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `potionEffects` | [Lista](#list) con [efectos de poción de Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)| ninguno |

Además, los efectos de poción usan un formato específico que permite a los administradores seleccionar quién se ve afectado y cuándo:

| Configuración | Descripción | Valores | Por defecto |
|-|:-:|:-:|-|
| Nivel del efecto de poción | Establece el nivel del efecto de poción. **¡Los efectos de poción comienzan en el nivel 0**! | [Entero](#integer) | ninguno |
| Entidad afectada | Establece quién se ve afectado por el efecto de poción. | `self` (el jugador) / `target` (entidad que es golpeada) | ninguno |
| Método de aplicación | Establece cuándo se aplica el efecto de poción. | `onHit` (al golpear) / `continuous` (se reaplica constantemente) | ninguno |

El formato para los efectos de poción es `nombreEfectoPocion,nivelEfectoPocion,entidadAfectada,metodoAplicacion`. ¡Consulta el ejemplo a continuación!

Al examinar un objeto con **efectos de poción**, verás iconos que indican cómo se aplica el efecto:

- **☠️ Calavera** – Apunta a **enemigos**.
- **🛡️ Escudo** – Apunta al **usuario/jugador**.
- **⚔️ Espadas** – Se activa **al golpear**.
- **🔄 Círculo Repetido** – Se aplica **continuamente** mientras el objeto se lleva puesto o se sostiene.

EliteMobs también cuenta con objetos personalizados que funcionan como amuletos. Estos objetos no hacen nada más que proporcionar efectos de poción al jugador cuando el objeto se sostiene o está equipado en una ranura.

ADVERTENCIA: Usar el efecto de poción INSTANT_DAMAGE curará a los mobs no muertos al impactar, ya que este es un mecanismo por defecto en Minecraft vanilla.

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

Con este conjunto de efectos de poción, sucederán las siguientes cosas:

Al golpear, el efecto de poción de veneno (nivel 1) se aplicará a la entidad que fue golpeada por el jugador. Además, el jugador se verá afectado por un efecto de poción de curación instantánea de nivel 2.

Continuamente, al jugador se le dará visión nocturna. Esto significa que el jugador tendrá visión nocturna mientras lleve puesto o sostenga el objeto.

</details>

***

### scalability

Establece cómo crece el nivel del objeto con el nivel del jefe que lo suelta.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `scalability` | `fixed`, `limited` o `scalable`. ¡Consulta a continuación! | scalable |

¡Consulta esta lista para entender qué hacen las diferentes opciones!

| Configuración | Descripción |
|-|:-:|
| `fixed` | El nivel del objeto siempre será el nivel establecido en el archivo de configuración. |
| `limited` | El nivel máximo del objeto estará limitado por el establecido en el archivo de configuración o el nivel del jefe, lo que sea menor. |
| `scalable` | El nivel del objeto se basará completamente en el nivel del jefe que lo suelta. |

Ten en cuenta que los objetos con un `dropWeight` siempre tendrán una escalabilidad `fixed`.

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

| Clave | Valores | Por defecto |
|-|:-:|-|
| `itemType` | `custom` o `unique`. ¡Consulta a continuación! | `custom` |

Hay dos tipos de objetos:

| Configuración | Descripción |
|-|:-:|
| `custom` | El objeto podrá caer de cualquier mob de EliteMobs capaz de soltar botín, y estará en la tienda personalizada. |
| `unique` | El objeto no será soltado por ningún jefe y no estará en la tienda personalizada. ¡La única forma de obtenerlo es configurando un Jefe Personalizado para que lo suelte a través de su `uniqueLootTable`! |

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

| Clave | Valores | Por defecto |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` o un valor [Doble](#double). | `dynamic` |

EliteMobs tiene 5 tablas de botín diferentes para objetos personalizados, excluyendo las configuradas directamente como la `uniqueLootList` en los Jefes Personalizados.

Estas son las siguientes:

| Tabla de botín | Descripción | Peso por defecto |
|-|:-:|:-:|
| Objetos generados proceduralmente | Objetos que se generan aleatoriamente basándose en los archivos de configuración del servidor | `90.0` |
| Objetos con peso | Objetos que tienen un peso diferente a `dynamic` | `1.0` |
| Objetos fijos | Objetos que tienen una escalabilidad fija | `10.0` |
| Objetos limitados | Objetos que tienen escalabilidad limitada | `3.0` |
| Objetos escalables | Objetos que son escalables | `6.0` |

Cuando un jefe muere, se selecciona un objeto de estas tablas basándose en el archivo de configuración ItemSettings.yml. Los valores por defecto para los pesos se listan arriba en `Peso por defecto`. Cuanto mayor sea el peso, más probable será que caiga un objeto.

Los `Objetos con peso` tienen un `Peso por defecto` pequeño, lo que significa que no caerán muy a menudo. Los objetos con un `dropWeight` que no es `dynamic` están destinados a ser raros y solo se usan en los valores por defecto para los amuletos que sueltan los jefes - objetos no usados directamente para el combate, sino para dar mejoras a los jugadores con efectos de poción.

El `dropWeight` que estableces aquí define la probabilidad de que un `Objeto con peso` específico caiga de la lista de `Objetos con peso`. No aumenta la probabilidad de que caigan `Objetos con peso`.

**Si estás confundido y solo quieres crear armas y armaduras, omite esta configuración ya que por defecto es correctamente `dynamic`.**

Los `Objetos con peso` suelen tener un peso de 1.0.

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

| Clave | Valores | Por defecto |
|-|:-:|-|
| `customModelID` | [Entero](#integer) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

Esto usará la textura personalizada 1 de las espadas de diamante del paquete de recursos que el jugador esté usando. Se recomienda configurar tu servidor para que dé a los jugadores paquetes de recursos al iniciar sesión si quieres usar esta característica correctamente.

</details>

***

### customModelV2

A partir de la versión 1.21.4 de Minecraft (EM 9.1.13), esta es la nueva configuración requerida para configurar los IDs de modelo de objetos personalizados.
Establece la textura del objeto. ¡Requiere usar una textura válida del paquete de recursos!

| Clave | Valores | Por defecto |
|-|:-:|-|
| `customModelV2` | [Cadena de texto](#string) | ninguno |

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

Esto usará la textura personalizada `magmaguys_toothpick` del paquete de recursos de EliteMobs que el jugador esté usando. Se recomienda configurar tu servidor para que dé a los jugadores paquetes de recursos al iniciar sesión si quieres usar esta característica correctamente.

</details>

***

### permission

Establece el permiso requerido para poder obtener el objeto.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `permission` | [Cadena de texto](#string) | ninguno |

Necesitarás un plugin de gestión de permisos para dar permisos a los jugadores. Esto solo funcionará correctamente si no has deshabilitado el encantamiento soulbind.

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

Establece si el objeto debe estar ligado al alma (soulbound) al caer.

| Clave | Valores | Por defecto |
|-|:-------------------:|---------|
| `soulbound` | [Booleano](#boolean) | `true` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>

</div>