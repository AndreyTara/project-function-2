//   2) Написать функцию, которая принимает три аргумента: массив чисел, 
//   первое значение интервала, второе значение интервала. Результатом 
//   вызова функции должен быть массив из значений, переданного массива,
//   которые входят в этот интервал (концы включая). Договоримся 
//   использовать только массивы чисел. При этом значения интервала 
//   могут быть только числами. Если в качестве первого параметра 
//   передан не массив или массив, содержащий не только числа - кидать 
//   ошибку (throw new Error('error message')). Если хотя бы одно из 
//   значений интервала - невалидное число - также кидать ошибку.
// Если первое значение интервала < второго, то считать за интервал 
// значения от первого до второго, в ином случае - от второго до первого.
// Функция должна называться selectFromInterval. Это важно, т.к. проверять 
// буду тестами.
// > Примеры:
// Вызываем функцию: selectFromInterval([1,3,5], 5, 2)
// Получаем результат: [3,5]
// Вызываем функцию: selectFromInterval([-2, -15, 0, 4], -13, -5)
// Получаем результат: []
// Вызываем функцию: selectFromInterval(['aaa'], 2, 3)
// Получаем результат: Ошибка!
function selectFromInterval(inputInterval, first, second) {
  let throwNewError = 'Error message';
  let outputInterval = []
  let lengthInputInterval = inputInterval.length
  // console.log('lengthInputInterval', lengthInputInterval);
  if (first >= lengthInputInterval) {
    first = lengthInputInterval;
  }
  // console.log('first', first);
  if (second >= lengthInputInterval) {
    second = lengthInputInterval;
  }
  // console.log('second', second);
  if (first > second) {
    let temporary = first;
    first = second;
    second = temporary;
  }
  // console.log('first', first);
  // console.log('second', second);
  let isRangeFirst = (first >= 0 && first <= lengthInputInterval);
  // console.log('isRangeFirst', isRangeFirst);
  let isRangeSecond = (second >= 0 && first <= lengthInputInterval);
  // console.log('isRangeSecond', isRangeSecond);
  let isDifferencepa = ((second - first) >= 0);
  // console.log('isDifferencepa', isDifferencepa);
  let isInputIntervalNumber = true;
  for (let i = 0; i < lengthInputInterval; i++) {
    if (typeof inputInterval[i] !== 'number') {
      isInputIntervalNumber = false;
    } else {
    }
  }
  let isRangeNumber = isRangeFirst && isRangeSecond && isDifferencepa;
  // console.log('isRangeNumber', isRangeNumber);
  if (isRangeNumber && isInputIntervalNumber) {
    for (let i = (first - 1); i <= (second - 1); i++) {
      // console.log(inputInterval[i]);
      outputInterval.push(inputInterval[i]);
    }
    return outputInterval;
  } else {
    console.log(throwNewError);
  }
}