# Video de configuración

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***

*Esta guía asume que estás usando EliteMobs ***7.2.37*** o posterior.*

# Primer arranque

Reinicia el servidor una vez.

<details>

<summary><b>¿Por qué?</b></summary>

EliteMobs aumenta la salud máxima de tu archivo de configuración spigot.yml la primera vez que se inicia el servidor.
Esto es para que los mobs de élite puedan tener más de 2000 de salud. No altera la salud de ningún otro mob, por lo que
no cambia los mobs vainilla o de plugins.

Este cambio requiere un reinicio del servidor para que funcione realmente.

</details>

# Permisos

A partir de EliteMobs 7.2.23, todos los permisos recomendados ya están configurados por defecto. Puedes ver más sobre
los permisos [aquí]($language$/elitemobs/permissions_and_commands.md).

# Mazmorras y Mundo de la Sede del Gremio de Aventureros

A partir de EliteMobs 7.2.35, ahora hay una carpeta `imports` en el directorio EliteMobs. El proceso de instalación de
las Mazmorras, el Mundo del Gremio de Aventureros es el mismo:

1) Descarga los archivos. Puedes hacer clic en el cristal rojo en `/em setup` para obtener enlaces a las descargas.

2) Sube/mueve los archivos a la carpeta `/plugins/EliteMobs/imports` de tu servidor. Asegúrate de poner los archivos *
   *COMPRIMIDOS** dentro de la carpeta `imports` sin modificarlos de ninguna manera, EliteMobs extraerá automáticamente
   los archivos y los moverá a las ubicaciones correctas.

<div align="center">

<details>

<summary>Ejemplo visual</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Tu navegador no soporta la etiqueta de video.
</video>

</details>

</div>

3) Reinicia o haz `/em reload`. Después de unos segundos, las mazmorras deberían autoinstalarse, cuando
   hagas `/em setup`, los indicadores de las mazmorras que descargaste deberían estar en verde e indicar que las
   mazmorras están correctamente instaladas y actualizadas. Si alguna mazmorra muestra un panel de vidrio amarillo, eso
   significa que hay una versión más nueva de la mazmorra y necesita ser actualizada.

<div align="center">

<details>

<summary>Ejemplo visual</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Tu navegador no soporta la etiqueta de video.
</video>

</details>

</div>

4) ***Si tus archivos de mazmorra tienen Modelos Personalizados***, puedes seguir opcionalmente los pasos de instalación
   que se enumeran [aquí]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) para
   instalarlos.

¡Eso es todo! **Puedes encontrar teletransportes a las mazmorras instaladas y al gremio de aventureros en /em, ¡en la
página de Teletransportes!**

[¡Más información sobre el Gremio de Aventureros aquí!]($language$/elitemobs/adventurers_guild_world.md)
<br>[¡Descarga el Mundo de la Sede del Gremio de Aventureros aquí!](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# Plugins recomendados

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): Se utiliza para los
  flags. [Lista de flags de EliteMobs]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): Se utiliza para el flag
  anti-vuelo, útil tenerlo.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): Se utiliza para mostrar información de EliteMobs en otros plugins, como para el chat. [Más información]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): Se utiliza para disfrazar a los Jefes
  Personalizados como cualquier otra cosa. Los disfraces se utilizan mucho en nuestras mazmorras oficiales, por lo que
  es muy recomendable que instales este plugin. [Más información]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): Se utiliza para vincular los anuncios de EliteMobs al chat de Discord. [Más información]($language$/elitemobs/discordsrv.md)

# Actualización del contenido de la mazmorra

Para actualizar el contenido de la mazmorra, simplemente repite los pasos de instalación anteriores. **No tienes que
borrar ningún archivo**, EliteMobs se encarga de eso cuando importas la actualización.

# Preguntas frecuentes (FAQ)

## La minidungeon es solo un terreno plano

<details><summary>Respuesta</summary>

El 95% de las veces esto significa que no has seguido las instrucciones de configuración. Si descomprimiste algún
archivo o cargaste algún mundo utilizando otros plugins, reinstala el contenido siguiendo los pasos indicados
anteriormente. No necesitas ningún otro plugin para cargar los mundos correctamente.

</details>

## El chat del NPC se ve raro / los agujeros de gusano no funcionan / otro comportamiento raro después de la instalación

<details>

<summary>Respuesta</summary>

Ejecuta el comando `/em reload` después de configurar una mazmorra para asegurarte de que todos los valores se
inicialicen completamente. Un reinicio es incluso mejor, pero no debería ser necesario.

</details>

## Los jefes no aparecen

### ¡El jefe aparecía antes!

<details>

<summary>Respuesta</summary>

Los jefes regionales tienen un tiempo de reaparición. Puedes comprobar cuándo está previsto que reaparezca el jefe yendo
a su archivo de configuración y copiando los números después de los `:` en la sección de ubicaciones de aparición.

Ejemplo:

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

En este caso, los números que buscas son `1643259941451`. Puedes
utilizar [esta](https://www.unixtimestamp.com/index.php) página web para convertirlo en una fecha específica. Puedes
eliminar los números para forzar al jefe a reaparecer, asegúrate de hacer `/em reload` después de eliminarlos.

</details>

### ¡El jefe nunca apareció!

<details>

<summary>Respuesta</summary>

Comprueba las siguientes cosas:

- ¿Mataste tú o alguien más al jefe, o escapó a través de la función de tiempo de espera? Es posible que el jefe esté
  reapareciendo. Comprueba los tiempos de reutilización, la información sobre eso está en la sección anterior.
- Comprueba si hay algún error en la consola, especialmente después de instalar la mazmorra o después de
  un `/em reload`. Los errores deberían decirte qué está mal.
- Comprueba si tu región está protegida por algún otro plugin que impida la aparición de mobs.
- Comprueba la dificultad de tu mundo, los mobs no pueden aparecer en dificultad pacífica
- Comprueba los flags de WorldGuard, mira si la aparición de mobs está establecida como permitida
- Comprueba si instalaste el contenido de la mazmorra sobre la zona de aparición, que está protegida por defecto
- Muy, muy raramente, el problema podría tener que ver con el día que tu servidor cree que es. Asegúrate de que la fecha
  de la máquina de tu servidor sea correcta, de lo contrario, el mecanismo de reaparición podría causar algunos
  problemas.

</details>

## Algo se ha estropeado y no puedo arreglarlo

<details>

<summary>Respuesta</summary>

Esto suele ocurrir después de intentar y fallar al modificar correctamente los archivos de forma que EliteMobs no
pudiera autorrepararse. Si estás atascado y no puedes averiguar cómo repararlo a partir de los mensajes de la consola al
iniciar / instalar la mazmorra, lo mejor es hacer una instalación limpia de EliteMobs.

Haz una copia de seguridad de tu carpeta `~/plugins/EliteMobs/data` para conservar los datos de los jugadores, luego
borra la carpeta `~/plugins/EliteMobs/`. Inicia tu servidor, apágalo, restaura el contenido de tu carpeta de datos de la
copia de seguridad **mientras el servidor está desconectado** y luego vuélvelo a iniciar. Ahora puedes reanudar la
instalación del contenido de EliteMobs.

</details>
