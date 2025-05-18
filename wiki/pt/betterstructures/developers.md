```markdown
# Repositório Público

## Maven
```xml
<repositories>
    <repository>
        <id>magmaguy-repo-releases</id>
        <name>MagmaGuy's Repository</name>
        <url>https://repo.magmaguy.com/releases</url>
    </repository>
</repositories>

<dependency>
  <groupId>com.magmaguy</groupId>
  <artifactId>BetterStructures</artifactId>
  <version>Check what the latest version is!</version>
  <scope>provided</scope>
</dependency>
```

# Gradle
```kt
repositories {
  maven {
    name = "magmaguyRepoReleases"
    url = uri("https://repo.magmaguy.com/releases")
  }
}

dependencies {
    implementation 'com.magmaguy:BetterStructures:Check what the latest version is!'
}
```

Nota: substitua `versionNumber` pela versão atual do plugin.

# Eventos

**Nota: Os eventos estão em com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Chamado quando uma construção está prestes a ser colocada. Expõe dados sobre qual construção será colocada e onde, entre outras coisas, através do objeto FitAnything.

**Não tente modificar a construção que está a ser colocada!** Pode modificar coisas menores, mas alterar a construção inteira provavelmente resultará numa construção com um encaixe deficiente.

Este evento é cancelável.

## ChestFillEvent

Chamado quando um baú é preenchido. Usa o inventário de snapshot do contentor para armazenar de forma segura os dados a serem aplicados.

As modificações ao loot devem ser feitas no inventário de snapshot através do método Spigot de adicionar ou remover item.

Este evento é cancelável.

# Classes Chave

## FitAnything

A classe FitAnything é a classe que é instanciada quando uma construção é colada e gere todos os aspetos da colagem, incluindo o preenchimento de baús e a geração de mobs.

## WorldGuard

A classe WorldGuard gere as proteções de região do WorldGuard. O método de utilidade `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` é disponibilizado para que os desenvolvedores possam facilmente integrar um esquema de proteção de região personalizado sobre o BetterStructures.
```