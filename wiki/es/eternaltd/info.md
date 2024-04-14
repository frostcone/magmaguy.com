# Cómo crear un mapa personalizado de EternalTD

## Creando el archivo level.yml para tú mapa

Inicia tu mapa creando un archivo de configuración de nivel siguiendo estos sencillos pasos:

1. Comienza creando un nuevo documento de texto y dándole un nombre como *tu_nombre_de_nivel.yml* (reemplaza "tu_nombre_de_nivel" con el nombre real de tu nivel/mapa).

2. Abre el archivo en tu editor de texto favorito.

3. ¡Empecemos con la parte divertida! Agrega el nombre de tu nivel utilizando esta configuración:
```yaml
levelName: "&aMi nivel increíble"
```
Siéntete libre de darle más vida con colores de Minecraft u otros modificadores de texto.

4. Ahora, dale personalidad a tu nivel con una descripción genial:
```yaml
levelDescription: 
- "&aMy nivel es bastante genial." 
- "&aEspero que lo disfrutes!"
```
Puedes agregar más líneas a la descripción, pero mantener brevidad es una buena idea.

5. ¡Hora de las oleadas! Especifica qué oleadas de EternalTD debe usar tu nivel:
```yaml
wavesConfigFile: my_waves.yml
```
Solo recuerda usar el nombre real de tu archivo de olas. ¡Una ola por nivel!

6. Establece el mundo (construcción) que usará tu nivel:
```yaml
worldName: nombre_de_mi_carpeta_de_mundo
```
Usa el nombre real del mundo encontrado dentro de la carpeta de *mundos* de EternalTD.

7. Por último, pero no menos importante, elige el entorno perfecto para la configuración de tu nivel:
```yaml
environment: NORMAL
```
Puedes elegir entre NORMAL, NETHER o THE_END. Elige el que prefieras.

¡Tu archivo de configuración de nivel está listo! El resto del archivo será completado por los comandos de EternalTD que usaremos en los siguientes pasos para configurar la construcción.

## Preparando tu construcción
Antes de configurar tu construcción para usar con EternalTD, es esencial prepararla de la siguiente manera:

- Colócala en un mundo Vacío. Si usas multiverso, puedes usar el comando:
  ```
  /mvcreate tunombredemundoaqui NORMAL -g VoidGen:.
  ```
- Ten un límite mundial alrededor de la construcción.
- Crea un cilindro de barrera a unos pocos bloques debajo de la construcción con una altura de un bloque y un radio lo suficientemente grande para alcanzar el límite mundial (se recomienda un radio de 200 bloques). Usando WorldEdit, puedes ejecutar:
  ```
  //cyl barrier 200 1
  ```
- Establece que el punto de inicio esté en el centro de la construcción en un lugar seguro.
- Aplica las siguientes reglas:
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- El área de juego del mapa necesita estar en el mismo nivel Y. Cualquier cosa que esté más alta o más baja será ignorada cuando comencemos el proceso de mapeo.

## Mapeando la construcción para su uso con EternalTD
Para mapear el área de juego de tu construcción para su uso con EternalTD, sigue estos pasos:

1. Mide manualmente la construcción, asegurándote de incluir solo el área de juego y nada más. Anota las coordenadas mientras mides.
   <br>El área de juego debe incluir las secciones de inicio (spawn de monstruos) y fin del mapa. El inicio generalmente se construye con bloques verdes y con bloques rojos para el final.

2. Comienza midiendo los ejes X, Y y Z de la construcción. Parado en una esquina del área de juego de tus mapas en el eje X, anota la coordenada informada (puedes usar las coordenadas del bloque para esto). Muévete al lado opuesto del eje X y anota esa coordenada.

3. Para el eje Y, párate en el **área de juego** y escribe la coordenada informada.

4. Repite el mismo proceso que se hizo para el eje X para medir el eje Z. Puedes ver esta imagen de ejemplo para ayudarte a entender lo que estamos tratando de lograr aquí:
   ![Ejemplo de Mapeo](https://i.imgur.com/IZfh2Nt.jpeg)
   Fíjate en cómo solo estamos midiendo las coordenadas donde queremos que esté nuestro área de juego e ignorando el resto. Como en el ejemplo, asegúrate de incluir el inicio y el fin cuando mides el área de juego. <br>Si el área de juego que estás midiendo es más ancha en un extremo y más estrecha en el otro, debes medir la sección más ancha.

5. Después de completar las mediciones, deberías tener algo como esto:
    ```
    Eje X: -57, 56
    Eje Y: 65
    Eje Z: 34, -34
    ```

6. Reorganiza estos números de mayor a menor para obtener dos conjuntos completos de coordenadas XYZ:
    ```
    56 65 34 (los valores XYZ más altos)
    -57 65 -34 (los valores XYZ más bajos)
    ```

7. Usa el siguiente comando para seleccionar las coordenadas:
    ````
   /etd selectfloorcoordinate Xmax Y Zmax Xmin Y Zmin
   Ejemplo: /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ````

8. Las coordenadas ahora han sido seleccionadas y están en memoria. Si recibes un error, entonces tu medición fue incorrecta o el área de juego no fue construida correctamente. Para verificar si mapeamos correctamente el área de juego, ejecuta el siguiente comando:
   ````
   /etd register tu_nombre_de_nivel.yml test
   ````
   Reemplaza "tu_nombre_de_nivel" con el nombre real del nivel/mapa que estás intentando crear. Si todo se hizo correctamente, deberías ver barreras marcando cada tile en tu área de juego.

9. Revisa el área de juego y asegúrate de que todo se ve como debería y luego ejecuta el comando de nuevo pero esta vez sin el *test* al final.
   ````
   /etd register tu_nombre_de_nivel.yml
   ````
   Esto ahora guardará el área de juego en tu archivo de nivel y tu archivo de nivel ahora debería estar listo para su uso.

## Recortando la carpeta del mundo
Hay varios archivos y carpetas ubicados en tu carpeta de mundo que podemos descartar ya que EternalTD no los usa todos. Esto reducirá el tamaño de tu mundo y facilitará su distribución.

Para el entorno NORMAL:

Para preparar tu mundo, **conserva** los siguientes archivos y carpetas:

1.  Carpeta **region**

2.  **raids.dat** dentro de la carpeta **data** (asegúrate de que esté dentro de la carpeta **data** cuando copies)

3.  Archivo **level.dat**

Puedes borrar de forma segura todos los demás archivos y carpetas ubicados en la carpeta del mundo. Esto configurará correctamente tu mundo para el entorno NORMAL.

Para el entorno NETHER y THE_END:

Para preparar tu mundo, conserva los siguientes archivos y carpetas:

1.  Carpeta **region** dentro de la carpeta **DIM-1** (asegúrate de que está dentro de la carpeta **DIM-1** cuando copies)

2.  **raids.dat** dentro de la carpeta **data** (asegúrate de que esté dentro de la carpeta **data** cuando copies)

3.  Archivo **level.dat**

Puedes borrar de forma segura todos los demás archivos y carpetas ubicados en la carpeta del mundo. Esto configurará correctamente tu mundo para los entornos NETHER y THE_END.