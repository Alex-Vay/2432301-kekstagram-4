const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

export{getRandomInteger, getRandomArrayElement, isEscapeKey};
