// #todo

'use strict';

/* Be Curious


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */

// input <- null
// WHILE: input === null
//   input <- prompt('enter something, it will become curious')
// :END WHILE

/* ---  ?  --- */

// output <- input
// IF: input[input.length - 1] !== '?'
//   output <- output + '?'
// :END IF

/* ---  ?  --- */

// alert(output)
let input = null;
while (input === null) {
  input = prompt('Enter something, it will become curious');
}
let output;
output = input;
if (input[input.length - 1] !== '?') {
  output += '?';
}

alert(output);
