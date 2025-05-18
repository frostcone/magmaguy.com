```markdown
# Video de configuración

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***


*Esta guía asume que estás usando EliteMobs ***7.2.37*** o posterior.*

# Primer inicio

Reinicia el servidor una vez.

<details>

<summary><b>¿Por qué?</b></summary>

EliteMobs aumenta la salud máxima de tu archivo de configuración spigot.yml la primera vez que se inicia el servidor. Esto es para que los mobs de élite puedan tener más de 2000 de salud. No altera la salud de ningún otro mob, por lo que no cambia los mobs vanilla ni los de plugins.

Este cambio requiere un reinicio del servidor para que funcione correctamente.

</details>

# Permisos

A partir de EliteMobs 7.2.23, todos los permisos recomendados ya están configurados por defecto. Puedes ver más sobre permisos [aquí]($language$/elitemobs/permissions_and_commands.md).

# Mazmorras y Mundo del Gremio de Aventureros

A partir de EliteMobs 7.2.35, ahora hay una carpeta `imports` en el directorio de EliteMobs. El proceso de instalación para las Mazmorras y el Mundo del Gremio de Aventureros es el mismo:

1) Descarga los archivos. Puedes hacer clic en el cristal rojo en `/em setup` para obtener enlaces a las descargas.

2) Sube / mueve los archivos a la carpeta `/plugins/EliteMobs/imports` de tu servidor. Asegúrate de poner los archivos **COMPRIMIDOS** dentro de la carpeta `imports` sin modificarlos de ninguna manera, EliteMobs extraerá automáticamente los archivos y los moverá a las ubicaciones correctas.

<div align="center">

<details>

<summary>Ejemplo Visual</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

3) Reinicia o ejecuta `/em reload`. Después de unos segundos, las mazmorras deberían auto-instalarse. Cuando ejecutes `/em setup`, los indicadores de las mazmorras que descargaste deberían estar en verde, indicando que las mazmorras están correctamente instaladas y actualizadas. Si alguna mazmorra muestra un panel de cristal amarillo, significa que hay una versión más reciente de la mazmorra y necesita ser actualizada.

<div align="center">

<details>

<summary>Ejemplo Visual</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

4) ***Si tus archivos de mazmorra tienen Modelos Personalizados***, puedes seguir opcionalmente los pasos de instalación listados [aquí]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) para instalarlos.

¡Eso es todo! **¡Puedes encontrar teletransportes a las mazmorras instaladas y al gremio de aventureros en /em, en la página de Teletransportes!**

[¡Más información sobre el Gremio de Aventureros aquí!]($language$/elitemobs/adventurers_guild_world.md)
<br>[¡Descarga el Mundo del Gremio de Aventureros aquí!](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# Plugins recomendados

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): Usado para flags. [Lista de flags de EliteMobs]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): Usado para la flag anti-vuelo, útil de tener.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): Usado para mostrar información de EliteMobs en otros plugins, como en el chat. [Más información]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): Usado para disfrazar Jefes Personalizados como cualquier otra cosa. Los disfraces se usan mucho en nuestras mazmorras oficiales, por lo que es muy recomendable que instales este plugin. [Más información]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): Usado para vincular anuncios de EliteMobs al chat de Discord. [Más información]($language$/elitemobs/discordsrv.md)

# Actualizando contenido de mazmorras

Para actualizar el contenido de las mazmorras, simplemente repite los pasos de instalación anteriores. **No tienes que eliminar ningún archivo**, EliteMobs se encarga de eso cuando importas la actualización.

# Preguntas Frecuentes (FAQ)

## La minidungeon es solo terreno plano

<details><summary>Respuesta</summary>

El 95% de las veces esto significa que no seguiste las instrucciones de configuración. Si descomprimiste algún archivo o cargaste algún mundo usando otros plugins, reinstala el contenido siguiendo los pasos listados anteriormente. No necesitas ningún otro plugin para cargar los mundos correctamente.

</details>

## El chat de los NPC se ve raro / los agujeros de gusano no funcionan / otro comportamiento extraño después de instalar

<details>

<summary>Respuesta</summary>

Ejecuta el comando `/em reload` después de configurar una mazmorra para asegurarte de que todos los valores se inicialicen completamente. Un reinicio es incluso mejor, pero no debería ser necesario.

</details>

## Los jefes no aparecen

### ¡El jefe estaba apareciendo antes!

<details>

<summary>Respuesta</summary>

Los jefes regionales tienen un tiempo de reaparición. Puedes verificar cuándo está programado que reaparezca el jefe yendo a su archivo de configuración y copiando los números después de los `:` en la sección de ubicaciones de aparición.

Ejemplo:

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

En este caso, los números que buscas son `1643259941451`. Puedes usar [este](https://www.unixtimestamp.com/index.php) sitio web para convertir eso a una fecha específica. Puedes eliminar los números para forzar la reaparición del jefe, asegúrate de ejecutar `/em reload` después de eliminarlos.

</details>

### ¡El jefe nunca apareció!

<details>

<summary>Respuesta</summary>

Verifica lo siguiente:

- ¿Tú o alguien más mató al jefe, o escapó a través de la función de tiempo de espera? El jefe podría estar reapareciendo. Verifica los tiempos de espera, la información al respecto está en la sección anterior.
- Verifica si hay errores en la consola, especialmente después de instalar la mazmorra o después de un `/em reload`. Los errores deberían indicarte qué está mal.
- Verifica si tu región está protegida por algún otro plugin que impida la aparición de mobs.
- Verifica la dificultad de tu mundo, los mobs no pueden aparecer en dificultad pacífica.
- Verifica las flags de WorldGuard, mira si la aparición de mobs está configurada para permitir.
- Verifica si instalaste el contenido de la mazmorra sobre el área de aparición, que está protegida por defecto.
- Muy, muy raramente, el problema podría tener que ver con el día que tu servidor cree que es. Asegúrate de que la fecha de la máquina de tu servidor sea correcta, de lo contrario, la mecánica de reaparición podría causar algunos problemas.

</details>


## Algo está mal y simplemente no puedo arreglarlo

<details>

<summary>Respuesta</summary>

Esto suele ocurrir después de intentar y fallar en modificar archivos correctamente de una manera que EliteMobs no pudo auto-reparar. Si estás atascado y no puedes averiguar cómo repararlo a partir de los mensajes de la consola al iniciar / instalar la mazmorra, lo mejor que puedes hacer es una instalación limpia de EliteMobs.

Haz una copia de seguridad de tu carpeta `~/plugins/EliteMobs/data` para conservar los datos de los jugadores, luego elimina la carpeta `~/plugins/EliteMobs/`. Inicia tu servidor, apágalo, restaura el contenido de tu carpeta de datos de respaldo **mientras el servidor está offline** y luego vuelve a iniciarlo. Ahora puedes reanudar la instalación del contenido de EliteMobs.

</details>
```