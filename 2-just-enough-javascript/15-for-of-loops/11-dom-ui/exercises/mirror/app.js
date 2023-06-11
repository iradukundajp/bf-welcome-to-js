import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const text = readString('to-mirror');

  // --- mirror the text ---
  let reversed = ' | ';
  for (const char of text) {
    reversed = char + reversed + char;
  }

  // --- display the result ---
  displayString('output', reversed);
});
