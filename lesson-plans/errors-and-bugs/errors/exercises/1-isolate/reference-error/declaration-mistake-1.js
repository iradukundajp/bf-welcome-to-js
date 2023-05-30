'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: Reference error 
  message: Cannot assign to undeclared variable 'welf'

  location: line 20

  life cycle: Creation phase

  the mistake: The variable 'welf' is assigned a value without being declared.

  the fix(es): Declare the variable 'welf' using let before assigning a value to it.
*/

let welf = 'ingrad';

console.log(welf);




