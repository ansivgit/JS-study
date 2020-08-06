// Напишите функцию, которая принимает два аргумента и проверяет,
// является ли одно слово анаграммой другого.Пример:
//  isAnagram(“finder”, “Friend”) == true;
//  isAnagram(“friend”, “find”) == false;


const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) { return false; }

  let result = true;

  const stringToArray = (string) => string.toLowerCase().split('').sort();

  const strArr1 = stringToArray(str1);
  const strArr2 = stringToArray(str2);

  for (let i = 0; i < str1.length; i++) {
    if (strArr1[i] !== strArr2[i]) {
      result = false;
      break;
    }
  }
  return result;
};