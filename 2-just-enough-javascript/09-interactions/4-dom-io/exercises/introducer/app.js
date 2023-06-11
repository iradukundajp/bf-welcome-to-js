// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let firstName = readString('fn');
  let lastName = readString('ln');
  console.log();
  console.log();
  // --- create a message ---
  let message = 'Hello, my name is ' + firstName + ' ' + lastName;

  // --- display the message ---
  displayString('greet-field', message);
});
