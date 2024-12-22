El Sistema de Prioridad de Anuncios gestiona la importancia de los mensajes de EliteMobs. Actualmente, estos solo se
usan para gestionar los mensajes enviados por las apariciones de Jefes Personalizados.

# Hoja de referencia rápida:

* Nivel 0: Silencioso / Local para los jugadores que lucharon contra el jefe
*   Nivel 1: Mensajes de chat (si tiene mensajes de aparición)
*   Nivel 2: Seguimiento (si tiene un mensaje de ubicación)
*   Nivel 3: [Anuncios de Discord (si tiene mensajes de aparición y DiscordSRV está instalado y configurado correctamente)]($language$/elitemobs/discordsrv.md)

# Cómo funciona:

Nota: Necesitas configurar tu Jefe Personalizado con este sistema de prioridad si quieres usar un valor no
predeterminado. Haz clic [aquí]($language$/elitemobs/creating_bosses.md&section=announcementpriority) para aprender cómo
hacerlo.

## Nivel 0

Fuerza al Jefe Personalizado a ser silencioso. Esto significa que no se enviarán mensajes sobre él, incluso si está
configurado para tenerlos, con una excepción: enviarán mensajes de muerte directamente a los jugadores que dañaron al
jefe.

## Nivel 1

**Este es el valor predeterminado.** El Jefe Personalizado podrá enviar un mensaje en el chat si está configurado para
hacerlo. Enviarán mensajes de aparición, muerte y escape si están configurados para tenerlos.

## Nivel 2

El Jefe Personalizado tendrá el mismo comportamiento que en el Nivel 1, y también podrá ser rastreado por los jugadores
al aparecer si tiene un mensaje de ubicación asociado. Los jugadores pueden hacer clic en el chat para rastrearlo cuando
aparece, o pueden usar el menú /em para rastrearlo.

## Nivel 3

El Jefe Personalizado tiene el mismo comportamiento que en el Nivel 2, y también enviará mensajes a la sala de Discord
configurada para enviar notificaciones sobre
EliteMobs. [La página sobre cómo configurar esta función se puede encontrar aquí.]($language$/elitemobs/discordsrv.md)
Los mensajes en Discord serán los mismos que los mensajes de chat: aparición/muerte/escape.
