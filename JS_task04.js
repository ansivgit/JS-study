/* Напишите функцию, которая принимает два аргумента и возвращает их сумму.
Функция должна работать двумя способами: mul(x, y), mul(x)(y).*/

// Написала сама через разные функции, повторив тему про каррирование
function sum(a, b) {
  return a + b;
}

function sum2(a) {
  return function (b) {
    return sum(a, b);
  };
}

console.log(sum(2, 3));
console.log(sum2(2)(10));

// Написала, узнав про функцию в lodash (не изучала ее ранее)

const sum3 = _.curry(sum);

console.log(sum3(2, 4));
console.log(sum3(2)(6));

