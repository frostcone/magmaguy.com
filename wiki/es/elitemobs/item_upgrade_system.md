A partir de EliteMobs 7.3.0, es posible que los jugadores interactúen con los objetos Elite de diversas maneras únicas. Esta página está destinada a ayudar a los jugadores y administradores a entender cómo funcionan los sistemas, y a explicar posteriormente el equilibrio del sistema para los administradores.

***

# Desvinculación de objetos

Si tienes un pergamino de desvinculación, puedes usar al NPC Desvinculador para combinar 1 pergamino con 1 objeto con el fin de desvincularlo.

***Nota: en el momento de escribir esto, no hay forma de que los jugadores obtengan el pergamino sin que se les dé o lo añadan a un jefe específico. El pergamino se obtendrá de la pelea con el Dragón del Fin, que será lanzada este mes.***

El pergamino sólo puede ser utilizado una vez. Una vez desvinculados, los objetos pueden ser vendidos o dados a otros jugadores, o utilizados después de un prestigio.

***

# Desmantelamiento de objetos

Los objetos Elite pueden ser desmantelados en el NPC Desmantelador. Al desmantelar objetos, dependiendo del nivel del objeto obtendrás la siguiente chatarra:

- Nivel 0-50: Chatarra diminuta.
- Nivel 50-100: Chatarra pequeña.
- Nivel 100-150: Chatarra mediana.
- Nivel 150-200: Chatarra enorme.

La chatarra es la base para el resto del Sistema de Objetos.

***

# Reparación de objetos Elite

Los objetos Elite pueden ser reparados en el NPC Reparador usando chatarra. El grado de daño de tu objeto determina la cantidad y el tamaño de la chatarra necesaria para repararlo.

***

# Encantamiento de objetos Elite

Antes de proceder a describir cómo encantar objetos, es aconsejable familiarizarse con los objetos necesarios para el encantamiento y entender sus funciones.

**Objeto Elite**
</br>Un objeto Elite abarca cualquier botín disponible en las tiendas de EliteMobs, soltado por las Mobs Elite, o recibido como recompensa por completar una misión, entre otras fuentes.

**Libros Encantados**
</br>Los libros encantados son normalmente soltados por Elite Mobs o conferidos a los jugadores como recompensas en Arenas o Misiones. Contienen encantamientos que los jugadores pueden transferir a sus objetos deseados.

**Tickets de la Suerte**
</br>Los Tickets de la Suerte, obtenidos usualmente de Elite Mobs o como recompensas en Arenas o Misiones, permiten a los jugadores duplicar sus posibilidades de éxito cuando encantan objetos.

Los jugadores pueden acceder al menú de encantamiento visitando al NPC Encantador en la [Gremio de Aventureros]($language$/elitemobs/gremio_de_aventureros_mundo.md) o utilizando el menú `/em`.

Con un Objeto Elite y un Libro Encantado, los jugadores pueden intentar añadir el encantamiento almacenado en el libro a su objeto. Cada intento costará a los jugadores algunas Monedas Elite. También pueden duplicar sus posibilidades utilizando un Ticket de la Suerte si tienen uno.

Para iniciar el encantamiento, los jugadores ubicarían un Objeto Elite, un Libro Encantado y un Ticket de la Suerte (si tienen uno) en la ventana de Encantamiento y luego intentarían encantar su objeto. Después se encontrarán con uno de los siguientes resultados:

- **Éxito:** El encantamiento se añade con éxito al objeto.
- **Falla:** Intento fallido, resultando en la pérdida del Libro Encantado y las Monedas Elite.
- **Falla Crítica:** Una falla más severa, que conduce a la pérdida del Libro Encantado, las Monedas Elite, y el propio Objeto Elite.
- **Desafío:** Participar en una Batalla de Jefe con un 10% de posibilidades de falla crítica al perder. El objeto se encanta si los jugadores ganan.

<details>

<summary><b>Ejemplo Visual</b></summary>

<div align = "center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Tu navegador no soporta la etiqueta de video.
</video>

</div>

</details>

***

<details>
  <summary>Vídeo de MagmaGuy explicando algunos de los sistemas.</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>
</details>

## Crea tus propios Libros Encantados

Aquí hay una breve guía de cómo puedes hacer tus propios Libros Encantados.

<div align="center">

***
### isEnabled

Establece si el elemento está habilitado.

| Clave       |      Valores      | Por defecto |
|-------------|:-----------------:|:-----------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

Establece el nombre del elemento. Soporta [Códigos de color](#color_codes).

| Clave       |      Valores      | Por defecto |
|-------------|:-----------------:|:-----------:|
| `name` | [String](#string) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: '&aElite custom book with enchantments'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

Establece la descripción del elemento. Soporta [Códigos de color](#color_codes).

| Clave       |            Valores             | Por defecto |
|-------------|:------------------------------:|:-----------:|
| `lore` | [Lista String](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
lore:
- '&2Usa este libro personalizado para'
- '&2encantar objetos en el enchanter!'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

Establece de qué material de MineCraft debe ser el elemento.

| Clave       |      Valores      | Por defecto |
|-------------|:-----------------:|:-----------:|
| `material` | [Material](#material) | `BOOK`  |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
material: BOOK
```

<div align="center">

![create_book_material.jpg](../../../img/wiki/create_book_material.jpg)

</div>

</div>

</details>

***

### enchantments

Establece qué encantamientos debe tener el elemento.

| Clave           |    Valores                                | Por defecto |
|-------------    |:---------------------------------------:|:-----------:|
| `enchantments`  | [Encantamientos de MineCraft] (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) o [Encantamientos de EliteMobs]($language$/elitemobs/custom_enchantments_list.md) |  ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
enchantments:
- EARTHQUAKE,1
- LUCK,1
```

<div align="center">

![create_book_enchantments.jpg](../../../img/wiki/create_book_enchantments.jpg)

</div>

</div>

</details>

***

### itemType

Establece de dónde puedes obtener el elemento. Puedes establecerlo en `custom` si quieres que tu libro sea desechado por elites aleatorias y vendido en tiendas.

De lo contrario, puedes configurarlo en `unique` para que solo se extraiga de las tablas de botín configuradas.

| Clave       |    Valores    | Por defecto |
|-------------|:-------------:|:-----------:|
| `itemType` | [Valores]($language$/elitemobs/creating_items.md&section=itemtype) |  ninguno|

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
itemType: custom
```

</div>

</details>

***

### soulbound

Establece si pueden ser intercambiados con otros jugadores.

| Clave       |    Valores    | Por defecto |
|-------------|:-------------:|:-----------:|
| `soulbound` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>


## Ejemplo de Libro Encantado

<div align="center">

<details> 

<summary><b>Ejemplo de Configuración de Libro Encantado</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5Libro Encantado de Minería Excelente'
lore:
- '&2¡Usado para encantar elementos en el enchanter!'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

Como puedes ver, crear tus Libros Encantados no es tan complicado. La mayoría de las configuraciones son configuraciones regulares que utilizarías al crear un [item]($language$/elitemobs/creating_items.md).

Excepto que, por supuesto, aquí nuestro enfoque principal sería la sección `enchantments`. Nuestro libro de ejemplo tiene un encantamiento de MineCraft `MENDING` y un encantamiento de EliteMobs `DRILLING`.

Esto haría que nuestro libro de ejemplo sea un excelente libro que querrías usar en un pico.

</div>

</details>

</div>