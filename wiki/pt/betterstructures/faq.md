Aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# Como Usar Comandos
- Vá para a página de comandos para ajuda: [Página de Comandos]($language$/betterstructures/commands.md)

# Verificar Onde as Estruturas Aparecem
- Se for um administrador de servidor e não desativou os avisos, será notificado no chat quando uma estrutura aparecer.
- Clique na mensagem do chat para se teletransportar para a estrutura (não para a edição Bedrock).
- Ative/desative os avisos com `/betterstructures warn`.

# Porquê as Estruturas Podem Não Aparecer
- Geralmente, as estruturas não aparecem em áreas já exploradas. Visite novas áreas para encontrar estruturas.

<details>
<summary>Mais Detalhes</summary>

As estruturas não aparecerão em áreas já exploradas para evitar enchê-las demasiado e danificar construções de jogadores. O BetterStructures sabe se uma área foi explorada antes de ser instalado e não colocará estruturas lá. Se o seu mundo foi totalmente explorado antes de instalar o BetterStructures, precisa de o regenerar ou criar um novo mundo.

</details>

# EliteMobs e BetterStructures

## O Que o EliteMobs Oferece
- Saiba mais sobre o EliteMobs: [Wiki do EliteMobs](#)
- Adiciona bosses às estruturas.

## Obter Conteúdo EliteMobs Pré-Fabricado
- Disponível em [magmaguy.itch.io](https://magmaguy.itch.io/) e [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Usar o EliteMobs Sem Outras Funcionalidades
- Pode desativar outras funcionalidades do EliteMobs. Para desativar, altere as definições em:
    - events.yml: `timedEventsEnabled: false` e `actionEventsEnabled: false` desativa todos os eventos
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` desativa spawns naturais de elites

## Adicionar um boss do EliteMobs à sua estrutura

- Adicione `[elitemobs]` à primeira linha do seu sinal
- Adicione o nome do ficheiro do boss na segunda / terceira / quarta linhas do sinal, como `test_boss.yml`
- Mais informações [aqui]($language$/betterstructures/creating_structures.md)

# BetterStructures com outros plugins

## MMOItems
- Adicione MMOItems com `mmoitems=<TYPE>@<ITEM-ID>` no ficheiro de configuração de tesouros.

## Itens Personalizados de Outros Plugins
- Use o comando lootify para adicionar quaisquer itens a baús. Veja a [Página de Comandos]($language$/betterstructures/commands.md).

# Criar As Suas Próprias Estruturas
- Saiba como: [Guia de Criação de Estruturas]($language$/betterstructures/creating_structures.md)

# Impacto no Desempenho e Minimização
- Gerar muitas estruturas pode abrandar o seu servidor.
- Use o [Chunky](https://www.spigotmc.org/resources/chunky.81534/) para pré-gerar o seu mundo e evitar problemas de desempenho.
- Se não estiver a usar o EliteMobs, pode remover o BetterStructures após a geração do mundo.
- Com o EliteMobs, mantenha o BetterStructures para a gestão de áreas protegidas, com impacto mínimo.