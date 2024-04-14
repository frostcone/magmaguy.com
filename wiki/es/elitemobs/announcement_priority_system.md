
El Sistema de Prioridad de Anuncios gestiona cuán importantes son los mensajes de EliteMobs. Actualmente solo se utilizan para gestionar los mensajes enviados por los spawns de Custom Boss.

# Hoja de trucos en formato corto:

*   Nivel 0: Silencioso / Local para los jugadores que lucharon contra el jefe
*   Nivel 1: Mensajes de chat (si tiene mensajes de spawn)
*   Nivel 2: Rastreo (si tiene un mensaje de ubicación)
*   Nivel 3: [Anuncios de Discord (si tiene mensajes de spawn y DiscordSRV está instalado y configurado correctamente)]($language$/elitemobs/discordsrv.md)

# Cómo funciona:

Nota: Debes configurar tu Custom Boss con este sistema de prioridad si quieres usar un valor que no sea el predeterminado. Haz clic [aquí]($language$/elitemobs/creating_bosses.md&section=announcementpriority) para aprender cómo hacerlo.

## Nivel 0

Fuerza a que el Custom Boss sea silencioso. Esto significa que no se enviarán mensajes sobre él, incluso si está configurado para tenerlos, con una excepción: Enviarán mensajes de muerte directamente a los jugadores que dañaron al jefe.

## Nivel 1

**Este es el valor predeterminado.** El Custom Boss podrá enviar un mensaje en el chat si están configurados para hacerlo. Enviarán mensajes de spawn, muerte y huida si están configurados para tenerlos.

## Nivel 2

El Custom Boss tendrá el mismo comportamiento que en el Nivel 1, y también podrá ser rastreado por los jugadores al nacer si tiene un mensaje de ubicación asociado a él. Los jugadores pueden hacer clic en el chat para rastrearlo cuando aparece, o pueden usar el menú /em para rastrearlo.

## Nivel 3

El Custom Boss tendrá el mismo comportamiento que en el Nivel 2, y también enviará mensajes a la sala de Discord configurada para enviar notificaciones sobre EliteMobs. [La página sobre cómo configurar esta función se puede encontrar aquí.]($language$/elitemobs/discordsrv.md) Los mensajes en discord serán los mismos que los mensajes de chat: spawn / muerte / escape.

