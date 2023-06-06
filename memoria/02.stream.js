const fs = require("fs");
const stream = require("stream");
const util = require("util");

// let data = "";

let readableStream = fs.createReadStream(__dirname + "/02.input.txt");

readableStream.setEncoding("UTF8");

// readableStream.on("data", function (chunk) {
//   console.log(chunk);
//   //   console.log(chunk.toString());
// });

// process.stdout.write("Hola. ");
// process.stdout.write("Mi nombre es ");
// process.stdout.write("Andrés Zapata");

const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}
util.inherits(Mayus, Transform); // El uso de util.inherits() ya no es recomendable actualmente.

Mayus.prototype._transform = function (chunk, codif, cb) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  cb();
};

let mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);