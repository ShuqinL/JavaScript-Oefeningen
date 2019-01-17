# Javascript

## Objecten

## Index
 1. [Introductie](#introductie)
 1. [Methodes](#methodes)
 1. [Literals & Constructors](#literals-constructors)
 1. [Voorbeeld](#voorbeeld)


### Introductie

Objecten kunnen we beschouwen als een lijst van eigenschappen die we in een lijst gieten om zo alles netjes bij elkaar te houden. Als we een kop koffie gaan beschrijven zijn er zo een aantal eigenschappen die direct in ons op komen zoals: Smaak, Temperatuur, Met of zonder melk.. Deze eigenschappen zouden we bij elkaar in een object koffie kunnen steken om alles zo netjes bij elkaar te houden.

Voorbeeld van een object:
```javascript
    let myFirstObject = {
        //add necessary properties
        exampleKey: exampleValue,
        exampleKey1: exampleValue2   // Last property doesnt get a , This is because Internet Explorer will give us a error!
    };
```
Om vervolgens een waarde te kunnen aanspreken, doen we het volgende:
```javascript
    console.log(myFirstObject.exampleKey);
```

### Methodes
Zojuist hebben we het gehad over objecten. En hoe we eigenschappen aan objecten meegeven om zo een geheel plaatje te kunnen maken van een object. Maar kunnen we ook meer meegeven dan alleen maar een key:value pair? Jazeker, we kunnen als we willen methods meegeven. Wat klinkt als een moeilijk en duur woord om te leren, maar eigenlijk een andere benaming is voor een functie die in een object genesteld is.

```javascript
    let myFirstObject = {
        //add necessary properties
        exampleKey: exampleValue
 
        functionName: function(){
            //Function goes here
        }
    };
```

Om de method te kunnen gebruiken, doen we het volgende:
```javascript
    myFirstObject.functionName();
```


### Literals & Constructors
Aangezien we nu weten hoe we objecten aanmaken, kunnen we het volgende gaan doen:
```javascript
    let myFirstObjectLiteral1 = {           
        exampleKey: exampleValue          
    }; 
    
    let myFirstObjectLiteral2 = {           
        exampleKey: exampleValue          
    }; 
    
    let myFirstObjectLiteral3 = {           
        exampleKey: exampleValue          
    }; 
```

Maar zoals ik in een aantal vorige lessen terug, volgen we in dit geval niet de DRY methode: Dont repeat yourself! Om dus te voorkomen dat we telkens het zelfde herhalen kunnen we gebruik maken van een Constructor. Een Constructor geeft ons de mogelijkheid waardes mee te geven aan een object zonder dat we ons zelf telkens moeten herhalen.

```javascript
    function MyFirstConstructor(example) {
        this.example = example;          
    };
```
Een constructor-naam begint altijd met een Hoofdletter! Dit is om een duidelijke onderscheid te kunnen maken tussen functies en constructors. Tussen de () word er een parameter mee gegeven die in de constructor gebruikt kan worden. De this, is een verwijzing naar zich zelf. Hier gaan we in het volgend hoofdstuk dieper op in. Vervolgens word de eigenschap waarde gezet zoals we dat anders ook zouden hebben moeten doen.

Als we de constructor nu zouden gebruiken ziet dat er als volgt uit:
```javascript
    let object = new MyFirstConstructor("value");
    console.log(object.example);
```

### Voorbeeld
Bekijk het volgende voorbeeld:
```javascript
    let table = new Object();               // Old way of declairing
    let table = {};                         // New way of declairing

    let main_color = "#FF0000";
    let chair = {
        color : main_color,
        feets : 4,
        things : ["paper","remote control","USB stick"],
        knock : function(){
            console.log( "TAP TAP !");
            console.log( chair.things );    // ["paper",..] if reference is used 
            console.log( this.things );     // ["paper",...] if other instances are used
        };
    };

    console.log( chair[feets] );            // not good
    console.log( chair.feets );             // -> 4
    console.log( chair["feets"] );          // -> 4

    chair.knock();                          // launches the knock method

    for(let key in chair){                  // loop
        console.log( typeof key );          // displays the key type: String
        console.log( key );                 // displays each key of my object ("color", "feets"..)
        console.log( chair[key] );          // displays each value ("#FF0000", 4,...)
    }
```

**Oefening**: [Objecten](./Oefeningen.md)
