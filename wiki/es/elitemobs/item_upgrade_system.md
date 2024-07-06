A partir de EliteMobs 7.3.0, es posible que los jugadores interactúen con los objetos de élite de varias maneras únicas. Esta página tiene como objetivo ayudar a los jugadores y administradores a descubrir cómo funcionan los sistemas y luego explicar el equilibrio del sistema para los administradores.


***

# Desvincular objetos

Si tienes un pergamino de desvinculación de objetos, puedes usar el NPC Desvinculador para combinar 1 pergamino con 1 objeto para desvincularlo.

***Nota: al momento de escribir esto, no hay forma de que los jugadores obtengan el pergamino sin que se les dé o se les agregue como jefe específico. El pergamino caerá de la pelea del Ender Dragon que se lanzará este mes.***

El pergamino solo se puede usar una vez. Una vez desvinculados, los objetos se pueden vender o entregar a otros jugadores, o se pueden usar después de un prestigio.

***

# Desechar objetos

Los objetos de élite se pueden desechar en el NPC Desguazador. Al desechar objetos, dependiendo del nivel del objeto, obtendrás el siguiente desecho:

- Nivel 0-50: Desecho diminuto.
- Nivel 50-100: Desecho pequeño.
- Nivel 100-150: Desecho mediano.
- Nivel 150-200: Desecho enorme.

El desecho es la base del resto del sistema de objetos.

***

# Reparar objetos de élite

Los objetos de élite se pueden reparar en el NPC Reparador utilizando desechos. La extensión del daño a tu objeto determina la cantidad y el tamaño del desecho necesarios para repararlo.

***

# Encantar objetos de élite

Antes de continuar con la descripción de cómo encantar objetos, es recomendable que te familiarices con los objetos necesarios para encantar y comprendas sus funciones.

**Objeto de élite**
</br>Un objeto de élite abarca cualquier botín disponible en las tiendas de EliteMobs, que sueltan las turbas de élite o que se recibe como recompensa por completar una misión, entre otras fuentes.

**Libros encantados**
</br>Los libros encantados suelen ser soltados por las turbas de élite o otorgados a los jugadores como recompensas en arenas o misiones. Contienen encantamientos que los jugadores pueden transferir a los objetos que deseen.

**Boletos de la suerte**
</br>Los boletos de la suerte, que generalmente se obtienen de las turbas de élite o como recompensas en arenas o misiones, permiten a los jugadores duplicar sus posibilidades de éxito al encantar objetos.

Los jugadores pueden acceder al menú de encantamiento visitando al NPC Encantador en el [Gremio de aventureros]($language$/elitemobs/adventurers_guild_world.md) o usando el menú `/em`.

Con un objeto de élite y un libro encantado, los jugadores pueden intentar agregar el encantamiento almacenado en el libro a su objeto. Cada intento les costará a los jugadores algunas monedas de élite. También pueden duplicar sus posibilidades utilizando un boleto de la suerte si tienen uno.

Para comenzar el encantamiento, los jugadores colocarían un objeto de élite, un libro encantado y un boleto de la suerte (si tienen uno) en la ventana de encantamiento y luego intentarían encantar su objeto. Después de eso, se encontrarían con uno de los siguientes resultados:

- **Éxito:** El encantamiento se agrega correctamente al objeto.
- **Fallo:** Intento fallido, lo que resulta en la pérdida del libro encantado y las monedas de élite.
- **Fallo crítico:** Un fallo más grave, que conduce a la pérdida del libro encantado, las monedas de élite y el propio objeto de élite.
- **Desafío:** Participa en una batalla contra un jefe con un 10% de probabilidad de fallo crítico al perder. El objeto está encantado si los jugadores ganan.

<details>

<summary><b>Ejemplo visual</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Su navegador no admite la etiqueta de video.
</video>

</div>

</details>

***

<details>
  <summary>Video de MagmaGuy que explica algunos de los sistemas.</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## Crea tus propios libros encantados

Aquí hay una breve guía que explica cómo puedes crear tus propios libros encantados.

<div align="center">

***

### isEnabled

Establece si el objeto está habilitado.

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
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

### name

Establece el nombre del objeto. Admite [códigos de color](#códigos_de_color).

| Clave         |      Valores       | Predeterminado |
|-------------|:-----------------:|:-------:|
| `name` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: '&aLibro encantado personalizado de élite'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

Establece la tradición del objeto. Admite [códigos de color](#códigos_de_color).

| Clave         |           Valores            | Predeterminado |
|-------------|:---------------------------:|:-------:|
| `lore` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
lore:
- '&2Usa este libro personalizado para'
- '&2¡encantar objetos en el encantador!'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

Establece qué material de MineCraft debe ser el objeto.

| Clave         |      Valores       | Predeterminado |
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

| Clave         |    Valores    | Predeterminado |
|-------------|:------------:|:-------:|
| `enchantments` | [Encantamientos de MineCraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) o [encantamientos de EliteMobs]($language$/elitemobs/custom_enchantments_list.md) |  ninguno   |

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

Establece de dónde puedes obtener el objeto. Puedes establecer esto en `custom` si quieres que tu libro sea soltado por élites aleatorias y vendido en tiendas.

De lo contrario, puedes establecerlo en `unique` para que solo caiga de las tablas de botín configuradas.

| Clave         |    Valores    | Predeterminado |
|-------------|:------------:|:-------:|
| `itemType` | [Valores]($language$/elitemobs/creating_items.md&section=itemtype) |  ninguno   |

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

Establece si se pueden intercambiar con otros jugadores.

| Clave         |    Valores    | Predeterminado |
|-------------|:------------:|:-------:|
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

## Ejemplo de libro encantado

<div align="center">

<details> 

<summary><b>Ejemplo de configuración de libro encantado</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5Excelente libro encantado de minería'
lore:
- '&2¡Se usa para encantar objetos en el encantador!'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

Como puedes ver, hacer tus libros encantados no es tan complicado. La mayoría de las configuraciones son configuraciones regulares que usarías al crear un [objeto]($language$/elitemobs/creating_items.md).

Excepto que, por supuesto, aquí nuestro enfoque principal sería la sección `enchantments`. Nuestro libro de ejemplo tiene un encantamiento de MineCraft, `MENDING`, y un encantamiento de EliteMobs, `DRILLING`.

Esto haría que nuestro libro de ejemplo sea un libro excelente que querrías usar en un pico.

</div>

</details>

</div>


