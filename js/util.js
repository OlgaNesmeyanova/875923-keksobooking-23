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
    const number = min + (max - min) * Math.random();
    const factor = Math.pow (10, symbols);
    return (Math.floor(number * factor) / factor).toFixed(symbols);
  }
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];
const getRandomLenghtArray = (array) => getRandomInteger(1, array.length);
const createRandomArray = (array) => {
  let newArray = new Array (getRandomLenghtArray(array)).fill(null).map(() => getRandomArrayElement(array));
  let arrayFiltered = newArray.filter((item, index) => newArray.indexOf(item) === index);
  return arrayFiltered;
};

export {getRandomInteger, getRandomNumber, getRandomArrayElement, createRandomArray};
