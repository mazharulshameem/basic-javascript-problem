function evenOddSum(arr){
  let evenSum=0;
  let oddSum=0;
  for( let i = 0; i < arr.length; i++){
    if( arr[i] % 2 == 0){
      evenSum = evenSum + arr[i];
    }
    else{
      oddSum =oddSum + arr[i];
    }
  }
  console.log(" Even Sum:", evenSum, " Odd Sum:", oddSum)
}
const arr = [ 1, 4, 3, 6, 7, 12, 34, 23, 54, 56];
evenOddSum(arr);