

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome
  name: syntaxError: 
  message: Unexpected token '{'
  
  location: line 26

  life cycle: Execution phase

  the mistake: Incorrect syntax in the 'else' statement.

  the fix(es): Use 'else if' instead of 'else' to add multiple conditions and add a opening tag '{' to it .
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


