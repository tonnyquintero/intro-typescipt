(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password)
  }
  login({
    email: 'tony@187',
    password: 123456
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any [] = []

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  }

  addProduct({
    title: 'prosucto1',
    createdAt: new Date(1991, 20, 3),
    stock: 12
  });
  addProduct({
    title: 'prosucto1',
    createdAt: new Date(1991, 20, 3),
    stock: 12,
    size: 'S'
  })

  console.log(products);

})()
