// #todo

'use strict';
/* Execution Paths

  try predicting how this program  works just by reading the code
    how many prompts are there? 
     => There are three prompts in this game.
    how many choices does each user have?
     => Each user has one choice for each prompt.
    how many paths are there total? 
     => There are four paths in total: 
      1. User enters an adjective only.
      2. User enters a noun only.
      3. User enters a verb only.
      4. User enters all three inputs (adjective, noun, and verb).

*/
/* -- declare program variables -- */

let madlib = '';

let noun = null;
let adjective = null;
let verb = null;

/* -- fill in the adjective -- */

while (adjective === null) {
  adjective = prompt('enter an adjective');
}

madlib = 'the ' + adjective;

/* -- fill in the noun -- */

while (noun === null) {
  noun = prompt('enter a noun');
}

madlib = madlib + ' ' + noun;

/* -- fill in the verb -- */

while (verb === null) {
  verb = prompt('enter a verb');
}

madlib = madlib + ' likes to ' + verb;

/* -- make the user laugh -- */

alert(madlib);
