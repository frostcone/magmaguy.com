[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son los agujeros de gusano?

Los agujeros de gusano son un tipo de sistema de teletransporte altamente eficiente de portal a portal. Los portales están marcados con efectos visuales.

# Mecánica de los agujeros de gusano

Un agujero de gusano puede realizar lo siguiente:

*   Atravesar un portal para llegar al portal de destino, y volver del portal de destino al primero.
*   Reproducir un sonido cuando los jugadores pasan por ellos
*   Cegar temporalmente a los jugadores mientras pasan por ellos para suavizar la transición
*   Empujar a los jugadores para evitar quedar atrapados en un bucle de teletransporte
*   Bloquear a los jugadores de la teletransportación durante 5 segundos para evitar quedar atrapados en un bucle de teletransporte
*   Reproducir efectos visuales elaborados
*   Requerir permisos para usar el agujero de gusano
*   Requerir el uso de moneda para usar el agujero de gusano
*   Notificar a los jugadores y administradores cuando el portal de destino no está disponible

# Creación de un agujero de gusano

Los agujeros de gusano se añaden como archivos de configuración en la carpeta de agujeros de gusano. Es posible crear subcarpetas, y se recomienda hacerlo si estás agregando agujeros de gusano para calabozos específicos, bajo el formato \` ~/plugins/EliteMobs/wormholes/nombreDelCalabozo/identificadorDelCalabozo.yml\`.

### Ejección

Yaw y Pitch (los dos últimos dígitos en las coordenadas) en `location1` y `location2` determinarán dónde se expulsará a los jugadores del agujero de gusano cuando lo atraviesen. Veamos este ejemplo:

`location1: mi_mundo,20,10,20,180,20`

Si Yaw se configura a `180`, se expulsaría al jugador mirando hacia el norte y, con Pitch configurado a `20`, también se expulsaría al jugador ligeramente hacia arriba. Si deseas que el jugador permanezca en el mismo bloque que el agujero de gusano cuando sea expulsado, entonces es una buena idea configurar el Pitch en negativo para asegurarte de que los jugadores no se deslicen fuera del bloque.

## Configuración de agujero de gusano
Lo siguiente es un ejemplo de una configuración de agujero de gusano válida:

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

Establece si el agujero de gusano está habilitado.

| Tecla |       Valores       | Default |
|-----------|:-----------------:|:-----:|
| `isEnabled` | [Boolean](#boolean) | `true` |

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

| Tecla |      Valores       | Default |
|-----------|:-----------------:|:-----:|
| `location1` | [String](#string) |  none   |

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

| Tecla         |      Valores       | Default |
|-------------|:-----------------:|:-----:|
| `location2` | [String](#string) |  none   |

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

| Tecla         |      Valores       | Default |
|-------------|:-----------------:|:-----:|
| `location1Text` | [String](#string) |  none   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location1Text: Increíble agujero de gusano en el mundo uno
```

<div align="center">

![crear_texto_de_ubicacion_de_agujero_de_gusano1.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

Establece el texto de visualización de la segunda ubicación.

| Tecla         |      Valores       | Default |
|-------------|:-----------------:|:-----:|
| `location2Text` | [String](#string) |  none   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
location2Text: Increíble agujero de gusano en el mundo dos
```

<div align="center">

![crear_texto_de_ubicacion_de_agujero_de_gusano2.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

Establece el permiso requerido para usar el agujero de gusano.

| Tecla         |      Valores       | Default |
|-------------|:-----------------:|:-----:|
| `permission` | [String](#string) |  none   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permission: elitemobs.miPermiso
```

</div>

</details>

***

### coinCost

Establece el costo, en monedas de élite, para usar el agujero de gusano.

| Tecla         |      Valores       | Default |
|-------------|:-----------------:|:-----:|
| `coinCost` | [Double](#double) |  none   |

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

*Las partículas que forman estas formas pueden causar lag en ciertos clientes. Para desactivar las partículas, ve a **Wormholes.yml** y configura `noParticlesMode` a `true`.*

| Tecla |      Valores       | Default |
|-------------|:-----------------:|:-----:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` |  `CUBE`   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
style: CRYSTAL
```

<div align="center">

![crear_estilo_agujero_de_gusano.jpg](../../../img/wiki/create_wormhole_style.jpg)

</div>

</div>

</details>

***

### particleColor

Establece el color de las partículas utilizadas en la configuración `style`.

| Tecla         |      Valores       | Default |
|-------------|:-----------------:|:-----:|
| `particleColor` | [`0x` seguido de un código hexadecimal](https://www.w3schools.com/colors/colors_hexadecimal.asp) |  `0x800080`   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
particleColor: 0x9f5cdd
```

<div align="center">

![crear_color_de_particula_agujero.jpg](../../../img/wiki/create_wormhole_particlecolor.jpg)

</div>

</div>

</details>

***

### blindPlayer

Establece si el portal ciega al jugador para un teletransporte más suave.

| Tecla         |      Valores       | Default |
|-------------|:-----------------:|:-----:|
| `blindPlayer` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
blindPlayer: true
```

<div align="center">

![crear_ciego_agujero.jpg](../../../img/wiki/create_wormhole_blind.jpg)

</div>

</div>

</details>

***

### sizeMultiplier

Multiplica el tamaño del portal y la forma configurada por `style`.

| Tecla         |      Valores       | Default |
|-------------|:-----------------:|:-----:|
| `sizeMultiplier` | [Multiplier](#multiplier) |   `1`   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*Tenga en cuenta que deberá ajustar las coordenadas Y del agujero de gusano después de aplicar el multiplicador de tamaño.*

<div align="center">

![crear_tamanio_agujero.jpg](../../../img/wiki/create_wormhole_size.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Ejemplo de configuración de agujero de gusano</b></summary>

<div align="left">

En este ejemplo haremos un agujero de gusano simple que nos llevará de un mundo a otro. No olvides que los agujeros de gusano también pueden simplemente teletransportar a los jugadores a una ubicación diferente en el mismo mundo.

```yml
isEnabled: true #Habilitamos el gusano ajustando este valor a true
location1: mi_mundo,1.5,11.0,1.5,108.0,5.0 #esto es donde aparecerá el agujero de gusano en mi_mundo
location2: mi_otro_mundo,766.5,29.0,517.5,-136.0,5.0 #esto es donde aparecerá el agujero de gusano en mi_otro_mundo
location1Text: "&aIr a Mi Mundo" #hace un buen texto de visualización arriba de la ubicación del agujero de gusano 1
location2Text: "&aIr a Mi Otro Mundo" #hace un buen texto de visualización arriba de la ubicación del agujero de gusano 2
permission: eliteperm.playercool #sólo los jugadores con este permiso podrán usar el agujero de gusano, tanto para la ubicación1 como para la ubicación2
coinCost: 2 #los jugadores necesitarán pagar 12 monedas de élite para poder usar el agujero de gusano
style: CRYSTAL #este agujero de gusano será en forma de cristal
particleColor: 0x00ff00 #esto establecerá las partículas del agujero de gusano en verde
blindPlayer: true #el teletransporte del agujero de gusano cegará al jugador por una corta duración para hacer la transición menos brusca
sizeMultiplier: 1.0 #establece cuán grande debe ser la forma del agujero de gusano
```

</div>

</details>

#### Problemas de rendimiento

Las partículas del agujero de gusano pueden causar problemas de rendimiento en los clientes para los jugadores que están corriendo en bedrock. Si deseas desactivar las partículas del agujero de gusano puedes ir a `~plugins\EliteMobs\Wormholes.yml` y cambiar la configuración de `noParticlesMode` a `true`.
