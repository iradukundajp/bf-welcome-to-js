'use strict';

console.log('--- in execution phase ---');

/*
  environment:
  name: SyntaxError: 
  message: Identifier 'tree' has already been declared
  
  location: line 21

  life cycle: Execution phase

  the mistake: Declaring the variable 'tree' twice.

  the fix(es): Remove the duplicate declaration of 'tree' to avoid redeclaring it twice by renaming with different names.
*/

let tree1 = 'oak';

let tree2 = 'birch';
