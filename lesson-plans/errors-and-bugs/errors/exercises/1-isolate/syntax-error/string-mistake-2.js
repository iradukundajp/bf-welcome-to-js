

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome 
  name: SyntaxError: 
  message: Unexpected string

  location: 22

  life cycle: execution phase

  the mistake: incorrect quotes in the string assignment.

  the fix(es): skip  the inner single quotes using backslashes (\).
*/

const quotesInQuotes = 'remind yourself \' i can do this! \' at least once a day';

console.log(quotesInQuotes);
