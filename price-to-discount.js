function priceToDiscount(totalPrice){
  if (totalPrice > 5000) {
    const dicountPrice = totalPrice* (20/100);
    const netPrice = totalPrice - dicountPrice;
    console.log('20% Discount');
    console.log('you pay now:',netPrice);
  }else if (totalPrice >= 3000) {
    const dicountPrice = totalPrice* (15/100);
    const netPrice = totalPrice - dicountPrice;
    console.log('15% Discount');
    console.log(' you pay now:',netPrice);
  } else if ( totalPrice >=1000){
    const dicountPrice = totalPrice* (10/100);
    const netPrice = totalPrice - dicountPrice;
    console.log('10% Discount');
    console.log('you pay now:',netPrice);
  } else{
    console.log('No Discount Offer');
  }
}
 priceToDiscount(1000);
