// Напишите функцию, которая проверит, является ли слово палиндромом.
// Пример:
// isPalindrome(“topot”) == true;
// isPalindrome(“topop”) == false;

const isPalindrome = (str) => {
  const strHalfSize = Math.floor(str.length / 2);

  for (let i = 0; i < strHalfSize; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('topot'));
console.log(isPalindrome('topop'));