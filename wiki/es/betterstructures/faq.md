# Cómo usar los comandos
- Ve a la página de comandos para obtener ayuda: [Página de comandos]($language$/betterstructures/commands.md)

# Comprobando dónde aparecen las estructuras
- Si eres administrador del servidor y no has desactivado las advertencias, se te notificará en el chat cuando aparezca una estructura.
- Haz clic en el mensaje de chat para teletransportarte a la estructura (no para la edición Bedrock).
- Activa/desactiva las advertencias con `/betterstructures warn`.

# Por qué las estructuras pueden no aparecer
- Por lo general, las estructuras no aparecen en áreas ya exploradas. Visita nuevas áreas para ver las estructuras.

<details> 
<summary>Más detalles</summary>

Las estructuras no aparecerán en áreas ya exploradas para evitar llenarlas demasiado y dañar las construcciones de los jugadores. BetterStructures sabe si un área fue explorada antes de su instalación y no colocará estructuras allí. Si tu mundo se exploró por completo antes de instalar BetterStructures, debes regenerarlo o crear un mundo nuevo.

</details>

# EliteMobs y BetterStructures

## Qué ofrece EliteMobs
- Obtenga más información sobre EliteMobs: [Wiki de EliteMobs](#)
- Agrega jefes a las estructuras.

## Obtener contenido EliteMobs prefabricado
- Disponible en [magmaguy.itch.io](https://magmaguy.itch.io/) y [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Usar EliteMobs sin otras funciones
- Puedes desactivar otras funciones de EliteMobs. Para deshabilitar, cambia la configuración en:
    - events.yml: `timedEventsEnabled: false` y `actionEventsEnabled: false` deshabilita todos los eventos
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` deshabilita los engendros de élite naturales

## Agregar un jefe de EliteMobs a tu estructura

- Agrega `[elitemobs]` a la primera línea de tu letrero
- Agrega el nombre de archivo del jefe en la segunda / tercera / cuarta línea del letrero como `test_boss.yml`
- Más información [aquí]($language$/betterstructures/creating_structures.md)

# BetterStructures con otros complementos

## MythicMobs
- Genera mobs míticos usando letreros con `[mythicmobs]` seguido del identificador de mob en las otras líneas del letrero.
- EliteMobs es mejor para jefes con BetterStructures porque hice ambos.

## MMOItems
- Agrega MMOItems con `mmoitems=<TIPO>@<ID-DE-ARTÍCULO>` en el archivo de configuración del tesoro.

## Artículos personalizados de otros complementos
- Usa el comando lootify para agregar cualquier elemento a los cofres. Consulta la [Página de comandos]($language$/betterstructures/commands.md).

# Crear tus propias estructuras
- Aprende cómo: [Guía de creación de estructuras]($language$/betterstructures/creating_structures.md)

# Impacto en el rendimiento y minimización
- Generar muchas estructuras puede ralentizar tu servidor.
- Usa [Chunky](https://www.spigotmc.org/resources/chunky.81534/) para generar previamente tu mundo y evitar problemas de rendimiento.
- Si no utilizas EliteMobs, puedes eliminar BetterStructures después de la generación del mundo.
- Con EliteMobs, mantén BetterStructures para la gestión de áreas protegidas, con un impacto mínimo.


