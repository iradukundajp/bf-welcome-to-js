'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- prompt('do whatever you want')

/* ---   ?   --- */

// message <- 'your input is '

// IF: input === null
/* ---   ?   --- */
//   message <- message + 'null'
// ELSE:
/* ---   ?   --- */
//   maybeNot <- ''
//   IF: input.length !== 0
/* ---   ?   --- */
//     maybeNot <- 'not '
//   :END IF
//   message <- message + maybeNot + 'empty'
// :END IF

/* ---   ?   --- */

// alert(message)

let input = prompt('do whatever you want ');
let message = 'Your input  is ';
let maybeNot = '';
if (input === null) {
  message = message + 'null';
} else if (input.length !== 0) {
  maybeNot = 'not ';
  message = message + maybeNot + 'empty';
} else {
  message = message + maybeNot + 'empty';
}
alert(message);
