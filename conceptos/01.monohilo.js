console.log("Primera instrucción");

let i = 0;

setInterval(function () {
  console.log(i);
  i++;

  if (i === 5) {
    console.log("Se forza error");
    var a = 3 + z;
  }
}, 1000);

console.log("Segunda instrucción");