# Tempos de Espera de Scripts de Elite

Os tempos de espera definem a quantidade de tempo que deve passar antes que o boss possa executar novamente o mesmo
script ou qualquer outro poder\*.

- Nota: alguns poderes não são atualmente afetados por tempos de espera.

Os tempos de espera têm dois valores:

## local

`local` define o tempo, em *ticks*, antes que o mesmo script possa acontecer novamente. Exemplo:

Exemplo

```yaml
local: 60
```

Define o poder para poder ser executado novamente após 3 segundos.

## global

`global` define o tempo, em *ticks*, antes que qualquer outro script ou poder possa acontecer novamente\[1\]. Exemplo:

Exemplo

```yaml
global: 20
```

Impede que todos os outros poderes possam começar durante 1 segundo.

[1] alguns dos poderes mais antigos não são atualmente afetados por isto, é um trabalho em progresso.

**Nota: ao tornar o tempo de espera local mais longo e o tempo de espera global mais curto, pode garantir que o boss
alternará entre os seus poderes disponíveis!** Nunca torne o tempo de espera global mais longo e recomendo deixar pelo
menos um segundo de tempo de espera local para dar aos outros poderes a oportunidade de serem acionados.

Além disso, se o seu poder tiver uma duração específica durante a qual está ativo, deve usar este sistema para impedir
que outros poderes sejam executados simultaneamente e potencialmente arruínem o seu poder.

### Executar Scripts Uma Vez com Tempos de Espera

Para garantir que os scripts são acionados apenas uma vez, mesmo usando
um [Evento]($language$/elitemobs/elitescript_events.md) que pode ocorrer várias vezes durante uma luta, defina o tempo
de espera local para um número alto, como `99999`. Este exemplo demonstra o conceito:

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

Neste cenário, o `EliteMobDamagedByPlayerEvent` aciona a ação `SET_ON_FIRE`. Sem tempos de espera, a ação seria ativada
sempre que o jogador atingisse o mob.

No entanto, com um tempo de espera local definido como `99999`, a ação só será acionada a cada `99999` *ticks* (83
minutos).

</div>

</details>

</div>
