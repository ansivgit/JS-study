// Напишите функцию, которая принимает строку в качестве аргумента
// и возвращает ее развернутой в обратную сторону.Например:
// Дано: Ира
// Вернет: арИ

const rev = (str) => {
  let strArr = str.split('').reverse();
  return (strArr.join(''));
}

console.log(rev('Ira'));