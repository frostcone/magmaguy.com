EliteMobs utiliza DiscordSRV para habilitar la transmisión de mensajes de prioridad nivel 3. Puedes leer sobre el Sistema de Prioridad de Anuncios [aquí]($language$/elitemobs/announcement_priority_system.md).

En esencia, esto significa que algunos Jefes Personalizados muy especiales son capaces de enviar mensajes en Discord de una manera que se ve así:

![ejemplo de mensaje de discord](https://i.imgur.com/sIndft0.png)

La intención es crear una sala de anuncios dedicada a EliteMobs que los jugadores pueden consultar para ver si hay algún Jefe Mundial interesante actualmente vivo que puedan ir a matar y mostrar que lo hicieron en la tabla de liderazgo de asesinatos.

# Configurando todo

## Configurando DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) es un plugin diferente no desarrollado por mí. [Puedes encontrar su extensa guía de configuración aquí](https://github.com/discordsrv/discordsrv/wiki/Installation). Si tienes dificultades para configurarlo, [su sala de soporte está aquí](https://discord.discordsrv.com/). No puedo proporcionar soporte para este plugin, así que por favor, consulta con ellos para esta parte de la instalación.

## Configurando el EliteMobs DiscordSRV config

Una vez que hayas configurado correctamente DiscordSRV (*y tienes que probar para ver si realmente está funcionando antes de pasar a este paso*), **la configuración de EliteMobs sólo tiene 1 paso**.

Ve al archivo de configuración `DiscordSRV.yml` en la carpeta de configuración de EliteMobs y encontrarás una opción de configuración llamada `announcementRoomName`.

Hay tres valores que puedes usar para este mensaje. Recomiendo el #1.

1. [Recomendado] El nombre de la sala tal como lo configuraste en el archivo de configuración de DiscordSRV. No importa cómo hayas llamado a la sala, sólo que utilices el nombre correcto. Aquí está un ejemplo de la sala que configuré para ser dedicada a los eventos de EliteMobs:
   ![ejemplo usando el nombre](https://i.imgur.com/a2kMWXv.png)
   En mi caso, la opción debería leer `announcementRoomName: EMEvents`.

2. La ID de la sala tal como la configuraste en el archivo de configuración de DiscordSRV. Aquí hay un ejemplo de la sala. *Por favor ten en cuenta que cada sala es única. Solo estoy mostrando imágenes como ejemplo, no trates de copiar los números de ID. No funcionará. Tu configuración debe tener un conjunto único de números basados ​​en la ID de tu sala de discord.*
   ![ejemplo usando id](https://i.imgur.com/CGElkdh.png)
3. [Mal] El nombre de tu sala tal como aparece en discord. No se garantiza que esto funcione correctamente debido a una serie de factores. Ten en cuenta que tu sala de discord debe configurarse en los archivos de configuración de DiscordSRV: solo porque puedas poner el nombre de la sala en este archivo de configuración no significa que puedas saltarte configurarlo en DiscordSRV.

## Pruebas
Puedes usar el comando `/em discord [mensaje]` para ver si tu configuración está funcionando. ¡Si tu mensaje aparece, has terminado!