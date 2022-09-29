(() => {
  // Estructuramos el objeto
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }
  addProduct({
    title: 'Pro1',
    createdAt: new Date(),
    stock: 12,
    size: 'M'
  })
  console.log(products);


})();
