# Como Usar Comandos
- Vá para a página de comandos para obter ajuda: [Página de Comandos]($language$/betterstructures/commands.md)

# Verificar Onde as Estruturas Aparecem
- Se for um administrador de servidor e não tiver desativado os avisos, será notificado no chat quando uma estrutura aparecer.
- Clique na mensagem do chat para teletransportar para a estrutura (não para a edição Bedrock).
- Ative/desative os avisos com `/betterstructures warn`.

# Por Que as Estruturas Podem Não Aparecer
- Normalmente, as estruturas não aparecem em áreas já exploradas. Visite novas áreas para encontrar estruturas.

<details> 
<summary>Mais Detalhes</summary>

As estruturas não aparecerão em áreas já exploradas para evitar sobrecarregá-las demasiado e danificar as construções dos jogadores. O BetterStructures sabe se uma área foi explorada antes de ser instalado e não colocará estruturas lá. Se o seu mundo foi totalmente explorado antes de instalar o BetterStructures, precisa de o regenerar ou criar um novo mundo.

</details>

# EliteMobs e BetterStructures

## O Que o EliteMobs Oferece
- Saiba mais sobre o EliteMobs: [Wiki do EliteMobs](#)
- Adiciona chefes às estruturas.

## Obter Conteúdo EliteMobs Pré-Feito
- Disponível em [magmaguy.itch.io](https://magmaguy.itch.io/) e [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Usar EliteMobs Sem Outras Funcionalidades
- Pode desativar outras funcionalidades do EliteMobs. Para desativar, altere as definições em:
    - events.yml: `timedEventsEnabled: false` e `actionEventsEnabled: false` desativa todos os eventos
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` desativa o aparecimento natural de elite

## Adicionar um chefe EliteMobs à sua estrutura

- Adicione `[elitemobs]` à primeira linha da sua placa
- Adicione o nome do ficheiro do chefe na segunda/terceira/quarta linha da placa como `test_boss.yml`
- Mais informações [aqui]($language$/betterstructures/creating_structures.md)

# BetterStructures com outros plugins

## MythicMobs
- Crie mobs míticos usando placas com `[mythicmobs]` seguido pelo identificador do mob nas outras linhas da placa.
- EliteMobs é melhor para chefes com BetterStructures porque eu criei ambos.

## MMOItems
- Adicione MMOItems com `mmoitems=<TYPE>@<ITEM-ID>` no ficheiro de configuração de tesouros.

## Itens Personalizados de Outros Plugins
- Use o comando lootify para adicionar quaisquer itens aos baús. Consulte a [Página de Comandos]($language$/betterstructures/commands.md).

# Criar as Suas Próprias Estruturas
- Saiba como: [Guia de Criação de Estruturas]($language$/betterstructures/creating_structures.md)

# Impacto no Desempenho e Minimização
- Gerar muitas estruturas pode tornar o seu servidor mais lento.
- Use o [Chunky](https://www.spigotmc.org/resources/chunky.81534/) para pré-gerar o seu mundo e evitar problemas de desempenho.
- Se não estiver a usar o EliteMobs, pode remover o BetterStructures após a geração do mundo.
- Com o EliteMobs, mantenha o BetterStructures para a gestão de áreas protegidas, com impacto mínimo.
