/* javascript; is a synchronous language
var num = 30 ;
console.log(num)
var num = 20 ;
console.log(num)

var num1 = 50;
function print(){
    var square = num1*num1;
    console.log(square)
}
console.log(num)
print()*/

//hoisting ; all the declarations going to the top 
//console.log(a);
//var a =20; // intialization
//console.log(a)

// let variable is can't re-declare values and 
// can do resgined the values  .
//let is maximum block scope and function scope.
//if(true){
    //let x = 10;
   // console.log(x);
//}
//console.log(x)//illegal

// temporal dead zone 
//console.log(b);
// let b=3;  


// const ; can't re-declare and re-asigened a value
 //const name = "madhuri";
 //
 // const name ="vineela"
  
  const person = {name:"madhuri"};
  person.name = "madhuri";
  console.log(person.name);