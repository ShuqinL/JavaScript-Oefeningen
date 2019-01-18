var winners=[
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

var list=[];
winners.forEach(function(winner){
    var names=winner.actor.split(' ');
    list.push(names[1]+"<br>");    
   });

list.sort();

document.write(`<ol>`);
document.write(wrapWithTag(list,`li`));
document.write(`</ol>`);

