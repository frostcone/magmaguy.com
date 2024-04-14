# Configuración de vídeo

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="Reproductor de vídeo de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***


*Esta guía asume que estás usando EliteMobs ***7.2.37*** o posterior.*

# Primer inicio

Reinicia el servidor una vez.

<details>

<summary><b>¿Por qué?</b></summary>

EliteMobs incrementa la salud máxima de tu archivo de configuración spigot.yml la primera vez que se inicia el servidor. Esto es para que los mobs Elite puedan tener más de 2000 de salud. No altera la salud de ningún otro mob, por lo que no cambia los mobs de vanilla o del plugin.

Este cambio requiere un reinicio del servidor para que realmente funcione.

</details>

# Permisos

Desde EliteMobs 7.2.23, todos los permisos recomendados ya están establecidos por defecto. Puedes ver más acerca de los permisos [aquí]($language$/elitemobs/permissions_and_commands.md).

# Mazmorras y el mundo del hub de la Guilda de Aventureros

Desde EliteMobs 7.2.35, ahora existe una carpeta `imports` en el directorio de EliteMobs. El proceso de instalación para las Mazmorras y el Mundo de la Guilda de Aventureros es el mismo:

1) Descarga los archivos. Puedes hacer clic en el cristal rojo en `/em setup` para obtener los enlaces de descarga.

2) Sube/mueve los archivos al directorio `/plugins/EliteMobs/imports` de tu servidor. Asegúrate de que pones los archivos **ZIP** dentro de la carpeta `imports` sin modificarlos de ninguna manera. EliteMobs extraerá automáticamente los archivos y los moverá a las ubicaciones correctas.

<div align="center">

<detalles>

<resumen>Ejemplo visual</resumen>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Tu navegador no soporta la etiqueta de video.
</video>

</details>

</div>

3) Reinicia o haz `/em reload`. Después de unos segundos, cuando hagas `/em setup` los indicadores de las características que descargaste deberían ser de color amarillo.

<div align="center">

<details>

<summary>Ejemplo visual</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_reload.webm" type="video/webm">
  Tu navegador no soporta la etiqueta de video.
</video>

</details>

</div>

**IMPORTANTE: [WORLDGUARD](https://dev.bukkit.org/projects/worldguard) Y [WORLDEDIT](https://dev.bukkit.org/projects/worldedit) (o [FastAsyncWorldEdit](https://www.spigotmc.org/resources/fastasyncworldedit.13932/)) SON OBLIGATORIOS SI QUIERES INSTALAR ALGUNO DE LOS CONTENIDOS EN ELITEMOBS!**

4) ¡Haz clic en el cristal amarillo en el menú `/em setup` para instalar las características!

<div align="center">

<details>

<summary>Ejemplo visual</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Tu navegador no soporta la etiqueta de video.
</video>

</details>

</div>

5) ***Si tus archivos de mazmorra tienen modelos personalizados***, opcionalmente puedes seguir los pasos de instalación listados [aquí]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) para instalarlos.

¡Eso es todo! **¡Puedes encontrar teletransportes a las mazmorras instaladas y la guilda de aventureros en /em, en la página de teletransportes!**

[¡Más información sobre la Guilda de Aventureros aquí!]($language$/elitemobs/adventurers_guild_world.md)
<br>[¡Descarga el Mundo del Hub de la Guilda de Aventureros aquí!](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# Plugins recomendados

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): Utilizado para configurar y proteger áreas. [Lista de flags de EliteMobs]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): Utilizado para el flag anti-fly, útil de tener.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): Utilizado para mostrar la información de EliteMobs en otros plugins, como para el chat. [Más información]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): Utilizado para enmascarar a los Jefes Personalizados como cualquier otra cosa. Los disfraces se usan mucho en nuestras mazmorras oficiales, por lo que se recomienda encarecidamente que instales este plugin. [Más información]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): Utilizado para enlazar los anuncios de EliteMobs al chat de Discord. [Más información]($language$/elitemobs/discordsrv.md)

# Actualizar contenido de la mazmorra

Para actualizar el contenido de la mazmorra, simplemente repite los pasos de instalación anteriores. **NO tienes que borrar ningún archivo**, EliteMobs maneja eso cuando importas la actualización.

# Preguntas Frecuentes (FAQ)

## EliteMobs dice que WorldGuard / WorldEdit no está instalado cuando sí lo está

<details><summary>Respuesta</summary>

Esto significa al 100% que estás usando la versión incorrecta de WorldGuard / WorldEdit en tu servidor. [Puedes conseguir la versión correcta en la sección de arriba.]($language$/elitemobs/setup.md&section=recommended-plugins)

</details>

## La mazmorra basada en el mundo es solo un terreno plano

<details><summary>Respuesta</summary>

El 95% de las veces esto significa que no seguiste las instrucciones de configuración. Si descomprimiste cualquier archivo o cargaste cualquier mundo utilizando otros plugins, reinstala el contenido siguiendo los pasos listados arriba. No necesitas ningún otro plugin para cargar los mundos correctamente.

</details>

## El chat del NPC se ve raro / los agujeros de gusano no funcionan / otro comportamiento extraño después de instalar

<details>

<summary>Respuesta</summary>

Ejecuta el comando `/em reload` después de configurar una mazmorra para asegurarte de que todos los valores se inicialicen completamente. Un reinicio es aún mejor, pero no debería ser necesario.

</details>

## Los jefes no están apareciendo

### ¡El jefe estaba apareciendo antes!

<details>

<summary>Respuesta</summary>

Los jefes regionales tienen un tiempo de reaparición. Puedes verificar cuándo está programado que reaparezca el jefe yendo a su archivo de configuración y copiando los números después del `:` en la sección de ubicaciones de aparición.

Ejemplo:

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

En este caso los números que buscas son `1643259941451`. Puedes usar [esta](https://www.unixtimestamp.com/index.php) página web para convertir eso a una fecha específica. Puedes borrar los números para forzar la reaparición del jefe, asegúrate de hacer `/em reload` después de borrarlos.

</details>

### ¡El jefe nunca estuvo apareciendo!

<details>

<summary>Respuesta</summary>

Comprueba las siguientes cosas:

- ¿Tú u otra persona mataron al jefe, o se escapó mediante la función de tiempo límite? El jefe puede estar reapareciendo. Comprueba los enfriamientos, la información sobre eso está en la sección de arriba.
- Ve si hay algún error en la consola, especialmente después de instalar la mazmorra o después de un `/em reload`. Los errores deberían decirte qué está mal.
- Comprueba si tu región está protegida por algún otro plugin que impida la aparición de mobs
- Comprueba la dificultad de tu mundo, los mobs no pueden aparecer en dificultad pacífica
- Comprueba las marcas de WorldGuard, ve si la aparición de mobs está configurada para permitir
- Comprueba si instalaste el contenido de la mazmorra sobre el área de aparición, eso está protegido por defecto
- Muy, muy raramente, el problema puede tener que ver con el día que tu servidor cree que es. Asegúrate de que la fecha de la máquina de tu servidor es correcta, de lo contrario, el mecanismo de reaparición podría causar algunos problemas.

</details>


## Algo está estropeado y simplemente no puedo arreglarlo

<details>

<summary>Respuesta</summary>

Esto suele suceder después de intentar y no lograr modificar correctamente los archivos de manera que EliteMobs no pudiera autorepararse. Si estás atascado y no puedes averiguar cómo repararlo a partir de los mensajes de la consola en el inicio / instalación de la mazmorra, lo mejor que puedes hacer es una instalación limpia de EliteMobs.

Haz una copia de seguridad de tu carpeta `~/plugins/EliteMobs/data` para conservar los datos del jugador, luego borra la carpeta `~/plugins/EliteMobs/`. Inicia tu servidor, apágalo, restaura los contenidos de tu carpeta de datos respaldada **mientras el servidor está desconectado** y luego vuelve a iniciarlo. Ahora puedes continuar instalando contenido de EliteMobs.

</details>