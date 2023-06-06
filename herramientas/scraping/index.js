const puppeteer = require("puppeteer");

(async () => {
  console.log("Lanzando navegador");
  //   const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto("https://en.wikipedia.org/wiki/Node.js");

  let titulo = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(titulo);

  console.log("Cerrando navegador");
  browser.close();
  console.log("Navegador cerrado");
})();