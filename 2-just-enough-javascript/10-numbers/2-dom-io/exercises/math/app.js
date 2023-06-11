// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const num1 = readNumber('left-num');
  const num2 = readNumber('right-num');
  console.log(num1);
  console.log(num1);

  // --- do the math ---
  const addition = `${num1} + ${num2} === ${num1 + num2}`;
  const substraction = `${num1} - ${num2} === ${num1 - num2}`;
  const multiplication = `${num1} *  ${num2} === ${num1 * num2}`;
  const division = `${num1} +  ${num2} === ${num1 / num2}`;
  const modulus = `${num1} %  ${num2} === ${num1 % num2}`;
  // --- create a message
  const message = `${addition}\n${substraction}\n${multiplication}\n${division}\n${modulus}`;
  // --- display the message ---
  displayString('sum', message);
});

// __ + __ === -3
// __ - __ === 1
// __ * __ === 2
// __ / __ === 0.5
// __ % __ === -1
