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

const isMeetingWithinWorkday = (startWorkday, endWorkday, startMeeting, durationMinutes) => {
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const startWorkdayMinutes = timeToMinutes(startWorkday);
  const endWorkdayMinutes = timeToMinutes(endWorkday);
  const startMeetingMinutes = timeToMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + durationMinutes;
  return startWorkdayMinutes <= startMeetingMinutes && endMeetingMinutes <= endWorkdayMinutes;
};
isMeetingWithinWorkday('8:00', '17:30', '08:00', 900);
