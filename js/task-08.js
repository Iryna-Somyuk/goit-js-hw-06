//Обробка відправлення форми form.login-form повинна відбуватися 
// відповідно до події submit.

//Під час відправлення форми сторінка не повинна перезавантажуватися.

// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, 
// що всі поля повинні бути заповнені.

// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, 
// де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. 
// Для доступу до елементів форми використовуй властивість elements.

// Виведи об'єкт із введеними даними в консоль і очисти значення полів 
// форми методом reset.

 const form = document.querySelector('.login-form');
 form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     const emailEl = event.currentTarget.elements.email;
//      const passwordEl = event.currentTarget.elements.password;
//     //console.log(emailEl.value);
//     //console.log(passwordEl.value);

//      if(emailEl.value && passwordEl.value !== ''){
//         const email = emailEl.value;
//         const password = passwordEl.value;
//         const formObj = {
//             email,
//             password,
//         };
//         //const formObj = new FormData(event.currentTarget);
//         console.log(formObj);
//         event.currentTarget.reset();
     
//     } else {
//         alert ("Всі поля повинні бути заповнені!");}
    
// }

function onFormSubmit(event) {
    event.preventDefault();
    const {
        email,
        password
    } = event.currentTarget.elements;
    //console.log(emailEl.value);
    //console.log(passwordEl.value);

     if(email.value && password.value !== ''){
   
    const formObj = new FormData(event.currentTarget);
      console.log(formObj);
      event.currentTarget.reset();
     
    } else {
        alert ("Всі поля повинні бути заповнені!");}
    
}