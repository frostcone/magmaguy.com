[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criar bosses personalizados

# Antes de começar

## Onde ficam os ficheiros de boss?

Os ficheiros de boss ficam na pasta de configuração `~/plugins/EliteMobs/custombosses`.

É possível criar subpastas, como `~/plugins/EliteMobs/custombosses/mybosses`. Isto é recomendado para manter as coisas organizadas.

Um ficheiro define um boss, embora seja possível fazer spawn do mesmo boss várias vezes e até definir vários locais de spawn para o mesmo ficheiro de boss.

É possível usar a [webapp](https://magmaguy.com/webapp/webapp.html) para criar bosses personalizados e mais, de forma rápida e fácil.

## Configuração mínima possível

**O ficheiro de configuração mínima possível para um Boss Personalizado é:**
```yml
```

Note que isto é apenas um ficheiro vazio. Isto ainda fará spawn de um boss zombie personalizado com um nome personalizado, pois são os padrões. **Tudo nesta página é opcional!**

## Exemplo de boss

<div align="center">

Vamos dar uma olhada num exemplo de como é um ficheiro de boss.

<details>
<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eTest boss'
level: dynamic
timeout: 10
isPersistent: false
healthMultiplier: 2.0
damageMultiplier: 0.5
helmet: GOLDEN_HELMET
chestplate: IRON_CHESTPLATE
leggings: LEATHER_LEGGINGS
boots: CHAINMAIL_BOOTS
mainHand: GOLDEN_AXE
offHand: SHIELD
isBaby: false
powers:
- invulnerability_knockback.yml
spawnMessage: A test boss has been spawned!
deathMessage: A test boss has been slain by $players!
escapeMessage: A test boss entity has escaped!
locationMessage: 'Test entity: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "I've hit you!"
onDamagedMessages:
- "I've been hit!"
```

</div>

</details>

</div>


## Definições básicas

<div align="center">

### isEnabled

Define se o boss está ativado.

| Chave | Valores | Padrão |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### entityType

Define o tipo de entidade do boss.

| Chave |                                                                                   Valores                                                                                    | Padrão |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [Escolha aqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> O valor também deve estar presente na pasta `~plugins/EliteMobs/mobproperties`. | `ZOMBIE`|

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
entityType: ZOMBIE
```

</div>

</details>

***

### name

Define o nome do boss.

| Chave | Valores | Padrão |
|-|:-:|-|
| `name` | [String](#string), aceita [códigos de cor](#color_codes) e os placeholders listados abaixo | "Nome Padrão" |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &cCool boss!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Se desejar incluir o nível do boss no campo de nome, basta usar um dos seguintes placeholders.

| Placeholder | Descrição | Exemplo | Saída (para um boss de nível 10) |
|-|:-:|:-:|-|
| `$level` | Substitui pelo nível | "$level Cool boss" | `10 Cool boss` |
| `$normalLevel` | Substitui pelo nível, feito para mobs normais | `"$normalLevel Cool boss"` | `[10] Cool boss` |
| `$minibossLevel` | Substitui pelo nível, feito para minibosses | `"$minibossLevel Cool boss"` | `〖10〗 Cool boss` |
| `$bossLevel` | Substitui pelo nível, feito para bosses | `"$bossLevel Cool boss"` | `『10』 Cool boss` |
| `$reinforcementLevel` | Substitui pelo nível, feito para reforços | `"$reinforcementLevel Cool Boss"` | `〔10〕 Cool Boss` |
| `$eventBossLevel` | Substitui pelo nível, feito para bosses de evento | `"$eventBossLevel Cool boss"` | `「10」 Cool boss` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &cCool boss!"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

Define o nível do boss.

| Chave | Valores | Padrão |
|-|:-:|-|
| `level` | Números [inteiros](#integer) positivos ou `dynamic` | `dynamic` |

`dynamic` é usado para eventos e ajusta-se ao nível dos jogadores próximos no momento do spawn do boss.
Não é recomendado para bosses regionais.

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
level: 1
```

</div>

</details>

***

### scale

Define a escala (tamanho) do boss.

| Chave | Valores | Padrão |
|-|:-:|-|
| `scale` | [Multiplicador](#multiplier) | `1.0` |

Ao escalar, `1.0` representa o tamanho padrão. Para tornar a entidade maior, aumente o valor (por exemplo, `1.2`). Para tornar a entidade menor, diminua o valor (por exemplo, `0.8`).

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### bossType

Define o tipo de boss. Isto é usado para exibir barras de vida de boss e outras funcionalidades.

| Chave | Valores | Padrão |
|-|:-:|-|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`, `BOSS`, `EVENT` farão com que o plugin exiba barras de vida quando os jogadores estiverem a lutar contra estes tipos de boss.

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
bossType: MINIBOSS
```

</div>

</details>

***

### healthMultiplier

Define a vida do boss.

| Chave | Valores | Padrão |
|-|:-:|-|
| `healthMultiplier` | [Multiplicador](#multiplier) | `1.0` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
healthMultiplier: 1.5
```

</div>

</details>

***

### damageMultiplier

Define o multiplicador de dano do boss.

| Chave | Valores | Padrão |
|-|:-:|-|
| `damageMultiplier` | [Multiplicador](#multiplier) | `1.0` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
damageMultiplier: 1.5
```

</div>

</details>

***

### isBaby

Define se o boss usa a variante bebé do mob. Só pode ser aplicado a mobs com variantes bebé.
Se gostaria de [disfarçar]($language$/elitemobs/libsdisguises.md) o boss, mas gostaria que ele também permanecesse um bebé enquanto disfarçado (certifique-se de que a entidade disfarçada também suporta a variante bebé), pode usar esta definição:
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Chave | Valores | Padrão |
|-|:-:|-|
| `isBaby` | `true` / `false` | `false` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isBaby: true
```

</div>

</details>


***

### helmet/chestplate/leggings/boots/mainhand/offhand

Define a armadura do boss. Nem todos os modelos do minecraft são capazes de mostrar armadura. A armadura do boss é puramente cosmética e não afeta a jogabilidade.

| Chave |                                    Valores                                     | Padrão |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [Material](#material), [UUID](https://minecraftuuid.com/)           | nenhum |
| `chestplate` | [Material](#material) | nenhum |
| `leggings` | [Material](#material) | nenhum |
| `boots` | [Material](#material) | nenhum |
| `mainHand` | [Material](#material) | nenhum |
| `offHand` | [Material](#material) | nenhum |

**Nota:** Este campo também permite definir modelos personalizados para itens. Para definir o ID do modelo personalizado, adicione o ID após o tipo de material seguindo este formato: `ITEM_MATERIAL:ID`. Exemplo: `DIAMOND_SWORD:1` define o boss para usar uma espada de diamante com o modelo personalizado #1 no seu pacote de texturas.

**Nota 2:** Este campo também permite definir cores de couro personalizadas com o formato `ITEM_MATERIAL:CODE` onde o código é a representação hexadecimal da cor. Exemplo: `LEATHER_LEGGINGS:ffa500` criaria leggings laranja. Pode usar códigos hexadecimais, basta remover o `#` do código hexadecimal. Pode obter códigos hexadecimais [aqui](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Nota 3:** O campo do capacete também permite definir capacetes de mob para serem cabeças de jogador. Basta obter o UUID da cabeça de jogador que gostaria de usar e digitá-lo no campo do capacete. *O jogador precisa estar online para que isto funcione, caso contrário, a cabeça será a padrão de um MineCraft genérico.* Pode obter UUIDs de jogador [aqui](https://minecraftuuid.com/).

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
helmet: 198c4123-cafc-45df-ba79-02a421eb8ce7
chestplate: DIAMOND_CHESTPLATE:1
leggings: LEATHER_LEGGINGS:ffa500
boots: NETHERITE_BOOTS
mainHand: DIAMOND_SWORD
offHand: SHIELD
```

<div align="center">

![create_boss_armor.jpg](../../../img/wiki/create_boss_armor.jpg)

</div>

</div>

</details>

***

### powers

Define os poderes que o boss tem.

| Chave | Valores | Padrão |
|-|:-:|-|
| `powers` | Consulte a lista abaixo | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
powers:
- hyper_loot.yml
- attack_arrow.yml
```

</div>

</details>

*Nota: Pode consultar [esta página]($language$/elitemobs/premade_powers.md) se quiser ver uma lista de poderes pré-fabricados que pode usar.*

***

### Configuração intermédia - Fazer spawn de reforços

Os reforços também entram na categoria de poderes, usando as seguintes definições:

<details>

<summary><b>Definições de reforço</b></summary>

| Chave | Descrição |                                                                                                             Valores                                                                                                             | Padrão |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | O que desencadeia o spawn do reforço. Obrigatório. |                                                                                                    Consulte a lista abaixo                                                                                                     | nenhum |
| `filename` | Nome do ficheiro do boss a fazer spawn como reforço. Obrigatório. |                                                                                                       [String](#string)                                                                                                        | nenhum |
| `chance` | Chance do reforço fazer spawn. Opcional. |                                                                                                       [Double](#double)                                                                                                        | `1.0` |
| `amount` | Define a quantidade de reforços a fazer spawn. Opcional. |                                                                                                      [Integer](#integer)                                                                                                       | `1` |
| `inheritAggro` | Faz com que o reforço herde o aggro do boss. Opcional. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | Faz com que os reforços façam spawn num raio de 30 blocos do boss. Opcional. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | Faz com que o reforço herde o nível do boss. Opcional |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | Faz com que o reforço faça spawn usando o [sistema de spawn personalizado]($language$/elitemobs/creating_spawns.md). Usado apenas para `summonType: GLOBAL`
| `location` | Localização de spawn. Opcional. | `nome_do_mundo,x,y,z` ou `x,y,z` para uma localização relativa ao boss. O offset é relativo à localização de spawn para bosses regionais. Também pode usar `same_as_boss` para fazer com que os reforços façam spawn no mesmo mundo que o boss. | nenhum |
| `lightningRod` | Definição especial para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Faz com que os cristais do end gerem raios à sua volta. Opcional. |                                                                                                        `true` / `false`                                                                                                        | nenhum |

</details>

Os tipos de summon definem as condições para o spawn dos reforços. A seguir está uma lista dos tipos de summon válidos:

<details>

<summary><b>Tipos de summon</b></summary>

| Valor |                                                                         Descrição                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          Só faz spawn dos reforços uma vez, na primeira vez que o boss é danificado.                                           |
| `ON_HIT`  |                                                              Faz spawn dos reforços ao ser atingido.                                                              |
| `ON_COMBAT_ENTER` |                                                   Faz spawn dos reforços quando o boss entra em combate.                                                    |
| `GLOBAL` | Faz spawn de um reforço para cada jogador online. Requer que a chave `customSpawn` tenha um [spawn personalizado]($language$/elitemobs/creating_spawns.md) válido definido. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 Coloca reforços de cristal do end ao entrar em combate, apenas para uso com lutas de dragão personalizadas.                                  |

</details>

Note que também é possível fazer spawn de reforços através de [Elite Scripts]($language$/elitemobs/creating_powers.md), portanto, existem formas mais personalizáveis de fazer spawn de reforços.

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
powers:
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  chance: 0.5
  amount: 5
  inheritAggro: true
  spawnNearby: true
  inheritLevel: true
  customSpawn: false
  location: same_as_boss,10,20,30
  lightningRod: false
```

</div>

</details>

### Configuração avançada - Criar os seus próprios poderes

É possível criar os seus próprios poderes, seja no próprio ficheiro do boss ou como um novo ficheiro de configuração na pasta de poderes. Pode aprender mais sobre isso [aqui]($language$/elitemobs/creating_powers.md).

### Limitar poderes com base na dificuldade da masmorra instanciada

[Masmorras instanciadas]($language$/elitemobs/dungeons.md&section=instanced-dungeons) podem ter definições de dificuldade, e é possível fazer com que um poder específico só seja ativado para dificuldades específicas.

<details>

<summary><b>Opções de limitação de poder</b></summary>

<div align="left">

| Chave | Descrição | Valores | Padrão |
|-|:-:|:-:|-|
| `filename` | Nome do ficheiro do poder. | [String](#string) | nenhum |
| `difficultyID` | Nome da dificuldade, correspondendo ao nome da dificuldade no pacote da masmorra. | [String](#string) | nenhum |

</div>

</details>

Isto só se aplicará a masmorras instanciadas.

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
powers:
- filename: movement_speed.yml
  difficultyID:
  - myDifficultyName1
  - myDifficultyName2
  - myDifficultyName3
```

</div>

</details>

***

### spawnMessage

Define a mensagem a enviar quando o boss faz spawn. Requer configurar o [announcementPriority](#announcementPriority).

| Chave | Valores | Padrão |
|-|:-:|-|
| `spawnMessage` | [Strings](#string) e [códigos de cor](#color_codes) | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: I rise once more!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Define a lista de mensagens a enviar quando o boss morre. Requer configurar o [announcementPriority](#announcementPriority).

| Chave | Valores | Padrão |
|-|:-:|-|
| `deathMessages` | [Strings](#string), [códigos de cor](#color_codes) e os placeholders abaixo | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4The Test Boss has been killed!'
- '&c&l    1st Damager: $damager1name &cwith $damager1damage damage!'
- '&6&l    2nd Damager: $damager2name &6with $damager2damage damage!'
- '&e&l    3rd Damager: $damager3name &ewith $damager3damage damage!'
- '&4Slayers: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

As mensagens de morte usam os seguintes placeholders:

<details>

<summary><b>Placeholders</b></summary>

| Valor | Descrição |
|-|:-:|
| `$damager1name` | O nome do jogador com mais dano |
| `$damager2name` | O nome do segundo jogador com mais dano |
| `$damager3name` | O nome do terceiro jogador com mais dano |
| `$damager1damage` | A quantidade de dano do jogador com mais dano |
| `$damager2damage` | A quantidade de dano do segundo jogador com mais dano |
| `$damager3damage` | A quantidade de dano do terceiro jogador com mais dano |
| `$players` | Exibe uma lista de todos os jogadores que causaram dano |

</details>

### onKillMessage

Define a mensagem a enviar quando o boss mata um jogador. Requer configurar o [announcementPriority](#announcementPriority).

| Chave | Valores | Padrão |
|-|:-:|-|
| `onKillMessage` | [Strings](#string) e [códigos de cor](#color_codes) | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: I win, you lose!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### slimeSize

<div align="center">

Define o tamanho do boss slime, mas só funciona para Slimes e Magmacubes.

</div>

| Chave | Valores | Padrão |
|-|:-:|-|
| `slimeSize` | [Integer](#integer) | `4` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
slimeSize: 5
```

</div>

</details>

***

### neutral

<div align="center">

Define se o boss fará spawn como neutro ou não. Isto só se aplica a tipos de entidade que podem ser neutros, como Lobos ou Golems de Ferro.

</div>

| Chave | Valores | Padrão |
|-|:-:|-|
| `neutral` | [Boolean](#boolean) | `false` |Okay, I can do that. Please provide the target language for the translation.Okay, I can do that. Please provide the target language for the translation.