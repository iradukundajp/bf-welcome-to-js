// #todo

'use strict';

/* -- 1. show the instructions --

  - are there any variables used in this goal? => No.
*/

alert(`Guess 3 phrases in 3 tries

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    you will get one point for each correct guess
`);

/* -- 2. gather player 1's phrases --

  - what types can be assigned to the `phrase` variables? 
   => The `phrase` variables can hold any type of value entered by the player.
  - is it possible that all 3 `phrase` variables have the same value? 
   => Yes, it is possible for all 3 `phrase` variables to have the same value.
*/

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

/* -- 3. player 2 tries to remember the phrases --

  - can you know what values will assigned to the `guess` variables without running the program? 
   => No, the values assigned to the `guess` variables are not known without running the program.
  - what happens if a user cancels all of their guesses? 
   => If a user cancels all of their guesses, the `guess` variables will have a value of `null`.
  - how is this goal of the program different from goal 2? 
   => This goal involves Player 2 guessing the phrases entered by Player 1, while goal 2 involves Player 1 entering the phrases.
*/

alert(
  'Player 2, remember these:' +
    '\n1. "' +
    phrase1 +
    '"' +
    '\n2. "' +
    phrase2 +
    '"' +
    '\n3. "' +
    phrase3 +
    '"',
);

const guess1 = prompt('Player 2, guess the first phrase:');
const guess2 = prompt('Player 2, guess the second phrase:');
const guess3 = prompt('Player 2, guess the third phrase:');

/* -- 4. player 2's score is calculated --

  - which operator is used in the conditional checks? 
   => The inequality operator (`!==`) is used in the conditional checks.
  - what are the possible scores a user can earn? 
   => The possible scores a user can earn are 0, 1, 2, or 3.
  - what is the scope of the `points` variable? 
   => The scope of the `points` variable is within the block of code inside the `if` statement.
  - is the `points` variable used in any other parts of the program? 
   => No, the `points` variable is not used in any other parts of the program.
*/

let points = 3;

if (guess1 !== phrase1) {
  points = points - 1;
}

if (guess2 !== phrase2) {
  points = points - 1;
}

if (guess3 !== phrase3) {
  points = points - 1;
}

/* -- 5. show player 2's final score -- */

alert("player 2's score: " + points);
