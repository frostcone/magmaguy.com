# Criando Bosses Mundiais

*Bosses Mundiais também são, por vezes, referidos como Bosses Regionais.*
## O que são?

Bosses Mundiais são Bosses Personalizados definidos para aparecerem num local específico com um atraso específico. Estes
são também os bosses usados em Masmorras. No entanto, nesta seção, vamos discutir especificamente a criação de Bosses
Mundiais para uso fora de masmorras.

## Para que servem?

Os Bosses Mundiais permitem que os jogadores enfrentem um desafio fixo sabendo que o saque será recompensador.

## O que preciso para criar um Boss Mundial?

1. **Um local**. Recomenda-se uma sala de boss, com um raio de aproximadamente 15 blocos (30 blocos de diâmetro) devido
   ao alcance de aggro do Minecraft. Além disso, certifique-se de que o terreno está protegido através de uma região
   do [WorldGuard](https://dev.bukkit.org/projects/worldguard) (para que os jogadores não possam construir armadilhas) e
   que o terreno não pode ser explorado para combate.
2. **Um tempo de reaparecimento**. O temporizador de reaparecimento é essencial. Não recomendo fazer um temporizador de
   reaparecimento inferior a 30 minutos, caso contrário, o reaparecimento do boss será menos significativo. 1 hora é um
   tempo razoavelmente bom, mas também pode querer fazer com que o boss reapareça uma vez por dia ou mesmo uma vez por
   semana.
3. **Um tempo de fuga**. Quanto maior o tempo de reaparecimento, maior deverá ser o tempo de fuga. Tenha também em conta
   que o tempo de fuga deve ser longo o suficiente para que as pessoas possam desafiar o boss confortavelmente. Os
   temporizadores de fuga são importantes se não quiser permitir que os jogadores façam kamikaze ao boss até à morte.
   Isto não é obrigatório, nem mesmo recomendado se quiser fazer bosses de reaparecimento massivo de uma semana.
4. **Um Boss Personalizado**. Bosses Mundiais são, na realidade, apenas Bosses Personalizados com regras de aparição
   personalizadas. Certifique-se de que seleciona poderes com uma boa compatibilidade de combate para o tamanho de um
   raid.
5. **Saque interessante**. A grande atração dos Bosses Mundiais, para além do desafio, é o saque. Certifique-se de que
   os jogadores podem obter algo que simplesmente não podem obter noutro lugar.
6. **Um tema**. Um bom boss regional deve ter um tema, com um local temático e saque temático.

## Opções de configuração de Boss Personalizado para Bosses Mundiais:

Estas definições são adicionadas aos ficheiros de configuração normais do Boss
Personalizado. [Uma página wiki extensa sobre eles pode ser encontrada aqui]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Define se o boss é um boss regional. Bosses regionais são outro nome para Bosses Mundiais, pelo que deve definir isso
para `true`.

| Chave            |        Valores        | Padrão  |
|------------------|:---------------------:|:-------:|
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

Os locais de aparição devem ser definidos no jogo usando o comando `/em addSpawnLocation <nome_do_ficheiro.yml>`.

Embora seja possível adicionar locais manualmente a partir da configuração, não recomendo que tente fazê-lo, pois é
muito fácil errar.

| Chave            |                Valores                | Padrão |
|------------------|:-------------------------------------:|:------:|
| `spawnLocations` | [Lista de Strings](#lista_de_strings) | nenhum |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

Locais em ficheiros de configuração (para utilizadores avançados) Os ficheiros de configuração do Boss Regional
armazenam todas as instâncias desse Boss Regional num único ficheiro, armazenando vários locais de aparição, bem como
temporizadores de reaparecimento.

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

contém 7 Bosses Regionais diferentes, em locais diferentes, e com temporizadores de reaparecimento diferentes.

Vamos analisar os detalhes, dando uma olhada no primeiro Boss Regional:

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Uma vez que isto segue o formato `mundo,x,y,z,pitch,yaw:timestampUnix`, o boss está a aparecer num mundo
chamado `elitemobs_sewer_maze` em x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`,
pitch = `-271.24023`, yaw = `64.19999`.

O timestamp Unix armazena a hora, em tempo Unix, na qual o boss irá reaparecer. Isso é usado para armazenar os tempos de
reaparecimento através de reinícios. Se pretender saber a que hora corresponde, existem inúmeras ferramentas de
conversão de tempo Unix para tempo real que pode encontrar online.

Se desejar que um boss específico reapareça após um reload ou reinício, tudo o que precisa de fazer é limpar a
entrada `:timestampUnix`.

</div>

</details>

***

### spawnCooldown

Define quanto tempo demora para o boss reaparecer, em **minutos**.

**Nota: Reaparecimentos mais longos são recomendados para bosses grandes!**.

| Chave           |       Valores       | Padrão |
|-----------------|:-------------------:|:------:|
| `spawnCooldown` | [Inteiro](#inteiro) | nenhum |

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

Define o raio a partir do `spawnLocation` para o qual o Boss Mundial vai antes de ser teleportado de volta para o seu
ponto de aparecimento. Isso impede que os jogadores arrastem o boss para um local onde poderia ser mais fácil
combatê-lo.

**Nota: tente evitar criar áreas de combate que exijam coleiras com menos de 20 blocos, pois isso irá piorar o combate.
**

| Chave         |       Valores       | Padrão |
|---------------|:-------------------:|:------:|
| `leashRadius` | [Inteiro](#inteiro) | nenhum |

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

Estes valores permitem que os Bosses Regionais gerem blocos quando entram em combate e removam-nos quando são removidos,
o que significa quando escapam devido ao tempo limite ou quando morrem.

**É assim que pode fazer com que os bosses abram ou fechem portas/áreas ou mesmo modifiquem uma arena durante o combate
se a estiver a usar com bosses de fase!**

| Chave                |         Valores          | Padrão |
|----------------------|:------------------------:|:------:|
| `onSpawnBlockStates` | Ver Explicação Detalhada | nenhum |

| Chave                |     Valores     | Padrão  |
|---------------------|:---------------:|:-------:|
| `onRemoveBlockStates` | Ver Explicação Detalhada |  nenhum |

<details>

<summary><b>Explicação Detalhada</b></summary>

<div align="left">

**Todos os blocos são relativos à localização do aparecimento. Certifique-se de que tem a localização final do
aparecimento antes de começar a definir quaisquer blocos.**

</br>Se já criou uma grande área de Blocos Transitivos e agora precisa de mover o boss, mas não quer refazer os Blocos
Transitivos. Então pode usar a ação EliteScript [Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport)
para mover o boss para o local correto depois de aparecer. Tenha em mente que terá de ajustar a sua coleira em
conformidade.

Devido à complexidade da definição de blocos, não é recomendado que o faça manualmente. Deve usar os seguintes comandos
para o fazer:

- /em registerblocks <ficheiro\_de\_boss\_regional.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <ficheiro\_de\_boss\_regional.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <ficheiro\_de\_boss\_regional.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <ficheiro\_de\_boss\_regional.yml> <on\_spawn/on\_remove>
- /em cancelblocks

Vamos analisar isto.

**/em registerblocks <ficheiro\_de\_boss\_regional.yml> <on\_spawn/on\_remove>**

O comando mais básico. Este é um botão que executa uma vez para iniciar e novamente para confirmar. Tal como todos os
outros comandos, escolhe se está a definir que estes blocos sejam modificados para o estado `on_spawn` ou `on_remove`.

Se estiver a registar o on\_spawn, isto irá modificar os blocos quando o boss aparecer ou reaparecer. Se estiver a
registar o on\_remove, isto irá modificar os blocos quando o boss morrer ou expirar usando a mecânica de tempo limite do
Boss Personalizado.

Para registar blocos, basta colocar ou remover os blocos que deseja modificar enquanto esta definição está ativa.

**/em registerblocksedit <ficheiro\_de\_boss\_regional.yml> <on\_spawn/on\_remove>**

Se quiser modificar blocos já definidos, pode usar este comando. Funciona de forma muito semelhante
ao `/em registerblocks <ficheiro_de_boss_regional.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <ficheiro\_de\_boss\_regional.yml> <on\_spawn/on\_remove>**

Tal como `/em registerblocks <ficheiro_de_boss_regional.yml> <on_spawn/on_remove>`, isto permite-lhe registar blocos,
mas permite selecioná-los obtendo dois cantos diametralmente opostos (o mesmo que a seleção de região do worldedit /
worldguard) em vez de selecionar blocos individualmente.

Por razões de segurança, existe um limite de 200 blocos (por defeito, modificável em config.yml) para seleções
regionais. Tenha em mente que todos os blocos são modificados no mesmo tick, por isso, se estiver a modificar muito
terreno, provavelmente começará a ver grandes picos de lag ao executar estas modificações.

**/em registerblocksareaedit <ficheiro\_de\_boss\_regional.yml> <on\_spawn/on\_remove>**

Funciona da mesma forma que `/em registerblocksedit`, mas para áreas. Pode ser usado para ultrapassar o limite de
registo de blocos de 200 (por defeito) para áreas.

**/em cancelblocks**

Em qualquer altura, se for cometido um erro ao registar blocos, pode executar este comando para cancelar o registo. Irá
reverter quaisquer alterações que tenha começado a registar nessa edição/registo.

</div>

</details>

</div>

***

## Dicas profissionais para fazer um bom e grande combate de Boss Regional

1. **Pense realmente em como os poderes no seu Boss Personalizado se complementam**. Não quer que o seu boss passe a
   maior parte do tempo parado porque está a lançar algo, pois isso pode realmente tornar o combate muito fácil. Também
   não quer que o boss tenha todos os ataques à distância e nenhum poder de combate corpo a corpo ou o oposto, a menos
   que esteja a desenhar algo muito específico. Os testes são importantes.

2. **Vida - muita**. Esse multiplicador de vida deve provavelmente estar num sólido 10 se quiser que as pessoas se
   agrupem para combater o boss.

3. **Dano - não demasiado**. Os EliteMobs já são extremamente mortais por defeito, e os poderes tendem a ser
   exponencialmente mais mortais. Em vez de aumentar o dano até ao teto, considere usar poderes para fazer com que o
   boss bata mais forte.

4. **Exploits, em todo o lado**. Certifique-se extra de que o terreno não é explorável. Coloque o boss numa sala fechada
   para impedir que as pessoas tentem fazer sniping de longe. O poder de invulnerabilidade à flecha é provavelmente
   extremamente importante para muitos Bosses Mundiais, uma vez que os mobs do Minecraft não conseguem lidar com o facto
   de serem atingidos por sniping a chunks de distância, pelo que, se quiser permitir ataques com arco, certifique-se de
   que os arcos não podem ser explorados.

5. **Conheça o plugin**. Existem muitos pequenos truques para derrotar os EliteMobs, como a forma como alguns poderes
   podem ser contra-atacados usando escudos, enquanto outros devem ser contra-atacados esquivando-se ou mesmo fugindo
   temporariamente do boss. Quanto mais souber como os poderes funcionam e como são contra-atacados, melhores serão os
   bosses que cria.
