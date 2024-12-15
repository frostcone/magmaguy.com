# Desativar dano de explosão

## Desativar dano em blocos

### Usando a regra de jogo (gamerule)

Executa o comando `/gamerule mobGriefing false`. Isto impede todos os danos em blocos causados por explosões.

### Usando WorldGuard

Define a flag `ghast-fireball` para negar. Isto impede todos os danos causados por bolas de fogo de Ghast.

## Desativar bolas de fogo de EliteMobs:

1. Vai para a pasta *~plugins\EliteMobs\powers*.
2. Vai para *attack_fireball.yml* e define `isEnabled` para `false`.
3. Vai para *tracking_fireball.yml* e define `isEnabled` para `false`.
