Aquí tienes la traducción al español, conservando el formato markdown:

EliteMobs utiliza DiscordSRV para permitir la difusión de mensajes de prioridad de nivel 3. Puedes leer sobre el Sistema de Prioridad de Anuncios [aquí]($language$/elitemobs/announcement_priority_system.md).

En esencia, esto significa que algunos Jefes Personalizados muy especiales pueden enviar mensajes en Discord de una manera que se ve así:

![ejemplo de mensaje de discord](https://i.imgur.com/sIndft0.png)

La intención es crear una sala de anuncios dedicada de EliteMobs que los jugadores puedan consultar para ver si hay algún Jefe Mundial interesante actualmente vivo que puedan ir a matar y presumir de ello en la tabla de clasificación de muertes.

# Configuración

## Configuración de DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) es un plugin diferente no desarrollado por mí. [Puedes encontrar su extensa guía de configuración aquí](https://github.com/discordsrv/discordsrv/wiki/Installation). Si tienes dificultades para configurarlo, [su sala de soporte está aquí](https://discord.discordsrv.com/). No puedo proporcionar soporte para este plugin, así que por favor, remítete a ellos para esta parte de la instalación.

## Configuración de DiscordSRV en EliteMobs

Una vez que hayas configurado correctamente DiscordSRV (*y debes probar para ver si realmente funciona antes de pasar a este paso*), **la configuración de EliteMobs solo tiene 1 paso**.

Ve al archivo de configuración `DiscordSRV.yml` en la carpeta de configuración de EliteMobs y encontrarás una opción de configuración llamada `announcementRoomName`.

Hay tres valores que puedes usar para este mensaje. Recomiendo el #1.

1.  [Recomendado] El nombre de la sala tal como la configuraste en el archivo de configuración de DiscordSRV. No importa cómo hayas llamado a la sala, solo que uses el nombre correcto. Aquí tienes un ejemplo de la sala que configuré para dedicarla a los eventos de EliteMobs:
    ![ejemplo usando el nombre](https://i.imgur.com/a2kMWXv.png)
    En mi caso, la opción debería decir `announcementRoomName: EMEvents`.

2.  El ID de la sala tal como la configuraste en el archivo de configuración de DiscordSRV. Aquí tienes un ejemplo de la sala. *Ten en cuenta que cada sala es única. Solo estoy mostrando imágenes como ejemplo, no intentes copiar los números de ID. No funcionará. Tu configuración debería tener un conjunto único de números basado en el ID de tu sala de Discord.*
    ![ejemplo usando el ID](https://i.imgur.com/CGElkdh.png)
3.  [Malo] El nombre de tu sala tal como aparece en Discord. No se garantiza que funcione correctamente debido a una serie de factores. Ten en cuenta que tu sala de Discord debe estar configurada en los archivos de configuración de DiscordSRV; el hecho de que puedas poner el nombre de la sala en este archivo de configuración no significa que puedas omitir su configuración en DiscordSRV.

## Prueba

Puedes usar el comando `/em discord [mensaje]` para ver si tu configuración está funcionando. Si tu mensaje aparece, ¡has terminado!