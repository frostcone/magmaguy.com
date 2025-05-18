```markdown
# Construir para o EliteMobs

A seguinte página wiki ajuda a entender o processo necessário para criar masmorras e arenas do EliteMobs.

Vocabulário:

- "Boss" - Encontro grande, destinado a ser combatido por muitas pessoas
- "Miniboss" - Encontro menor, geralmente capaz de ser morto por 1 jogador
- "Fodder" - Mobs relativamente fáceis de matar (Inimigos fáceis)

## Compreender as categorias de masmorras do EliteMobs

### Covis (Lairs)

Categoria de tamanho mais pequeno

Os Covis são geralmente estruturas de construção única de 50x50, distribuídas como mundos, e geralmente contêm um grande encontro de boss, embora alguns também possam conter um miniboss e alguns inimigos fáceis.

### Minimasmorras (Minidungeons)

Categoria de tamanho médio

As Minimasmorras são estruturas mais próximas de 100x100 ou 150x150, muitas vezes com várias estruturas ou estruturas com várias secções. Estas têm 1 boss e geralmente pelo menos 3 ou mais minibosses. Também têm muitos inimigos fáceis.

### Aventuras (Adventures)

Aventuras são mapas de aventura inteiros, geralmente não medidos em blocos. Estes são do tamanho de uma cidade ou até maiores. Têm 1 boss e mais de 10 minibosses, e dezenas de inimigos fáceis únicos que geralmente totalizam centenas ou milhares no mapa.

### Arenas (Arenas)

Arenas são desafios de arena de sobrevivência baseados em vagas no EliteMobs. Estas são geralmente 100x100. Podem ter qualquer quantidade de vagas, mas geralmente não é recomendado ir além de 50.

### Masmorras Instanciadas (Instanced Dungeons)

Masmorras Instanciadas são semelhantes às Minimasmorras, exceto que são instanciadas. O que significa que cada vez que um jogador ou um grupo de jogadores deseja ir para uma Masmorra Instanciada, um novo mundo é gerado apenas para eles.

As Masmorras Instanciadas comportam-se muito como as masmorras instanciadas que pode encontrar no seu MMO favorito. Geralmente têm três níveis de dificuldade, com as recompensas a serem melhores quanto maior for a dificuldade. Permitem que os jogadores assumam os papéis de Tank ou DPS, equipando loot que é largado dentro da masmorra instanciada. Os mobs também usarão diferentes conjuntos de poderes dependendo da dificuldade escolhida quando os jogadores iniciaram a instância. Quaisquer mobs que sejam mortos numa instância não reaparecerão durante a duração dessa instância.

Qualquer loot que seja largado dentro de uma masmorra instanciada usa o sistema de 'greed or need', o que significa que os jogadores podem votar no item largado. Como mencionado anteriormente, o loot de masmorra instanciada é feito especialmente para ser orientado para a defesa (tank) ou orientado para o ataque (DPS).

### Raids

Conteúdo instanciado - em breve

## Tematização (Theming)

A coisa mais importante sobre qualquer estrutura do EliteMobs é o tema. Os temas influenciam o design da construção, o seu conteúdo, a sua lore e os seus bosses.

Como exemplo, pode ver [O Polo Norte aqui](https://magmaguy.itch.io/elitemobs-the-north-pole). Teve o conceito de colocar bosses relacionados com o Natal numa bola de neve, resultando numa localização visualmente impressionante e mecanicamente interessante.

Aqui está outro exemplo, [O Oásis](https://magmaguy.itch.io/elitemobs-oasis). Tratava-se de criar uma localização do antigo Egito invadida por mortos-vivos e múmias, e é uma das construções mais populares no EliteMobs.

## Locais de combate (Combat locations)

Os locais de combate devem evitar criar terreno que seja facilmente explorável. Isto significa evitar fazer pilares onde os jogadores possam subir para estarem seguros, decorações que possam ser usadas para "cheese" a IA e outros obstáculos semelhantes. Algumas explorações serão sempre encontradas, e isso não é muito importante, mas os locais dos bosses devem ser menos propensos a sofrer com estas explorações.

A área de combate ideal para um boss é relativamente plana, desobstruída, com cerca de 30 blocos de raio e pode conter alguns pilares ou outros elementos do mapa atrás dos quais os jogadores devem esconder-se para superar certas mecânicas do boss.

Os corredores devem ter pelo menos 5 blocos de largura se forem destinados a ter adds neles. As arenas de miniboss podem ter cerca de 15 blocos de raio, dependendo dos poderes/tematização que têm.

Por favor, note que estas são dimensões mínimas. Não há realmente nenhum problema se exceder.

Tenha em mente que pode selar ou alterar os blocos do ambiente usando [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block) ou [Transitive Blocks]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates). Esta é uma ótima maneira de garantir que os jogadores só podem progredir mais depois de terem derrotado um certo mob.

## Projetar para o EliteMobs (Designing for EliteMobs)

Quanto melhor conhecer o EliteMobs, melhor será o conteúdo que criar para ele. A seguir está uma lista de funcionalidades do EliteMobs que o ajudarão a criar coisas interessantes para a sua masmorra:

- [Regional Bosses]($language$/elitemobs/creating_world_bosses.md) - Cada criatura nas Masmorras é um boss regional, o que significa que têm uma coleira (se ultrapassarem uma certa distância, são puxados de volta para o seu ponto de spawn) e reaparecem num temporizador.
- [Criar bosses]($language$/elitemobs/creating_bosses.md) Isto mostrará tudo o que um boss pode fazer e ser, como disfarces, multiplicadores de vida, se pode mover-se e a que velocidade, provocações e muito mais!
- [EliteScript]($language$/elitemobs/creating_powers.md) EliteScript é a ferramenta mais poderosa à sua disposição quando se trata de criar encontros inesquecíveis onde apenas a sua imaginação é o limite.
- [Baús de Tesouro]($language$/elitemobs/creating_treasure_chests.md) Estes podem ter itens ou até transformar-se em inimigos
- [Fases de boss]($language$/elitemobs/creating_boss_phases.md) - Bosses podem ter fases. Este sistema é muito poderoso porque os bosses podem transformar-se em qualquer coisa entre fases, incluindo diferentes tipos de entidade, diferentes disfarces, diferentes modelos personalizados e assim por diante.
- [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) Estes são blocos que são colocados quando um boss aparece ou morre. Também podem ser gerados e removidos quando um boss muda de fase! Podem ser usados para criar arenas dinâmicas muito interessantes.
- [Wormholes]($language$/elitemobs/creating_wormholes.md) - portais fixes que podem teletransportar jogadores para outras localizações.

## Design de encontros (Encounter design)

O design de encontros deve ser uma prioridade ao projetar a área de combate. Idealmente, teria uma ideia de quais poderes deseja usar, ou pelo menos de qual tema os poderes devem ter - algo como fogo, ou relâmpago, ou gelo, ou reforços, ou qualquer outra coisa que se encaixe com os poderes do EliteMobs. Depois de saber o que quer que os poderes sejam, pode projetar a área de combate de acordo.

Se os bosses tiverem um poder que exija fugir deles, a área precisa ser grande o suficiente para acomodar isso. Se houver um poder onde deve esconder-se atrás de um obstáculo, a estrutura precisa desse tipo de obstáculo. Há muitos detalhes que podem entrar na construção destas arenas, e quanto mais tiver em conta, melhor será o encontro.

## Modificar o Pacote de Recursos do EliteMobs (Modifying the EliteMobs Resource Pack)

A partir da versão 1.21.4 do Minecraft e da versão 9.1.13 do EliteMobs, o pacote de recursos do EliteMobs foi atualizado para se alinhar com o novo método do Minecraft para usar modelos personalizados.

A estrutura atualizada do pacote de recursos do EliteMobs é a seguinte:

**elitemobs_resource_pack**
- **assets**
  - **elitemobs**
    - **items**
      - Este diretório contém ficheiros JSON que definem quais modelos personalizados o Minecraft pode usar. Os modelos reais são armazenados na pasta `models`.
      - Subdiretórios:
        - **coins**
        - **equipment**
        - **primis_map**
        - **ui**
    - **models**
      - Esta pasta contém os ficheiros de modelo reais como ficheiros JSON.
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
      - **items** (contém ficheiros JSON que especificam quais itens no Minecraft devem usar modelos personalizados)
    - **sounds**
      - **custom** (armazena ficheiros de som personalizados)

---

Vamos detalhar como um ficheiro JSON na pasta *.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\* está estruturado e o que faz:

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

Propósito:
Este ficheiro JSON diz ao Minecraft que isto é um modelo, especifica o tipo de modelo e indica a localização do ficheiro do modelo.

Campos Chave:

`type: minecraft:model`
Isto especifica que o ficheiro representa um tipo de modelo.
`model: elitemobs:coins/coin1`
Isto aponta para a localização do modelo dentro do pacote de recursos.

Detalhes do Caminho:

`elitemobs:` instrui o Minecraft a procurar na pasta elitemobs dentro do diretório assets.
`coins/coin1` especifica a subpasta e o nome do ficheiro do modelo.

O caminho completo para o ficheiro de modelo referenciado é:
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

Uma boa maneira de testar se os seus modelos personalizados estão a funcionar corretamente é usar o seguinte comando:

/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]

Como Funciona:
Este comando dá-lhe uma maçã que usa o modelo `elitemobs:coins/coin1`. Se o pacote de recursos estiver configurado corretamente, deverá ver o modelo de moeda personalizado aplicado ao item maçã.

Testar o Seu Próprio Modelo Personalizado:
Se adicionou o seu próprio modelo personalizado ao pacote de recursos, siga estes passos para o testar:

1. **Criar o JSON do Modelo**:
   Coloque o seu ficheiro JSON na subpasta apropriada dentro do diretório `items`.
   Por exemplo:
   `assets/elitemobs/items/mymodel/myawesomemodel.json`

2. **Adicionar o Ficheiro do Modelo**:
   Adicione o ficheiro de modelo correspondente (`myawesomemodel.json`) à pasta `models` dentro da mesma subpasta.
   Por exemplo:
   `assets/elitemobs/models/mymodel/myawesomemodel.json`

3. **Adicionar a Textura**:
   Adicione o ficheiro de textura para o modelo na pasta `textures`.
   Por exemplo:
   `assets/elitemobs/textures/items/myawesomemodel.png`

---

Assim que tudo estiver configurado, use o comando abaixo para testar o seu modelo:

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

Se tudo foi feito corretamente, receberá uma maçã na sua mão, e ela exibirá o seu modelo personalizado em vez do modelo de maçã padrão.

## Perguntas?

[Pergunte no discord a qualquer momento!](https://discord.gg/9f5QSka)
```