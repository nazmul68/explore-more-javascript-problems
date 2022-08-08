// // hello javascript 
const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121 , class: 11 ,name: 'Agun' };
const friends = [13,15,16,18,19];
// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isIndependent);
// console.log(typeof student); 

// check Array 
// console.log(Array.isArray(friends));
// console.log(friends.includes(10));
// console.log(friends.includes(21));

// if(friends.indexOf(21) !== -1){
//     console.log('Exist');
// }
// else{
//     console.log('Does not exist');
// }
const newFriends = [20,21,22,23];
const allFriends = friends.concat(newFriends);
console.log(allFriends);

