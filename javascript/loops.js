//let students = ["srinu","devagya","surindhra","rohith"]
//for( let i=0;i<students.length;i++){
  //console.log("hii "+students[i]+"!");
//}

// while loop
// one layman count sheeps before sleping sheeps
//let sheeps = 1;
//while(sheeps<=5){
  //console.log("counting sheeps:"+sheeps)
  //sheeps++;
//}


//3.do-while-loop  ; fist check the condition if it's true will continue other wise only one time will bw exicute the code
    // example; to check the candys in the box
//do{
  // console.log("eating a candy");
   ///candies--;
//}
//while(candies>0);

// 4.for of
let arrays = ["apple","dragen","guva","anjine"]
for(let fruit of arrays){
  console.log("i like"+fruit);
}

// 5.  for in

let users = {
  title:"srikanth",
  title:"appalapati",
  author:"rahu",
  year :"2024"
}
for(let key in users){
  console.log(key+";"+users[key])
}

//5. break and  continue
    for(let i=0;i<=5;i++)
{
  if(i===3)
  {
    //break;
    continue;
  }
  console.log(i)
}