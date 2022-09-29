import { Product } from './product.model'

const products: Product[] = [];

const createProduct = (data: Product) => {
  products.push(data);
}

const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  })
  return total;
}

export {
  createProduct,
  products,
  calcStock,
}
