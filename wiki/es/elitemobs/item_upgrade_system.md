Aquí tienes la traducción al español, manteniendo el formato markdown:

A partir de EliteMobs 7.3.0, es posible que los jugadores interactúen con los Objetos de Élite de varias maneras únicas. Esta página tiene como objetivo ayudar a los jugadores y administradores a entender cómo funcionan los sistemas, y más adelante explicar el equilibrio del sistema para los administradores.

***

# Desvincular Objetos

Si tienes un pergamino de desvinculación de objetos, puedes usar el NPC Desvinculador para combinar 1 pergamino con 1 objeto y así desvincularlo.

***Nota: al momento de escribir esto, no hay forma de que los jugadores obtengan el pergamino sin que se les dé o se añada a un jefe específico. El pergamino caerá de la pelea contra el Ender Dragon que se lanzará este mes.***

El pergamino solo se puede usar una vez. Una vez desvinculados, los objetos pueden venderse o entregarse a otros jugadores, o usarse después de un prestigio.

***

# Desguazar Objetos

Los Objetos de Élite pueden ser desguazados en el NPC Desguazador. Al desguazar objetos, dependiendo del nivel del objeto, obtendrás el siguiente desguace:

- Nivel 0-50: Desguace Pequeño.
- Nivel 50-100: Desguace Mediano.
- Nivel 100-150: Desguace Grande.
- Nivel 150-200: Desguace Enorme.

El desguace es la base para el resto del Sistema de Objetos.

***

# Reparar Objetos de Élite

Los objetos de élite pueden ser reparados en el NPC Reparador usando desguace. La extensión del daño a tu objeto determina la cantidad y el tamaño del desguace requerido para arreglarlo.

***

# Encantar Objetos de Élite

Antes de proceder a describir cómo encantar objetos, es recomendable familiarizarse con los objetos necesarios para encantar y comprender sus funciones.

**Objeto de Élite**
</br>Un objeto de élite abarca cualquier botín disponible en las tiendas de EliteMobs, que cae de Mobs de Élite, o que se recibe como recompensa por completar una misión, entre otras fuentes.

**Libros Encantados**
</br>Los libros encantados suelen caer de Mobs de Élite o se otorgan a los jugadores como recompensas en Arenas o Misiones. Contienen encantamientos que los jugadores pueden transferir a sus objetos deseados.

**Tickets de la Suerte**
</br>Los tickets de la suerte, generalmente obtenidos de Mobs de Élite o como recompensas en Arenas o Misiones, permiten a los jugadores duplicar sus posibilidades de éxito al encantar objetos.

Los jugadores pueden acceder al menú de encantamiento visitando el NPC Encantador en el [Gremio de Aventureros]($language$/elitemobs/adventurers_guild_world.md) o usando el menú `/em`.

Con un Objeto de Élite y un Libro Encantado, los jugadores pueden intentar añadir el encantamiento almacenado en el libro a su objeto. Cada intento costará a los jugadores algunas Monedas de Élite. También pueden duplicar sus posibilidades usando un Ticket de la Suerte si tienen uno.

Para comenzar el encantamiento, los jugadores colocarían un Objeto de Élite, un Libro Encantado y un Ticket de la Suerte (si tienen uno) en la ventana de Encantamiento y luego intentarían encantar su objeto. Después de eso, se encontrarían con uno de los siguientes resultados:

- **Éxito:** El encantamiento se añade con éxito al objeto.
- **Fallo:** Intento fallido, resultando en la pérdida del Libro Encantado y las Monedas de Élite.
- **Fallo Crítico:** Un fallo más severo, que lleva a la pérdida del Libro Encantado, las Monedas de Élite y el propio Objeto de Élite.
- **Desafío:** Participa en una Batalla de Jefe con un 10% de probabilidad de fallo crítico al perder. El objeto se encanta si los jugadores ganan.

<details>

<summary><b>Ejemplo Visual</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</details>

***

<details>
  <summary>Video de MagmaGuy explicando algunos de los sistemas.</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## Crea tus propios Libros Encantados

Aquí tienes una breve guía que explica cómo puedes crear tus propios Libros Encantados.

<div align="center">

***

### isEnabled

Establece si el objeto está habilitado.

| Key         |      Values       | Default |
|-------------|:-----------------:|:-------:|
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

Establece el nombre del objeto. Soporta [Códigos de Color](#color_codes).

| Key         |      Values       | Default |
|-------------|:-----------------:|:-------:|
| `name` | [String](#string) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: '&aElite Custom Enchanted Book'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

Establece la descripción (lore) del objeto. Soporta [Códigos de Color](#color_codes).

| Key         |           Values            | Default |
|-------------|:---------------------------:|:-------:|
| `lore` | [String List](#string_list) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
lore:
- '&2Usa este libro personalizado para'
- '&2encantar objetos en el encantador!'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

Establece qué material de MineCraft debe ser el objeto.

| Key         |      Values       | Default |
|-------------|:-----------------:|:-------:|
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

Establece qué encantamientos debe contener el objeto.

| Key         |    Values    | Default |
|-------------|:------------:|:-------:|
| `enchantments` | [Encantamientos de MineCraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) o [Encantamientos de EliteMobs](es/elitemobs/custom_enchantments_list.md) |  none   |

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

Establece de dónde puedes obtener el objeto. Puedes establecerlo a `custom` si quieres que tu libro caiga de élites aleatorios y se venda en tiendas.

De lo contrario, puedes establecerlo a `unique` para que solo caiga de tablas de botín configuradas.

| Key         |    Values    | Default |
|-------------|:------------:|:-------:|
| `itemType` | [Valores](es/elitemobs/creating_items.md&section=itemtype) |  none   |

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

Establece si se puede intercambiar con otros jugadores.

| Key         |    Values    | Default |
|-------------|:------------:|:-------:|
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

## Ejemplo de Libro Encantado

<div align="center">

<details>

<summary><b>Ejemplo de Configuración de Libro Encantado</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5Excellent Mining Enchanted Book'
lore:
- '&2Usado para encantar objetos en el encantador!'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

Como puedes ver, crear tus Libros Encantados no es tan complicado. La mayoría de las configuraciones son ajustes regulares que usarías al crear un [objeto](es/elitemobs/creating_items.md).

Excepto que, por supuesto, aquí nuestro enfoque principal sería la sección `enchantments`. Nuestro libro de ejemplo tiene un encantamiento de MineCraft `MENDING` y un encantamiento de EliteMobs `DRILLING`.

Esto haría de nuestro libro de ejemplo un excelente libro que querrías usar en un pico.

</div>

</details>

</div>