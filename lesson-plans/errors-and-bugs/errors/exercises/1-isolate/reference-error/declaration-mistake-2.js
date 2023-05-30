'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ferenceError
  message: Cannot assign to undeclared variable 'isValidUserName'

  location: line 24

  life cycle: Execution phase

  the mistake: The variable 'isValidUserName' is assigned a value without being declared.

  the fix(es): Declare the variable 'isValidUserName' using let before assigning a value to it.
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  let isValidUserName = true;
}

let isValidUserName;

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);


