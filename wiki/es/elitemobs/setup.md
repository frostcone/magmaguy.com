# Video de configuración

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***


*Esta guía asume que estás utilizando EliteMobs ***7.2.37*** o posterior.*

# Primer arranque

Reinicia el servidor una vez.

<details>

<summary><b>¿Por qué?</b></summary>

EliteMobs aumenta la salud máxima de tu archivo de configuración spigot.yml la primera vez que se inicia el servidor. Esto es para que las turbas de élite puedan tener más de 2000 de salud. No altera la salud de ninguna otra mafia, por lo que no cambia las mafias de vainilla o de complementos.

Este cambio requiere un reinicio del servidor para que realmente funcione.

</details>

# Permisos

A partir de EliteMobs 7.2.23, todos los permisos recomendados ya están configurados de forma predeterminada. Puedes ver más sobre los permisos [aquí]($language$/elitemobs/permissions_and_commands.md).

# Mazmorras y mundo central del Gremio de aventureros

A partir de EliteMobs 7.2.35, ahora hay una carpeta `imports` en el directorio de EliteMobs. El proceso de instalación de las mazmorras y el mundo del Gremio de aventureros es el mismo:

1) Descarga los archivos. Puedes hacer clic en el cristal rojo en `/em setup` para obtener enlaces a las descargas.

2) Carga/mueve los archivos a la carpeta `/plugins/EliteMobs/imports` de tu servidor. Asegúrate de colocar los archivos **COMPRIMIDOS** dentro de la carpeta `imports` sin modificarlos de ninguna manera, EliteMobs extraerá automáticamente los archivos y los moverá a las ubicaciones correctas.

<div align="center">

<details>

<summary>Ejemplo visual</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Tu navegador no admite la etiqueta de video.
</video>

</details>

</div>

3) Reinicia o haz `/em reload`. Después de unos segundos, las mazmorras deberían instalarse automáticamente; cuando hagas `/em setup`, los indicadores de las mazmorras que descargaste deberían ser verdes e indicar que las mazmorras están correctamente instaladas y actualizadas. Si alguna mazmorra muestra un panel de vidrio amarillo, significa que hay una versión más reciente de la mazmorra y que debe actualizarse.

<div align="center">

<details>

<summary>Ejemplo visual</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Tu navegador no admite la etiqueta de video.
</video>

</details>

</div>

4) ***Si tus archivos de mazmorra tienen modelos personalizados***, puedes seguir opcionalmente los pasos de instalación que se enumeran [aquí]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) para instalarlos.

¡Eso es todo! **¡Puedes encontrar teletransportes a las mazmorras instaladas y al gremio de aventureros en /em, en la página Teletransportes!**

[¡Más información sobre el Gremio de aventureros aquí!]($language$/elitemobs/adventurers_guild_world.md)
<br>[¡Descarga el mundo central del Gremio de aventureros aquí!](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# Complementos recomendados

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): Se utiliza para banderas. [Lista de banderas de EliteMobs]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): Se utiliza para la bandera antivuelo, útil de tener.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): Se utiliza para mostrar información de EliteMobs en otros complementos, como para el chat. [Más información]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): Se utiliza para disfrazar a los jefes personalizados como cualquier otra cosa. Los disfraces se utilizan mucho en nuestras mazmorras oficiales, por lo que es muy recomendable que instales este complemento. [Más información]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): Se utiliza para vincular los anuncios de EliteMobs al chat de Discord. [Más información]($language$/elitemobs/discordsrv.md).

# Actualización del contenido de la mazmorra

Para actualizar el contenido de la mazmorra, simplemente repite los pasos de instalación anteriores. **No tienes que eliminar ningún archivo**, EliteMobs se encarga de eso cuando importas la actualización.

# Preguntas frecuentes (FAQ)

## La minidungeon es solo terreno plano

<details><summary>Respuesta</summary>

El 95% de las veces, esto significa que no seguiste las instrucciones de configuración. Si descomprimiste algún archivo o cargaste algún mundo usando otros complementos, reinstala el contenido siguiendo los pasos enumerados anteriormente. No necesitas ningún otro complemento para cargar los mundos correctamente.

</details>

## El chat de NPC se ve raro/los agujeros de gusano no funcionan/otro comportamiento extraño después de la instalación.

<details>

<summary>Respuesta</summary>

Ejecuta el comando `/em reload` después de configurar una mazmorra para asegurarte de que todos los valores se inicialicen por completo. Un reinicio es aún mejor, pero no debería ser necesario.

</details>

## Los jefes no están apareciendo

### ¡El jefe estaba apareciendo antes!

<details>

<summary>Respuesta</summary>

Los jefes regionales tienen un tiempo de reaparición. Puedes comprobar cuándo está programado que reaparezca el jefe yendo a su archivo de configuración y copiando los números después de `:` en la sección de ubicaciones de generación.

Ejemplo:

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

En este caso, los números que estás buscando son `1643259941451`. Puedes usar [este](https://www.unixtimestamp.com/index.php) sitio web para convertir eso a una fecha específica. Puedes eliminar los números para forzar al jefe a reaparecer, asegúrate de hacer `/em reload` después de eliminarlos.

</details>

### ¡El jefe nunca apareció!

<details>

<summary>Respuesta</summary>

Comprueba lo siguiente:

- ¿Tú o alguien más mató al jefe, o escapó a través de la función de tiempo de espera? El jefe puede estar reapareciendo. Comprueba los tiempos de reutilización, la información al respecto está en la sección anterior.
- Comprueba si hay errores en la consola, especialmente después de instalar la mazmorra o después de un `/em reload`. Los errores deberían decirte qué está mal.
- Comprueba si tu región está protegida por algún otro complemento que impida la generación de turbas.
- Comprueba la dificultad de tu mundo, las turbas no pueden aparecer en dificultad pacífica.
- Comprueba las banderas de WorldGuard, comprueba si la generación de turbas está configurada como permitir.
- Comprueba si instalaste el contenido de la mazmorra sobre el área de generación, eso está protegido de forma predeterminada.
- Muy, muy raramente, el problema puede tener que ver con el día que tu servidor cree que es. Asegúrate de que la fecha de la máquina de tu servidor sea correcta; de lo contrario, la mecánica de reaparición podría causar algunos problemas.

</details>


## Algo está mal y no puedo arreglarlo

<details>

<summary>Respuesta</summary>

Esto suele suceder después de intentar y no modificar correctamente los archivos de una manera que EliteMobs no pudo autorreparar. Si estás atascado y no puedes averiguar cómo repararlo a partir de los mensajes de la consola al iniciar/instalar la mazmorra, lo mejor que puedes hacer es una instalación limpia de EliteMobs.

Haz una copia de seguridad de tu carpeta `~/plugins/EliteMobs/data` para guardar los datos del jugador, luego elimina la carpeta `~/plugins/EliteMobs/`. Inicia tu servidor, apágalo, restaura el contenido de tu carpeta de datos de respaldo **mientras el servidor está fuera de línea** y luego vuelve a iniciarlo. Ahora puedes reanudar la instalación del contenido de EliteMobs.

</details>




