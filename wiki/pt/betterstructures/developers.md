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

Nota: substitua `númeroDaVersão` pela versão atual do plugin.

# Eventos

**Nota: Os eventos estão em com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Chamado quando uma construção está prestes a ser colocada. Expõe dados sobre qual construção vai ser colocada e onde, entre outras coisas, através do objeto FitAnything.

**Não tente modificar a construção que está a ser colocada!** Pode modificar pequenas coisas, mas mudar a construção
toda provavelmente resultará numa construção com um ajuste inadequado.

Este evento é cancelável.

## ChestFillEvent

Chamado quando um baú é preenchido. Usa o inventário de snapshot do contentor para armazenar com segurança os dados a
serem aplicados.

As modificações ao saque devem ser feitas ao inventário de snapshot através do método Spigot de adicionar ou remover
itens.

Este evento é cancelável.

# Classes Principais

## FitAnything

A classe FitAnything é a classe que é instanciada quando uma construção é colada e lida com todos os aspetos da colagem,
incluindo o enchimento de baús e o spawn de mobs.

## WorldGuard

A classe WorldGuard lida com as proteções de região do WorldGuard. O método
utilitário `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` é
disponibilizado para os programadores facilmente integrarem um esquema de proteção de região personalizado para além do
BetterStructures.
