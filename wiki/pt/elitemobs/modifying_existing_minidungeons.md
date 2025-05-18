Aqui está o texto traduzido para português (Portugal), mantendo a formatação markdown:

# Modificar minidungeons existentes

Com base em pedidos populares, esta página aborda os princípios básicos da modificação de Minidungeons existentes. Este não é um guia passo a passo, mas uma visão mais ampla de como os sistemas precisam ser modificados. Terá de ler as páginas da wiki sobre [Bosses Personalizados]($language$/elitemobs/creating_bosses.md) e [Itens Personalizados]($language$/elitemobs/creating_items.md) para modificar esses valores.

### Modificar a dificuldade da dungeon

Existem três razões pelas quais poderá querer modificar a dificuldade das dungeons, e são as seguintes:

### Modificar os multiplicadores de dano/vida dos bosses

Esta é a modificação mais fácil de fazer. Se achar que os bosses causam demasiado pouco ou demasiado dano, ou que têm demasiado pouca ou demasiada vida, pode modificar os valores associados a estes modificadores nos ficheiros dos bosses contidos na pasta `custombosses`.

Exemplo de valores que poderá querer modificar:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Mais sobre as estatísticas dos bosses [aqui]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Por favor, tenha em mente que para muitos poderes o multiplicador de dano não modifica o dano aplicado pelo poder. Consulte a próxima secção sobre como modificar poderes.

### Modificar os poderes dos bosses

A principal dificuldade do EliteMobs é lidar com os vários poderes que os bosses podem ter. Bosses de nível superior tendem a ter mais poderes e mais difíceis, e bosses de nível inferior tendem a ter menos poderes e mais fáceis. Certos poderes usados em conjunto no mesmo boss tornam os combates mais fáceis, e outros poderes combinados podem tornar o combate significativamente mais difícil.

Exemplo de valores que poderá querer modificar:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Mais sobre os poderes dos bosses [aqui]($language$/elitemobs/creating_bosses.md&section=powers).

Como existem demasiadas combinações de poderes para listar aqui, terá de aprender como os poderes funcionam e testar os seus encontros para encontrar o ponto ideal para o que considera ser um encontro que não é nem demasiado difícil nem demasiado fácil.

### Modificar o nível dos bosses

Esta é a pergunta mais frequente, e embora seja possível fazê-lo, requer alguns passos para garantir que está a escalar adequadamente os seus bosses para cima ou para baixo.

Exemplo de valores que poderá querer modificar:
```yml
level: 21
```
Mais sobre os níveis dos bosses [aqui]($language$/elitemobs/creating_bosses.md&section=level).

Isto requer uma combinação do que é dito sobre os multiplicadores de dano / vida, pois bosses em níveis inferiores / superiores podem precisar de multiplicadores de vida e dano ligeiramente diferentes para que o combate pareça correto.

No entanto, o aspeto mais importante a considerar aqui são os poderes do boss. Bosses de nível inferior e superior tendem a ter conjuntos de poderes bastante diferentes, dependendo de quão difícil o combate se destina a ser. Ter o mesmo conjunto de poderes para um boss de nível 10 e um boss de nível 200 geralmente resulta em combates cuja dificuldade parece drasticamente diferente. Novamente, a única forma de realmente encontrar o ponto ideal é aprender como os poderes do plugin funcionam e testá-los.

E por último, **mas não menos importante!** Provavelmente quererá ajustar o loot personalizado. A maioria dos bosses no EliteMobs tem loot personalizado, e se estiver a mudar o nível do boss, é provável que queira mudar a natureza do loot que ele dropa.

Exemplo de valores que poderá querer modificar:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Mais sobre drops de loot [aqui]($language$/elitemobs/loot_tables.md).

### Creditar / publicar conteúdo modificado

Sob o EliteMobs, é livre de publicar as dungeons que cria nos canais apropriados para o fazer (Discord). No entanto, se a sua criação for apenas uma modificação de uma dungeon existente, a sua submissão poderá ser removida, especialmente se for apenas um pequeno ajuste ou se contiver ou for derivada de conteúdo premium (por razões óbvias).

É livre e bem-vindo a modificar qualquer conteúdo que tenha comprado ou descarregado para o ajustar às necessidades do seu servidor para uso dentro da sua própria rede, no entanto, por razões óbvias, isto não lhe confere direitos de redistribuição.

Reservamo-nos o direito de remover submissões da comunidade por qualquer motivo e a qualquer momento, embora odiássemos ter de o fazer.

### Mais informações

Se acredita que esta página deve ser expandida, deixe uma sugestão no Discord dizendo o que deve ser adicionado. Mais informações sobre os vários sistemas mencionados aqui estão presentes nas outras páginas da wiki.