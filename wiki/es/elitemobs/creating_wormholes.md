[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son los Agujeros de Gusano?

Los agujeros de gusano son una especie de sistema de teletransportación portal a portal altamente eficiente. Los
portales están marcados con efectos visuales.

# Mecánica de los Agujeros de Gusano

Los agujeros de gusano pueden hacer lo siguiente:

* Ir a través de un portal para llegar al portal de destino, e ir desde el portal de destino de vuelta al primero.
*   Reproducir un sonido cuando los jugadores los atraviesan
* Cegar temporalmente a los jugadores al atravesarlos para suavizar la transición
* Empujar a los jugadores para evitar que queden atrapados en un bucle de teletransportación
* Bloquear a los jugadores de la teletransportación durante 5 segundos para evitar que queden atrapados en un bucle de
  teletransportación
*   Reproducir efectos visuales elaborados
*   Requerir permisos para usar el agujero de gusano
*   Requerir el uso de moneda para usar el agujero de gusano
*   Notificar a los jugadores y administradores cuando el portal de destino no está disponible

# Creando un Agujero de Gusano

Los agujeros de gusano se añaden como archivos de configuración a la carpeta de agujeros de gusano. Es posible crear
subcarpetas, y se recomienda hacerlo si vas a añadir agujeros de gusano para mazmorras específicas, bajo el formato \` ~
/plugins/EliteMobs/wormholes/nombreDeMazmorra/nombreDeMazmorra\_identificador.yml\`.

### Expulsión

El Yaw y el Pitch (los dos últimos dígitos de las coordenadas) en `location1` y `location2` establecerán desde dónde
serán expulsados los jugadores del agujero de gusano cuando lo atraviesen. Veamos este ejemplo:

`location1: mi_mundo,20,10,20,180,20`

Con el Yaw establecido en `180`, el jugador sería expulsado mirando al Norte, y con el Pitch establecido en `20`,
también sería expulsado ligeramente hacia arriba. Si deseas que el jugador permanezca en el mismo bloque que el agujero
de gusano al ser expulsado, entonces es una buena idea establecer el Pitch en negativo para asegurarte de que los
jugadores no se deslicen del bloque.

## Configuración del Agujero de Gusano

El siguiente es un ejemplo de una configuración válida de un Agujero de Gusano:

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

Establece si el agujero de gusano está activado.

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

Especifica la primera ubicación del agujero de gusano.

| Clave       |      Valores      | Predeterminado |
|-------------|:-----------------:|:--------------:|
| `location1` | [Cadena](#cadena) |    ninguno     |

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

Especifica la segunda ubicación del agujero de gusano.

| Clave       |      Valores      | Predeterminado |
|-------------|:-----------------:|:--------------:|
| `location2` | [Cadena](#cadena) |    ninguno     |

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

Establece el texto de visualización de la primera ubicación.

| Clave           |      Valores      | Predeterminado |
|-----------------|:-----------------:|:--------------:|
| `location1Text` | [Cadena](#cadena) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location1Text: Agujero de Gusano Increíble en el Mundo Uno
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

Establece el texto de visualización de la segunda ubicación.

| Clave           |      Valores      | Predeterminado |
|-----------------|:-----------------:|:--------------:|
| `location2Text` | [Cadena](#cadena) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location2Text: Agujero de Gusano Increíble en el Mundo Dos
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

Establece el permiso necesario para usar el agujero de gusano.

| Clave        |      Valores      | Predeterminado |
|--------------|:-----------------:|:--------------:|
| `permission` | [Cadena](#cadena) |    ninguno     |

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

Establece el coste, en monedas de élite, de usar el agujero de gusano.

| Clave      |     Valores     | Predeterminado |
|------------|:---------------:|:--------------:|
| `coinCost` | [Doble](#doble) |    ninguno     |

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

*Las partículas que componen estas formas pueden causar lag en ciertos clientes. Para desactivar las partículas, ve
a **Wormholes.yml** y establece `noParticlesMode` en `true`.*

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

Establece el color de las partículas utilizadas en el ajuste `style`.

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

| Clave            |             Valores             | Predeterminado |
|------------------|:-------------------------------:|:--------------:|
| `sizeMultiplier` | [Multiplicador](#multiplicador) |      `1`       |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*Ten en cuenta que tendrás que ajustar las coordenadas Y del agujero de gusano después de aplicar el multiplicador de
tamaño.*

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

En este ejemplo, crearemos un agujero de gusano sencillo que nos lleva de un mundo a otro. No olvides que los agujeros
de gusano también pueden teletransportar a los jugadores a una ubicación diferente en el mismo mundo.

```yml
isEnabled: true #Activamos el gusano estableciendo este valor a true
location1: mi_mundo,1.5,11.0,1.5,108.0,5.0 #aquí es donde aparecerá el agujero de gusano en mi_mundo
location2: mi_otro_mundo,766.5,29.0,517.5,-136.0,5.0 #aquí es donde aparecerá el agujero de gusano en mi_otro_mundo
location1Text: "&aIr a Mi Mundo" #hace un bonito texto de visualización encima de la ubicación 1 del agujero de gusano
location2Text: "&aIr a Mi Otro Mundo" #hace un bonito texto de visualización encima de la ubicación 2 del agujero de gusano
permission: eliteperm.jugadoresgeniales #solo los jugadores con este permiso podrán usar el agujero de gusano, tanto para la ubicación 1 como para la 2
coinCost: 2 #los jugadores tendrán que pagar 12 monedas de élite para poder usar el agujero de gusano
style: CRYSTAL #este agujero de gusano tendrá forma de cristal
particleColor: 0x00ff00 #esto establecerá las partículas del agujero de gusano a verde
blindPlayer: true #la teletransportación del agujero de gusano cegará al jugador durante un breve periodo de tiempo para que la transición sea menos brusca
sizeMultiplier: 1.0 #establece el tamaño que debe tener la forma del agujero de gusano
```

</div>

</details>

#### Problemas de Rendimiento

Las partículas del agujero de gusano pueden causar problemas de rendimiento del cliente a los jugadores que están
ejecutando bedrock. Si quieres desactivar las partículas del agujero de gusano, puedes ir
a `~plugins\EliteMobs\Wormholes.yml` y cambiar el ajuste `noParticlesMode` a `true`.
