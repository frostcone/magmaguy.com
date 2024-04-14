# ¿Qué es el modo de nivelación por región?

El modo de nivelación por región es un modo de juego que anula el comportamiento predeterminado de EliteMobs de generar mobs basándose en el nivel de los objetos del jugador, y en su lugar los genera en función de la ubicación en la que se encuentren. A cada zona de 50x50 se le asigna un nivel. Los niveles aumentan en base a la distancia desde el punto de inicio de manera principalmente aleatoria. Los niveles de las zonas se aleatorizan en cada reinicio.

# ¿Para qué sirve el modo de nivelación por región?

El modo de nivelación por región **no está destinado a actuar como modo de juego principal en tu red de servidores**. Se añadió a petición y con el objetivo de agregar variedad a las mecánicas de nivel de mobs en las redes de servidores que deseen ejecutar el modo Pesadilla. Ambos modos pueden estar habilitados para el mismo mundo. Al igual que con el modo Pesadilla, te recomendamos que lo ejecutes en un mundo dedicado a cazar mobs Elite y no en tu mundo principal.

# Cómo activarlo

Puedes activar este modo de juego en la carpeta ValidWorlds.yml utilizando el siguiente formato:

```yml
zoneBasedWorlds:
- yourWorldName1
- yourWorldName2
- yourWorldName3
```