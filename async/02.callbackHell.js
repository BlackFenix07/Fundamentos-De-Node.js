function hola(nombre, callbackHola) {
  setTimeout(function () {
    console.log("Hola " + nombre);
    callbackHola(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log("Hablando...");
    callbackHablar();
  }, 1000);
}

function adios(nombre, callbackAdios) {
  setTimeout(function () {
    console.log("Adiós " + nombre);
    callbackAdios();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("Iniciando proceso");
hola("Andrés", function (nombre) {
  conversacion(nombre, 3, function () {
    console.log("Proceso terminado");
  });
});