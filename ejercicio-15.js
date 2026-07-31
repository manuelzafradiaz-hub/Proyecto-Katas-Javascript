const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];
function findProducts(productsList) {
  for (let i = 0; i < productsList.length; i++) {
    if (productsList[i].includes('Camiseta')) {
      console.log(productsList[i]);
    }
  }
}
findProducts(products);