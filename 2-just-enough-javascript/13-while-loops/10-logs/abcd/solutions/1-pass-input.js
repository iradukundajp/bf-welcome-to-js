'use strict';

let input = '';
while (input !== null) {
  input = prompt('a, b, c, d');

  if (input) {
    const newInput = input.split(',');
    for (const char of newInput) {
      console.log("'" + char + "'");
    }
  }
  break;
}