# Construindo para EliteMobs

A seguinte página wiki ajuda-o a entender o processo necessário para criar masmorras e arenas EliteMobs.

Vocabulário:

- "Boss" - Encontro grande, feito para ser combatido por muitas pessoas
- "Miniboss" - Encontro menor, geralmente capaz de ser morto por 1 jogador
- "Fodder" - Mobs relativamente fáceis de matar

## Entender as categorias de masmorras EliteMobs

### Covis

Categoria de tamanho mais pequeno

Os covis são geralmente estruturas únicas de 50x50, distribuídas como mundos, e geralmente contêm um grande encontro com
um boss, embora alguns também possam conter um miniboss e algum fodder.

### Minimasmorras

Categoria de tamanho médio

As minimasmorras são mais próximas de estruturas de 100x100 ou 150x150, muitas vezes com várias estruturas ou estruturas
com várias seções. Estas têm 1 boss, e geralmente pelo menos 3 ou mais minibosses. Também têm muito fodder.

### Aventuras

As aventuras são mapas de aventura inteiros, geralmente não medidos em blocos. Estes têm o tamanho de uma cidade ou até
maiores. Têm 1 boss e mais de 10 minibosses, e dezenas de fodder únicos que geralmente somam centenas ou milhares no
total no mapa.

### Arenas

As arenas são desafios de arena de sobrevivência baseados em ondas no EliteMobs. Estas geralmente têm 100x100. Podem ter
qualquer quantidade de ondas, mas geralmente não é recomendado passar de 50.

### Masmorras Instanciadas

As Masmorras Instanciadas são semelhantes às Minimasmorras, exceto que são instanciadas. O que significa que cada vez
que um jogador ou um grupo de jogadores deseja ir para uma Masmorra Instanciada, um novo mundo é gerado apenas para
eles.

As Masmorras Instanciadas comportam-se muito como masmorras instanciadas que você pode encontrar no seu MMO favorito.
Elas geralmente têm três níveis de dificuldade, com as recompensas a serem melhores quanto mais difícil for a
dificuldade. Elas permitem que os jogadores assumam os papéis de Tanque ou DPS ao equipar o loot que é largado dentro da
masmorra instanciada. Os mobs também usarão conjuntos diferentes de poderes dependendo de qual dificuldade foi escolhida
quando os jogadores iniciaram a instância. Quaisquer mobs que sejam mortos numa instância não voltarão a aparecer
durante a duração dessa instância.

Qualquer loot que seja largado dentro de uma masmorra instanciada usa o sistema de ganância ou necessidade, o que
significa que os jogadores podem votar no item largado. Como mencionado anteriormente, o loot da masmorra instanciada é
feito especialmente para ser orientado para a defesa (tanque) ou para o ataque (DPS).

### Raides

Conteúdo instanciado - brevemente

## Temática

A coisa mais importante sobre qualquer estrutura EliteMobs é a temática. As temáticas influenciam o design da
construção, os seus conteúdos, a sua história e os seus bosses.

Como exemplo, você pode ver [O Polo Norte aqui](https://magmaguy.itch.io/elitemobs-the-north-pole). Teve o conceito de
colocar bosses relacionados com o Natal num globo de neve, resultando num local visualmente marcante e mecanicamente
interessante.

Aqui está outro exemplo, [O Oásis](https://magmaguy.itch.io/elitemobs-oasis). Este foi tudo sobre criar um local do
antigo Egito invadido por mortos-vivos e múmias, e é uma das construções mais populares no EliteMobs.

## Locais de combate

Os locais de combate devem evitar criar terrenos que sejam facilmente exploráveis. Isto significa evitar fazer pilares
nos quais os jogadores possam subir para estarem seguros, decorações que possam ser usadas para enganar a IA e outros
obstáculos semelhantes. Alguns exploits serão sempre encontrados, e isso não é muito importante, mas os locais dos
bosses devem ser menos propensos a sofrer desses exploits.

A área de combate ideal para bosses é relativamente plana, desobstruída, com cerca de 30 blocos de raio e pode conter
alguns pilares ou outros elementos do mapa atrás dos quais os jogadores devem se esconder para limpar certas mecânicas
de boss.

Os corredores devem ter pelo menos 5 blocos de largura se forem destinados a ter adds neles. As arenas de miniboss podem
ter 15 blocos de raio, dependendo dos poderes/temática que têm.

Por favor, note que estas são dimensões mínimas. Não há realmente nenhum problema se você passar por cima.

Tenha em mente que pode selar ou mudar os blocos do ambiente
usando [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block)
ou [Blocos Transitivos]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates).
Esta é uma ótima maneira de garantir que os jogadores só possam progredir mais depois de terem derrotado um determinado
mob.

## Design para EliteMobs

Quanto melhor conhecer o EliteMobs, melhor será o conteúdo que criar para ele. A seguir está uma lista de recursos
EliteMobs que o ajudarão a criar coisas interessantes para sua masmorra:

- [Bosses Regionais]($language$/elitemobs/creating_world_bosses.md) - Toda criatura em Masmorras é um boss regional, o
  que significa que eles têm uma coleira (se eles passarem de uma certa distância, eles são puxados de volta para o seu
  ponto de spawn) e reaparecem num temporizador.
- [Criando bosses]($language$/elitemobs/creating_bosses.md) Isto irá mostrar-lhe tudo o que um boss pode fazer e ser,
  como disfarces, multiplicadores de saúde, se ele pode se mover e a que velocidade, provocações e muito mais!
- [EliteScript]($language$/elitemobs/creating_powers.md) EliteScript é a ferramenta mais poderosa à sua disposição
  quando se trata de criar encontros inesquecíveis onde apenas a sua imaginação é o limite.
- [Baús de Tesouro]($language$/elitemobs/creating_treasure_chests.md) Estes podem ter itens ou até transformar-se em
  inimigos
- [Fases de boss]($language$/elitemobs/creating_boss_phases.md) - Os bosses podem ter fases. Este sistema é muito
  poderoso porque os bosses podem transformar-se em qualquer coisa entre fases, incluindo diferentes tipos de entidades,
  disfarces diferentes, modelos personalizados diferentes e assim por diante.
- [Blocos Transitivos]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates)
  Estes são blocos que são colocados quando um boss aparece ou morre. Eles também podem ser colocados e removidos quando
  um boss muda de fase! Estes podem ser usados para criar arenas dinâmicas muito interessantes.
- [Buracos de Minhoca]($language$/elitemobs/creating_wormholes.md) - portais fixes que podem teletransportar jogadores
  para outros locais.

## Design de Encontros

O design de encontros deve ser uma prioridade ao projetar a área de combate. Idealmente, você teria uma ideia de quais
poderes deseja usar ou, pelo menos, de qual tema os poderes deveriam ser - algo como fogo, ou relâmpago, ou gelo, ou
reforços, ou qualquer outra coisa que se encaixe com os poderes do EliteMobs. Depois de saber quais são os poderes que
você deseja, pode projetar a área de combate de acordo.

Se os bosses tiverem um poder que exigisse fugir deles, a área precisa ser grande o suficiente para acomodar isso. Se
houver um poder onde você deve se esconder atrás de um obstáculo, a estrutura precisa desse tipo de obstáculo. Há muitos
detalhes que podem entrar na construção dessas arenas, e quanto mais você levar em conta, melhor será o encontro.

## Modificando o Pacote de Recursos do EliteMobs

A partir da versão 1.21.4 do Minecraft e da versão 9.1.13 do EliteMobs, o pacote de recursos do EliteMobs foi atualizado
para se alinhar com o novo método do Minecraft para usar modelos personalizados.

A estrutura atualizada do pacote de recursos do EliteMobs é a seguinte:

**elitemobs_resource_pack**

- **assets**
    - **elitemobs**
        - **items**
            - Este diretório contém arquivos JSON que definem quais modelos personalizados o Minecraft pode usar. Os
              modelos reais são armazenados na pasta `models`.
            - Subdiretórios:
                - **coins**
                - **equipment**
                - **primis_map**
                - **ui**
        - **models**
            - Esta pasta contém os arquivos de modelo reais como arquivos JSON.
            - Subdiretórios:
                - **coins**
                - **equipment**
                - **primis_map**
                - **ui**
        - **textures**
            - Esta pasta armazena todas as texturas, incluindo aquelas usadas pelos modelos.
            - Subdiretórios:
                - **blocks**
                - **gui**
                - **items** (é aqui que as texturas específicas do modelo são armazenadas)
                - **primis_map**
                - **ui**
    - **minecraft**
        - **atlases**
        - **font**
        - **models**
            - **items** (contém arquivos JSON que especificam quais itens no Minecraft devem usar modelos
              personalizados)
        - **sounds**
            - **custom** (armazena arquivos de som personalizados)

---

Vamos detalhar como um arquivo JSON na pasta *
.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\* é estruturado e o que ele faz:

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

Objetivo:
Este arquivo JSON diz ao Minecraft que este é um modelo, especifica o tipo de modelo e indica a localização do arquivo
de modelo.

Campos-chave:

`type: minecraft:model`
Isso especifica que o arquivo representa um tipo de modelo.
`model: elitemobs:coins/coin1`
Isso aponta para a localização do modelo dentro do pacote de recursos.

Detalhes do caminho:

`elitemobs:` instrui o Minecraft a procurar na pasta elitemobs dentro do diretório assets.
`coins/coin1` especifica a subpasta e o nome do arquivo de modelo.

O caminho completo para o arquivo de modelo referenciado é:
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

Uma boa maneira de testar se seus modelos personalizados estão funcionando corretamente é usar o seguinte comando:

/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]

Como Funciona:
Este comando dá-lhe uma maçã que usa o modelo `elitemobs:coins/coin1`. Se o pacote de recursos estiver configurado
corretamente, você deverá ver o modelo de moeda personalizado aplicado ao item da maçã.

Testando Seu Próprio Modelo Personalizado:
Se você adicionou seu próprio modelo personalizado ao pacote de recursos, siga estas etapas para testá-lo:

1. **Crie o JSON do Modelo**:
   Coloque seu arquivo JSON na subpasta apropriada dentro do diretório `items`.
   Por exemplo:
   `assets/elitemobs/items/mymodel/myawesomemodel.json`

2. **Adicione o Arquivo de Modelo**:
   Adicione o arquivo de modelo correspondente (`myawesomemodel.json`) à pasta `models` dentro da mesma subpasta.
   Por exemplo:
   `assets/elitemobs/models/mymodel/myawesomemodel.json`

3. **Adicione a Textura**:
   Adicione o arquivo de textura para o modelo na pasta `textures`.
   Por exemplo:
   `assets/elitemobs/textures/items/myawesomemodel.png`

---

Depois que tudo estiver configurado, use o comando abaixo para testar seu modelo:

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

Se tudo foi feito corretamente, você receberá uma maçã na sua mão e ela exibirá o seu modelo personalizado em vez do
modelo de maçã padrão.

## Perguntas?

[Pergunte no discord a qualquer momento!](https://discord.gg/9f5QSka)
