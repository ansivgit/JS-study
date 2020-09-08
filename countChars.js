function count(string) {
  const arr = string.split('');
  let obj = {};
  for (let item of arr) {
    obj[item] = arr.filter(elem => elem === item).length;
  }
  return obj;
}
