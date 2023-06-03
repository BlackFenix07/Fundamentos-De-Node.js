const fs = require("fs");

function leer(ruta, cb) {
  fs.readFile(ruta, (err, data) => {
    cb(data.toString());
  });
}

function escribir(ruta, contenido, cb) {
  fs.writeFile(ruta, contenido, function (err) {
    if (err) {
      console.error("No se ha podido escribir", err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
}

function eliminar(ruta, cb) {
  fs.unlink(ruta, cb);
}

// leer(__dirname + "/02.archivo.txt", console.log);
// escribir(
//   __dirname + "/02.archivo1.txt",
//   "Hola. Soy un archivo nuevo.",
//   console.log
// );
eliminar(__dirname + "/02.archivo1.txt", console.log);