Aqui estão as flags do WorldGuard que o EliteMobs possui e as suas funções.

***

# elitemob-spawning (allow/deny)

Define se os Elite Mobs podem surgir na região. O comportamento padrão é que os Elite Mobs podem surgir em todo o lado
e, portanto, o principal uso desta flag é desativá-los para uma região específica. Se deseja desativar o surgimento de
Elite Mobs para um mundo inteiro, recomendo editar o ficheiro ValidWorlds.yml.

***

# elitemob-only-spawning (allow/deny)

Define se apenas Elite Mobs podem surgir numa região. Isto não aumenta a quantidade de Elite Mobs que surgem numa área,
apenas impede que entidades de mobs não-elite surjam nessa área. Isto é para utilizadores que desejam ter áreas inteiras
onde apenas Elite Mobs podem surgir, como arenas ou zonas de maior dificuldade.

***

# elitemobs-antiexploit (allow/deny)

Define se o antiexploit pode ser acionado numa região. Allow permitirá que o Antiexploit seja executado, deny impedirá
que seja executado. Deny é recomendado para arenas e masmorras pré-fabricadas onde já testou o terreno em busca de
exploits.

***

Também, por favor, note: NPCs sobrepõem a flag de deny de mob-spawning como uma forma de compatibilidade de terceiros
com WorldGuard. Se não deseja ter NPCs numa área, recomendo removê-los manualmente.

***

# elitemobs-maximum-level

Define o nível máximo de elite mobs que podem surgir numa região. Apenas afeta elites geradas naturalmente (Chefes
Personalizados ignoram isto). O nível deve ser um valor inteiro (sem valores como `1.5`, tem de usar números inteiros
como `1` ou `2`).

***

# elitemobs-minimum-level

Define o nível mínimo de elite mobs que podem surgir numa região. Apenas afeta elites geradas naturalmente (Chefes
Personalizados ignoram isto). O nível deve ser um valor inteiro (sem valores como `1.5`, tem de usar números inteiros
como `1` ou `2`).

***

# elitemobs-dungeon

Define a área para apenas permitir mobs normais gerados com o motivo de surgimento CUSTOM, bem como Chefes Regionais e
Chefes Personalizados. Isto é para uso em mini-masmorras.
