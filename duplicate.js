const names = ['amin', 'bamin', 'camin','damin', 'emin', 'famin', 'gamin', 'amin', 'damin', 'emin', 'lamin',  'pamin', 'gamin']; 
function removeDuplicate(names){
  const unique = [];
  for( let i = 0;  i < names.length; i++){
    const name = names[i];
    console.log(name);
    if (unique.includes(name) === false){
      unique.push(name);
    }
    
  }
  return unique;
}
const uniquNames = removeDuplicate(names);
console.log(uniquNames);