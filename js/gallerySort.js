import {renderPictures} from './renderPictures.js';
import {debounce, getUniqueRandomElementsArray} from './util.js';

const AMOUNT_RANDOM_PICTURES = 10;

const filterSection = document.querySelector('.img-filters');
const defaultfFilter = document.querySelector('#filter-default');
const randomFilter = document.querySelector('#filter-random');
const discussedFilter = document.querySelector('#filter-discussed');

const comparePictureByComments = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;
const getSortedPictures = (pictures) => pictures.slice().sort(comparePictureByComments);

const removePictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
};

const changePictures = (array, button) => {
  removePictures();
  const active = document.querySelector('.img-filters__button--active');
  active.classList.remove('img-filters__button--active');
  renderPictures(array);
  button.classList.add('img-filters__button--active');
};

const showFilteredPhotos = (picture) => {
  renderPictures(picture);
  filterSection.classList.remove('img-filters--inactive');
  defaultfFilter.addEventListener('click', debounce(() => {
    changePictures(picture, defaultfFilter);
  }));
  randomFilter.addEventListener('click', debounce(() => {
    changePictures(getUniqueRandomElementsArray(picture, AMOUNT_RANDOM_PICTURES), randomFilter);
  }));
  discussedFilter.addEventListener('click', debounce(() => {
    changePictures(getSortedPictures(picture), discussedFilter);
  }));
};

export {showFilteredPhotos};
