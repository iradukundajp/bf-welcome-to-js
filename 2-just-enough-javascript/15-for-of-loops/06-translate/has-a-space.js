'use strict';

/*


  Data In: any text

  Data Out:  notify the user if the input has a space or not

  Test Cases:
  

*/

/* ---   ?   --- */

// input <- null

// WHILE: input === null
//   input <- prompt('enter some text, the program will check if it has any spaces')
// :END WHILE

/* ---   ?   --- */

// hasASpace <- false

// FOR: char OF input
//   IF: char === ' '
//     hasASpace <- true
//   :END IF
// :END FOR-OF

/* ---   ?   --- */

// message <- ''

// IF: hasASpace
//   message <- '"' + input + '" has at least one space'
// ELSE:
//   message <- '"' + input + '" does not have any spaces'
// :END IF

/* ---   ?   --- */

// alert(message)

let input = null;

while (input === null) {
  input = prompt(
    'enter some text, the program will check if it has any spaces',
  );
}

let hasASpace = false;

for (const char of input) {
  if (char === ' ') {
    hasASpace = true;
  }
}

let message = '';

if (hasASpace) {
  message = '"' + input + '" has at least one space';
} else {
  message = '"' + input + '" does not have any spaces';
}

alert(message);
