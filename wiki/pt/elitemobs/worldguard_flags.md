Listadas aqui estão as flags do WorldGuard que o EliteMobs possui e sua função.

***

# elitemob-spawning (allow/deny)
Define se Elite Mobs podem surgir na região. O comportamento padrão é que Elite Mobs podem surgir em qualquer lugar, e, portanto, o uso primário desta flag é para desativá-los para uma região específica. Se quiser desativar o surgimento de Elite Mobs para um mundo inteiro, recomendo editar o ficheiro ValidWorlds.yml.

***

# elitemob-only-spawning (allow/deny)
Define se apenas Elite Mobs podem surgir numa região. Isto não aumenta a quantidade de Elite Mobs que surge numa área, apenas impede que entidades de mobs não-elite surjam naquela área. Isto é para utilizadores que desejam ter áreas inteiras onde apenas Elite Mobs podem surgir, como arenas ou zonas de maior dificuldade.

***

# elitemobs-antiexploit (allow/deny)
Define se o antiexploit pode ser ativado numa região. "Allow" vai deixar o Antiexploit correr, "deny" vai impedir que corra. "Deny" é recomendado para arenas e masmorras pré-feitas onde já testou o terreno em busca de exploits.

***

Por favor, note também: NPCs sobrepõem a flag de "mob-spawning deny" como uma forma de compatibilidade de terceiros com WorldGuard. Se não deseja ter NPCs numa área, recomendo removê-los manualmente.

***

# elitemobs-maximum-level

Define o nível máximo de elite mobs que podem surgir numa região. Apenas afeta elites que surgem naturalmente (Custom Bosses ignoram isto). O nível tem de ser um valor inteiro (sem valores como `1.5`, tem de usar números inteiros como `1` ou `2`).

***

# elitemobs-minimum-level

Define o nível mínimo de elite mobs que podem surgir numa região. Apenas afeta elites que surgem naturalmente (Custom Bosses ignoram isto). O nível tem de ser um valor inteiro (sem valores como `1.5`, tem de usar números inteiros como `1` ou `2`).

***

# elitemobs-dungeon

Define a área para permitir apenas mobs normais gerados com o motivo de spawn CUSTOM, bem como Bosses Regionais e Bosses Custom. Isto é para uso em minidungeons.
