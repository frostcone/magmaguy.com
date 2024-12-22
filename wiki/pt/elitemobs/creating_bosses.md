```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criar bosses personalizados

# Antes de começar

## Onde ficam os ficheiros de boss?

Os ficheiros de boss ficam na pasta de configuração `~/plugins/EliteMobs/custombosses`.

É possível criar subpastas, como `~/plugins/EliteMobs/custombosses/meusbosses`. Isto é recomendado para manter as coisas organizadas.

Um ficheiro define um boss, embora seja possível fazer aparecer o mesmo boss várias vezes e até definir várias localizações de spawn para o mesmo ficheiro de boss.

É possível usar a [webapp](https://magmaguy.com/webapp/webapp.html) para criar bosses personalizados e mais, de forma rápida e fácil.

## A configuração mais pequena possível

**O ficheiro de configuração mais pequeno possível para um Boss Personalizado é:**
```yml
```

Repare como este é apenas um ficheiro vazio. Isto fará ainda aparecer um boss personalizado zombie com um nome
personalizado, já que esses são os valores padrão. **Tudo nesta página é opcional!**

## Exemplo de boss

<div align="center">

Vamos dar uma olhada a um exemplo de como um ficheiro de boss se parece.

<details> 
<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eBoss de teste'
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
spawnMessage: Um boss de teste apareceu!
deathMessage: Um boss de teste foi derrotado por $players!
escapeMessage: Um boss de teste escapou!
locationMessage: 'Entidade de teste: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "Eu atingi-te!"
onDamagedMessages:
- "Eu fui atingido!"
```

</div>

</details>

</div>


## Configurações básicas

<div align="center">

### isEnabled

Define se o boss está ativo.

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

| Chave        |                                                                                      Valores                                                                                      | Padrão   |
|--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|----------|
| `entityType` | [Escolha daqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> O valor também deve estar presente na pasta `~plugins/EliteMobs/mobproperties`. | `ZOMBIE` |

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
name: "$normalLevel &cBoss fixe!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Se desejar incluir o nível do boss no campo de nome, basta usar um dos seguintes placeholders.

| Placeholder           |                     Descrição                     |              Exemplo              | Output (para um boss de nível 10) |
|-----------------------|:-------------------------------------------------:|:---------------------------------:|-----------------------------------|
| `$level`              |               Substitui pelo nível                |        "$level Boss fixe"         | `10 Boss fixe`                    |
| `$normalLevel`        |   Substitui pelo nível, feito para mobs normais   |    `"$normalLevel Boss fixe"`     | `[10] Boss fixe`                  |
| `$minibossLevel`      |    Substitui pelo nível, feito para minibosses    |   `"$minibossLevel Boss fixe"`    | `〖10〗 Boss fixe`                  |
| `$bossLevel`          |      Substitui pelo nível, feito para bosses      |     `"$bossLevel Boss fixe"`      | `『10』 Boss fixe`                  |
| `$reinforcementLevel` |     Substitui pelo nível, feito para reforços     | `"$reinforcementLevel Boss fixe"` | `〔10〕 Boss fixe`                  |
| `$eventBossLevel`     | Substitui pelo nível, feito para bosses de evento |   `"$eventBossLevel Boss fixe"`   | `「10」 Boss fixe`                  |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &cBoss fixe!"
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

Ao dimensionar, `1.0` representa o tamanho padrão. Para tornar a entidade maior, aumente o valor (por exemplo, `1.2`).
Para tornar a entidade menor, diminua o valor (por exemplo, `0.8`).

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

Define que tipo de boss é. Isto é usado para exibir barras de vida de bosses e outros recursos.

| Chave | Valores | Padrão |
|-|:-:|-|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`, `BOSS`, `EVENT` farão com que o plugin exiba barras de vida quando os jogadores estão a lutar contra estes
tipos de boss.

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
Se quiser [disfarçar]($language$/elitemobs/libsdisguises.md) o boss, mas também quiser que ele permaneça um bebé
enquanto disfarçado (certifique-se de que a entidade de disfarce também suporta a variante bebé) pode usar esta
configuração:
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

Define a armadura do boss. Nem todos os modelos de minecraft conseguem exibir armadura. A armadura de boss é puramente
cosmética e não afeta a jogabilidade.

| Chave |                                    Valores                                     | Padrão |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [Material](#material), [UUID](https://minecraftuuid.com/)           | nenhum |
| `chestplate` | [Material](#material) | nenhum |
| `leggings` | [Material](#material) | nenhum |
| `boots` | [Material](#material) | nenhum |
| `mainHand` | [Material](#material) | nenhum |
| `offHand` | [Material](#material) | nenhum |

**Nota:** Este campo também permite definir modelos personalizados para itens. Para definir o ID do modelo
personalizado, adicione o ID após o tipo de material seguindo este formato: `ITEM_MATERIAL:ID`.
Exemplo: `DIAMOND_SWORD:1` define o boss para usar uma espada de diamante com o modelo personalizado #1 no seu pacote de
texturas.

**Nota 2:** Este campo também permite definir cores de couro personalizadas com o formato `ITEM_MATERIAL:CODE` onde o
código é a representação hexadecimal da cor. Exemplo: `LEATHER_LEGGINGS:ffa500` criaria leggings laranja. Pode usar
códigos hexadecimais, basta remover o `#` do código hexadecimal. Pode obter códigos
hexadecimais [aqui](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Nota 3:** O campo do capacete também permite definir capacetes de mob para serem cabeças de jogador. Basta obter o
UUID da cabeça de jogador que deseja usar e digitá-lo no campo do capacete. *O jogador precisa estar online para que
isso funcione ou a cabeça será padrão para uma cabeça MineCraft genérica.* Pode obter UUID's de
jogador [aqui](https://minecraftuuid.com/).

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

*Nota: Pode consultar [esta página]($language$/elitemobs/premade_powers.md) se quiser ver uma lista de poderes
pré-feitos que pode usar.*

***

### Configuração intermédia - Fazer aparecer reforços

Os reforços também vão para a categoria de poderes, usando as seguintes configurações:

<details> 

<summary><b>Configurações de reforço</b></summary>

| Chave          |                                                                        Descrição                                                                         |                                                                                                                      Valores                                                                                                                       | Padrão  |
|----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|---------|
| `summonType`   |                                                       O que ativa o spawn de reforço. Obrigatório.                                                       |                                                                                                              Consulte a lista abaixo                                                                                                               | nenhum  |
| `filename`     |                                         Nome do ficheiro do boss para fazer aparecer como reforço. Obrigatório.                                          |                                                                                                                 [String](#string)                                                                                                                  | nenhum  |
| `chance`       |                                                      Probabilidade de o reforço aparecer. Opcional.                                                      |                                                                                                                 [Double](#double)                                                                                                                  | `1.0`   |
| `amount`       |                                               Define a quantidade de reforços a fazer aparecer. Opcional.                                                |                                                                                                                [Integer](#integer)                                                                                                                 | `1`     |
| `inheritAggro` |                                                  Faz com que o reforço herde o aggro do boss. Opcional.                                                  |                                                                                                                  `true` / `false`                                                                                                                  | `false` |
| `spawnNearby`  |                                        Faz com que os reforços apareçam num raio de 30 blocos do boss. Opcional.                                         |                                                                                                                  `true` / `false`                                                                                                                  | `false` |
| `inheritLevel` |                                                  Faz com que o reforço herde o nível do boss. Opcional                                                   |                                                                                                                  `true` / `false`                                                                                                                  | `false` |
| `customSpawn`  | Faz com que o reforço apareça usando o [sistema de spawn personalizado]($language$/elitemobs/creating_spawns.md). Usado apenas para `summonType: GLOBAL` 
| `location`     |                                                             Localização do spawn. Opcional.                                                              | `nome_do_mundo,x,y,z` ou `x,y,z` para uma localização relativa ao boss. O deslocamento é relativo à localização do spawn para bosses regionais. Também pode usar `same_as_boss` para fazer com que os reforços apareçam no mesmo mundo que o boss. | nenhum  |
| `lightningRod` |    Configuração especial para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Faz com que os cristais do end apareçam relâmpagos à sua volta. Opcional.     |                                                                                                                  `true` / `false`                                                                                                                  | nenhum  |

</details>

Os tipos de summon definem as condições para o spawn de reforços. A seguir está uma lista dos tipos de summon válidos:

<details> 

<summary><b>Tipos de summon</b></summary>

| Valor                           |                                                                                  Descrição                                                                                  |
|---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE`                          |                                              Apenas faz aparecer os reforços uma vez, na primeira vez que o boss é danificado.                                              |
| `ON_HIT`                        |                                                                  Faz aparecer os reforços ao ser atingido.                                                                  |
| `ON_COMBAT_ENTER`               |                                                          Faz aparecer os reforços quando o boss entra em combate.                                                           |
| `GLOBAL`                        | Faz aparecer um reforço para cada jogador online. Requer que a chave `customSpawn` tenha um [spawn personalizado]($language$/elitemobs/creating_spawns.md) válido definido. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                Coloca reforços de cristais do end ao entrar em combate, apenas para uso com lutas de dragão personalizadas.                                 |

</details>

Observe que também é possível fazer aparecer reforços através
de [Scripts Elite]($language$/elitemobs/creating_powers.md), portanto, existem formas mais personalizáveis de fazer
aparecer reforços.

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

### Configuração de especialista - Criar os seus próprios poderes

É possível criar os seus próprios poderes, seja no próprio ficheiro de boss ou como um novo ficheiro de configuração na pasta de poderes. Pode aprender mais sobre isso [aqui]($language$/elitemobs/creating_powers.md).

### Limitar poderes com base na dificuldade de masmorra instanciada

As [masmorras instanciadas]($language$/elitemobs/dungeons.md&section=instanced-dungeons) podem ter configurações de
dificuldade, e é possível fazer com que um poder específico seja ativado apenas para dificuldades específicas.

<details> 

<summary><b>Opções de limitação de poder</b></summary>

<div align="left">

| Chave          |                                     Descrição                                     |      Valores      | Padrão |
|----------------|:---------------------------------------------------------------------------------:|:-----------------:|--------|
| `filename`     |                            Nome do ficheiro do poder.                             | [String](#string) | nenhum |
| `difficultyID` | Nome da dificuldade, correspondendo ao nome da dificuldade no pacote de masmorra. | [String](#string) | nenhum |

</div>

</details>

Isto aplicar-se-á apenas a masmorras instanciadas.

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

Define a mensagem a enviar quando o boss aparece. Requer a configuração
do [announcementPriority](#announcementPriority).

| Chave | Valores | Padrão |
|-|:-:|-|
| `spawnMessage` | [Strings](#string) e [códigos de cor](#color_codes) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: Eu ergo-me mais uma vez!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Define a lista de mensagens a enviar quando o boss morre. Requer a configuração
do [announcementPriority](#announcementPriority).

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
- '&4O Boss de Teste foi morto!'
- '&c&l    1º Dano: $damager1name &ccom $damager1damage dano!'
- '&6&l    2º Dano: $damager2name &6com $damager2damage dano!'
- '&e&l    3º Dano: $damager3name &ecom $damager3damage dano!'
- '&4Assassinos: $players'
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

| Valor             |                           Descrição                           |
|-------------------|:-------------------------------------------------------------:|
| `$damager1name`   |            O nome do jogador que causou mais dano             |
| `$damager2name`   |        O nome do segundo jogador que causou mais dano         |
| `$damager3name`   |        O nome do terceiro jogador que causou mais dano        |
| `$damager1damage` |     A quantidade de dano do jogador que causou mais dano      |
| `$damager2damage` | A quantidade de dano do segundo jogador que causou mais dano  |
| `$damager3damage` | A quantidade de dano do terceiro jogador que causou mais dano |
| `$players`        |    Exibe uma lista de todos os jogadores que causaram dano    |

</details>

### onKillMessage

Define a mensagem a enviar quando o boss mata um jogador. Requer a configuração
do [announcementPriority](#announcementPriority).

| Chave | Valores | Padrão |
|-|:-:|-|
| `onKillMessage` | [Strings](#string) e [códigos de cor](#color_codes) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: Eu ganho, tu perdes!
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

Define se o boss aparecerá como neutro ou não. Isto aplica-se apenas a tipos de entidades que podem ser neutros, como
Lobos ou Golems de Ferro.

</div>

| Chave | Valores | Padrão |
|-|:-:|-|
| `neutral` | [Boolean](#boolean) | `false` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
neutral: true
```

</div>

</details>

## Configurações avançadas

<div align="center">

### timeout

Define a quantidade de tempo, em minutos, antes que o Boss Personalizado desapareça.

| Chave | Valores | Padrão |
|-|:-:|-|
| `timeout` | Tempo (em minutos) [Integer](#integer) | `0` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
timeout: 20
```

Define o boss para escapar após 20 minutos.

</div>

</details>

***

### isPersistent

Define se o boss pode sobreviver a um unload de chunk. Apenas recomendado para bosses de eventos.

| Chave | Valores | Padrão |
|-|:-:|-|
| `isPersistent` | `true` / `false` | `false` |
```
```markdown
</details>

***

### isPersistent

Define se o boss pode sobreviver a um unload de chunk. Apenas recomendado para bosses de eventos.

| Chave | Valores | Padrão |
|-|:-:|-|
| `isPersistent` | `true` / `false` | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

Exemplo:

```yml
isPersistent: true
```

</div>

</details>

***

### damageModifiers

Define armas contra as quais os bosses podem ser fortes ou fracos.

| Chave |        Valores         | Padrão |
|-|:---------------------:|-|
| `damageModifiers` | [Material](#material) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

Neste exemplo, os bosses receberão apenas 80% de dano de espadas de diamante (ou 20% menos), mas receberão 200% de dano
de tridentes (ou 2x mais).

</details>

***

### normalizedCombat

Modifica o dano e a vida máxima do boss para corresponder aos valores da entidade normalizada em `~/plugins/EliteMobs/mobproperties`. Este é o padrão para bosses regionais para garantir uma curva de dificuldade suave.

| Chave | Valores | Padrão |
|-|:-:|-|
| `normalizedCombat` | `true` / `false` | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

Exemplo:
```yml
normalizedCombat: true
```

</div>

</details>

***

### escapeMessage

Define a mensagem que é transmitida aos jogadores quando o boss escapa através do mecanismo de [timeout](#timeout).
Requer que o [announcementPriority](#announcementPriority) esteja configurado.

| Chave | Valores | Padrão |
|-|:-:|-|
| `escapeMessage` | [String](#string) | nenhum |


<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
timeout: 60
escapeMessage: "Sayonara!"
```

<div align="center">

![create_boss_escape_message.jpg](../../../img/wiki/create_boss_escape_message.jpg)

</div>

</div>

</details>

***

### locationMessage

Define a mensagem a mostrar na barra de boss. Isto é usado para rastrear a vida de Bosses Personalizados e a sua
localização no servidor. Requer que o [annoucementPriority](#annoucementPriority) esteja configurado.

| Chave             |                                       Valores                                       | Padrão |
|-------------------|:-----------------------------------------------------------------------------------:|--------|
| `locationMessage` | [String](#string), [códigos de cor](#color_codes) e os placeholders listados abaixo | nenhum |

Placeholders:

| Valor | Descrição |
|-|:-:|
| `$distance` | É substituído pela distância que o jogador está do Boss Personalizado. Esta é a opção preferível. |
| `$location` | É substituído pelas coordenadas de localização x y z do Boss Personalizado |


<details>


<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Boss fixe: Em $location apenas a $distance blocos de distância!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Isto mostraria algo como `Boss fixe: Em 414,55,347 apenas a 10 blocos de distância!`

</details>

***

### uniqueLootList

Define os [Itens Personalizados]($language$/elitemobs/creating_items.md) que aparecem do boss.

| Chave |        Valores        | Padrão |
|-|:--------------------:|-|
| `uniqueLootList` | [Lista](#string_list) | nenhum |

As entradas de loot no Loot Personalizado seguem o formato da Tabela de
Loot. [Informações sobre isso aqui!]($language$/elitemobs/loot_tables.md) Tome nota que alguns ficheiros mais antigos
podem estar a usar tabelas de loot desatualizadas que parecem diferentes do exemplo.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.02
  - minecraft:type=DIAMOND:amount=1:chance=0.9
  - SCRAP:level=5-10:amount=10-20:ignorePlayerLevel=false:chance=0.5
  - UPGRADE_ITEM:level=5-10:amount=1-2:ignorePlayerLevel=false:chance=0.1
  - magmaguys_toothpick.yml:0.5:elitemobs.*
```

</div>

</details>

***

### dropsEliteMobsLoot

Define se o boss irá largar loot EliteMobs, excluindo itens em [`uniqueLootList`](#uniqueLootList). Inclui moedas.

| Chave | Valores | Padrão |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Recomendado definir como false para mobs de reforço.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">


```yml
dropsEliteMobsLoot: true
```

</div>

</details>

***

### dropsVanillaLoot

Define se o Boss Personalizado irá largar o loot vanilla geralmente associado ao seu tipo de mob vanilla.

| Chave | Valores | Padrão |
|-|:-:|-|
| `dropsVanillaLoot` | `true` /  `false` | `true` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dropsVanillaLoot: true
```

</div>

</details>

***

### dropsRandomLoot

Define se o Boss Personalizado irá largar loot gerado processualmente do EliteMobs. Não inclui moedas de elite.

| Chave | Valores | Padrão |
|-|:-:|-|
| `dropsRandomLoot` | `true` /  `false` | `true` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dropsRandomLoot: true
```

</div>

</details>

***

### trails

Define o rastro que o boss deixa para trás ao se mover.

| Chave | Valores | Padrão |
|-|:-:|-|
| `trails` | [Partículas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) ou [materiais de item](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
trails:
- CLOUD
```

</div>

</details>

***

### onDamageMessages

Define a mensagem que o Mob Boss exibe quando atinge um jogador. Esta é uma lista, e a usada é aleatória da lista.

| Chave |        Valores        | Padrão |
|-|:--------------------:|-|
| `onDamageMessages` | [Lista](#string_list) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onDamageMessages:
- "Eu atingi-te!"
- "Haha eu atingi-te!"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Define a mensagem que o Mob Boss exibe quando é danificado por um jogador. Esta é uma lista, e a usada é aleatória da
lista.

| Chave |        Valores        | Padrão |
|-|:--------------------:|-|
| `onDamagedMessages` | [Lista](#string_list) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "Tu atingiste-me!"
- "Eu fui atingido!"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Define a entidade que o boss irá montar e cavalgar.

| Chave               |                                                                     Valores                                                                      | Padrão |
|---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------:|--------|
| `onDamagedMessages` | [Nome do ficheiro do boss a montar](#filename) ou [tipo de entidade](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | nenhum |

Não tente fazer o boss montar-se a si mesmo.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
mountedEntity: wild_wolf.yml
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_mounted.jpg)

</div>

</div>

</details>

Nota: Os bosses regionais compartilharão a sua trela com a entidade que estão a montar, o que significa que ambos serão
arrastados de volta para a localização do spawn se excederem a distância permitida pela sua trela.

***

### announcementPriority

Define o nível de prioridade para anúncios. Prioridades mais baixas significam que não são feitos anúncios, prioridades
mais altas podem anunciar não só no chat, mas também no discord se configurado.

| Chave | Valores | Padrão |
|-|:-:|-|
| `announcementPriority` | [Integer](#integer) | `1` |

Aqui está uma lista do que as prioridades fazem:

| Valor |                                                                                     Descrição                                                                                      |
|-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0`   |                                                           O boss estará totalmente silencioso, sem mensagens de anúncio.                                                           |
| `1`   |                                 Este é o padrão. Os bosses podem enviar mensagens de chat, na mensagem de spawn, nas mensagens de morte e de fuga.                                 |
| `2`   |                                      Além das coisas em `1`, o boss será definido para ser rastreável pelos jogadores através do menu `/em`.                                       |
| `3`   | Além das coisas em `2`, as mensagens de transmissão serão espelhadas no Discord se configurado. [Informações de configuração do Discord aqui.]($language$/elitemobs/discordsrv.md) |

Aqui está um exemplo de um boss que é rastreável, que é capaz de enviar mensagens de spawn/morte/fuga no chat e no
Discord:

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Nota**: Terá de configurar o spawnMessage, deathMessage/deathMessages, escapeMessage para anúncios de chat e discord e
o locationMessage para o recurso de rastreamento se desejar usar o nível de Prioridade de Anúncio correspondente.

***

### followDistance

Define a distância na qual os bosses fazem aggro e entram em combate.

| Chave            |      Valores      | Padrão                           |
|------------------|:-----------------:|----------------------------------|
| `followDistance` | [Double](#double) | nenhum, usa padrões do Minecraft |

Nota 1: Os bosses regionais têm metade do `followDistance` quando fora de combate. Isto é para que não façam aggro de
muito longe, o que pode causar problemas de combate irritantes devido a restrições de trela.

Nota 2: Quanto maior o `followDistance`, mais intenso para o CPU do servidor o boss se torna. Use com cuidado e
responsabilidade!

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Define um alcance de 30 blocos onde, se um jogador ficar dentro dessa distância perto do boss, ele começará a
perseguir/atacar o jogador.

</details>

***

### onDeathCommands

Define a lista de comandos a executar na morte do boss personalizado.

| Chave |        Valores        | Padrão |
|-|:--------------------:|-|
| `onDeathCommands` | [Lista](#string_list) | nenhum |

A lista suporta os seguintes placeholders:

| Valor           |                                                                            Descrição                                                                             |
|-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `$level`        |                                                                Placeholder para o nível do boss.                                                                 |
| `$name`         |                                                                 Placeholder para o nome do boss.                                                                 |
| `$chance=x$`    |                                                 Faz com que um comando tenha uma probabilidade de ser executado.                                                 |
| `$players`      | Faz com que o comando seja executado uma vez para cada jogador na lista de danos e substitui cada vez com o nome de usuário de um jogador diferente nessa lista. |
| `$locationX`    |                                                            Coordenada X do boss no momento da morte.                                                             |
| `$locationY`    |                                                            Coordenada Y do boss no momento da morte.                                                             |
| `$locationZ`    |                                                            Coordenada Z do boss no momento da morte.                                                             |
| `$damager1name` |                                                         Nome de usuário do jogador que causou mais dano                                                          |
| `$damager2name` |                                                     Nome de usuário do segundo jogador que causou mais dano                                                      |
| `$damager3name` |                                                     Nome de usuário do terceiro jogador que causou mais dano                                                     |

Dê uma olhada no exemplo abaixo para ter uma melhor compreensão de como eles funcionam.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players matou $name! Isso foi nível $level!"
- "$chance=0.5$ say Que morte!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Se o Jogador1, o Jogador2 e o Jogador3 todos danificaram o boss antes de o matar, isto é o que a saída do comando será
da consola:

<div align="left">

```
say Jogador1 matou CustomBossName! Isso foi nível X!
say Jogador2 matou CustomBossName! Isso foi nível X!
say Jogador3 matou CustomBossName! Isso foi nível X!
```

</div>

Além disso, há uma chance de 50% de que o seguinte também seja produzido:

<div align="left">

```
say Que morte!
```

</div>

</details> 

***

### onSpawnCommands

Define a lista de comandos que serão executados no spawn do boss.

| Chave |        Valores        | Padrão |
|-|:--------------------:|-|
| `onSpawnCommands` | [Lista](#string_list) | nenhum |

**Isto usa os mesmos placeholders que [onDeathCommands](#onDeathCommands)!** Os placeholders de danos não se aplicarão,
pois não haverá nenhum jogador com dano neste momento.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say O Boss apareceu!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

Define a lista de comandos que serão executados quando o boss entrar em combate.

| Chave | Valores | Padrão |
|-|:-:|-|
| `onCombatEnterCommands` | [Lista](#string_list) | nenhum |

**Isto usa os mesmos placeholders que [onDeathCommands](#onDeathCommands)!** Os placeholders de danos não se aplicarão,
pois não haverá nenhum jogador com dano neste momento.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say O Boss entrou em combate!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

Define a lista de comandos a executar quando o boss sai do combate.

| Chave | Valores | Padrão |
|-|:-:|-|
| `onCombatLeaveCommands` | [Lista](#string_list) | nenhum |

**Isto usa os mesmos placeholders que [onDeathCommands](#onDeathCommands)!**

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say O Boss saiu do combate!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

Define o disfarce do LibsDisguises se esse plugin estiver
ativo. [Mais informações aqui.]($language$/elitemobs/libsdisguises.md)

| Chave | Valores | Padrão |
|-|:-:|-|
| `disguise` | [String](#string) | nenhum |
| `customDisguiseData` | [String](#string) | nenhum |

<details> 

<summary><b>Exemplo de disfarce</b></summary>

<div align="left">

```yml
disguise: CHICKEN
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_disguise.jpg)

</div>

</div>

</details>

<details> 

<summary><b>Exemplo de disfarce personalizado</b></summary>

<div align="left">

```yml
disguise: custom:the_beast_sanctuary_beast
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

Define um disfarce personalizado do skindex. [Verifique esta página]($language$/elitemobs/libsdisguises.md) para
aprender como formatar corretamente estes dados.

</details>

***

### customModel

Define o modelo personalizado a usar, se tiver um modelo personalizado e
ModelEngine. [Mais informações aqui.]($language$/elitemobs/custom_models.md)

| Chave | Valores | Padrão |
|-|:-:|-|
| `customModel` | [String](#string) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customModel: o_seu_modelo
```

</div>

</details>

***

### frozen

Define se o boss se pode mover. Bosses congelados ainda podem atacar.
</br>*Nota: isto pode não funcionar em algumas entidades.*

| Chave | Valores | Padrão |
|-|:-:|-|
| `frozen` | `true` / `false` | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
frozen: true
```

</div>

</details>

***

### song

Define a música que um boss tocará, começando quando ele aparece. Requer o ficheiro .ogg para a música estar no pacote
de recursos.

| Chave | Valores | Padrão |
|-|:-:|-|
| `song` | [String](#string) | nenhum |

**Nota: A configuração `song` requer que o `followDistance` seja definido, pois `followDistance` determina o alcance em
que a música começa a tocar.**
Verifique o exemplo sobre como definir o `length` (milissegundos) da `song`.

<details> 

<summary><b>Exemplo</b></summary>

Existem duas maneiras de configurar músicas. Aqui está a primeira:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Isto irá tocar a música ice_queen.idle por 76370 milissegundos e depois fará um loop. Observe que a localização da
música é determinada pelo pacote de recursos.

Aqui está a segunda maneira de configurar músicas:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Isto irá tocar a música ice_queen.end_transition por 14328 milissegundos e depois fará a transição para
ice_queen.end_loop por 28657 milissegundos e fará um loop do end_loop.

Isto permite que os bosses tenham uma música de "intro" ou "transição" e depois uma faixa principal que se repete.

</div>

</details>

***

### cullReinforcements

Define se os reforços do boss serão removidos quando o boss morrer.

| Chave | Valores | Padrão |
|-|:-:|-|
| `cullReinforcements` | `true` / `false` | `true` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
cullReinforcements: true
```

</div>

</details>

***

### movementSpeedAttribute

Define a velocidade de movimento do boss.
</br>*Nota: qualquer coisa além de 0.36 pode ser muito rápido.*

| Chave | Valores | Padrão |
|-|:-:|-|
| `movementSpeedAttribute` | [Double](#double) | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
movementSpeedAttribute: 0.3
```

</div>

</details>

## Fases de boss

<div align="center">

Os bosses podem ter fases que mudam quando o boss atinge uma certa porcentagem de vida. Quando isto acontece, o boss
começa a usar um ficheiro de configuração diferente, o que significa que tudo sobre o boss pode mudar, incluindo coisas
como o tipo de entidade.
</br>Para aprender mais sobre fases de boss clique [aqui]($language$/elitemobs/creating_boss_phases.md).


| Chave                |                  Descrição                   | Valores               | Padrão |
|----------------------|:--------------------------------------------:|-----------------------|--------|
| `phases`             | Define as fases que o boss terá. Obrigatório | [Lista](#string_list) | nenhum |
| `phaseSpawnLocation` | Define onde o boss da fase aparece. Opcional | [String](#string)     | nenhum |


<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

Para este exemplo, vamos mostrar três ficheiros de configuração diferentes.

Primeiro ficheiro de configuração de boss: phase_1_boss.yml

```yml
name: "Fase 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Segundo ficheiro de configuração de boss: phase_2_boss.yml

```yml
name: "Fase 2"
entityType: SKELETON
```

Terceiro ficheiro de configuração de boss: phase_3_boss.yml

```yml
name: "Fase 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

Este boss mudaria para o ficheiro de configuração `phase_2_boss.yml` com 60% de vida e para o ficheiro de
configuração `phase_3_boss.yml` com 30% de vida no mesmo mundo que a fase 2 e nas coordenadas x=10, y=64 e z=100. O tipo
de entidade e o nome do boss também mudariam.

O formato para uma entrada é `nome_do_ficheiro:porcentagemDeVida`.

phaseSpawnLocation é opcional, se não for definido, o boss mudará de fase onde estiver.

</details>

As seguintes coisas são importantes saber ao criar um boss de fase:

<div align="left">

- O ficheiro de configuração para a primeira fase define todas as fases do boss.
```
- A ameaça / dano contado é mantido entre as fases para os jogadores.
- A mudança de fases é baseada na porcentagem de vida perdida, que é preservada ao mudar para uma fase diferente. Isto significa que aumentar ou diminuir o healthMultiplier entre as fases não irá curar ou danificar o boss, ele ainda mudará com a mesma porcentagem, mas terá mais ou menos vida para essa fase.
- Bosses de fase revertem para a fase 1 se saírem de combate.
- Os bosses de fase que também são bosses regionais compartilham o mesmo raio de trela e mecanismo de timeout em todas as fases e ressurgirão como o boss da fase 1 quando o temporizador terminar.
- O ficheiro de configuração para a última fase define o loot para o boss.
- As fases não podem ser ignoradas - o dano de overkill ainda fará com que o boss mude de fase na porcentagem definida.
- Os bosses de fase que têm montarias deixam de ser montados ao mudar de fase.

</div>

</div>

</div>

***

## Bosses regionais

<div align="center">

Bosses regionais são um tipo específico de Bosses Personalizados que aparecem em um local específico configurado e são capazes de reaparecer nesse local após um atraso. Além disso, eles podem ter trelas que garantem que eles fiquem em uma zona específica, entre outros recursos.

Eles são usados para todo o conteúdo da masmorra. Para saber mais sobre bosses regionais, clique [aqui]($language$/elitemobs/creating_world_bosses.md).

| Chave | Descrição | Valores | Padrão |
|-|:-:|:-:|-|
| `isRegionalBoss` | Define se o boss é regional. Deve ser verdadeiro se quiser um boss regional.  | `true` /  `false` | `false` |
| `spawnLocation` | Define as localizações de spawn do boss.  | Adicione-as através do comando `/em addSpawnLocation [filename.yml]`! | nenhum |
| `spawnCooldown` | Define o cooldown de respawn do boss, em <b>minutos</b>. | [Integer](#integer) | `0` |
| `leashRadius` | Define a distância que o boss pode percorrer do seu ponto de spawn antes de ser puxado para trás. | [Double](#double) | nenhum |
| `onSpawnBlockStates` | Define os blocos que o boss irá modificar quando aparecer. | Verifique os comandos abaixo | nenhum |
| `onRemoveBlockStates` | Define os blocos que o boss irá modificar quando desaparecer. | Verifique os comandos abaixo | nenhum |

Conforme indicado, os Bosses Regionais podem ter `onSpawnBlockStates` e `onRemoveBlockStates`.

Este é um recurso muito útil para modificar arenas de combate durante o combate, especialmente quando combinado com mudanças de fase, pois torna-se possível abrir e fechar arenas de combate através da alteração dos estados dos blocos.

O formato para estes é muito complexo para escrever manualmente, por isso existem alguns comandos para o ajudar a configurá-los:

| Comando | Descrição |
|-|:-:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove] | Começa a registar seleções manuais de blocos para estados de blocos on spawn ou on remove. |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove] | Edita os estados de bloco on spawn ou on remove. |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove] | Permite que os administradores selecionem grandes áreas de blocos para salvar como estados. |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] | Permite que os administradores editem grandes áreas de blocos para salvar como estados. |

<details> 

<summary><b>Exemplo de uso:</b></summary>

<div align="left">

Digamos que quer fazer uma luta onde um boss aparece numa arena que tem uma porta aberta e quer fazer com que a porta feche quando a luta começa e reabra quando a luta termina.

Para fazer isso, precisará de duas fases de boss e para registar três conjuntos diferentes de estados de bloco. Para este exemplo, irei nomear essas fases phase_1_boss.yml e phase_2_boss.yml, respetivamente.

1) Use `/em registerblocks phase_1_boss.yml on_spawn` ou `/em registerblocksedit phase_1_boss.yml on_spawn` para registar os blocos da porta no seu estado aberto.

Isto significa registar os blocos de ar. A seleção de área é recomendada aqui.

Isto é necessário para garantir que a porta esteja aberta quando o boss aparece, para que os jogadores tenham garantia de ter uma entrada.

2) Use `/em registerblocks phase_2_boss.yml on_spawn` ou `/em registerblocksedit phase_2_boss.yml on_spawn` para registar os blocos da porta no seu estado fechado.

Isto significa registar os blocos sólidos da porta que impediriam o jogador de sair.

Isto é necessário para mudar a porta para sólida quando o boss entra na fase 2, impedindo que os jogadores saiam.

3) Use `/em registerblocks phase_2_boss.yml on_remove` ou `/em registerblocksedit phase_2_boss.yml on_remove` para registar os blocos da porta no seu estado aberto.

Isto significa registar os mesmos blocos da primeira etapa novamente (os blocos de ar).

Isto é necessário para abrir a porta quando o boss morre, permitindo que os jogadores saiam da arena.

</div>

</details>

</div>

***

### alert

<div align="center">

Define se o boss está alerta. Por padrão, os Bosses Regionais são desacelerados e têm uma distância de aggro mais curta quando estão fora de combate. Esta configuração impede que os Bosses Regionais sejam desacelerados e tenham uma distância de aggro mais curta enquanto fora de combate, para que se comportem sempre da mesma forma dentro ou fora de combate.

</div>

| Chave | Valores | Padrão |
|-|:-:|-|
| `alert` | [Boolean](#boolean) | `true` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
alert: true
```

</div>

</details>

***

### removeAfterDeath

<div align="center">

Define se o Boss Regional será permanentemente excluído depois de ser morto. É isso que o BetterStructures usa para
Santuários, onde o Boss Regional foi projetado apenas para ser combatido uma vez e nunca mais naquele local.

</div>

| Chave | Valores | Padrão |
|-|:-:|-|
| `removeAfterDeath` | [Boolean](#boolean) | `false` |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
removeAfterDeath: true
```

</div>

</details>

***

## Bosses instanciados

<div align="center">

Bosses instanciados são um subtipo de Bosses Regionais usados em Masmorras Instanciadas.

| Chave       |                      Descrição                       | Valores          | Padrão  |
|-------------|:----------------------------------------------------:|------------------|---------|
| `instanced` | Torna o boss personalizado instanciado. Obrigatório. | `true` / `false` | `false` |

Definir bosses para instanciados é obrigatório para que as masmorras instanciadas funcionem corretamente. Também
recomendamos a remoção de trelas para quaisquer bosses instanciados.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
```