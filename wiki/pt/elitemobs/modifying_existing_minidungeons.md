# Modificando Masmorras Existentes

Com base em pedidos populares, esta página aborda os aspectos básicos de modificar Mini-Masmorras existentes. Este não é um guia passo a passo, mas uma visão mais ampla de como os sistemas precisam ser modificados. Você precisará ler as páginas do wiki sobre [Chefes Personalizados]($language$/elitemobs/creating_bosses.md) e [Itens Personalizados]($language$/elitemobs/creating_items.md) para modificar esses valores.

### Modificando a dificuldade da masmorra

Existem três razões pelas quais você pode querer modificar a dificuldade das masmorras, e elas são as seguintes:

### Modificando os multiplicadores de dano/saúde dos chefes

Esta é a modificação mais fácil de fazer. Se você acha que os chefes causam muito pouco ou muito dano, ou que eles têm pouca ou muita saúde, pode modificar os valores associados a esses modificadores nos arquivos de chefe contidos na pasta `custombosses`.

Exemplo de valores que você gostaria de modificar:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Mais informações sobre estatísticas de chefe [aqui]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Lembre-se de que para muitos poderes, o multiplicador de dano não modifica o dano aplicado pelo poder. Consulte a próxima seção sobre como modificar poderes.

### Modificando os poderes dos chefes

A principal dificuldade do EliteMobs é lidar com os vários poderes que os chefes podem ter. Chefes de nível superior tendem a ter mais poderes e mais difíceis, e chefes de nível inferior tendem a ter menos poderes e mais fáceis. Certos poderes usados juntos no mesmo chefe facilitam as lutas, e outros poderes juntos podem tornar a luta significativamente mais difícil.

Exemplo de valores que você gostaria de modificar:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Mais informações sobre poderes de chefe [aqui]($language$/elitemobs/creating_bosses.md&section=powers).

Como existem muitas combinações de poderes para listar aqui, você terá que aprender como os poderes funcionam e testar suas lutas para encontrar o ponto ideal para o que você considera uma luta que não é nem muito difícil nem muito fácil.

### Modificando o nível dos chefes

Esta é a pergunta mais frequente, e embora seja possível fazer isso, leva algumas etapas para garantir que você esteja escalonando seus chefes adequadamente para cima ou para baixo.

Exemplo de valores que você gostaria de modificar:
```yml
level: 21
```
Mais informações sobre níveis de chefe [aqui]($language$/elitemobs/creating_bosses.md&section=level).

Isso leva uma combinação de ambos os aspectos mencionados sobre os multiplicadores de dano/saúde, pois chefes de nível inferior/superior podem precisar de multiplicadores de dano e saúde ligeiramente diferentes para tornar a luta mais justa.

No entanto, o aspecto mais importante a considerar aqui são os poderes do chefe. Chefes de nível inferior e superior tendem a ter conjuntos de poderes bastante diferentes, dependendo de quão difícil a luta é destinada a ser. Ter o mesmo conjunto de poderes para um chefe de nível 10 e um chefe de nível 200 geralmente resulta em lutas cuja dificuldade parece drasticamente diferente. Novamente, a única maneira de realmente encontrar o ponto ideal é aprender como os poderes do plugin funcionam e testá-los.

E por último, **mas não menos importante!** Você provavelmente vai querer ajustar o loot personalizado. A maioria dos chefes do EliteMobs possui loot personalizado, e se você estiver alterando o nível do chefe, é provável que queira mudar a natureza do loot que ele deixa cair.

Exemplo de valores que você gostaria de modificar:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Mais informações sobre drops de loot [aqui]($language$/elitemobs/loot_tables.md).

### Creditando / Publicando conteúdo modificado

No EliteMobs, você tem permissão para publicar as masmorras que criar nos canais apropriados para isso (Discord). No entanto, se sua criação for apenas uma modificação de uma masmorra existente, sua submissão pode ser removida, especialmente se for apenas um pequeno ajuste ou se contiver ou for derivada de conteúdo premium (por razões óbvias).

Você está livre e é bem-vindo a modificar qualquer conteúdo que tenha comprado ou baixado para ajustar às necessidades do seu servidor para uso dentro de sua própria rede; no entanto, por razões óbvias, isso não lhe dá direitos de redistribuição.

Reservamo-nos o direito de retirar submissões da comunidade por qualquer motivo e a qualquer momento, embora odiaríamos realmente ter que fazer isso.

### Informações adicionais

Se você acredita que esta página deve ser expandida, deixe uma sugestão no Discord dizendo o que deve ser adicionado a ela. Mais informações sobre os vários sistemas mencionados aqui estão presentes nas outras páginas do wiki.

