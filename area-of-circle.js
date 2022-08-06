
function areaOfCircle(r){
  const pi = 3.1416;
  const area = pi*r*r;
  return area.toFixed(2);
}
console.log(areaOfCircle(5));
console.log(areaOfCircle(10));
console.log(areaOfCircle(15));