import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const breaks = readString('pyramid-bricks');

  // --- build a pyramid ---
  let pyramid = '';
  for (let i = 0; i <= breaks.length; i++) {
    pyramid += breaks.substr(0, i) + '\n';
  }

  // --- display the pyramid ---
  displayString('out', pyramid);
});
