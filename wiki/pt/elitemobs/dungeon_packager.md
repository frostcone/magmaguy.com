[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# O que são masmorras?

Podes encontrar informações sobre masmorras, incluindo informações sobre masmorras pré-feitas [aqui]($language$/elitemobs/dungeons.md).

***

# O que é o empacotador de masmorras?

O empacotador de masmorras permite que os administradores não só criem e empacotem masmorras, mas também empacotem qualquer tipo de conteúdo EliteMobs. Isto inclui coisas como pacotes de eventos, pacotes de modelos, arenas, pacotes de npcs, pacotes de itens e assim por diante.

<details>

<summary>Por que usar pacotes de masmorras?</summary>

- ***Masmorras instanciadas!*** Masmorras instanciadas só podem ser criadas através do sistema de pacotes de masmorras.
- ***Backups seguros de Minimasmorras!*** Se criares um Pacote de Masmorras, poderás implementá-lo e reimplementá-lo em qualquer servidor que queiras, a qualquer momento e por qualquer razão.
- ***Fácil de ligar e desligar!*** Podes sempre fazer `/em setup` e ligar e desligar temporariamente ou permanentemente os Pacotes de Masmorras.
- ***Fácil de partilhar!*** Se desejares partilhar as tuas criações, os Pacotes de Masmorras podem ser simplesmente compactados e enviados para outras pessoas. Há uma sala no Discord dedicada às criações da comunidade, se estiveres interessado!
- ***Teletransportes!*** Os pacotes de masmorras criam automaticamente locais de teletransporte que podem ser acedidos na página Teletransportes do menu `/em`, o que pode ser muito útil em muitas configurações.

</details>

# Criar Masmorras

As seguintes configurações são usadas para criar um ficheiro de configuração que deve ir para a pasta `content_packages`. Estas configurações são usadas para criar masmorras especificamente, e não são necessárias se apenas quiseres usar o empacotador de masmorras para distribuir conteúdo não relacionado com masmorras, como um pacote de itens ou eventos.

## Plugins obrigatórios

Para usar o Empacotador de Masmorras, precisarás do seguinte plugin:

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protege a Minimasmorra

## Criar uma masmorra, passo a passo

O EliteMobs costumava ter dois tipos principais de masmorras: baseadas no mundo e baseadas em esquemas.

As masmorras baseadas em esquemas estavam associadas a uma construção esquemática. Elas foram agora eliminadas e já não são suportadas.

Todas as masmorras EliteMobs são agora baseadas no mundo.

## Ficheiro pack.meta obrigatório

O teu pacote de masmorras deve incluir um ficheiro `pack.meta`, que é simplesmente um ficheiro `.txt` renomeado com uma extensão `.meta`. Este ficheiro deve conter apenas uma palavra, indicando para qual plugin o pacote é (por exemplo, "elitemobs", escrito em minúsculas). O ficheiro `pack.meta` deve estar localizado no diretório raiz do teu pacote, juntamente com todas as outras pastas.

***

### Valores globais

Os seguintes valores aplicam-se a todas as masmorras

<div align="center">

### isEnabled

Define se o pacote de masmorras está ativado.

| Chave         |      Valores       | Padrão | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Booleano](#booleano) | `false` |    ✅      |

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

Define o nome do conteúdo. Suporta [Códigos de Cor](#códigos_de_cor).

| Chave         |      Valores       | Padrão | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [String](#string) | `false` |    ✅      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: '&c[nv. 999] &aA Masmorra Verde'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Define o tipo de localização que a masmorra usa.

| Chave         |        Valores         | Padrão | Obrigatório |
|-------------|:---------------------:|:-------:|:---------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  none   |    ✅      |

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

Define o tipo de masmorra.

| Chave         |                    Valores                    | Padrão | Obrigatório |
|-------------|:--------------------------------------------:|:-------:|:---------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  none   |    ✅      |

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

Define as informações adicionais que irão aparecer no ecrã `/em setup`. Apenas para fins informativos. Suporta [Códigos de Cor](#códigos_de_cor).

| Chave         |           Valores            | Padrão | Obrigatório |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [Lista de Strings](#lista_de_strings) |  none   |    ✅      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customInfo:
- '&aA melhor masmorra.'
- '&aFeita por: JogadorLegal'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Define o link de download quando o conteúdo não é descarregado. Apenas para fins informativos.

| Chave         |      Valores       | Padrão | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
downloadLink: http://www.example.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

Define a categoria de tamanho do pacote de masmorras. Apenas para fins informativos.

| Chave         |   Valores    | Padrão | Obrigatório |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | Especial [1] |  none   |    ✅      |

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

| Chave | Descrição                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | Os covis são um tipo de masmorra pequena que se foca num grande combate contra um chefe.  |
| `SANCTUM`    | Os santuários são o equivalente aos covis instanciados. Isto significa que se focam num combate contra um chefe enorme. |
| `MINIDUNGEON`    | As minimasmorras são um tipo de masmorra de tamanho médio que geralmente contém 3-15 minibosses e um grande chefe, bem como muitos mobs "lixo" que se destinam a ser "farmados" por moedas e equipamento pelos jogadores. |
| `DUNGEON`    | As masmorras são o equivalente às minimasmorras instanciadas. Este é o tipo de masmorra MMORPG mais tradicional, onde os jogadores se juntam em grupo e passam por uma série de mobs lixo e minibosses para lutarem contra um chefe final. |
| `RAID`    | Em breve!|
| `ADVENTURE`    | As aventuras são mapas de aventura completos. Incluem linhas de missões, npcs, grandes quantidades de minibosses e chefes e podem até conter as suas próprias arenas ou masmorras dentro deles. |
| `ARENA`    | As arenas são áreas de sobrevivência baseadas em ondas nas quais os jogadores são recompensados por derrotar ondas. |
| `OTHER`    | Qualquer outra coisa que não se enquadre nas categorias anteriores. |

Para descrições mais detalhadas, consulta [Masmorras]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Define se o pacote de masmorras deve ser protegido pelo WorldGuard.

| Chave         |      Valores       | Padrão | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Booleano](#booleano) |  `true`   |    ❌      |

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

Define a versão do pacote de masmorras.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `dungeonVersion` | [Inteiro](#inteiro) |  none   |    ✅      |

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

Define as informações que aparecem no menu. Suporta [Códigos de Cor](#códigos_de_cor).

*Funciona apenas quando o `/em` está definido para o modo livro usando `/em alt`.*

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [String](#string) |  none   |    ✅      |

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

Define a mensagem que aparece quando um jogador entra na zona da masmorra. Suporta [Códigos de Cor](#códigos_de_cor).

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aEntraste na masmorra!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Define a mensagem que aparece quando um jogador sai da zona da masmorra. Suporta [Códigos de Cor](#códigos_de_cor).

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aSaste da masmorra!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Define se o pacote de masmorras tem modelos personalizados (para ModelEngine ou FreeMinecraftModels).

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Booleano](#booleano) |  none   |    ❌      |

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

Define o nome das pastas usadas para ficheiros associados a esta masmorra.

**Obrigatório para masmorras instanciadas!.**

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: minha_pasta_da_masmorra
```

</div>

</details>

***

### contentLevel

Define o nível de conteúdo que a masmorra deve exibir no menu EM.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Inteiro](#inteiro) |  none   |    ❌      |

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

Define se a masmorra deve ser uma masmorra de Desafio de Encantamento.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [Booleano](#booleano) | `false` |    ❌      |

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

### Pacotes de masmorras baseados no mundo

Os seguintes valores aplicam-se apenas a masmorras baseadas no mundo.

<div align="center">

***

### worldName

Define o nome do mundo que deve ser empacotado.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [String](#string) |  none   |    ✅      |

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

Esta função define o nome do mundo do buraco de minhoca, que serve como um mundo secundário ligado ao mundo principal. É utilizado para funcionalidades como hubs de teletransporte ou câmaras de chefe únicas.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [String](#string) |  none   |    ❌      |

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

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Ambiente](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  none   |    ✅      |

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

Define a localização do teletransporte do pacote de masmorras. É para onde os jogadores serão teletransportados ao entrar na masmorra.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [String](#string) |  none   |    ✅      |

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

Permite ou impede que as explosões danifiquem blocos numa masmorra. As explosões são consideradas explosões de elite, pelo que qualquer dano aos blocos será regenerado dentro de 2 minutos.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `allowExplosionBlockDamage` | [Booleano](#booleano) |  `false`   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### Masmorras instanciadas

*As masmorras instanciadas criam um novo mundo para cada vez que um grupo de jogadores quer concluir uma masmorra e elimina-o quando termina. Para que isto funcione corretamente, deves colocar uma pasta seguindo o `dungeonConfigFolderName` na pasta de configuração `world_blueprints` do EliteMobs.*

*Depois, coloca o mundo que vais usar dentro da pasta que criaste, certificando-te de que o ficheiro `session.lock` do mundo é eliminado.*

Os seguintes valores aplicam-se apenas a masmorras instanciadas. Observa que todas as masmorras instanciadas são masmorras de mundo, pelo que também usam os valores de masmorras de mundo.

<div align="center">

***

### startLocation

Define a localização de teletransporte do ponto de partida da masmorra instanciada. É para onde os jogadores serão teletransportados ao iniciar a masmorra instanciada com `/em start`.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [String](#string) |  none   |    ✅      |

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

Define a permissão necessária para entrar na instância da masmorra.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [String](#string) |  none   |    ❌      |

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

Define o número mínimo de jogadores necessário para iniciar uma masmorra.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `minPlayerCount` | [Inteiro](#inteiro) |  `1`   |    ❌      |

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

Define o número máximo de jogadores necessário para iniciar uma masmorra.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `maxPlayerCount` | [Inteiro](#inteiro) |   `5`   |    ❌      |

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

Define a lista de objetivos de masmorra necessários para que a masmorra seja considerada concluída.

| Chave         |           Valores            | Padrão | Obrigatório |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [Lista de Strings](#lista_de_strings) |  none   |    ✅      |

<details> 

<summary><b>Exemplos</b></summary>

<div align="left">

Existem atualmente dois tipos de objetivos de masmorra:

* Matar alvo: `filename=boss.yml:amount=X`
* Matar percentagem da masmorra: `clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=dungeon_final_boss.yml
- filename=dungeon_miniboss_one.yml
- filename=dungeon_miniboss_two.yml
```

```yml
dungeonObjectives: 
- clearpercentage=0.8
```

</div>

</details>

***

### difficulties

Define a lista de dificuldades na masmorra instanciada.

**Obrigatório para masmorras instanciadas!**

| Chave         |   Valores    | Padrão | Obrigatório |
|-------------|:-----------:|:-------:|:---------:|
| `difficulties` | Especial [1] |  none   |    ❌      |

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
  name: hard
- levelSync: 15
  id: 2
  name: mythic
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

Definir dificuldades de masmorras instanciadas criará automaticamente diferentes opções de dificuldade ao entrar na masmorra.

Os nomes de dificuldade definidos aqui serão os utilizados na pasta de chefes personalizados, onde poderás definir quais os poderes que os chefes têm com base na dificuldade.

As dificuldades estão num formato de lista que tem os seguintes campos:

|     Chave     | Descrição                                                                                                                                                                                                                                                    | Valores | Obrigatório |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | Nome da dificuldade para jogadores.                                                                                                                                                                                                                            |[String](#string)        |     ✅     |
|    `id`     | ID da dificuldade, usado em chefes personalizados e itens personalizados para a funcionalidade baseada na dificuldade.                                                                                                                                   |[String](#string)        |     ✅     |
| `levelSync` | Define o nível da sincronização de nível, se existir. A sincronização de nível faz com que todo o equipamento do jogador atinja o valor máximo definido, tornando impossível para os jogadores ficarem com níveis muito altos para uma masmorra e mantendo-a relevante para execuções posteriores. Baseado no sistema de sincronização de nível do Final Fantasy 14. |[Inteiro](#inteiro)        |     ❌     |


</div>

</details>

</div>

***

## Usar o ficheiro do pacote de masmorra meta_pack.yml para masmorras grandes.
Claro, aqui está a versão traduzida para português (Portugal), mantendo a formatação markdown:

Por vezes, podes estar a trabalhar numa masmorra grande que inclui outras masmorras menores dentro de si, permitindo aos jogadores viajarem entre elas através do mundo da masmorra principal. Um ótimo exemplo disto é a Masmorra de Aventura EliteMobs Primis.

A Primis apresenta um vasto mundo onde os jogadores podem explorar e completar missões, mas também inclui duas masmorras instanciadas dentro do seu mundo – uma das quais serve como a luta contra o chefe final. Em casos como este, haverá vários ficheiros de pacotes de masmorra, mesmo que todos pertençam à mesma masmorra abrangente.

Para gerir isto, usamos um ficheiro de pacote de meta masmorra. Este ficheiro funciona como um diretório central, especificando a masmorra principal e listando todo o conteúdo adicional de masmorra associado a ela.

Vamos analisar mais detalhadamente como o pacote de meta masmorra Primis está estruturado:

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
- '&2Uma aventura tutorial leve para jogadores entre os níveis 0-20!'
- '&2As aventuras são mapas enormes com missões,'
- '&2muitos chefes e npcs, entre outras coisas!'
- '&2Também tem modelos personalizados!'
dungeonVersion: 21 #adicionado o ficheiro de meta pacote da masmorra
```

Como podes ver, o ficheiro de pacote de meta masmorra é muito semelhante a um pacote de masmorra normal, com algumas diferenças importantes. O `contentType:` está definido para `META_PACKAGE`, e existe uma configuração adicional chamada `containedPackages:`. Esta configuração lista todos os outros pacotes de masmorra que fazem parte da masmorra maior.

Ao criares o teu meta pacote, certifica-te de incluir a configuração `containedPackages:` e lista todos os pacotes de masmorra que fazem parte da tua masmorra maior. Isto garante que tudo está devidamente ligado e organizado dentro da estrutura geral.

Ao versionar a tua masmorra, toda a versionagem deve ser gerida através do meta pacote. Isto acontece porque o meta pacote serve como o pacote principal que determina a versão de toda a masmorra e também é o pacote usado para exibir informações no menu `/em setup`.

Tem em atenção que as masmorras individuais listadas no meta pacote ainda podem aparecer no menu `/em teleport`. Para evitar isto, terás de desativar manualmente as opções de teletransporte para cada uma dessas masmorras nos seus respetivos ficheiros de configuração.

Por exemplo, no caso da masmorra Primis:

Desativa as entradas de teletransporte no menu para `primis_blood_temple_sanctum.yml` e `primis_gladius_invasion_dungeon.yml`.
Deixa as opções de teletransporte ativadas para `primis_adventure.yml`, pois esta serve como o hub principal onde os jogadores começam a sua jornada e acedem às outras masmorras.
Esta configuração garante uma experiência tranquila para os jogadores, mantendo a estrutura e funcionalidade adequadas para o sistema de masmorras.

Ao nomear o ficheiro, recomendamos a seguinte convenção de nomenclatura:

`nome_da_tua_masmorra_meta_pack.yml`

***

# Valores de Chefe Recomendados

## Criar um mob de masmorra médio

Recomendamos que deixes a configuração normalizedCombat definida como verdadeira. Esta configuração normaliza todos os mobs para se escalarem igualmente com a vida e dano, independentemente do seu tipo de entidade.

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 hits para matar
damageMultiplier: 1.0 #1.5 corações de dano
```

Claro, aqui está a versão revista com clareza e formatação mantidas:

**Nota: Dado que `1.0` é o valor padrão para vida e dano, podes simplesmente omitir a definição de `healthMultiplier` ou `damageMultiplier` e definir `normalizedCombat` para `true`.**

## Criar packs de lixo

Os packs de lixo são numerosos, mas não muito perigosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 hits para matar
damageMultiplier: 0.5 #0.5 corações de dano
```

## Criar reforços

Os reforços devem morrer muito facilmente, mas representam um perigo em termos de dano (estes valores são recomendados para 4+ entidades corpo a corpo, o uso real pode variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 hit para matar
damageMultiplier: 0.6 #1 coração de dano
```

## Criar minibosses

Os minibosses devem manter a sua posição e representar um desafio mecânico para os jogadores. Deve ser um teste de habilidade que dure um pouco, mas não algo extremamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 hits para matar
damageMultiplier: 1.2 #2 corações de dano
```

## Criar chefes

Os chefes são um desafio real, a conclusão de uma acumulação numa masmorra e um verdadeiro teste de habilidade com tudo em risco. Os encontros devem ser longos e a morte deve ser uma ameaça presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 hits para matar
damageMultiplier: 1.4 #2.5 corações de dano
```

**Estes valores recomendados são meramente estimativas aproximadas, e os valores finais devem ser ajustados de acordo com os encontros específicos.**

**Isto é particularmente crucial para os chefes finais da masmorra; podes querer exceder significativamente o valor recomendado de 7.0 para healthMultiplier para dar à última luta aquele sentimento épico.**

***

# Empacotar conteúdo EliteMobs para distribuição

Finalmente, provavelmente vais querer empacotar a tua masmorra para armazenamento ou distribuição.

O EliteMobs tem um sistema de importação que permite aos administradores importar, instalar e desinstalar rapidamente conteúdo. [Podes ver como funciona aqui.]($language$/elitemobs/setup.md)

## Cortar Mundos

Por vezes, podes precisar de reduzir o tamanho do teu mundo Minecraft para o tornar mais leve e, consequentemente, mais fácil de distribuir. Isto pode ser conseguido através do uso do [plugin WorldBorder](https://www.spigotmc.org/resources/worldborder-1-15.80466/). Apesar do plugin estar listado como suportando apenas o MineCraft até à versão 1.19, ele funciona perfeitamente na versão mais recente do MineCraft a partir de 25 de janeiro de 2024.

<details>
<summary>Dica</summary>
Se estiveres a fazer isto pela primeira vez, pode ser uma boa ideia criar uma cópia de segurança do teu mundo, caso algo corra mal.
</details>

Uma vez que o plugin esteja instalado, navega para o meio do mundo ou para a área específica que pretendes cortar. Em seguida, executa o comando `/wb set x`, onde `x` representa o tamanho aproximado do raio que pretendes para a tua área.

<details>
<summary>Dica</summary>
Se <code>/wb</code> não estiver a funcionar para ti, tenta <code>/worldborder:wb</code>.
</details>

Depois de executar este comando, voa até às bordas do teu mundo para verificar se a borda do mundo foi devidamente definida e cobre o tamanho pretendido. Irás reconhecer que atingiste a borda do mundo quando fores empurrado para trás, acompanhado por uma mensagem no chat.

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

Na imagem acima, pretendemos cortar o mundo em torno dos blocos roxos, deixando apenas alguns pedaços em torno deles. Para conseguir isto, ficamos no meio da área roxa nos quadrados vermelhos e executamos `/wb set 50`, definindo a borda do mundo apenas para além da área roxa.

Em seguida, usamos o comando `/wb trim [freq] [pad]`, com a frequência definida para 200 e o pad para 20. O pad determina quantos pedaços devem ser deixados em torno da borda do mundo (a área roxa), e a frequência determina quantos pedaços devem ser processados por segundo. Depois de executar `/wb trim 200 20`, seremos solicitados a confirmar executando `/wb trim confirm`. Confirmamos a ação e, após algum tempo, o nosso mundo será cortado, reduzindo o seu tamanho e tornando-o mais conveniente para distribuição.

Agora, podes remover a borda do mundo usando `/wb clear all` ou simplesmente deixá-la, se quiseres.

## Cortar a pasta do mundo

Existem vários ficheiros e pastas localizadas na tua pasta do mundo que podemos descartar, uma vez que os plugins não usam todos eles. Isto irá reduzir o tamanho do teu mundo e torná-lo mais fácil de distribuir.

Para um Ambiente de mundo NORMAL:

Para preparar o teu mundo, mantém os seguintes ficheiros e pastas:

1. Pasta **region**
2. **raids.dat** de dentro da pasta **data** (certifica-te de que está colocada dentro da pasta **data** ao copiar)
3. Ficheiro **level.dat**

Podes eliminar em segurança todos os outros ficheiros e pastas localizados na pasta do mundo. Isto irá configurar o teu mundo corretamente para o ambiente NORMAL.

Para ambientes de mundo NETHER e THE_END:

Para preparar o teu mundo, mantém os seguintes ficheiros e pastas:

1. Pasta **region** dentro da pasta **DIM-1** (certifica-te de que está colocada dentro da pasta **DIM-1** ao copiar)
2. **raids.dat** de dentro da pasta **data** (certifica-te de que está colocada dentro da pasta **data** ao copiar)
3. Ficheiro **level.dat**

Podes eliminar em segurança todos os outros ficheiros e pastas localizados na pasta do mundo. Isto irá configurar o teu mundo corretamente para os ambientes NETHER e THE_END.

## Executar o comando de pacote

O EliteMobs tem o comando **`/em package <nomeDaMasmorra> <versão>`**. Este comando percorre todas as pastas de configuração do EliteMobs e empacota automaticamente todo o conteúdo em pastas que correspondem ao `nomeDaMasmorra` para um ficheiro zipado e uma pasta normal na pasta `exports` do EliteMobs.

***Por esta razão, é altamente recomendado que mantenhas o conteúdo que pretendes empacotar em pastas com o mesmo nome do nome do teu pacote.*** Caso contrário, terás de reunir e empacotar manualmente os ficheiros na estrutura de ficheiros para distribuição.

## Adicionar o ficheiro de pacote de masmorra

Se estiveres a criar uma masmorra, terás de adicionar manualmente o ficheiro de pacote de masmorra na pasta recentemente gerada na pasta exports. O teu ficheiro de configuração de pacote de masmorra deve seguir o formato descrito acima e ser colocado numa pasta chamada `content_packages`. [Consulta a estrutura de ficheiros para mais sobre isto.](#estrutura-de-ficheiros).

**Certifica-te de que fazes o zip da tua masmorra quando terminares!**

## Estrutura de ficheiros

Se fizeste tudo corretamente, a estrutura de ficheiros deve ser semelhante a este exemplo, onde chamamos à masmorra `minha_masmorra_legal`:

<details>
<summary>Exemplo de Estrutura de Ficheiros minha_masmorra_legal</summary>

- minha_masmorra_legal.zip
    * content_packages
        * minha_masmorra_legal.yml <- É aqui que o teu ficheiro de configuração de pacote de masmorra vai
    * worldcontainer
        * [As tuas pastas de mundo vão aqui]
    * wormholes
        * minha_masmorra_legal
            * [Os teus buracos de minhoca vão aqui]
    * npcs
        * minha_masmorra_legal
            * [Os teus NPCs vão aqui]
    * customtreasurechests
        * minha_masmorra_legal
            * [Os teus baús de tesouro vão aqui]
    * customquests
        * minha_masmorra_legal
            * [As tuas missões vão aqui]
    * customitems
        * minha_masmorra_legal
            * [Os teus itens personalizados vão aqui]
    * custombosses
        * minha_masmorra_legal
            * [Os teus chefes personalizados vão aqui]
    * customarenas
        * minha_masmorra_legal
            * [As tuas arenas personalizadas vão aqui]
    * powers
        * minha_masmorra_legal
            * [Os teus poderes personalizados vão aqui]
    * world_blueprints
        * minha_masmorra_legal
            * [A tua pasta de mundo vai aqui, usada para masmorras instanciadas]
    * customevents
        * minha_masmorra_legal
            * [Os teus eventos personalizados vão aqui]
    * customspawns
        * minha_masmorra_legal
            * [Os teus spawns personalizados vão aqui]
    * models
        * [Os teus modelos em formato ModelEngine bbmodel vão aqui, aceita pastas]

</details>

Isto permite que a maioria dos utilizadores arraste e largue ficheiros diretamente para o seu servidor e que tudo funcione imediatamente.

***Importante: ao empacotar para distribuição, certifica-te de que DESINSTALAS A MINIMASMORRA PRIMEIRO! Não queres distribuir minimasmorras instaladas, queres que os administradores as configurem nos seus servidores!***

# Partilhar Pacotes de Masmorra que criaste com a comunidade

O Discord contém uma secção [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons") onde as pessoas podem partilhar as suas criações de Minimasmorras. Sente-te à vontade para contribuir!
