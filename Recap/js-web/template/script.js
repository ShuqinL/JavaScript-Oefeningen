
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


//

