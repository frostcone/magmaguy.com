Aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# O que é o LibsDisguises?

LibsDisguises é um plugin que permite aos servidores disfarçar qualquer entidade como qualquer outro tipo de entidade. Por exemplo, pode disfarçar jogadores como ovelhas, ou disfarçar ovelhas como jogadores.

Existe uma versão [gratuita](https://www.spigotmc.org/resources/libs-disguises-free.81/) e uma versão [premium](https://www.spigotmc.org/resources/libs-disguises.32453/) do LibsDisguises. O LibsDisguises foi criado e é mantido por outros desenvolvedores, por isso, por favor, não peça suporte para ele nas secções de suporte do EliteMobs.

# Como posso disfarçar uma entidade como um jogador?

Para disfarçar um boss personalizado (ou um boss regional, ou até mesmo um NPC!) como um jogador, tudo o que precisa fazer é adicionar a seguinte linha ao ficheiro de configuração do boss:

```yml
disguise: player:nome
```

Por exemplo, se quiser disfarçar um boss com a skin do meu jogador, a linha de configuração seria assim:

```yml
disguise: player:magmaguy
```

# Como posso disfarçar uma entidade como uma skin de jogador, mas não necessariamente um jogador?

Esta é a forma mais flexível de disfarçar uma entidade como um jogador, pois permite aos administradores usar skins online ou até mesmo criar as suas próprias para disfarçar um boss. Também é um pouco mais complexo de fazer.

Para simplificar, os exemplos listados aqui assumem que vai usar uma skin disponível online. O Libsdisguises oferece diferentes formas de desserializar skins, incluindo uma onde coloca a sua própria skin personalizada na pasta deles. Verifique a documentação deles se não quiser usar uma skin já disponível online.

### 1. Definir o disfarce

Para o disfarce, vai querer fazer algo assim:

```yaml
disguise: custom:seu_nome_de_skin_único
```

### 2. Gerar os dados do disfarce

Esta é a parte complicada. Começa por criar a seguinte entrada de configuração:

```yaml
customDisguiseData: player seu_nome_de_skin_único setskin
```

*É crucial que o nome que define em disguise para o seu_nome_de_skin_único corresponda ao que está em customDisguiseData!*

Depois, precisará de desserializar uma skin de jogador. A maneira mais fácil de fazer isto para uma skin publicamente disponível online é usando o comando `grabskin` do LibsDisguises.

Digamos que quer obter [esta skin](https://www.minecraftskins.com/skin/18512841/buff-villager/).

Para fazer isto, precisa executar o comando `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`

**Nota: precisa fornecer um link direto para o ficheiro da skin, e não para a página que contém a skin. Note para onde o link aponta. No [skindex](https://www.minecraftskins.com/), pode obter o link direto pressionando o botão "Image Link" que está presente no canto inferior direito de cada skin.**

Depois de fazer isto com sucesso, o LibsDisguises fornecerá cerca de 3-6 números que dizem "Click to copy". Se clicar neles, aparecerá uma longa lista de números e letras. Quer garantir que começa no 1 e faz todos os números por ordem. Para copiá-los, pressione ctrl-a e depois ctrl-c, depois cole-os no ficheiro com ctrl-v. Uma vez feito, deve parecer-se com isto:

```yaml
customDisguiseData: player seu_nome_de_skin_único setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWxMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANaxGzv3xcWARLbq1FuQ6yYdXDY8Coc02Y/POMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

E é isso! `customDisguiseData` funcionará com qualquer código de skin desserializado, por isso, se encontrar outras formas de gerar o mesmo código no LibsDisguises, pode usá-lo aqui.

A vantagem do customDisguiseData é que é autónomo, o que significa que não precisa depender de jogadores online, jogadores com skins específicas ou qualquer outra coisa. O EliteMobs usa-o para dar skins a todos os bosses disfarçados nos pacotes de masmorras!

# Como posso disfarçar um boss personalizado como outro tipo de entidade?

Para disfarçar um boss personalizado (ou um boss regional) como outro tipo de entidade, tudo o que precisa fazer é adicionar a seguinte linha ao ficheiro de configuração do boss:

```yml
disguise: TIPO_DE_ENTIDADE
```

Por exemplo, se quiser que o seu boss personalizado seja disfarçado como uma ovelha, faria:

```yml
disguise: SHEEP
```
## Como posso disfarçar um boss personalizado como uma entidade bebé?

Para disfarçar um boss personalizado (ou um boss regional) como uma entidade bebé, tudo o que precisa fazer é adicionar a seguinte linha ao ficheiro de configuração do boss:

```yml
disguise: HOGLIN:baby
```
Como pode ver neste exemplo, o nosso boss seria disfarçado como um Hoglin Bebé.

# Como posso disfarçar uma entidade com um disfarce personalizado?

Para disfarçar um boss personalizado (ou um boss regional) como uma entidade personalizada do LibsDisguises, precisa primeiro criar o disfarce no LibsDisguises.

Uma vez feito isso, a sintaxe correta é:

```yml
disguise: custom:seu_nome_de_disfarce_personalizado
```

# Disfarces válidos

Não existe uma lista oficial de tipos de entidade válidos, mas aqui está uma lista não oficial que deve funcionar no momento em que isto foi escrito (3 de agosto de 2020)

<details>

<summary><b>Expandir Lista</b></summary>

```
    ARMOR_STAND
    ARROW
    BAT
    BLAZE
    BOAT
    CAT
    CAVE_SPIDER
    CHICKEN
    COD
    COW
    CREEPER
    DOLPHIN
    DONKEY
    DRAGON_FIREBALL
    DROWNED
    DROPPED_ITEM
    EGG
    ELDER_GUARDIAN
    ENDER_CRYSTAL
    ENDER_DRAGON
    ENDER_PEARL
    ENDER_SIGNAL
    ENDERMAN
    ENDERMITE
    EVOKER
    EVOKER_FANGS
    EXPERIENCE_ORB
    FALLING_BLOCK
    FIREBALL
    FIREWORK
    FISHING_HOOK
    FOX
    GHAST
    GIANT
    GUARDIAN
    HOGLIN
    HORSE
    HUSK
    ILLUSIONER
    IRON_GOLEM
    ITEM_FRAME
    LLAMA
    LLAMA_SPIT
    LEASH_HITCH
    MAGMA_CUBE
    MINECART
    MINECART_CHEST
    MINECART_COMMAND
    MINECART_FURNACE
    MINECART_HOPPER
    MINECART_MOB_SPAWNER
    MINECART_TNT
    MODDED_MISC
    MODDED_LIVING
    MULE
    MUSHROOM_COW
    OCELOT
    PAINTING
    PANDA
    PARROT
    PHANTOM
    PIG
    PIG_ZOMBIE
    PIGLIN
    PILLAGER
    PLAYER
    POLAR_BEAR
    PRIMED_TNT
    PUFFERFISH
    RABBIT
    RAVAGER
    SALMON
    SHEEP
    SHULKER
    SHULKER_BULLET
    SILVERFISH
    SKELETON
    SKELETON_HORSE
    SLIME
    SMALL_FIREBALL
    SNOWBALL
    SNOWMAN
    SPECTRAL_ARROW
    SPLASH_POTION
    SQUID
    STRAY
    STRIDER
    THROWN_EXP_BOTTLE
    TIPPED_ARROW
    TRIDENT
    TRADER_LLAMA
    TROPICAL_FISH
    TURTLE
    VEX
    VILLAGER
    VINDICATOR
    WANDERING_TRADER
    WITCH
    WITHER
    WITHER_SKELETON
    WITHER_SKULL
    WOLF
    ZOGLIN
    ZOMBIE
    ZOMBIE_HORSE
    ZOMBIE_VILLAGER
    ZOMBIFIED_PIGLIN
```

</details>