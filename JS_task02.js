/* Как исправить код ниже, чтобы он вывел в консоль 5 разных значений (от 0 до 4):
    for (var i = 0; i < 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
*/

// Var 1 (с наскока)
/*
  for (var i = 0; i < 5; i++) {
    setTimeout(console.log(i), 1000);
  }
*/

// Var 2 (разобравшись в сути)

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
