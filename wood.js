/*
 fixed : per item wood requirments 
 1. chair ...3 cft
 2. table .. 10 cft
 3. bed ....  50cft
 varry: quantity

*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
  const perChairWood = 3;
  const perTableWood = 5;
  const perBedWood = 50;

  const chairWood = chairQuantity * perChairWood;
  const tableWood = tableQuantity * perTableWood;
  const bedWood = bedQuantity * perBedWood;

  const totalWood =  chairWood + tableWood + bedWood;
  return totalWood;

}
const totalWood = woodCalculator(5, 10, 60);
console.log (' Total wood required:', totalWood);