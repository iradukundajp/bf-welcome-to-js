'use strict';

let letters = 'a b c d ';

let index = 0;
while (index < letters.length) {
  if (index % 2 === 0) console.log("'" + letters[index] + "'");
  index++;
}
