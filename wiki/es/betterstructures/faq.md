# Cómo Usar Comandos
- Vaya a la página de comandos para obtener ayuda: [Página de Comandos]($language$/betterstructures/commands.md)

# Verificando Dónde Aparecen las Estructuras
- Si eres un administrador del servidor y no has desactivado las advertencias, serás notificado en el chat cuando aparezca una estructura.
- Haz clic en el mensaje del chat para teletransportarte a la estructura (no para la edición de Bedrock).
- Activa/desactiva las advertencias con `/betterstructures warn`.

# Por qué las Estructuras Pueden No Aparecer
- Por lo general, las estructuras no aparecen en áreas ya exploradas. Visita nuevas áreas para las estructuras.

<details> 
<summary>Más Detalles</summary>

Las estructuras no aparecerán en áreas ya exploradas para evitar llenarlas demasiado y dañar las construcciones de los jugadores. BetterStructures sabe si un área fue explorada antes de que se instalara y no colocará estructuras allí. Si tu mundo fue completamente explorado antes de instalar BetterStructures, necesitas regenerarlo o crear un mundo nuevo.

</details>

# EliteMobs y BetterStructures

## Qué Ofrece EliteMobs
- Aprende acerca de EliteMobs: [Wiki de EliteMobs](#)
- Añade jefes a las estructuras.

## Obteniendo Contenido Pre-hecho de EliteMobs
- Disponible en [magmaguy.itch.io](https://magmaguy.itch.io/) y [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Usando EliteMobs Sin Otros Características
- Puedes desactivar otras características de EliteMobs. Para desactivar, cambia la configuración en:
  - events.yml: `timedEventsEnabled: false` y `actionEventsEnabled: false` desactiva todos los eventos
  - MobCombatSettings.yml: `doNaturalMobSpawning: false` desactiva los spawns naturales de élite

## Añadiendo un jefe EliteMobs a tu estructura

- Añade `[elitemobs]` a la primera línea de tu letrero
- Añade el nombre del archivo del jefe en la segunda / tercera / cuarta líneas del letrero como `test_boss.yml`
- Más información [aquí]($language$/betterstructures/creating_structures.md)

# BetterStructures con otros plugins

## MythicMobs
- Genera mobs míticos usando letreros con `[mythicmobs]` seguido por el identificador del mob en las otras líneas del letrero.
- EliteMobs es mejor para jefes con BetterStructures porque hice ambos.

## MMOItems
- Añade MMOItems con `mmoitems=<TYPE>@<ITEM-ID>` en el archivo de configuración del tesoro.

## Elementos personalizados de otros plugins
- Utiliza el comando lootify para añadir cualquier objeto a los cofres. Consulta [Página de Comandos]($language$/betterstructures/commands.md).

# Creando Tus Propias Estructuras
- Aprende cómo: [Guía de Creación de Estructuras]($language$/betterstructures/creating_structures.md)

# Impacto en el rendimiento y minimización
- Generar muchas estructuras puede ralentizar tu servidor.
- Utiliza [Chunky](https://www.spigotmc.org/resources/chunky.81534/) para pregenerar tu mundo y evitar problemas de rendimiento.
- Si no estás usando EliteMobs, puedes quitar BetterStructures después de la generación del mundo.
- Con EliteMobs, mantén BetterStructures para la gestión de áreas protegidas, con un impacto mínimo.