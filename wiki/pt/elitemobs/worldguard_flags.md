# Flags do WorldGuard para o EliteMobs

Listados aqui estão os flags do WorldGuard que o EliteMobs possui e sua função.


***

# elitemob-spawning (permitir/negar)
Define se os Mobs Elite podem gerar na região. O comportamento padrão é que os Mobs Elite podem gerar em todos os lugares e, portanto, o uso principal desta flag é desabilitá-los para uma região específica. Se você quiser desabilitar a geração de Mobs Elite para um mundo inteiro, recomendo editar o arquivo ValidWorlds.yml.


***

# elitemob-only-spawning (permitir/negar)
Define se apenas os Mobs Elite podem gerar em uma região. Isso não aumenta a quantidade de Mobs Elite que geram em uma área, apenas impede que entidades de mobs não-elite gerem naquela área. Isso é para usuários que desejam ter áreas inteiras onde apenas os Mobs Elite podem gerar, como arenas ou zonas de dificuldade mais alta.


***

# elitemobs-antiexploit (permitir/negar)
Define se o anti-exploração pode ser acionado em uma região. Permitir fará com que o Anti-exploração seja executado, negar impedirá que ele seja executado. Negar é recomendado para arenas e masmorras pré-fabricadas onde você já testou o terreno para exploits.

***

Observe também: os NPCs sobrescrevem a flag de negação de geração de mobs como uma forma de compatibilidade de terceiros com o WorldGuard. Se você não deseja ter NPCs em uma área, recomendo removê-los manualmente.

***

# elitemobs-maximum-level

Define o nível máximo de mobs elite que podem gerar em uma região. Só afeta as elites geradas naturalmente (os Chefes Personalizados ignoram isso). O nível deve ser um valor inteiro (sem valores como `1.5`, você deve usar números inteiros como `1` ou `2`).

***

# elitemobs-minimum-level

Define o nível mínimo de mobs elite que podem gerar em uma região. Só afeta as elites geradas naturalmente (os Chefes Personalizados ignoram isso). O nível deve ser um valor inteiro (sem valores como `1.5`, você deve usar números inteiros como `1` ou `2`).

***

# elitemobs-dungeon

Define a área para permitir apenas mobs normais gerados com o motivo de geração CUSTOM, bem como Chefes Regionais e Chefes Personalizados. Isso é para uso em mini-masmorras.

