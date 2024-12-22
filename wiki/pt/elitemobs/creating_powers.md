[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Sistema de Scripting do EliteMobs

A página seguinte aborda como Criar Scripts Elite!

Esta é uma funcionalidade avançada e requer algum conhecimento aprofundado do EliteMobs.

**Nota: Scripts Elite podem ser adicionados como ficheiros de poderes ou a ficheiros de boss personalizados!** Se usados
como ficheiros de poderes, pode adicioná-los como poderes normais aos bosses usando a
configuração [powers]($language$/elitemobs/creating_bosses.md&section=powers) de Bosses Personalizados, como
habitualmente.

## Adicionar um EliteScript

Para começar a adicionar um EliteScript a um boss, adicione a seguinte entrada ao ficheiro do boss:

```yml
eliteScript:
```

**Nota: O seguinte é extremamente sensível a maiúsculas/minúsculas e espaços! Certifique-se de que os seus espaços, quebras de linha e formatação geral correspondem aos exemplos!**

Agora que tem o seu início de script declarado, pode adicionar o seu script específico. Para este exemplo, vamos criar um script chamado `Exemplo`:

```yml
eliteScript:
  Exemplo:
```

Os EliteScripts têm 5 secções diferentes: `Events`, `Conditions`, `Zones`, `Actions` e `Cooldowns`. Apenas as `Actions`
são obrigatórias.

Vamos dar uma olhada a um exemplo simples:

```yml
eliteScript:
  Exemplo:
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

Este script faz com que um elite seja empurrado para cima quando atingido por um jogador, e não o voltará a fazer
durante 3 segundos (e irá impedir que outros poderes sejam acionados durante 1 segundo devido às configurações que
definimos na secção Cooldowns).

Agora que já conhece o formato geral de como os scripts estão estruturados, é altura de aprender o que pode fazer com
cada secção!

----

# Eventos

[Eventos]($language$/elitemobs/elitescript_events.md)

Clique no link acima para aprender como usar eventos!

# Alvos

[Alvos]($language$/elitemobs/elitescript_targets.md)

Clique no link acima para aprender como usar alvos!

# Ações

[Ações]($language$/elitemobs/elitescript_actions.md)

Clique no link acima para aprender como usar ações!

# Zonas

[Zonas]($language$/elitemobs/elitescript_zones.md)

Clique no link acima para aprender como usar zonas!

# Condições

[Condições]($language$/elitemobs/elitescript_conditions.md)

Clique no link acima para aprender como usar condições!

# Cooldowns

[Cooldowns]($language$/elitemobs/elitescript_cooldowns.md)

Clique no link acima para aprender como usar cooldowns!

----

## Adicionar vários EliteScripts

Pode ter várias ações num evento, mas e se quiser vários scripts no mesmo boss? É tão simples como criar uma nova
entrada de script! Vamos expandir o exemplo anterior e adicionar outro script a ele:

```yml
eliteScript:
  Exemplo:
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
  Exemplo2:
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

Neste exemplo, adicionámos um segundo script chamado Exemplo2. O Exemplo2 irá incendiar o jogador que for atingido pelo
boss, isto deve-se ao facto de o targetType estar definido
como [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br> O cooldown para este
script está definido para 200 ticks, o que significa que o boss só poderá incendiar jogadores a cada 10 segundos.

## Criar poderes autónomos

Os poderes autónomos são quase inteiramente compostos pelo Elite Script. Existem apenas dois campos que são opcionais.
Não se esqueça que para os poderes autónomos funcionarem, devem ser colocados na
pasta `~plugins/EliteMobs/powers`. </br> Exemplo de poder autónomo:

```yml
isEnabled: true
powerType: UNIQUE
eliteScript:
  Exemplo:
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

Tal como em todo o plugin, define se o poder está ativado.

### powerType

O tipo de poder define como o poder é atribuído. Os valores são:

- `UNIQUE`: O poder só será aplicado a bosses personalizados que tenham o poder definido na secção de poderes.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: QUALQUER elite poderá obter estes poderes, e eles contarão para um subconjunto específico de poderes.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Apenas elites do tipo de entidade
  adequado poderão surgir naturalmente com estes poderes, e eles contarão para os poderes principais.
