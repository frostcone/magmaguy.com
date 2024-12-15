# Criando Chefes Mundiais
*Os Chefes Mundiais também são, por vezes, referidos como Chefes Regionais.*
## O que são?

Chefes Mundiais são Chefes Personalizados definidos para aparecerem num local específico com um atraso específico. Estes são também os chefes usados em Masmorras. No entanto, nesta seção, vamos abordar especificamente a criação de Chefes Mundiais para uso fora das masmorras.

## Para que servem?

Os Chefes Mundiais permitem que os jogadores enfrentem um desafio fixo, sabendo que o saque será recompensador.

## O que preciso para criar um Chefe Mundial?

1. **Um local**. Uma sala de chefe é recomendada, com um raio de aproximadamente 15 blocos (30 blocos de largura) devido ao alcance de agro do Minecraft. Além disso, certifique-se de que o terreno está protegido através de uma região do [WorldGuard](https://dev.bukkit.org/projects/worldguard) (para que os jogadores não possam construir armadilhas) e que o terreno não possa ser explorado para combate.
2. **Um tempo de reaparecimento**. O temporizador de reaparecimento é essencial. Não recomendo fazer um temporizador de reaparecimento inferior a 30 minutos, caso contrário, o reaparecimento do chefe será menos um evento. 1 hora é um tempo bastante bom, mas também podes querer que o chefe reapareça uma vez por dia ou até uma vez por semana.
3. **Um tempo de fuga**. Quanto maior o tempo de reaparecimento, maior deve ser o tempo de fuga. Também tem em conta que o tempo de fuga deve ser longo o suficiente para que as pessoas possam desafiar o chefe confortavelmente. Os temporizadores de fuga são importantes se não quiseres permitir que os jogadores façam kamikaze ao chefe até à morte. Isto não é obrigatório, nem sequer recomendado se quiseres fazer chefes de reaparecimento massivo de uma semana.
4. **Um Chefe Personalizado**. Os Chefes Mundiais são, na verdade, apenas Chefes Personalizados com regras de aparecimento personalizadas. Certifica-te de que selecionas poderes com uma boa compatibilidade de combate para o tamanho de raid.
5. **Saque interessante**. O grande atrativo para os Chefes Mundiais, para além do desafio, é o saque. Certifica-te de que os jogadores podem obter algo dele que simplesmente não podem obter em outros lugares.
6. **Um tema**. Um bom chefe Regional deve ter um tema, com um local temático e saque temático.

## Opções de configuração de Chefes Personalizados para Chefes Mundiais:

Estas definições são adicionadas aos ficheiros de configuração normais de Chefes Personalizados. [Uma extensa página wiki sobre eles pode ser encontrada aqui]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Define se o chefe é um chefe regional. Chefes regionais são outro nome para Chefes Mundiais, por isso queres definir isso como `true`.

| Chave | Valores | Padrão |
|-----------|:-------------------:|:-------:|
| `isRegionalBoss` | [Booleano](#booleano) | `false` |

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

As localizações de aparecimento devem ser definidas no jogo usando o comando `/em addSpawnLocation <filename.yml>`.

Embora seja possível adicionar manualmente as localizações da configuração, não recomendo tentar fazê-lo, pois é muito fácil errar.

| Chave | Valores | Padrão |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [Lista de String](#string_list) |  nenhum   |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

Localizações em ficheiros de configuração (para utilizadores avançados) Os ficheiros de configuração do Chefe Regional armazenam todas as instâncias desse Chefe Regional num único ficheiro, armazenando várias localizações de aparecimento, bem como temporizadores de reaparecimento.

Na prática, isso significa que esta entrada:

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

contém 7 Chefes Regionais diferentes, em locais diferentes e com temporizadores de reaparecimento diferentes.

Vamos detalhar os detalhes, analisando o primeiro Chefe Regional:

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Como isto segue o formato `mundo,x,y,z,pitch,yaw:unixTimeStamp`, o chefe está a aparecer num mundo chamado `elitemobs_sewer_maze` em x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, pitch = `-271.24023`, yaw = `64.19999`.

O carimbo de data/hora unix armazena a hora, em hora unix, em que o chefe irá reaparecer. Isto é usado para armazenar os tempos de reaparecimento através de reinicializações. Se quiseres saber a que horas isso corresponde, existem inúmeras ferramentas de conversão de tempo unix para tempo real que podes encontrar online.

Se quiseres que um chefe específico reapareça após um recarregamento ou reinicialização, tudo o que precisas de fazer é limpar a entrada `:unixTimeStamp`.

</div>

</details>

***

### spawnCooldown

Define quanto tempo demora para o chefe reaparecer, em **minutos**.

**Nota: reaparecimentos mais longos são recomendados para chefes grandes!**.

| Chave | Valores | Padrão |
|-----------|:-------------------:|:-------:|
| `spawnCooldown` | [Inteiro](#integer) |  nenhum   |

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

Define o raio a partir da `spawnLocation` para onde o Chefe Mundial vai antes de ser teletransportado de volta para o seu ponto de aparecimento. Isto evita que os jogadores arrastem o chefe para um local onde possa ser mais fácil combatê-lo.

**Nota: tenta evitar fazer áreas de combate que exigem trelas com menos de 20 blocos, pois isso irá piorar a luta.**

| Chave | Valores | Padrão |
|-----------|:-------------------:|:-------:|
| `leashRadius` | [Inteiro](#integer) |  nenhum   |

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

Estes valores permitem que os Chefes Regionais façam aparecer blocos quando entram em combate e os removam quando são removidos, o que significa quando eles escapam devido ao tempo limite ou quando morrem.

**É assim que podes fazer com que os chefes abram ou fechem portas / áreas ou até modifiquem uma arena durante o combate se estiveres a usá-lo com chefes de fase!**

| Chave | Valores | Padrão |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | Ver Explicação Detalhada |  nenhum   |

| Chave | Valores | Padrão |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | Ver Explicação Detalhada |  nenhum   |

<details> 

<summary><b>Explicação Detalhada</b></summary>

<div align="left">

**Todos os blocos são relativos à localização de aparecimento. Certifica-te de que tens a tua localização de aparecimento final antes de começares a definir quaisquer blocos.**

</br>Se já fizeste uma grande área de Blocos Transitivos e agora precisas de mover o chefe, mas não queres refazer os Blocos Transitivos. Então, podes usar a ação EliteScript [Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport) para mover o chefe para o local correto depois de aparecer. Tem em mente que terás de ajustar a tua trela de acordo.

Devido à complexidade de definir blocos, não é recomendado que o faças manualmente. Deves usar os seguintes comandos para o fazer:

- /em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em cancelblocks

Vamos detalhar isto.

**/em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

O comando mais básico. Este é um botão de alternar que executes uma vez para começar e novamente para confirmar. Tal como todos os outros comandos, escolhes se estás a definir estes blocos para serem modificados para o estado `on_spawn` ou `on_remove`.

Se estiveres a registar o on\_spawn, isto irá modificar os blocos quando o chefe aparecer ou reaparecer. Se estiveres a registar o on\_remove, isto irá modificar os blocos quando o chefe morrer ou expirar o tempo usando a mecânica de tempo limite do Chefe Personalizado.

Para registar blocos, basta colocar ou remover os blocos que queres modificar enquanto esta definição estiver ativada.

**/em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Se quiseres modificar blocos já definidos, podes usar este comando. Funciona de forma muito semelhante a `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Tal como `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`, isto permite-te registar blocos, mas permite selecioná-los obtendo dois cantos diametralmente opostos (o mesmo que a seleção de região worldedit / worldguard) em vez de selecionar blocos individualmente.

Por motivos de segurança, existe um limite de 200 blocos (por padrão, modificável em config.yml) para seleções regionais. Tem em mente que cada bloco é modificado no mesmo tick, por isso, se estiveres a modificar muito terreno, provavelmente começarás a ver grandes picos de lag quando estiveres a executar estas modificações.

**/em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Funciona da mesma forma que `/em registerblocksedit`, mas para áreas. Pode ser usado para ultrapassar o limite de registo de 200 (padrão) blocos para áreas.

**/em cancelblocks**

A qualquer momento, se for cometido um erro ao registar blocos, podes executar este comando para cancelar o registo. Irá reverter quaisquer alterações que tenhas começado a registar nessa edição / registo.

</div>

</details>

</div>

***

## Dicas profissionais para tornar uma boa e grande luta de Chefe Regional

1. **Pensa realmente em como os poderes do teu Chefe Personalizado se complementam**. Não queres que o teu chefe passe a maior parte do tempo parado porque está a lançar algo, pois isso pode tornar a luta muito fácil. Também não queres que o chefe tenha todos os ataques à distância e nenhum poder corpo a corpo ou o oposto, a menos que estejas a criar algo muito específico. O teste é importante.

2. **Vida - muita**. Esse multiplicador de vida provavelmente deveria estar num valor sólido de 10 se queres que as pessoas se juntem para lutar contra o chefe.

3. **Dano - não muito**. Os EliteMobs já são extremamente mortais por padrão, e os poderes tendem a ser exponencialmente mais mortais. Em vez de aumentar o dano até ao teto, considera usar poderes para fazer o chefe acertar mais forte.

4. **Explorações, em todo o lado**. Certifica-te de que o terreno não é explorável. Coloca o chefe numa sala fechada para evitar que as pessoas tentem acertá-lo de longe. O poder de invulnerabilidade à seta é provavelmente extremamente importante para muitos Chefes Mundiais, uma vez que os mobs do Minecraft não conseguem lidar com serem acertados de blocos de distância, por isso, se quiseres permitir ataques de arco, certifica-te de que os arcos não podem ser explorados.

5. **Conhece o plugin**. Existem muitos pequenos truques para derrotar os EliteMobs, como a forma como alguns poderes podem ser contrariados usando escudos, enquanto outros devem ser contrariados desviando ou mesmo fugindo temporariamente do chefe. Quanto mais souberes como os poderes funcionam e como são contrariados, melhores serão os chefes que criares.
