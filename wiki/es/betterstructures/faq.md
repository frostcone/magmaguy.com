# Cómo usar comandos
- Vaya a la página de comandos para obtener ayuda: [Página de comandos]($language$/betterstructures/commands.md)

# Comprobar dónde aparecen las estructuras
- Si usted es un administrador del servidor y no ha desactivado las advertencias, se le notificará en el chat cuando aparezca una estructura.
- Haga clic en el mensaje del chat para teletransportarse a la estructura (no para la edición de Bedrock).
- Active/desactive las advertencias con `/betterstructures warn`.

# Por qué es posible que las estructuras no aparezcan
- Por lo general, las estructuras no aparecen en áreas ya exploradas. Visite nuevas áreas en busca de estructuras.

<details> 
<summary>Más detalles</summary>

Las estructuras no aparecerán en áreas ya exploradas para evitar llenarlas demasiado y dañar los edificios de los jugadores. BetterStructures sabe si un área se exploró antes de instalarlo y no colocará estructuras allí. Si su mundo se exploró por completo antes de instalar BetterStructures, necesita regenerarlo o crear un nuevo mundo.

</details>

# EliteMobs y BetterStructures

## Qué ofrece EliteMobs
- Obtenga información sobre EliteMobs: [Wiki de EliteMobs](#)
- Agrega jefes a las estructuras.

## Obtener contenido prefabricado de EliteMobs
- Disponible en [magmaguy.itch.io](https://magmaguy.itch.io/) y [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Usar EliteMobs sin otras características
- Puede desactivar otras funciones de EliteMobs. Para deshabilitar, cambie la configuración en:
    - events.yml: `timedEventsEnabled: false` y `actionEventsEnabled: false` desactiva todos los eventos
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` desactiva las generaciones de élite naturales

## Agregar un jefe de EliteMobs a su estructura

- Agregue `[elitemobs]` a la primera línea de su cartel
- Agregue el nombre del archivo del jefe en la segunda/tercera/cuarta línea del cartel como `test_boss.yml`
- Más información [aquí]($language$/betterstructures/creating_structures.md)

# BetterStructures con otros plugins

## MythicMobs
- Genere mobs míticos usando carteles con `[mythicmobs]` seguido por el identificador del mob en las otras líneas del cartel.
- EliteMobs es mejor para los jefes con BetterStructures porque yo hice ambos.

## MMOItems
- Agregue MMOItems con `mmoitems=<TIPO>@<ID-ELEMENTO>` en el archivo de configuración del tesoro.

## Elementos personalizados de otros plugins
- Use el comando lootify para agregar cualquier elemento a los cofres. Consulte la [Página de comandos]($language$/betterstructures/commands.md).

# Crear sus propias estructuras
- Aprenda cómo: [Guía de creación de estructuras]($language$/betterstructures/creating_structures.md)

# Impacto en el rendimiento y minimización
- La generación de muchas estructuras puede ralentizar su servidor.
- Use [Chunky](https://www.spigotmc.org/resources/chunky.81534/) para pregenerar su mundo y evitar problemas de rendimiento.
- Si no usa EliteMobs, puede eliminar BetterStructures después de la generación del mundo.
- Con EliteMobs, mantenga BetterStructures para la administración de áreas protegidas, con un impacto mínimo.
