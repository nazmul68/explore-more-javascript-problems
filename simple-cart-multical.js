const products = [
    {namE:'shoe' , price:1200 ,quantity: 5},
    {namE:'shirt' , price:2100 ,quantity: 4},
    {namE:'pant', price:3200 ,quantity: 6},
    {namE:'shoe' , price:600 ,quantity: 3},
    
];

function cartCalculator(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
      const product = products[i];
      sum = sum +(product.price*product.quantity) ;
           //* const productTotal = product.price * product.quantity; */ 
          //* sum = sum +productTotal;  ** another way**/ 
         //   sum = sum + product['price']; // **another way**
    }
    return sum;
}

const expense = cartCalculator(products);
console.log('Total expense today:' ,expense, 'Tk Only');