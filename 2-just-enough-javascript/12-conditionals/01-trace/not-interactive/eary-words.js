'use strict';
let input = prompt('Please Enter something');
let word = input;
// let word = 'a';
// let word = 'be';
// let word = 'eat';
// let word = 'ear';
// let word = 'peat';
// let word = 'bear';
// let word = 'early';
// let word = 'burly';
// let word = 'pearly';
// let word = 'poultry';

let message;
if (word.length >= 3) {
  if (word.includes('ear')) {
    message = alert('eary word!');
  } else {
    message = alert('not eary :(');
  }
} else {
  message = alert('word is too short');
}

