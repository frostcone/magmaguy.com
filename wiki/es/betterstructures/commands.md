# Comandos de BetterStructures

A continuación se presenta una lista completa de los comandos disponibles para utilizar con el plugin BetterStructures, junto con los permisos respectivos requeridos.

## Comando de Recarga

**Comando:** `/betterstructures reload`

**Permiso:** `betterstructures.*`

**Descripción:** Recarga el plugin. También importa cualquier estructura que necesite ser importada.

## Comando de Lootify

**Comando:** `/betterstructures lootify <nombre del archivo de tesoro> <rareza> <cantidad mínima> <cantidad máxima> <peso>`

**Permiso:** `betterstructures.*`

**Descripción:** Agrega el objeto que actualmente está en la mano a la tabla específica de `rareza` del `generador` específico, azar la cantidad del objeto que puede ser encontrada en un cofre entre la `cantidad mínima` y la `cantidad máxima`, con el `peso` especificado.

Este es un sistema muy específico, para obtener más detalles sobre cómo funcionan estos valores, puede leer [esta página]($idioma$/betterstructures/creating_structures.md).

## Comando de lugar

**Comando:** `/betterstructures place <nombre de archivo de estructura> <tipo de generador>`

**Permiso:** `betterstructures.*`

**Descripción:** Forzar la colocación de la estructura seleccionada en tu ubicación.

## Comando de Teleportcoords

**Comando:** `/betterstructures teleporttocoords <nombreDelMundo> <x> <y> <z>`

**Permiso:** `betterstructures.*`

**Descripción:** No está destinado a ser utilizado directamente, este es el comando que se ejecuta cuando un administrador hace clic en una advertencia de chat que les permite teletransportarse a una estructura.

## Comando de Versión

**Comando:** `/betterstructures version`

**Permiso:** `betterstructures.*`

**Descripción:** Muestra la versión del plugin en el chat.

## Comando de Silencio

**Comando:** `/betterstructures silent`

**Permiso:** `betterstructures.*`

**Descripción:** Silencia o elimina el silencio de las advertencias que aparecen en el chat para los operadores del servidor sobre las estructuras que se están generando en el servidor.