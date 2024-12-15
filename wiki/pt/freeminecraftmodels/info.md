# ***Antes de começar!***

O FreeMinecraftModels (FMM) está atualmente em **alfa**! Isso significa que várias funcionalidades ainda não estão concluídas e estão a ser ativamente trabalhadas.

No entanto, neste momento, o núcleo do plugin está totalmente funcional - converter ficheiros bbmodel, gerar pacotes de recursos, gerar entidades no jogo e gerir as suas animações está tudo a funcionar, embora talvez não 100% aperfeiçoado.

Considere apoiar o desenvolvimento em https://www.patreon.com/magmaguy!

Os conteúdos exportados do pacote de recursos são licenciados sob a licença CC0, sem direitos reservados. É livre para usar, distribuir, modificar para qualquer finalidade sem restrições ou necessidade de atribuição.

# Usar este plugin

## O que pode o FreeMinecraftModels (FMM) fazer por administradores de servidores de Minecraft?

Pode:

- Importar modelos .bbmodel ou fmmodel (formato personalizado do FMM)
- Gerar pacotes de recursos com modelos que excedam os limites normais dos modelos de pacotes de recursos do Minecraft (até ~~112x112x112~~ 106x106x106 unidades ou 7x7x7 blocos no jogo)
- Exibir esses modelos no jogo através do uso do comando `/fmm spawn static <id>` onde o id é o nome do ficheiro do modelo, em minúsculas e sem a extensão do ficheiro
- Animar esses modelos como foram configurados para serem animados no Blockbench
- Lidar com animações de estado padrão sem necessidade de outros plugins (caminhar, inativo, morte, ataque, surgir)

### Como adiciona um modelo existente?

Para importar um modelo, basta arrastar o .bbmodel para a pasta de importações e executar `/fmm reload`. Isso irá gerar um ficheiro .fmmodel na pasta `models` e adicionar o modelo ao pacote de recursos na pasta `outputs`.

***Terá de usar esse pacote de recursos para visualizar o modelo corretamente!*** É um pacote de recursos normal, então tudo o que precisa de fazer é colocá-lo na sua pasta de pacotes de recursos. Os servidores de Minecraft têm uma forma de hospedar pacotes de recursos em serviços de terceiros, como o Google Drive ou um serviço especializado como https://resourcepack.host/, esse último site pode ser a forma mais fácil de o fazer.

### Como visualiza o modelo no jogo?

Existem duas categorias (planeadas) de modelos.

- Modelos `Estáticos` são para modelos que não se movem (mas podem ter animações) e servem mais como decorações - pense em algo como um poste de luz ou uma árvore de Natal.
- Modelos `Dinâmicos` são para modelos que se comportam como mobs do Minecraft, ou seja, movem-se e fazem vários comportamentos associados a mobs. Pense em algo como modelos de bosses personalizados ou adicionar tipos de entidades completamente novos ao Minecraft.

#### Visualizar modelos estáticos no jogo

Para visualizar modelos estáticos no jogo, use o comando `/fmm spawn static <id>` onde o id é o nome do ficheiro do modelo, em minúsculas e sem a extensão do ficheiro.

#### Visualizar modelos dinâmicos no jogo

Para visualizar modelos dinâmicos no jogo, use o comando `/fmm spawn dynamic <id>` onde o id é o nome do ficheiro do modelo, em minúsculas e sem a extensão do ficheiro.

## O que pode o FreeMinecraftModels (FMM) fazer para modeladores?

O FMM segue as regras padrão do pacote de recursos para geração de pacotes de recursos. Além disso, tenta ser o mais compatível possível com modelos compatíveis com o ModelEngine, a fim de tentar padronizar a criação de modelos entre plugins.

### Funcionalidades / restrições de geração de modelos

Se já criou modelos para o ModelEngine, estará familiarizado com muitas das restrições de geração de pacotes de recursos do Minecraft:

#### **Cubos:**

Os cubos são os mesmos aqui que são no Blockbench, são os cubos que compõem o modelo.

- Os cubos podem ir até ~~112x112x112~~ 106x106x106 "pixels" (unidades do Blockbench) ou 7x7x7 blocos no jogo (restrições normais do Minecraft ultrapassadas usando tamanhos de exibição, em breve a serem ainda mais ultrapassadas para 1.19.4+ graças a entidades de exibição)
- As rotações legais para cubos são 0, 22,5, -22,5, 45 e -45. Nenhuma outra rotação funciona.
- Os cubos só giram num eixo, o que significa que uma rotação de [22.5, 0, 0] está bem, uma rotação de [22.5, 0, 45] não irá funcionar totalmente e só irá girar num eixo.

#### **Ossos:**

Os ossos são o que o Blockbench chama de "grupos". Servem para agrupar os cubos e devem ser usados para agrupar os ossos para animaçõesBlueprint.

- Os ossos podem ir até ~~112x112x112~~ 106x106x106 (deveria ser 112, não tenho a certeza por que é assim) "pixels" (unidades do Blockbench) ou 7x7x7 blocos no jogo. *Por favor, note que o tamanho dos ossos é definido pelo que eles têm, portanto, se tiver cubos com mais de 7 blocos de distância, provavelmente excederá este limite de tamanho. Ignorar este limite é tão fácil como colocar os blocos num ossoBlueprint diferente não contido no primeiro ossoBlueprint!*
- Podem ter qualquer rotação!

Os ossos são significativamente mais flexíveis do que os cubos, mas deve usar o mínimo de ossos possível! No FMM, devido a limitações do Minecraft, cada ossoBlueprint é uma entidade diferente. Numa escala, isso afetará o desempenho rapidamente! Use sempre o mínimo de ossos que conseguir e tenha em atenção quantos desse modelo pretende gerar - quantos mais planeia ter, menos ossos deve ter!

#### **Ossos Virtuais**

Se vem do ModelEngine, provavelmente quer saber se/como os ossos virtuais são implementados no FMM. Os ossos virtuais foram reservados, mas não estão implementados atualmente além de uma base muito básica.

No entanto, no mínimo, os seguintes ossos virtuais serão compatíveis com o FMM em breve:

- Hitboxes / altura dos olhos: um ossoBlueprint chamado "hitbox" com um cuboBlueprint que define os limites e tem o mesmo valor x e z (o maior valor será escolhido se não forem iguais) define a hitbox. O nível dos olhos é definido no ponto de pivô do ossoBlueprint da hitbox.
- Etiqueta de nome: um ossoBlueprint cujo nome começa com "tag_". Sinceramente, preferiria ser mais específico aqui e usar "tag_name" para usar tags para outras coisas, mas isso será seriamente considerado mais tarde.

Nenhuma outra funcionalidade de ossoBlueprint virtual tem a garantia de ser adicionada num futuro imediato.

## Juntar pacotes de recursos

Ao usar o FMM, provavelmente precisará de juntar pacotes de recursos.

Pode juntar pacotes de recursos manualmente, mas recomendamos o uso de uma ferramenta online como [merge.elmakers](https://merge.elmakers.com/) para juntar os seus pacotes de recursos.

#### **Distribuição de ficheiros mais segura, fácil e não editável**

Uma coisa que o FMM tenta resolver é a reutilização de modelos que os utilizadores obtiveram para os editar de formas que o criador do modelo não queria que fossem editados, especificamente para fazer o reskin ou alterar ligeiramente um modelo e potencialmente tentar revendê-lo como uma criação original.

Para esse fim, o FMM usa o formato de ficheiro `.fmmodel`, que visa reduzir os ficheiros `.bbmodel` ao ponto em que podem ser usados pelo plugin, mas não podem ser editados no Blockbench.

Como modelador, agora tem a opção de lançar um ficheiro `.fmmodel` não editável, um ficheiro `.bbmodel` editável ou mesmo fazer preços diferenciados ou termos de serviço de distribuição para os dois.

Gerar um `.fmmodel` é tão simples como colocar o seu `.bbmodel` na pasta `~/plugins/FreeMinecraftModels/imports` e recarregar o plugin com `/fmm reload` ou reiniciar o servidor. O seu `.fmmodel` estará então na pasta `~/plugins/FreeMinecraftModels/models`.

## O que pode o FreeMinecraftModels (FMM) fazer para desenvolvedores que desejam integrá-lo nos seus plugins?

O FMM tem um repositório maven!
Maven:

```xml
<repository>
    <id>ossrh-public</id>
    <url>https://s01.oss.sonatype.org/content/groups/snapshots/</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>1.1.3-SNAPSHOT</version>
<scope>provided</scope>
</dependency>
```

Gradle:

```kotlin
compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: '1.1.2-SNAPSHOT'
```

*Nota: O FreeMinecraftModels destina-se a ser usado como uma API e exigirá a instalação do plugin no servidor. Não o adicione ao seu plugin!*

O FMM pretende ser o mais fácil possível de usar como uma API.

Neste momento, há apenas uma classe que precisa de conhecer se desejar usar o FMM como uma API para o seu plugin, e essa é `StaticEntity`.

Aqui está um snippet para lidar com um modelo estático:

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Criar o modelo
    public FreeMinecraftModelsModel(String id, Location location) {
        //Isso gera a entidade!
        staticEntity = StaticEntity.create(id, location);
        //Isso verifica se a entidade surgiu corretamente
        if (staticEntity == null) Logger.warningMessage("O FMM não conseguiu encontrar um modelo chamado " + id + " !");
    }

    public void remove() {
        //Isso remove a entidade
        staticEntity.remove();
    }
}
```

Tenha em mente que os modelos estáticos destinam-se a permanecer no lugar e a atuar como um elemento decorativo numa localização fixa (animações não contam como "movimento" aqui). Embora seja possível movê-los, considere se, em vez disso, poderá querer usar um modelo dinâmico se esse for o seu propósito.

E aqui está como o EliteMobs, o meu plugin de bosses personalizado, usa entidades dinâmicas:

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.mobconstructor.custombosses.CustomBossEntity;
import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import com.magmaguy.freeminecraftmodels.api.ModeledEntityManager;
import com.magmaguy.freeminecraftmodels.customentity.DynamicEntity;
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

Os modelos dinâmicos são construídos em cima de uma entidade viva, que pode ser fornecida ao usar o método create como no exemplo acima, ou ao executar o método spawn numa entidade Dinâmica.

Embora não haja nenhum recurso formal da API neste momento, todos os elementos destinados ao uso da API estão contidos em ModeledEntity (a classe base para todas as entidades), StaticEntity, DynamicEntity e ModeledEntityManager. 99% dos desenvolvedores devem encontrar todos os métodos de que precisam espalhados por essas três classes.

# Contribuir para o projeto FreeMinecraftModels (FMM) como desenvolvedor

O FMM é distribuído sob a licença GPLV3 e as contribuições de código são bem-vindas. Aqui estão as diretrizes básicas para contribuições:

- Siga as convenções de nomenclatura existentes, mantenha o nível de verbosidade existente e adicione documentação suficiente para que a sua contribuição seja fácil de entender
- Mantenha as contribuições relevantes para o escopo do plugin. Se não souber se será relevante, sinta-se à vontade para perguntar com antecedência.
- Tenha em atenção o impacto no desempenho do seu código. Algumas contribuições podem ser rejeitadas se forem muito pouco otimizadas ou causarem um impacto de desempenho demasiado grande.

## Resumo geral do plugin

Para lhe poupar algum tempo, aqui está um resumo rápido do fluxo lógico do FMM:

1) Leia a pasta `imports`
2) Mova os ficheiros da pasta `imports` para a pasta `models`. Se o ficheiro for um `.bbmodel`, ele é convertido para `.fmmodel` na pasta models.
3) Leia os ficheiros na pasta `models`.
4) Interprete todas as estruturas de modelos, criando `Skeleton`s que contêm grupos de `Bone`s, e esses ossos contêm grupos de `Bone`s e `Cube`s filhos. `Cube`s e `Bone`s geram os dados JSON do pacote de recursos aos quais cada um está relacionado. Isso significa que `Cube`s geram o JSON específico para cubos e `Bone`s geram o contorno e ficheiros de ossoBlueprint individuais. Note que um ossoBlueprint resulta num ficheiro de pacote de recursos. Os modelos são adicionados a uma lista à medida que são gerados.
5) Ainda no `Skeleton`, interprete todas as `Animations` no modelo, se houver
6) Todos os dados foram agora inicializados, o pacote de recursos foi gerado na pasta `outputs` e o plugin está pronto para ser usado.

## Truques usados neste plugin:

Os truques usados aqui são bastante bem estabelecidos e padronizados, mas serão listados mesmo assim, pois podem ser contra-intuitivos.

Por favor, note que estes truques são todos completamente invisíveis para os utilizadores e criadores de modelos; as restrições e soluções alternativas são listadas apenas para o ajudar a entender como o FMM ignora várias limitações do Minecraft.

- Todos os modelos são aumentados 4x e, em seguida, o tamanho e o ponto de pivô são reajustados no código para estender o tamanho máximo teórico do modelo.
- Como os modelos de pacotes de recursos só podem ter modelos de -16 a +32 de tamanho, os modelos são deslocados em segundo plano. Isso é completamente invisível para os jogadores.
- A armadura de cavalo de couro é usada para criar modelos com uma tonalidade que pode ser influenciada através do código (ou seja, para indicações de danos). A armadura de cavalo deve ser definida como branca para exibir as cores corretas!
- O Blockbench usa um sistema específico de IDs para as texturas, mas, na verdade, lê as texturas sequencialmente da configuração. Os IDs são atribuídos aqui com base na sua posição na lista de texturas, seguindo como o Blockbench o faz.
- Cada ossoBlueprint é uma entidade de suporte de armadura diferente devido a limitações do Minecraft.
- A armadura de cavalo de couro está no slot da cabeça do suporte de armadura
- Os suportes de armadura são usados para os itens estáticos padrão. //todo: em breve terei que implementar o novo sistema de exibição alternativo do MC 1.19.4+, é muito mais eficiente.
- Para evitar colisões com outros plugins que modificam a armadura de cavalo de couro, o FMM usa valores de dados de modelos personalizados começando em 50.000.

# Contribuir para o projeto FreeMinecraftModels (FMM) em geral

O FMM é, na verdade, financiado coletivamente pelas adoráveis pessoas em [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy)! Todas as contribuições ajudam mais do que imagina ;)

# Funcionalidades planejadas atualmente:
- Geração RSP de cliente Bedrock.
- Gestão RSP independente das propriedades do servidor com integração Geyser.
- Entidades personalizadas (?).
- tag_projectile como meta ossos dos quais projéteis podem ser disparados (pode ter mais de um por modelo).

# Limitações estranhas atuais que precisam ser corrigidas:
- Se o ponto de pivô (origem) de um ossoBlueprint for definido para ser superior a cerca de 67, o modelo começa a flutuar.
