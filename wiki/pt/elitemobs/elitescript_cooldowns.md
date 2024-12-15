# Cooldowns de Scripts de Elite

Cooldowns definem a quantidade de tempo que deve passar antes que o boss esteja elegível para executar o mesmo script ou qualquer outro poder\*.

- Nota: alguns poderes não são atualmente afetados por cooldowns.

Cooldowns têm dois valores:

## local

`local` define o tempo, em *ticks*, antes que o mesmo script possa acontecer novamente. Exemplo:

Exemplo

```yaml
local: 60
```

Define o poder para ser capaz de ser executado novamente em 3 segundos.

## global

`global` define o tempo, em *ticks*, antes que qualquer outro script ou poder possa acontecer novamente\[1\]. Exemplo:

Exemplo

```yaml
global: 20
```

Define todos os outros poderes para não serem capazes de começar por 1 segundo.

[1] alguns dos poderes mais antigos não são atualmente afetados por isto, é um trabalho em progresso.

**Nota: ao tornar o cooldown local mais longo e o cooldown global mais curto, pode garantir que o boss irá alternar entre os seus poderes disponíveis!** Nunca torne o cooldown global mais longo, e recomendo deixar pelo menos um segundo de cooldown local para dar a outros poderes a chance de serem ativados.

Além disso, se o seu poder tem uma duração específica durante a qual está ativo, deve usar este sistema para impedir que outros poderes sejam executados simultaneamente e potencialmente arruínem o seu poder.

### Executar Scripts Uma Vez com Cooldowns
Para garantir que os scripts são ativados apenas uma vez, mesmo utilizando um [Evento]($language$/elitemobs/elitescript_events.md) que possa ocorrer várias vezes durante uma luta, defina o cooldown local para um número elevado, como `99999`. Este exemplo demonstra o conceito:

<div align="center">

<details> 

<summary><b>Exemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  SetMeOnFireOnlyOnce:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      duration: 60
      Target:
      targetType: DIRECT_TARGET
    Cooldowns:
    local: 99999
    global: 50
```
Neste cenário, o `EliteMobDamagedByPlayerEvent` aciona a ação `SET_ON_FIRE`. Sem cooldowns, a ação seria ativada sempre que o jogador atingisse o mob.

No entanto, com um cooldown local definido para `99999`, a ação será ativada apenas a cada `99999` *ticks* (83 minutos).

</div>

</details>

</div>
