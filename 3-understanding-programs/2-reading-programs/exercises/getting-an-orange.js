// #todo

'use strict';

/* -- 1. get an orange --

  - how many control flow structures are there in this goal?
     => There are three control flow structures in this goal: while loop, if statement, and if-else statement.
  - describe the input a user needs to give to exit this loop
     => The user needs to give any input other than 'orange' to exit the loop.
  - how many paths are there through this Input/Output (I/O) loop?
     => There are two paths through this Input/Output (I/O) loop: input is 'orange' (loop exits) and input is anything else (loop continues).
*/


let theOrange = '';

while (theOrange === '') {
  /* -- 1.a gather user input -- */

  const input = prompt('give me an orange, lower or upper case');

  /* -- 1.b check if the user canceled --
    - which user action will pass this condition?
       => Clicking the cancel button on the prompt will pass this condition.
  */

  if (input === null) {
    continue;
  }

  /* -- 1.c check if the user's input is an orange --
    - what is the scope for `theOrange`?
       => The scope for `theOrange` is in the while loop.
    - what is the scope for `input`?
       => The scope for `input` is in the while loop as well.
  */



  if (input.toLowerCase() === 'orange') {
    theOrange = input;
  }
}

/* -- 2. describe the orange --

  - how many comparisons are there in this goal?
     => There are two comparisons in this goal: theOrange === 'orange' and theOrange === 'ORANGE'.
  - how many possible descriptions are there?
     => There are three possible descriptions: 'small' if theOrange is 'orange', 'big' if theOrange is 'ORANGE', and 'small and big' for any other value of theOrange.
  - how many paths are there through this conditional?
     => There are three paths through this conditional: theOrange is 'orange', theOrange is 'ORANGE', and any other value of theOrange.
  - which variables are used in this goal, where were they declared?
     => The variables used in this goal are `theOrange` and `description`. `theOrange` was declared before the while loop, and `description` was declared before the if-else statement.
*/

let description = '';

if (theOrange === 'orange') {
  description = 'small';
} else if (theOrange === 'ORANGE') {
  description = 'big';
} else {
  description = 'small and big';
}

/* -- 3. alert the description for the user -- */

alert(theOrange + ' is a ' + description + ' orange');
