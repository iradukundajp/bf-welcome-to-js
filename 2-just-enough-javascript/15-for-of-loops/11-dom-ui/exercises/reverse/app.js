import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const phrase = readString('to-reverse');

  // --- reverse this ---
  let reversed = phrase.split('').reverse().join('');

  // --- display the result ---
  displayString('output', reversed);
});
