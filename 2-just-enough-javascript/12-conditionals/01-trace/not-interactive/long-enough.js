'use strict';

let word = 'frog';
// let word = 'be';
// let word = 'sea';
// let word = 'frog';
// let word = 'apple';
// let word = 'banana';

let message;
if (word.length <= 2) {
  message = 'a short word';
} else if (word.length < 3) {
  // why is this path unreachable? bacause it is between 2 and 3 and there is no decimals in string
  message = 'unreachable path!';
} else if (word.length < 5) {
  message = 'a perfect word';
} else {
  message = 'a long word';
}

console.log(message);
