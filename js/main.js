import {TYPES, CHECKINS, CHECKOUTS, FEATURES, PHOTOS, TITLE, DESCRIPTION, MAX_PRICE, MAX_GUESTS, MAX_ROOMS} from './data';
import {getRandomInteger, getRandomArrayElement, createRandomArray, createAuthor, createLocation} from './util';

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

createArrayOfAdverts();
