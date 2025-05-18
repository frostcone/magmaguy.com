Okay, here is the translation of the text to Portuguese (Portugal), retaining the markdown formatting:

# Cooldowns de Script de Elite

Cooldowns definem a quantidade de tempo que deve passar antes que o boss seja elegível para fazer o mesmo script ou qualquer outro poder\*.

- nota: alguns poderes não são atualmente afetados por cooldowns.

Cooldowns têm dois valores:

## local

`local` define o tempo, em ticks, antes que o mesmo script possa acontecer novamente. Exemplo:

Exemplo

```yaml
local: 60
```

Define o poder para poder executar novamente após 3 segundos.

## global

`global` define o tempo, em ticks, antes que qualquer outro script ou poder possa acontecer novamente\[1\]. Exemplo:

Exemplo

```yaml
global: 20
```

Define que todos os outros poderes não podem começar durante 1 segundo.

\[1] alguns dos poderes mais antigos não são atualmente afetados por isto, é um trabalho em progresso.

**Nota: ao tornar o cooldown local mais longo e o cooldown global mais curto, pode garantir que o boss alternará entre os seus poderes disponíveis!** Nunca torne o cooldown global mais longo, e recomendo deixar pelo menos um segundo de cooldown local para dar a outros poderes a chance de ativar.

Adicionalmente, se o seu poder tiver uma duração específica durante a qual está ativo, deve usar este sistema para evitar que outros poderes sejam executados simultaneamente e potencialmente arruínem o seu poder.

### Executar Scripts Apenas Uma Vez com Cooldowns
Para garantir que os scripts ativam apenas uma vez enquanto ainda usam um [Evento]($language$/elitemobs/elitescript_events.md) que pode ocorrer várias vezes durante uma luta, defina o cooldown local para um número alto, como `99999`. Este exemplo demonstra o conceito:

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
Neste cenário, o `EliteMobDamagedByPlayerEvent` ativa a ação `SET_ON_FIRE`. Sem cooldowns, a ação ativaria sempre que o jogador atingisse o mob.

No entanto, com um cooldown local definido para `99999`, a ação apenas ativará a cada `99999` ticks (83 minutos).

</div>

</details>

</div>