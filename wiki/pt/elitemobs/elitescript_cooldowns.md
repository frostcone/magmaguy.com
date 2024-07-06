# Tempos de Espera do Script Elite

Os tempos de espera definem a quantidade de tempo que deve passar antes que o chefe seja elegível para executar o mesmo script ou qualquer outro poder\*.

- observação: alguns poderes não são afetados atualmente por tempos de espera.

Os tempos de espera têm dois valores:

## local

`local` define o tempo, em ticks, antes que o mesmo script possa acontecer novamente. Exemplo:

Exemplo

```yaml
local: 60
```

Define o poder para ser capaz de ser executado novamente por 3 segundos.

## global

`global` define o tempo, em ticks, antes que qualquer outro script ou poder possa acontecer novamente\[1\]. Exemplo:

Exemplo

```yaml
global: 20
```

Define todos os outros poderes para não serem capazes de iniciar por 1 segundo.

[1] alguns dos poderes mais antigos não são afetados atualmente por isso, está em andamento.

**Observação: ao tornar o tempo de espera local mais longo e o tempo de espera global mais curto, você pode garantir que o chefe alterna entre seus poderes disponíveis!** Nunca torne o tempo de espera global mais longo, e eu recomendo deixar pelo menos um segundo de tempo de espera local para dar chance a outros poderes de serem acionados.

Além disso, se seu poder tiver uma duração específica durante a qual está ativo, você deve usar esse sistema para impedir que outros poderes sejam executados simultaneamente e potencialmente arruinem seu poder.

### Executar Scripts Uma Vez com Tempos de Espera
Para garantir que os scripts sejam acionados apenas uma vez enquanto ainda usa um [Evento]($language$/elitemobs/elitescript_events.md) que pode ocorrer várias vezes durante uma luta, defina o tempo de espera local para um número alto, como `99999`. Este exemplo demonstra o conceito:

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
Neste cenário, o `EliteMobDamagedByPlayerEvent` aciona a ação `SET_ON_FIRE`. Sem tempos de espera, a ação seria ativada toda vez que o jogador atingisse o mob. 

No entanto, com um tempo de espera local definido como `99999`, a ação só será acionada a cada `99999` ticks (83 minutos).

</div>

</details>

</div>



