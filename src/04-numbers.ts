(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
//  customerAge = customerAge + '1';
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);

  let productInStock: number = 12;
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater')
  }

  let discount = parseInt('185');
  console.log('discount', discount)
  if (discount <= 200) {
    console.log('is Apply')
  } else {
    console.log('is not Apply')
  }

  let hex = 0xfff;
  console.log('hex', hex)
  let bin = 0b1010;
  console.log('bin', bin)

}) ();
