const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');

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


