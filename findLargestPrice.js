const phones = [
    {brand: 'redmi' , camera: 48 , storage: 64, price: 25000},
    {brand: 'oppo', camera: 45 , storage: 64, price: 23000},
    {brand: 'samsung' , camera: 22 , storage: 64, price: 35000},
    {brand: 'iphone' , camera: 8 , storage: 64, price: 95000},
    {brand: 'htc', camera: 40 , storage: 64, price: 5000},
    ]

function largestPrice(phones){
  let largestPhone = phones[0];
  let largestPrice = largestPhone.price;
    for(let i = 1 ; i < phones.length ; i++){
        const phone = phones[i];
//**cheapest price er sathe compare kore study korle better hobe**// 
        if(phone.price > largestPrice){   
            largestPrice = phone.price;
        }
    }
    return largestPrice;

}

const myPhone = largestPrice(phones);
console.log(myPhone);