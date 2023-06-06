function asincrona(callback) {
  setTimeout(function () {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (e) {
      callback(e);
    }
  }, 1000);
}

asincrona(function (err, dato) {
  if (err) {
    console.error("Ocurrió un error");
    console.error(err);
    return false;
    // throw err; // Se ejecuta muy bien en las funciones sincronas pero en las funciones asíncronas no se ejecuta.
  }
  console.log("Todo ha salido bien. Mi data es:", dato);
});