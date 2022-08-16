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