const products = [
    {namE:'shoe' , price:1200},
    {namE:'shirt' , price:2200},
    {namE:'pant', price:3700},
    {namE:'shoe' , price:600},
    
];

function cartCalculator(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
      const product = products[i];
      sum = sum + product['price'];
    }
    return sum;
}

const expense = cartCalculator(products);
console.log(expense);