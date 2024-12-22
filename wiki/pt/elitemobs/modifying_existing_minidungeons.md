# Modificar Minidungeons Existentes

Com base em pedidos populares, esta página aborda os aspetos básicos da modificação de Minidungeons existentes. Este não
é um guia passo-a-passo, mas sim uma visão mais ampla de como os sistemas precisam ser modificados. Terá de ler as
páginas da wiki sobre [Chefes Personalizados]($language$/elitemobs/creating_bosses.md)
e [Itens Personalizados]($language$/elitemobs/creating_items.md) para modificar esses valores.

### Modificar a dificuldade da dungeon

Existem três razões pelas quais pode querer modificar a dificuldade das dungeons, e são as seguintes:

### Modificar os multiplicadores de dano/vida dos chefes

Esta é a modificação mais fácil de fazer. Se acha que os chefes causam pouco ou muito dano, ou que têm pouca ou muita
vida, pode modificar os valores associados a estes modificadores nos ficheiros dos chefes contidos na
pasta `custombosses`.

Exemplo de valores que você gostaria de modificar:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```

Mais sobre estatísticas de chefes [aqui]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Por favor, tenha em mente que para muitos poderes, o multiplicador de dano não modifica o dano aplicado pelo poder.
Consulte a próxima seção sobre como modificar poderes.

### Modificar os poderes dos chefes

A principal dificuldade do EliteMobs é lidar com os vários poderes que os chefes podem ter. Chefes de nível mais alto
tendem a ter mais e poderes mais difíceis, e chefes de nível mais baixo tendem a ter menos e poderes mais fáceis. Certos
poderes usados ​​em conjunto no mesmo chefe tornam as lutas mais fáceis, e outros poderes juntos podem tornar a luta
significativamente mais difícil.

Exemplo de valores que você gostaria de modificar:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```

Mais sobre poderes de chefes [aqui]($language$/elitemobs/creating_bosses.md&section=powers).

Como existem muitas combinações de poderes para listar aqui, terá de aprender como os poderes funcionam e testar os seus
encontros para encontrar o ponto ideal para o que considera um encontro que não seja muito difícil nem muito fácil.

### Modificar o nível dos chefes

Esta é a pergunta mais frequente e, embora seja possível fazê-lo, requer alguns passos para garantir que está a escalar
os seus chefes adequadamente para cima ou para baixo.

Exemplo de valores que você gostaria de modificar:
```yml
level: 21
```

Mais sobre níveis de chefes [aqui]($language$/elitemobs/creating_bosses.md&section=level).

Isto requer uma combinação do que foi dito sobre os multiplicadores de dano/vida, pois chefes em níveis mais
baixos/altos podem precisar de multiplicadores de vida e dano ligeiramente diferentes para que a luta pareça correta.

No entanto, o aspeto mais importante a considerar aqui são os poderes do chefe. Chefes de níveis mais baixos e mais
altos tendem a ter conjuntos de poderes bastante diferentes, dependendo de quão difícil a luta deve ser. Ter o mesmo
conjunto de poderes para um chefe de nível 10 e um chefe de nível 200 geralmente resulta em lutas cuja dificuldade
parece drasticamente diferente. Novamente, a única maneira de realmente encontrar o ponto ideal é aprender como os
poderes do plugin funcionam e testá-los.

E por último, **mas não menos importante!** Provavelmente vai querer ajustar o saque personalizado. A maioria dos chefes
em EliteMobs tem saques personalizados e, se estiver a mudar o nível do chefe, é provável que queira mudar a natureza do
saque que ele dropa.

Exemplo de valores que você gostaria de modificar:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```

Mais sobre drops de saque [aqui]($language$/elitemobs/loot_tables.md).

### Creditar/publicar conteúdo modificado

Sob EliteMobs, é livre de publicar as dungeons que cria nos canais apropriados para o fazer (Discord). No entanto, se a
sua criação for apenas uma modificação de uma dungeon existente, o seu envio poderá ser removido, especialmente se for
apenas um pequeno ajuste ou se contiver ou for derivado de conteúdo premium (por razões óbvias).

É livre e bem-vindo a modificar qualquer conteúdo que tenha comprado ou descarregado para o ajustar às necessidades do
seu servidor para uso dentro da sua própria rede, no entanto, por razões óbvias, isto não lhe concede direitos de
redistribuição.

Reservamo-nos o direito de remover envios da comunidade por qualquer motivo e a qualquer momento, embora odiássemos ter
que realmente fazer isso.

### Mais informações

Se acredita que esta página deve ser mais expandida, deixe uma sugestão no Discord dizendo o que deve ser adicionado. Mais informações sobre os vários sistemas mencionados aqui estão presentes nas outras páginas da wiki.
