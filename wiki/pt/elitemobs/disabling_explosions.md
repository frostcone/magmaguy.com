Aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# Desativar dano de explosão

## Desativar dano de blocos

### Usando gamerule

Executa o comando `/gamerule mobGriefing false`. Isto impede todo o dano de blocos causado por explosões.

### Usando WorldGuard

Define a flag `ghast-fireball` como deny. Isto impede todo o dano de bolas de fogo de Ghast.

## Desativar bolas de fogo do EliteMobs:

1. Vai para a pasta *~plugins\EliteMobs\powers*.
2. Vai para *attack_fireball.yml* e define `isEnabled` como `false`.
3. Vai para *tracking_fireball.yml* e define `isEnabled` como `false`.