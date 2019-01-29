// Cargar módulos de request-promise y JSDOM
const rp = require('request-promise');
const JSDOM = require('jsdom').JSDOM;

// Obtener HTML desde sitio web
rp('https://es.wikipedia.org/wiki/El_Salvador').then(html => {

  // Generar DOM a partir de HTML
  const dom = new JSDOM(html);

  // Generar objeto jQuery a partir de DOM
  const $ = require('jquery')(dom.window);

  // Obtener imagenes que poseen el atributo de texto alternativo, y que este no sea vacío
  const imagenes = $.find('img[alt]:not([alt=""])');

  // Iterar listado de imágenes obtenidas
  $(imagenes).each((i, imagen) => {

    // Imprimir en la consola el texto alternativo de cada imagen
    console.log($(imagen).attr('alt'));
  });
});
