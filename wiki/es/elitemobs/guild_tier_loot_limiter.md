# Limitador de Nivel de Gremio

El limitador de botín de nivel de gremio limita el mejor botín que un jugador puede obtener según su nivel de gremio.

Los jugadores pueden desbloquear niveles más altos yendo al centro del Gremio de Aventureros y hablando con Gillian, la
NPC Asistente del Gremio, o ejecutando el comando */em rank*. Los rangos se desbloquean comprándolos con Monedas Élite.

De forma predeterminada, los jugadores están limitados de las siguientes maneras (suponiendo que estés utilizando la
configuración predeterminada):

- Nivel de gremio 1 (predeterminado inicial): hasta objetos de nivel 10, mobs de nivel 10
- Nivel de gremio 2: hasta objetos de nivel 20, mobs de nivel 20
- Nivel de gremio 3: hasta objetos de nivel 30, mobs de nivel 30
- Nivel de gremio 4: hasta objetos de nivel 40, mobs de nivel 40
- Nivel de gremio 5: hasta objetos de nivel 50, mobs de nivel 50
- Nivel de gremio 6: hasta objetos de nivel 60, mobs de nivel 60
- Nivel de gremio 7: hasta objetos de nivel 70, mobs de nivel 70
- Nivel de gremio 8: hasta objetos de nivel 80, mobs de nivel 80
- Nivel de gremio 9: hasta objetos de nivel 90, mobs de nivel 90
- Nivel de gremio 10: hasta objetos de nivel 100, mobs de nivel 100

A partir de este punto, se requieren niveles de prestigio para desbloquear los niveles de gremio.

- Prestigio 1, Nivel de gremio 11: hasta objetos de nivel 110, mobs de nivel 110
- Prestigio 2, Nivel de gremio 12: hasta objetos de nivel 120, mobs de nivel 120
- Prestigio 3, Nivel de gremio 13: hasta objetos de nivel 130, mobs de nivel 130
- Prestigio 4, Nivel de gremio 14: hasta objetos de nivel 140, mobs de nivel 140
- Prestigio 5, Nivel de gremio 15: hasta objetos de nivel 150, mobs de nivel 150
- Prestigio 6, Nivel de gremio 16: hasta objetos de nivel 160, mobs de nivel 160
- Prestigio 7, Nivel de gremio 17: hasta objetos de nivel 170, mobs de nivel 170
- Prestigio 8, Nivel de gremio 18: hasta objetos de nivel 180, mobs de nivel 180
- Prestigio 9, Nivel de gremio 19: hasta objetos de nivel 190, mobs de nivel 190
- Prestigio 10, Nivel de gremio 20: hasta objetos de nivel 200, mobs de nivel 200

## Cómo funciona y casos límite

Dado que el nivel de gremio limita el nivel del objeto que los jugadores pueden matar, esto significa que los jugadores
solo pueden generar mobs hasta cierto nivel, ya que el nivel del mob se basa en el equipo que lleva el jugador. Si los
jugadores van a cazar mobs con amigos de nivel superior, el botín que obtendrán será de un nivel inferior al de sus
amigos.

En combinación con el encantamiento [soulbind]($language/elitemobs/soulbind.md$), esto frena bastante el problema del
aumento de nivel y permite a los administradores no tener que preocuparse de que los visitantes alcancen el nivel máximo
a los pocos minutos de unirse al servidor, o que los nuevos jugadores obtengan instantáneamente montones de objetos de
nivel diamante. Además, ofrece a los jugadores una conexión más profunda con su botín, ya que hace que este les
pertenezca a ellos y solo a ellos.
