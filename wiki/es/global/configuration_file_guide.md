# Empezando

Esta página te ayuda a entender cómo editar correctamente un archivo .yml (.yaml). Todos mis complementos utilizan archivos de configuración .yml, que se restablecerán o dejarán de funcionar si los editas incorrectamente.

A continuación, encontrarás cada tipo de entrada de configuración y cómo deben estar formateadas si estás modificando algún valor.

# Cómo editar archivos .yml

Los archivos se almacenan en el formato de archivo `.yml` y [Notepad++](https://notepad-plus-plus.org/) es el software de edición de archivos recomendado para trabajos de configuración. Por supuesto, puedes usar cualquier otro editor de texto de tu elección.

<div id="config_boolean">

# `Boolean`

Los valores `Boolean` son `true` o `false`. Así es como se ven:

```yml
value1: true
value2: false
```

Los `Boolean` solo aceptan valores `true` o `false`. Por lo general, se utilizan para encender o apagar características específicas.

</div>

<div id="config_string">

# `String`

Los valores `String` suelen ser solo texto normal. Se recomienda encarecidamente que crees los valores `String` entre comillas, siguiendo este formato:

```yml
value: "String"
```

Aunque esto no siempre es obligatorio, es obligatorio para cualquier string que contenga códigos de color, especialmente si el primer carácter comienza con un [código de color](#color_codes). ***Los códigos de color siguen el formato de código de color del juego***, lo que significa que `"&aTest`" resultaría en texto verde. La disponibilidad de texto coloreado varía dependiendo de la configuración. Consulta [esta página](https://minecraft.gamepedia.com/Formatting_codes) para los códigos de color.

</div>

<details>

<summary>¿Por qué?</summary>

Las cadenas de configuración pueden aceptar caracteres especiales como `&`. Si estos caracteres especiales ocupan el primer carácter, como en `value: "&aString"`, si el `String` no está entre comillas, el valor se borrará y la opción de configuración se restablecerá a sus valores predeterminados. Esta es una limitación del sistema de configuración que utiliza Spigot.

</details>

<div id="config_serialized_location">

# `Ubicación Serializada`

`Ubicación Serializada` es un tipo específico de String que se ve así:

```yml
location: world,1.0,2.0,3.0,4.0,5.0
```

Estos se utilizan para almacenar y configurar ubicaciones. Sigue este formato: `worldName,X,Y,Z,PITCH,YAW`. El pitch y el yaw simplemente determinan la dirección en la que el jugador está mirando y se implementan de la misma manera que las ubicaciones de Minecraft.

</div>

<div id="config_multiplier">

# `Multiplier`

Los valores `Multiplier` multiplican los valores del complemento por ese número. Estos valores nunca deberían estar entre comillas. Aquí tienes un ejemplo:

```yml
damageMultiplier: 1.0
```

En este caso, el multiplicador de daño se multiplicaría por 1, lo que significa que no hay ningún cambio respecto al valor predeterminado. Si el `Multiplier` fuera `2.0`, el valor se multiplicaría por `2.0`. Si fuera `0.5`, se multiplicaría por `0.5`.

Para aquellos que no están familiarizados con las fracciones, multiplicar por `0.5` es lo mismo que dividir entre 2. Los valores `Multiplier` siempre deben ser mayores que 0 (`0.0001` es válido) y no suelen tener un límite superior.

</div>

<div id="config_integer">

# `Integer`

Los valores `Integer` son solo números enteros. Ejemplo:

```yml
value: 10
```

La principal característica de los valores `Integer` es que deben ser números enteros. Esto significa que `10.1` no es válido.

</div>

<div id="config_double">

# `Double`

Los `Double` son números irracionales. Ejemplo:

```yml
value: 10.01
```

Los `Double` también pueden ser números enteros como los `Integer`, como `10.0` o incluso representarse como `10`.

</div>

<div id="config_string_list">

# `Lista de Strings`

Las `Lista de Strings` son listas de valores `String`. Estos tienden a ser los valores más difíciles de configurar, ya que requieren un formato de configuración muy específico:

```yml
valuesList:
- "value,1"
- "value,2"
- "value,3"
```

Al igual que con los `String`, se recomienda mantener los valores entre comillas. Cada `Lista de Strings` tiene su propio formato, por lo que deberás encontrar el formato específico que requiere el que estás editando; sin embargo, globalmente, así es como debería verse el formato general.

</div>

<div id="config_map_list">

# `Lista de Mapas`

Los 'Lista de Mapas' son listas de valores 'Mapa'. Estos solo se utilizan en scripting de élite y requieren este formato de configuración:

```yml
parentMap:
- Map1:
  key: value
- Map2:
  key: value
  keyForList:
    - "value1"
    - "value2"
```

Como puedes ver, las Listas de Mapas pueden contener cualquier tipo de formato en su interior, pero si las estás utilizando en scripts, necesitarás consultar la documentación para ver cuáles son las claves y los valores válidos para los diferentes mapas.

</div>

<div id="config_color_codes">

# `Códigos de Color`

También puedes asignar colores o hacer que el texto sea negrita usando los siguientes modificadores:

| Codigo      | Color      | Ejemplo                                             |
|-------------|------------|-----------------------------------------------------|
| **&4**      | Rojo oscuro| <div style="color: darkred;">&4Ejemplo rojo oscuro.</div> |
| **&c**      | Rojo       | <div style="color: red;">&cEjemplo rojo.</div>     |
| **&6**      | Naranja    | <div style="color: orange;">&6Ejemplo naranja.</div> |
| **&e**      | Amarillo   | <div style="color: yellow;">&eEjemplo amarillo.</div> |
| **&2**      | Verde oscuro | <div style="color: darkgreen;">&2Ejemplo verde oscuro.</div> |
| **&a**      | Verde      | <div style="color: green;">&aEjemplo verde.</div> |
| **&b**      | Aqua       | <div style="color: aqua;">&bEjemplo aqua.</div> |
| **&3**      | Aqua oscuro | <div style="color: cadetblue;">&3Ejemplo aqua oscuro.</div> |
| **&1**      | Azul oscuro | <div style="color: darkblue;">&1Ejemplo azul oscuro.</div> |
| **&9**      | Azul        | <div style="color: blue;">&9Ejemplo azul.</div> |
| **&d**      | Morado claro | <div style="color: hotpink;">&dEjemplo morado claro.</div> |
| **&5**      | Morado oscuro | <div style="color: purple;">&5Ejemplo morado oscuro.</div> |
| **&f**      | Blanco     | <div style="color: white;">&fEjemplo blanco.</div> |
| **&7**      | Gris       | <div style="color: darkgray;">&7Ejemplo gris.</div> |
| **&8**      | Gris oscuro | <div style="color: gray;">&8Ejemplo gris oscuro.</div> |
| **&0**      | Negro      | <div style="color: black;">&0Ejemplo negro.</div> |
| **&r**      | Resetea el color | &rEjemplo de reseteo. |
| **&i**      | Negrita    | **&iEjemplo de negrita.** |
| **&o**      | Cursiva    | _&oEjemplo de cursiva._ |
| **&n**      | Subrayado  | <u>&nEjemplo de subrayado.</u> |
| **&m**      | Tachado    | ~~&mEjemplo de tachado.~~ |
| **&k**      | Aleatorio  | &k<div class="magic-text"></div> &fexample. |

Como puedes ver en los ejemplos, los modificadores siguen la sintaxis regular de minecraft excepto que el § se reemplaza con un & cuando se usa con EliteMobs. Puedes utilizarlo para modificar la mayoría del texto de EliteMobs, como nombres de mobs, texto de misiones, nombres de mazmorras, etc.

Toma nota de que cuando esté funcionando correctamente, los modificadores en sí no mostrarán en tu texto. Solo se muestran aquí con fines demostrativos.

También es posible combinar colores y otros modificadores de texto. Por ejemplo, puedes hacer:

*<div style="color: green;">&a&oPara obtener texto verde en cursiva.</div>*

Si queremos que nuestro mob personalizado tenga un nombre de colores bonito y elegante, haríamos lo siguiente:

```yml
name: $normalBossLevel &aEscary &dDragón
```

</div>

<div id="config_material">

# `Material`

Los valores `Material` son simplemente los Materiales que puedes encontrar en MineCraft, como `IRON_CHESTPLATE`. Para una lista de `Material` válidos, vea esta [página](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```yml
helmet: IRON_HELMET
```

Los `Material` se utilizan como valores en varios ajustes, como equipo para mobs, botines de loot, recompensas de misiones, etc.

</div>

<div id="config_filename">

# `Nombre de archivo`

Los valores `Nombre de archivo` son simplemente archivos de configuración .yml que están formateados para ser utilizados con los complementos de MagmaGuy. Estos podrían ser cualquier cosa, desde objetos hasta misiones.

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

</div>

<div id="config_trimming_worlds">

# Recortando Mundos

A veces, puede ser necesario reducir el tamaño de tu mundo de Minecraft para hacerlo más liviano y, en consecuencia, más fácil de distribuir. Esto se puede lograr mediante el uso del complemento [WorldBorder plugin](https://www.spigotmc.org/resources/worldborder-1-15.80466/). A pesar de que el complemento se enumera como que solo admite MineCraft hasta la versión 1.19, funciona sin problemas con la última versión de MineCraft a partir del 25 de enero de 2024.

<details>
<summary>Tip</summary>
Si lo haces por primera vez, puede ser una buena idea crear una copia de seguridad de tu mundo por si acaso algo sale mal.
</details>

Una vez que el complemento está instalado, navega al medio del mundo o al área específica que deseas recortar. Luego, ejecuta el comando `/wb set x`, donde `x` representa el tamaño aproximado del radio que deseas para tu área.

<details>
<summary>Tip</summary>
Si <code>/wb</code> no te funciona, intenta con <code>/worldborder:wb</code>.
</details>

Después de ejecutar este comando, vuela a los bordes de tu mundo para verificar que se ha establecido correctamente la frontera mundial y cubre el tamaño previsto. Reconocerás que has llegado al borde del mundo cuando te empujen hacia atrás, acompañado por un mensaje en el chat.

![trim_pic_1.jpg](trim_pic_1.jpg)

En la imagen de arriba, nuestro objetivo es recortar el mundo alrededor de los bloques morados, dejando solo unos pocos chunks alrededor de ellos. Para lograr esto, nos colocamos en el medio del área morada en los cuadrados rojos y ejecutamos `/wb set 50`, estableciendo el límite mundial justo más allá del área púrpura.

A continuación, utilizamos el comando `/wb trim [freq] [pad]`, con la frecuencia ajustada a 200 y el pad a 20. El pad determina cuántos chunks deben quedar alrededor del límite mundial (el área púrpura), y la frecuencia determina cuántos chunks deben procesarse por segundo. Después de ejecutar `/wb trim 200 20`, se nos pedirá que confirmemos ejecutando `/wb trim confirm`. Confirmamos la acción, y después de cierto tiempo, nuestro mundo se recortará, reduciendo su tamaño y facilitando su distribución.

Ahora puedes eliminar el límite de mundo usando `/wb clear all` o simplemente déjalo si lo deseas.

## Recortando la carpeta del mundo

Hay varios archivos y carpetas ubicados en la carpeta de tu mundo que podemos descartar, ya que los complementos no los utilizan todos. Esto reducirá el tamaño de tu mundo y facilitará su distribución.

Para un entorno mundial NORMAL:

Para preparar tu mundo, conserva los siguientes archivos y carpetas:

1. Carpeta **region**
2. **raids.dat** dentro de la carpeta **data** (asegúrate de que esté dentro de la carpeta **data** cuando lo copies)
3. Archivo **level.dat**

Puede eliminar de manera segura todos los demás archivos y carpetas ubicadas en la carpeta del mundo. Esto configurará tu mundo correctamente para el entorno NORMAL.

Para los entornos de mundo NETHER y THE_END:

Para preparar tu mundo, conserva los siguientes archivos y carpetas:

1. Carpeta **region** dentro de la carpeta **DIM-1** (asegúrate de que esté dentro de la carpeta **DIM-1** cuando copies)
2. **raids.dat** dentro de la carpeta **data** (asegúrate de colocarlo dentro de la carpeta **data** cuando copies)
3. Archivo **level.dat**

Puede eliminar de manera segura todos los demás archivos y carpetas ubicadas en la carpeta del mundo. Esto configurará tu mundo correctamente para los entornos NETHER y THE_END.