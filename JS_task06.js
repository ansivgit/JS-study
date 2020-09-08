// Напишите функцию, которая принимает два аргумента и проверяет,
// является ли одно слово анаграммой другого.Пример:
//  isAnagram(“finder”, “Friend”) == true;
//  isAnagram(“friend”, “find”) == false;


const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) { return false; }

  const stringToArray = (string) => string.toLowerCase().split('').sort().join();

  return stringToArray(str1) === stringToArray(str2);
};
