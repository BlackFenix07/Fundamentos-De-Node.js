function funcion() {
  seRompeSincrona();
}

function seRompeSincrona() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(function () {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi función asíncrona");
      cb(err);
    }
  });
}

try {
  // funcion();
  seRompeAsincrona(function (err) {
    console.log("Error:", err.message);
  });
} catch (err) {
  console.error("Ups! Algo se ha roto");
  console.error(err);
  console.log("Pero no te preocupes, lo hemos capturado");
}

console.log("Esto de aquí está al final");