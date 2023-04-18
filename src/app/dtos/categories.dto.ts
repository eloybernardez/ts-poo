import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from 'class-validator' // si usamos class-validator, si la letra inicial es mayúscula, es un decorador sino una funcion
import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {
}

export class CreateCategoryDto implements ICreateCategoryDto {
  // los decoradores añaden validaciones o comportamientos extra
  @IsNotEmpty()
  @Length(4, 140)
  name!: string; // con ! saltamos el inicializar el valor

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'acasda'
    dto.image = 'https://api.escuelajs.co/api/v1/products'
    await validateOrReject(dto)
  } catch (error) {
    console.log(error)
  }
})()
