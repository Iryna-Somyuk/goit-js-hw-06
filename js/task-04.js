const btnDecr = document.querySelector('[data-action="decrement"]');
//btnDecr.addEventListener('click', decrement);
const btnIncr = document.querySelector('[data-action="increment"]');
//btnIncr.addEventListener('click', increment);


  let counterValue = 0;

 function updateDisplay(val) {
    document.getElementById("value").innerHTML = val;
}
  
    btnIncr.addEventListener(`click`, ()=>{
        updateDisplay(counterValue += 1);
   })
    btnDecr.addEventListener('click', ()=>{
       updateDisplay(counterValue -= 1);
   });


//let counterVal = 0;

//function increment() {
    //updateDisplay(counterVal += 1);
//}

//function decrement() {
   
   // updateDisplay(counterVal -= 1);
//}

//function updateDisplay(val) {
   // document.getElementById("value").innerHTML = val;
//}