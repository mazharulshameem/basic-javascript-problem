function fact (n){
  let value = 1;
  for ( i = n; i >= 1; i--) {
  value= value * i;
  } return value ;
}
console.log(fact(5));