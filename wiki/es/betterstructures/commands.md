Aquí tienes la traducción al español, manteniendo el formato markdown:

# Comandos de BetterStructures

A continuación se presenta una lista completa de los comandos disponibles para usar con el plugin BetterStructures, junto con sus respectivos permisos requeridos.

## Comando Reload

**Comando:** `/betterstructures reload`

**Permiso:** `betterstructures.*`

**Descripción:** Recarga el plugin. También importa cualquier estructura que necesite ser importada.

## Comando Lootify

**Comando:** `/betterstructures lootify <nombre_archivo_tesoro> <rareza> <cantidad_min> <cantidad_max> <peso>`

**Permiso:** `betterstructures.*`

**Descripción:** Añade el objeto que tienes en la mano a la tabla de `rareza` específica del `generador` específico, aleatorizando la cantidad del objeto que se puede encontrar en un cofre entre `cantidad_min` y `cantidad_max`, con el `peso` especificado.

Este es un sistema muy específico, para más detalles sobre cómo funcionan estos valores puedes leer [esta página](es/betterstructures/creating_structures.md).

## Comando Place

**Comando:** `/betterstructures place <nombre_archivo_estructura> <tipo_generador>`

**Permiso:** `betterstructures.*`

**Descripción:** Fuerza la colocación de la estructura seleccionada en tu ubicación.

## Comando Teleportcoords

**Comando:** `/betterstructures teleporttocoords <nombre_mundo> <x> <y> <z>`

**Permiso:** `betterstructures.*`

**Descripción:** No está diseñado para ser usado directamente, este es el comando que se ejecuta cuando un administrador hace clic en una advertencia en el chat que le permite teletransportarse a una estructura.

## Comando Version

**Comando:** `/betterstructures version`

**Permiso:** `betterstructures.*`

**Descripción:** Muestra la versión del plugin en el chat.

## Comando Silent

**Comando:** `/betterstructures silent`

**Permiso:** `betterstructures.*`

**Descripción:** Silencia o elimina el silencio de las advertencias que aparecen en el chat para los operadores del servidor sobre las estructuras que se generan en el servidor.