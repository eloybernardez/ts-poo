import { BaseHttpService } from "./base-http.service"
import { Product } from "../models/product.model"

// con esta clase le pasamos el tipado a BaseHttpService
export class ProductHttpService extends BaseHttpService<Product> {
  otroRequest() {
    this.url
    // code
    // code
  }
}
