// Напишите функцию, которая проверит, является ли слово палиндромом.
// Пример:
// isPalindrome(“topot”) == true;
// isPalindrome(“topop”) == false;

const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
