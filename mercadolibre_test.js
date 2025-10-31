Feature('Mercado Libre - Buscar Playstation 5');

Scenario('Obtener los primeros 5 productos nuevos en CDMX ordenados por mayor precio', async ({ I }) => {
  // 1. Entrar al sitio
  I.amOnPage('/');

  I.fillField('input[name="as_word"]', 'playstation 5');
  I.click('button[type="submit"]');

  I.click('//span[text()="Nuevo"]');

  I.click('//span[text()="Local"]');       
  
  I.click('button.andes-dropdown__trigger');
  I.click('//li[.//span[text()="Mayor precio"]]');


  const nombres = await I.grabTextFromAll('.ui-search-item__title');
  const precios = await I.grabTextFromAll('.price-tag-fraction');
  const productos = [];

  for (let i = 0; i < 5; i++) {
    productos.push({
      nombre: nombres[i],
      precio: precios[i]
    });
  }

  console.log('Primeros 5 productos:', productos);
  
});
