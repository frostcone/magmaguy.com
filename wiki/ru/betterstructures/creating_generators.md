## Geradores

Os geradores são a parte mais poderosa do sistema de configuração do BetterStructures. Por padrão, existem 27 geradores que coletivamente gerenciam mais de 200 construções atualmente distribuídas pelo BetterStructures, e embora você possa criar seus próprios geradores, você também pode usar os existentes como um atalho.

Os geradores informam ao plugin onde exatamente as coisas devem ser geradas e definem tabelas de loot. Os geradores padrão também são nomeados de maneiras que devem ser muito fáceis de adivinhar o que eles fazem.

O único campo obrigatório para geradores é a configuração `structureType`, que informa ao plugin se a construção é destinada a ser gerada no céu, no subsolo raso, no subsolo profundo, na superfície ou na superfície líquida.

***

### isEnabled

Define se o gerador está habilitado.

***

### structureType

Define qual tipo de estrutura é a construção. **Observe que você pode criar uma lista de vários tipos!** 

Os seguintes são valores válidos para o tipo de estrutura:

***

#### surface

```yml
structureType: 
- SURFACE
```

As estruturas de superfície são geradas na superfície do mundo. A única exceção é o ambiente Nether, onde ele é gerado em pontos que o plugin considera suficientemente semelhantes à superfície.

***

#### sky

```yml
structureType: 
- SKY
```

As estruturas do céu são geradas entre 80 e 120 blocos acima do ar, configurável em config.yml. A única exceção é o ambiente Nether, onde ele é gerado em pontos que o plugin considera suficientemente semelhantes ao ar.

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

As estruturas subterrâneas rasas são geradas entre y=0 e y=60 no mundo superior, y=60 e y=120 no Nether e qualquer altura subterrânea válida no End.

_**Observação: ** Você notará que existem duas configurações subterrâneas. Isso ocorre porque ter apenas uma resulta em um subsolo muito esparso, pois o Minecraft tem muito espaço subterrâneo e os jogadores muitas vezes perderão estruturas subterrâneas simplesmente porque não as mineraram. Isso também garante que haja uma distribuição uniforme entre diferentes profundidades._

***

#### underground_deep

```yml
structureType: 
- UNDERGROUND_DEEP
```

As estruturas subterrâneas profundas são geradas entre y=-64 e y=0 no mundo superior, y=0 e y=60 no Nether e não são geradas no End.

***

#### liquid_surface

```yml
structureType: 
- LIQUID_SURFACE
```

As estruturas da superfície líquida serão geradas em líquidos. No caso do mundo superior, elas serão geradas na água e quase sempre nos oceanos. No caso do Nether, elas serão geradas nos lagos de lava. Elas não serão geradas no End.

***

### lowestYLevel

Define o nível Y mais baixo (altitude) em que a estrutura será gerada.

***

### highestYLevel

Define o nível Y mais alto (altitude) em que a estrutura será gerada.

***

### validWorlds

Define a lista de mundos em que a estrutura será gerada. **Se nenhuma lista estiver presente, ela usará todos os mundos permitidos pelo plugin**, a menos que seja limitada de outra forma (como pelo tipo de ambiente ou biomas).

***

### validWorldEnvironments

Define a lista de ambientes de mundo em que a estrutura será gerada. **Se nenhuma lista estiver presente, ela usará todos os ambientes de mundo permitidos pelo plugin**. Valores válidos: `NORMAL`, `NETHER`, `END` e `CUSTOM`.

***

### validBiomes

Define a lista de biomas válidos em que a estrutura será gerada. **Se nenhuma lista for definida, ela assumirá que todos os biomas são válidos!**.

Isso requer o uso da lista de biomas conforme definido pela [API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Define o arquivo de tesouro que o gerador usará. Isso define o que gera nos baús para todas as construções que usam esse gerador, a menos que um valor diferente seja definido na configuração [treasureFile]($language$/betterstructures/creating_structures.md&section=treasurefile) de uma configuração esquemática.

