
// Cheapest phone check


const phones = [ 
  {name:'iPhone', camera: '12 pixel', battery:'1200mah', color:'silver', storage:'64gb', price: 100000},
  {name:'Samsung', camera: '56 pixel', battery:'1300mah', color:'gray', storage:'128gb', price: 80000},
  {name:'Oneplus', camera: '20 pixel', battery:'1500mah', color:'silver', storage:'16gb', price: 76000},
  {name:'Nokia', camera: '64 pixel', battery:'1500mah', color:'silver', storage:'64gb', price: 20000},
  {name:'Realme', camera: '40 pixel', battery:'3000mah', color:'silver', storage:'16gb', price: 45000},
  {name:'Xaomi', camera: '32 pixel', battery:'3000mah', color:'silver', storage:'32gb', price: 40000},
];

function cheapestPhone(phones){
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++){
   const phone = phones[i];
   console.log(phone);
   if(phone.price < cheapest.price){
    cheapest = phone;
   }
  }
  return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log( 'Cheapest phone and i buy now:',(mySelection));
