/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

import products from "./data.js";

function sortProducts(data) {
  return data.sort((x, y) => x.price - y.price);
}

const listByCheapest = sortProducts(products);
for (let { product, price } of listByCheapest) {
  console.log(`${product},${price}`);
}
