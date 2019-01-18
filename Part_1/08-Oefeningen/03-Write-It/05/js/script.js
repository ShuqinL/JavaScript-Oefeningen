const fees = [
  {
    price: 10.75,
    title: "Normaal tarief"
  }, {
    price: 9.75,
    title: "Kortingstarief"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Film Lange Speelduur (>/=2u15)"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];



//make an array for each fee
const normal = Array.of(fees[0])
const discount = Array.of(fees[1])
const student = Array.of(fees[2])
//console.log(normal);

//tagWrapper
const tagWrapper = (content, tagname) => `<${tagname}>${content}</${tagname}>`

//add extras to every array and add price to fee.price
 const addExtra = arr => {
    //  voor elk object in array een li tag maken
    // write to html
    arr.forEach(fee => {
        document.write (tagWrapper(
            (tagWrapper(
                (`${fee.title}`),
                'p')
            + tagWrapper((`€ ${fee.price}`),
                'p')
            ), 
            'li')
        )
        
        //voor elke extra de prijs aanpassen (extra.price + fee.price)
        //elke extra verpakken in li tag
        extras.forEach(extra => {
            let price = fee.price + extra.price
            document.write (tagWrapper(
                (tagWrapper(
                    (`${extra.title}`),
                    'p')
                + tagWrapper(
                    (`€ ${price}`),
                    'p')
                ),
                'li')
            )
        })
    })
}

//maak ul voor elk tarief en schrijf naar html 
document.write('<ul>')
addExtra(normal)
document.write('</ul>')
document.write('<ul>')
addExtra(discount)
document.write('</ul>')
document.write('<ul>')
addExtra(student)
document.write('</ul>')




// li met p tags voor mooiere uitlijning
//tagWrapper((tagWrapper((`${extra.title}`),'p')tagWrapper((`${price}`),'p')), 'li')

//li zonder p tags voor eenvoud
// document.write(tagWrapper((`${extra.title}: ${price}`),'li'))

/*for(var i=0;i<fees.length;i++){
   
  
   extras.forEach(function(extra){
     extra.price+fees[i].price;
   }
    );
 

};
*/