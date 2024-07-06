# Dificuldades em Masmorras Instanciadas

Masmorras instanciadas possuem uma configuração especial para definir facilmente diferentes dificuldades para a masmorra.

# Como funciona

As dificuldades são modeladas em parte após o sistema de sincronização de nível do Final Fantasy 14.

Armaduras e armas Elite ganham dano elite e defesa elite específicos com base em seu nível, como você pode ver nos itens. Quando em uma masmorra instanciada com uma dificuldade ativada, o nível do item será temporariamente e invisivelmente reduzido para corresponder à sincronização de nível.

Aqui está um exemplo específico: uma espada de nível 100 causa 100 de dano sem encantamento. Se um jogador estiver em uma masmorra instanciada com uma dificuldade que sincroniza o equipamento para o nível 50, a espada atuará como uma espada de nível 50 e causará 50 de dano.

No entanto, se essa espada tiver nitidez de nível 10, ela ainda adicionará a mesma quantidade de dano em cima do dano base.

Isso significa que, em masmorras instanciadas com dificuldades, o que importa não é tanto o nível do equipamento, mas a qualidade do equipamento. Os jogadores que desejam superar a dificuldade mítica terão que trabalhar para obter itens de alta qualidade de outras masmorras instanciadas e possivelmente interagir fortemente com o sistema de aprimoramento de itens.

Isso também torna quase impossível para jogadores veteranos esmagar conteúdos antigos de alta dificuldade e fornece um incentivo para fazê-lo mesmo que seu nível esteja muito além do nível da masmorra.

# Sistema de Grupo

Para levar em consideração os grupos de jogadores, os chefes são projetados com poderes específicos que se tornam mais perigosos à medida que mais jogadores se juntam à arena. Além disso, os chefes recebem um aumento de saúde não linear à medida que mais jogadores se juntam à instância.

# Como definir uma dificuldade

As dificuldades são definidas na pasta `dungeonpackager` no arquivo do pacote da masmorra de masmorras instanciadas.

Vamos dar uma olhada em um exemplo:

```yml
difficulties:
- levelSync: 60
  name: normal
- levelSync: 50
  name: hard
- levelSync: 40
  name: mythic
```

Isso define três dificuldades. As dificuldades possuem dois campos opcionais obrigatórios, `name` e `levelSync`. 

O nome é o nome da dificuldade, como aparecerá na configuração de dificuldade no jogo. Pode ter qualquer nome.

A sincronização de nível define o limite de nível de item para a masmorra instanciada, como explicado acima nesta página.

Você pode ter quantas dificuldades definidas quiser. Basta adicionar ou remover entradas da configuração de dificuldades usando o mesmo formato.


## Poderes com base na dificuldade

É possível configurar chefes para terem poderes apenas em dificuldades específicas. Vamos ver um exemplo:

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Observação: isso faz parte do arquivo de configuração do chefe personalizado!**

Nesse caso, o chefe só terá invulnerabilidade ao fogo para dificuldades com o ID `1` e `2`.

*Ao adicionar dificuldades, seus IDs começarão a contar a partir de 0 e aumentarão à medida que você adicionar mais dificuldades.*

## Loot com base na dificuldade

É possível configurar chefes para que dropem loot específico para uma dificuldade de masmorra instanciada. Vamos ver um exemplo:

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```


**Observação: isso faz parte do arquivo de configuração do chefe personalizado!**

Nesse caso, o chefe só dropará o loot `himiko_boss_drop_axe_tank_normal.yml` para a dificuldade `0` e tem 5% de chance de fazer isso.

