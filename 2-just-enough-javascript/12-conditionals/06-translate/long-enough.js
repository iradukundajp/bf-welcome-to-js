'use strict';
/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- prompt('enter anything longer than 5 characters')

// IF: input !== null
//   IF: input.length < 5
/* ---   ?   --- */
//     message <- 'too short'
//   ELSE: IF: input.length > 5
/* ---   ?   --- */
//     message <- 'long enough'
//   ELSE:
/* ---   ?   --- */
//     message <- 'exactly 5!'
//   :END IF
// ELSE:
/* ---   ?   --- */
//   message <- 'you canceled :('
// :END IF

/* ---   ?   --- */

// alert(message)
let input = prompt('enter anyhing longer than 5 characters');
let message;
if (input !== null) {
  if (input.length < 5) {
    message = 'too short';
  } else if (input.length > 5) {
    message = 'too long';
  } else if (input.length === 5) {
    message = 'exactly 5';
  }
} else {
  message = 'you canceled :(';
}

alert(message);
