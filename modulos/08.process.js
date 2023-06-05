// const p = require("process");

process.on("beforeExit", () => {
  console.log("El proceso está terminando");
});

process.on("exit", () => {
  console.log("El proceso terminó");
  setTimeout(() => {
    console.log("Esto no se va a ver nunca");
  }, 0);
});

setTimeout(() => {
  console.log("Esto se va a ver");
}, 0);

process.on("uncaughtException", (err, origen) => {
  console.error("Ups! Se nos ha olvidado capturar un error");
  setTimeout(() => {
    console.log("Esto viene desde las excepciones");
  }, 0);
});

funcionQueNoExiste();

console.log("Esto aparece si el error no se recoge");