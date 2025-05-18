Listadas aqui estão as flags do WorldGuard que o EliteMobs possui e a sua função.

***

# elitemob-spawning (permitir/negar)
Define se Mobs de Elite podem aparecer na região. O comportamento padrão é que Mobs de Elite são permitidos aparecer em todo o lado, e portanto o uso principal desta flag é desativá-los para uma região específica. Se quiser desativar a aparição de Mobs de Elite para um mundo inteiro, recomendo editar o ficheiro ValidWorlds.yml em vez disso.

***

# elitemob-only-spawning (permitir/negar)
Define se apenas Mobs de Elite podem aparecer numa região. Isto não aumenta a quantidade de Mobs de Elite que aparecem numa área, apenas impede que entidades de mobs não-elite apareçam nessa área. Isto é para utilizadores que desejam ter áreas inteiras onde apenas Mobs de Elite podem aparecer, como arenas ou zonas de maior dificuldade.

***

# elitemobs-antiexploit (permitir/negar)
Define se o antiexploit pode ser ativado numa região. Permitir deixará o Antiexploit correr, negar impedirá que corra. Negar é recomendado para arenas e masmorras pré-feitas onde já testou o terreno para exploits.

***

Por favor, note também: NPCs substituem a flag de negação de aparição de mobs como forma de compatibilidade com terceiros com o WorldGuard. Se não desejar ter NPCs numa área, recomendo removê-los manualmente.

***

# elitemobs-maximum-level

Define o nível máximo de mobs de elite que podem aparecer numa região. Afeta apenas elites que aparecem naturalmente (Bosses Personalizados ignoram isto). O nível deve ser um valor inteiro (sem valores como `1.5`, tem de usar números inteiros como `1` ou `2`).

***

# elitemobs-minimum-level

Define o nível mínimo de mobs de elite que podem aparecer numa região. Afeta apenas elites que aparecem naturalmente (Bosses Personalizados ignoram isto). O nível deve ser um valor inteiro (sem valores como `1.5`, tem de usar números inteiros como `1` ou `2`).

***

# elitemobs-dungeon

Define a área para permitir apenas mobs normais que aparecem com a razão de aparição CUSTOM, bem como Bosses Regionais e Bosses Personalizados. Isto é para uso em minidungeons.