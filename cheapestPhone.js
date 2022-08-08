const phones = [
    {namE: 'samsung' , camera : 20, storage:256 , price:36000},
    {namE: 'iphone' , camera : 20, storage:256 , price:76000},
    {namE: 'vivo' , camera : 20, storage:256 , price:32000},
    {namE: 'oppo' , camera : 20, storage:256 , price:28000},
    {namE: 'htc' , camera : 20, storage:256 , price:25000},
];

function getCheapestPhone(phones){
   let cheapestPhone = phones[0];
   let cheapestPrice = cheapestPhone['price'];
    for(let i = 1; i < phones.length ; i++){
       const phone = phones[i];
       let phonePrice = phone['price'];
    if( phonePrice < cheapestPrice ){
        cheapestPrice = phonePrice;
    }

    }
    return cheapestPrice;
}

const myPhone = getCheapestPhone(phones);
console.log(myPhone);