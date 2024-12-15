# Video de configuración

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***

*Esta guía asume que está utilizando EliteMobs ***7.2.37*** o posterior.*

# Primer arranque

Reinicie el servidor una vez.

<details>

<summary><b>¿Por qué?</b></summary>

EliteMobs aumenta la salud máxima de su archivo de configuración spigot.yml la primera vez que se inicia el servidor. Esto es para que los mobs de élite puedan tener más de 2000 de salud. No altera la salud de ningún otro mob, por lo que no cambia los mobs de vainilla o del plugin.

Este cambio requiere un reinicio del servidor para que funcione realmente.

</details>

# Permisos

A partir de EliteMobs 7.2.23, todos los permisos recomendados ya están configurados de forma predeterminada. Puede ver más sobre los permisos [aquí]($language$/elitemobs/permissions_and_commands.md).

# Mazmorras y mundo central del Gremio de Aventureros

A partir de EliteMobs 7.2.35, ahora hay una carpeta `imports` en el directorio de EliteMobs. El proceso de instalación de las Mazmorras, el Mundo del Gremio de Aventureros es el mismo:

1) Descargue los archivos. Puede hacer clic en el cristal rojo en `/em setup` para obtener enlaces a las descargas.

2) Cargue / mueva los archivos a la carpeta `/plugins/EliteMobs/imports` de su servidor. Asegúrese de colocar los archivos **ZIPPEADOS** dentro de la carpeta `imports` sin modificarlos de ninguna manera, EliteMobs extraerá automáticamente los archivos y los moverá a las ubicaciones correctas.

<div align="center">

<details>

<summary>Ejemplo visual</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Su navegador no admite la etiqueta de video.
</video>

</details>

</div>

3) Reinicie o haga `/em reload`. Después de unos segundos, las mazmorras deberían instalarse automáticamente, cuando haga `/em setup` los indicadores de las mazmorras que descargó deberían estar verdes e indicar que las mazmorras están instaladas correctamente y actualizadas. Si alguna mazmorra muestra un panel de vidrio amarillo, significa que hay una versión más nueva de la mazmorra y debe actualizarse.

<div align="center">

<details>

<summary>Ejemplo visual</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Su navegador no admite la etiqueta de video.
</video>

</details>

</div>

4) ***Si sus archivos de mazmorra tienen modelos personalizados***, opcionalmente puede seguir los pasos de instalación que se enumeran [aquí]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) para instalarlos.

¡Eso es todo! **¡Puede encontrar los teletransportadores a las mazmorras instaladas y al gremio de aventureros en /em, en la página de Teletransportaciones!**

[¡Más información sobre el Gremio de Aventureros aquí!]($language$/elitemobs/adventurers_guild_world.md)
<br>[¡Descargue el mundo central del Gremio de Aventureros aquí!](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# Plugins recomendados

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): Se utiliza para indicadores. [Lista de indicadores de EliteMobs]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): Se utiliza para el indicador anti-vuelo, es útil tenerlo.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): Se utiliza para mostrar información de EliteMobs en otros plugins, como para el chat. [Más información]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): Se utiliza para disfrazar a los jefes personalizados como cualquier otra cosa. Los disfraces se utilizan mucho en nuestras mazmorras oficiales, por lo que es muy recomendable que instale este plugin. [Más información]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): Se utiliza para vincular los anuncios de EliteMobs al chat de Discord. [Más información]($language$/elitemobs/discordsrv.md)

# Actualización del contenido de las mazmorras

Para actualizar el contenido de las mazmorras, simplemente repita los pasos de instalación anteriores. **No ***tiene*** que eliminar ningún archivo**, EliteMobs se encarga de eso cuando importa la actualización.

# Preguntas frecuentes (FAQ)

## La minimazmorra es solo un terreno plano

<details><summary>Respuesta</summary>

El 95 % de las veces, esto significa que no siguió las instrucciones de configuración. Si descomprimió algún archivo o cargó algún mundo usando otros plugins, vuelva a instalar el contenido siguiendo los pasos enumerados anteriormente. No necesita ningún otro plugin para cargar los mundos correctamente.

</details>

## El chat de NPC se ve raro / los agujeros de gusano no funcionan / otro comportamiento extraño después de la instalación

<details>

<summary>Respuesta</summary>

Ejecute el comando `/em reload` después de configurar una mazmorra para asegurarse de que todos los valores se inicialicen por completo. Un reinicio es incluso mejor, pero no debería ser necesario.

</details>

## Los jefes no aparecen

### ¡El jefe estaba apareciendo antes!

<details>

<summary>Respuesta</summary>

Los jefes regionales tienen un tiempo de reaparición. Puede verificar cuándo está programado que el jefe vuelva a aparecer yendo a su archivo de configuración y copiando los números después de los `:` en la sección de ubicaciones de aparición.

Ejemplo:

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

En este caso, los números que está buscando son `1643259941451`. Puede usar [este](https://www.unixtimestamp.com/index.php) sitio web para convertirlo a una fecha específica. Puede eliminar los números para forzar la reaparición del jefe, asegúrese de hacer `/em reload` después de eliminarlos.

</details>

### ¡El jefe nunca apareció!

<details>

<summary>Respuesta</summary>

Compruebe las siguientes cosas:

- ¿Usted u otra persona mataron al jefe o escapó a través de la función de tiempo de espera? El jefe podría estar reapareciendo. Verifique los tiempos de espera, la información al respecto está en la sección anterior.
- Vea si hay algún error en la consola, especialmente después de instalar la mazmorra o después de un `/em reload`. Los errores deberían decirle qué está mal.
- Verifique si su región está protegida por algún otro plugin que impida la aparición de mobs.
- Verifique la dificultad de su mundo, los mobs no pueden aparecer en dificultad pacífica
- Verifique los indicadores de WorldGuard, vea si la aparición de mobs está configurada para permitir.
- Verifique si instaló el contenido de la mazmorra sobre el área de aparición, que está protegida de forma predeterminada
- Muy, muy raramente, el problema podría tener que ver con el día en que su servidor cree que es. Asegúrese de que la fecha de la máquina de su servidor sea correcta, de lo contrario, la mecánica de reaparición podría causar algunos problemas.

</details>

## Algo está mal y simplemente no puedo solucionarlo

<details>

<summary>Respuesta</summary>

Esto suele suceder después de intentar y no poder modificar correctamente los archivos de una manera que EliteMobs no pudo autorreparar. Si está atascado y no puede averiguar cómo repararlo a partir de los mensajes de la consola al inicio / instalación de la mazmorra, lo mejor que puede hacer es una instalación limpia de EliteMobs.

Realice una copia de seguridad de su carpeta `~/plugins/EliteMobs/data` para conservar los datos del jugador, luego elimine la carpeta `~/plugins/EliteMobs/`. Inicie su servidor, apáguelo, restaure el contenido de su carpeta de datos de respaldo **mientras el servidor está desconectado** y luego vuelva a iniciarlo. Ahora puede reanudar la instalación del contenido de EliteMobs.

</details>
