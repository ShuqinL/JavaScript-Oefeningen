# Javascript

## Index

 - [Controle structuren](#controle-structuren)
 - [Condities](#condities)
   * [If](#if)
   * [Else](#else)
   * [Else if](#else-if)
   * [Switch](#switch)
 - [Loops](#loops)
   * [While](#while)
   * [For](#for)

## Controle structuren

Logica wordt gebruikt om beslissingen te nemen in de code. De keuze om al dan niet een deel van de code uit te voeren is afhankelijk van de gemaakte vergelijkingen. In Javascript kunnen we gebruik maken van verschillende controle structuren om deze logica toe te passen.

## Condities

### If

Een van de eenvoudigste controle structuren is het ``if`` statement.
Als een bepaalde logica ``TRUE`` is, dan wordt een codeblok uitgevoerd.
Je kan ook een code opgeven in een ``else`` statement die uitgevoerd zal worden als het ``if`` statement niet ``TRUE`` is.
De eenvoudigste ``if`` verklaring ziet er zo uit:
```
if ( 10 > 5) {
    // Voert deze code uit
}
```
De code tussen de accolades ``{`` en ``}`` wordt een blok genoemd en is gekoppeld aan de ``if`` instructie. De code wordt alleen gestart als de voorwaarde tussen de haakjes ``TRUE`` is.
Het getal ``10`` is inderdaad hoger dan ``5``, dus de code tussen de accolades wordt uitgevoerd.

### Else

De vorm van de ``if`` en ``else`` verklaring wordt gebruikt om een alternatief voor de code uit te voeren als de voorwaarde niet ``TRUE`` is. Hier wordt de code in het ``if`` blok hieronder genegeerd, de code in het ``else`` blok wordt uitgevoerd.
```
if (43 < 2) {
	// Voor deze code uit
} else {
	// Voer anders deze code uit
}
```

### Else if

Indien deze 2 vormen nog niet volstaan en je nog controles wenst uit te voeren kan je gebruik maken van de ``else if`` voorwaarde.
Dit geeft ons de mogelijkheid om nog een extra voorwaarde te stellen en zo een specifiek blok code te laten uitvoeren.

```
if (43 < 2) {
	// indien correct, voer deze code uit
} else if(43 > 25){
    // indien correct, voer deze code uit
}else {
	// Voer anders deze code uit
}
```

### Switch

Het gevaar bij meerdere ``else if`` statements is dat je code snel onoverzichtelijk kan worden. Een andere manier om een bepaalde voorwaarde te controleren is met behulp van een ``switch`` statement. Een switch statement bestaat uit verschillende ``cases``. Je switch statement controleert als de input matcht met één van de cases en zal de bijbehorende code dan uitvoeren.

```
let menuItem = 'Soep';
switch (menuItem) {
  case 'Frietjes':
    console.log('Onze frietjes kosten €1.5);
    break;
  case 'Soep':
    console.log('Onze soep kost €2);
    break;
  default:
    console.log('We serveren geen ' + menuItem );
}
```

Het ``switch`` statement hierboven controleert of de input matcht met 1 van de cases. In dit geval gaan we na of de input gelijk is aan 'Frietjes' of 'Soep'. Indien er geen case is voor de input vallen we terug op de ``default`` case.

## Loops

Lussen zijn een manier om hetzelfde codeblok meerdere keren te herhalen. De twee meest voorkomende lussen zijn ``For`` en ``While`` lussen. Ze combineren een conditie en een blok. Ze voeren het blok meerdere malen uit totdat de logica van de conditie niet langer waar is of totdat je ze dwingt te stoppen.

### While
Een ``while`` lus herhaalt een codeblok zolang een voorwaarde ``TRUE`` is. Net zoals in een ``if`` statement staat de conditie tussen de haakjes.

```javascript
var increment = 0;
while (increment <10) {
    console.log(increment);
    increment = increment + 1;
}
// blijf herhalen totdat increment gelijk is aan 10
```
Pas wanneer de ``while`` lus volledig teneinde is, wordt het vervolg van je Javascript code uitgevoerd.


### For
Een For-lus is vergelijkbaar met een `If' instructie, maar combineert drie instructies gescheiden door puntkomma's tussen haakjes: initialisatie, conditie en een incrementering.

De initialisatie creëert een variabele om de positie in de lus waarin u zich bevindt te kunnen volgen.
Deze toestand laat toe dat de lus zich herhaalt. 
De laatste uitdrukking wordt aan het einde van elke lus uitgevoerd.
Volgens afspraak gebruiken we ``i`` in plaats van 'increment'.


```javascript
for (var i = 0; i <10; i++) {
    console.log(i);
}
```
Dit geeft de nummers ``1`` terug naar ``10`` in volgorde in de console. 
Bovendien is ``i++`` gelijk aan ``i = i + 1``.

**Oefening**: [oefeningen](./Oefeningen.md)
