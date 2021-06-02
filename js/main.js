// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInteger (min, max) {
  if (min >= max) {
    return ('Второе число должно быть больше первого.');
  }
  else if (min < 0 || max <= 0) {
    return ('Число должно быть больше 0.');
  }
  else {
    return (Math.floor(min) + Math.floor((max - min + 1) * Math.random()));
  }
}

getRandomInteger();

// имя_функции(от, до, количество_знаков_после_запятой); // Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
/*
function getRandomNumber (min, max, symbols) {
  if (min>=max) {
    return 'Второе число должно быть больше первого.';
  }
  else if (min < 0 || max <= 0) {
    return 'Число должно быть больше 0.';
  }
  else {
    return +((min + (max - min +1) * Math.random()).toFixed(symbols));
  }
}
*/

function getRandomNumber (min, max, symbols) {
  if (min>=max) {
    return 'Второе число должно быть больше первого.';
  }
  else if (min < 0 || max <= 0) {
    return 'Число должно быть больше 0.';
  }
  else {
    const number = min + (max - min +1) * Math.random ();
    const factor = Math.pow (10, symbols);
    return Math.floor(number * factor)/factor;
    //return (Math.floor(number * factor) + Math.floor(number * factor - Math.floor(number * factor))) / factor;
  }
}
getRandomNumber();
