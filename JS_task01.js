// Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n

const sumTo = (n) => {
  return (n > 0) ? (n + sumTo(n - 1)) : 0;
};

console.log(sumTo(5));