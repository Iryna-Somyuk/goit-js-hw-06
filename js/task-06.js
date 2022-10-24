const inputTxt = document.querySelector("#validation-input");
inputTxt.addEventListener('blur', () => {
    inputTxt.classList.remove('invalid');
    if (inputTxt.value.length === Number(inputTxt.getAttribute("data-length"))) {
        inputTxt.classList.add('valid');
        console.log(`Ok!`)
    } else{
        inputTxt.classList.add('invalid'); 
        console.log(`Please enter 6 symbols`);
    }    
 });