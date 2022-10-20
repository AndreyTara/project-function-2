// 3) Создать обычный объект и сделать его итерируемым. 
// При этом итерация должна происходить следующим образом:
// Должны поочерёдно проходиться все значения от внутреннего 
// свойства объекта from, до внутреннего свойства объекта to. 
// (в случае если to < from - должна возникать ошибка).
// Если to или from не указаны ИЛИ to или from являются не 
// числами, должна возникать ошибка. Объект должен называться
//  myIterable. Это важно, т.к. проверять буду тестами.
// > Примеры:
// const myIterable = { from: 1, to: 4 };
// for (let item of myIterable) {
//  console.log(item); // 1, 2, 3, 4
// }

// const myIterable = { from: 'aaa', to: 4 };
// for (let item of myIterable) { // Ошибка!
//  console.log(item);
// }

const myIterable = { from: 1, to: 4 };
const anErrorOccurred = "An error occurred"
let isTemporaryTo = false;
let isTemporaryFrom = false;
let myIterableKeyTo = 0;
let myIterableKeyFrom = 0;
for (let keys in myIterable) {
  // console.log(' myIterable', myIterable[keys]);
  if (keys == 'from') {
    myIterableKeyFrom += +myIterable[keys];
    // console.log(' myIterableKeyFrom', myIterable[keys]);
    if (myIterable[keys] > 0) {
      isTemporaryFrom = true;

    }
  }
  if (keys == 'to') {
    myIterableKeyTo += +myIterable[keys];
    // console.log('myIterableKeyTo ', myIterable[keys]);
    if (myIterable[keys] > 0) {
      isTemporaryTo = true;
    }
  }
}
isRezultFromTo = isTemporaryFrom && isTemporaryTo;
// console.log('isRezultFromTo', isRezultFromTo);
// console.log('myIterableKeyTo', myIterableKeyTo);
// console.log('myIterableKeyFrom', myIterableKeyFrom);
if (myIterableKeyTo < myIterableKeyFrom) { //&& isRezultFromTo)
  console.log("Object is iterable");
} else {
  console.log(anErrorOccurred);
}