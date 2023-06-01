'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*

let message = '';
let userInput = '';

while (true) {
  userInput = prompt('Please enter something:');

  if (userInput === null) {
    alert('There is no escape!');
  } else if (userInput === '') {
    alert('No empty string allowed');
  } else {
    message = userInput;
    break;
  }
}

let newMessage = '';

for (let i = 0; i < message.length; i++) {
  if (i % 2 === 0) {
    newMessage += message[i].toUpperCase();
  } else {
    newMessage += message[i].toLowerCase();
  }
}

alert(newMessage);
*/

const inputStrings = ['a', 'Hello', 'HELLO', 'cheese', 'good bye', ' row a boat ', '12 Good Byes!', 'h1! Hoe gaat het?', '0 . x . 0'];

for (let input of inputStrings) {
  let newMessage = '';

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      newMessage += input[i].toUpperCase();
    } else {
      newMessage += input[i].toLowerCase();
    }
  }

  console.log(newMessage);
}
