A partir de EliteMobs 7.3.0, es posible que los jugadores interactúen con los Objetos de Élite de varias maneras únicas.
Esta página tiene como objetivo ayudar a los jugadores y administradores a entender cómo funcionan los sistemas y, más
adelante, explicar el equilibrio del sistema para los administradores.

***

# Desvinculación de Objetos

Si tienes un pergamino de desvinculación de objetos, puedes usar el NPC Desvinculador para combinar 1 pergamino con 1
objeto y así desvincularlo.

***Nota: al momento de escribir esto, no hay forma de que los jugadores obtengan el pergamino sin que se lo den o lo
añadan a un jefe específico. El pergamino caerá de la pelea contra el Ender Dragon, que se lanzará este mes.***

El pergamino solo se puede usar una vez. Una vez desvinculados, los objetos se pueden vender o dar a otros jugadores, o
se pueden usar después de un prestigio.

***

# Desguace de Objetos

Los Objetos de Élite se pueden desguazar en el NPC Desguazador. Al desguazar objetos, según el nivel del objeto,
obtendrás el siguiente desguace:

- Nivel 0-50: Desguace Minúsculo.
- Nivel 50-100: Desguace Pequeño.
- Nivel 100-150: Desguace Mediano.
- Nivel 150-200: Desguace Enorme.

El desguace es la base del resto del Sistema de Objetos.

***

# Reparación de Objetos de Élite

Los objetos de Élite se pueden reparar en el NPC Reparador usando desguace. El alcance del daño a tu objeto determina la
cantidad y el tamaño del desguace necesario para arreglarlo.

***

# Encantamiento de Objetos de Élite

Antes de proceder a describir cómo encantar objetos, es recomendable familiarizarse con los objetos necesarios para el
encantamiento y comprender sus funciones.

**Objeto de Élite**
</br>Un objeto de élite abarca cualquier botín disponible en las tiendas de EliteMobs, soltado por Mobs de Élite, o
recibido como recompensa por completar una misión, entre otras fuentes.

**Libros Encantados**
</br>Los libros encantados suelen ser soltados por Mobs de Élite o otorgados a los jugadores como recompensas en Arenas
o Misiones. Contienen encantamientos que los jugadores pueden transferir a sus objetos deseados.

**Tickets de la Suerte**
</br>Los tickets de la suerte, que suelen obtenerse de Mobs de Élite o como recompensas en Arenas o Misiones, permiten a
los jugadores duplicar sus posibilidades de éxito al encantar objetos.

Los jugadores pueden acceder al menú de encantamiento visitando el NPC Encantador en
el [Gremio de Aventureros]($language$/elitemobs/adventurers_guild_world.md) o utilizando el menú `/em`.

Con un Objeto de Élite y un Libro Encantado, los jugadores pueden intentar añadir el encantamiento almacenado en el
libro a su objeto. Cada intento costará a los jugadores algunas Monedas de Élite. También pueden duplicar sus
posibilidades utilizando un Ticket de la Suerte si tienen uno.

Para comenzar el encantamiento, los jugadores colocarían un Objeto de Élite, un Libro Encantado y un Ticket de la
Suerte (si tienen uno) en la ventana de Encantamiento y luego intentarían encantar su objeto. Después de eso, se
encontrarían con uno de los siguientes resultados:

- **Éxito:** El encantamiento se añade correctamente al objeto.
- **Fallo:** Intento fallido, que resulta en la pérdida del Libro Encantado y las Monedas de Élite.
- **Fallo Crítico:** Un fallo más grave, que conlleva la pérdida del Libro Encantado, las Monedas de Élite y el propio
  Objeto de Élite.
- **Desafío:** Participa en una Batalla de Jefes con un 10% de probabilidad de fallo crítico al perder. El objeto se
  encanta si los jugadores ganan.

<details>

<summary><b>Ejemplo Visual</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Tu navegador no soporta la etiqueta de vídeo.
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

Aquí tienes una breve guía que explica cómo puedes crear tus propios Libros Encantados.

<div align="center">

***

### isEnabled

Establece si el objeto está habilitado.

| Clave       |        Valores        | Por Defecto |
|-------------|:---------------------:|:-----------:|
| `isEnabled` | [Booleano](#booleano) |   `true`    |

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

Establece el nombre del objeto. Admite [Códigos de Color](#códigos_de_color).

| Clave  |      Valores      | Por Defecto |
|--------|:-----------------:|:-----------:|
| `name` | [Cadena](#cadena) |   ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: '&aLibro Encantado Personalizado de Élite'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

Establece la leyenda del objeto. Admite [Códigos de Color](#códigos_de_color).

| Clave  |                Valores                | Por Defecto |
|--------|:-------------------------------------:|:-----------:|
| `lore` | [Lista de Cadenas](#lista_de_cadenas) |   ninguno   |

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

Establece de qué material de MineCraft debe ser el objeto.

| Clave      |        Valores        | Por Defecto |
|------------|:---------------------:|:-----------:|
| `material` | [Material](#material) |   `LIBRO`   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
material: LIBRO
```

<div align="center">

![create_book_material.jpg](../../../img/wiki/create_book_material.jpg)

</div>

</div>

</details>

***

### enchantments

Establece qué encantamientos debe contener el objeto.

| Clave          |                                                                                              Valores                                                                                               | Por Defecto |
|----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `enchantments` | [Encantamientos de MineCraft](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) o [Encantamientos de EliteMobs]($language$/elitemobs/custom_enchantments_list.md) |   ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
enchantments:
- TERREMOTO,1
- SUERTE,1
```

<div align="center">

![create_book_enchantments.jpg](../../../img/wiki/create_book_enchantments.jpg)

</div>

</div>

</details>

***

### itemType

Establece de dónde puedes obtener el objeto. Puedes establecerlo como `personalizado` si quieres que tu libro sea
soltado por élites aleatorias y vendido en tiendas.

De lo contrario, puedes establecerlo como `único` para que solo caiga de las tablas de botín configuradas.

| Clave      |                              Valores                               | Por Defecto |
|------------|:------------------------------------------------------------------:|:-----------:|
| `itemType` | [Valores]($language$/elitemobs/creating_items.md&section=itemtype) |   ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
itemType: personalizado
```

</div>

</details>

***

### soulbound

Establece si se puede intercambiar con otros jugadores.

| Clave       |        Valores        | Por Defecto |
|-------------|:---------------------:|:-----------:|
| `soulbound` | [Booleano](#booleano) |   `true`    |

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
material: LIBRO
name: '&5Excelente Libro Encantado de Minería'
lore:
- '&2¡Se usa para encantar objetos en el encantador!'
enchantments:
- REMENDADO,1
- PERFORACIÓN,1
itemType: ÚNICO
soulbound: false
```

Como puedes ver, crear tus Libros Encantados no es tan complicado. La mayoría de los ajustes son ajustes regulares que
usarías al crear un [objeto]($language$/elitemobs/creating_items.md).

Excepto que, por supuesto, aquí nuestro enfoque principal sería la sección `enchantments`. Nuestro libro de ejemplo
tiene un encantamiento de MineCraft `REMENDADO` y un encantamiento de EliteMobs `PERFORACIÓN`.

Esto haría de nuestro libro de ejemplo un excelente libro que querrías usar en un pico.

</div>

</details>

</div>
