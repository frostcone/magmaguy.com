[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Sistema de Scripting EliteMobs

A página seguinte cobre como Criar Scripts Elite!

Esta é uma funcionalidade avançada e requer algum conhecimento aprofundado do EliteMobs.

**Nota: Scripts Elite podem ser adicionados como ficheiros de poder ou a ficheiros de boss personalizados!** Se usados como ficheiros de poder, pode adicioná-los como poderes normais a bosses usando a configuração [powers](pt/elitemobs/creating_bosses.md&section=powers) de Bosses Personalizados, como de costume.

## Adicionar um EliteScript

Para começar a adicionar um EliteScript a um boss, adicione a seguinte entrada ao ficheiro do boss:

```yml
eliteScript:
```

**Nota: O seguinte é extremamente sensível a maiúsculas/minúsculas e espaços! Certifique-se de que os seus espaços, quebras de linha e formatação geral correspondem aos exemplos!**

Agora que declarou o início do seu script, pode adicionar o seu script específico. Para este exemplo, vamos criar um script chamado `Example`:

```yml
eliteScript:
  Example:
```

EliteScripts têm 5 secções diferentes: `Events`, `Conditions`, `Zones`, `Actions` e `Cooldowns`. Apenas `Actions` é obrigatória.

Vamos ver um exemplo simples:

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
```

Este script faz com que um elite seja empurrado para cima quando atingido por um jogador, e não o fará novamente por 3 segundos (e impedirá que outros poderes sejam acionados por 1 segundo devido às configurações que definimos na secção Cooldowns).

Agora que conhece o formato geral de como os scripts são estruturados, é hora de aprender o que pode fazer com cada secção!

----

# Eventos

[Eventos](pt/elitemobs/elitescript_events.md)

Clique no link acima para aprender como usar eventos!

# Alvos

[Alvos](pt/elitemobs/elitescript_targets.md)

Clique no link acima para aprender como usar alvos!

# Ações

[Ações](pt/elitemobs/elitescript_actions.md)

Clique no link acima para aprender como usar ações!

# Zonas

[Zonas](pt/elitemobs/elitescript_zones.md)

Clique no link acima para aprender como usar zonas!

# Condições

[Condições](pt/elitemobs/elitescript_conditions.md)

Clique no link acima para aprender como usar condições!

# Tempos de Recarga

[Tempos de Recarga](pt/elitemobs/elitescript_cooldowns.md)

Clique no link acima para aprender como usar tempos de recarga!

----

## Adicionar múltiplos EliteScripts

Pode ter múltiplas ações num evento, mas e se quiser múltiplos scripts no mesmo boss? Isto é tão simples quanto criar uma nova entrada de script! Vamos expandir o exemplo anterior e adicionar outro script a ele:

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
  Example2:
    Events:
    - PlayerDamagedByEliteMobEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: DIRECT_TARGET
    Cooldowns:
      local: 200
      global: 60
```
Neste exemplo, adicionámos um segundo script chamado Example2. Example2 irá incendiar o jogador que for danificado pelo boss, isto deve-se ao targetType estar definido como [ALVO_DIRETO](pt/elitemobs/elitescript_targets.md&section=target-types). </br>O tempo de recarga para este script está definido para 200 ticks, o que significa que o boss só poderá incendiar jogadores a cada 10 segundos.

## Criar poderes autónomos

Poderes autónomos são quase inteiramente compostos pelo Elite Script. Existem apenas dois campos que são opcionais. Não se esqueça que para os poderes autónomos funcionarem, devem ser colocados na pasta `~plugins/EliteMobs/powers`. </br>Exemplo de poder autónomo:

```yml
isEnabled: true
powerType: UNIQUE
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

### isEnabled

Tal como em qualquer outro lugar no plugin, define se o poder está ativado.

### powerType

Power type define como o poder é atribuído. Os valores são:

- `UNIQUE`: O poder só será aplicado a bosses personalizados que tenham o poder definido na secção powers.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: QUALQUER elite poderá obter estes poderes, e eles contarão para um subconjunto específico de poderes.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Apenas elites do tipo de entidade adequado poderão aparecer naturalmente com estes poderes, e eles contarão para poderes maiores.