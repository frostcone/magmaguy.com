# Cómo Usar Comandos

- Ve a la página de comandos para obtener ayuda: [Página de Comandos]($language$/betterstructures/commands.md)

# Verificar Dónde Aparecen las Estructuras

- Si eres administrador del servidor y no has desactivado las advertencias, se te notificará en el chat cuando aparezca
  una estructura.
- Haz clic en el mensaje del chat para teletransportarte a la estructura (no para la edición Bedrock).
- Activa/desactiva las advertencias con `/betterstructures warn`.

# Por Qué las Estructuras Podrían No Aparecer

- Por lo general, las estructuras no aparecen en áreas ya exploradas. Visita nuevas áreas para encontrar estructuras.

<details> 
<summary>Más Detalles</summary>

Las estructuras no aparecerán en áreas ya exploradas para evitar llenarlas demasiado y dañar las construcciones de los
jugadores. BetterStructures sabe si un área fue explorada antes de su instalación y no colocará estructuras allí. Si tu
mundo fue explorado completamente antes de instalar BetterStructures, necesitas regenerarlo o crear un nuevo mundo.

</details>

# EliteMobs y BetterStructures

## Lo Que Ofrece EliteMobs

- Aprende sobre EliteMobs: [Wiki de EliteMobs](#)
- Agrega jefes a las estructuras.

## Obtener Contenido Prehecho de EliteMobs
- Disponible en [magmaguy.itch.io](https://magmaguy.itch.io/) y [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Usar EliteMobs Sin Otras Funciones

- Puedes desactivar otras funciones de EliteMobs. Para desactivar, cambia la configuración en:
    - events.yml: `timedEventsEnabled: false` y `actionEventsEnabled: false` desactiva todos los eventos
  - MobCombatSettings.yml: `doNaturalMobSpawning: false` desactiva las apariciones de élite naturales

## Agregar un Jefe de EliteMobs a tu Estructura

- Agrega `[elitemobs]` a la primera línea de tu letrero
- Agrega el nombre de archivo del jefe en la segunda / tercera / cuarta línea del letrero como `test_boss.yml`
- Más información [aquí]($language$/betterstructures/creating_structures.md)

# BetterStructures con Otros Plugins

## MythicMobs

- Genera mobs míticos usando letreros con `[mythicmobs]` seguido del identificador del mob en las otras líneas del
  letrero.
- EliteMobs es mejor para jefes con BetterStructures porque yo hice ambos.

## MMOItems

- Agrega MMOItems con `mmoitems=<TYPE>@<ITEM-ID>` en el archivo de configuración de tesoros.

## Objetos Personalizados de Otros Plugins

- Usa el comando lootify para agregar cualquier objeto a los cofres. Consulta
  la [Página de Comandos]($language$/betterstructures/commands.md).

# Crear Tus Propias Estructuras

- Aprende cómo: [Guía de Creación de Estructuras]($language$/betterstructures/creating_structures.md)

# Impacto en el Rendimiento y Minimización

- Generar muchas estructuras puede ralentizar tu servidor.
- Usa [Chunky](https://www.spigotmc.org/resources/chunky.81534/) para pre-generar tu mundo y evitar problemas de
  rendimiento.
- Si no usas EliteMobs, puedes eliminar BetterStructures después de la generación del mundo.
- Con EliteMobs, conserva BetterStructures para la gestión de áreas protegidas, con un impacto mínimo.
