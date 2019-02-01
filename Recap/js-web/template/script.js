
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
//1.1 Color selector
//add style to the div
document.getElementById("square").setAttribute("style","height:50px;width:50px;background-color:black;");
//changecolor function
//let color;
function changecolor(color){
  document.getElementById(color).addEventListener("click",colorButton);
  function colorButton(){
    document.getElementById("square").style.backgroundColor = color;
  }
} 

changecolor("blue");
changecolor("red");
changecolor("green");

//1.2 Calculator
let result=document.getElementById("result");

 function calcResult(arith){
  document.getElementById(arith).addEventListener("click", getAnswer);
  
  function getAnswer(){
      let num1=new Number(document.getElementById("text1").value);
      let num2=new Number(document.getElementById("text2").value);

      if(arith=="add"){
        result.innerText=num1 + num2;
      } else if(arith=="subtract"){
        result.innerText=num1-num2;
      } else if(arith=="multiply"){
        result.innerText=num1*num2;
      } else if(arith=="division"){
        result.innerText=num1/num2;
      }  
  }
}

calcResult("add");
calcResult("subtract");
calcResult("multiply");
calcResult("division"); 


//1.3 Super Vilain application form
//reset function
document.getElementById("resetBtn").addEventListener("click",resetButton);
function resetButton(){
  document.getElementById("myForm").reset();
}
//display function
document.getElementById("displayBtn").addEventListener("click",displayButton);
function displayButton(){
  //get the value
  let name=document.getElementById("name").value;
  let power=document.getElementById("power").value;
  let motivation=document.getElementById("motivation").value;
  let plan=document.getElementById("plan").value;
  //display none
  document.getElementById("myForm").style.display="none";
  //show the form content
  document.getElementById("formResult").innerHTML="My super vilain name is "+name+". I have the following super power: "+power+". My motivation is "+motivation+". And I have a secret plan to conquer the world: "+plan+".";
}


