import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let likeCats = readBoolean('likes-cats');
  let isAllergic = readBoolean('is-allergic');
  let ownACat = readBoolean('owns-one');

  // --- generate good advice ---
  let advice = '';
  if (likeCats && isAllergic && ownACat) {
    advice = 'replace your cat with a stuffed animal';
  } else if (likeCats && isAllergic && !ownACat) {
    advice = 'make a friend who has a cat';
  } else if (likeCats && !isAllergic && !ownACat) {
    advice = 'get a cat';
  } else if (!likeCats && isAllergic && ownACat) {
    advice = 'rethink your life choices';
  } else if (!likeCats && isAllergic && !ownACat) {
    advice = 'you are doing great';
  } else if (!likeCats && !isAllergic && ownACat) {
    advice = 'you could be doing worse';
  } else {
    advice = 'you are doing great';
  }
  // --- display advice for the user ---
  displayString('custom-advice', advice);
});
