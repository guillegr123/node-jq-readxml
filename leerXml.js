// Cargar módulos FS y JSDOM
const fs = require('fs');
const JSDOM = require('jsdom').JSDOM;

// Leer archivo XML desde disco
const xml = fs.readFileSync('paises.xml', 'utf8');

// Generar DOM a partir de XML
const dom = new JSDOM(xml);

// Generar objeto jQuery a partir de DOM
const $ = require('jquery')(dom.window);

// Obtener países cuyo código inicie con la letra "a"
const paises = $.find('countries>country[code^="a"]');

// Iterar listado de países obtenidos
$(paises).each((i, pais) => {

  // Imprimir en consola el código y nombre de cada país
  const $pais = $(pais);
  console.log($pais.attr('code').toUpperCase() + ' - ' + $pais.text());
});
