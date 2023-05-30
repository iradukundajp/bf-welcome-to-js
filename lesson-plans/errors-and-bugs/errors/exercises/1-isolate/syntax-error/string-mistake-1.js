

'use strict';

console.log('--- in execution phase ---');


/*
  environment:
  name: SyntaxError
  message: valid or unexpected token
  
  location: line 22

  life cycle: Execution phase

  the mistake: The string assigned to the 'a' variable contains a line break without using the appropriate syntax.

  the fix(es): Use a backslash (\) at the end of the first line.
*/

const a = 'this is \
two lines';


