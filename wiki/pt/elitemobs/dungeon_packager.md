[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# O que são Masmorras?

Você pode encontrar informações sobre masmorras, incluindo informações sobre masmorras pré-fabricadas [aqui]($language$/elitemobs/dungeons.md).

***

# O que é o empacotador de masmorras?

O empacotador de masmorras permite que os administradores não apenas criem e empacotem masmorras, mas também empacotem qualquer tipo de conteúdo do EliteMobs. Isso inclui coisas como pacotes de eventos, pacotes de modelos, arenas, pacotes de NPCs, pacotes de itens e assim por diante.

<details>

<summary>Por que usar pacotes de masmorras?</summary>

- ***Masmorras instanciadas!*** Masmorras instanciadas só podem ser criadas por meio do sistema de pacotes de masmorras.
- ***Cópias de segurança seguras de Mini-Masmorras!*** Se você criar um Pacote de Masmorras, poderá implantá-lo e reimplantá-lo em qualquer servidor que quiser, a qualquer momento e por qualquer motivo.
- ***Fácil de ativar e desativar!*** Você sempre pode fazer `/em setup` e ativar ou desativar temporária ou permanentemente Pacotes de Masmorras.
- ***Fácil de compartilhar!*** Se você deseja compartilhar suas criações, os Pacotes de Masmorras podem ser compactados e enviados para outras pessoas. Existe uma sala do Discord dedicada a criações da comunidade se você estiver interessado!
- ***Teletransportes!*** Os pacotes de masmorras criam automaticamente localizações de teletransporte que podem ser acessadas na página Teletransportes do menu `/em`, o que pode ser muito útil em muitas configurações.

</details>

# Criando Masmorras

As seguintes configurações são usadas para criar um arquivo de configuração que deve ir para a pasta `dungeonpackages`. Essas configurações são usadas para criar masmorras especificamente, e não são necessárias se você apenas quiser usar o empacotador de masmorras para distribuir conteúdo não relacionado a masmorras, como um pacote de itens ou eventos.

## Plugins Necessários

Para usar o Empacotador de Masmorras, você precisará do seguinte plugin:

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protege a Mini-Masmorra

## Criando uma masmorra, passo a passo

O EliteMobs costumava ter dois tipos principais de masmorras: baseadas em mundo e baseadas em esquemático.

As masmorras baseadas em esquemático estavam associadas a uma construção esquemática. Elas agora foram desativadas e não são mais suportadas.

Todas as masmorras do EliteMobs agora são baseadas em mundo.

***

### Valores Globais

Os seguintes valores se aplicam a todas as masmorras

<div align="center">

### isEnabled

Define se o pacote de masmorras está habilitado.

| Chave         |      Valores       | Padrão | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Booleano](#boolean) | `false` |    ✅      |

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

Define o nome do conteúdo. Suporta [Códigos de Cor](#color_codes).

| Chave         |      Valores       | Padrão | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [String](#string) | `false` |    ✅      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aThe Green Dungeon'
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
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  nenhum   |    ✅      |

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
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  nenhum   |    ✅      |

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

Define as informações adicionais que aparecerão na tela do `/em setup`. Apenas para fins informativos. Suporta [Códigos de Cor](#color_codes).

| Chave         |           Valores            | Padrão | Obrigatório |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [Lista de Strings](#string_list) |  nenhum   |    ✅      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
customInfo:
- '&aThe best dungeon.'
- '&aMade by: CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Define o link de download quando o conteúdo não é baixado. Apenas para fins informativos.

| Chave         |      Valores       | Padrão | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [String](#string) |  nenhum   |    ❌      |

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
| `dungeonSizeCategory` | Especial [1] |  nenhum   |    ✅      |

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
| `LAIR`    | Os Covis são um tipo de masmorra pequena que se concentra em uma grande luta contra o chefe.  |
| `SANCTUM`    | Os Santuários são o equivalente a Covis instanciados. Isso significa que eles se concentram em torno de uma grande luta contra o chefe. |
| `MINIDUNGEON`    | As Mini-Masmorras são um tipo de masmorra de tamanho médio que geralmente contém 3-15 minibosses e um grande chefe, além de muitos mobs "lixo" que são destinados a serem "farmados" por jogadores para obter moedas e equipamentos. |
| `DUNGEON`    | As Masmorras são o equivalente a Mini-Masmorras instanciadas. Este é o tipo mais tradicional de masmorra de MMORPG, onde os jogadores se juntam em grupos e passam por um desafio de mobs lixo e minibosses para lutar contra um chefe final. |
| `RAID`    | Em breve!|
| `ADVENTURE`    | As Aventuras são mapas de aventura completos. Eles incluem linhas de missões, NPCs, grandes quantidades de minibosses e chefes e podem até conter suas próprias arenas ou masmorras dentro delas. |
| `ARENA`    | As Arenas são áreas de sobrevivência baseadas em ondas em que os jogadores são recompensados por derrotar ondas. |
| `OTHER`    | Qualquer outra coisa que não se enquadre nas categorias anteriores. |

Para descrições mais detalhadas, veja [Masmorras]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Define se o pacote de masmorras deve ser protegido pelo WorldGuard.

| Chave         |      Valores       | Padrão | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Booleano](#boolean) |  `true`   |    ❌      |

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
| `dungeonVersion` | [Integer](#integer) |  nenhum   |    ✅      |

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

Define as informações que aparecem no menu. Suporta [Códigos de Cor](#colorcodes).

*Funciona apenas quando o `/em` está definido para o modo de livro usando `/em alt`.*

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [String](#string) |  nenhum   |    ✅      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
playerInfo: 'Difficulty: &a1-man easy content!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Define a mensagem que aparece quando um jogador entra na zona da masmorra. Suporta [Códigos de Cor](#colorcodes).

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [String](#string) |  nenhum   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aYou have entered the dungeon!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Define a mensagem que aparece quando um jogador deixa a zona da masmorra. Suporta [Códigos de Cor](#colorcodes).

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [String](#string) |  nenhum   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aYou have left the dungeon!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Define se o pacote de masmorras possui modelos personalizados (para ModelEngine ou FreeMinecraftModels).

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Booleano](#boolean) |  nenhum   |    ❌      |

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

Define o nome das pastas usadas para arquivos associados a esta masmorra. 

**Obrigatório para masmorras instanciadas!**.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [String](#string) |  nenhum   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: my_dungeon_folder
```

</div>

</details>

***

### contentLevel

Define o nível de conteúdo que a masmorra deve exibir no menu EM.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Integer](#integer) |  nenhum   |    ❌      |

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
| `enchantmentChallenge` | [Booleano](#boolean) | `false` |    ❌      |

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

### Pacotes de masmorras baseados em mundo

Os seguintes valores só se aplicam a masmorras baseadas em mundo.

<div align="center">

***

### worldName

Define o nome do mundo que deve ser empacotado.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [String](#string) |  nenhum   |    ✅      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
worldName: my_minecraft_world
```

</div>

</details>

***

### womholeWorldName

Esta função define o nome do mundo do buraco de minhoca, que serve como um mundo secundário ligado ao mundo principal. É utilizado para recursos como centros de teletransporte ou câmaras de chefe únicas.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [String](#string) |  nenhum   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
womholeWorldName: my_minecraft_world_wormhole
```

</div>

</details>

***

### environment

Define o ambiente do mundo.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Ambiente](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  nenhum   |    ✅      |

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

Define a localização de teletransporte do pacote de masmorras. É para onde os jogadores serão teletransportados ao entrar na masmorra.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [String](#string) |  nenhum   |    ✅      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
teleportLocation: my_minecraft_world,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

Permite ou impede que explosões causem danos a blocos em uma masmorra. As explosões são consideradas explosões elite, então qualquer dano aos blocos será regenerado em 2 minutos.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `allowExplosionBlockDamage` | [Booleano](#boolean) |  `false`   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### Masmorras Instanciadas

*As masmorras instanciadas criam um novo mundo a cada vez que um grupo de jogadores deseja completar uma masmorra e o exclui quando termina. Para que isso funcione corretamente, você deve colocar uma pasta seguindo o `dungeonConfigFolderName` na pasta `world_blueprints` da configuração do EliteMobs.*

*Você então coloca o mundo que usará dentro da pasta que você criou, certificando-se de que o arquivo `session.lock` do mundo seja excluído.*

Os seguintes valores só se aplicam a masmorras instanciadas. Observe que todas as masmorras instanciadas são masmorras mundiais, então elas também usam os valores das masmorras mundiais.

<div align="center">

***

### startLocation

Define a localização de teletransporte do ponto de partida da masmorra instanciada. É para onde os jogadores serão teletransportados ao iniciar a masmorra instanciada com `/em start`.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [String](#string) |  nenhum   |    ✅      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
startLocation: my_minecraft_world,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

Define a permissão necessária para entrar na instância da masmorra.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [String](#string) |  nenhum   |    ❌      |

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yml
permission: elitedungeon.mypermission
```

</div>

</details>

***

### minPlayerCount

Define a contagem mínima de jogadores necessária para iniciar uma masmorra.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `minPlayerCount` | [Integer](#integer) |  `1`   |    ❌      |

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

Define a contagem máxima de jogadores necessária para iniciar uma masmorra.

| Chave         |  Valores  | Padrão | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `maxPlayerCount` | [Integer](#integer) |   `5`   |    ❌      |

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

Define a lista de objetivos da masmorra necessários para que a masmorra seja considerada concluída.

| Chave         |           Valores            | Padrão | Obrigatório |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [Lista de Strings](#string_list) |  nenhum   |    ✅      |

<details> 

<summary><b>Exemplos</b></summary>

<div align="left">

Existem atualmente dois tipos de objetivos de masmorra:

* Matar alvo: `filename=boss.yml:amount=X`
* Matar porcentagem da masmorra: `clearpercentage=X.Y`

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
| `difficulties` | Especial [1] |  nenhum   |    ❌      |

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

Definir as dificuldades da masmorra instanciada criará automaticamente diferentes opções de dificuldade ao entrar na masmorra. 

Os nomes de dificuldade definidos aqui serão os usados na pasta de chefes personalizados, onde você pode definir quais poderes os chefes têm com base na dificuldade.

As dificuldades estão em um formato de lista que possui os seguintes campos:

|     Key     | Descrição                                                                                                                                                                                                                                                    | Valores | Obrigatório |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | Nome da dificuldade para os jogadores.                                                                                                                                                                                                                            |[String](#string)        |     ✅     |
|    `id`     | ID da dificuldade, usado em chefes personalizados e itens personalizados para o recurso baseado em dificuldade.                                                                                                                                                                 |[String](#string)        |     ✅     |
| `levelSync` | Define o nível do level sync, se houver. O level sync faz com que todo o equipamento do jogador atinja o valor definido, tornando impossível para os jogadores ficarem com nível superior a uma masmorra e mantendo-a relevante para runs posteriores. Baseado no sistema de level sync do Final Fantasy 14. |[Integer](#integer)        |     ❌     |


</div>

</details>

</div>

***

# Valores de Chefe Recomendados

## Criando um mob de masmorra médio

Recomendamos deixar a configuração normalizedCombat definida como true. Esta configuração normaliza todos os mobs para escalonar igualmente com saúde e dano, independentemente do tipo de entidade.

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 acertos para derrotar 
damageMultiplier: 1.0 #1.5 corações de dano
```

Certamente, aqui está a versão revisada com clareza e formatação retidas:

**Observação: Como `1.0` é o valor padrão para saúde e dano, você pode simplesmente omitir a definição de `healthMultiplier` ou `damageMultiplier` e definir `normalizedCombat` como `true`.**

## Criando grupos de inimigos

Grupos de inimigos são numerosos, mas não muito perigosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 acertos para derrotar 
damageMultiplier: 0.5 #0.5 corações de dano
```

## Criando reforços

Os reforços devem morrer muito facilmente, mas representar um perigo em termos de dano (esses valores são recomendados para 4+ entidades de combate corpo a corpo, o uso real pode variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 acerto para derrotar 
damageMultiplier: 0.6 #1 coração de dano
```

## Criando minibosses

Os minibosses devem resistir e representar um desafio mecânico para os jogadores. Deve ser um teste de habilidade que dura um pouco, mas não algo extremamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 acertos para derrotar 
damageMultiplier: 1.2 #2 corações de dano
```

## Criando chefes

Os chefes são um verdadeiro desafio, a conclusão de uma acumulação em uma masmorra e um verdadeiro teste de habilidade com tudo em jogo. Os encontros devem ser longos e a morte deve ser uma ameaça presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 acertos para derrotar 
damageMultiplier: 1.4 #2.5 corações de dano
```

**Esses valores recomendados são apenas estimativas aproximadas, e os valores finais devem ser ajustados de acordo com os encontros específicos.**

**Isso é particularmente crucial para os chefes finais da masmorra; você pode querer exceder significativamente o valor recomendado de 7.0 para healthMultiplier para dar à última luta aquela sensação épica.**

***

# Empacotando conteúdo do EliteMobs para distribuição

Por fim, você provavelmente desejará empacotar sua masmorra para armazenamento ou distribuição.

O EliteMobs possui um sistema de importação que permite que os administradores importem, instalem e desinstalem conteúdo rapidamente. [Você pode ver como funciona aqui.]($language$/elitemobs/setup.md)

## Cortando Mundos

Às vezes, você pode precisar reduzir o tamanho do seu mundo Minecraft para torná-lo mais leve e, consequentemente, mais fácil de distribuir. Isso pode ser feito por meio do uso do plugin [WorldBorder](https://www.spigotmc.org/resources/worldborder-1-15.80466/). Apesar do plugin estar listado como suportando apenas o MineCraft até a versão 1.19, ele funciona perfeitamente na versão mais recente do MineCraft em 25 de janeiro de 2024.

<details>
<summary>Dica</summary>
Se você estiver fazendo isso pela primeira vez, pode ser uma boa ideia criar uma cópia de segurança do seu mundo, caso algo dê errado.
</details>

Depois que o plugin for instalado, navegue até o meio do mundo ou a área específica que você deseja cortar. Em seguida, execute o comando `/wb set x`, onde `x` representa o tamanho aproximado do raio que você deseja para sua área.

<details>
<summary>Dica</summary>
Se <code>/wb</code> não estiver funcionando para você, tente <code>/worldborder:wb</code>.
</details>

Depois de executar este comando, voe até as bordas do seu mundo para verificar se a borda do mundo foi definida corretamente e cobre o tamanho pretendido. Você reconhecerá ao chegar à borda da borda do mundo quando for empurrado para trás, acompanhado por uma mensagem no chat.

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

Na imagem acima, queremos cortar o mundo ao redor dos blocos roxos, deixando apenas alguns chunks ao redor deles. Para conseguir isso, ficamos no meio da área roxa nos quadrados vermelhos e executamos `/wb set 50`, definindo a borda do mundo logo além da área roxa.

Em seguida, usamos o comando `/wb trim [freq] [pad]`, com a frequência definida como 200 e o pad como 20. O pad determina quantos chunks devem ser deixados ao redor da borda do mundo (a área roxa), e a frequência determina quantos chunks devem ser processados por segundo. Depois de executar `/wb trim 200 20`, seremos solicitados a confirmar executando `/wb trim confirm`. Confirmamos a ação e, após algum tempo, nosso mundo será cortado, reduzindo seu tamanho e tornando-o mais conveniente para distribuição.

Agora você pode remover a borda do mundo usando `/wb clear all` ou apenas deixá-la se quiser.

## Cortando a pasta do mundo

Existem vários arquivos e pastas localizados na pasta do seu mundo que podemos descartar, pois os plugins não usam todos eles. Isso reduzirá o tamanho do seu mundo e tornará mais fácil a distribuição.

Para um ambiente de mundo NORMAL:

Para preparar seu mundo, mantenha os seguintes arquivos e pastas:

1. pasta **region**
2. **raids.dat** de dentro da pasta **data** (certifique-se de que ele seja colocado dentro da pasta **data** ao copiar)
3. arquivo **level.dat**

Você pode excluir com segurança todos os outros arquivos e pastas localizados na pasta do mundo. Isso configurará seu mundo corretamente para o ambiente NORMAL.

Para ambientes de mundo NETHER e THE_END:

Para preparar seu mundo, mantenha os seguintes arquivos e pastas:

1. pasta **region** dentro da pasta **DIM-1** (certifique-se de que ele seja colocado dentro da pasta **DIM-1** ao copiar)
2. **raids.dat** de dentro da pasta **data** (certifique-se de que ele seja colocado dentro da pasta **data** ao copiar)
3. arquivo **level.dat**

Você pode excluir com segurança todos os outros arquivos e pastas localizados na pasta do mundo. Isso configurará seu mundo corretamente para os ambientes NETHER e THE_END.

## Executando o comando de pacote

O EliteMobs tem o comando **`/em package <dungeonName> <version>`**. Este comando percorre todas as pastas de configuração do EliteMobs e empacota automaticamente todo o conteúdo em pastas que correspondem ao `dungeonName` em um arquivo compactado e uma pasta normal na pasta `exports` do EliteMobs.

***Por esse motivo, é altamente recomendável que você mantenha o conteúdo que deseja empacotar em pastas com o mesmo nome que o nome do seu pacote.*** Caso contrário, você terá que reunir e empacotar os arquivos manualmente na estrutura de arquivos para distribuição.

## Adicionando o arquivo do pacote de masmorras

Se você estiver criando uma masmorra, precisará adicionar manualmente o arquivo do pacote de masmorras na pasta recém-gerada na pasta `exports`. Seu arquivo de configuração do pacote de masmorras deve seguir o formato descrito acima e ser colocado em uma pasta chamada `dungeonpackages`. [Verifique a estrutura de arquivos para saber mais sobre isso.](#file-structure).

**Certifique-se de compactar sua masmorra quando terminar!**

## Estrutura de Arquivos

Se você fez tudo corretamente, a estrutura de arquivos deve ser semelhante a este exemplo, onde chamamos a masmorra de `my_cool_dungeon`:

<details>
<summary>Exemplo de Estrutura de Arquivos my_cool_dungeon</summary>

- my_cool_dungeon.zip
    * dungeonpackages
        * my_cool_dungeon.yml <- É aqui que o arquivo de configuração do pacote da sua masmorra vai
    * worldcontainer
        * [Suas pastas de mundo vão aqui]
    * wormholes
        * my_cool_dungeon
            * [Seus buracos de minhoca vão aqui]
    * npcs
        * my_cool_dungeon
            * [Seus NPCs vão aqui]
    * customtreasurechests
        * my_cool_dungeon
            * [Seus baús do tesouro vão aqui]
    * customquests
        * my_cool_dungeon
            * [Suas missões vão aqui]
    * customitems
        * my_cool_dungeon
            * [Seus itens personalizados vão aqui]
    * custombosses
        * my_cool_dungeon
            * [Seus chefes personalizados vão aqui]
    * customarenas
        * my_cool_dungeon
            * [Suas arenas personalizadas vão aqui]
    * powers
        * my_cool_dungeon
            * [Seus poderes personalizados vão aqui]
    * world_blueprints
        * my_cool_dungeon
            * [Sua pasta de mundo vai aqui, usada para masmorras instanciadas]
    * customevents
        * my_cool_dungeon
            * [Seus eventos personalizados vão aqui]
    * customspawns
        * my_cool_dungeon
            * [Suas gerações personalizadas vão aqui]
    * models
        * [Seus modelos em formato bbmodel do ModelEngine vão aqui, aceita pastas]

</details>

Isso permite que a maioria dos usuários arraste e solte arquivos diretamente em seu servidor e os tenha funcionando imediatamente.

***Importante: ao empacotar para distribuição, certifique-se de DESINSTALAR A MINIDUNGEON PRIMEIRO! Você não deseja distribuir mini-masmorras instaladas, você deseja que os administradores as configurem em seus servidores!***

# Compartilhando Pacotes de Masmorras que você criou com a comunidade

O Discord contém uma seção [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons") onde as pessoas podem compartilhar suas criações de Mini-Masmorras. Sinta-se à vontade para contribuir!



