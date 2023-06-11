'use strict';

let language = ' j a v a s c r i p t';

let logIt = '';

for (let char of language) {
  if (char === ' ') {
    continue;
  }
  logIt += char;
  console.log(char);
}
