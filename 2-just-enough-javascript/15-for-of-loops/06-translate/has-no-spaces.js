'use strict';

/*

  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- null

// WHILE: input === null
//   input <- prompt('enter some text, the program will check if it has any spaces')
// :END WHILE

/* ---   ?   --- */

// noSpaces <- true

// FOR: letter OF input
//   IF: letter === ' '
//     noSpaces <- false
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: noSpaces
//   message <- '"' + input + '" has no spaces'
// ELSE:
//   message <- '"' + input + '" has at least one space'
// :END IF

/* ---   ?   --- */

// alert(message)

let input = null;

while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces',
  );
}

let noSpaces = true;

for (const letter of input) {
  if (letter === ' ') {
    noSpaces = false;
  }
}

let message = '';

if (noSpaces) {
  message = '"' + input + '" has no spaces';
} else {
  message = '"' + input + '" has at least one space';
}

alert(message);
