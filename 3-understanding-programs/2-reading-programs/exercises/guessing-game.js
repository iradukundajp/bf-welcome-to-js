// #todo

'use strict';

/* Execution Paths

  try predicting how this game works just by reading the code
    how many prompts are there?
     => There are 4 prompts in the code
    how many choices does each user have?
     =>Each user has multiple choices throughout the game:
     The initial prompt offers three choices: "play", "-h" (for instructions), or escape (to exit the game).
      - Player 1 has the choice to enter a secret phrase or exit the game.
      - Player 1 has the choice to enter a clue or exit the game.
      - Player 2 has the choice to guess the secret phrase or exit the game.
      - Player 2 has the choice to reveal the secret or not.
    how many paths are there total?
    => There are several paths based on user input and different conditions:

      - If the user inputs "-h", the game displays instructions.
      - If the user inputs "play", the game proceeds with the gameplay.
      - If any user chooses to exit the game, it terminates.
      - If Player 2 guesses the correct secret phrase, Player 2 wins.
      - If Player 2 guesses incorrectly, Player 1 wins.
      - If Player 2 chooses to reveal the secret, the game displays the secret phrase.
    how would you draw a diagram of this game?

                    +-------+
                | Start |
                +-------+
                    |
  +-----------------+------------------+
  |                Prompt               |
  +-----------------+------------------+
                    |
 +------------------+------------------+
 |              userInput              |
 +------------------+------------------+
                    |
     +---------+----+----+---------+
     |   "-h"  | "play" |  escape  |
     +---------+--------+----------+
                    |
       +-----------+--------------+
       |        Display           |
       |      Instructions        |
       +-----------+--------------+
                    |
   +--------------+-----------------+
   |   Player 1   |   Exit Game     |
   +--------------+-----------------+
                    |
   +--------------+-----------------+
   |   Player 1   |   Exit Game     |
   |   Enter      |                 |
   | Secret Phrase|                 |
   +--------------+-----------------+
                    |
   +--------------+-----------------+
   |   Player 1   |   Exit Game     |
   |   Enter      |                 |
   |    Clue      |                 |
   +--------------+-----------------+
                    |
   +--------------+-----------------+
   |   Player 1   |   Exit Game     |
   |   Turn Over  |                 |
   +--------------+-----------------+
                    |
   +--------------+-----------------+
   |   Player 2   |   Exit Game     |
   |   Guess      |                 |
   +--------------+-----------------+
                    |
   +--------------+-----------------+
   |   Player 2   |   Exit Game     |
   |   Correct    |                 |
   +--------------+-----------------+
                    |
   +--------------+-----------------+
   |   Player 1   |   Exit Game     |
   |    Win       |                 |
   +--------------+-----------------+
                    |
   +--------------+-----------------+
   |   Player 2   |   Exit Game     |
   |  Reveal      |                 |
   |  Secret      |                 |
   +--------------+-----------------+
                    |
   +--------------+-----------------+
   |   Game Over  |                 |
   |  Display     |                 |
   |  Winner      |                 |
   +--------------+-----------------+
                    |
                +


*/

/* -- prompt the user with their options -- */

const userInput = prompt(
  'Welcome!\n\n' +
    '"play": begin the game\n' +
    '"-h": read the instructions\n' +
    'escape: exit the game',
);

/* -- execute the user-selected path -- */

if (userInput === '-h') {
  /* -- display the game instructions -- */

  alert(
    'This is a two player game.\n\n' +
      'Player 1: enters a secret number, and then a clue.\n' +
      'Player 2: is shown the clue and must guess the number.\n\n' +
      'you can end the game at any point by canceling',
  );
} else if (userInput === 'play') {
  /* -- play the game -- */

  let winner = 'no one';

  /* -- player 1 enters the secret or exits the game -- */

  alert('Player 2: look away! hide your eyes!');

  let secretPhrase = '';
  while (secretPhrase === '') {
    secretPhrase = prompt('Player 1: enter a secret phrase');
  }

  if (secretPhrase === null) {
    /* -- player 1 exited the game -- */

    alert('good bye');
  } else {
    /* -- player 1 enters their clue or exits the game -- */

    let clue = '';
    while (clue === '') {
      clue = prompt('Player 1: enter a clue to help guess your number');
    }

    if (clue === null) {
      /* -- player 1 exited the game -- */

      alert('good bye');
    } else {
      /* -- player 1's turn is over -- */

      alert(
        'Player 1: you entered ...\n\n' +
          '- number: ' +
          secretPhrase +
          '\n' +
          '- clue: "' +
          clue +
          '"',
      );

      alert('now go get Player 2');

      /* -- player 2 guesses the secret number or exits the game -- */

      let guess = '';
      while (guess === '') {
        guess = prompt(
          'Player 2, Here is your clue:\n\n' +
            '- "' +
            clue +
            '"\n\n' +
            'what do you think the secret phrase is?',
        );
      }

      if (guess === null) {
        /* -- player 2 exited the game -- */

        alert('good bye');
      } else if (guess === secretPhrase) {
        /* --  player 2 won -- */

        winner = 'Player 2';
        alert('Congrats, you were right!\n\n');
      } else {
        /* -- player 1 won -- */

        winner = 'Player 1';

        /* -- player 2 can reveal the secret -- */

        const revealTheSecret = confirm(
          'Nope, not correct.\n\ndo you want to know the secret?',
        );

        if (revealTheSecret) {
          alert(
            'The secret was:\n\n' +
              '- ' +
              secretPhrase +
              '\n\n' +
              'thanks for playing, see ya',
          );
        } else {
          alert('better luck next time');
        }
      }
    }
  }

  /* -- announce the winner -- */

  alert('game over. the winner is: ' + winner);
} else if (userInput === null) {
  /* -- exit the game -- */

  alert('good bye');
} else {
  /* -- unknown command -- */

  alert('unknown command: "' + userInput + '"');
}
