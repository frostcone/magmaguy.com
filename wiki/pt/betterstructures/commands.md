# Comandos do BetterStructures

Abaixo está uma lista abrangente de comandos disponíveis para uso com o plugin BetterStructures, juntamente com as suas
respetivas permissões necessárias.

## Comando Reload

**Comando:** `/betterstructures reload`

**Permissão:** `betterstructures.*`

**Descrição:** Recarrega o plugin. Também importa quaisquer estruturas que precisem ser importadas.

## Comando Lootify

**Comando:** `/betterstructures lootify <nome do ficheiro do tesouro> <raridade> <minAmount> <maxAmount> <peso>`

**Permissão:** `betterstructures.*`

**Descrição:** Adiciona o item atualmente em posse à tabela de `raridade` específica do `gerador` específico,
randomizando a quantidade do item que pode ser encontrada num baú entre `minAmount` e `maxAmount`, com o `peso`
especificado.

Este é um sistema muito específico, para mais detalhes sobre como esses valores funcionam, pode
ler [esta página]($language$/betterstructures/creating_structures.md).

## Comando Place

**Comando:** `/betterstructures place <nome do ficheiro da estrutura> <tipo de gerador>`

**Permissão:** `betterstructures.*`

**Descrição:** Força a colocação da estrutura selecionada na sua localização.

## Comando Teleportcoords

**Comando:** `/betterstructures teleporttocoords <nome do mundo> <x> <y> <z>`

**Permissão:** `betterstructures.*`

**Descrição:** Não se destina a ser usado diretamente, este é o comando que é executado quando um administrador clica
num aviso no chat que o permite teleportar para uma estrutura.

## Comando Version

**Comando:** `/betterstructures version`

**Permissão:** `betterstructures.*`

**Descrição:** Imprime a versão do plugin no chat.

## Comando Silent

**Comando:** `/betterstructures silent`

**Permissão:** `betterstructures.*`

**Descrição:** Silencia ou remove o silêncio dos avisos que aparecem no chat para os operadores do servidor sobre as
estruturas que estão a ser geradas no servidor.
