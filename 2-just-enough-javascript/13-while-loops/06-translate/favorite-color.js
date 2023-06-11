// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// message <- 'your favorite color is '

// unconfirmed <- true

// WHILE: unconfirmed
//   input <- prompt('what is your favorite color?')
//   IF: input === null
//     alert('there is no escape')
//   ELSE:
/* ---   ?   --- */
//     confirmed <- confirm('is this correct? "' + input + '"')
//     IF: confirmed === true
//       message <- message + input
//       unconfirmed <- false
//     :END IF
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(message)
let message = 'your favorite color is ';
let unconfirmed = true;
while (unconfirmed) {
  let input = prompt('what is your favorite color?');

  if (input === null) {
    alert('there is no escape');
  } else {
    confirmed = confirm('is this correct? "' + input + '"');
    if (confirmed === true) {
      message = message + input;
      unconfirmed = false;
    }
  }
}
