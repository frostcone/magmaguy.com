```markdown
# Criação de conteúdo

***

## Criação da construção

Não existem restrições quanto ao que pode construir para o BetterStructures, embora seja recomendado manter o tamanho das estruturas abaixo de 100x100x100 blocos por motivos de adaptação geral ao mundo e desempenho. Dito isto, pode facilmente lidar com estruturas muito maiores.

***

### Blocos especiais

O BetterStructures tem dois blocos especiais: barreiras e bedrock. Qualquer outro bloco que o WorldEdit possa colar será colado normalmente, mas os blocos de barreiras e bedrock são a exceção. Em vez de serem colados, estes blocos são substituídos pelos seguintes comportamentos personalizados:

***

#### Barreira

Os blocos de barreira fazem com que o plugin não coloque quaisquer blocos nessa localização. Isto significa que qualquer bloco que estivesse originalmente lá na geração normal do mundo permanecerá lá.

Os construtores podem usar isto para arredondar as arestas de uma colagem, tornando-a mais natural, ou para moldar paredes a uma potencial caverna, entre outros truques.

***

#### Bedrock

Os blocos de bedrock fazem com que o plugin garanta que existe um bloco sólido nessa localização. Isto significa que se um bloco sólido já estiver lá na geração padrão do mundo, esse bloco não será modificado; no entanto, se o bloco for ar ou líquido, será substituído por um bloco sólido do [pedestal](#pedestalmaterial).

Os construtores podem usar isto para criar pisos com funcionalidades como o piso para carris de minecart ou garantir que um piso existe sem substituir blocos sólidos potencialmente já existentes nessa localização no mundo, tornando as construções mais orgânicas.

***

### Placas de spawn

O BetterStructures pode usar placas com texto específico para fazer spawn de mobs e até bosses do EliteMobs e MythicMobs em localizações específicas da construção.

***

##### Fazer spawn de mobs vanilla

Se pegar numa placa normal e a colocar em algum sítio, e depois garantir que a primeira linha diz `[spawn]` e a segunda linha tem o [nome do tipo de entidade seguindo a API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html), fará spawn de uma entidade persistente nessa localização do tipo que especificou.

Como exemplo, se tiver uma placa que diz `[spawn]` na primeira linha e `ZOMBIE` na segunda linha, fará spawn de um zombie nessa localização quando a construção for colocada. Isto também pode ser usado para entidades não vivas, como suportes de armadura ou cristais do End.

<div class="minecraft-sign">
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Fazer spawn de Elite Mobs (plugin de boss recomendado)

O BetterStructures também tem integração avançada com o EliteMobs, o que lhe permite criar arenas de boss baseadas em construções e placas de spawn.

Se pegar numa placa normal e a colocar em algum sítio, fazendo com que a primeira linha seja [elitemobs], então pode usar todas as outras linhas para dizer qual ficheiro de boss usar.

Como exemplo, se colocar `[elitemobs]` na primeira linha e depois `test_boss.yml` na segunda linha, fará spawn do boss de teste. Se tiver um nome de ficheiro muito longo, como boss_with_very_long_filename.yml, pode dividi-lo em várias linhas, então faça a linha 2 `boss_with_very_` e depois a linha 3 `long_filename.yml` e isso funcionará.

Como lembrete, por padrão as arenas de combate serão protegidas até que os jogadores matem todos os bosses na construção se o seu servidor estiver a usar WorldGuard.

<div class="minecraft-sign">
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

## Schematics

Schematics são ficheiros gerados pelo WorldEdit ou FastAsyncWorldEdit que contêm os blocos para a construção que o BetterStructures irá usar.

Instruções detalhadas sobre como fazer um schematic não estão incluídas aqui, pois estão detalhadas exaustivamente nas documentações do WorldEdit e FastAsyncWorldEdit, mas geralmente é feito por:

1) escolha um canto da construção e use o comando `//pos1`
2) escolha o canto diagonalmente oposto e use o comando `//pos2`
3) use o comando `//copy`
4) use o comando `/schem save <schematicname>` onde `<schematicName>` é o nome do ficheiro que quer usar para o seu schematic.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="worldedit documentation image from their docs">

*Certifique-se de que executa o comando `//pos1` no ponto 1 e `//pos2` no ponto 2!*

***

#### Ponto de ancoragem

Pontos de ancoragem são onde executa o comando `//copy` para o schematic. Ao simplesmente colar um schematic, estes são onde está posicionado relativamente à construção.

Os pontos de ancoragem são importantes para acertar para que os schematics funcionem corretamente.

* Para _construções de superfície_, é recomendado que se posicione no ponto mais baixo do piso ao copiar a construção.
* Para _construções subterrâneas_, é recomendado que se posicione no topo da construção.
* Para _construções líquidas_, é recomendado que se posicione no topo da água.
* Para _construções aéreas_, é recomendado que se posicione no topo da construção.

**Por favor, note que deve estar sempre muito perto ou diretamente no topo das construções ao copiar - quanto mais longe estiver, mais lag haverá quando a construção precisar de ser colada.**

***

# Configurações de Schematic

Cada ficheiro schematic tem uma configuração de schematic. Se um ficheiro schematic acabou de ser adicionado ao servidor, a configuração será gerada após um reinício ou após um `/betterstructures reload`.

Estas configurações permitem definir as seguintes definições para a colagem do schematic:

***

## isEnabled

Define se o schematic está ativado. Se desativado, não será colocado em nenhum lugar.

***

## weight

Weight define o peso do schematic em termos de quão provável é de ser escolhido.

O valor padrão é `1.0`. Se fizer com que uma construção tenha um peso de `2.0`, será 2x mais provável de ser selecionada do que as outras construções. Se o fizer `0.5`, terá metade das hipóteses de ser escolhida.

_**Nota:** Tenha em mente que as probabilidades de uma construção específica ser escolhida mudam drasticamente com base em quantas construções existem no total a competir pela localização que receberá uma estrutura!_

***

## pedestalMaterial

**Importante: campo opcional!**

Pedestal material define o tipo de material dos blocos de pedestal usando os [nomes de material da API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) - use-os ou não funcionará!

Pedestais são os blocos que são colocados sob construções de superfície e subterrâneas para preencher quaisquer espaços de ar e melhorar a adaptação de uma construção ao mundo. Estes são também os mesmos blocos que substituem os blocos de bedrock no schematic.

Quando nada é definido na configuração, os blocos sob a localização para a colagem são analisados e o melhor ajuste é selecionado como o material para a aparência mais integrada.

***

## generatorConfigFilename

Esta opção define o nome do ficheiro de configuração, pelo nome do ficheiro, que o schematic irá usar. Isto requer o nome completo do ficheiro, incluindo a extensão `.yml` no final. Como exemplo, `generatorConfigFilename: generator_surface_global.yml` seria a opção correta se quiser usar o gerador definido em `generator_surface_global.yml` que pode encontrar na pasta de configuração dos geradores.

***

## treasureFile

Define o [ficheiro de tesouro]($language$/betterstructures/creating_treasure.md) que esta estrutura usará, substituindo o ficheiro de tesouro definido pelo [gerador]($language$/betterstructures/creating_generators.md) da estrutura. Isto geralmente não é recomendado, a menos que seja para uma construção muito especial. Geralmente é melhor modificar ou criar um gerador para este propósito.

***

# Personalizar conteúdo

Tudo o que é distribuído no BetterStructures é editável. Pode modificar quaisquer ficheiros schematic e definições de gerador ao seu gosto.

O guia de criação de conteúdo acima é também um guia que pode ajudá-lo a editar conteúdo existente.
```