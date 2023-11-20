import {isEscapeKey} from './util.js';

const NUMBER_LOADED_COMMENTS = 5;
const AVATAR_WIDTH = 35;
const AVATAR_HEIGHT = 35;

const fullsizePicture = document.querySelector('.big-picture');
const body = document.body;
const closeButton = fullsizePicture.querySelector('#picture-cancel');
const loaderButton = fullsizePicture.querySelector('.comments-loader');
const currentComments = fullsizePicture.querySelector('.current-comments');

const createComment = ({avatar, message, name}) => {
  const comment = document.createElement('li');
  const commentPicture = document.createElement('img');
  const p = document.createElement('p');
  commentPicture.classList.add('social__picture');
  commentPicture.src = avatar;
  commentPicture.alt = name;
  commentPicture.width = AVATAR_WIDTH;
  commentPicture.height = AVATAR_HEIGHT;
  p.classList.add('social__text');
  p.textContent = message;
  comment.classList.add('social__comment');
  comment.classList.add('hidden');
  comment.append(commentPicture);
  comment.append(p);
  return comment;
};

const fillComments = (comments) => {
  const commentsContainer = fullsizePicture.querySelector('.social__comments');
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const newComment = createComment(comment);
    fragment.append(newComment);
  });
  commentsContainer.innerHTML = '';
  commentsContainer.append(fragment);
};

const closePicture = () => {
  body.classList.remove('modal-open');
  fullsizePicture.classList.add('hidden');
  document.addEventListener('keydown', closeByEscape);
};

function closeByEscape() { //function должна использоваться как бы совместно с closePicture, иначе они закольцуются, то есть нужно (всплытие)
  if (isEscapeKey) {
    closePicture();
  }
}

const openComments = () => {
  const hiddenComments = fullsizePicture.querySelectorAll('.social__comment.hidden');
  let commentsNumber = NUMBER_LOADED_COMMENTS;
  const hiddenCommentsNumber = hiddenComments.length;
  if (hiddenCommentsNumber < NUMBER_LOADED_COMMENTS) {
    commentsNumber = hiddenCommentsNumber;
  }
  currentComments.textContent = Number(currentComments.textContent) + commentsNumber;
  for (let i = 0; i < commentsNumber; i++) {
    hiddenComments[i].classList.remove('hidden');
  }
  if (hiddenCommentsNumber - commentsNumber === 0) {
    fullsizePicture.querySelector('.comments-loader').classList.add('hidden');
  }
};

const openPicture = (picture) =>{
  body.classList.add('modal-open');
  fullsizePicture.classList.remove('hidden');
  const {url, description, likes, comments} = picture;
  fullsizePicture.querySelector('.big-picture__img img').src = url;
  fullsizePicture.querySelector('.likes-count').textContent = likes;
  fullsizePicture.querySelector('.comments-count').textContent = comments.length;
  fillComments(picture.comments);
  fullsizePicture.querySelector('.social__caption').textContent = description;
  fullsizePicture.querySelector('.comments-loader').classList.remove('hidden');
  currentComments.textContent = 0;
  openComments();
  loaderButton.addEventListener('click', openComments);
  closeButton.addEventListener('click', closePicture);
  document.addEventListener('keydown', closeByEscape);
};

export {openPicture};
