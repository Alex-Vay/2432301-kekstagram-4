const compareLineLength = (line, maxLength) => (line.length <= maxLength);
compareLineLength('проверяемая строка', 20);

const checkPalindrome = (line) => {
  const normalizedLine = line.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < normalizedLine.length/2; i++) {
    if (normalizedLine[i] !== normalizedLine[normalizedLine.length-1-i]) {
      return false;
    }
  }
  return true;
};
checkPalindrome('топот');

const getNumberFromLine = (line) => {
  let collectedNumber = '';
  line = line.toString();
  for (let i = 0; i < line.length; i++) {
    if (!Number.isNaN(parseInt(line[i], 10))) {
      collectedNumber += line[i];
    }
  }
  return parseInt(collectedNumber, 10);
};
getNumberFromLine('ECMAScript 2022');
