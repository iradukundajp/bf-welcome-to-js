'use strict';

let language = 'j a v a s c r i p t ';

let logIt = '';

for (const char of language) {
  if (char !== ' ') {
    logIt += char;
  }
}

for (const char of logIt) {
  console.log(char);
}
