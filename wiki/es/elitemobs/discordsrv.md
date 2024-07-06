EliteMobs utiliza DiscordSRV para habilitar la transmisión de mensajes de prioridad de nivel 3. Puedes leer sobre el sistema de prioridad de anuncios [aquí]($language$/elitemobs/announcement_priority_system.md).

En esencia, esto significa que algunos jefes personalizados muy especiales pueden enviar mensajes en Discord de una manera que se ve así:

![ejemplo de mensaje de Discord](https://i.imgur.com/sIndft0.png)

La intención es crear una sala de anuncios dedicada de EliteMobs que los jugadores puedan consultar para ver si hay jefes mundiales interesantes actualmente vivos que puedan matar y presumir de haberlo hecho en la tabla de clasificación de asesinatos.

# Configurándolo todo

## Configuración de DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) es un complemento diferente no desarrollado por mí. [Puedes encontrar su extensa guía de configuración aquí](https://github.com/discordsrv/discordsrv/wiki/Installation). Si tienes dificultades para configurarlo, [su sala de soporte está aquí](https://discord.discordsrv.com/). No puedo brindar soporte para este complemento, así que consulta con ellos para esta parte de la instalación.

## Configuración de la configuración de DiscordSRV de EliteMobs

Una vez que hayas configurado correctamente DiscordSRV (*y tienes que probar si realmente funciona antes de pasar a este paso*), **la configuración de EliteMobs solo tiene 1 paso**.

Ve al archivo de configuración `DiscordSRV.yml` en la carpeta de configuración de EliteMobs y encontrarás una opción de configuración llamada `announcementRoomName`.

Hay tres valores que puedes usar para este mensaje. Recomiendo el #1.

1. [Recomendado] El nombre de la sala como lo configuraste en el archivo de configuración de DiscordSRV. No importa cómo llamaste a la sala, solo que uses el nombre correcto. Aquí hay un ejemplo de la sala que configuré para que esté dedicada a eventos de EliteMobs:
   ![ejemplo de uso de nombre](https://i.imgur.com/a2kMWXv.png)
   En mi caso, la opción debería decir `announcementRoomName: EMEvents`.

2. El ID de la sala como lo configuraste en el archivo de configuración de DiscordSRV. Aquí hay un ejemplo de la sala. *Ten en cuenta que cada sala es única. Solo estoy mostrando imágenes como ejemplo, no intentes copiar los números de identificación. No funcionará. Tu configuración debe tener un conjunto único de números según la identificación de tu sala de Discord.*
   ![ejemplo de uso de id](https://i.imgur.com/CGElkdh.png)
3. [Malo] El nombre de tu sala como aparece en Discord. No se garantiza que esto funcione correctamente debido a una serie de factores. Ten en cuenta que tu sala de Discord debe estar configurada en los archivos de configuración de DiscordSRV; el hecho de que puedas poner el nombre de la sala en este archivo de configuración no significa que puedas omitir configurarlo en DiscordSRV.

## Pruebas
Puedes usar el comando `/em discord [mensaje]` para ver si tu configuración está funcionando. Si aparece tu mensaje, ¡has terminado!

