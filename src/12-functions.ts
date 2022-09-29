(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const product1 = createProductToJson('P1', new Date, 12, 'S');
  console.log(product1)
  console.log(product1.title)
  console.log(product1.createdAt)
  console.log(product1.size)

  //La misma funcion pero con arrow functions
  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes | undefined
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }

  }
  const product2 = createProductToJsonV2('P2', new Date, 12);
  console.log(product2)
  console.log(product2.title)
  console.log(product2.createdAt)
  console.log(product2.size)

}) ();
