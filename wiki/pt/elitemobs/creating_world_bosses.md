Aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# Criar Bosses Mundiais
*Os Bosses Mundiais também são por vezes referidos como Bosses Regionais.*
## O que são?

Bosses Mundiais são Bosses Personalizados definidos para aparecer numa localização específica com um atraso específico. Estes são também os bosses usados em Dungeons. Embora nesta secção discutiremos especificamente a criação de Bosses Mundiais para uso fora de dungeons.

## Para que servem?

Os Bosses Mundiais permitem que os jogadores enfrentem um desafio fixo, sabendo que o loot será recompensador.

## O que preciso para criar um Boss Mundial?

1. **Uma localização**. Recomenda-se uma sala de boss, com um raio de aproximadamente 15 blocos (30 blocos de diâmetro) devido ao alcance de aggro do Minecraft. Além disso, certifique-se de que o terreno está protegido através de uma região [WorldGuard](https://dev.bukkit.org/projects/worldguard) (para que os jogadores não possam construir armadilhas) e que o terreno não pode ser explorado para combate.
2. **Um tempo de respawn**. O temporizador de respawn é essencial. Não recomendo fazer menos de um temporizador de respawn de 30 minutos, ou o respawn do boss será menos um evento. 1 hora é um tempo razoavelmente bom, mas também pode querer que o boss faça respawn uma vez por dia ou mesmo uma vez por semana.
3. **Um tempo de fuga**. Quanto maior o respawn, maior deve ser o tempo de fuga. Tenha também em conta que o tempo de fuga deve ser longo o suficiente para que as pessoas possam desafiar o boss confortavelmente. Os temporizadores de fuga são importantes se não quiser permitir que os jogadores façam kamikaze no boss até à morte. Isto não é obrigatório, nem mesmo recomendado se quiser fazer bosses com respawn massivo de uma semana.
4. **Um Boss Personalizado**. Os Bosses Mundiais são na verdade apenas Bosses Personalizados com regras de spawn personalizadas. Certifique-se de que seleciona poderes com boa compatibilidade para combate em tamanho de raid.
5. **Loot interessante**. O grande atrativo para os Bosses Mundiais, para além do desafio, é o loot. Certifique-se de que os jogadores podem obter algo dele que simplesmente não conseguem obter noutro lugar.
6. **Um tema**. Um bom boss Regional deve ter um tema, com uma localização temática e loot temático.

## Opções de configuração de Boss Personalizado para Bosses Mundiais:

Estas configurações são adicionadas aos ficheiros de configuração normais de Boss Personalizado. [Uma página wiki extensa sobre isso pode ser encontrada aqui]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Define se o boss é um boss regional. Bosses regionais são outro nome para Bosses Mundiais, então deve definir isso para `true`.

| Chave       |       Valores        | Padrão |
|-----------|:-------------------:|:-------:|
| `isRegionalBoss` | [Boolean](#boolean) | `false` |

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

As localizações de spawn devem ser definidas dentro do jogo usando o comando `/em addSpawnLocation <filename.yml>`.

Embora seja possível adicionar localizações manualmente a partir da configuração, não recomendo tentar fazer isso, pois é muito fácil errar.

| Chave              |           Valores            | Padrão |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [String List](#string_list) |  nenhum   |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

Localizações em ficheiros de configuração (para utilizadores avançados) Os ficheiros de configuração do Boss Regional armazenam todas as instâncias desse Boss Regional num único ficheiro, armazenando múltiplas localizações de spawn, bem como temporizadores de respawn.

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

contém 7 Bosses Regionais diferentes, em localizações diferentes e com temporizadores de respawn diferentes.

Vamos detalhar, olhando para o primeiro Boss Regional:

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Como isto segue o formato `mundo,x,y,z,pitch,yaw:unixTimeStamp`, o boss está a aparecer num mundo chamado `elitemobs_sewer_maze` em x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, pitch = `-271.24023`, yaw = `64.19999`.

O timestamp unix armazena o tempo, em tempo unix, em que o boss fará respawn. Isto é usado para armazenar tempos de respawn após reinícios. Se desejar saber a que hora isso corresponde, existem inúmeras ferramentas de conversão de tempo unix para tempo real que pode encontrar online.

Se desejar que um boss específico faça respawn após um reload ou restart, tudo o que precisa fazer é limpar a entrada `:unixTimeStamp`.

</div>

</details>

***

### spawnCooldown

Define quanto tempo leva para o boss fazer respawn, em **minutos**.

**Nota: respawns mais longos são recomendados para bosses grandes!**.

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

Define o raio a partir da `spawnLocation` que o Boss Mundial pode ir antes de ser teleportado de volta para o seu ponto de spawn. Isto impede que os jogadores arrastem o boss para uma localização onde seria mais fácil combatê-lo.

**Nota: tente evitar áreas de combate que exijam leashes mais curtos que 20 blocos, pois isso piorará a luta.**

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

Também conhecidos como `onSpawnBlockStates` e `onRemoveBlockStates`.

Estes valores permitem que os Bosses Regionais façam spawn de blocos quando entram em combate e os removam quando são removidos, ou seja, quando fogem devido a timeout ou quando morrem.

**É assim que pode fazer com que os bosses abram ou fechem portas/áreas ou até modifiquem uma arena durante o combate, se estiver a usá-lo com bosses de fase!**

| Chave       |          Valores          | Padrão |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | Ver Explicação Detalhada |  nenhum   |


| Chave       | Valores  | Padrão |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | Ver Explicação Detalhada |  nenhum   |

<details>

<summary><b>Explicação Detalhada</b></summary>

<div align="left">

**Todos os blocos são relativos à localização de spawn. Certifique-se de que tem a sua localização de spawn final antes de começar a definir quaisquer blocos.**

</br>Se já criou uma grande área de Blocos Transitivos e agora precisa de mover o boss, mas não quer refazer os Blocos Transitivos. Então pode usar a ação [Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport) do EliteScript para mover o boss para a localização correta após ele fazer spawn. Tenha em mente que terá de ajustar o seu leash de acordo.

Devido à complexidade de definir blocos, não é recomendado que faça isto manualmente. Deve usar os seguintes comandos para o fazer:

- /em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em cancelblocks

Vamos detalhar isto.

**/em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

O comando mais básico. Isto é um toggle que executa uma vez para começar e novamente para confirmar. Tal como todos os outros comandos, escolhe se está a definir estes blocos para serem modificados para o estado `on_spawn` ou `on_remove`.

Se estiver a registar o on\_spawn, isto modificará os blocos quando o boss fizer spawn ou respawn. Se estiver a registar o on\_remove, isto modificará os blocos quando o boss morrer ou atingir o timeout usando a mecânica de timeout do Boss Personalizado.

Para registar blocos, simplesmente coloque ou remova os blocos que deseja modificar enquanto esta configuração estiver ativa.

**/em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Se quiser modificar blocos já definidos, pode usar este comando. Funciona de forma muito semelhante a `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Tal como `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`, isto permite registar blocos, mas permite selecioná-los obtendo dois cantos diametralmente opostos (o mesmo que a seleção de região do worldedit / worldguard) em vez de selecionar blocos individualmente.

Por razões de segurança, há um limite de 200 blocos (por padrão, modificável em config.yml) para seleções regionais. Tenha em mente que cada bloco é modificado no mesmo tick, então se estiver a modificar muito terreno, provavelmente começará a ver grandes picos de lag ao executar estas modificações.

**/em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Funciona da mesma forma que `/em registerblocksedit`, mas para áreas. Pode ser usado para ultrapassar o limite de registo de 200 (padrão) blocos para áreas.

**/em cancelblocks**

A qualquer momento, se cometer um erro ao registar blocos, pode executar este comando para cancelar o registo. Ele reverterá quaisquer alterações que começou a registar nessa edição / registo.

</div>

</details>

</div>

***

## Dicas profissionais para criar uma boa e grande luta de Boss Regional

1. **Pense realmente em como os poderes do seu Boss Personalizado se complementam**. Não quer que o seu boss passe a maior parte do tempo parado porque está a lançar algo, pois isso pode tornar a luta realmente fácil. Também não quer que o boss tenha apenas ataques à distância e nenhum poder corpo a corpo ou o oposto, a menos que esteja a desenhar algo muito específico. Testar o jogo é importante.


2. **Vida - muita**. Esse multiplicador de vida provavelmente deve estar num sólido 10 se quiser que as pessoas realmente se agrupem para lutar contra o boss.


3. **Dano - não muito**. Os EliteMobs já são extremamente mortíferos por padrão, e os poderes tendem a ser exponencialmente mais mortíferos. Em vez de aumentar o dano ao máximo, considere usar poderes para fazer o boss bater mais forte.


4. **Exploits, por todo o lado**. Certifique-se extra de que o terreno não é explorável. Coloque o boss numa sala fechada para evitar que as pessoas tentem atirar nele de longe. O poder de invulnerabilidade a flechas é provavelmente extremamente importante para muitos Bosses Mundiais, já que os mobs do Minecraft não conseguem lidar com serem atingidos de chunks de distância, então se quiser permitir ataques com arco, certifique-se de que os arcos não podem ser explorados.


5. **Conhecer o plugin**. Existem muitos pequenos truques para vencer EliteMobs, como alguns poderes podem ser contrariados usando escudos, enquanto outros devem ser contrariados esquivando-se ou mesmo fugindo temporariamente do boss. Quanto mais souber como os poderes funcionam e como são contrariados, melhores serão os bosses que criar.