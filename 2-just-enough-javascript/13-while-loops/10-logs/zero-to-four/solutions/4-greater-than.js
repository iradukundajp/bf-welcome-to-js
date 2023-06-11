'use strict';

let step = 4;
let stringify = '';
while (step > 0) {
  stringify += step;
  step--;
}

const reverse = stringify.split('').reverse();

for (const char of reverse) {
  console.log(char);
}
