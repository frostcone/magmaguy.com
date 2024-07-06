[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criar Bosses Personalizados

# Antes de começar

## Para onde vão os arquivos de boss?

Os arquivos de boss vão para a pasta de configuração `~/plugins/EliteMobs/custombosses`.

É possível criar subpastas, como `~/plugins/EliteMobs/custombosses/mybosses`. Isso é recomendado para manter as coisas organizadas.

Um arquivo define um boss, embora seja possível gerar o mesmo boss várias vezes e até definir vários locais de geração para o mesmo arquivo de boss.

É possível usar o [webapp](https://magmaguy.com/webapp/webapp.html) para criar bosses personalizados de forma rápida e fácil, e muito mais.

## Menor configuração possível

**O menor arquivo de configuração possível para um Boss Personalizado é:**
```yml
```

Observe que este é apenas um arquivo vazio. Isso ainda irá gerar um boss personalizado zumbi com um nome personalizado, pois esses são os padrões. **Tudo nesta página é opcional!**

## Exemplo de boss

<div align="center">

Vamos dar uma olhada em um exemplo de como é um arquivo de boss.

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
spawnMessage: Um boss de teste foi gerado!
deathMessage: Um boss de teste foi morto por $players!
escapeMessage: Uma entidade de boss de teste escapou!
locationMessage: 'Entidade de teste: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "Acertei em você!"
onDamagedMessages:
- "Fui atingido!"
```

</div>

</details>

</div>


## Configurações básicas

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
| `name` | [String](#string), aceita [códigos de cores](#color_codes) e os espaços reservados listados abaixo | "Nome Padrão" |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &cBoss legal!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Se você deseja incluir o nível do boss no campo de nome, basta usar um dos seguintes espaços reservados.

| Espaço reservado | Descrição | Exemplo |Saída (para um boss de nível 10) |
|-|:-:|:-:|-|
| `$level` | Substitui pelo nível | "$level Boss legal" | `10 Boss legal` |
| `$normalLevel` | Substitui pelo nível, feito para mobs normais | `"$normalLevel Boss legal"` | `[10] Boss legal` |
| `$minibossLevel` | Substitui pelo nível, feito para minibosses | `"$minibossLevel Boss legal"` | `〖10〗 Boss legal` |
| `$bossLevel` | Substitui pelo nível, feito para bosses | `"$bossLevel Boss legal"` | `『10』 Boss legal` |
| `$reinforcementLevel` | Substitui pelo nível, feito para reforços | `"$reinforcementLevel Boss legal"` | `〔10〕 Boss legal` |
| `$eventBossLevel` | Substitui pelo nível, feito para bosses de eventos | `"$eventBossLevel Boss legal"` | `「10」 Boss legal` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &cBoss legal!"
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
| `entityType` | Números [inteiros](#integer) positivos ou `dynamic` | `dynamic` |

`dynamic` é usado para eventos e se ajusta ao nível dos jogadores próximos no momento da geração do boss.
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

### healthMultiplier

Define a saúde do boss.

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

Define se o boss usa a variante bebê do mob. Só pode ser aplicado a mobs com variantes de bebês.
Se você gostaria de [disfarçar]($language$/elitemobs/libsdisguises.md) o boss, mas gostaria que ele também permanecesse um bebê enquanto disfarçado (certifique-se de que a entidade de disfarce também suporte a variante bebê), você pode usar esta configuração:
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

Define a armadura do boss. Nem todos os modelos do Minecraft são capazes de mostrar armadura. A armadura do boss é puramente cosmética e não afeta a jogabilidade.

| Chave |                                    Valores                                     | Padrão |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [Material](#material), [UUID](https://minecraftuuid.com/)           | nenhum |
| `chestplate` | [Material](#material) | nenhum |
| `leggings` | [Material](#material) | nenhum |
| `boots` | [Material](#material) | nenhum |
| `mainHand` | [Material](#material) | nenhum |
| `offHand` | [Material](#material) | nenhum |

**Nota:** Este campo também permite definir modelos personalizados para itens. Para definir o ID do modelo personalizado, adicione o ID após o tipo de material seguindo este formato: `ITEM_MATERIAL:ID`. Exemplo: `DIAMOND_SWORD:1` define que o boss use uma espada de diamante com o modelo personalizado nº 1 no seu pacote de textura.

**Nota 2:** Este campo também permite definir cores de couro personalizadas com o formato `ITEM_MATERIAL:CODE`, onde o código é a representação hexadecimal da cor. Exemplo: `LEATHER_LEGGINGS:ffa500` criaria leggings laranja. Você pode usar códigos hexadecimais, basta remover o `#` do código hexadecimal. Você pode obter códigos hexadecimais [aqui](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Nota 3:** O campo do capacete também permite definir capacetes de mob como cabeças de jogador. Basta obter o UUID da cabeça do jogador que você gostaria de usar e digitá-lo no campo do capacete. *O jogador precisa estar online para que isso funcione ou a cabeça será definida como uma cabeça genérica do Minecraft.* Você pode obter UUIDs de jogadores [aqui](https://minecraftuuid.com/).

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

Define os poderes que o boss possui.

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

*Nota: Você pode conferir [esta página]($language$/elitemobs/premade_powers.md) se quiser ver uma lista de poderes pré-fabricados que você pode usar.*

***

### Configuração intermediária - Gerando reforços

Os reforços também vão para a categoria de poderes, usando as seguintes configurações:

<details> 

<summary><b>Configurações de reforço</b></summary>

| Chave | Descrição |                                                                                                             Valores                                                                                                             | Padrão |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | O que desencadeia a geração de reforços. Obrigatório. |                                                                                                    Consulte a lista abaixo                                                                                                     | nenhum |
| `filename` | Nome do arquivo do boss para gerar como reforço. Obrigatório. |                                                                                                       [String](#string)                                                                                                        | nenhum |
| `chance` | Chance de geração do reforço. Opcional. |                                                                                                       [Double](#double)                                                                                                        | `1.0` |
| `amount` | Define a quantidade de reforços a serem gerados. Opcional. |                                                                                                      [Inteiro](#integer)                                                                                                       | `1` |
| `inheritAggro` | Faz o reforço herdar o aggro do boss. Opcional. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | Faz os reforços gerarem em um raio de 30 blocos do boss. Opcional. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | Faz o reforço herdar o nível do boss. Opcional |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | Faz o reforço gerar usando o [sistema de geração personalizado]($language$/elitemobs/creating_spawns.md). Usado apenas para `summonType: GLOBAL`
| `location` | Local de geração. Opcional. | `world_name,x,y,z` ou `x,y,z` para um local relativo ao boss. O deslocamento é relativo ao local de geração para bosses regionais. Você também pode usar `same_as_boss` para fazer os reforços gerarem no mesmo mundo que o boss. | nenhum |
| `lightningRod` | Configuração especial para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Faz com que cristais finais gerem raios ao redor deles. Opcional. |                                                                                                        `true` / `false`                                                                                                        | nenhum |

</details>

Os tipos de invocação definem as condições para a geração de reforços. A seguir está uma lista dos tipos de invocação válidos:

<details> 

<summary><b>Tipos de invocação</b></summary>

| Valor |                                                                         Descrição                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          Gera os reforços apenas uma vez, na primeira vez que o boss for danificado.                                           |
| `ON_HIT`  |                                                              Gera os reforços ao ser atingido.                                                              |
| `ON_COMBAT_ENTER` |                                                   Gera os reforços quando o boss entra em combate.                                                    |
| `GLOBAL` | Gera um reforço para cada jogador online. Requer que a chave `customSpawn` tenha um [local de geração personalizado]($language$/elitemobs/creating_spawns.md) válido definido. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 Coloca reforços de cristal final na entrada de combate, apenas para uso com lutas de dragão personalizadas.                                  |

</details>

Observe que também é possível gerar reforços através de [Elite Scripts]($language$/elitemobs/creating_powers.md), então existem maneiras mais personalizáveis de gerar reforços.

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

### Configuração avançada - Criando seus próprios poderes

É possível criar seus próprios poderes, seja no próprio arquivo do boss ou como um novo arquivo de configuração na pasta de poderes. Você pode aprender mais sobre isso [aqui]($language$/elitemobs/creating_powers.md).

### Limitando poderes com base na dificuldade da masmorra instanciada

[Masmorras instanciadas]($language$/elitemobs/dungeons.md&section=instanced-dungeons) podem ter configurações de dificuldade, e é possível fazer com que um poder específico só seja ativado para dificuldades específicas.

<details> 

<summary><b>Opções de limitação de poder</b></summary>

<div align="left">

| Chave | Descrição | Valores | Padrão |
|-|:-:|:-:|-|
| `filename` | Nome do arquivo do poder. | [String](#string) | nenhum |
| `difficultyID` | Nome da dificuldade, correspondendo ao nome da dificuldade no pacote da masmorra. | [String](#string) | nenhum |

</div>

</details>

Isso só se aplicará a masmorras instanciadas.

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

Define a mensagem a ser enviada quando o boss é gerado. Requer a configuração da [announcementPriority](#announcementPriority).

| Chave | Valores | Padrão |
|-|:-:|-|
| `spawnMessage` | [Strings](#string) e [códigos de cores](#color_codes) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: Eu me levanto mais uma vez!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Define a lista de mensagens a serem enviadas quando o boss morre. Requer a configuração da [announcementPriority](#announcementPriority).

| Chave | Valores | Padrão |
|-|:-:|-|
| `deathMessages` | [Strings](#string), [códigos de cores](#color_codes) e os espaços reservados abaixo | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4O Boss de Teste foi morto!'
- '&c&l    1º Atacante: $damager1name &ccom $damager1damage de dano!'
- '&6&l    2º Atacante: $damager2name &6com $damager2damage de dano!'
- '&e&l    3º Atacante: $damager3name &ecom $damager3damage de dano!'
- '&4Assassinos: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

As mensagens de morte usam os seguintes espaços reservados:

<details> 

<summary><b>Espaços reservados</b></summary>

| Valor | Descrição |
|-|:-:|
| `$damager1name` | O nome do maior atacante |
| `$damager2name` | O nome do segundo maior atacante |
| `$damager3name` | O nome do terceiro maior atacante |
| `$damager1damage` | A quantidade de dano do maior atacante |
| `$damager2damage` | A quantidade de dano do segundo maior atacante |
| `$damager3damage` | A quantidade de dano do terceiro maior atacante |
| `$players` | Exibe uma lista de todos os atacantes |

</details>

### onKillMessage

Define a mensagem a ser enviada quando o boss mata um jogador. Requer a configuração da [announcementPriority](#announcementPriority).

| Chave | Valores | Padrão |
|-|:-:|-|
| `onKillMessage` | [Strings](#string) e [códigos de cores](#color_codes) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: Eu ganhei, você perdeu!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### slimeSize

<div align="center">

Define o tamanho do boss slime, mas funciona apenas para Slimes e Magmacubes.

</div>

| Chave | Valores | Padrão |
|-|:-:|-|
| `slimeSize` | [Inteiro](#integer) | `4` |

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

Define se o boss será gerado como neutro ou não. Isso se aplica apenas a tipos de entidade que podem ser neutras, como Lobos ou Golems de Ferro.

</div>

| Chave | Valores | Padrão |
|-|:-:|-|
| `neutral` | [Booleano](#boolean) | `false` |

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
| `timeout` | Tempo (em minutos) [Inteiro](#integer) | `0` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
timeout: 20
```
Define que o boss escape após 20 minutos.

</div>

</details>

***

### isPersistent

Define se o boss pode sobreviver a um descarregamento de pedaço. Recomendado apenas para bosses de eventos.

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

Neste exemplo, os bosses receberão apenas 80% de dano de espadas de diamante (ou 20% menos), mas receberão 200% de dano de tridentes (ou 2x mais).

</details>

***

### normalizedCombat





Modifica o dano e a saúde máxima do boss para corresponder aos valores da entidade normalizada em `~/plugins/EliteMobs/mobproperties`. Este é o padrão para bosses regionais para garantir uma curva de dificuldade suave.

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

Define a mensagem que é transmitida aos jogadores quando o boss escapa através da mecânica de [timeout](#timeout). Requer que [announcementPriority](#announcementPriority) seja configurado.

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

Define a mensagem que é mostrada na barra de boss. Isso é usado para rastrear a saúde do Boss Personalizado e sua localização no servidor. Requer que [annoucementPriority](#annoucementPriority) seja configurado.

| Chave |                                      Valores                                      | Padrão |
|-|:--------------------------------------------------------------------------------:|-|
| `locationMessage` | [String](#string), [Códigos de cores](#color_codes) e os espaços reservados listados abaixo | nenhum |

Espaços reservados:

| Valor | Descrição |
|-|:-:|
| `$distance` | É substituído pela distância que o jogador está do Boss Personalizado. Esta é a opção preferível. |
| `$location` | É substituído pelas coordenadas de localização x y z do Boss Personalizado |


<details>


<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Boss legal: Em $location a apenas $distance blocos de distância!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Isso mostraria algo como `Boss legal: Em 414,55,347 a apenas 10 blocos de distância!`

</details>

***

### uniqueLootList

Define os [Itens Personalizados]($language$/elitemobs/creating_items.md) que caem do boss.

| Chave |        Valores        | Padrão |
|-|:--------------------:|-|
| `uniqueLootList` | [Lista](#string_list) | nenhum |

As entradas de loot no Loot Personalizado seguem o formato da Tabela de Loot. [Informações sobre isso aqui!]($language$/elitemobs/loot_tables.md) Observe que alguns arquivos mais antigos podem estar usando tabelas de loot desatualizadas que parecem diferentes do exemplo.

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

Define se o boss irá dropar loot do EliteMobs, excluindo itens em [`uniqueLootList`](#uniqueLootList). Inclui moedas.

| Chave | Valores | Padrão |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Recomendado definir como falso para mobs de reforço.

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

Define se o Boss Personalizado irá dropar o loot vanilla normalmente associado ao seu tipo de mob vanilla.

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

Define se o Boss Personalizado irá dropar loot gerado processualmente do EliteMobs. Não inclui moedas de elite.

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

Define a trilha que o boss deixa para trás ao se mover.

| Chave | Valores | Padrão |
|-|:-:|-|
| `trails` | [Partículas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) ou [materiais de itens](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | nenhum |

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

Define a mensagem que o Mob Boss exibe quando atinge um jogador. Esta é uma lista, e a usada é escolhida aleatoriamente da lista.

| Chave |        Valores        | Padrão |
|-|:--------------------:|-|
| `onDamageMessages` | [Lista](#string_list) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onDamageMessages:
- "Acertei em você!"
- "Haha, acertei em você!"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Define a mensagem que o Mob Boss exibe quando é danificado por um jogador. Esta é uma lista, e a usada é escolhida aleatoriamente da lista.

| Chave |        Valores        | Padrão |
|-|:-:|-|
| `onDamagedMessages` | [Lista](#string_list) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "Você me acertou!"
- "Fui atingido!"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Define a entidade que o boss irá montar e cavalgar.

| Chave | Valores | Padrão |
|-|:-:|-|
| `onDamagedMessages` | [Nome do arquivo do boss para montar](#filename) ou [tipo de entidade](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | nenhum |

Não tente fazer o boss montar em si mesmo.

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

Nota: Bosses regionais irão compartilhar sua guia com a entidade que estão montando, o que significa que ambos serão arrastados de volta para o local de geração se excederem a distância permitida por sua guia.

***

### announcementPriority

Define o nível de prioridade para anúncios. Prioridades mais baixas significam que nenhum anúncio é feito, prioridades mais altas podem anunciar não apenas no chat, mas também no Discord, se configurado.

| Chave | Valores | Padrão |
|-|:-:|-|
| `announcementPriority` | [Inteiro](#integer) | `1` |

Aqui está uma lista do que as prioridades fazem:

| Valor |                                                                            Descrição                                                                            |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` |                                                   O boss ficará totalmente silencioso, sem mensagens de anúncio.                                                   |
| `1` |                                Este é o padrão. Os bosses podem enviar mensagens de chat, na mensagem de geração, nas mensagens de morte e fuga.                                |
| `2` |                               Além das coisas em `1`, o boss será definido para ser rastreável pelos jogadores através do menu `/em`.                                |
| `3` | Além das coisas em `2`, as mensagens de transmissão serão espelhadas no Discord, se configurado. [Informações de configuração do Discord aqui.]($language$/elitemobs/discordsrv.md) |

Aqui está um exemplo de um boss que é rastreável, é capaz de enviar mensagens de geração/morte/fuga no chat e no Discord:

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Nota**: Você terá que configurar spawnMessage, deathMessage/deathMessages, escapeMessage para anúncios de chat e Discord e locationMessage para o recurso de rastreamento se desejar usar o nível de prioridade de anúncio correspondente.

***

### followDistance

Define a distância em que os bosses se aggro e entram em combate.

| Chave | Valores | Padrão |
|-|:-:|-|
| `followDistance` | [Double](#double) | nenhum, usa os padrões do Minecraft |

Nota 1: Bosses regionais têm metade do `followDistance` quando fora de combate. Isso ocorre para que eles não se aggro de muito longe, o que pode causar problemas de combate irritantes devido a restrições de guia.

Nota 2: Quanto maior o `followDistance`, mais intensivo o boss se torna na CPU do servidor. Use com cuidado e responsabilidade!

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Define um intervalo de 30 blocos onde, se um jogador chegar a essa distância perto do boss, ele começará a perseguir/atacar o jogador.

</details>

***

### onDeathCommands

Define a lista de comandos a serem executados na morte do boss personalizado.

| Chave |        Valores        | Padrão |
|-|:--------------------:|-|
| `onDeathCommands` | [Lista](#string_list) | nenhum |

A lista suporta os seguintes espaços reservados:

| Valor | Descrição |
|-|:-:|
| `$level` | Espaço reservado para o nível do boss. |
| `$name` | Espaço reservado para o nome do boss. |
| `$chance=x$` | Faz com que um comando tenha a chance de ser executado. |
| `$players` | Faz o comando ser executado uma vez para cada jogador na lista de atacantes e substitui a cada vez pelo nome de usuário de um jogador diferente nessa lista. |
| `$locationX` | Coordenada X do boss no momento da morte. |
| `$locationY` | Coordenada Y do boss no momento da morte. |
| `$locationZ` | Coordenada Z do boss no momento da morte. |
| `$damager1name` | Nome de usuário do maior atacante |
| `$damager2name` | Nome de usuário do segundo maior atacante |
| `$damager3name` | Nome de usuário do terceiro maior atacante |

Dê uma olhada no exemplo abaixo para entender melhor como eles funcionam.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players matou $name! Esse era o nível $level!"
- "$chance=0.5$ say Que morte!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Se Player1, Player2 e Player3 danificaram o boss antes de matá-lo, esta será a saída do comando no console:

<div align="left">

```
say Player1 matou CustomBossName! Esse era o nível X!
say Player2 matou CustomBossName! Esse era o nível X!
say Player3 matou CustomBossName! Esse era o nível X!
```

</div>

Além disso, há 50% de chance de que o seguinte também seja exibido:

<div align="left">

```
say Que morte!
```

</div>

</details> 

***

### onSpawnCommands

Define a lista de comandos que serão executados na geração do boss.

| Chave |        Valores        | Padrão |
|-|:--------------------:|-|
| `onSpawnCommands` | [Lista](#string_list) | nenhum |

**Isso usa os mesmos espaços reservados que [onDeathCommands](#onDeathCommands)!** Espaços reservados para atacantes não serão aplicados, pois não haverá atacantes neste momento.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say O boss foi gerado!
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

**Isso usa os mesmos espaços reservados que [onDeathCommands](#onDeathCommands)!** Espaços reservados para atacantes não serão aplicados, pois não haverá atacantes neste momento.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say O boss entrou em combate!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

Define a lista de comandos a serem executados quando o boss sair do combate.

| Chave | Valores | Padrão |
|-|:-:|-|
| `onCombatLeaveCommands` | [Lista](#string_list) | nenhum |

**Isso usa os mesmos espaços reservados que [onDeathCommands](#onDeathCommands)!**

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say O boss saiu do combate!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

Define o disfarce do LibsDisguises se esse plugin estiver ativado. [Mais informações aqui.]($language$/elitemobs/libsdisguises.md)

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

Define um disfarce personalizado do skindex. [Confira esta página]($language$/elitemobs/libsdisguises.md) para saber como formatar esses dados corretamente.

</details>

***

### customModel

Define o modelo personalizado a ser usado, se você tiver um modelo personalizado e ModelEngine. [Mais informações aqui.]($language$/elitemobs/custom_models.md)

| Chave | Valores | Padrão |
|-|:-:|-|
| `customModel` | [String](#string) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customModel: your_model
```

</div>

</details>

***

### frozen

Define se o boss pode se mover. Bosses congelados ainda podem atacar.
</br>*Nota: isso pode não funcionar em algumas entidades.*

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

Define a música que um boss irá tocar, começando quando ele é gerado. Requer que o arquivo .ogg da música esteja no pacote de recursos.

| Chave | Valores | Padrão |
|-|:-:|-|
| `song` | [String](#string) | nenhum |

<details> 

<summary><b>Exemplo</b></summary>

Existem duas maneiras de configurar músicas. Aqui está a primeira:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Isso irá tocar a música ice_queen.idle por 76370 ticks e, em seguida, reproduzi-la em loop. Observe que o local da música é determinado pelo pacote de recursos.

Aqui está a segunda maneira de configurar músicas:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Isso irá tocar a música ice_queen.end_transition por 14328 ticks e, em seguida, fazer a transição para ice_queen.end_loop por 28657 ticks e reproduzir end_loop em loop.

Isso permite que os bosses tenham uma música de "introdução" ou "transição" e, em seguida, uma faixa principal que é reproduzida em loop.

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
</br>*Nota: qualquer coisa além de 0,36 pode ser muito rápido.*

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

## Fases do Boss

<div align="center">

Os bosses podem ter fases que mudam quando o boss atinge uma certa porcentagem de saúde. Quando isso acontece, o boss começa a usar um arquivo de configuração diferente, o que significa que tudo sobre o boss pode mudar, incluindo coisas como o tipo de entidade.
</br>Para saber mais sobre as fases do boss, clique [aqui]($language$/elitemobs/creating_boss_phases.md).


| Chave | Descrição | Valores | Padrão |
|-|:-:|-|-|
| `phases` | Define as fases que o boss terá. Obrigatório | [Lista](#string_list) | nenhum |
| `phaseSpawnLocation` | Define onde o boss da fase é gerado. Opcional | [String](#string) | nenhum |


<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

Para este exemplo, vamos mostrar três arquivos de configuração diferentes.

Primeiro arquivo de configuração do boss: phase_1_boss.yml

```yml
name: "Fase 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Segundo arquivo de configuração do boss: phase_2_boss.yml

```yml
name: "Fase 2"
entityType: SKELETON
```

Terceiro arquivo de configuração do boss: phase_3_boss.yml

```yml
name: "Fase 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

Este boss mudaria para o arquivo de configuração `phase_2_boss.yml` com 60% de saúde e para o arquivo de configuração `phase_3_boss.yml` com 30% de saúde no mesmo mundo da fase 2 e nas coordenadas x=10, y=64 e z=100. O tipo de entidade e o nome do boss também mudariam.

O formato para uma entrada é `filename:healthPercentage`.

phaseSpawnLocation é opcional, se não for definido, o boss mudará de fase onde estiver.

</details>

As seguintes coisas são importantes para saber ao projetar um boss de fase:

<div align="left">

- O arquivo de configuração da primeira fase define todas as fases do boss.
- A ameaça/dano contado é mantido entre as fases para os jogadores.
- A troca de fases é baseada na porcentagem de saúde perdida, que é preservada ao trocar para uma fase diferente. Isso significa que aumentar ou diminuir o healthMultiplier entre as fases não irá curar ou danificar o boss, ele ainda irá trocar com a mesma porcentagem, mas terá mais ou menos saúde para essa fase.
- Bosses de fase revertem para a fase 1 se saírem do combate.
- Bosses de fase que também são bosses regionais compartilham o mesmo raio de guia e mecânica de timeout em todas as fases, e irão reaparecer como o boss da fase 1 quando o timer terminar.
- O arquivo de configuração da última fase define o loot para o boss.
- As fases não podem ser ignoradas - o dano overkill ainda fará com que o boss mude de fase na porcentagem definida.
- Bosses de fase que têm montarias deixam de ser montados ao trocar de fases.

</div>

</div>

</div>

***

## Bosses regionais

<div align="center">



Os bosses regionais são um tipo específico de Bosses Personalizados que aparecem em um local configurado específico e são capazes de reaparecer nesse local após um atraso. Além disso, eles podem ter trelas que garantem que eles permaneçam em uma zona específica, entre outros recursos.

Eles são usados para todo o conteúdo da masmorra. Para saber mais sobre os chefes regionais, clique [aqui]($language$/elitemobs/creating_world_bosses.md).

| Chave | Descrição | Valores | Padrão |
|-|:-:|:-:|-|
| `isRegionalBoss` | Define se o boss é regional. Deve ser verdadeiro se você quiser um boss regional.  | `true` /  `false` | `false` |
| `spawnLocation` | Define os locais de spawn do boss.  | Adicione-os através do comando `/em addSpawnLocation [filename.yml]`! | nenhum |
| `spawnCooldown` | Define o tempo de espera para respawn do boss, em <b>minutos</b>. | [Integer](#integer) | `0` |
| `leashRadius` | Define a distância que o boss pode ir de seu ponto de spawn antes de ser puxado de volta. | [Double](#double) | nenhum |
| `onSpawnBlockStates` | Define os blocos que o boss irá modificar quando aparecer. | Verifique os comandos abaixo | nenhum |
| `onRemoveBlockStates` | Define os blocos que o boss irá modificar quando desaparecer. | Verifique os comandos abaixo | nenhum |

Como indicado, os Bosses Regionais podem ter `onSpawnBlockStates` e `onRemoveBlockStates`.

Este é um recurso muito útil para modificar arenas de combate durante o combate, especialmente quando combinado com mudanças de fase, pois torna-se possível abrir e fechar arenas de combate alterando os estados dos blocos.

O formato para estes é muito complexo para escrever manualmente, então existem alguns comandos para ajudá-lo a configurá-los:

| Comando | Descrição |
|-|:-:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove] | Começa a registrar seleções manuais de blocos para estados de bloco no spawn ou na remoção. |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove] | Edita os estados de bloco no spawn ou na remoção. |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove] | Permite que os administradores selecionem grandes áreas de blocos para salvar como estados. |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] | Permite que os administradores editem grandes áreas de blocos para salvar como estados. |

<details> 

<summary><b>Exemplo de uso:</b></summary>

<div align="left">

Digamos que você queira fazer uma luta onde um boss aparece em uma arena que tem uma porta aberta, e você quer fazer com que a porta feche quando a luta começar e reabra quando a luta terminar.

Para fazer isso, você precisará de duas fases de boss e registrar três conjuntos diferentes de estados de bloco. Para este exemplo, vou nomear essas fases como phase_1_boss.yml e phase_2_boss.yml, respectivamente.

1) Use `/em registerblocks phase_1_boss.yml on_spawn` ou `/em registerblocksedit phase_1_boss.yml on_spawn` para registrar os blocos da porta em seu estado aberto.

Isso significa registrar os blocos de ar. A seleção de área é recomendada aqui.

Isso é necessário para garantir que a porta esteja aberta quando o boss aparecer, para que os jogadores tenham a garantia de uma entrada.

2) Use `/em registerblocks phase_2_boss.yml on_spawn` ou `/em registerblocksedit phase_2_boss.yml on_spawn` para registrar os blocos da porta em seu estado fechado.

Isso significa registrar os blocos sólidos da porta que impediriam o jogador de sair.

Isso é necessário para mudar a porta para ser sólida quando o boss entrar na fase 2, impedindo que os jogadores saiam.

3) Use `/em registerblocks phase_2_boss.yml on_remove` ou `/em registerblocksedit phase_2_boss.yml on_remove` para registrar os blocos da porta em seu estado aberto.

Isso significa registrar os mesmos blocos da primeira etapa novamente (os blocos de ar).

Isso é necessário para abrir a porta quando o boss morrer, permitindo que os jogadores saiam da arena.

</div>

</details>

</div>

***

### alert

<div align="center">

Define se o boss está em alerta. Por padrão, os Bosses Regionais são mais lentos e têm uma distância de aggro menor quando estão fora de combate. Essa configuração impede que os Bosses Regionais sejam mais lentos e tenham uma distância de aggro menor quando estiverem fora de combate, para que eles sempre se comportem da mesma forma dentro ou fora de combate.

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

Define se o Boss Regional será excluído permanentemente após ser morto. É isso que o BetterStructures usa para Santuários, onde o Boss Regional é projetado para ser combatido apenas uma vez e nunca mais naquele local.

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

| Chave | Descrição | Valores | Padrão |
|-|:-:|:-:|-|
| `instanced` | Torna o boss personalizado instanciado. Obrigatório. | `true` / `false` | `false` |


Definir os bosses como instanciados é obrigatório para que as masmorras instanciadas funcionem corretamente. Também recomendamos remover as trelas de quaisquer bosses instanciados.

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
