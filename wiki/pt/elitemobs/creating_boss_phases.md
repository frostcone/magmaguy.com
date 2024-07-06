# Criando Fases de Chefe


Fases de Chefe são uma sub-mecânica de Chefes Personalizados. O sistema por trás dessas fases é tão flexível e poderoso que requer sua própria explicação dedicada para garantir que você faça bom uso desse recurso.

### Como as Fases de Chefe funcionam?

Fases de Chefe podem ser adicionadas a qualquer Chefe Personalizado no EliteMobs usando o seguinte formato de configuração:

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Observação: o chefe que você gera originalmente que contém as informações para todas as outras fases será chamado de chefe da fase 1. Ele não deve estar na entrada de fases.**_

A intenção básica por trás dessa mecânica é permitir que os administradores alterem os atributos do Chefe Personalizado durante o combate. Usando o formato de configuração acima, você é capaz de alterar completamente os arquivos de configuração de fase para fase, o que significa que você pode alterar 99,99% dos atributos - como poderes, multiplicadores de dano, multiplicadores de saúde, tipo de entidade, disfarçar, armadura usada...

Para conseguir isso, o EliteMobs exclui seu chefe durante o combate e o substitui instantaneamente pela versão da próxima fase. O processo por trás disso é instantâneo, então tende a ser bastante suave - a menos que você queira torná-lo chamativo de propósito.

### Exemplo

Veja este chefe de fase de exemplo:

Arquivo: phase_1_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: STRAY
powers:
- attack_gravity.yml
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Arquivo: phase_2_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: SKELETON
powers:
- attack_gravity.yml
- arrow_fireworks.yml
```

Arquivo: phase_3_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: WITHER_SKELETON
powers:
- arrow_rain
```

Isso constitui um Chefe de Fase válido. Se você gerar phase_1_boss.yml, ele gerará um Stray com os atributos listados acima. Após ser danificado até _60%_ de sua saúde, ele será imediatamente substituído na mesma localização pelo Chefe Personalizado conforme formado em phase_2_boss.yml, uma vez que o arquivo de configuração indica `- phase_2_boss.yml:0.60` (_phase_2_boss.yml é o nome do arquivo para aquele chefe personalizado, 0.60 é 60% de saúde_). _Observe que o chefe da fase 2 será gerado com 60% de sua saúde, pois é quando ele muda para essa fase._ O chefe terá os poderes listados no arquivo phase_2_boss.yml. Quando o chefe da fase 2 for danificado até 30% de sua saúde, ele gerará o chefe definido para a fase 3. Observe que os poderes da fase 3 não estão relacionados aos anteriores - você pode alterar completamente os poderes entre as fases, assim como quase todos os outros atributos.

## Avançado

### Mecânicas herdadas

Aqui está uma lista de coisas que não mudam de fase para fase:

- O primeiro Chefe de Fase na cadeia determina quais fases o chefe irá passar, o que significa que você não deve colocar uma entrada de fases para os outros chefes na fase.

- A tabela de ameaça / tabela de dano permanece a mesma, o que significa que a distribuição de loot e o sistema avançado de aggro não são afetados por uma mudança de fase

- A mudança de fase é baseada em % de saúde perdida, que é preservada de fase para fase. Isso significa que se seu chefe está definido para entrar na fase 2 com 50% de saúde, o chefe que aparecerá para substituir o chefe da fase 1 ainda estará com 50% de saúde. Isso também significa que cada fase pode ter quantidades de saúde completamente diferentes sem causar problemas.

- Os Chefes de Fase voltam para a Fase 1 se forem curados de volta para a saúde total por meio do sistema padrão de regeneração do chefe fora do combate

- Os Chefes de Fase que também são Chefes Regionais compartilham o mesmo raio de guia e mecânica de tempo limite em todas as fases e renascerão como o chefe da fase 1 após o tempo limite de renascimento ser concluído.


#### Avisos

Aqui está uma lista de mecânicas que funcionam de uma forma que pode ser inicialmente contra-intuitiva:

- Se um Chefe de Fase for morto durante qualquer fase, ele irá soltar o loot daquela fase. Isso significa que se alguém conseguir matar um chefe de fase muito rápido (1 tiro), ele realmente morrerá e irá soltar o loot que está configurado para aquele arquivo de chefe, que pode não ser necessariamente a fase final. Você pode corrigir isso definindo a tabela de loot para ser a mesma em todos os arquivos de chefe para este chefe de fase, ou certificando-se de que seus Chefes de Fase tenham HP suficiente ao ponto de ser impossível matá-los em apenas algumas investidas. Alternativamente, você pode ter tabelas de loot especiais para pessoas que conseguem pular as fases.

- Uma vez que os Chefes de Fase realmente fazem com que os Chefes Personalizados sejam gerados durante o combate, eles farão toda a sua rotina de geração quando forem gerados. Como tal, tome cuidado com as mensagens de geração e comandos que são executados na geração. Além disso, os chefes de fase não morrem se mudarem de fase, eles são simplesmente trocados por outra coisa. Isso significa que os comandos que são executados na morte serão executados apenas para o último Chefe de Fase, ou se o jogador conseguir pular uma fase causando dano suficiente. Os comandos que são executados na geração podem ser usados para se conectar às mudanças de fase. \*Nota: \* a mensagem de geração não será enviada novamente para o chefe da fase 1 se eles forem regenerados de volta à saúde total devido à regeneração do chefe de fase.

- Os chefes de fase podem vir montados ou deixarem de ser montados entre as fases. Se o chefe de fase for morto antes da morte da montaria, a montaria persistirá até a próxima fase. Se o chefe for regenerado de volta para a saúde total, a montaria é excluída e o chefe fica sem montaria, a menos que esteja configurado para montar uma entidade durante a fase 1.

- Como novos Chefes Personalizados são gerados entre as fases, a mecânica de geração única é redefinida entre as fases e em curas completas.


### Dicas e truques

- Você pode usar o fato de que o equipamento e os tipos de entidade podem ser alterados ao longo do combate para fazer o chefe parecer mais e mais (ou menos e menos) perigoso ao longo da luta

- Embora seja possível, a menos que haja um objetivo de design específico em mente, provavelmente é melhor que os poderes que o Chefe de Fase possui não mudem muito drasticamente entre as fases, pois os jogadores provavelmente gostarão mais de uma progressão que pareça natural ao longo da luta.

- Você pode usar comandos onSpawn para executar comandos entre as fases

- As fases podem ser usadas para mudar o chefe do modo corpo a corpo para o modo à distância e vice-versa

- Os Chefes de Fase foram criados para serem chefes difíceis com muito HP. Eles geralmente são melhor servidos como encontro final de chefe para masmorras ou como grandes Chefes Mundiais.

- Ao projetar encontros, lembre-se de que é possível que os reforços não sejam mortos pelos jogadores entre as fases.

- Os chefes podem ter quantas fases você quiser, mas quanto mais fases eles tiverem, mais saúde eles precisarão para fazer cada fase importar.

