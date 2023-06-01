async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hablando...");
      // resolve(nombre);
      resolve("Ocurrió un error");
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adiós " + nombre);
      resolve();
    }, 1000);
  });
}

async function main() {
  let nombre = await hola("Andrés");
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log("Última instrucción");
}

console.log("Primera instrucción");
main();
console.log("Segunda instrucción");