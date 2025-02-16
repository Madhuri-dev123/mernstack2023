
// 1. functions
/* 
function add (a,b){
    return a+b;
}
const results = add(3,7);
console.log(results);
 */

// 2. anonymous function ; functions can be defined as a expresions which can be assiged a variable

   //let greet = function(name)
   //{
   // console.log(name)
//}
//greet("madhuri");

// 3. arrow functions => shoter syntax 

   //const greet = name =>console.log(name);
   //greet("dev");

//4. higher order functions 
   //1. map(); each will over an itrating new array
// 2. filter()
//3.reduce
// thisthree are arry methods

  const numbers = [1,2,3,4,5,6,7]
  const double = numbers.map(item=>item*2);
  console.log(double);

  // 2. filter ; using like a call back function 
    const array = [ 22,13,14,15,16,29,16];
    const even = array.filter(item1=>item1%2==0);
    console.log(even)

    const students = [
              {name:"madhuri", grade:96},
              {name:"thanuja",grade:88},
              {name:"anjula",grade:90}
    ];
      const grades = students.filter(item2=>item2.grade>=90)
      console.log(grades)

// 3. reduce ; 
      const number= [1,2,3,4,5]
      const sum = number.reduce(function(acc,item3){
         return acc + item3;

      },0);
      console.log(sum)





 