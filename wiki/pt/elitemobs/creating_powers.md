[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Sistema de Scripting do EliteMobs

A página a seguir aborda como criar Scripts Elite!

Este é um recurso avançado e requer algum conhecimento profundo do EliteMobs.

**Observação: Scripts Elite podem ser adicionados como arquivos de poder ou a arquivos de chefe personalizados!** Se usados como arquivos de poder, você pode adicioná-los como poderes normais aos chefes usando a configuração [powers]($language$/elitemobs/creating_bosses.md&section=powers) de Chefes Personalizados, como de costume.

## Adicionando um Script Elite

Para começar a adicionar um Script Elite a um chefe, adicione a seguinte entrada ao arquivo do chefe:

```yml
eliteScript:
```

**Observação: O seguinte é extremamente sensível a maiúsculas e minúsculas e a espaços! Certifique-se de que seus espaços, quebras de linha e formatação geral correspondam aos exemplos!**

Agora que você declarou seu início de script, você pode adicionar seu script específico. Para este exemplo, vamos criar um script chamado `Example`:

```yml
eliteScript:
  Example:
```

Os Scripts Elite têm 5 seções diferentes: `Events`, `Conditions`, `Zones`, `Actions` e `Cooldowns`. Apenas `Actions` são obrigatórios.

Vamos dar uma olhada em um exemplo simples:

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

Este script faz com que uma elite seja empurrada para cima quando atingida por um jogador e não o fará novamente por 3 segundos (e impedirá que outros poderes sejam acionados por 1 segundo devido às configurações que definimos na seção Cooldowns).

Agora que você conhece o formato geral de como os scripts são estruturados, é hora de aprender o que você pode fazer com cada seção!

----

# Events

[Events]($language$/elitemobs/elitescript_events.md)

Clique no link acima para aprender como usar eventos!

# Targets

[Targets]($language$/elitemobs/elitescript_targets.md)

Clique no link acima para aprender como usar alvos!

# Actions

[Actions]($language$/elitemobs/elitescript_actions.md)

Clique no link acima para aprender como usar ações!

# Zones

[Zones]($language$/elitemobs/elitescript_zones.md)

Clique no link acima para aprender como usar zonas!

# Conditions

[Conditions]($language$/elitemobs/elitescript_conditions.md)

Clique no link acima para aprender como usar condições!

# Cooldowns

[Cooldowns]($language$/elitemobs/elitescript_cooldowns.md)

Clique no link acima para aprender como usar tempos de espera!

----

## Adicionando vários Scripts Elite

Você pode ter várias ações em um evento, mas e se você quiser vários scripts no mesmo chefe? Isso é tão simples quanto criar uma nova entrada de script! Vamos expandir o exemplo anterior e adicionar outro script a ele:

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
Neste exemplo, adicionamos um segundo script chamado Example2. O Example2 incendiará o jogador que for danificado pelo chefe, isso ocorre porque o targetType está definido como [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br>O tempo de espera para este script está definido como 200 ticks, o que significa que o chefe só poderá incendiar jogadores a cada 10 segundos.

## Criando poderes independentes

Os poderes independentes são quase inteiramente compostos pelo Script Elite. Existem apenas dois campos que são opcionais. Não se esqueça de que para os poderes independentes funcionarem, eles devem ser colocados na pasta `~plugins/EliteMobs/powers`. </br>Exemplo de poder independente:

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

Igual a qualquer outro lugar no plugin, define se o poder está habilitado.

### powerType

O tipo de poder define como o poder é atribuído. Os valores são:

- `UNIQUE`: O poder só será aplicado a chefes personalizados que tiverem o poder definido na seção de poderes.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: QUALQUER elite poderá obter esses poderes, e eles contarão para um subconjunto específico de poderes.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Somente elites do tipo de entidade adequado serão capazes de gerar naturalmente com esses poderes, e eles contarão para os poderes principais.

