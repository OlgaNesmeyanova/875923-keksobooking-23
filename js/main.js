// Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInteger (min, max) {
  if (min>=0 && max > min) {
    return (Math.floor(min) + Math.floor((max - min + 1) * Math.random()));
  }
  else if (min >= max) {
    return ('Второе число должно быть больше первого.');
  }
  else if (min < 0 || max <= 0) {
    return ('Число должно быть больше 0.');
  }
}

getRandomInteger();
// имя_функции(от, до, количество_знаков_после_запятой); // Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"

function getRandomNumber (min, max, symbols) {
  if (min >= 0 && max > min && symbols >=0) {
    return Number((min + (max - min + 1) * Math.random ()).toFixed(symbols));
  }
  else if (min>=max) {
    return 'Второе число должно быть больше первого.';
  }
  else if (min < 0 || max <= 0) {
    return 'Число должно быть больше 0.';
  }
}
getRandomNumber();
