var actors=[
  {
    actor: "Forest Whitaker",
    film: "The Last King of Scotland",
    age: 45
  }, {
    actor: "Daniel Day-Lewis",
    film: "There Will Be Blood",
    age: 50
  }, {
    actor: "Sean Penn",
    film: "Milk",
    age: 48
  }, {
    actor: "Jeff Bridges",
    film: "Crazy Heart",
    age: 60
  }, {
    actor: "Colin Firth",
    film: "The King's Speech",
    age: 50
  }, {
    actor: "Jean Dujardin",
    film: "The Artist",
    age: 39
  }, {
    actor: "Daniel Day-Lewis",
    film: "Lincoln",
    age: 55
  }, {
    actor: "Matthew McConaughey",
    film: "Dallas Buyers Club",
    age: 44
  }, {
    actor: "Eddie Redmayne",
    film: "The Theory of Everything",
    age: 33
  }, {
    actor: "Leonardo DiCaprio",
    film: "The Revenant",
    age: 41
  }
]

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;


   
   const parseActorData = actor => {
    let result = ``;
    for (const prop in actor) {
      result += wrapWithTag(actor[prop], `p`);
    }
    return result;
  };
  
  const orderByAge = (a, b) => {
    return b.age - a.age;
  };
  
  const createList = actors => {
    return `<ul>${actors
      .sort(orderByAge)
      .map(actor => wrapWithTag(parseActorData(actor), `li`))
      .join(``)
    }</ul>`;
  };
  
 
  document.write(createList(actors));

  document.write("<h1>Total Age :</h1>");


 
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  var newAge = [60,55,50,50,48,45,44,41,39,33];
  // 1 + 2 + 3 + 4
 
  document.write(newAge.reduce(reducer));
  
 
  