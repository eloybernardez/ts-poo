import axios from "axios";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { UpdateProductDto } from "../dtos/product.dto";
import { ProductCrudService } from "./product-crud.service";


export class BaseHttpService<T> {
  // private data: T[] = []
  constructor(protected url: string) { }

  async getAll() {
    const { data: products } = await axios.get<T[]>(this.url);
    return products;
  }

  // ojo con el TypeM que no sea igual al de la clase T
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put<DTO>(`${this.url}/${id}`, changes);
    return data
  }
}


(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products'
  const productsService = new BaseHttpService<Product>(url1)
  const products = await productsService.getAll()
  console.log('products', products.length)

  productsService.update<Product["id"], UpdateProductDto>(1, {
    title: 'asa',
    price: 15000
  })

  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const categoryService = new BaseHttpService<Category>(url2)

  const categories = await categoryService.getAll()

  console.log('categories', categories.length)
})()
