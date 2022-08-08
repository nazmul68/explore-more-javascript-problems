/**
1. if ticket numbers is less than 100,per ticket price 100 tk
2. if ticket numbers is more than 100, but less than 200 piece .First  
    100/tickets & the rest ticket will be 90 tk per piece .
3. if you purchase more than 200 tickets you will be pay 70tk/ticket
    first 100 piece -----> 100 tk 
    100-200 -------------> 90 tk 
    200 + ---------------> 70 tk    
**/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(ticketQuantity <= 100){
        const price = first100Rate * ticketQuantity;
        return price;    
    }
    else if(ticketQuantity <= 200){
        const first100Price   = 100 * first100Rate;
        const restTicketPrice = second100Rate * (ticketQuantity-100);
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketPrice = restTicketRate * (ticketQuantity - 200);
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const myTicketPrice = ticketPrice(202);
console.log(myTicketPrice);   /* 1st call fucntion & second show 
                                 output through console.log */
