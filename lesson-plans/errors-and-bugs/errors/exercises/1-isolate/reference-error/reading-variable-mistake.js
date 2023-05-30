'use strict';

console.log('--- in execution phase ---');

/*
 environment:chrome 
  name: ferenceError
  message: Cannot access 'tomatoes' before initialization
  
  location: line 19

  life cycle: Execution phase

  the mistake: Accessing the variable 'tomatoes' before it is initialized.

  the fix(es): Declare the variable 'tomatoes' using  'let' or 'const' before accessing it.
*/
let tomatoes = 'fresh';
console.log(tomatoes);


