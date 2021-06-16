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
const getRandomInteger = function (min, max) {
  if (min >= max) {
    return ('Второе число должно быть больше первого.');
  }
  else if (min < 0 || max <= 0) {
    return ('Число должно быть больше 0.');
  }
  else {
    return (Math.floor(min) + Math.floor((max - min + 1) * Math.random()));
  }
};

const getRandomNumber = function(min, max, symbols = 0) {
  if (min >= max) {
    return 'Второе число должно быть больше первого.';
  }
  else if (min < 0 || max <= 0) {
    return 'Число должно быть больше 0.';
  }
  else if (symbols < 0) {
    return 'Введите корректные данные.';
  }
  else {
    const number = min + (max - min + 1) * Math.random();
    const factor = Math.pow (10, symbols);
    return (Math.floor(number * factor) / factor).toFixed(symbols);
  }
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];
const getRandomLenghtArray = (array) => getRandomInteger(1, array.length);
const createRandomArray = (array) => new Array (getRandomLenghtArray(array)).fill(null).map(() => getRandomArrayElement(array));

const createAuthor = (id) => {
  const userId = id < 10 ? `0${id}` : id;
  return {
    avatar: `img/avatars/user${userId}.png`,
  };
};

const createLocation = () => ({
  lat: getRandomNumber (35.65000, 35.70000, 5),
  lng: getRandomNumber (139.70000, 139.80000, 5),
});

const createOffer = (location) => ({
  title: TITLE,
  address: `${location.lat}, ${location.lng}`,
  price: getRandomInteger(0, 10000000),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomInteger(1, 10),
  guests: getRandomInteger(1, 10),
  checkin: getRandomArrayElement(CHECKINS),
  checkout: getRandomArrayElement(CHECKOUTS),
  features: createRandomArray(FEATURES),
  description: DESCRIPTION,
  photos: createRandomArray(PHOTOS),
});

const createAdvert  = (id) => {
  const location = createLocation();
  return {
    author: createAuthor(id),
    offer: createOffer(location),
    location: location,
  };
};
const OBJECT_COUNT = 10;
const ArrayOfAdverts = new Array (OBJECT_COUNT).fill(null).map(() => createAdvert(getRandomInteger(1, 1000)));

console.log(ArrayOfAdverts);
