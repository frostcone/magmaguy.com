```markdown
# Repositório Público

## Maven
```xml
<repositories>
    <repository>
        <id>oss-sonatype</id>
        <url>https://s01.oss.sonatype.org/content/repositories/snapshots/</url>
    </repository>
</repositories>

<dependency>
  <groupId>com.magmaguy</groupId>
  <artifactId>BetterStructures</artifactId>
  <version>versionNumber-SNAPSHOT</version>
</dependency>
```

# Gradle
```kt
repositories {
    maven {
        url 'https://oss.sonatype.org/content/repositories/snapshots'
    }
}

dependencies {
    implementation 'com.magmaguy:BetterStructures:versionNumber-SNAPSHOT'
}
```

Nota: substitua `versionNumber` pela versão atual do plugin.

# Eventos

**Nota: os eventos estão em `com.magmaguy.betterstructures.api`**

## BuildPlaceEvent

Chamado quando uma construção está prestes a ser colocada. Expõe dados sobre qual construção será colocada e onde, entre outras coisas, através do objeto FitAnything.

**Não tente modificar a construção que está sendo colocada!** Você pode modificar coisas menores, mas mudar a construção inteira provavelmente resultará em uma construção com um ajuste ruim.

Este é cancelável.

## ChestFillEvent

Chamado quando um baú é preenchido. Utiliza o inventário de snapshot do container para armazenar os dados a serem aplicados com segurança.

As modificações no loot devem ser feitas no inventário de snapshot através do método Spigot `addItem` ou `removeItem`.

Este é cancelável.

# Classes-chave

## FitAnything

A classe `FitAnything` é a classe que é instanciada quando uma construção é colada e lida com todos os aspectos da colagem, incluindo o preenchimento de baús e o spawn de mobs.

## WorldGuard

A classe `WorldGuard` trata das proteções da região do WorldGuard. O método de utilidade `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` é disponibilizado para que os desenvolvedores possam facilmente conectar um esquema de proteção de região personalizada no BetterStructures.

```
