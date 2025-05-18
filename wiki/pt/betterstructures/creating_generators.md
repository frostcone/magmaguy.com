Aqui está a tradução para português (Portugal), mantendo a formatação markdown:

## Geradores

Os geradores são a parte mais poderosa do sistema de configuração do BetterStructures. Por predefinição, existem 27 geradores que gerem coletivamente mais de 200 construções atualmente distribuídas pelo BetterStructures, e embora possa criar os seus próprios geradores, também pode usar os existentes como atalho.

Os geradores indicam ao plugin onde exatamente as coisas devem aparecer (spawn) e definem as tabelas de saque (loot tables). Os geradores predefinidos também são nomeados de formas que devem ser muito fáceis de adivinhar o que fazem.

O único campo obrigatório para os geradores é a definição `structureType`, que indica ao plugin se a construção deve aparecer no céu, subsolo raso, subsolo profundo, superfície ou líquido de superfície.

***

### isEnabled

Define se o gerador está ativado.

***

### structureType

Define que tipo de estrutura é a construção. **Note que pode fazer uma lista de vários tipos!**

Os seguintes são valores válidos para o tipo de estrutura:

***

#### surface

```yml
structureType:
- SURFACE
```

Estruturas de superfície aparecem na superfície do mundo. A única exceção é o ambiente do Nether, onde aparecem em pontos que o plugin considera suficientemente semelhantes à superfície.

***

#### sky

```yml
structureType:
- SKY
```

Estruturas aéreas (sky) aparecem entre 80 e 120 blocos acima do ar, configurável em config.yml. A única exceção é o ambiente do Nether, onde aparecem em pontos que o plugin considera suficientemente semelhantes ao ar.

***

#### underground_shallow

```yml
structureType:
- UNDERGROUND_SHALLOW
```

Estruturas de subsolo raso (underground shallow) aparecem entre y=0 e y=60 no overworld, y=60 e y=120 no nether e em qualquer altura subterrânea válida no End.

_**Nota: ** Irá notar que existem duas definições de subsolo. Isto acontece porque ter apenas uma resulta num subsolo muito esparso, uma vez que o Minecraft tem muito espaço subterrâneo e os jogadores muitas vezes não encontrarão estruturas subterrâneas simplesmente porque não mineraram até elas. Isto também garante uma distribuição uniforme em diferentes profundidades._

***

#### underground_deep

```yml
structureType:
- UNDERGROUND_DEEP
```

Estruturas de subsolo profundo (underground deep) aparecem entre y=-64 e y=0 no overworld, y=0 e y=60 no nether e não aparecem no End.

***

#### liquid_surface

```yml
structureType:
- LIQUID_SURFACE
```

Estruturas de superfície líquida (liquid surface) aparecerão em líquidos. No caso do overworld, aparecerão na água, e quase sempre em oceanos. No caso do Nether, aparecerão nos lagos de lava. Não aparecerão no End.

***

### lowestYLevel

Define o nível Y (altitude) mais baixo em que a estrutura aparecerá.

***

### highestYLevel

Define o nível Y (altitude) mais alto em que a estrutura aparecerá.

***

### validWorlds

Define a lista de mundos em que a estrutura aparecerá. **Se nenhuma lista estiver presente, usará todos os mundos permitidos pelo plugin**, a menos que seja limitado de outra forma (como pelo tipo de ambiente ou biomas).

***

### validWorldEnvironments

Define a lista de ambientes de mundo em que a estrutura aparecerá. **Se nenhuma lista estiver presente, usará todos os ambientes de mundo permitidos pelo plugin**. Valores válidos: `NORMAL`, `NETHER`, `END` e `CUSTOM`.

***

### validBiomes

Define a lista de biomas válidos em que a estrutura aparecerá. **Se nenhuma lista for definida, assumirá que todos os biomas são válidos!**.

Isto requer o uso da lista de biomas conforme definida pela [API do Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Define o ficheiro de tesouro que o gerador usará. Isto define o que aparece nos baús para todas as construções que usam este gerador, a menos que um valor diferente seja definido na [definição `treasureFile` de uma configuração de esquema](pt-pt/betterstructures/creating_structures.md&section=treasurefile).