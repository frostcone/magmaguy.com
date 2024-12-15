# Cómo crear un mapa personalizado de EternalTD

## Para crear el archivo level.yml para su mapa

Comience a crear su mapa creando un archivo de configuración de nivel siguiendo estos sencillos pasos:

1. Comience creando un nuevo documento de texto y asignándole un nombre como *nombre_de_su_nivel.yml* (reemplace "nombre_de_su_nivel" con el nombre real de su nivel/mapa).

2. Abra el archivo en su editor de texto favorito.

3. ¡Comencemos con la parte divertida! Agregue el nombre de su nivel usando esta configuración:
```yaml
levelName: "&aMi nivel increíble"
```
Siéntase libre de darle vida con algunos colores de Minecraft u otros modificadores de texto.

4. Ahora, dele a su nivel algo de personalidad con una descripción genial:
```yaml
levelDescription:
- "&aMi nivel es bastante genial."
- "&a¡Espero que lo disfrutes!"
```
Puede agregar más líneas a la descripción, pero mantenerla breve es una buena idea.

5. ¡Es hora de establecer oleadas! Especifique qué oleadas de EternalTD debe usar su nivel:
```yaml
wavesConfigFile: my_waves.yml
```
Solo recuerde usar el nombre real de su archivo de oleadas. ¡Una oleada por nivel!

6. Establezca el mundo (construcción) que usará su nivel:
```yaml
worldName: my_world_folder_name
```
Utilice el nombre del mundo real que se encuentra dentro de la carpeta *worlds* de EternalTD.

7. Por último, pero no menos importante, elija el entorno perfecto para la configuración de su nivel:
```yaml
environment: NORMAL
```
Puede elegir entre NORMAL, NETHER o THE_END. Elija el que prefiera.

¡Su archivo de configuración de nivel está listo! El resto del archivo se completará con los comandos de EternalTD que utilizaremos en los siguientes pasos cuando mapeemos la compilación.

## Preparación de su compilación
Antes de mapear su compilación para usar con EternalTD, es esencial configurarla de la siguiente manera:

- Configúrelo en un mundo vacío. Si utiliza Multiverse, puede usar el comando:
  ```
  /mvcreate nombredetumundoaqui NORMAL -g VoidGen:.
  ```
- Tenga un borde de mundo ajustado alrededor de la compilación.
- Cree un cilindro de barrera unos pocos bloques debajo de la compilación con una altura de un bloque y un radio lo suficientemente grande como para alcanzar el borde del mundo (se recomienda un radio de 200 bloques). Usando WorldEdit, puede ejecutar:
  ```
  //cyl barrier 200 1
  ```
- Establezca el punto de aparición para que esté en el centro de la compilación en un lugar seguro.
- Aplique las siguientes reglas:
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- El área de juego del mapa debe estar en el mismo nivel Y. Cualquier cosa que sea más alta o más baja se ignorará cuando comencemos el proceso de mapeo.

## Mapeo de la compilación para usar con EternalTD
Para mapear el área de juego de su compilación para usar con EternalTD, siga estos pasos:

1. Mida manualmente la compilación, asegurándose de incluir solo el área de juego y nada más. Anote las coordenadas a medida que mide.
<br>El área de juego debe incluir las secciones de inicio (aparición de monstruos) y fin del mapa. El inicio generalmente se construye con bloques verdes y con bloques rojos para el final.

2. Comience midiendo los ejes X, Y y Z de la compilación. Póngase en una esquina del área de juego de sus mapas en el eje X y anote la coordenada informada (puede usar las coordenadas de bloque para esto). Muévase al lado opuesto del eje X y anote esa coordenada.

3. Para el eje Y, párese en el **área de juego** y anote la coordenada informada.

4. Repita el mismo proceso que se hizo para el eje X para medir el eje Z. Puede echar un vistazo a esta imagen de ejemplo para ayudarlo a comprender lo que estamos tratando de lograr aquí:
   ![Ejemplo de mapeo](https://i.imgur.com/IZfh2Nt.jpeg)
   Observe cómo solo estamos midiendo las coordenadas donde queremos que esté nuestra área de juego e ignorando el resto. Como en el ejemplo, asegúrese de incluir el inicio y el fin al medir el área de juego. <br>Si el área de juego que está midiendo es más ancha en un extremo y más estrecha en el otro, debe medir la sección más ancha.

5. Después de completar las mediciones, debería tener algo como esto:
   ```
   Eje X: -57, 56
   Eje Y: 65
   Eje Z: 34, -34
   ```

6. Reorganice estos números de mayor a menor para obtener dos conjuntos completos de coordenadas XYZ:
   ```
   56 65 34 (valores XYZ más altos)
   -57 65 -34 (valores XYZ más bajos)
   ```

7. Use el siguiente comando para seleccionar las coordenadas:
   ```
   /etd selectfloorcoordinate Xalto Y Zalto Xbajo Y Zbajo
   Ejemplo: /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. Ahora se han seleccionado las coordenadas y están en memoria. Si recibe un error, significa que su medición fue incorrecta o que el área de juego no se construyó correctamente. Para verificar si mapeamos el área de juego correctamente, ejecute el siguiente comando:
   ```
   /etd register nombre_de_su_nivel.yml test
   ```
   Reemplace "nombre_de_su_nivel" con el nombre real del nivel/mapa que está intentando crear. Si todo se hizo correctamente, debería ver barreras que marcan cada mosaico en su área de juego.

9. Revise el área de juego y asegúrese de que todo se vea como debería y luego ejecute el comando nuevamente, pero esta vez sin la parte de *test* al final.
   ````
   /etd register nombre_de_su_nivel.yml
   ````
   Esto ahora guardará el área de juego en su archivo de nivel y su archivo de nivel ahora debería estar listo para su uso.

## Recorte de la carpeta del mundo
Hay varios archivos y carpetas ubicados en la carpeta de su mundo que podemos descartar, ya que EternalTD no los usa todos. Esto reducirá el tamaño de su mundo y hará que sea más fácil de distribuir.

Para el entorno NORMAL:

Para preparar su mundo, **conserve** los siguientes archivos y carpetas:

1. carpeta **region**

2.  **raids.dat** dentro de la carpeta **data** (asegúrese de que esté dentro de la carpeta **data** al copiar)

3.  archivo **level.dat**

Puede eliminar de forma segura todos los demás archivos y carpetas ubicados en la carpeta del mundo. Esto configurará su mundo correctamente para el entorno NORMAL.

Para los entornos NETHER y THE_END:

Para preparar su mundo, conserve los siguientes archivos y carpetas:

1. carpeta **region** dentro de la carpeta **DIM-1** (asegúrese de que esté dentro de la carpeta **DIM-1** al copiar)

2.  **raids.dat** dentro de la carpeta **data** (asegúrese de que esté dentro de la carpeta **data** al copiar)

3.  archivo **level.dat**

Puede eliminar de forma segura todos los demás archivos y carpetas ubicados en la carpeta del mundo. Esto configurará su mundo correctamente para los entornos NETHER y THE_END.
