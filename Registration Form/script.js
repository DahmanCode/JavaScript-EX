/* 
  Exercise 01
  -----------
  Add a label to each of the input fields: username, password, confirm password
*/

document.getElementById('username')
  .insertAdjacentHTML('beforebegin','<lable for="username">Username: </lable>')
document.getElementById('password')
  .insertAdjacentHTML('beforebegin','<lable for="password">Password: </lable>')
document.getElementById('confirmPassword')
  .insertAdjacentHTML('beforebegin','<lable for="confirmPassword">Confirm Password: </lable>')

  /* 
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the  entry if it does not have any text entered.
*/

const checkInput = (event) => {
  const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'));
  if (event.target.value ==='' && !errorElement.length) {
    event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Required</span>')
  }

  if(errorElement && event.target.value!== '') {
    errorElement.forEach(elem => elem.remove());
  }
};

document.getElementById('username')
  .addEventListener('blur', checkInput);
document.getElementById('password')
  .addEventListener('blur', checkInput);
document.getElementById('confirmPassword')
  .addEventListener('blur', checkInput);

