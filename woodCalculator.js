/*

fixed : per item wood ;
1. chair =  3 cft
2. table = 10 crf
3. bed = 50 cft

*/

function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWodd = 50;
    const needWoodForChair = perChairWood*chairQuantity;
    const needWoodForTable = perTableWood*tableQuantity;
    const needWoodForBed = perBedWodd * bedQuantity;

    console.log('Need wood for chair:' ,needWoodForChair, 'QFt.',
        'Need wood for table:', needWoodForTable, 'QFt.',
        'Need wood for bed:',needWoodForBed,'QFt.'
        );
        const totalWoodQuantity = needWoodForChair + needWoodForTable + needWoodForBed;
        return totalWoodQuantity;
        /*
         (eita o declare kora jeto )
         const totalWood = needWoodForChair + needWoodForTable + needWoodForBed;
         return totalWood;
        */ 
}

const totalWoodQuantity = woodCalculator(6,2,4);
// const totalWood = woodCalculator(6,2,4);
console.log('Total wood required:' ,totalWoodQuantity , 'QFt.');
