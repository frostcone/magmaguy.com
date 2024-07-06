[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son los agujeros de gusano?

Los agujeros de gusano son un tipo de sistema de teletransportación de portal a portal altamente eficiente. Los portales están marcados con efectos visuales.

# Mecánica de los agujeros de gusano

Los agujeros de gusano pueden hacer lo siguiente:

*   Atraviesa un portal para llegar al portal de destino y ve desde el portal de destino de regreso al primero.
*   Reproducir un sonido cuando los jugadores los atraviesan
*   Cegar temporalmente a los jugadores mientras los atraviesan para suavizar la transición
*   Empujar a los jugadores para evitar que queden atrapados en un bucle de teletransportación
*   Bloquear a los jugadores para que no se teletransporten durante 5 segundos para evitar que queden atrapados en un bucle de teletransportación.
*   Reproducir elaborados efectos visuales
*   Requerir permisos para usar el agujero de gusano
*   Requerir el uso de moneda para usar el agujero de gusano
*   Notificar a los jugadores y administradores cuando el portal de destino no está disponible

# Creando un agujero de gusano

Los agujeros de gusano se agregan como archivos de configuración a la carpeta de agujeros de gusano. Es posible crear subcarpetas, y se recomienda hacerlo si estás agregando agujeros de gusano para mazmorras específicas, bajo el formato \` ~/plugins/EliteMobs/wormholes/nombreDeLaMazmorra/nombreDeLaMazmorra\_identificador.yml\`.

### Expulsión

Guiñada y cabeceo (los dos últimos dígitos en las coordenadas) en `location1` y `location2` establecerán dónde serán expulsados ​​los jugadores del agujero de gusano cuando lo atraviesen. Veamos este ejemplo:

`location1: mi_mundo,20,10,20,180,20`

Con la guiñada establecida en `180`, el jugador sería expulsado mirando hacia el norte, y con el cabeceo establecido en `20`, también sería expulsado ligeramente hacia arriba. Si deseas que el jugador permanezca en el mismo bloque que el agujero de gusano cuando sea expulsado, entonces es una buena idea establecer el cabeceo en negativo para asegurarte de que los jugadores no se deslicen del bloque.

## Configuración del agujero de gusano
El siguiente es un ejemplo de una configuración válida de agujero de gusano:

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

Establece si el agujero de gusano está habilitado.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Booleano](#booleano) | `true`  |

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

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `location1` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location1: mundo_uno,50,100,50,0,0
```

</div>

</details>

***

### location2

Especifica la segunda ubicación para el agujero de gusano.

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
| `location2` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location2: mundo_dos,100,33,100,0,0
```

</div>

</details>

***

### location1Text

Establece el texto para mostrar de la primera ubicación.

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
| `location1Text` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location1Text: Agujero de gusano impresionante en el mundo uno
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

Establece el texto para mostrar de la segunda ubicación.

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
| `location2Text` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location2Text: Agujero de gusano impresionante en el mundo dos
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

Establece el permiso requerido para usar el agujero de gusano.

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
| `permission` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permission: elitemobs.mipermiso
```

</div>

</details>

***

### coinCost

Establece el costo, en monedas de élite, de usar el agujero de gusano.

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
| `coinCost` | [Doble](#doble) |  ninguno   |

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

*Las partículas que componen estas formas pueden causar retraso en ciertos clientes. Para desactivar las partículas, ve a **Wormholes.yml** y establece `noParticlesMode` en `true`.*

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` |  `CUBE`   |

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

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
| `particleColor` | [`0x` seguido de un código hexadecimal](https://www.w3schools.com/colors/colors_hexadecimal.asp) |  `0x800080`   |

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

Establece si el portal ciega al jugador para una teletransportación más fluida.

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
| `blindPlayer` | [Booleano](#booleano) | `false` |

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

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
| `sizeMultiplier` | [Multiplicador](#multiplicador) |   `1`   |

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

<summary align="center"><b>Ejemplo de configuración de agujero de gusano</b></summary>

<div align="left">

En este ejemplo, haremos un agujero de gusano simple que nos lleve de un mundo a otro. No olvides que los agujeros de gusano también pueden teletransportar a los jugadores a una ubicación diferente en el mismo mundo.

```yml
isEnabled: true # Habilitamos el gusano estableciendo este valor en verdadero
location1: mi_mundo,1.5,11.0,1.5,108.0,5.0 # aquí es donde aparecerá el agujero de gusano en mi_mundo
location2: mi_otro_mundo,766.5,29.0,517.5,-136.0,5.0 # aquí es donde aparecerá el agujero de gusano en mi_otro_mundo
location1Text: "&aIr a mi mundo" # crea un bonito texto de visualización sobre la ubicación 1 del agujero de gusano
location2Text: "&aIr a mi otro mundo" # crea un bonito texto de visualización sobre la ubicación 2 del agujero de gusano
permission: eliteperm.jugadoresgeniales # solo los jugadores con este permiso podrán usar el agujero de gusano, tanto para la ubicación 1 como para la ubicación 2
coinCost: 2 # los jugadores deberán pagar 12 monedas de élite para poder usar el agujero de gusano
style: CRYSTAL # este agujero de gusano tendrá la forma de un cristal
particleColor: 0x00ff00 # esto establecerá las partículas del agujero de gusano en verde
blindPlayer: true # la teletransportación del agujero de gusano cegará al jugador por un corto tiempo para que la transición sea menos discordante
sizeMultiplier: 1.0 # establece qué tan grande debe ser la forma del agujero de gusano
```

</div>

</details>

#### Problemas de rendimiento

Las partículas del agujero de gusano pueden causar problemas de rendimiento del cliente para los jugadores que ejecutan Bedrock. Si deseas desactivar las partículas del agujero de gusano, puedes ir a `~plugins\EliteMobs\Wormholes.yml` y cambiar la configuración de `noParticlesMode` a `true`.



