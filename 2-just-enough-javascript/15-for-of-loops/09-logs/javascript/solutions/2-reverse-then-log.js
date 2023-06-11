'use strict';

let backwards = 'tpircsavaj';

// use a for-of loop to reverse `backwards`
//  assign the reversed string to `language`
let language = '';
for (const char of backwards) {
  language = char + language;
}

// log each character in `language`
for (const char of language) {
  console.log(char);
}
