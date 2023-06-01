// #todo

'use strict';

/* -- gather user input -- */

let toBeFrogged = null;

while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

/* -- generate a new string -- */

let frogged = '';

for (const character of toBeFrogged) {
  /* -- append to new string
    - can you think of a way to combine these two conditionals?
     => yes, i can use += sign
  -- */

  if (character === 'f') {
    frogged += 'frog';
    continue;
  }
  if (character === 'F') {
    frogged += 'FROG';
    continue;
  }
  frogged += character;
}

/* -- communicate the new string -- */

alert(frogged);
