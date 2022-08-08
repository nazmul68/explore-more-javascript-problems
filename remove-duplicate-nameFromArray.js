/*

You have an Array includes some studetns names,where some duplicate names are included. So write a function to remove duplcate names from this Array where not include any single duplicate name.

*/ 

function removeDuplicateName(names){
    let uniqueNames = [];
    for(let i = 0; i < names.length ; i++){
        //const element = names[i]; //
        const name = names[i];
        if(uniqueNames.includes(name) === false){
            uniqueNames.push(name);
        }
    }
    return uniqueNames;

}

const inputNames = ['Abul','Babul','Chabul','kamrul','Babul','Mokbul','Abul','Babul','Jahirul','Shimul'];
const outputUniqueNames = removeDuplicateName(inputNames);
console.log(outputUniqueNames);