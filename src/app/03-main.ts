import { ProductHttpService } from "./services/product-http.service";

(async () => {
  try {
    const productService = ProductHttpService.create('Platzi Store')

    if (productService !== undefined) {
      console.log('-------'.repeat(10))
      console.log('getAll')
      const products = await productService.getAll()
      console.log(products)
      console.log(products.map(item => item.price))

      const productId = products[0].id
      console.log('-------'.repeat(10))
      console.log('update')
      await productService.update(productId, {
        price: 10000,
        title: 'nuevo title',
        description: 'nueva descripcion'
      })
      const updatedProduct = await productService.findOne(productId)
      console.log('-------'.repeat(10))
      console.log('findOne')
      console.log(updatedProduct)
    }
  } catch (error) {
    console.error(error)
  }
})()


