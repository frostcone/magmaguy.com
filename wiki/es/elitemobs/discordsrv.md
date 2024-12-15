EliteMobs utiliza DiscordSRV para habilitar la transmisión de mensajes de prioridad de nivel 3. Puede leer sobre el Sistema de prioridad de anuncios [aquí]($language$/elitemobs/announcement_priority_system.md).

En esencia, esto significa que algunos jefes personalizados muy especiales pueden enviar mensajes en Discord de una manera que se ve así:

![discord message example](https://i.imgur.com/sIndft0.png)

La intención es crear una sala de anuncios dedicada de EliteMobs que los jugadores puedan echar un vistazo para ver si hay algún jefe mundial interesante actualmente activo al que puedan ir a matar y mostrar que lo hicieron en la tabla de clasificación de muertes.

# Configuración

## Configuración de DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) es un plugin diferente no desarrollado por mí. [Puede encontrar su extensa guía de configuración aquí](https://github.com/discordsrv/discordsrv/wiki/Installation). Si tiene dificultades para configurarlo, [su sala de soporte está aquí](https://discord.discordsrv.com/). No puedo brindar soporte para este plugin, así que consulte con ellos para esta parte de la instalación.

## Configuración de la configuración de EliteMobs DiscordSRV

Una vez que haya configurado correctamente DiscordSRV (*y debe realizar una prueba para ver si realmente funciona antes de pasar a este paso*), **la configuración de EliteMobs solo tiene 1 paso**.

Vaya al archivo de configuración `DiscordSRV.yml` en la carpeta de configuración de EliteMobs y encontrará una opción de configuración llamada `announcementRoomName`.

Hay tres valores que puede usar para este mensaje. Recomiendo el n.º 1.

1. [Recomendado] El nombre de la sala tal como lo configuró en el archivo de configuración de DiscordSRV. No importa cómo haya llamado a la sala, solo que use el nombre correcto. Aquí hay un ejemplo de la sala que configuré para que se dedicara a los eventos de EliteMobs:
   ![using name example](https://i.imgur.com/a2kMWXv.png)
   En mi caso, la opción debería decir `announcementRoomName: EMEvents`.

2. El ID de la sala tal como lo configuró en el archivo de configuración de DiscordSRV. Aquí hay un ejemplo de la sala. *Tenga en cuenta que cada sala es única. Solo estoy mostrando imágenes como ejemplo, no intente copiar los números de ID. No funcionará. Su configuración debe tener un conjunto único de números basado en la identificación de su sala de discord.*
   ![using id example](https://i.imgur.com/CGElkdh.png)
3. [Malo] El nombre de su sala tal como aparece en Discord. No se garantiza que esto funcione correctamente debido a una serie de factores. Tenga en cuenta que su sala de Discord debe estar configurada en los archivos de configuración de DiscordSRV; el hecho de que pueda poner el nombre de la sala en este archivo de configuración no significa que pueda omitir la configuración en DiscordSRV.

## Pruebas
Puede usar el comando `/em discord [mensaje]` para ver si su configuración está funcionando. Si su mensaje aparece, ¡listo!
