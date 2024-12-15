# Repositório Público

## Maven
```xml
<repositories>
    <repository>
        <id>magmaguy-repo-releases</id>
        <name>Repositório do MagmaGuy</name>
        <url>https://repo.magmaguy.com/releases</url>
    </repository>
</repositories>

<dependency>
  <groupId>com.magmaguy</groupId>
  <artifactId>BetterStructures</artifactId>
  <version>Verifique qual é a versão mais recente!</version>
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
    implementation 'com.magmaguy:BetterStructures:Verifique qual é a versão mais recente!'
}
```

Nota: substitua `versionNumber` pela versão atual do plugin.

# Eventos

**Nota: Os eventos estão em com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Chamado quando uma construção está prestes a ser colocada. Expõe dados sobre qual construção vai ser colocada e onde, entre outras coisas, através do objeto FitAnything.

**Não tente modificar a construção a ser colocada!** Pode modificar pequenas coisas, mas mudar toda a construção provavelmente resultará numa construção com um ajuste inadequado.

Este evento é cancelável.

## ChestFillEvent

Chamado quando um baú é preenchido. Utiliza o inventário do snapshot do contêiner para armazenar com segurança os dados a serem aplicados.

Modificações ao saque devem ser feitas ao inventário do snapshot através do método Spigot de adicionar ou remover item.

Este evento é cancelável.

# Classes principais

## FitAnything

A classe FitAnything é a classe que é instanciada quando uma construção é colada e gere todos os aspetos da colagem, incluindo o preenchimento de baús e o spawn de mobs.

## WorldGuard

A classe WorldGuard gere as proteções de região do WorldGuard. O método de utilidade `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` é disponibilizado para que os desenvolvedores possam facilmente adicionar um esquema de proteção de região personalizado por cima do BetterStructures.
