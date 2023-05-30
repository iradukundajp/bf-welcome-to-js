

'use strict';

console.log('--- in execution phase ---');



/*
  environment: chrome 
  name: SyntaxError: 
  message: Unexpected number
  
  location: line 24

  life cycle: Execution phase

  the mistake: Using a number as  a variable.

  the fix(es): remane the variable 3  with a good type, for example 'three '.
*/


const three = 'three';


