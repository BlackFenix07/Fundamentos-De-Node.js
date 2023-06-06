console.time("Código completo");

let suma1 = 0;
console.time("Primer bucle");
for (let i = 0; i < 100000000; i++) {
  suma1 += 1;
}
console.timeEnd("Primer bucle");

let suma2 = 0;
console.time("Segundo bucle");
for (let j = 0; j < 100000000; j++) {
  suma2 += 1;
}
console.timeEnd("Segundo bucle");

console.time("Función asíncrona");
console.log("Inicia el proceso asíncrono");
asincrona().then(() => {
  console.timeEnd("Función asíncrona");
});

console.timeEnd("Código completo");

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("Proceso asíncrono terminado");
      resolve();
    });
  });
}