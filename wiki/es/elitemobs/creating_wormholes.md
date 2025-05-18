[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son los Agujeros de Gusano?

Los agujeros de gusano son una especie de sistema de teletransportación de portal a portal altamente eficiente. Los portales están marcados con efectos visuales.

# Mecánicas de los Agujeros de Gusano

Los agujeros de gusano pueden hacer lo siguiente:

*   Atravesar un portal para llegar al portal de destino, y regresar del portal de destino al primero.
*   Reproducir un sonido cuando los jugadores los atraviesan.
*   Cegar temporalmente a los jugadores mientras los atraviesan para suavizar la transición.
*   Expulsar a los jugadores para evitar que queden atrapados en un bucle de teletransporte.
*   Bloquear a los jugadores para que no se teletransporten durante 5 segundos para evitar que queden atrapados en un bucle de teletransporte.
*   Reproducir efectos visuales elaborados.
*   Requerir permisos para usar el agujero de gusano.
*   Requerir el uso de moneda para usar el agujero de gusano.
*   Notificar a los jugadores y administradores cuando el portal de destino no está disponible.

# Creando un Agujero de Gusano

Los agujeros de gusano se añaden como archivos de configuración a la carpeta `wormholes`. Es posible crear subcarpetas, y se recomienda hacerlo si estás añadiendo agujeros de gusano para mazmorras específicas, bajo el formato `~/plugins/EliteMobs/wormholes/dungeonName/dungeonName_identifier.yml`.

### Eyección

El Yaw y el Pitch (los dos últimos dígitos en las coordenadas) en `location1` y `location2` establecerán hacia dónde serán expulsados los jugadores del agujero de gusano cuando lo atraviesen. Veamos este ejemplo:

`location1: my_world,20,10,20,180,20`

Con el Yaw establecido en `180`, el jugador sería expulsado mirando hacia el Norte, y con el Pitch establecido en `20`, también sería expulsado ligeramente hacia arriba. Si deseas que el jugador permanezca en el mismo bloque que el agujero de gusano al ser expulsado, entonces es una buena idea establecer el Pitch en negativo para asegurarte de que los jugadores no se deslicen fuera del bloque.

## Configuración del Agujero de Gusano
El siguiente es un ejemplo de una configuración válida de Agujero de Gusano:

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

Establece si el agujero de gusano está habilitado.

| Clave       |       Valores        | Por defecto |
|-----------|:--------------------:|:-----------:|
| `isEnabled` | [Booleano](#boolean) |   `true`    |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### location1

Especifica la primera ubicación para el agujero de gusano.

| Clave       |      Valores       | Por defecto |
|-----------|:------------------:|:-----------:|
| `location1` | [Cadena](#string)  |    none     |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location1: world_one,50,100,50,0,0
```

</div>

</details>

***

### location2

Especifica la segunda ubicación para el agujero de gusano.

| Clave         |      Valores       | Por defecto |
|-------------|:------------------:|:-----------:|
| `location2` | [Cadena](#string)  |    none     |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location2: world_two,100,33,100,0,0
```

</div>

</details>

***

### location1Text

Establece el texto de visualización de la primera ubicación.

| Clave         |      Valores       | Por defecto |
|-------------|:------------------:|:-----------:|
| `location1Text` | [Cadena](#string)  |    none     |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location1Text: Awesome Wormhole In World One
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

Establece el texto de visualización de la segunda ubicación.

| Clave         |      Valores       | Por defecto |
|-------------|:------------------:|:-----------:|
| `location2Text` | [Cadena](#string)  |    none     |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location2Text: Awesome Wormhole In World Two
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

Establece el permiso requerido para usar el agujero de gusano.

| Clave         |      Valores       | Por defecto |
|-------------|:------------------:|:-----------:|
| `permission` | [Cadena](#string)  |    none     |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permission: elitemobs.mypermission
```

</div>

</details>

***

### coinCost

Establece el coste, en monedas élite, de usar el agujero de gusano.

| Clave      |      Valores       | Por defecto |
|------------|:------------------:|:-----------:|
| `coinCost` | [Doble](#double)   |    none     |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
coinCost: 2.5
```

</div>

</details>

***

### style

Establece la forma visual del agujero de gusano.

*Las partículas que componen estas formas pueden causar lag en ciertos clientes. Para desactivar las partículas, ve a **Wormholes.yml** y establece `noParticlesMode` en `true`.*

| Clave   |         Valores          | Por defecto |
|---------|:------------------------:|:-----------:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` |   `CUBE`    |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
style: CRYSTAL
```

<div align="center">

![create_wormhole_style.jpg](../../../img/wiki/create_wormhole_style.jpg)

</div>

</div>

</details>

***

### particleColor

Establece el color de las partículas utilizadas en la configuración `style`.

| Clave           |                   Valores                    | Por defecto |
|-----------------|:--------------------------------------------:|:-----------:|
| `particleColor` | [`0x` seguido de un código hexadecimal](https://www.w3schools.com/colors/colors_hexadecimal.asp) |  `0x800080` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
particleColor: 0x9f5cdd
```

<div align="center">

![create_wormhole_particlecolor.jpg](../../../img/wiki/create_wormhole_particlecolor.jpg)

</div>

</div>

</details>

***

### blindPlayer

Establece si el portal ciega al jugador para una teletransportación más suave.

| Clave         |       Valores        | Por defecto |
|-------------|:--------------------:|:-----------:|
| `blindPlayer` | [Booleano](#boolean) |   `false`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
blindPlayer: true
```

<div align="center">

![create_wormhole_blind.jpg](../../../img/wiki/create_wormhole_blind.jpg)

</div>

</div>

</details>

***

### sizeMultiplier

Multiplica el tamaño del portal y la forma establecida por `style`.

| Clave            |        Valores         | Por defecto |
|------------------|:----------------------:|:-----------:|
| `sizeMultiplier` | [Multiplicador](#multiplier) |     `1`     |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*Ten en cuenta que tendrás que ajustar las coordenadas Y del agujero de gusano después de aplicar el multiplicador de tamaño.*

<div align="center">

![create_wormhole_size.jpg](../../../img/wiki/create_wormhole_size.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Ejemplo de Configuración de Agujero de Gusano</b></summary>

<div align="left">

En este ejemplo haremos un agujero de gusano simple que nos lleva de un mundo a otro. No olvides que los agujeros de gusano también pueden simplemente teletransportar a los jugadores a una ubicación diferente en el mismo mundo.

```yml
isEnabled: true #Habilitamos el agujero de gusano estableciendo este valor en true
location1: my_world,1.5,11.0,1.5,108.0,5.0 #aquí aparecerá el agujero de gusano en my_world
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 #aquí aparecerá el agujero de gusano en my_other_world
location1Text: "&aGo to My World" #crea un bonito texto de visualización encima de la ubicación1 del agujero de gusano
location2Text: "&aGo to My Other World" #crea un bonito texto de visualización encima de la ubicación2 del agujero de gusano
permission: eliteperm.coolplayers #solo los jugadores con este permiso podrán usar el agujero de gusano, tanto para location1 como para location2
coinCost: 2 #los jugadores necesitarán pagar 12 monedas élite para poder usar el agujero de gusano
style: CRYSTAL #este agujero de gusano tendrá forma de cristal
particleColor: 0x00ff00 #esto establecerá las partículas del agujero de gusano en verde
blindPlayer: true #la teletransportación del agujero de gusano cegará al jugador por un corto tiempo para hacer la transición menos brusca
sizeMultiplier: 1.0 #establece cuán grande debe ser la forma del agujero de gusano
```

</div>

</details>

#### Problemas de Rendimiento

Las partículas del agujero de gusano pueden causar problemas de rendimiento del cliente para los jugadores que usan bedrock. Si deseas desactivar las partículas del agujero de gusano, puedes ir a `~plugins\EliteMobs\Wormholes.yml` y cambiar la configuración `noParticlesMode` a `true`.