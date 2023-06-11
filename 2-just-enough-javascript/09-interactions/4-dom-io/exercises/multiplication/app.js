import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  let num1 = readNumber('left');
  let num2 = readNumber('right');
  // --- multiply the numbers ---
  let product = num1 * num2;
  // --- create a message ---
  let message = `${num1} * ${num2} === ${product}`;
  // --- display the message ---
  displayString('product', message);
});
