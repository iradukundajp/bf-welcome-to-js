import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  //debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let text = readString('text');
  let character = readString('character');
  let index = readNumber('i');

  // --- check the index ---
  let message = '';
  //check if character exists
  if (character) {
    if (text[index] === character) {
      message = 'yes';
    } else {
      message = 'no';
    }
  } else {
    message = 'oops!  you entered fewer than one character';
  }

  // --- display the search results ---
  displayString('search-result', message);
});
