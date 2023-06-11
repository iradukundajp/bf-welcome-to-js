import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-field', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const character = readString('character');
  const phrase = readString('phrase');

  // --- remove the character if there is only one ---
  let newPhrase = '';
  if (character) {
    for (const char of phrase) {
      if (char !== character) {
        newPhrase += char;
      }
    }
  } else {
    newPhrase = 'you can only skip one character at a time';
  }

  // --- display the result ---
  displayString('filtered', newPhrase);
});
