function arrayDiff(a, b) {
  for (let item of b) {
    let newArr = a.filter(elem => elem !== item);
    return newArr;
  }
}
console.log(arrayDiff([3, 4], [3]));
