# Siglum JS
#### English summary
Recognise polish Bible siglums in HTML pages/blocks and converts them into links.

#### O projekcie
Wyszukuje i rozpoznaje polskie sigla biblijne na stronah HTML a następnie zamienia je w linki. Są dwa warianty biblioteki: jeden dla http://biblia.deon.pl/ oraz druga dla http://twojabiblia.pl/.

### Najszybciej przez przykład
Załóżmy że mamy stronę o treście (https://pl.wikipedia.org/wiki/Kerygmat):
> Apostołowie zaczęli głosić kerygmat już w dniu święta Pięćdziesiątnicy, podczas którego, zgodnie z biblijnym przekazem, nastąpiło zesłanie na nich Ducha Świętego. Byli świadkami Paschy Chrystusa, mówili o śmierci i zmartwychwstaniu Jezusa jako o wydarzeniu zbawczym. Do najważniejszych przykładów kerygmatu w Dziejach Apostolskich należała przemowa Piotra w dniu Pięćdziesiątnicy, czyli bezpośrednio po zesłaniu Ducha Świętego (Dz 2, 14–36) – w której mówca głosił, że proroctwo Dawida wypełniło się w zmartwychwstaniu Chrystusa i stawiał za świadków pozostałych apostołów („My wszyscy jesteśmy tego świadkami” (Dz 2, 32)) – oraz mowa, jaką do Żydów i Greków wygłosił w Antiochii Pizydyjskiej Paweł z Tarsu (Dz 13, 16–41), jak też przemowa z okazji chrztu pogańskiego setnika Korneliusza.

Aby zamienić wszystkie sigla w linki wystarczą dodać następujacy kod w sekcji `<head>` strony:

    <script type="text/javascript" src="siglum-biblia.deon.pl.js"></script>
    <script type="text/javascript">
        window.onload = function(){
            Siglum('body');
        };
    </script>

Teraz treść zostanie wzbogacona w linki:

> Kościół Apostolski Apostołowie zaczęli głosić kerygmat już w dniu święta Pięćdziesiątnicy, podczas którego, zgodnie z biblijnym przekazem, nastąpiło zesłanie na nich Ducha Świętego. Byli świadkami Paschy Chrystusa, mówili o śmierci i zmartwychwstaniu Jezusa jako o wydarzeniu zbawczym. Do najważniejszych przykładów kerygmatu w Dziejach Apostolskich należała przemowa Piotra w dniu Pięćdziesiątnicy, czyli bezpośrednio po zesłaniu Ducha Świętego ([Dz 2, 14–36](http://biblia.deon.pl/otworz.php?skrot=dz%202#W14)) – w której mówca głosił, że proroctwo Dawida wypełniło się w zmartwychwstaniu Chrystusa i stawiał za świadków pozostałych apostołów („My wszyscy jesteśmy tego świadkami” ([Dz 2, 32](http://biblia.deon.pl/otworz.php?skrot=dz%202#W32))) – oraz mowa, jaką do Żydów i Greków wygłosił w Antiochii Pizydyjskiej Paweł z Tarsu ([Dz 13, 16–41](http://biblia.deon.pl/otworz.php?skrot=dz%1302#W16)), jak też przemowa z okazji chrztu pogańskiego setnika Korneliusza.

### FAQ - najcześciej zadawane pytania

#### 1. Czy Siglum JS wymage jQuery?

Nie.

#### 2. Jak mogę ograniczyć działanie biblioteki Siglum JS tylko do wybranych bloków?

Wystarczy odpowiednio zaadresować blok w parametrze. Przykład: `Siglum('#wybranyBlok')` lub `Siglum('.wybraneBloki')`.

#### 3. A co jeśli w #bloku będę miał treść której nie chcę analizować?

Aby pominąć element w analizie wystarczy nadac mu clasę `no-siglum`.

    <div id="blok">
        To będzie analizowane
        <span class="no-siglum"> a to już nie.</span>
    <div>
    <script type="text/javascript" src="siglum-biblia.deon.pl.js"></script>
    <script type="text/javascript">
        Siglum('body');
    </script>

#### 4. A co jeśli siglum jest już w linku?

Nic. Siglum nie rusza linków i ich treści.

#### 5. A co jeśli dynamicznie zaktualizuję tresć bloku?

Nic się nie stanie, więc jeśli chcesz wykryć nowe sigla i zamienić je na linki wystarczy ponownie wywołać `Siglum('#blok')`, stare linki nie zostaną ruszone.

---
[(c) PROMYK 2017](http://promyk.doleczek.pl)