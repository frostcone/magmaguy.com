# Ações de Script Elite

As ações são o núcleo do script. Estas determinam o que o script faz e permitem definir intervalos personalizados.

As ações começam sempre com o tipo de ação que vai realizar. Diferentes tipos de ação têm funções diferentes. Além
disso, todas as ações têm um alvo ou alvos. As ações também podem ter um temporizador de espera, para garantir que as
coisas acontecem com atrasos personalizáveis. Finalmente, as ações podem também ter vários outros campos específicos do
tipo de ação.

## Atributos Partilhados

| Valores                  |                                                                                             Detalhes                                                                                             |        Especial        |
|--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------:|
| `Alvo`                   |                                                               [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                                                               |           ❌            |
| `espera`                 |                                                           Define a quantidade de tempo para esperar (ticks) antes de executar as ações                                                           |           ❌            |
| `repetirA cada`          | Define as ações para se repetirem a cada quantidade definida de ticks. Qualquer script que tenha isso definido, mas não esteja a usar vezes, será terminado após a morte do mob para evitar lag. |           ❌            |
| `vezes`                  |                                                                     Define a quantidade de vezes que uma ação irá acontecer                                                                      | Requer `repetirA cada` |
| `scripts`                |                                                                     Define os scripts que serão executados no final da ação                                                                      |           ❌            |
| `executarApenasUmScript` |                                                                  Escolhe um dos `scripts` aleatoriamente e executa apenas esse.                                                                  |           ❌            |
| `deslocamento`           |              Esta opção está em `Alvo`. Permite deslocar a localização do alvo. O deslocamento não funciona com ações que estão a visar zonas com `ZONA_TOTAL` ou `ZONA_FRONTEIRA`.              |           ❌            |
| `depurar`                |                              Esta opção está na seção de ação do script. Quando definida como verdadeira, irá exibir ícones de barreira na área em que a ação está.                              |           ❌            |

## Tipos de Ação

### MENSAGEM_BARRA_DE_AÇÃO

Define a mensagem da barra de ação para os alvos.

| Valores  |                               Detalhes                               | Obrigatório |                      Especial                       |
|----------|:--------------------------------------------------------------------:|:-----------:|:---------------------------------------------------:|
| `Alvo`   | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |                          ❌                          |
| `sValor` |                               Mensagem                               |      ✅      | Pode usar [Códigos de Cor](#códigos_de_cor) com `&` |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: MENSAGEM_BARRA_DE_AÇÃO
      Alvo: 
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      sValor: "&2Olá Mundo!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Irá definir a barra de ação para dizer Olá Mundo a quaisquer jogadores que estejam a 10 blocos do boss.

</div>

</details>

</div>

---

### MENSAGEM_BARRA_DE_BOSS

Adiciona uma barra de boss ao(s) alvo(s).

| Valores   |                               Detalhes                               | Obrigatório |                      Especial                       |
|-----------|:--------------------------------------------------------------------:|:-----------:|:---------------------------------------------------:|
| `Alvo`    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |                          ❌                          |
| `sValor`  |                               Mensagem                               |      ✅      | Pode usar [Códigos de Cor](#códigos_de_cor) com `&` |
| `duração` |                  Duração da barra de boss em ticks                   |      ✅      |                          ❌                          |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: MENSAGEM_BARRA_DE_BOSS
      Alvo: 
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      duração: 120
      sValor: "&2Olá Mundo!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Irá definir uma barra de boss dizendo Olá Mundo para quaisquer jogadores que estejam a 10 blocos do boss durante 1
segundo.

</div>

</details>

</div>

---

### DANO

É assim que pode danificar entidades como outras entidades.

_Nota: isto usa nativamente o sistema de dano EliteMobs! Isto significa que irá ver a redução normal de armadura de
elite dos ataques. Mais sobre isto na seção de multiplicadores._

| Valores         |                               Detalhes                               | Obrigatório |
|-----------------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`          | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `multiplicador` |                        Multiplicador de dano                         |      ✅      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: DANO
      Alvo: 
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      multiplicador: 0.5
```

Define o dano para ser metade da quantidade de dano base que o boss causaria ao jogador, tendo em conta as reduções de
dano.

</div>

</details>

</div>

#### multiplicador

Define o multiplicador de dano do boss para o efeito.

**Importante**: para que os poderes sejam escalados facilmente e automaticamente, o dano é aplicado fazendo com que o
boss atinja o jogador uma vez e multiplicando o dano base do boss com o multiplicador.

Isto significa que um multiplicador de 1.0 é o mesmo que um ataque normal do boss. 2.0 é um ataque 2x a força normal e
0.5 é 50% tão forte.

---

### TORNAR_INVULNERAVEL

Torna um alvo invulnerável.

| Valores        |                               Detalhes                               | Obrigatório |
|----------------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`         | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `invulnerável` |                  Define se o boss está invulnerável                  |      ✅      |
| `duração`      |            Define a duração da invulnerabilidade (ticks)             |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: TORNAR_INVULNERAVEL
      Alvo:
        tipoDeAlvo: AUTO
      invulnerável: true
      duração: 60
```

Torna um boss invulnerável por 60 ticks (3 segundos).

</div>

</details>

</div>

---

### MODIFICAR_DANO

Modifica o dano causado a um boss ou causado a jogadores por esse boss. Esta é uma ação especial com alguns requisitos especiais.

| Valores         |        Detalhes        | Obrigatório |
|-----------------|:----------------------:|:-----------:|
| `multiplicador` | Multiplicador de dano. |      ✅      |

Esta ação é especial e tem de estar num script que tenha um ouvinte de evento para um evento de dano. Os seguintes são
eventos de dano
válidos: `EliteMobDanificadoPorEliteMobEvento`, `EliteMobDanificadoPorJogadorEvento`, `EliteMobDanificadoEvento` para
eventos que reduzem o dano causado ao boss e `JogadorDanificadoPorEliteMobEvento` para eventos que reduzem o dano
causado a jogadores.

É altamente recomendável que aprenda como a condição `temTag` funciona para usar melhor esta ação. Quando usada
corretamente, é possível fazer com que o boss resista temporariamente ou fique mais fraco ao dano e isto pode ser
associado a buffs de jogadores, localização do boss ou muitos outros fatores.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: MODIFICAR_DANO
      multiplicador: 2.0
      Condições:
        temTags:
        - "JogadorLegal"
        Alvo:
          tipoDeAlvo: ALVO_DIRETO
```

Aumenta o dano causado ao boss pelos jogadores por 2x, mas apenas se o jogador tiver uma tag chamada "JogadorLegal"

</div>

</details>

</div>

---

### MENSAGEM

Envia uma mensagem para o(s) alvo(s).

| Valores  |                               Detalhes                               | Obrigatório |                      Especial                       |
|----------|:--------------------------------------------------------------------:|:-----------:|:---------------------------------------------------:|
| `Alvo`   | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |                          ❌                          |
| `sValor` |                               Mensagem                               |      ✅      | Pode usar [Códigos de Cor](#códigos_de_cor) com `&` |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: MENSAGEM
      Alvo: 
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      sValor: "&2Olá Mundo!"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Enviará uma mensagem de chat para todos os jogadores a 10 blocos do boss.

</div>

</details>

</div>

---

### NAVEGAR

Faz com que o boss navegue (ande) até ao alvo especificado.

| Valores      |                                                 Detalhes                                                 | Obrigatório | Especial |
|--------------|:--------------------------------------------------------------------------------------------------------:|:-----------:|:--------:|
| `Alvo`       |                   [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                   |      ✅      |    ❌     |
| `AlvoFinal`  |                   [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                   |      ✅      |    ❌     |
| `velocidade` | Define a velocidade de navegação do boss. `1.0` sendo o valor do boss conforme definido na configuração. |      ❌      |    ❌     |
| `bValor`     |      Define se o boss deve ser teletransportado à força para o `AlvoFinal` caso a navegação falhe.       |      ❌      |    ❌     |
| `duração`    |  Quanto tempo o boss deve tentar navegar antes de desistir. Definido em ticks. O padrão é de 100 ticks.  |      ✅      |    ❌     |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: NAVEGAR
      Alvo: 
        tipoDeAlvo: AUTO
      AlvoFinal:
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 50
      velocidade: 1.0
      bValor: true
      duração: 100
```

Fará com que o boss navegue para o local onde o jogador estava quando atingiu o boss.

</div>

</details>

</div>

---

### COLOCAR_BLOCO

Coloca um bloco na(s) localização(ões) do alvo durante a duração.

| Valores    |                                                         Detalhes                                                         | Obrigatório |
|------------|:------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `Alvo`     |                           [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                           |      ✅      |
| `material` | [Material](#material) do bloco, [lista completa aqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |      ✅      |
| `duração`  |                                               Duração do efeito, em ticks                                                |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Zona:
      forma: DOMO
      raio: 3
      Alvo:
        tipoDeAlvo: AUTO
    Ações:
    - ação: COLOCAR_BLOCO
      Alvo:
        tipoDeAlvo: ZONA_TOTAL
      duração: 120
      material: VIDRO
```

<div align="center">

![elitescript_actions_placeblock.jpg](../../../img/wiki/elitescript_actions_placeblock.jpg)

</div>

Coloca um domo de vidro em volta do boss que irá durar 6 segundos.

_Nota: Se nenhuma duração for definida, a colocação do bloco é permanente._

</div>

</details>

</div>

---

### REPRODUZIR_ANIMAÇÃO

Reproduz a animação especificada para um Modelo Personalizado usando Model Engine. Requer Model Engine e um Modelo
Personalizado válido para estar no alvo que executa a animação.

| Valores  |                               Detalhes                               | Obrigatório |
|----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`   | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValor` |                      Define o nome da animação                       |      ✅      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: REPRODUZIR_ANIMAÇÃO
      Alvo:
        tipoDeAlvo: AUTO
      sValor: "dança_fortnite"
```

Define o boss para reproduzir a animação dança_fortnite. Requer que o servidor tenha Model Engine, que o boss tenha um
disfarce personalizado e que o disfarce personalizado tenha uma animação chamada "dança_fortnite".

</div>

</details>

</div>

---

### REPRODUZIR_SOM

Reproduz um som no jogo.

| Valores  |                               Detalhes                               | Obrigatório |
|----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`   | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValor` |                Define o nome do som a ser reproduzido                |      ✅      |
| `tom`    |                Define o tom do som a ser reproduzido                 |      ❌      |
| `volume` |               Define o volume do som a ser reproduzido               |      ❌      |

[Aqui está uma lista útil de todos os sons do Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php)
Lembre-se que isto também pode reproduzir sons personalizados de pacotes de recursos.
Quando a ação está a visar uma zona, então a ação irá reproduzir um som para cada bloco nessa zona. Isto pode tornar o
som consideravelmente mais alto do que o normal, por isso considere diminuir o volume se estiver a visar uma zona.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: REPRODUZIR_SOM
      Alvo:
        targeTipo: AUTO
      sValor: minecraft:block.bell.resonate
```

Reproduz o som de ressonância dos sinos do Minecraft na localização do boss

</div>

</details>

</div>

---

### EFEITO_DE_POÇÃO

Aplica um efeito de poção específico ao(s) alvo(s).

| Valores               |                                                           Detalhes                                                           | Obrigatório |
|-----------------------|:----------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `Alvo`                |                             [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                             |      ✅      |
| `tipoDeEfeitoDePoção` | Tipo de efeito, [a lista válida está aqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) |      ✅      |
| `amplificador`        |                                            Nível de efeito de poção (começa em 0)                                            |      ✅      |
| `duração`             |                                                  Duração do efeito (ticks)                                                   |      ✅      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: EFEITO_DE_POÇÃO
      Alvo: 
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      tipoDeEfeitoDePoção: LEVITAÇÃO
      amplificador: 1
      duração: 40
```

<div align="center">

![elitescript_actions_potioneffect.jpg](../../../img/wiki/elitescript_actions_potioneffect.jpg)

</div>

Isto fará com que quaisquer jogadores a 10 blocos do boss levitem durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### EMPURRAR

Empurra um alvo por um vetor definido.

| Valores  |                               Detalhes                               | Obrigatório |
|----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`   | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `vValor` |            Define o vetor da velocidade que será aplicada            |      ✅      |

*Nota: esta ação também aceita vetores relativos. Saiba mais sobre como usar
esses [aqui]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: EMPURRAR
      espera: 3
      Alvo: 
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      vValor: 0,0.3,0
      vezes: 10
      repetirA cada: 10
```

<div align="center">

![elitescript_actions_push.jpg](../../../img/wiki/elitescript_actions_push.jpg)

</div>

Isto empurrará todos os jogadores a 10 blocos do boss para o ar usando uma força de 0.3. Esta ação será repetida 10
vezes a cada 0.5 segundos (10 ticks). Por outras palavras, isso fará com que este efeito dure 5 segundos (10 vezes x 10
ticks = 100 ticks).

Isto fará com que pareça que os jogadores estão a saltar.

</div>

</details>

</div>

#### vetor

Os vetores são definidos por `vValor: x,y,z`. Por exemplo, se quiser que o alvo seja empurrado para cima, pode
fazer `vValor: 0,0.3,0`.

---

### EXECUTAR_COMANDO_COMO_CONSOLA

Executa um comando como consola.

| Valores  |                               Detalhes                               | Obrigatório |
|----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`   | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValor` |                      Comando que será executado                      |      ✅      |

**Nota: existem placeholders disponíveis! Verifique EXECUTAR_COMANDO_COMO_JOGADOR, são os mesmos**

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: EXECUTAR_COMANDO_COMO_CONSOLA
      Alvo:
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      sValor: say Olá $nomeBoss o meu nome é $nomeJogador. Qual é o seu nível? $nomeBoss o meu nível é $nívelBoss.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Faz com que a consola transmita a mensagem "Olá $nomeBoss o meu nome é $nomeJogador. Qual é o seu nível? $nomeBoss o meu
nível é $nívelBoss"

</div>

</details>

</div>

---

### EXECUTAR_COMANDO_COMO_JOGADOR
`
Executa um comando como um `jogador. Requer que o alvo sejam jogadores.

| Valores  |                               Detalhes                               | Obrigatório |
|----------|:--------------------------------------------------------------------:|:-----------:|
| `alvo`   | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValor` |                      Comando que será executado                      |      ✅      |

**Nota: EXECUTAR_COMANDO_COMO_JOGADOR e EXECUTAR_COMANDO_COMO_CONSOLA usam os seguintes placeholders:**

| Placeholder    |          Detalhes           |         Especial          |
|----------------|:---------------------------:|:-------------------------:|
| `$nomeJogador` | Nome de exibição do jogador | O alvo tem de ser jogador |
| `$jogadorX`    |  Localização X do jogador   | O alvo tem de ser jogador |
| `$jogadorY`    |  Localização Y do jogador   | O alvo tem de ser jogador |
| `$jogadorZ`    |  Localização Z do jogador   | O alvo tem de ser jogador |
| `$nomeBoss`    | Nome de exibição do jogador | O alvo tem de ser jogador |
| `$bossX`       |    Localização X do Boss    |             ❌             |
| `$bossY`       |    Localização Y do Boss    |             ❌             |
| `$bossZ`       |    Localização Z do Boss    |             ❌             |
| `$nívelBoss`   |        Nível do boss        |             ❌             |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
``````yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: EXECUTAR_COMANDO_COMO_JOGADOR
      Alvo:
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      sValor: say Olá $nomeBoss o meu nome é $nomeJogador.
```

<div align="center">

![elitescript_actions_commandplayer.jpg](../../../img/wiki/elitescript_actions_commandplayer.jpg)

</div>

Faz com que o jogador execute o comando say com Olá $nomeBoss o meu nome é $nomeJogador., o que significa que eles dizem
apenas "Olá $nomeBoss o meu nome é $nomeJogador."

</div>

</details>

</div>

---

### EXECUTAR_SCRIPT

Isto simplesmente executa os scripts definidos em `scripts`. Qualquer ação pode fazer isto, esta ação existe apenas como
uma ação de conveniência para quando quiser fazer apenas isso.

| Valores                  |                               Detalhes                               | Obrigatório |
|--------------------------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`                   | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `scripts`                |                     Scripts que serão executados                     |      ✅      |
| `executarApenasUmScript` |                  Executa apenas um script da lista.                  |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: EXECUTAR_SCRIPT
      executarApenasUmScript: false
      scripts:
      - Exemplo1
      - Exemplo2
  Exemplo1:
    Ações:
    - ação: DANO
      Alvo:
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      multiplicador: 0.5
  Exemplo2:
    Ações:
    - ação: MENSAGEM
      Alvo:
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      sValor: "&cBoss legal!: &fApanhei-te de volta!"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

Quando um elite é danificado, executa EXECUTAR_SCRIPT, que executa os scripts Exemplo1 e Exemplo2.

O script Exemplo1 irá danificar todos os jogadores a 10 blocos do boss.
<br>O script Exemplo2 enviará uma mensagem a todos os jogadores a 10 blocos do boss com a mensagem "&cBoss legal!:
&fApanhei-te de volta!".

</div>

</details>

</div>

---

### ESCALAR

Permite escalar entidades.

| Valores   |                               Detalhes                               | Obrigatório |
|-----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `escala`  |                      Define o tamanho da escala                      |      ✅      |
| `duração` |          Define quanto tempo o efeito de escala deve durar           |      ❌      |

Ao escalar, 1.0 representa o tamanho padrão. Para tornar a entidade maior, aumente o valor (por exemplo, `1.2`). Para
tornar a entidade menor, diminua o valor (por exemplo, `0.8`).

**Nota: Isto pode ter como alvo jogadores, por isso tenha cuidado com a forma como o usa!**

**Nota: Se já tiver escalado o boss usando a configuração `escala` na configuração do boss, a configuração de duração
irá reverter o boss para o tamanho padrão de `1.0`, independentemente do valor inicial de `escala` na configuração.**

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoEvento
    Ações:
    - ação: ESCALAR
      Alvo:
        tipoDeAlvo: AUTO
      escala: 0.3
      duração: 60
```

Quando o mob é atingido, irá encolher para um tamanho minúsculo. Após 60 ticks (3 segundos), irá reverter para o seu
tamanho padrão (`1.0`).

</div>

</details>

</div>

---

### DEFINIR_DIREÇÃO

Faz com que o boss fique virado numa certa direção. Usado principalmente em conjunto com animações.

| Valores         |                                  Detalhes                                  | Obrigatório |
|-----------------|:--------------------------------------------------------------------------:|:-----------:|
| `vValor`        |               Em que direção o boss deve ficar virado. X,Y,Z               |      ❌      |
| `VetorRelativo` | Usa vetores relativos para fazer com que o boss fique virado para um alvo. |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobEntraEmCombateEvento
    Ações:
    - ação: DEFINIR_DIREÇÃO
      vValor: 1,0,0
```

Fará com que o boss fique virado para Leste.

</div>


<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobEntraEmCombateEvento
    Ações:
    - ação: DEFINIR_DIREÇÃO
      VetorRelativo:
        AlvoFonte:
          tipoDeAlvo: AUTO
        AlvoDestino:
          tipoDeAlvo: JOGADORES_PROXIMOS
          alcance: 20
```

Fará com que o boss fique virado para um jogador dentro de um alcance de 20 blocos.

</div>

</details>

</div>

---

### DEFINIR_IA_MOB

Define se o mob tem IA. No Minecraft, os mobs sem IA não se movem e não atacam. Eles ainda podem ser danificados, mas
danificá-los não resultará em que eles sejam atirados para trás.

| Valores   |                               Detalhes                               | Obrigatório |
|-----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `bValor`  |                       Define se o boss tem IA                        |      ✅      |
| `duração` |              Define o da configuração do valor (ticks)               |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: DEFINIR_IA_MOB
      Alvo:
        tipoDeAlvo: AUTO
      bValor: false
      duração: 40
```

Define o boss para não ter IA durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### DEFINIR_MOB_CONSCIENTE

Define se o mob está consciente. No Minecraft, os mobs que não estão conscientes não se moverão para novas localizações
e não atacarão. Eles ainda podem ser danificados e serão atirados para trás.

Como nota, se o mob já se estivesse a mover para uma localização quando perde a consciência, irá terminar de ir para
essa localização antes de parar totalmente e não se mover mais.

Isto significa que pode usar mobs inconscientes para se moverem para localizações definidas, ao contrário de mobs sem
IA.

| Valores   |                               Detalhes                               | Obrigatório |
|-----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `bValor`  |                      Define se está consciente                       |      ✅      |
| `duração` |              Define o da configuração do valor (ticks)               |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: DEFINIR_MOB_CONSCIENTE
      Alvo:
        tipoDeAlvo: AUTO
      bValor: false
      duração: 40
```

Define o boss para não ter consciência durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### COLOCAR_EM_CHAMAS

Coloca uma entidade em chamas durante a duração.

| Valores   |                               Detalhes                               | Obrigatório |
|-----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `duração` |                     Duração do efeito, em ticks                      |      ✅      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: COLOCAR_EM_CHAMAS
      Alvo:
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      duração: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

Coloca em chamas todos os jogadores a 10 blocos do boss durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

### DEFINIR_TEMPO

Define a hora do jogo no mundo em que o alvo está.

| Valores |                               Detalhes                               | Obrigatório |
|---------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`  | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `tempo` |                            Define o tempo                            |      ✅      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: DEFINIR_TEMPO
      Alvo:
        tipoDeAlvo: AUTO
      tempo: 10000
```

<div align="center">

![elitescript_actions_settime.gif](../../../img/wiki/elitescript_actions_settime.gif)

</div>

Quando atingido, o boss definirá a hora do mundo em que o boss está para ser 10000 ticks.

</div>

</details>

</div>

---

### DEFINIR_CLIMA

Define o clima do mundo em que o alvo está durante uma quantidade definida de tempo.

| Valores   |                               Detalhes                               | Obrigatório |
|-----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `clima`   |                        Define o tipo de clima                        |      ✅      |
| `duração` |                 Define a duração do padrão climático                 |      ✅      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: DEFINIR_CLIMA
      Alvo:
        tipoDeAlvo: AUTO
      clima: PRECIPITAÇÃO
      duração: 120
```

<div align="center">

![elitescript_actions_setweather.gif](../../../img/wiki/elitescript_actions_setweather.gif)

</div>

Define o clima do mundo em que o boss está para chuva/neve durante o próximo minuto.

*Nota: O efeito demorará algum tempo a ser acionado.*

</div>

</details>

</div>

#### clima

Os seguintes são padrões climáticos válidos:

- `LIMPO` - Define o clima como limpo
- `PRECIPITAÇÃO` - Define o clima para chuva/neve, dependendo do bioma, altura da localização e outras considerações do
  Minecraft vanilla.
- `TROVOADA` - Define o clima para trovoada

---

### GERAR_FOGO_DE_ARTIFÍCIO

Gera fogos de artifício.

| Valores                          |                                                                                                                   Detalhes                                                                                                                   | Obrigatório |
|----------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `Alvo`                           |                                                                                     [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                                                                                     |      ✅      |
| `vValor`                         |                                                                                                 Define a velocidade do foguete de artifício                                                                                                  |      ✅      |
| `cintilação`                     |                                                                                          Define se as partículas do fogo de artifício irão cintilar                                                                                          |      ❌      |
| `comRasto`                       |                                                                                         Define se o foguete de fogo de artifício irá deixar um rasto                                                                                         |      ❌      |
| `poder`                          |                                                                                                    Define o poder dos fogos de artifício                                                                                                     |      ❌      |
| `efeitosDeFogoDeArtifício`       |                                                                    Define os efeitos dos fogos de artifício, relacionados com quanto tempo irá demorar antes de explodir                                                                     |      ✅      |
| `tipoDeEfeitoDeFogoDeArtifício`  |                                                       Define a forma do fogo de artifício [desta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)                                                        |      ❌      |
| `tiposDeEfeitoDeFogoDeArtifício` | Define as formas do fogo de artifício [desta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html) . Esta é uma lista de formas - se quiser uma lista de formas, não use `tipoDeEfeitoDeFogoDeArtifício`! [1] |      ❌      |

[1] Ao usar várias formas para os fogos de artifício, cada forma usará as cores da lista de cores na mesma posição.
Verifique o exemplo abaixo.

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  disparoDeFogoDeArtifício1:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: GERAR_FOGO_DE_ARTIFÍCIO
      Alvo:
        tipoDeAlvo: AUTO
        deslocamento: 1,1.5,0
      vValor: .5,-.35,1
      cintilação: false
      comRasto: false
      poder: 2
      efeitosDeFogoDeArtifício:
      - [LARANJA, VERMELHO]
      - [AMARELO, AZUL]
      tiposDeEfeitoDeFogoDeArtifício:
      - BOLA_GRANDE
      - ESTRELA
```

<div align="center">

![elitescript_actions_fireworks.jpg](../../../img/wiki/elitescript_actions_fireworks.jpg)

</div>

Gera fogos de artifício na localização do boss com deslocamento de x= 1, y= 1.5 e z = 0. Dá aos fogos de artifício uma
velocidade de x=.5, y=-.35 e z=1. Os fogos de artifício não irão cintilar nem ter rastos; o poder está definido para 2,
pelo que a explosão dos fogos de artifício será atrasada por essa quantidade.

Finalmente, existem duas listas de listas de cores: a lista 1 é laranja e vermelho e a lista 2 é amarelo e azul. Existem
duas formas para os fogos de artifício: BOLA\_GRANDE e ESTRELA. Isto significa que a BOLA\_GRANDE (elemento 1) usará as
cores laranja e vermelho (lista 1) e a ESTRELA (elemento 2) usará as cores amarelo e azul (lista 2).

</div>

</details>

</div>

#### efeitosDeFogoDeArtifício

Estes são os efeitos que o foguete de fogos de artifício irá mostrar. Pelo menos um efeito é obrigatório. Os seguintes
são efeitos válidos:

- BRANCO, PRATA, CINZENTO, PRETO, VERMELHO, CASTANHO, AMARELO, AZEITONA, LIMA, VERDE, ÁGUA, CERCETA, AZUL, MARINHO,
  FUCSIA, ROXO, LARANJA

---

### ATINGIR_RELÂMPAGO

Atinge com um relâmpago. Este é um efeito visual, se quiser dano, deve adicionar uma ação de dano.

| Valores |                               Detalhes                               | Obrigatório |
|---------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`  | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: ATINGIR_RELÂMPAGO
      Alvo:
        tipoDeAlvo: AUTO
      repetirA cada: 5
      vezes: 5
```

<div align="center">

![elitescript_actions_strike.jpg](../../../img/wiki/elitescript_actions_strike.jpg)

</div>

Atinge o boss com um relâmpago a cada 5 ticks, 5 vezes.

</div>

</details>

</div>

---

### GERAR_BLOCO_A_CAIR

Gera um bloco a cair no alvo. Apenas visual, não coloca o bloco.

| Valores              |                                                                                                   Detalhes                                                                                                   | Obrigatório |
|----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `Alvo`               |                                                                     [Mais informações aqui]($language$/elitemobs/elitescript_targets.md)                                                                     |      ✅      |
| `material`           | Define o [Material](#material) do bloco a cair. [Verifique os tipos válidos aqui](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) e certifique-se de que são um material de bloco válido. |      ✅      |
| `scriptsDeAterragem` |                                                                      Define a lista de scripts que serão executados quando o bloco cair                                                                      |      ✅      |
| `vValor`             |                                                                              Define a velocidade e direção de um bloco a cair.                                                                               |      ✅      |

`scriptsDeAterragem` funciona da mesma forma
que [`EXECUTAR_SCRIPT`]($language$/elitemobs/elitescript_actions.md&section=executar_script), mas pode aceitar o tipo de
alvo especial `LOCALIZAÇÃO_DE_ATERRAGEM`.

A `LOCALIZAÇÃO_DE_ATERRAGEM` é herdada pelos executores de script, permitindo que um script de localização de aterragem
também funcione como um executor de script. Pode adicionar uma espera na ação que chama os scripts, seguida das chamadas
de script subsequentes. A `LOCALIZAÇÃO_DE_ATERRAGEM` será sempre o argumento para o alvo, mesmo quando herdada, pois é
atribuída de uma forma específica.

*Nota: esta ação também aceita vetores relativos. Saiba mais sobre como usar
esses [aqui]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: GERAR_BLOCO_A_CAIR
      Alvo:
        tipoDeAlvo: AUTO
        deslocamento: 3,10,0
      material: PEDRA
      vValor: 0,0,0
      scriptsDeAterragem:
      - ScriptDeAterragemExemplo
  ScriptDeAterragemExemplo:
    Ações:
    - ação: COLOCAR_BLOCO
      Alvo:
        tipoDeAlvo: LOCALIZAÇÃO_DE_ATERRAGEM
      duração: 200
      material: PEDRA
```

<div align="center">

![elitescript_actions_block.gif](../../../img/wiki/elitescript_actions_block.gif)

</div>

Quando o boss é atingido, este script irá gerar um bloco de pedra a cair 10 blocos acima e 3 blocos ao lado da
localização do boss.

Assim que o bloco cair, irá executar o script ScriptDeAterragemExemplo, que irá colocar um bloco de pedra na localização
onde o bloco aterrou.
O bloco ficará lá durante 10 segundos (200 ticks) antes de desaparecer.

</div>

</details>

</div>

---

### GERAR_PARTICULA

Gera partículas no alvo.

**Nota: Se a cobertura não estiver definida, então a cobertura será definida para 0.3 por padrão!**

| Valores      |                               Detalhes                               | Obrigatório |
|--------------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`       | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `partículas` |                Lista as partículas que serão geradas                 |      ✅      |

#### partículas

As partículas têm as suas próprias configurações especiais, que seguem da seguinte forma:

| Valores        |                 Detalhes                  | Padrão  |                                         Especial                                          |
|----------------|:-----------------------------------------:|:-------:|:-----------------------------------------------------------------------------------------:|
| `x`            |        Define o deslocamento de X         |  0.01   |                                            (1)                                            |
| `y`            |        Define o deslocamento de Y         |  0.01   |                                            (1)                                            |
| `z`            |        Define o deslocamento de Z         |  0.01   |                                            (1)                                            |
| `quantidade`   | Define a quantidade de partículas geradas |    1    |                                            (1)                                            |
| `velocidade`   |    Define a velocidade das partículas     |  0.01   |                                             ❌                                             |
| `partícula`    |         Define o tipo de entidade         | `CHAMA` | [Escolha desta lista!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `vermelho`     |          Define o valor vermelho          |  `255`  |                                            (2)                                            |
| `verde`        |           Define o valor verde            |  `255`  |                                            (2)                                            |
| `azul`         |            Define o valor azul            |  `255`  |                                            (2)                                            |
| `paraVermelho` |       Define o valor final vermelho       |  `255`  |                                            (3)                                            |
| `paraVerde`    |        Define o valor final verde         |  `255`  |                                            (3)                                            |
| `paraAzul`     |         Define o valor final azul         |  `255`  |                                            (3)                                            |

_(1) Se a `quantidade` estiver definida para 0, `x`, `y` e `z` definirão a velocidade da partícula._

_(2) Apenas para as `partícula`s `REDSTONE`, `TRANSIÇÃO_DE_COR_DE_POEIRA`, `FEITIÇO_MOB` e `FEITIÇO_MOB_AMBIENTE`_

_(3) Apenas para a `partícula` `TRANSIÇÃO_DE_COR_DE_POEIRA`_

É importante notar que um script GERAR_PARTICULA pode gerar várias partículas. Cada partícula pode então ter os seus
próprios campos de configuração dentro da ação GERAR_PARTICULA. Aqui está um exemplo:

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Zona:
      forma: CILINDRO
      raio: 4
      raioDaFronteira: 3
      altura: 30
      Alvo:
        tipoDeAlvo: ALVO_DIRETO
      rastrear: true
    Ações:
    - ação: GERAR_PARTICULA
      Alvo:
``````yaml
      tipoDeAlvo: ZONA_FRONTEIRA
      partículas:
        - partícula: CHAMA
          velocidade: 0.2
        - partícula: FUMO_NORMAL
          velocidade: 0.1
      quantidade: 1
      repetirA cada: 10
```

<div align="center">

![elitescript_actions_particle.jpg](../../../img/wiki/elitescript_actions_particle.jpg)

</div>

Isto irá gerar um cilindro feito de partículas de chama e fumo em volta do jogador que danificou o boss.

</div>

</details>

</div>

#### Mover uma partícula:

É possível definir uma velocidade específica para uma partícula e funciona da mesma forma que a API Spigot. Isto permite
que os scripters definam uma partícula para ir numa direção específica a uma velocidade específica. Não é possível fazer
com que as partículas mudem de direção a meio do caminho. Este efeito é usado no encantamento do lança-chamas e no poder
do boss.

Para mover uma partícula, defina `quantidade: 0`. Isto sinalizará ao Minecraft que os valores `x`, `y` e `z` são, na
verdade, um vetor. Este vetor define a direção para a qual a sua partícula irá.

Digamos que quer que uma partícula `CHAMA` vá para cima. Para fazer isto, quer um valor `y` positivo e nada mais.
Finalmente, irá querer definir a velocidade para o que quer que a velocidade seja. Aqui está um exemplo completo:

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobEntraEmCombateEvento
    Zona:
      forma: CILINDRO
      raio: 4
      raioDaFronteira: 3
      altura: 30
      Alvo:
        tipoDeAlvo: ALVO_DIRETO
      rastrear: true  
    Ações:
    - ação: GERAR_PARTICULA
      Alvo:
        tipoDeAlvo: ZONA_FRONTEIRA
      partículas:
        - partícula: CHAMA
          quantidade: 0
          x: 0
          y: 1
          z: 0
          velocidade: 0.2
        - partícula: FUMO_NORMAL
          velocidade: 0.1
          quantidade: 0
          x: 0.5
          y: 1
          z: 0.5
      quantidade: 3  
      repetirA cada: 10
```

Isto irá gerar uma partícula de chama na localização do boss que irá para cima.

</div>

</details>

</div>

---

### INVOCAR_REFORÇO

Invoca reforços de Bosses Personalizados EliteMobs.

| Valores   |                               Detalhes                               | Obrigatório |
|-----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValor`  |      Define o nome de ficheiro do reforço do Boss Personalizado      |      ✅      |
| `duração` |                 Define a duração do reforço (ticks)                  |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobEntraEmCombateEvento
    Ações:
    - ação: INVOCAR_REFORÇO
      Alvo:
        tipoDeAlvo: ALVO_DIRETO
      sValor: o_seu_ficheiro_de_boss.yml
```

Gera o reforço com o nome de ficheiro "o_seu_ficheiro_de_boss.yml" na localização do boss.

</div>

</details>

</div>

---

### INVOCAR_ENTIDADE

MAGMA POR FAVOR PREENCHA ESTA SEÇÃO COM A INFORMAÇÃO CORRETA,

| Valores  |                               Detalhes                               | Obrigatório |
|----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`   | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValor` |                               Define a                               |      ✅      |

*Nota: esta ação também aceita vetores relativos. Saiba mais sobre como usar
esses [aqui]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
      - EliteMobEntraEmCombateEvento
    Ações:
      - ação: INVOCAR_ENTIDADE
        Alvo:
          tipoDeAlvo: ALVO_DIRETO
```

Define o boss para .

</div>

</details>

</div>

---

### TAG

Adiciona tags aos bosses ou jogadores. As tags são apenas Strings, ou palavras, que os scripters podem definir. Estas
são apenas usadas para executar verificações de condição e não têm efeito direto no jogo fora daquilo para o qual são
usadas nos scripts.

| Valores   |                               Detalhes                               | Obrigatório |
|-----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `tags`    |                            Define as tags                            |      ✅      |
| `duração` |                  Define a duração das tags (ticks)                   |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobGeradoEvento
    Ações:
    - ação: TAG
      Alvo:
        tipoDeAlvo: AUTO
      tags:
      - fogosDeArtifício
    - ação: GERAR_FOGO_DE_ARTIFÍCIO
      Alvo:
        tipoDeAlvo: AUTO
      espera: 20  
      deslocamento: 0,3,0
      vValor: 0,.1,0
      cintilação: true
      comRasto: true
      poder: 1
      efeitosDeFogoDeArtifício:
      - [LARANJA, VERMELHO]
      repetirA cada: 20
      Condições:
        temTags:
        - fogosDeArtifício
```

Marca o boss com a string "muito_suspeito", que pode ser verificada posteriormente através de condições de script.

**Importante:** Só é possível marcar jogadores e mobs de elite.

</div>

</details>

</div>

---

### TELETRANSPORTAR

Teletransporta o(s) alvo(s) para a localização definida.

| Valores       |                                                            Detalhes                                                             | Obrigatório |
|---------------|:-------------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `Alvo`        |    Define _quem_ será teletransportado. [Informações gerais sobre alvos aqui!]($language$/elitemobs/elitescript_targets.md)     |      ✅      |
| `AlvoFinal`   | Define _para onde_ serão teletransportados. [Informações gerais sobre alvos aqui!]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `localização` |                                                  Localização de teletransporte                                                  |      ✅      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: TELETRANSPORTAR
      Alvo: 
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      AlvoFinal:
        tipoDeAlvo: AUTO_GERAÇÃO
```

<div align="center">

![elitescript_actions_teleport.gif](../../../img/wiki/elitescript_actions_teleport.gif)

</div>

Isto teletransportaria todos os jogadores que estão a 10 blocos do boss para a localização de geração do boss.

</div>

</details>

</div>

#### localização

Define a localização para onde o jogador será teletransportado. O formato é o padrão
EliteMobs `nome_do_mundo,x,y,z,pitch,yaw`.

Exemplo

```yaml
localização: mundo,0,64,0,0,0
```

Isto tem alguns valores especiais:

- Se o nome do mundo estiver definido para `mesmo_que_o_boss`, irá substituir o nome do mundo pelo nome do mundo em que
  o boss está atualmente:

```yaml
localização: mesmo_que_o_boss,0,64,0,0,0
```

- Se existirem apenas três valores a corresponder a x, y e z, o teletransporte será feito para uma localização relativa
  à localização do boss. Se o boss for um boss regional, a localização será relativa ao ponto de geração do boss.

---

### MENSAGEM_TÍTULO

Define a mensagem da barra de ação para os alvos.

| Valores                   |                               Detalhes                               | Obrigatório |                      Especial                       | Padrão |
|---------------------------|:--------------------------------------------------------------------:|:-----------:|:---------------------------------------------------:|:------:|
| `Alvo`                    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |                          ❌                          |   ❌    |
| `título`                  |                     Define a mensagem de título                      |      ✅      | Pode usar [Códigos de Cor](#códigos_de_cor) com `&` |   ❌    |
| `subtítulo`               |                    Define a mensagem de subtítulo                    |      ✅      | Pode usar [Códigos de Cor](#códigos_de_cor) com `&` |   ❌    |
| `duração`                 |                 Define a duração da mensagem (ticks)                 |      ✅      |                          ❌                          |  `0`   |
| `aparecerGradualmente`    |            Define o tempo de aparecimento gradual (ticks)            |      ❌      |                          ❌                          |  `0`   |
| `desaparecerGradualmente` |          Define o tempo de desaparecimento gradual (ticks)           |      ❌      |                          ❌                          |  `0`   |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: MENSAGEM_TÍTULO
      Alvo: 
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      título: "&2Olá Mundo!"
      subtítulo: "&2Eu sou um subtítulo!"
      duração: 120
      aparecerGradualmente: 20
      desaparecerGradualmente: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

Definirá a mensagem do título para mostrar o título "&2Olá Mundo!" com o subtítulo "&2Eu sou um subtítulo!" a todos os
jogadores que estão a 10 blocos do boss.

A mensagem permanecerá no ecrã durante 8 segundos (120 + 20 + 20 = 160 ticks), incluindo a animação de aparecimento e
desaparecimento gradual.

</div>

</details>

</div>

---

### REMOVER_TAG

Remove as tags do boss. Verifique `TAG` para ver como as tags funcionam.

| Valores   |                               Detalhes                               | Obrigatório |
|-----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `tags`    |                            Define as tags                            |      ✅      |
| `duração` |             Define a duração da remoção das tags (ticks)             |      ❌      |

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobGeradoEvento
    Ações:
    - ação: TAG
      Alvo:
        tipoDeAlvo: AUTO
      tags:
      - fogosDeArtifício
    - ação: GERAR_FOGO_DE_ARTIFÍCIO
      Alvo:
        tipoDeAlvo: AUTO
      espera: 20  
      deslocamento: 0,3,0
      vValor: 0,.1,0
      cintilação: true
      comRasto: true
      poder: 1
      efeitosDeFogoDeArtifício:
      - [LARANJA, VERMELHO]
      repetirA cada: 20
      Condições:
        temTags:
        - fogosDeArtifício  
  Exemplo2:
    Eventos:
    - EliteMobEntraEmCombateEvento
    Ações:
    - ação: REMOVER_TAG
      Alvo:
        tipoDeAlvo: AUTO
      tags:
      - fogosDeArtifício
```

Remove a tag "muito_suspeito" do boss, que pode ser verificada posteriormente através de condições de script.

</div>

</details>

</div>

---

### CONGELAMENTO_VISUAL

Dá o efeito visual congelado ao jogador e causa o dano associado. Isto deve ser combinado com um script de repetição se
não quiser que o efeito desapareça imediatamente.

| Valores   |                               Detalhes                               | Obrigatório |
|-----------|:--------------------------------------------------------------------:|:-----------:|
| `Alvo`    | [Mais informações aqui]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `duração` |                     Duração do efeito, em ticks                      |      ✅      |

<div align="center">
<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemplo:
    Eventos:
    - EliteMobDanificadoPorJogadorEvento
    Ações:
    - ação: CONGELAMENTO_VISUAL
      Alvo:
        tipoDeAlvo: JOGADORES_PROXIMOS
        alcance: 10
      duração: 20
      repetirA cada: 20
      vezes: 3
```

<div align="center">

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) CONGELAMENTO VISUAL AINDA NÃO
FUNCIONA ATUALMENTE, POR ISSO NÃO FOI POSSÍVEL TIRAR UMA CAPTURA DE ECRÃ

</div>

Dá a todos os jogadores a 10 blocos do boss o visual de congelamento durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

# Múltiplas ações

Por vezes, pode querer fazer várias ações ao mesmo tempo quando um evento acontece, como enviar várias mensagens ou
fazer ações diferentes sequencialmente. Isto é facilmente feito! Vamos adicionar uma ação de efeito de poção ao nosso
exemplo:

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  MensagemJogadores:
    Eventos:
    - EliteMobDanificadoEventoPorJogadorEvento
    Ações:
    - ação: MENSAGEM
      Alvo:
        tipoDeAlvo: TODOS_OS_JOGADORES
      mensagem: Estou a enviar uma mensagem para todos os jogadores online!
    - ação: MENSAGEM
      Alvo:
        tipoDeAlvo: ALVO_DIRETO
      mensagem: Estou a enviar uma mensagem para o jogador que atingiu o boss!
```

</div>

</details>

</div>
