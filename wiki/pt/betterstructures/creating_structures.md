# Criar conteúdo

***

## Criar a construção

Não há restrições quanto ao que podes construir para o BetterStructures, embora seja recomendado manter o tamanho das estruturas abaixo de 100x100x100 blocos para um ajuste geral ao mundo e por razões de desempenho. Dito isto, ele pode lidar facilmente com estruturas muito maiores.

***

### Blocos especiais

O BetterStructures tem dois blocos especiais: barreiras e bedrock. Qualquer outro bloco que o WorldEdit/FAWE possa colar será colado normalmente, mas os blocos de barreiras e bedrock são a exceção. Em vez de colar, estes blocos são substituídos pelos seguintes comportamentos personalizados:

***

#### Barreira

Os blocos de barreira fazem com que o plugin não coloque quaisquer blocos nessa localização. Isto significa que qualquer bloco que estivesse originalmente lá na geração normal do mundo permanecerá lá.

Os construtores podem usar isto para arredondar as bordas de uma colagem, tornando-a mais natural, ou para moldar paredes a uma potencial caverna, entre outros truques.

***

#### Bedrock

Os blocos de bedrock fazem com que o plugin garanta que existe um bloco sólido naquela localização. Isto significa que, se já existir um bloco sólido na geração de mundo padrão, esse bloco não será modificado; no entanto, se o bloco for ar ou líquido, será substituído por um bloco sólido do [pedestal](#pedestalmaterial).

Os construtores podem usar isto para criar pisos com recursos como o piso para trilhos de minecart ou garantir que um piso exista sem sobrepor blocos sólidos já existentes nessa localização no mundo, fazendo com que as construções pareçam mais orgânicas.

***

### Placas de spawn

O BetterStructures pode usar placas com texto específico para gerar mobs e até mesmo bosses do EliteMobs e MythicMobs em locais específicos da construção.

***

##### Gerar mobs vanilla

Se pegares numa placa normal e a colocares em algum lugar, certifica-te de que a primeira linha diz `[spawn]` e a segunda linha tem o [nome do tipo de entidade seguindo a API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html), irás gerar uma entidade persistente nesse local do tipo que especificaste.

Como exemplo, se tiveres uma placa que diz `[spawn]` na primeira linha e `ZOMBIE` na segunda linha, irás gerar um zombie nesse local quando a construção for colocada. Isto também pode ser usado para entidades não vivas, como armaduras ou cristais ender.

<div class="minecraft-sign">
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Gerar Elite Mobs (plugin de boss recomendado)

O BetterStructures também tem uma integração avançada com o EliteMobs, que permite criar arenas de boss com base em construções e placas de spawn.

Se pegares numa placa normal e a colocares em algum lugar, fazendo com que a primeira linha seja [elitemobs], podes usar todas as outras linhas para dizer qual o ficheiro de boss a usar.

Como exemplo, se fizeres `[elitemobs]` na primeira linha e depois `test_boss.yml`, na segunda linha, irás gerar o boss de teste. Se tiveres um nome de ficheiro muito longo, como boss_with_very_long_filename.yml, podes dividi-lo em várias linhas, como `boss_with_very_` na linha 2 e depois `long_filename.yml` na linha 3, que irá funcionar.

Como lembrete, por padrão, as arenas de combate serão protegidas até que os jogadores matem todos os bosses na construção, se o teu servidor estiver a usar o WorldGuard.

<div class="minecraft-sign">
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### Gerar Mythic Mobs

O BetterStructures também tem uma integração simples com o MythicMobs, que permite gerar um mob do MythicMobs na construção. Na primeira linha de uma placa normal, escreve `[mythicmobs]`, depois na segunda linha usa o identificador do mob. Podes usar um número na terceira linha para definir o nível do mob.

<div class="minecraft-sign">
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## Schematics

Os schematics são ficheiros gerados pelo WorldEdit ou FastAsyncWorldEdit que contêm os blocos para a construção que o BetterStructures vai usar.

Instruções detalhadas sobre como fazer um schematic não estão incluídas aqui, pois estão bem detalhadas nas documentações do WorldEdit e FastAsyncWorldEdit, mas geralmente são feitas por:

1) Escolher um canto da construção e usar o comando `//pos1`
2) Escolher o canto diagonalmente oposto e usar o comando `//pos2`
3) Usar o comando `//copy`
4) Usar o comando `/schem save <nome do schematic>` onde `<nome do schematic>` é o nome do ficheiro que queres usar para o teu schematic.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="imagem de documentação do worldedit dos seus documentos">

*Certifica-te de executar o comando `//pos1` no ponto 1 e `//pos2` no ponto 2!*

***

#### Ponto de âncora

Os pontos de âncora são onde executas o comando `//copy` para o schematic. Ao colar simplesmente um schematic, estes são onde estás em relação à construção.

Os pontos de âncora são importantes para acertar para que os schematics funcionem corretamente.

* Para _construções de superfície_, recomenda-se que fiques no ponto mais baixo do chão ao copiar a construção.
* Para _construções subterrâneas_, recomenda-se que fiques em cima da construção.
* Para _construções líquidas_, recomenda-se que fiques em cima da água.
* Para _construções aéreas_, recomenda-se que fiques em cima da construção.

**Por favor, nota que deves estar sempre muito perto ou diretamente em cima das construções ao copiar - quanto mais longe estiveres, mais lag haverá quando a construção precisar ser colada.**

***

# Configurações de schematic

Cada ficheiro de schematic tem uma configuração de schematic. Se um ficheiro de schematic acabou de ser adicionado ao servidor, a configuração será gerada após um reinício ou após um `/betterstructures reload`.

Estas configurações permitem definir as seguintes configurações para a colagem do schematic:

***

## isEnabled

Define se o schematic está ativado. Se estiver desativado, não será colocado em lado nenhum.

***

## weight

O weight define o peso do schematic em termos de probabilidade de ser escolhido.

O valor padrão é `1.0`. Se fizeres com que uma construção tenha um peso de `2.0`, será 2x mais provável ser selecionada do que as outras construções. Se o tornares `0.5`, terá metade das chances de ser escolhido.

_**Nota:** Tem em mente que as probabilidades de uma construção específica ser escolhida mudam drasticamente com base em quantas construções existem no total a competir pela localização que receberá uma estrutura!_

***

## pedestalMaterial

**Importante: campo opcional!**

O pedestal material define o tipo de material dos blocos de pedestal usando os [nomes de material da API spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) - usa-os ou não funcionará!

Os pedestais são os blocos que são colocados sob edifícios de superfície e subterrâneos para preencher quaisquer espaços de ar e melhorar o ajuste de um edifício ao mundo. Estes são também os mesmos blocos que substituem os blocos de bedrock no schematic.

Quando nada é definido na configuração, os blocos sob a localização para a colagem são analisados e o melhor ajuste é selecionado como o material para o melhor aspeto integrado.

***

## generatorConfigFilename

Esta opção define o nome do ficheiro de configuração, por nome do ficheiro, que o schematic vai usar. Isto requer o nome de ficheiro completo, incluindo a extensão `.yml` no final. Como exemplo, `generatorConfigFilename: generator_surface_global.yml` seria a opção correta se quiseres usar o gerador definido em `generator_surface_global.yml`, que podes encontrar na pasta de configuração de geradores.

***

## treasureFile

Define o [ficheiro de tesouro]($language$/betterstructures/creating_treasure.md) que esta estrutura vai usar, sobrepondo o ficheiro de tesouro definido pelo [gerador]($language$/betterstructures/creating_generators.md) da estrutura. Isto geralmente não é recomendado, a não ser para uma construção muito especial. Geralmente, é melhor modificar ou criar um gerador para este propósito.

# Personalizar o conteúdo

Tudo o que é distribuído no BetterStructures é editável. Podes modificar quaisquer ficheiros de schematics e configurações de geradores ao teu gosto.

O guia de criação de conteúdo acima é também um guia que te pode ajudar a editar o conteúdo existente.
