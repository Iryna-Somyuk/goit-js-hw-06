const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     const {
//         email,
//         password
//     } = event.currentTarget.elements;
//     //console.log(emailEl.value);
//     //console.log(passwordEl.value);

//      if(email.value && password.value !== ''){
   
//     const formObj = new FormData(event.currentTarget);
//       console.log(formObj);
//       event.currentTarget.reset();
     
//     } else {
//         alert ("Всі поля повинні бути заповнені!");}
    
// }

function onFormSubmit(event) {
    event.preventDefault();
    const emailEl = event.currentTarget.elements.email;
     const passwordEl = event.currentTarget.elements.password;
    //console.log(emailEl.value);
    //console.log(passwordEl.value);

     if(emailEl.value && passwordEl.value !== ''){
        const email = emailEl.value;
        const password = passwordEl.value;
        const formObj = {
            email,
            password,
        };
        console.log(formObj);
        event.currentTarget.reset();
     
    } else {
        alert ("Всі поля повинні бути заповнені!");}
    
}