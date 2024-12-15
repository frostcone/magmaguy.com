# Modificar minidungeons existentes

Com base em pedidos populares, esta página aborda os conceitos básicos da modificação de Minidungeons existentes. Este não é um guia passo a passo, mas uma visão mais ampla de como os sistemas precisam ser modificados. Terá de ler as páginas da wiki sobre [Chefes Personalizados]($language$/elitemobs/creating_bosses.md) e [Itens Personalizados]($language$/elitemobs/creating_items.md) para modificar esses valores.

### Modificar a dificuldade da dungeon

Existem três razões pelas quais pode querer modificar a dificuldade das dungeons, e são as seguintes:

### Modificar os multiplicadores de dano/vida dos chefes

Esta é a modificação mais fácil de fazer. Se acha que os chefes causam muito pouco ou muito dano, ou que têm muito pouca ou muita vida, pode modificar os valores associados a estes modificadores nos arquivos de chefe contidos na pasta `custombosses`.

Exemplo de valores que pode querer modificar:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Mais informações sobre as estatísticas do chefe [aqui]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Tenha em atenção que, para muitos poderes, o multiplicador de dano não modifica o dano aplicado pelo poder. Consulte a próxima seção sobre como modificar poderes.

### Modificar os poderes dos chefes

A principal dificuldade do EliteMobs é lidar com os vários poderes que os chefes podem ter. Os chefes de nível superior tendem a ter mais e mais poderes difíceis, e os chefes de nível inferior tendem a ter menos e mais poderes fáceis. Certos poderes usados em conjunto no mesmo chefe tornam as lutas mais fáceis, e outros poderes juntos podem tornar a luta significativamente mais difícil.

Exemplo de valores que pode querer modificar:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Mais informações sobre os poderes dos chefes [aqui]($language$/elitemobs/creating_bosses.md&section=powers).

Como existem demasiadas combinações de poderes para listar aqui, terá de aprender como os poderes funcionam e testar os seus encontros para encontrar o ponto ideal para o que considera ser um encontro que não é nem demasiado difícil nem demasiado fácil.

### Modificar o nível dos chefes

Esta é a pergunta mais frequente e, embora seja possível fazê-lo, são necessários alguns passos para garantir que está a aumentar ou diminuir adequadamente a escala dos seus chefes.

Exemplo de valores que pode querer modificar:
```yml
level: 21
```
Mais informações sobre os níveis dos chefes [aqui]($language$/elitemobs/creating_bosses.md&section=level).

Isto envolve uma combinação do que é dito sobre os multiplicadores de dano/vida, uma vez que os chefes de níveis mais baixos/altos podem precisar de multiplicadores de vida e dano ligeiramente diferentes para que a luta pareça correta.

No entanto, o aspeto mais importante a considerar aqui são os poderes do chefe. Os chefes de níveis mais baixos e mais altos tendem a ter conjuntos de poderes bastante diferentes, dependendo de quão difícil a luta deve ser. Ter o mesmo conjunto de poderes para um chefe de nível 10 e um chefe de nível 200 geralmente resulta em lutas cuja dificuldade parece drasticamente diferente. Mais uma vez, a única forma de encontrar realmente o ponto ideal é aprender como os poderes do plugin funcionam e testá-los.

E por último, **mas não menos importante!** Provavelmente vai querer ajustar o saque personalizado. A maioria dos chefes em EliteMobs tem saques personalizados e, se estiver a mudar o nível do chefe, é provável que queira mudar a natureza do saque que ele larga.

Exemplo de valores que pode querer modificar:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Mais informações sobre saques [aqui]($language$/elitemobs/loot_tables.md).

### Dar crédito/publicar conteúdo modificado

Em EliteMobs, é livre de publicar as dungeons que criar nos canais apropriados para o fazer (Discord). No entanto, se a sua criação for apenas uma modificação de uma dungeon existente, a sua submissão pode ser removida, especialmente se for apenas um pequeno ajuste ou se contiver ou for derivada de conteúdo premium (por razões óbvias).

É livre e bem-vindo a modificar qualquer conteúdo que tenha comprado ou descarregado para o ajustar às necessidades do seu servidor para utilização dentro da sua própria rede, no entanto, por razões óbvias, isso não lhe confere direitos de redistribuição.

Reservamos o direito de remover submissões da comunidade por qualquer razão e a qualquer momento, embora detestaríamos ter de o fazer.

### Mais informações

Se acredita que esta página deve ser mais expandida, deixe uma sugestão no Discord dizendo o que deve ser adicionado. Mais informações sobre os vários sistemas mencionados aqui estão presentes nas outras páginas da wiki.
