/*function number()
{
    console.log("here is the num");
   let submited =  document.getElementById('submitBtn');
 
   submited.addEventListener('click', ( event ) =>{
    let numberAdded = getElementByClassName("fizzBuzzNumber").innerHTML;
    console.log(numberAdded);
    
   })

}*/


document.getElementById("submitBtn").addEventListener("click", function(event){
    console.log("here");
    event.preventDefault()
    console.log("here is the num on doc");
  // let submited =  document.getElementById('submitBtn');
 
   //submited.addEventListener('click', ( event ) =>{
    let numberAdded = document.getElementById("idNumber").value;
    Number(numberAdded); 
    console.log(numberAdded);
    console.log("This numberr Up"); 
    console.log(numberAdded);

    if(Number.isInteger(numberAdded))
    {
        console.log("this is  a number");
       
    }
    else{  
        console.log("Here is not a num");
    }
    
    

  
  //}
});

