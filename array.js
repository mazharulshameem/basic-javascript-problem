const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const fighter = {id:1971, class:71, name: 'Salam'};
const army = [12, 13, 56, 34, 67, 78, 45, 43, 45, 78, 89, 90];
// find it is array:
 console.log(Array.isArray(army));

// //  find index in array 
 console.log(army.includes(13));
// // if(army.indexOf(132) !== - 1){
// // console
// // }

// concat:
const newArmy = [ 78, 76, 77];
const allArmy = newArmy.concat (army);
console.log (allArmy);
//

// slice in array 
const partial = army.slice(2,6);
console.log( partial);
// splice in array
// removes elemnet from in middle arry index. returning the deleted element. add element from there.

const cut = army.splice(2,6);
console.log(cut);
// add element 
const cut = army.splice(2,6, 47, 89, 90,);
console.log(cut);
