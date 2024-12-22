[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creación de Objetos Personalizados

## ¿Qué son los Objetos Personalizados?

Los Objetos Personalizados son objetos definidos por EliteMobs a través de archivos de configuración. Puedes
personalizar varios aspectos de estos objetos, como el nivel del objeto, los encantamientos, el nombre, la descripción,
la textura ¡y mucho más!

## Aplicación Web

Puedes crear Botín Personalizado de forma fácil y rápida [aquí](https://magmaguy.com/webapp/webapp.html).

## Antes de Empezar

### ¿Dónde van los Objetos Personalizados?

Los archivos de objetos personalizados van dentro de la carpeta de configuración `~/plugins/EliteMobs/customitems`

Es posible crear subcarpetas, como `~/plugins/EliteMobs/customitems/misobjetos`. Esto se recomienda para mantener las
cosas organizadas.

Los archivos se guardan en formato `.yml` y [Notepad++](https://notepad-plus-plus.org/) es el software recomendado para
la edición de archivos de configuración. Un archivo define un objeto, aunque es posible generar el mismo objeto varias
veces e incluso establecer varias ubicaciones de aparición para el mismo archivo de objeto.

Es posible usar la [aplicación web](https://magmaguy.com/webapp/webapp.html) para crear de forma rápida y sencilla
objetos personalizados y mucho más.

<div align="center">

### Configuración más pequeña posible

**Ten en cuenta que el archivo de configuración más pequeño posible para un Objeto Personalizado es:**

```yml
```

Observa cómo esto es solo un archivo vacío. Esto hará que se use por defecto una espada de madera llamada "Nombre
predeterminado". **¡Todo en esta página es opcional!**

### Objeto de ejemplo

Veamos un ejemplo de cómo se ve un archivo de objeto.

<details> 
<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4Objeto de prueba'
lore:
- Este es un objeto genial
- Tiene una descripción genial
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

## Ajustes de Objeto Personalizado

La siguiente es una lista de todo lo que puedes configurar para los objetos personalizados:

<div align="center">

***

### isEnabled

Establece si el objeto está habilitado. No afecta a los objetos que ya han sido generados.

| Clave       |     Valores      | Predeterminado |
|-------------|:----------------:|----------------|
| `isEnabled` | `true` / `false` | `true`         |

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

| Clave      |                                          Valores                                           | Predeterminado |
|------------|:------------------------------------------------------------------------------------------:|----------------|
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

| Clave   |      Valores      | Predeterminado |
|---------|:-----------------:|----------------|
| `level` | [Entero](#entero) | `0`            |

Ten en cuenta que esta configuración no es relevante si estableces la [`escalabilidad`](#scalability) del objeto
en `scalable`. Si la estableces en `limited`, este será el nivel más alto posible del objeto.

Además, los materiales tienen un nivel mínimo. Los materiales de hierro son de nivel 6, los materiales de diamante son
de nivel 7. No puedes forzar que los objetos tengan un nivel inferior al nivel del material.

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

| Clave      |                           Valores                           | Predeterminado          |
|------------|:-----------------------------------------------------------:|-------------------------|
| `material` | [Cadena](#cadena) con [códigos de color](#codigos-de-color) | "Nombre predeterminado" |

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

Establece la descripción del objeto.

| Clave  |                          Valores                          | Predeterminado |
|--------|:---------------------------------------------------------:|----------------|
| `lore` | [Lista](#lista) con [códigos de color](#codigos-de-color) | ninguno        |

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

Establece los encantamientos del objeto.

| Clave          |                                                                                                                Valores                                                                                                                | Predeterminado |
|----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|----------------|
| `enchantments` | [Lista](#lista) con [encantamientos de Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) o [Encantamientos Personalizados de EliteMobs]($language$/elitemobs/custom_enchantments_list.md) | ninguno        |

Ten en cuenta que estas entradas siguen el formato `nombreDelEncantamiento:nivelDelEncantamiento`. ¡Consulta el ejemplo
a continuación!

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

Ten en cuenta también que los encantamientos como el de afilado se convierten en afilado de élite por defecto si el
nivel empieza a superar los límites de Minecraft vanilla.

***

### potionEffects

Establece los efectos de poción que tendrá el objeto. Estos pueden aplicarse al jugador o a una entidad dañada por el
jugador.

| Clave           |                                                                Valores                                                                 | Predeterminado |
|-----------------|:--------------------------------------------------------------------------------------------------------------------------------------:|----------------|
| `potionEffects` | [Lista](#lista) con [efectos de poción de Minecraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ninguno        |

Además, los efectos de poción utilizan un formato específico que permite a los administradores seleccionar a quién
afecta y cuándo:

| Ajuste                     |                                         Descripción                                         |                           Valores                           | Predeterminado |
|----------------------------|:-------------------------------------------------------------------------------------------:|:-----------------------------------------------------------:|----------------|
| Nivel del efecto de poción | Establece el nivel del efecto de poción. **¡Los efectos de poción empiezan en el nivel 0**! |                      [Entero](#entero)                      | ninguno        |
| Entidad afectada           |                        Establece a quién afecta el efecto de poción.                        |      `self` (el jugador) / `target` (entidad golpeada)      | ninguno        |
| Método de aplicación       |                       Establece cuándo se aplica el efecto de poción.                       | `onHit` / `continuous` (se vuelve a aplicar constantemente) | ninguno        |

El formato para los efectos de poción
es `nombreDelEfectoDePoción,nivelDelEfectoDePoción,entidadAfectada,métodoDeAplicación`. ¡Consulta el ejemplo a
continuación!

EliteMobs también incluye objetos personalizados que funcionan como amuletos. Estos objetos no hacen nada más que
proporcionar efectos de poción al jugador cuando se sostiene el objeto o se equipa en una ranura.

ADVERTENCIA: Usar el efecto de poción INSTANT_DAMAGE curará a las criaturas no muertas al impactar, ya que es una
mecánica predeterminada en Minecraft vanilla.

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

Al golpear, el efecto de poción de veneno (nivel 1) se aplicará a la entidad que haya sido golpeada por el jugador.
Además, el jugador se verá afectado por un efecto de poción de curación instantánea de nivel 2.

De forma continua, el jugador recibirá visión nocturna. Esto significa que el jugador tendrá visión nocturna mientras
lleve puesto o sostenga el objeto.

</details>

***

### scalability

Establece cómo crece el nivel del objeto con el nivel del jefe que lo suelta.

| Clave         |                          Valores                           | Predeterminado |
|---------------|:----------------------------------------------------------:|----------------|
| `scalability` | `fixed`, `limited` o `scalable`. ¡Consulta a continuación! | scalable       |

¡Consulta esta lista para entender qué hacen las diferentes opciones!

| Ajuste     |                                                               Descripción                                                               |
|------------|:---------------------------------------------------------------------------------------------------------------------------------------:|
| `fixed`    |                          El nivel del objeto siempre será el nivel establecido en el archivo de configuración.                          |
| `limited`  | El nivel máximo del objeto estará limitado por el establecido en el archivo de configuración o por el nivel del jefe, el que sea menor. |
| `scalable` |                              El nivel del objeto se basará totalmente en el nivel del jefe que lo suelta.                               |

Ten en cuenta que los objetos con un dropWeight siempre tendrán una escalabilidad `fixed`.

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

| Clave      |                    Valores                     | Predeterminado |
|------------|:----------------------------------------------:|----------------|
| `itemType` | `custom` o `unique`. ¡Consulta a continuación! | `custom`       |

Hay dos tipos de objetos:

| Ajuste   |                                                                                                Descripción                                                                                                |
|----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `custom` |                                       El objeto podrá soltarse desde cualquier criatura de EliteMobs capaz de soltar botín, y estará en la tienda personalizada. `                                        
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

| Clave        |                Valores                | Predeterminado |
|--------------|:-------------------------------------:|----------------|
| `dropWeight` | `dynamic` o un valor [Doble](#doble). | `dynamic`      |

EliteMobs tiene 5 tablas de botín diferentes para objetos personalizados, excluyendo las configuradas directamente como
la `uniqueLootList` en los Jefes Personalizados.

Estas son las siguientes:

| Tabla de botín                       |                                          Descripción                                          | Peso predeterminado |
|--------------------------------------|:---------------------------------------------------------------------------------------------:|:-------------------:|
| Objetos generados procedimentalmente | Objetos que se generan aleatoriamente basándose en los archivos de configuración del servidor |       `90.0`        |
| Objetos ponderados                   |                       Objetos que tienen un peso diferente a `dynamic`                        |        `1.0`        |
| Objetos fijos                        |                           Objetos que tienen una escalabilidad fija                           |       `10.0`        |
| Objetos limitados                    |                         Objetos que tienen una escalabilidad limitada                         |        `3.0`        |
| Objetos escalables                   |                                  Objetos que son escalables                                   |        `6.0`        |

Cuando un jefe muere, se selecciona un objeto de estas tablas basándose en el archivo de configuración ItemSettings.yml.
Los valores predeterminados para los pesos se enumeran arriba en `Peso predeterminado`. Cuanto mayor sea el peso, más
probable será que caiga un objeto.

Los `Objetos ponderados` tienen un `Peso predeterminado` pequeño, lo que significa que no caerán muy a menudo. Los
objetos con un `dropWeight` que no sea `dynamic` están pensados para ser raros y solo se utilizan en los valores
predeterminados para los amuletos que sueltan los jefes, objetos que no se utilizan directamente para el combate, sino
para mejorar a los jugadores con efectos de poción.

El `dropWeight` que establezcas aquí establece la probabilidad de que un `Objeto ponderado` específico caiga de la lista
de `Objetos ponderados`. No aumenta la probabilidad de que caigan los `Objetos ponderados`.

**Si estás confundido y solo quieres hacer armas y armaduras, omite este ajuste, ya que por defecto está configurado
correctamente como `dynamic`.**

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

Establece la textura del objeto. ¡Requiere usar una textura válida del paquete de recursos!

| Clave           |      Valores      | Predeterminado |
|-----------------|:-----------------:|----------------|
| `customModelID` | [Entero](#entero) | ninguno        |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

Esto utilizará la textura personalizada 1 de las espadas de diamante del paquete de recursos que esté utilizando el
jugador. Se recomienda configurar el servidor para que proporcione paquetes de recursos a los jugadores al iniciar
sesión si se quiere utilizar esta función correctamente.

</details>

***

### customModelV2

A partir de la versión 1.21.4 de Minecraft (EM 9.1.13), esta es la nueva configuración obligatoria para configurar los
ID de modelo de objetos personalizados.
Establece la textura del objeto. ¡Requiere usar una textura válida del paquete de recursos!

| Clave           |      Valores      | Predeterminado |
|-----------------|:-----------------:|----------------|
| `customModelV2` | [Cadena](#cadena) | ninguno        |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customModelV2: elitemobs:equipment/magmaguys_toothpick
```

Esta configuración asigna una textura específica a un objeto. Así es como funciona:

- `elitemobs:` es el directorio principal en la carpeta `assets` del paquete de recursos.
- `equipment` es un subdirectorio dentro de `assets/elitemobs/models`.
- `magmaguys_toothpick` es el archivo de modelo que se encuentra en `assets/elitemobs/models/equipment` en el paquete de
  recursos.

La ruta completa al archivo de modelo en este ejemplo sería:
`\.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\equipment\magmaguys_toothpick.json`

</div>

Esto utilizará la textura personalizada `magmaguys_toothpick` del paquete de recursos de EliteMobs que esté utilizando
el jugador. Se recomienda configurar el servidor para que proporcione paquetes de recursos a los jugadores al iniciar
sesión si se quiere utilizar esta función correctamente.

</details>

***

### permission

Establece el permiso necesario para poder obtener el objeto.

| Clave        |      Valores      | Predeterminado |
|--------------|:-----------------:|----------------|
| `permission` | [Cadena](#cadena) | ninguno        |

Necesitarás un plugin de gestión de permisos para dar permisos a los jugadores. Esto solo funcionará correctamente si no
has desactivado el encantamiento de atadura de alma.

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

Establece si el objeto debe estar atado al alma al soltarlo.

| Clave       |        Valores        | Predeterminado |
|-------------|:---------------------:|----------------|
| `soulbound` | [Booleano](#booleano) | `true`         |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>


</div>
