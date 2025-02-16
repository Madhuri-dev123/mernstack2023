// settimeout and settime intervals

  console.log("start cooking");
  setTimeout(()=>{
   console.log("deish is ready")
  },3000);
  console.log("meanwhile i will see table menu")

  //setInterval(()=>{
  // console.log("remainder:stir the pot");
  //},2000)

  function greetusers(name){
    console.log("hello,${name}!");
  }

  // callback hell

  // promises ; is an objects , async operations

   function fechdata(){
    fetch("https://fakestoreapi.com/products")// load call api network
    
    .then(response=>{
      if(!response.ok){
        throw new Error ('network error 440')
      }
      return response.json();
    })
    .then(data=>{
      console.log(data)
    })
    .catch(error=>{
      console.error("error infetching",error);
    })
    // //make the call
   }
   fechdata();

   //  promises synstax 