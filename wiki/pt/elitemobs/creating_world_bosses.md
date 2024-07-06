[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Criando Chefes Mundiais
*Chefes Mundiais também são às vezes chamados de Chefes Regionais.*
## O que são eles?

Chefes Mundiais são Chefes Personalizados configurados para serem gerados em uma localização específica com um atraso específico. Esses também são os chefes usados em Masmorras. Embora nesta seção discutiremos especificamente a criação de Chefes Mundiais para uso fora de masmorras.

## Para que eles servem?

Chefes Mundiais permitem que os jogadores enfrentem um desafio fixo, sabendo que o loot será recompensador.

## O que preciso para criar um Chefe Mundial?

1. **Uma localização**. Uma sala de chefe é recomendada, com um raio de aproximadamente 15 blocos (30 blocos de largura) devido ao alcance de aggro do Minecraft. Além disso, certifique-se de que o terreno seja protegido por meio de uma região do [WorldGuard](https://dev.bukkit.org/projects/worldguard) (para que os jogadores não possam construir armadilhas) e que o terreno não possa ser explorado para combate.
2. **Um tempo de reabastecimento**. O tempo de reabastecimento é essencial. Eu não recomendo usar um tempo de reabastecimento inferior a 30 minutos, ou então o reaparecimento do chefe será menos um evento. 1 hora é um bom tempo, mas você também pode querer fazer com que o chefe reapareça uma vez por dia ou até mesmo uma vez por semana.
3. **Um tempo de escape**. Quanto maior o tempo de reabastecimento, maior deve ser o tempo de escape. Também leve em consideração que o tempo de escape deve ser longo o suficiente para que as pessoas possam desafiar o chefe confortavelmente. Os tempos de escape são importantes se você não quiser permitir que os jogadores façam kamikaze no chefe até a morte. Isso não é obrigatório, nem mesmo recomendado se você quiser fazer chefes de reabastecimento massivos de uma semana.
4. **Um Chefe Personalizado**. Chefes Mundiais são realmente apenas Chefes Personalizados com regras de geração personalizadas. Certifique-se de selecionar poderes com uma boa compatibilidade de combate em tamanho de ataque.
5. **Loot interessante**. O grande atrativo dos Chefes Mundiais, além do desafio, é o loot. Certifique-se de que os jogadores possam obter algo disso que simplesmente não possam obter em nenhum outro lugar.
6. **Um tema**. Um bom Chefe Regional deve ter um tema, com uma localização temática e loot temático.

## Opções de configuração de Chefe Personalizado para Chefes Mundiais:

Essas configurações são adicionadas aos arquivos de configuração normal do Chefe Personalizado. [Uma página wiki extensa sobre eles pode ser encontrada aqui]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Define se o chefe é um chefe regional. Chefes regionais são outro nome para Chefes Mundiais, então você deseja definir isso como `true`.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `isRegionalBoss` | [Booleano](#boolean) | `false` |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isRegionalBoss: true
```

</div>

</details>

***

### spawnLocations

As localizações de geração devem ser definidas a partir do jogo usando o comando `/em addSpawnLocation <filename.yml>`.

Embora seja possível adicionar localizações manualmente da configuração, eu não recomendo tentar fazer isso, pois é muito fácil errar.

| Chave              |           Valores            | Padrão |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [Lista de Strings](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

Localizações em arquivos de configuração (para usuários avançados) Os arquivos de configuração do Chefe Regional armazenam todas as instâncias daquele Chefe Regional em um único arquivo armazenando várias localizações de geração, bem como tempos de reabastecimento. 

Em termos práticos, isso significa que esta entrada:

```yaml
spawnLocations:
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
- elitemobs_sewer_maze,-135.02262355317436,168.2,-153.28849346821508,-98.53906,60.750263:1609026066482
- elitemobs_sewer_maze,-70.43846307626053,168.2,-174.13499832314378,-271.24023,64.19999:1610710886530
- elitemobs_sewer_maze,-130.39762674971664,168.2,-171.67396911490718,-47.532227,51.900173:1609026066482
- elitemobs_sewer_maze,-117.12782160766056,162.2,-166.40989416757444,-71.37402,-1.4997427:1610710974882
- elitemobs_sewer_maze,-105.13138759611667,168.2,-169.85898023126538,-124.34766,41.24988:1610710945331
- elitemobs_sewer_maze,-106.21847515732084,169.2,-152.3609257554766,-170.86523,21.450315:1610537606222
```

contém 7 Chefes Regionais diferentes, em localizações diferentes e com tempos de reabastecimento diferentes. 

Vamos dividir os detalhes, dando uma olhada no primeiro Chefe Regional:

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Como isso segue o formato `world,x,y,z,pitch,yaw:unixTimeStamp`, o chefe está gerando em um mundo chamado `elitemobs_sewer_maze` em x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, pitch = `-271.24023`, yaw = `64.19999`.

O carimbo de tempo unix armazena o tempo, em tempo unix, em que o chefe será reabastecido. Isso é usado para armazenar tempos de reabastecimento por meio de reinicializações. Se você deseja saber a que hora isso corresponde, existem inúmeras ferramentas de conversão de tempo unix para tempo real que você pode encontrar online. 

Se você deseja que um chefe específico seja reabastecido após uma recarga ou reinicialização, tudo o que você precisa fazer é limpar a entrada `:unixTimeStamp`.

</div>

</details>

***

### spawnCooldown

Define quanto tempo leva para o chefe reaparecer, em **minutos**.

**Observação: reabastecimentos mais longos são recomendados para chefes grandes!**.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `spawnCooldown` | [Integer](#integer) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
spawnCooldown: 20
```

</div>

</details>

***

### leashRadius

Define o raio a partir da `spawnLocation` que o Chefe Mundial pode ir antes de ser teletransportado de volta ao seu ponto de geração. Isso impede que os jogadores arrasem o chefe para uma localização onde seja mais fácil lutar contra ele.

**Observação: tente evitar criar áreas de combate que requerem guias com menos de 20 blocos, pois isso tornará a luta pior.**

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `leashRadius` | [Integer](#integer) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
leashRadius: 30
```

</div>

</details>

***

### Blocos Transitivos

Também conhecido como `onSpawnBlockStates` e `onRemoveBlockStates`.

Esses valores permitem que os Chefes Regionais gerem blocos quando eles entram em combate e os removam quando eles são removidos, o que significa quando eles escapam devido ao tempo limite ou quando eles morrem.

**Esta é a forma como você pode fazer com que os chefes abram ou fechem portas / áreas ou até mesmo modifiquem uma arena durante o combate se estiver usando isso com chefes de fase!**

| Chave       |          Valores          | Padrão |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | Veja Explicação Detalhada |  nenhum   |


| Chave       | Values  | Padrão |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | Veja Explicação Detalhada |  nenhum   |

<details> 

<summary><b>Explicação Detalhada</b></summary>

<div align="left">

**Todos os blocos são relativos à localização de geração. Certifique-se de ter sua localização de geração final antes de começar a definir blocos.**

</br>Se você já criou uma área grande de Blocos Transitivos e agora precisa mover o chefe, mas não deseja refazer os Blocos Transitivos. Então você pode usar a ação [Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport) do EliteScript para mover o chefe para a localização correta depois que ele gerar. Lembre-se de que você terá que ajustar sua guia de acordo.

Devido à complexidade de definir blocos, não é recomendado que você faça isso manualmente. Você deve usar os seguintes comandos para fazer isso:

- /em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em cancelblocks

Vamos dividir isso.

**/em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

O comando mais básico. Este é um botão que você executa uma vez para iniciar e novamente para confirmar. Assim como todos os outros comandos, você escolhe se está definindo esses blocos para serem modificados para o estado `on_spawn` ou `on_remove`.

Se estiver registrando o on\_spawn, isso modificará os blocos quando o chefe gerar ou reaparecer. Se estiver registrando o on\_remove, isso modificará os blocos quando o chefe morrer ou expirar usando a mecânica de tempo limite do Chefe Personalizado.

Para registrar blocos, basta colocar ou remover os blocos que você deseja modificar enquanto esta configuração estiver ativa.

**/em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Se você quiser modificar blocos já definidos, pode usar este comando. Funciona de forma muito semelhante a `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Assim como `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`, isso permite que você registre blocos, mas permite selecioná-los obtendo dois cantos diametralmente opostos (mesmo que a seleção de região do worldedit / worldguard) em vez de selecionar blocos individualmente. 

Por razões de segurança, existe um limite de 200 blocos (por padrão, modificável em config.yml) para seleções regionais. Lembre-se de que cada bloco é modificado no mesmo tick, então se você estiver modificando muito terreno, provavelmente começará a ver grandes picos de lag ao executar essas modificações.

**/em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Funciona da mesma forma que `/em registerblocksedit`, mas para áreas. Pode ser usado para ultrapassar o limite de registro de 200 blocos (padrão) para áreas.

**/em cancelblocks**

A qualquer momento, se um erro for cometido ao registrar blocos, você pode executar este comando para cancelar o registro. Ele reverterá quaisquer alterações que você começou a registrar nessa edição / registro.

</div>

</details>

</div>

***

## Dicas profissionais para criar uma boa e grande luta de Chefe Regional

1. **Pense realmente em como os poderes do seu Chefe Personalizado se complementam**. Você não quer que seu chefe passe a maior parte do tempo parado porque está lançando algo, pois isso pode realmente tornar a luta muito fácil. Você também não quer que o chefe tenha todos os ataques à distância e nenhum poder de combate corpo a corpo, ou vice-versa, a menos que você esteja projetando algo muito específico. O teste de jogo é importante.


2. **Saúde - muita saúde**. Esse multiplicador de saúde provavelmente deve estar em 10 se você quiser que as pessoas realmente se juntem para lutar contra o chefe.


3. **Dano - não muito**. Os mobs do EliteMobs já são extremamente mortais por padrão, e os poderes tendem a ser exponencialmente mais mortais. Em vez de aumentar o dano até o teto, considere usar poderes para fazer o chefe golpear mais forte.


4. **Explorações, em todos os lugares**. Certifique-se de que o terreno não seja explorável. Coloque o chefe em uma sala fechada para evitar que as pessoas tentem atirar nele de longe. O poder de invulnerabilidade a flechas provavelmente é extremamente importante para muitos Chefes Mundiais, já que os mobs do Minecraft não conseguem lidar com ser atingidos por flechas de longe, então se você quiser permitir ataques com arco, certifique-se de que os arcos não possam ser explorados.


5. **Conhecer o plugin**. Existem muitos truques minúsculos para vencer o EliteMobs, como como alguns poderes podem ser contra-atacados usando escudos, enquanto outros devem ser contra-atacados esquivando-se ou até mesmo fugindo temporariamente do chefe. Quanto mais você souber como os poderes funcionam e como são contra-atacados, melhores serão os chefes que você criar.

