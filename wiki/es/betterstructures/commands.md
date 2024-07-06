# Comandos de BetterStructures

A continuación, se muestra una lista completa de los comandos disponibles para usar con el complemento BetterStructures, junto con sus respectivos permisos requeridos.

## Comando de recarga

**Comando:** `/betterstructures reload`

**Permiso:** `betterstructures.*`

**Descripción:** Recarga el complemento. También importa cualquier estructura que deba ser importada.

## Comando de botín

**Comando:** `/betterstructures lootify <nombre de archivo del tesoro> <rareza> <cantidad mínima> <cantidad máxima> <peso>`

**Permiso:** `betterstructures.*`

**Descripción:** Agrega el elemento que se sostiene actualmente a la tabla de `rareza` específica del `generador` específico, aleatorizando la cantidad del elemento que se puede encontrar en un cofre entre `cantidad mínima` y `cantidad máxima`, con el `peso` especificado.

Este es un sistema muy específico, para obtener más detalles sobre cómo funcionan estos valores, puede leer [esta página]($language$/betterstructures/creating_structures.md).

## Comando de colocación

**Comando:** `/betterstructures place <nombre de archivo de la estructura> <tipo de generador>`

**Permiso:** `betterstructures.*`

**Descripción:** Fuerza la colocación de la estructura seleccionada en su ubicación.

## Comando de teletransporte a coordenadas

**Comando:** `/betterstructures teleporttocoords <nombre del mundo> <x> <y> <z>`

**Permiso:** `betterstructures.*`

**Descripción:** No está diseñado para usarse directamente, este es el comando que se ejecuta cuando un administrador hace clic en una advertencia de chat que le permite teletransportarse a una estructura.

## Comando de versión

**Comando:** `/betterstructures version`

**Permiso:** `betterstructures.*`

**Descripción:** Muestra la versión del complemento en el chat.

## Comando silencioso

**Comando:** `/betterstructures silent`

**Permiso:** `betterstructures.*`

**Descripción:** Silencia o elimina el silencio de las advertencias que aparecen en el chat para los operadores del servidor sobre las estructuras que se generan en el servidor.
