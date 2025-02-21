// Write a program to check a number is divisible by 7 or not.
 let a = + prompt()
   if(a%7){
    console.log("devible by 7")
   }
   else{
    console.log("not devisble by 7")
   }

//let n = 5; // Number of rows

for (let i = 1; i <= n; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}