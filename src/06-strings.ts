(() => {
  let productTitle = 'my amazing product';

  productTitle = 'my amazing product changed'
  console.log('productTitle', productTitle)

  let productDescription = 'Big White and 500 TB of memory'

  let productPrice = 100;
  let isNew = true

  const sumary = `
  productTitle: ${productTitle}
  productDescription: ${productDescription}
  productPrice: ${productPrice}
  isnew: ${isNew}
  `
  console.log(sumary)

})();
