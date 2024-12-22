# Como Usar Comandos
- Vá para a página de comandos para obter ajuda: [Página de Comandos]($language$/betterstructures/commands.md)

# Verificar Onde as Estruturas Aparecem
- Se for um administrador de servidor e não tiver desativado os avisos, será notificado no chat quando uma estrutura aparecer.
- Clique na mensagem do chat para se teletransportar para a estrutura (não para a edição Bedrock).
- Ative/desative os avisos com `/betterstructures warn`.

# Por Que as Estruturas Podem Não Aparecer
- Normalmente, as estruturas não aparecem em áreas já exploradas. Visite novas áreas para encontrar estruturas.

<details>
<summary>Mais Detalhes</summary>

As estruturas não aparecerão em áreas já exploradas para evitar sobrecarregá-las e danificar as construções dos
jogadores. O BetterStructures sabe se uma área foi explorada antes da sua instalação e não colocará estruturas lá. Se o
seu mundo foi totalmente explorado antes da instalação do BetterStructures, precisa de o regenerar ou criar um novo
mundo.

</details>

# EliteMobs e BetterStructures

## O Que o EliteMobs Oferece

- Saiba mais sobre EliteMobs: [Wiki do EliteMobs](#)
- Adiciona bosses às estruturas.

## Obter Conteúdo Pré-Feito do EliteMobs
- Disponível em [magmaguy.itch.io](https://magmaguy.itch.io/) e [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Usar o EliteMobs Sem Outras Funcionalidades
- Pode desativar outras funcionalidades do EliteMobs. Para desativar, altere as definições em:
    - events.yml: `timedEventsEnabled: false` e `actionEventsEnabled: false` desativa todos os eventos
  - MobCombatSettings.yml: `doNaturalMobSpawning: false` desativa os spawns naturais de elite

## Adicionar um boss do EliteMobs à sua estrutura

- Adicione `[elitemobs]` à primeira linha da sua placa
- Adicione o nome do ficheiro do boss na segunda/terceira/quarta linha da placa, como `test_boss.yml`
- Mais informações [aqui]($language$/betterstructures/creating_structures.md)

# BetterStructures com outros plugins

## MythicMobs

- Gere mobs míticos usando placas com `[mythicmobs]` seguido pelo identificador do mob nas outras linhas da placa.
- O EliteMobs é melhor para bosses com BetterStructures porque fui eu que fiz ambos.

## MMOItems

- Adicione MMOItems com `mmoitems=<TIPO>@<ID-DO-ITEM>` no ficheiro de configuração de tesouros.

## Itens Personalizados de Outros Plugins

- Use o comando lootify para adicionar qualquer item aos baús. Consulte
  a [Página de Comandos]($language$/betterstructures/commands.md).

# Criar as Suas Próprias Estruturas

- Aprenda como: [Guia de Criação de Estruturas]($language$/betterstructures/creating_structures.md)

# Impacto no Desempenho e Minimização
- Gerar muitas estruturas pode tornar o seu servidor mais lento.
- Use o [Chunky](https://www.spigotmc.org/resources/chunky.81534/) para pré-gerar o seu mundo e evitar problemas de desempenho.
- Se não estiver a usar o EliteMobs, pode remover o BetterStructures após a geração do mundo.
- Com o EliteMobs, mantenha o BetterStructures para a gestão de áreas protegidas, com impacto mínimo.
