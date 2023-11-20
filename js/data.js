import {getRandomArrayElement, getRandomInteger} from './util.js';

const PICTURES_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const AVATAR_COUNT = 6;
const MAX_MESSAGE_LENGTH = 2;

const DESCRIPTION_TEXT = [
  'В этом кадре я чувствую себя, как будто путешествую на самом деле.',
  'Мне повезло поймать этот момент на фото, это было настоящее счастье.',
  'Я не могу перестать восхищаться деталями и текстурой на этой фотографии.',
  'Смотря на это фото, я чувствую себя частью этой невероятной сцены.',
  'Это фото так ярко и четко передает момент, что я могу почувствовать его запах.',
  'Эта фотография - настоящая находка, и я горжусь, что могу ее показать.',
  'Взглянув на это фото, я понимаю, как важно замечать прекрасное в повседневности.',
  'Я чувствую, как момент на этой фотографии оживает в моей памяти.',
  'Иногда фотографии способны заставить нас пересмотреть свой взгляд на мир.',
  'Это фото - маленькое чудо, которое мне удается нести с собой.',
];

const MESSAGE_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Александра',
  'Максим',
  'Екатерина',
  'Иван',
  'Анна',
  'Дмитрий',
  'Наталья',
  'Артем',
  'Ольга',
  'Сергей',
];

const getOrdinalNumber = () => {
  let currentId = 0;
  return () => ++currentId;
};

const getPictureId = getOrdinalNumber();
const getUrlId = getOrdinalNumber();
const getCommentId = getOrdinalNumber();

const getRandomComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: Array.from({length: getRandomInteger(1, MAX_MESSAGE_LENGTH)}, () => getRandomArrayElement(MESSAGE_TEXT)).join(' '),
  name: getRandomArrayElement(NAMES),
});

const createPicturePost = () => ({
  id: getPictureId(),
  url: `photos/${getUrlId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION_TEXT),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, () => getRandomComment()),
});

const createPicturePosts = () => Array.from({length: PICTURES_COUNT}, () => createPicturePost());

export {createPicturePosts};
