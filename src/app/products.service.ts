import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      name : "iphone",
      price : 12000,
      category : "Electronics"
    },
    {
      name : "Samsung",
      price : 1200,
      category : "mob"
    },
    {
      name : "Huwawei",
      price : 15000,
      category : "smart mob"
    },
    {
      name : "realme",
      price : 14000,
      category : "ios"
    }
  ]
  constructor() { }
}
