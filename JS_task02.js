/* Как исправить код ниже, чтобы он вывел в консоль 5 разных значений (от 0 до 4):
    for (var i = 0; i < 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
*/
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
