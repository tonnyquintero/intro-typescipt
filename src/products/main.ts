import { createProduct, calcStock, products } from './product.service'

createProduct({
  title: 'Pro1',
  createdAt: new Date(),
  stock: 12,
  size: 'M'
});

createProduct({
  title: 'Pro2',
  createdAt: new Date(),
  stock: 12,
  size: 'XL'
});
console.log(products);
const total = calcStock();
console.log(total);

