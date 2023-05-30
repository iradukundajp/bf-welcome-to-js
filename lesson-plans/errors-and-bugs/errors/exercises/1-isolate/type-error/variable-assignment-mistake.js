

'use strict';

console.log('--- in execution phase ---');


/*
  environment:
  name: SyntaxError
  message: invalid left-hand side in assignment
  
  location: line 25

  life cycle: Execution phase

  the mistake: trying to assign a value to the  a boolean 'true' is not allowed.

  the fix(es): Assign the value of 'isHappy' to a different variable.
*/


let isHappy = false;

let Paul = isHappy;


