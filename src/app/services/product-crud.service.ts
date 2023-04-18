import { Product } from "../models/product.model"
import { UpdateProductDto } from "../dtos/product.dto"
import { ProductHttpService } from "./product-http2.service"

export class ProductCrudService {
  private url = 'https://api.escuelajs.co/api/v1/products'
  // creo una instancia del baseHttpService
  private http = new ProductHttpService(this.url)

  // Le agrego el metodo update pasando por parámetro el tipo de dato que este necesita
  async update(id: Product["id"], dto: UpdateProductDto) {
    // permisos
    // logica
    return this.http.update(id, dto)
  }
}
