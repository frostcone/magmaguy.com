As masmorras instanciadas têm uma configuração especial para definir facilmente diferentes dificuldades para a masmorra.

# Como funciona

As dificuldades são modeladas em parte a partir do sistema de sincronização de nível de Final Fantasy 14.

Armaduras e armas de elite recebem dano de elite específico e defesa de elite com base no seu nível, como pode ver nos itens. Quando numa masmorra instanciada com uma dificuldade ativa, o nível do item será temporariamente e invisivelmente reduzido para corresponder à sincronização de nível.

Eis um exemplo específico: uma espada de nível 100 causa 100 de dano sem encantamento. Se um jogador estiver numa masmorra instanciada com uma dificuldade que sincronize o equipamento para o nível 50, a espada funcionará como uma espada de nível 50 e causará 50 de dano.

No entanto, se essa espada tiver nitidez de nível 10, ela ainda adicionará a mesma quantidade de dano além do dano base.

Isto significa que, em masmorras instanciadas com dificuldades, o que importa não é tanto o nível do equipamento, mas a qualidade do equipamento. Os jogadores que procuram vencer a dificuldade mítica terão de trabalhar para obter itens de alta qualidade de outras masmorras instanciadas e possivelmente interagir muito com o sistema de melhoria de itens.

Isto também torna quase impossível para jogadores veteranos esmagarem conteúdo antigo de alta dificuldade e fornece um incentivo para o fazer, mesmo que o seu nível esteja muito além do nível da masmorra.

# Sistema de grupo

Para contabilizar os grupos de jogadores, os chefes são concebidos com poderes específicos que se tornam mais perigosos à medida que mais jogadores entram na arena. Além disso, os chefes recebem um aumento de saúde não linear à medida que mais jogadores entram na instância.

# Como definir uma dificuldade

As dificuldades são definidas na pasta `dungeonpackager` no ficheiro de pacote da masmorra de masmorras instanciadas.

Vamos dar uma olhada num exemplo:

```yml
difficulties:
- levelSync: 60
  name: normal
- levelSync: 50
  name: hard
- levelSync: 40
  name: mythic
```

Isto define três dificuldades. As dificuldades têm dois campos opcionais obrigatórios, `name` e `levelSync`.

O nome é o nome da dificuldade, como aparecerá na configuração de dificuldade no jogo. Este pode ter qualquer nome.

A sincronização de nível define o limite de nível de item para a masmorra instanciada, como explicado acima nesta página.

Pode ter tantas ou tão poucas dificuldades definidas como quiser. Basta adicionar ou remover entradas na configuração de dificuldades usando o mesmo formato.

## Poderes com base na dificuldade

É possível configurar os chefes para terem poderes apenas em dificuldades específicas. Vamos dar uma olhada num exemplo:

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Nota: esta é uma parte do ficheiro de configuração do chefe personalizado!**

Neste caso, o chefe só terá invulnerabilidade ao fogo para as dificuldades com o ID `1` e `2`.

*Ao adicionar dificuldades, os seus IDs começarão a contar a partir de 0 e aumentarão à medida que adicionar mais dificuldades.*

## Saque com base na dificuldade

É possível configurar os chefes para largarem saque específico para uma dificuldade de masmorra instanciada. Vamos dar uma olhada num exemplo:

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```

**Nota: esta é uma parte do ficheiro de configuração do chefe personalizado!**

Neste caso, o chefe só irá largar o saque `himiko_boss_drop_axe_tank_normal.yml` para a dificuldade `0` e tem 5% de hipótese de o fazer.
