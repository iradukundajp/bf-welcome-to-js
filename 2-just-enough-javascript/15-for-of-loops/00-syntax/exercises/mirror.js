'use strict';

// ::::: don't forget to trace the program! :::::

let word = 'hello';

let mirrored = '|';

for (let char of word) {
  mirrored = char + mirrored + char;
}

console.log(word + ' -> ' + mirrored);
