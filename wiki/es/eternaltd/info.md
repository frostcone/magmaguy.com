# Cómo crear un mapa personalizado de EternalTD

## Creando el archivo level.yml para tu mapa

Comienza tu mapa creando un archivo de configuración de nivel siguiendo estos sencillos pasos:

1. Comienza creando un nuevo documento de texto y dándole un nombre como *your_level_name.yml* (reemplaza "your_level_name" con el nombre real de tu nivel/mapa).

2. Abre el archivo en tu editor de texto favorito.

3. ¡Empecemos con la parte divertida! Agrega el nombre de tu nivel usando esta configuración:
```yaml
levelName: "&aMi nivel increíble"
```
Siéntete libre de darle vida con algunos colores de Minecraft u otros modificadores de texto.

4. Ahora, dale a tu nivel algo de carácter con una descripción genial:
```yaml
levelDescription:
- "&aMi nivel es bastante genial".
- "&a¡Espero que lo disfrutes!"
```
Puedes agregar más líneas a la descripción, pero es una buena idea mantenerla breve.

5. ¡Hora de las oleadas! Especifica qué oleadas de EternalTD debe usar tu nivel:
```yaml
wavesConfigFile: mis_oleadas.yml
```
Solo recuerda usar el nombre real de tu archivo de oleadas. ¡Una oleada por nivel!

6. Establece el mundo (construcción) que utilizará tu nivel:
```yaml
worldName: nombre_de_la_carpeta_de_mi_mundo
```
Usa el nombre real del mundo que se encuentra dentro de la carpeta *worlds* de EternalTD.

7. Por último, pero no menos importante, elige el entorno perfecto para la configuración de tu nivel:
```yaml
environment: NORMAL
```
Puedes elegir entre NORMAL, NETHER o THE_END. Elige tu opción.

¡El archivo de configuración de tu nivel está listo! El resto del archivo se completará con comandos de EternalTD que usaremos en los siguientes pasos cuando mapeemos la construcción.

## Preparando tu construcción
Antes de mapear tu construcción para usarla con EternalTD, es esencial configurarla de la siguiente manera:

- Establécelo en un mundo vacío. Si usas multiverso, puedes usar el comando:
  ```
  /mvcreate tunombredemundoaqui NORMAL -g VoidGen:.
  ```
- Ten un borde de mundo ajustado alrededor de la construcción.
- Crea un cilindro de barrera unos bloques debajo de la construcción con una altura de un bloque y un radio lo suficientemente grande como para llegar al borde del mundo (se recomienda un radio de 200 bloques). Usando WorldEdit, puedes ejecutar:
  ```
  //cyl barrier 200 1
  ```
- Establece el punto de generación para que esté en el centro de la construcción en un lugar seguro.
- Aplica las siguientes reglas:
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- El área de juego del mapa debe estar en el mismo nivel Y. Cualquier cosa que sea más alta o más baja se ignorará cuando comencemos el proceso de mapeo.

## Mapeando la construcción para usarla con EternalTD
Para mapear el área de juego de tu construcción para usarla con EternalTD, sigue estos pasos:

1. Mide manualmente la construcción, asegurándote de incluir solo el área de juego y nada más. Anota las coordenadas a medida que mides.
<br>El área de juego debe incluir las secciones de inicio (generación de monstruos) y finalización del mapa. El inicio generalmente se construye con bloques verdes y con bloques rojos para el final.


2. Comienza midiendo los ejes X, Y y Z de la construcción. Párate en una esquina del área de juego de tu mapa en el eje X y anota la coordenada informada (puedes usar las coordenadas del bloque para esto). Muévete al lado opuesto del eje X y anota esa coordenada.


3. Para el eje Y, párate en el **área de juego** y anota la coordenada informada.


4. Repite el mismo proceso que se hizo para el eje X para medir el eje Z. Puedes echar un vistazo a esta imagen de ejemplo para ayudarte a comprender lo que estamos tratando de lograr aquí:
   ![Ejemplo de mapeo](https://i.imgur.com/IZfh2Nt.jpeg)
   Observa cómo solo estamos midiendo las coordenadas donde queremos que esté nuestra área de juego e ignorando el resto. Como en el ejemplo, asegúrate de incluir el inicio y el final al medir el área de juego. <br>Si el área de juego que estás midiendo es más ancha en un extremo y más estrecha en el otro, debes medir la sección más ancha.


5. Después de completar las mediciones, deberías tener algo como esto:
   ```
   Eje X: -57, 56
   Eje Y: 65
   Eje Z: 34, -34
   ```

6. Reordena estos números de mayor a menor para obtener dos conjuntos completos de coordenadas XYZ:
   ```
   56 65 34 (valores XYZ más altos)
   -57 65 -34 (valores XYZ más bajos)
   ```

7. Usa el siguiente comando para seleccionar las coordenadas:
   ```
   /etd selectfloorcoordinate Xalto Y Zalto Xbajo Y Zbajo
   Ejemplo: /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. Las coordenadas ahora se han seleccionado y están en la memoria. Si obtienes un error, entonces tu medición fue incorrecta o el área de juego no se construyó correctamente. Para comprobar si mapeamos correctamente el área de juego, ejecuta el siguiente comando:
   ```
   /etd register tu_nombre_de_nivel.yml test
   ```
   Reemplaza "tu_nombre_de_nivel" con el nombre real del nivel/mapa que estás intentando crear. Si todo se hizo correctamente, deberías ver barreras marcando cada mosaico en tu área de juego.


9. Revisa el área de juego y asegúrate de que todo se vea como debería y luego ejecuta el comando nuevamente, pero esta vez sin la *prueba* al final.
   ````
   /etd register tu_nombre_de_nivel.yml
   ````
   Esto ahora guardará el área de juego en tu archivo de nivel y tu archivo de nivel ahora debería estar listo para usar.

## Recortar la carpeta del mundo
Hay varios archivos y carpetas ubicados en la carpeta de tu mundo que podemos descartar ya que EternalTD no los usa todos. Esto reducirá el tamaño de tu mundo y facilitará su distribución.

Para el entorno NORMAL:

Para preparar tu mundo, **conserva** los siguientes archivos y carpetas:

1.  Carpeta **region**


2.  **raids.dat** de la carpeta **data** (asegúrate de que esté dentro de la carpeta **data** al copiar)


3.  Archivo **level.dat**

Puedes eliminar de forma segura todos los demás archivos y carpetas ubicados en la carpeta del mundo. Esto configurará tu mundo correctamente para el entorno NORMAL.

Para el entorno NETHER y THE_END:

Para preparar tu mundo, conserva los siguientes archivos y carpetas:

1.  Carpeta **region** dentro de la carpeta **DIM-1** (asegúrate de que esté dentro de la carpeta **DIM-1** al copiar)


2.  **raids.dat** de la carpeta **data** (asegúrate de que esté dentro de la carpeta **data** al copiar)


3.  Archivo **level.dat**

Puedes eliminar de forma segura todos los demás archivos y carpetas ubicados en la carpeta del mundo. Esto configurará tu mundo correctamente para los entornos NETHER y THE_END.




