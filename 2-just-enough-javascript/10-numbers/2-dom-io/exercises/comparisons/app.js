// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let num1 = readNumber('left-num');
  console.log(num1);
  let num2 = readNumber('right-num');
  console.log(num2);
  // --- compare the numbers ---
  const greaterThan = `${num1} > ${num2} ---> ${num1 > num2}`;
  const greaterThanOrEqual = `${num1} >= ${num2} ---> ${num1 >= num2}`;
  const strictlyEqual = `${num1} === ${num2} ---> ${num1 === num2}`;
  const lessOrEqual = `${num1} <= ${num2} ---> ${num1 <= num2}`;
  const lessThan = `${num1} < ${num2} ---> ${num1 < num2}`;
  // --- create a message
  const message = `${greaterThan}\n${greaterThanOrEqual}\n${strictlyEqual}\n${lessOrEqual}\n${lessThan}`;
  // --- display the message ---
  displayString('compared', message);
});
