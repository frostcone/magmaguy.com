```markdown
# Cómo Usar Comandos
- Ve a la página de comandos para obtener ayuda: [Página de Comandos]($language$/betterstructures/commands.md)

# Comprobando Dónde Aparecen las Estructuras
- Si eres administrador del servidor y no has desactivado las advertencias, se te notificará en el chat cuando aparezca una estructura.
- Haz clic en el mensaje del chat para teletransportarte a la estructura (no para la edición Bedrock).
- Activa/desactiva las advertencias con `/betterstructures warn`.

# Por Qué las Estructuras Pueden No Aparecer
- Normalmente, las estructuras no aparecen en áreas ya exploradas. Visita nuevas áreas para encontrar estructuras.

<details>
<summary>Más Detalles</summary>

Las estructuras no aparecerán en áreas ya exploradas para evitar llenarlas demasiado y dañar las construcciones de los jugadores. BetterStructures sabe si un área fue explorada antes de ser instalado y no colocará estructuras allí. Si tu mundo fue explorado completamente antes de instalar BetterStructures, necesitas regenerarlo o crear un mundo nuevo.

</details>

# EliteMobs y BetterStructures

## Qué Ofrece EliteMobs
- Aprende sobre EliteMobs: [Wiki de EliteMobs](#)
- Añade jefes a las estructuras.

## Obteniendo Contenido Pre-Hecho de EliteMobs
- Disponible en [magmaguy.itch.io](https://magmaguy.itch.io/) y [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Usando EliteMobs Sin Otras Funciones
- Puedes desactivar otras funciones de EliteMobs. Para desactivarlas, cambia la configuración en:
    - events.yml: `timedEventsEnabled: false` y `actionEventsEnabled: false` desactiva todos los eventos
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` desactiva la aparición natural de élites

## Añadiendo un jefe de EliteMobs a tu estructura

- Añade `[elitemobs]` a la primera línea de tu cartel
- Añade el nombre del archivo del jefe en la segunda / tercera / cuarta línea del cartel, como `test_boss.yml`
- Más información [aquí]($language$/betterstructures/creating_structures.md)

# BetterStructures con otros plugins

## MMOItems
- Añade MMOItems con `mmoitems=<TYPE>@<ITEM-ID>` en el archivo de configuración de tesoros.

## Objetos Personalizados de Otros Plugins
- Usa el comando lootify para añadir cualquier objeto a los cofres. Consulta la [Página de Comandos]($language$/betterstructures/commands.md).

# Creando Tus Propias Estructuras
- Aprende cómo: [Guía de Creación de Estructuras]($language$/betterstructures/creating_structures.md)

# Impacto en el Rendimiento y Minimización
- Generar muchas estructuras puede ralentizar tu servidor.
- Usa [Chunky](https://www.spigotmc.org/resources/chunky.81534/) para pre-generar tu mundo y evitar problemas de rendimiento.
- Si no usas EliteMobs, puedes eliminar BetterStructures después de la generación del mundo.
- Con EliteMobs, mantén BetterStructures para la gestión de áreas protegidas, con un impacto mínimo.
```