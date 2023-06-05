const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("Nueva petición");
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.write("Hola");
      res.end();
      break;

    default:
      res.write("Error 404: Busqueda no encontrada");
      res.end();
  }

  // res.writeHead(201, { "Content-Type": "text/plain" });

  // // Escribir respuesta al usuario
  // res.write("Hola. Ya se usar HTTP de Node.js");
  // res.end();
}

console.log("Escuchando HTTP en el puerto 3000");