[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# O que são dungeons?

Podes encontrar informações sobre dungeons, incluindo informações sobre dungeons
pré-feitas [aqui]($language$/elitemobs/dungeons.md).

***

# O que é o empacotador de dungeons?

O empacotador de dungeons permite que os administradores não só criem e empacotem dungeons, mas também empacotem
qualquer tipo de conteúdo EliteMobs. Isso inclui coisas como pacotes de eventos, pacotes de modelos, arenas, pacotes de
NPC, pacotes de itens e assim por diante.

<details>

<summary>Por que usar pacotes de dungeon?</summary>

- ***Dungeons instanciadas!*** Dungeons instanciadas só podem ser criadas através do sistema de pacotes de dungeons.
- ***Backups seguros de Minidungeons!*** Se criares um pacote de dungeon, poderás implementá-lo e reimplementá-lo em
  qualquer servidor que pretendas, a qualquer momento e por qualquer motivo.
- ***Fácil de desligar e ligar!*** Podes sempre usar `/em setup` e desligar e ligar pacotes de dungeon temporária ou
  permanentemente.
- ***Fácil de partilhar!*** Se desejares partilhar as tuas criações, os pacotes de dungeon podem ser compactados e
  enviados para outras pessoas. Existe uma sala do Discord dedicada a criações da comunidade, se estiveres interessado!
- ***Teleports!*** Os pacotes de dungeon criam automaticamente locais de teletransporte que podem ser acedidos na página
  de Teletransporte do menu `/em`, o que pode ser muito útil em muitas configurações.

</details>

# Criando Dungeons

As seguintes configurações são usadas para criar um ficheiro de configuração que deve ir para a
pasta `content_packages`. Essas configurações são usadas para criar dungeons especificamente e não são necessárias se
apenas quiseres usar o empacotador de dungeons para distribuir conteúdo que não seja de dungeon, como um pacote de itens
ou eventos.

## Plugins necessários

Para usar o empacotador de dungeons, precisarás do seguinte plugin:

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protege a Minidungeon

## Criar uma dungeon, passo a passo

O EliteMobs costumava ter dois tipos principais de dungeons: baseadas no mundo e baseadas em esquemas.

As dungeons baseadas em esquemas estavam associadas a uma construção esquemática. Elas agora estão descontinuadas e não
são mais suportadas.

Todas as dungeons do EliteMobs são agora baseadas no mundo.

## Ficheiro pack.meta obrigatório

O teu pacote de dungeon deve incluir um ficheiro `pack.meta`, que é simplesmente um ficheiro `.txt` renomeado com uma
extensão `.meta`. Este ficheiro deve conter apenas uma palavra, indicando para qual plugin é o pacote (por exemplo, "
elitemobs", escrito em minúsculas). O ficheiro `pack.meta` deve estar localizado no diretório raiz do teu pacote,
juntamente com todas as outras pastas.

***

### Valores globais

Os seguintes valores aplicam-se a todas as dungeons

<div align="center">

### isEnabled

Define se o pacote de dungeon está ativado.

| Chave       |       Valores       | Padrão  | Obrigatório |
|-------------|:-------------------:|:-------:|:-----------:|
| `isEnabled` | [Boolean](#boolean) | `false` |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

Define o nome do conteúdo. Suporta [Códigos de cor](#color_codes).

| Chave  |      Valores      | Padrão  | Obrigatório |
|--------|:-----------------:|:-------:|:-----------:|
| `name` | [String](#string) | `false` |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aA Dungeon Verde'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Define o tipo de localização que a dungeon usa.

| Chave                 |        Valores        | Padrão | Obrigatório |
|-----------------------|:---------------------:|:------:|:-----------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  none  |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dungeonLocationType: WORLD
```

</div>

</details>

***

### contentType

Define o tipo de dungeon.

| Chave         |                   Valores                    | Padrão | Obrigatório |
|---------------|:--------------------------------------------:|:------:|:-----------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  none  |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
contentType: INSTANCED_DUNGEON
```

</div>

</details>

***

### customInfo

Define as informações adicionais que aparecerão no ecrã `/em setup`. Apenas para fins informativos.
Suporta [Códigos de cor](#color_codes).

| Chave        |           Valores           | Padrão | Obrigatório |
|--------------|:---------------------------:|:------:|:-----------:|
| `customInfo` | [String List](#string_list) |  none  |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customInfo:
- '&aA melhor dungeon.'
- '&aFeito por: JogadorLegal'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Define o link para download quando o conteúdo não é transferido. Apenas para fins informativos.

| Chave          |      Valores      | Padrão | Obrigatório |
|----------------|:-----------------:|:------:|:-----------:|
| `downloadLink` | [String](#string) |  none  |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
downloadLink: http://www.exemplo.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

Define a categoria de tamanho do pacote de dungeon. Apenas para fins informativos.

| Chave                 |   Valores    | Padrão | Obrigatório |
|-----------------------|:------------:|:------:|:-----------:|
| `dungeonSizeCategory` | Especial [1] |  none  |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dungeonSizeCategory: MINIDUNGEON
```

<div align="center">

![create_packager_size.jpg](../../../img/wiki/create_packager_size.jpg)

</div>

</div>

</details>

**Especial [1]**

<details>

<summary><b>Expandir Tabela</b></summary>

<div align="center">

| Chave         | Descrição                                                                                                                                                                                                                      |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`        | As tocas são um tipo de pequena dungeon que se concentra em uma grande luta contra chefes.                                                                                                                                     |
| `SANCTUM`     | Os santuários são o equivalente a tocas instanciadas. Isto significa que se concentram em torno de uma grande luta contra chefes.                                                                                              |
| `MINIDUNGEON` | As minidungeons são um tipo de dungeon de tamanho médio que geralmente contém 3-15 mini chefes e um grande chefe, bem como muitos mobs de "lixo" que se destinam a ser "farmados" por moedas e equipamentos pelos jogadores.   |
| `DUNGEON`     | As dungeons são o equivalente a Minidungeons instanciadas. Este é o tipo de dungeon MMORPG mais tradicional, onde os jogadores se juntam e percorrem uma série de mobs de lixo e mini chefes para lutar contra um chefe final. |
| `RAID`        | Brevemente!                                                                                                                                                                                                                    |
| `ADVENTURE`   | As aventuras são mapas de aventura completos. Incluem linhas de missões, NPCs, grandes quantidades de mini chefes e chefes e podem até conter as suas próprias arenas ou dungeons dentro delas.                                |
| `ARENA`       | As arenas são áreas de sobrevivência baseadas em ondas nas quais os jogadores são recompensados por derrotar ondas.                                                                                                            |
| `OTHER`       | Qualquer outra coisa que não se enquadre nas categorias anteriores.                                                                                                                                                            |

Para descrições mais detalhadas, consulta [Dungeons]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Define se o pacote de dungeon deve ser protegido pelo WorldGuard.

| Chave     |       Valores       | Padrão | Obrigatório |
|-----------|:-------------------:|:------:|:-----------:|
| `protect` | [Boolean](#boolean) | `true` |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
protect: true
```

</div>

</details>

***

### dungeonVersion

Define a versão do pacote de dungeon.

| Chave            |       Valores       | Padrão | Obrigatório |
|------------------|:-------------------:|:------:|:-----------:|
| `dungeonVersion` | [Integer](#integer) |  none  |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dungeonVersion: 1
```

</div>

</details>

***

### playerInfo

Define as informações que aparecem no menu. Suporta [Códigos de cor](#colorcodes).

*Funciona apenas quando o `/em` está definido para o modo de livro usando `/em alt`.*

| Chave        |      Valores      | Padrão | Obrigatório |
|--------------|:-----------------:|:------:|:-----------:|
| `playerInfo` | [String](#string) |  none  |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
playerInfo: 'Dificuldade: &aConteúdo fácil para 1 jogador!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Define a mensagem que aparece quando um jogador entra na zona da dungeon. Suporta [Códigos de cor](#colorcodes).

| Chave                |      Valores      | Padrão | Obrigatório |
|----------------------|:-----------------:|:------:|:-----------:|
| `regionEnterMessage` | [String](#string) |  none  |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aEntraste na dungeon!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Define a mensagem que aparece quando um jogador sai da zona da dungeon. Suporta [Códigos de cor](#colorcodes).

| Chave                |      Valores      | Padrão | Obrigatório |
|----------------------|:-----------------:|:------:|:-----------:|
| `regionLeaveMessage` | [String](#string) |  none  |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aSaiíste da dungeon!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Define se o pacote de dungeon tem modelos personalizados (para ModelEngine ou FreeMinecraftModels).

| Chave             |       Valores       | Padrão | Obrigatório |
|-------------------|:-------------------:|:------:|:-----------:|
| `hasCustomModels` | [Boolean](#boolean) |  none  |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
hasCustomModels: false
```

</div>

</details>

***

### dungeonConfigFolderName

Define o nome das pastas usadas para ficheiros associados a esta dungeon.

**Obrigatório para dungeons instanciadas!.**

| Chave                     |      Valores      | Padrão | Obrigatório |
|---------------------------|:-----------------:|:------:|:-----------:|
| `dungeonConfigFolderName` | [String](#string) |  none  |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: minha_pasta_dungeon
```

</div>

</details>

***

### contentLevel

Define o nível de conteúdo que a dungeon deve apresentar no menu EM.

| Chave          |       Valores       | Padrão | Obrigatório |
|----------------|:-------------------:|:------:|:-----------:|
| `contentLevel` | [Integer](#integer) |  none  |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
contentLevel: 20
```

</div>

</details>

***

### enchantmentChallenge

Define se a dungeon deve ser uma dungeon de Desafio de Encantamento.

| Chave                  |       Valores       | Padrão  | Obrigatório |
|------------------------|:-------------------:|:-------:|:-----------:|
| `enchantmentChallenge` | [Boolean](#boolean) | `false` |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
enchantmentChallenge: false
```

</div>

</details>

</div>

***

### Pacotes de dungeon baseados no mundo

Os seguintes valores aplicam-se apenas a dungeons baseadas no mundo.

<div align="center">

***

### worldName

Define o nome do mundo que deve ser empacotado.

| Chave       |      Valores      | Padrão | Obrigatório |
|-------------|:-----------------:|:------:|:-----------:|
| `worldName` | [String](#string) |  none  |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
worldName: meu_mundo_minecraft
```

</div>

</details>

***

### womholeWorldName

Esta função define o nome do mundo do buraco de minhoca, que serve como um mundo secundário ligado ao mundo principal. É
utilizado para funcionalidades como hubs de teletransporte ou câmaras de chefes exclusivas.

| Chave              |      Valores      | Padrão | Obrigatório |
|--------------------|:-----------------:|:------:|:-----------:|
| `womholeWorldName` | [String](#string) |  none  |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
womholeWorldName: meu_mundo_minecraft_buraco_de_minhoca
```

</div>

</details>

***

### environment

Define o ambiente do mundo.

| Chave         |                                          Valores                                          | Padrão | Obrigatório |
|---------------|:-----------------------------------------------------------------------------------------:|:------:|:-----------:|
| `environment` | [Environment](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  none  |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
environment: NORMAL
```

</div>

</details>

***

### teleportLocation

Define o local de teletransporte do pacote de dungeon. É para onde os jogadores serão teleportados ao entrar na dungeon.

| Chave              |      Valores      | Padrão | Obrigatório |
|--------------------|:-----------------:|:------:|:-----------:|
| `teleportLocation` | [String](#string) |  none  |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
teleportLocation: meu_mundo_minecraft,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

Permite ou impede que as explosões causem danos aos blocos em uma dungeon. As explosões são consideradas explosões de
elite, portanto, qualquer dano aos blocos será regenerado em 2 minutos.

| Chave                       |       Valores       | Padrão  | Obrigatório |
|-----------------------------|:-------------------:|:-------:|:-----------:|
| `allowExplosionBlockDamage` | [Boolean](#boolean) | `false` |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### Dungeons instanciadas

*As dungeons instanciadas criam um novo mundo para cada vez que um grupo de jogadores deseja completar uma dungeon e
eliminam-no quando termina. Para que isso funcione corretamente, deves colocar uma pasta seguindo
o `dungeonConfigFolderName` na pasta de configuração `world_blueprints` do EliteMobs.*

*Em seguida, coloca o mundo que vais usar dentro da pasta que criaste, certificando-te de que o ficheiro `session.lock`
do mundo é eliminado.*

Os seguintes valores aplicam-se apenas às dungeons instanciadas. Observa que todas as dungeons instanciadas são dungeons
mundiais, por isso também usam os valores das dungeons mundiais.

<div align="center">

***

### startLocation

Define a localização de teletransporte do ponto de partida da dungeon instanciada. É para onde os jogadores serão
teleportados ao iniciar a dungeon instanciada com `/em start`.

| Chave           |      Valores      | Padrão | Obrigatório |
|-----------------|:-----------------:|:------:|:-----------:|
| `startLocation` | [String](#string) |  none  |      ✅      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
startLocation: meu_mundo_minecraft,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

Define a permissão necessária para entrar na instância da dungeon.

| Chave        |      Valores      | Padrão | Obrigatório |
|--------------|:-----------------:|:------:|:-----------:|
| `permission` | [String](#string) |  none  |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
permission: elitedungeon.minhapermissao
```

</div>

</details>

***

### minPlayerCount

Define o número mínimo de jogadores necessários para iniciar uma dungeon.

| Chave            |       Valores       | Padrão | Obrigatório |
|------------------|:-------------------:|:------:|:-----------:|
| `minPlayerCount` | [Integer](#integer) |  `1`   |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
minPlayerCount: 1
```

</div>

</details>

***

### maxPlayerCount

Define o número mínimo de jogadores necessários para iniciar uma dungeon.

| Chave            |       Valores       | Padrão | Obrigatório |
|------------------|:-------------------:|:------:|:-----------:|
| `maxPlayerCount` | [Integer](#integer) |  `5`   |      ❌      |

<details>

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
maxPlayerCount: 5
```

</div>

</details>

***

### dungeonObjectives

Define a lista de objetivos da dungeon necessários para que a dungeon seja considerada concluída.

| Chave               |           Valores           | Padrão | Obrigatório |
|---------------------|:---------------------------:|:------:|:-----------:|
| `dungeonObjectives` | [String List](#string_list) |  none  |      ✅      |

<details>

<summary><b>Exemplos</b></summary>

<div align="left">

Existem atualmente dois tipos de objetivo de dungeon:

* Matar alvo: `nomeficheiro=boss.yml:quantidade=X`
* Matar percentagem da dungeon: `clearpercentage=X.Y`

```yml
dungeonObjectives:
- nomeficheiro=dungeon_chefe_final.yml
- nomeficheiro=dungeon_minichefe_um.yml
- nomeficheiro=dungeon_minichefe_dois.yml
```

```yml
dungeonObjectives:
- clearpercentage=0.8
```

</div>

</details>

***

### difficulties

Define a lista de dificuldades na dungeon instanciada.

**Obrigatório para dungeons instanciadas!**

| Chave          |   Valores    | Padrão | Obrigatório |
|----------------|:------------:|:------:|:-----------:|
| `difficulties` | Especial [1] |  none  |      ❌      |

<details>

<summary><b>Exemplos</b></summary>

<div align="left">

```yml
difficulties:
- levelSync: 25
  id: 0
  name: normal
- levelSync: 20
  id: 1
  name: difícil
- levelSync: 15
  id: 2
  name: mítico
```

<div align="center">

![create_packager_difficulty.jpg](../../../img/wiki/create_packager_difficulty.jpg)

</div>

</div>

</details>

**Especial [1]**

<details>

<summary><b>Expandir Tabela</b></summary>

<div align="center">

Definir as dificuldades da dungeon instanciada criará automaticamente diferentes opções de dificuldade ao entrar na
dungeon.

Os nomes das dificuldades definidos aqui serão os usados na pasta de chefes personalizados, onde poderás definir quais
os poderes que os chefes têm com base na dificuldade.

As dificuldades estão num formato de lista que possui os seguintes campos:

|    Chave    | Descrição                                                                                                                                                                                                                                                                                                                                     | Valores             | Obrigatório |
|:-----------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|:-----------:|
|   `name`    | Nome da dificuldade para os jogadores.                                                                                                                                                                                                                                                                                                        | [String](#string)   |      ✅      |
|    `id`     | ID da dificuldade, usada em chefes personalizados e itens personalizados para a funcionalidade baseada na dificuldade.                                                                                                                                                                                                                        | [String](#string)   |      ✅      |
| `levelSync` | Define o nível da sincronização de nível, se existir. A sincronização de nível faz com que todo o equipamento do jogador atinja o valor definido, tornando impossível que os jogadores fiquem sobre nível para uma dungeon e mantendo-a relevante para corridas posteriores. Com base no sistema de sincronização de níveis Final Fantasy 14. | [Integer](#integer) |      ❌      |


</div>

</details>

</div>

***

## Usando o ficheiro de pacote de dungeon meta_pack.yml para dungeons grandes.

Às vezes, podes estar a trabalhar numa dungeon grande que inclui outras dungeons menores dentro dela, permitindo que os
jogadores viajem entre elas através do mundo principal da dungeon. Um ótimo exemplo disso é a EliteMobs Adventure
Dungeon Primis.

Primis apresenta um vasto mundo onde os jogadores podem explorar e completar missões, mas também inclui duas dungeons
instanciadas dentro do seu mundo — uma das quais serve como a luta final contra o chefe. Em casos como este, haverá
vários ficheiros de pacote de dungeon, mesmo que todos pertençam à mesma dungeon abrangente.

Para gerir isto, usamos um ficheiro de pacote de meta dungeon. Este ficheiro atua como um diretório central,
especificando a dungeon principal e listando todo o conteúdo adicional da dungeon associado a ela.

Vejamos mais de perto como o pacote de meta dungeon Primis está estruturado:

```yaml
isEnabled: true
name: '&2[000-020] A Aventura Primis!'
customInfo:
- A aventura tutorial para jogadores
- novos no EliteMobs!
downloadLinkV2: https://discord.gg/9f5QSka
dungeonSizeCategory: LAIR
environment: NORMAL
protect: true
contentType: META_PACKAGE
containedPackages:
- primis_adventure.yml
- primis_blood_temple_sanctum.yml
- primis_gladius_invasion_dungeon.yml
setupMenuDescription:
- '&2Uma aventura tutorial suave para jogadores entre os níveis 0-20!'
- '&2As aventuras são mapas enormes com missões,'
- '&2muitos chefes e npcs, entre outras coisas!'
- '&2Também tem modelos personalizados!'
dungeonVersion: 21 #adicionado ficheiro de pacote de meta dungeon
```

Como podes ver, o ficheiro de pacote de meta dungeon é muito semelhante a um pacote de dungeon normal, com algumas
diferenças importantes. O `contentType:` está definido para `META_PACKAGE` e existe uma configuração adicional
chamada `containedPackages:`. Esta configuração lista todos os outros pacotes de dungeon que fazem parte da dungeon
maior.

Ao criares o teu meta pacote, certifica-te de incluir a configuração `containedPackages:` e listar todos os pacotes de
dungeon que fazem parte da tua dungeon maior. Isto garante que tudo está devidamente ligado e organizado dentro da
estrutura abrangente.

Ao versionar a tua dungeon, toda a versionagem deve ser gerida através do meta pacote. Isto porque o meta pacote serve
como o pacote principal que determina a versão de toda a dungeon e também é o pacote usado para exibir informações no
menu `/em setup`.

Tem em mente que as dungeons individuais listadas no meta pacote ainda podem aparecer no menu `/em teleport`. Para
evitar isto, precisarás de desativar manualmente as opções de teletransporte para cada uma dessas dungeons nos seus
respetivos ficheiros de configuração.

Por exemplo, no caso da dungeon Primis:

Desativa as entradas de teletransporte no menu para `primis_blood_temple_sanctum.yml` e `primis_gladius_invasion_dungeon.yml`.
Deixa as opções de teletransporte ativadas para `primis_adventure.yml`, pois serve como o hub principal onde os
jogadores começam a sua jornada e acedem às outras dungeons.
Esta configuração garante uma experiência tranquila para os jogadores, mantendo a estrutura e funcionalidade adequadas
para o sistema de dungeon.

Ao nomear o ficheiro, recomendamos a seguinte convenção de nomenclatura:

`nome_da_tua_dungeon_meta_pack.yml`

***

# Valores recomendados para chefes

## Criando um mob de dungeon médio

Recomendamos deixar a configuração normalizedCombat definida como true. Esta configuração normaliza todos os mobs para
escalar igualmente com a saúde e o dano, independentemente do seu tipo de entidade.

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 golpes para matar
damageMultiplier: 1.0 #1.5 corações de dano
```

Certamente, aqui está a versão revisada com clareza e formatação retidas:

**Observação: Dado que `1.0` é o valor padrão para saúde e dano, podes simplesmente omitir a
definição `healthMultiplier` ou `damageMultiplier` e definir `normalizedCombat` como `true`.**

## Criando packs de lixo

Os packs de lixo são numerosos, mas não muito perigosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 golpes para matar
damageMultiplier: 0.5 #0.5 corações de dano
```

## Criando reforços

Os reforços devem morrer com muita facilidade, mas representam um perigo em termos de dano (estes valores são
recomendados para 4 ou mais entidades de combate corpo a corpo, o uso real pode variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 golpe para matar
damageMultiplier: 0.6 #1 coração de dano
```

## Criando minichefes

Os minichefes devem manter a sua posição e apresentar um desafio mecânico para os jogadores. Deve ser um teste de
habilidade que dure um pouco, mas não algo extremamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 golpes para matar
damageMultiplier: 1.2 #2 corações de dano
```

## Criando chefes

Os chefes são um verdadeiro desafio, a conclusão de uma acumulação numa dungeon e um verdadeiro teste de habilidade com
tudo em jogo. Os encontros devem ser longos e a morte deve ser uma ameaça presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 golpes para matar
damageMultiplier: 1.4 #2.5 corações de dano
```

**Estes valores recomendados são apenas estimativas aproximadas e os valores finais devem ser ajustados de acordo com os
encontros específicos.**

**Isto é particularmente crucial para os chefes finais da dungeon; podes querer exceder significativamente o valor
recomendado de 7.0 para healthMultiplier para dar à última luta aquela sensação épica.**

***

# Empacotando conteúdo EliteMobs para distribuição

Finalmente, provavelmente vais querer empacotar a tua dungeon para armazenamento ou para distribuição.

O EliteMobs tem um sistema de importação que permite que os administradores importem, instalem e desinstalem conteúdo
rapidamente. [Podes ver como funciona aqui.]($language$/elitemobs/setup.md)

## Cortando Mundos

Às vezes, podes precisar de reduzir o tamanho do teu mundo Minecraft para o tornar mais leve e, consequentemente, mais
fácil de distribuir. Isto pode ser alcançado através do uso
do [plugin WorldBorder](https://www.spigotmc.org/resources/worldborder-1-15.80466/). Apesar do plugin estar listado como
suportando apenas MineCraft até à versão 1.19, ele funciona perfeitamente na versão mais recente do MineCraft a partir
de 25 de janeiro de 2024.

<details>
<summary>Dica</summary>
Se estás a fazer isto pela primeira vez, pode ser uma boa ideia criar uma cópia de segurança do teu mundo, caso algo corra mal.
</details>

Depois que o plugin for instalado, navega até o meio do mundo ou a área específica que desejas cortar. Em seguida,
executa o comando `/wb set x`, onde `x` representa o tamanho aproximado do raio que desejas para a tua área.

<details>
<summary>Dica</summary>
Se <code>/wb</code> não está a funcionar para ti, experimenta <code>/worldborder:wb</code>.
</details>

Depois de executar este comando, voa até às bordas do teu mundo para verificar se a borda do mundo foi definida
corretamente e cobre o tamanho pretendido. Vais reconhecer que atingiste a borda do mundo quando fores empurrado para
trás, acompanhado por uma mensagem no chat.

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

Na imagem acima, pretendemos cortar o mundo ao redor dos blocos roxos, deixando apenas alguns blocos ao redor deles.
Para conseguir isto, ficamos no meio da área roxa nos quadrados vermelhos e executamos `/wb set 50`, definindo a borda
do mundo logo além da área roxa.

Em seguida, usamos o comando `/wb trim [freq] [pad]`, com a frequência definida como 200 e o preenchimento como 20. O
preenchimento determina quantos blocos devem ser deixados ao redor da borda do mundo (a área roxa), e a frequência
determina quantos blocos devem ser processados por segundo. Depois de executar `/wb trim 200 20`, seremos solicitados a
confirmar executando `/wb trim confirm`. Confirmamos a ação e, depois de algum tempo, o nosso mundo será cortado,
reduzindo o seu tamanho e tornando-o mais conveniente para distribuição.

Agora podes remover a borda do mundo usando `/wb clear all` ou apenas deixá-la se quiseres.

## Cortando a pasta do mundo

Existem vários ficheiros e pastas localizados na tua pasta do mundo que podemos descartar, uma vez que os plugins não
usam todos eles. Isto irá reduzir o tamanho do teu mundo e torná-lo mais fácil de distribuir.

Para um Ambiente mundial NORMAL:

Para preparar o teu mundo, mantém os seguintes ficheiros e pastas:

1. Pasta **region**
2. **raids.dat** de dentro da pasta **data** (certifica-te de que está colocado dentro da pasta **data** ao copiar)
3. Ficheiro **level.dat**

Podes eliminar com segurança todos os outros ficheiros e pastas localizados na pasta do mundo. Isto irá configurar o teu
mundo corretamente para o ambiente NORMAL.

Para ambientes de mundo INFERIOR e O_FIM:

Para preparar o teu mundo, mantém os seguintes ficheiros e pastas:

1. Pasta **region** dentro da pasta **DIM-1** (certifica-te de que está colocado dentro da pasta **DIM-1** ao copiar)
2. **raids.dat** de dentro da pasta **data** (certifica-te de que está colocado dentro da pasta **data** ao copiar)
3. Ficheiro **level.dat**

Podes eliminar com segurança todos os outros ficheiros e pastas localizados na pasta do mundo. Isto irá configurar o teu
mundo corretamente para os ambientes INFERIOR e O_FIM.

## Executando o comando do pacote

O EliteMobs tem o comando **`/em package <nomeDaDungeon> <versão>`**. Este comando percorre todas as pastas de
configuração do EliteMobs e empacota automaticamente todo o conteúdo em pastas que correspondam a `nomeDaDungeon` em um
ficheiro zipado e uma pasta normal na pasta `exports` do EliteMobs.

***Por esta razão, é altamente recomendável que mantenhas o conteúdo que desejas empacotar em pastas com o mesmo nome do
nome do teu pacote.*** Caso contrário, terás de reunir e empacotar manualmente os ficheiros na estrutura de ficheiros
para distribuição.

## Adicionando o ficheiro de pacote de dungeon

Se estás a criar uma dungeon, terás de adicionar manualmente o ficheiro de pacote de dungeon à pasta recém-gerada na
pasta exports. O teu ficheiro de configuração de pacote de dungeon deve seguir o formato descrito acima e ser colocado
numa pasta
chamada `content_packages`. [Verifica a estrutura de ficheiros para mais informações sobre isso.](#estrutura-de-ficheiros).

**Certifica-te de que zipas a tua dungeon quando terminares!**

## Estrutura de ficheiros

Se fizeste tudo corretamente, a estrutura de ficheiros deverá ser semelhante a este exemplo, onde chamamos a dungeon
de `minha_dungeon_legal`:

<details>
<summary>Exemplo de estrutura de ficheiros de minha_dungeon_legal</summary>

- minha_dungeon_legal.zip
    * content_packages
        * minha_dungeon_legal.yml <- É aqui que o teu ficheiro de configuração do pacote de dungeon vai
    * worldcontainer
        * [As tuas pastas mundiais vão aqui]
    * wormholes
        * minha_dungeon_legal
            * [Os teus buracos de minhoca vão aqui]
    * npcs
        * minha_dungeon_legal
            * [Os teus NPCs vão aqui]
    * customtreasurechests
        * minha_dungeon_legal
            * [Os teus baús de tesouro vão aqui]
    * customquests
        * minha_dungeon_legal
            * [As tuas missões vão aqui]
    * customitems
        * minha_dungeon_legal
            * [Os teus itens personalizados vão aqui]
    * custombosses
        * minha_dungeon_legal
            * [Os teus chefes personalizados vão aqui]
    * customarenas
        * minha_dungeon_legal
            * [As tuas arenas personalizadas vão aqui]
    * powers
        * minha_dungeon_legal
            * [Os teus poderes personalizados vão aqui]
    * world_blueprints
        * minha_dungeon_legal
            * [A tua pasta mundial vai aqui, usada para dungeons instanciadas]
    * customevents
        * minha_dungeon_legal
            * [Os teus eventos personalizados vão aqui]
    * customspawns
        * minha_dungeon_legal
            * [Os teus spawns personalizados vão aqui]
    * models
        * [Os teus modelos de formato bbmodel do ModelEngine vão aqui, aceita pastas]

</details>

Isto permite que a maioria dos utilizadores arraste e solte ficheiros diretamente nos seus servidores e que tudo
funcione imediatamente.

***Importante: ao empacotar para distribuição, certifica-te de que DESINSTALAS A MINIDUNGEON PRIMEIRO! Não queres
distribuir minidungeons instaladas, queres que os administradores as configurem nos seus servidores!***

# Partilha pacotes de dungeon que criaste com a comunidade

O Discord contém uma secção [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons") onde as pessoas
podem partilhar as suas criações de Minidungeon. Sente-te à vontade para contribuir!
