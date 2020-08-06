// Напишите функцию, которая возвращает число из последовательности фибоначи по его порядковому номеру.
// Пример:
//    fibonacci(4) == 3;
//    fibonacci(3) == 2;


const fibonacci = (n) => {
  let a = 0,
      b = 1,
      result = 0;

  for (let i = 1; i < n; i++) {
    result = a + b;
    a = b;
    b = result;
  }
  return result;
};

console.log(fibonacci(4));
console.log(fibonacci(3));