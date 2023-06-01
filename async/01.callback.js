function hola(nombre, callbackHola) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    callbackHola(nombre);
  }, 1000);
}

function adios(nombre, callbackAdios) {
  setTimeout(function () {
    console.log("Adiós " + nombre);
    callbackAdios();
  }, 1000);
}

console.log("Iniciando proceso");
hola("Andrés", function (nombre) {
  adios(nombre, function () {
    console.log("Proceso terminado");
  });
});