Masmorras instanciadas têm uma configuração especial para definir facilmente diferentes dificuldades para a masmorra.

# Como funciona

As dificuldades são modeladas em parte com base no sistema de sincronização de nível (level sync) do Final Fantasy 14.

Armaduras e armas de elite obtêm dano de elite e defesa de elite específicos com base no seu nível, como pode ver nos itens. Quando numa masmorra instanciada com uma dificuldade ativa, o nível do item será temporariamente e invisivelmente reduzido para corresponder à sincronização de nível.

Aqui está um exemplo específico: uma espada de nível 100 causa 100 de dano sem encantamento. Se um jogador estiver numa masmorra instanciada com uma dificuldade que sincroniza o equipamento para o nível 50, a espada agirá como uma espada de nível 50 e causará 50 de dano.

No entanto, se essa espada tiver afiação de nível 10, ainda adicionará a mesma quantidade de dano além do dano base.

Isto significa que, em masmorras instanciadas com dificuldades, o que importa não é tanto o nível do equipamento, mas sim a qualidade do equipamento. Jogadores que procuram superar a dificuldade mítica terão de trabalhar para obter itens de alta qualidade de outras masmorras instanciadas e possivelmente interagir bastante com o sistema de melhoria de itens.

Isto também torna quase impossível para jogadores veteranos esmagar conteúdo antigo de alta dificuldade e oferece um incentivo para o fazerem mesmo que o seu nível esteja bem acima do nível da masmorra.

# Sistema de grupo

Para ter em conta os grupos de jogadores, os bosses são desenhados com poderes específicos que se tornam mais perigosos à medida que mais jogadores entram na arena. Além disso, os bosses recebem um aumento não linear na quantidade de vida à medida que mais jogadores entram na instância.

# Como definir uma dificuldade

As dificuldades são definidas na pasta `dungeonpackager` no ficheiro de pacote da masmorra de masmorras instanciadas.

Vejamos um exemplo:

```yml
difficulties:
- levelSync: 60
  name: normal
- levelSync: 50
  name: hard
- levelSync: 40
  name: mythic
```

Isto define três dificuldades. As dificuldades têm dois campos obrigatórios, `name` e `levelSync`.

O nome é o nome da dificuldade, como aparecerá na configuração de dificuldade no jogo. Isto pode ter qualquer nome.

A sincronização de nível define o limite de nível de item para a masmorra instanciada, como explicado acima nesta página.

Pode ter tantas ou tão poucas dificuldades definidas quanto quiser. Basta adicionar ou remover entradas na configuração de dificuldades usando o mesmo formato.

## Poderes baseados na dificuldade

É possível configurar bosses para terem poderes apenas em dificuldades específicas. Vejamos um exemplo:

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Nota: isto faz parte do ficheiro de configuração do boss personalizado!**

Neste caso, o boss só terá invulnerabilidade a fogo para dificuldades com o ID `1` e `2`.

*Ao adicionar dificuldades, os seus ID's começarão a contar a partir de 0 e aumentarão à medida que adicionar mais dificuldades.*

## Saque (Loot) baseado na dificuldade

É possível configurar bosses para largarem saque (loot) específico para uma dificuldade de masmorra instanciada. Vejamos um exemplo:

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```

**Nota: isto faz parte do ficheiro de configuração do boss personalizado!**

Neste caso, o boss só largará o saque (loot) `himiko_boss_drop_axe_tank_normal.yml` para a dificuldade `0` e tem 5% de probabilidade de o fazer.