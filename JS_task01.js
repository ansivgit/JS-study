// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n

// Var 1
/*const sumTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};*/

// Var 2
const sumTo = (n) => {
  return (n > 0) ? (n + sumTo(n - 1)) : 0;
};

console.log(sumTo(5));