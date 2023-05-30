// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:

  name: SyntaxError: 
  message: unexpected token '+' 

  location: line 32

  life cycle: Creation error

  the mistake: Incorrect syntax in the variable declaration of 'repeated'.

  the fix(es): replace the '+' operator with the '=' operator 
*/

whenFormDataChanges('user-data', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated = text + '\n' + text;

  // --- display the repeated text ---

  displayString('doubled-input', repeated);
});
