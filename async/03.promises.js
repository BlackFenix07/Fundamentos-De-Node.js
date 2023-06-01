function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hola " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Hablando...");
      // resolve(nombre);
      reject("Ocurrió un error");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("Adiós " + nombre);
      resolve();
    }, 1000);
  });
}

console.log("Iniciando proceso");
hola("Andrés")
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Proceso terminado");
  })
  .catch((error) => {
    console.error("Ha ocurrido un error");
    console.error(error);
  });