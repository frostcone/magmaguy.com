Aqui está a tradução para português (Portugal), mantendo a formatação markdown:

# ***Antes de começar!***

FreeMinecraftModels (FMM) está atualmente em **desenvolvimento ativo**! Isto significa que algumas funcionalidades ainda não estão concluídas e estão a ser ativamente trabalhadas.

No entanto, neste momento, o núcleo do plugin está totalmente funcional - converter ficheiros bbmodel, gerar pacotes de recursos, gerar entidades no jogo e gerir as suas animações, a capacidade de colocar adereços persistentes, está tudo maioritariamente a funcionar.

Considere apoiar o desenvolvimento em https://www.patreon.com/magmaguy !

O conteúdo do pacote de recursos exportado está licenciado sob a licença CC0 por parte do FreeMinecraftModels, sem direitos reservados. É livre de usar, distribuir, modificar para quaisquer fins sem restrições ou a necessidade de atribuição.

# Usar este plugin

## O que pode o FreeMinecraftModels (FMM) fazer pelos administradores de servidores Minecraft?

Pode:

- Importar modelos .bbmodel ou .fmmodel (formato personalizado do FFM)
- Gerar pacotes de recursos com modelos que excedem os limites normais de modelos de pacotes de recursos do Minecraft (até 112x112x112 unidades ou 7x7x7 blocos no jogo, funcionalmente ilimitado ao usar múltiplos ossos)
- Exibir estes modelos no jogo, enviando pacotes específicos compatíveis com Bedrock para clientes Bedrock, ao mesmo tempo que envia entidades de exibição para clientes Java 1.19.4+
- Animar estes modelos conforme foram configurados para serem animados no Blockbench
- Gerir animações de estado padrão sem necessitar de outros plugins (andar, parado, morte, ataque, gerar)
- Gerir hitboxes que rodam com a entidade subjacente e têm um eixo x e z diferente
- Gerir três tipos de modelos: estáticos, dinâmicos e adereços
    - Adereços são persistentes e podem ser colocados no mundo de forma a persistir mesmo que o servidor seja reiniciado, e é possível distribuir mapas com adereços para outros servidores
    - Modelos dinâmicos são para modelos que necessitam de uma entidade viva subjacente para funcionar, idealmente usados por plugins de bosses personalizados ou plugins de pets
    - Modelos estáticos são para modelos não persistentes que não devem mover-se, basicamente decorações ou efeitos temporários

### Como adicionar um modelo existente?

Para importar um modelo, basta arrastar o ficheiro .bbmodel para a pasta imports e executar `/fmm reload`. Isto irá gerar um ficheiro .fmmodel na pasta `models` e adicionar o modelo ao pacote de recursos na pasta `outputs`.

***Precisará de usar esse pacote de recursos para visualizar o modelo corretamente!*** É um pacote de recursos normal, por isso tudo o que precisa fazer é colocá-lo na sua pasta de pacotes de recursos. Os servidores Minecraft têm uma forma de hospedar pacotes de recursos. Recomendo usar o meu plugin, [ResourcePackManager](https://www.spigotmc.org/resources/resource-pack-manager.118574/), que automaticamente recolhe os ficheiros e os hospeda remotamente para si, mesmo mesclando-os com os ficheiros de outros plugins.

### Como visualizar o modelo no jogo?

É importante notar que, embora o FreeMinecraftModels possa ser usado como um plugin autónomo para visualizar adereços (basicamente modelos personalizados que pode colocar no mundo), o plugin geralmente funciona melhor quando emparelhado com um plugin como o [EliteMobs](https://www.spigotmc.org/resources/elitemobs.40090/), onde os modelos são ativamente usados para algo concreto, neste caso, lutas contra bosses.

Existem três tipos de modelos: estáticos, dinâmicos e adereços.
- Adereços são persistentes e podem ser colocados no mundo de forma a persistir mesmo que o servidor seja reiniciado, e é possível distribuir mapas com adereços para outros servidores
- Modelos dinâmicos são para modelos que necessitam de uma entidade viva subjacente para funcionar, idealmente usados por plugins de bosses personalizados ou plugins de pets
- Modelos estáticos são para modelos não persistentes que não devem mover-se, basicamente decorações ou efeitos temporários

#### Visualizar modelos estáticos no jogo

Para visualizar modelos estáticos no jogo, use o comando `/fmm spawn static <id>`, onde o id é o nome do ficheiro do modelo, em minúsculas e sem a extensão do ficheiro.

#### Visualizar modelos dinâmicos no jogo

Para visualizar modelos dinâmicos no jogo, use o comando `/fmm spawn dynamic <id>`, onde o id é o nome do ficheiro do modelo, em minúsculas e sem a extensão do ficheiro.

#### Visualizar adereços no jogo

Para visualizar adereços no jogo, use o comando `/fmm spawn prop <id>`, onde o id é o nome do ficheiro do modelo, em minúsculas e sem a extensão do ficheiro.

## O que pode o FreeMinecraftModels (FMM) fazer pelos modeladores?

O FMM segue as regras padrão de pacotes de recursos para a geração de pacotes de recursos. Além disso, tenta ser o mais compatível possível com modelos compatíveis com o ModelEngine, a fim de tentar padronizar a criação de modelos entre plugins.

### Funcionalidades / restrições de geração de modelos

Se alguma vez criou modelos para o ModelEngine, estará familiarizado com muitas das restrições de geração de pacotes de recursos do Minecraft:

#### **Cubos:**

Os cubos são os mesmos aqui que no Blockbench, são os cubos que compõem o modelo.

- Os cubos podem ir até 112x112x112 "pixels" (unidades do Blockbench) ou 7x7x7 blocos no jogo (restrições normais do Minecraft contornadas usando tamanhos de exibição, em breve serão ainda mais contornadas para 1.19.4+ graças às entidades de exibição)
- As rotações legais para cubos são 0, 22.5, -22.5, 45 e -45. Nenhuma outra rotação funciona.
- Os cubos só rodam num eixo, o que significa que uma rotação de [22.5, 0, 0] está bem, uma rotação de [22.5, 0, 45] não funcionará completamente e só rodará num eixo.

#### **Ossos:**

Ossos são o que o Blockbench chama de "grupos". Servem para agrupar os cubos e devem ser usados para agrupar ossos para animaçõesBlueprint.

- Os ossos podem ir até 112x112x112 "pixels" (unidades do Blockbench) ou 7x7x7 blocos no jogo. *Por favor, note que o tamanho dos ossos é definido pelo que contêm, por isso, se tiver cubos que estão a mais de 7 blocos de distância, provavelmente excederá este limite de tamanho. Contornar este limite é tão fácil quanto colocar os blocos num boneBlueprint diferente não contido no primeiro boneBlueprint!*
- Podem ter qualquer rotação! No entanto, é recomendado evitar usar rotações padrão de 90, -90, 180 e -180, pois estas podem frequentemente levar a comportamento inesperado. Note que isto não se aplica realmente a animações, apenas à posição de descanso padrão dos ossos.

Os ossos são significativamente mais flexíveis que os cubos, mas deve usar o mínimo de ossos possível! No FMM, devido às limitações do Minecraft, cada osso é uma entidade diferente. Em escala, isto afetará o desempenho bastante rapidamente! Use sempre o mínimo de ossos que puder e esteja atento a quantos desse modelo planeia gerar - quanto mais planeia ter, menos ossos deve ter!

#### **Ossos Virtuais**

Ossos Virtuais é terminologia do model engine para ossos que têm metadados específicos, geralmente na forma de um nome específico, que é usado para um propósito específico.

Os seguintes ossos virtuais foram implementados no FreeMinecraftModels:

- Hitboxes / altura dos olhos: um osso chamado "hitbox" com um cubeBlueprint que define os limites, e tem o mesmo valor x e z (o maior valor será escolhido se não forem iguais) define a hitbox. O nível dos olhos é definido no ponto de pivô do boneBlueprint da hitbox.
- Etiqueta de nome: um osso cujo nome começa com "tag_". Honestamente, preferia ser mais específico aqui e usar "tag_name" para usar etiquetas para outras coisas, mas isso será seriamente considerado mais tarde.
- Cabeça: um osso cujo nome começa com h_ . Este é um osso virtual que é usado para definir a cabeça do modelo, que rodará com base na rotação da cabeça da entidade subjacente.

#### **Distribuição de ficheiros mais segura, fácil e não editável**

Uma coisa que o FMM tenta abordar é a reutilização de modelos obtidos pelos utilizadores para os editar de formas que o criador do modelo não desejava, especificamente para mudar a skin ou alterar ligeiramente um modelo e potencialmente tentar revendê-lo como uma criação original.

Para esse fim, o FMM usa o formato de ficheiro `.fmmodel`, que visa simplificar os ficheiros `.bbmodel` ao ponto em que podem ser usados pelo plugin, mas não podem ser editados no Blockbench.

Como modelador, agora tem a escolha se quer lançar um ficheiro `.fmmodel` não editável, um ficheiro `.bbmodel` editável ou até mesmo fazer preços diferenciais ou termos de serviço de distribuição para os dois.

Gerar um `.fmmodel` é tão simples quanto colocar o seu `.bbmodel` na pasta `~/plugins/FreeMinecraftModels/imports` e recarregar o plugin com `/fmm reload` ou reiniciar o servidor. O seu `.fmmodel` estará então na pasta `~/plugins/FreeMinecraftModels/models`.

## O que pode o FreeMinecraftModels (FMM) fazer por desenvolvedores que desejam integrá-lo nos seus plugins?

O FMM tem um repositório Maven!
Maven:

```xml
<repository>
    <id>magmaguy-repo-releases</id>
    <name>MagmaGuy's Repository</name>
    <url>https://repo.magmaguy.com/releases</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>LATEST.VERSION.HERE</version>
</dependency>
```

Gradle:

```kotlin
maven {
    name = "magmaguyRepoReleases"
    url = uri("https://repo.magmaguy.com/releases")
}

compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: 'LATEST.VERSION.HERE'
```

*Nota: O FreeMinecraftModels destina-se a ser usado como uma API e exigirá a instalação do plugin no servidor. Não o inclua (shade) no seu plugin!*

## Uso da API

O FMM pretende ser o mais fácil possível de usar como uma API.

Neste momento, se desejar usar o FreeMinecraftModels como uma API para ter acesso ao uso de modelos personalizados, há apenas quatro classes que precisa conhecer:

- `ModeledEntity` - a classe base para todas as entidades
- `StaticEntity` - para quando quiser usar um modelo estático não permanente
- `DynamicEntity` - para quando quiser disfarçar outra entidade viva com um modelo
- `PropEntity` - para quando quiser colocar um modelo no mundo que persista mesmo que o servidor seja reiniciado

Aqui está um trecho para lidar com um modelo estático:

```java
import org.bukkit.Bukkit;

public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Create the model
    public FreeMinecraftModelsModel(String id, Location location) {
        //This spawns the entity!
        staticEntity = StaticEntity.create(id, location);
        //This checks if the entity spawned correctly
        if (staticEntity == null) Bukkit.getLogger().warning(("FMM failed to find a model named " + id + " !"));
    }

    public void remove() {
        //This removes the entity
        staticEntity.remove();
    }
}
```

Tenha em mente que os modelos estáticos se destinam a permanecer no lugar e atuar como um elemento decorativo numa localização fixa (animações não contam como 'movimento' aqui). Embora seja possível movê-los, considere se não seria melhor usar um modelo dinâmico se esse for o seu propósito.

E aqui está como o EliteMobs, o meu plugin de bosses personalizados, usa entidades dinâmicas:

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import api.com.magmaguy.freeminecraftmodels.ModeledEntityManager;
import customentity.com.magmaguy.freeminecraftmodels.DynamicEntity;
import lombok.Getter;
import org.bukkit.entity.LivingEntity;

public class CustomModelFMM implements CustomModelInterface {
    @Getter
    private DynamicEntity dynamicEntity;

    public CustomModelFMM(LivingEntity livingEntity, String modelName, String nametagName) {
        dynamicEntity = DynamicEntity.create(modelName, livingEntity);
        if (dynamicEntity == null) return;
        dynamicEntity.setName(nametagName);
    }

    public static void reloadModels() {
        ModeledEntityManager.reload();
    }

    public static boolean modelExists(String modelName) {
        return ModeledEntityManager.modelExists(modelName);
    }

    @Override
    public void shoot() {
        if (dynamicEntity.hasAnimation("attack_ranged")) dynamicEntity.playAnimation("attack_ranged", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void melee() {
        if (dynamicEntity.hasAnimation("attack_melee")) dynamicEntity.playAnimation("attack_melee", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void playAnimationByName(String animationName) {
        dynamicEntity.playAnimation(animationName, false);
    }

    @Override
    public void setName(String nametagName, boolean visible) {
        dynamicEntity.setName(nametagName);
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void setNameVisible(boolean visible) {
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void switchPhase() {
        dynamicEntity.stopCurrentAnimations();
    }
}
```

Modelos dinâmicos são construídos sobre uma entidade viva, que pode ser fornecida ao usar o método create, como no exemplo acima, ou ao executar o método spawn numa entidade Dynamic.

# Contribuir para o projeto FreeMinecraftModels (FMM) como desenvolvedor

O FMM é distribuído sob a licença GPLV3 e contribuições de código são bem-vindas. Aqui estão as diretrizes básicas para contribuição:

- Siga as convenções de nomenclatura existentes, mantenha o nível de verbosidade existente e adicione documentação suficiente para que a sua contribuição seja fácil de entender
- Mantenha as contribuições relevantes para o âmbito do plugin. Se não tiver a certeza se será relevante, sinta-se à vontade para perguntar antecipadamente.
- Esteja atento ao impacto de desempenho do seu código. Algumas contribuições podem ser recusadas se forem demasiado pouco otimizadas ou causarem um impacto de desempenho demasiado grande.

## Esboço geral do plugin

Para lhe poupar algum tempo, aqui está um breve resumo do fluxo lógico do FMM:

1) Ler a pasta `imports`
2) Mover ficheiros da pasta `imports` para a pasta `models`. Se o ficheiro for um `.bbmodel`, é convertido para `.fmmodel` na pasta `models`.
3) Ler os ficheiros na pasta `models`.
4) Interpretar todas as estruturas de modelos, criando `Skeleton`s que contêm grupos de `Bone`s, e estes ossos contêm grupos de `Bone`s e `Cube`s filhos. `Cube`s e `Bone`s geram os dados JSON do pacote de recursos a que estão relacionados. Isto significa que os `Cube`s geram o JSON específico para cubos e os `Bone`s geram o esboço e os ficheiros boneBlueprint individuais. Note que um boneBlueprint resulta num ficheiro de pacote de recursos. Os modelos são adicionados a uma lista à medida que são gerados.
5) Ainda no `Skeleton`, interpretar todas as `Animations` no modelo, se existirem
6) Todos os dados foram agora inicializados, o pacote de recursos foi gerado na pasta `outputs` e o plugin está pronto a ser usado.

## Truques usados neste plugin:

Os truques usados aqui são bastante bem estabelecidos e padronizados, mas serão listados mesmo assim porque podem ser contraintuitivos.

Por favor, note que estes truques são completamente invisíveis para utilizadores e criadores de modelos; as restrições e soluções alternativas são listadas apenas para o ajudar a entender como o FMM contorna várias limitações do Minecraft.

- Todos os modelos são aumentados 4x e depois o tamanho e o ponto de pivô são reajustados no código, a fim de estender o tamanho máximo teórico do modelo
- Como os modelos de pacotes de recursos só podem ter tamanhos de -16 a +32, os modelos são deslocados em segundo plano. Isto é completamente invisível para os jogadores.
- Armadura de cavalo de couro é usada para criar modelos com uma tonalidade que pode ser influenciada através de código (ou seja, para indicações de dano). A armadura de cavalo deve ser definida como branca para exibir as cores corretas!
- O Blockbench usa um sistema específico de IDs para as texturas, mas na verdade lê as texturas sequencialmente a partir da configuração. Os IDs são atribuídos aqui com base na sua posição na lista de texturas, seguindo como o Blockbench o faz.
- Cada osso é uma entidade diferente devido às limitações do Minecraft
- A armadura de cavalo de couro está no slot da cabeça do armor stand
- Tanto armor stands quanto entidades de exibição são usadas para os itens estáticos padrão; clientes Bedrock recebem os armor stands, e clientes 1.19.4+ recebem as entidades de exibição (clientes mais antigos receberão armor stands)

# Contribuir para o projeto FreeMinecraftModels (FMM) em geral

O FMM é na verdade financiado por crowdfunding pelas pessoas incríveis em https://www.patreon.com/magmaguy ! Todas as contribuições ajudam mais do que pode imaginar ;)

# Funcionalidades planeadas atualmente:
- Geração de RSP para cliente Bedrock
- Gestão de RSP com integração Geyser
- tag_projectile como meta ossos dos quais projéteis podem ser disparados (pode ter mais de um por modelo)

# Limitações estranhas atuais que seria bom corrigir:

- A TransformationMatrix é uma confusão, mas ainda não foram desenvolvidas melhores soluções. Precisam de algum trabalho de alguém que seja bom em matrizes.