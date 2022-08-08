//   Find number 1 to 100 and 
//  if  the number divided by 3  the show "prem hbe "
//  then divided by 5 insted shows "biye  hbe"

for( i = 1; i<=100; i++){
  if( (i % 3 === 0) && ( i % 5 === 0)){
    console.log('khela hbe');
  }
  else if( i % 3 === 0){
    console.log('prem hbe');
  }
  else if (i % 5 === 0){
    console.log('biye hbe');
  }
  else{
    console.log(i);
  }
  
}