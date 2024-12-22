# Desativar dano de explosões

## Desativar dano a blocos

### Usando gamerule

Execute o comando `/gamerule mobGriefing false`. Isto impede todos os danos a blocos causados por explosões.

### Usando WorldGuard

Defina a flag `ghast-fireball` como deny. Isto impede todos os danos causados por bolas de fogo de Ghast.

## Desativar bolas de fogo de EliteMobs:

1. Vá para a pasta *~plugins\EliteMobs\powers*.
2. Vá para *attack_fireball.yml* e defina `isEnabled` como `false`.
3. Vá para *tracking_fireball.yml* e defina `isEnabled` como `false`.
