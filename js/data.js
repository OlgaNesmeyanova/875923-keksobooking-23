import {getRandomInteger, getRandomNumber, getRandomArrayElement, createRandomArray} from './util.js';

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TITLE = 'Вам может быть интересен этот вариант';
const DESCRIPTION = 'Лучший вариант в этом регионе';
const MAX_PRICE = 10000000;
const MAX_GUESTS = 25;
const MAX_ROOMS = 10;

const createAuthor = () => {
  const userId = getRandomInteger(1, 10);
  if (userId < 10) {
    return {
      avatar: `img/avatars/user0${userId}.png`,
    };
  }
  else {
    return {
      avatar: `img/avatars/user${userId}.png`,
    };
  }
};

const createLocation = () => ({
  lat: getRandomNumber (35.65000, 35.70000, 5),
  lng: getRandomNumber (139.70000, 139.80000, 5),
});

const createOffer = (location) => ({
  title: TITLE,
  address: `${location.lat}, ${location.lng}`,
  price: getRandomInteger(0, MAX_PRICE),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomInteger(1, MAX_ROOMS),
  guests: getRandomInteger(1, MAX_GUESTS),
  checkin: getRandomArrayElement(CHECKINS),
  checkout: getRandomArrayElement(CHECKOUTS),
  features: createRandomArray(FEATURES),
  description: DESCRIPTION,
  photos: createRandomArray(PHOTOS),
});

const createAdvert  = () => {
  const author = createAuthor();
  const location = createLocation();
  const offer = createOffer(location);
  return {
    author,
    offer,
    location,
  };
};

const createArrayOfAdverts = (numberOfAdverts = 10) => new Array (numberOfAdverts).fill(null).map(() => createAdvert());
export {createArrayOfAdverts};
