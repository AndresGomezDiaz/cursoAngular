import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    products: Product[] = [
      {id: 1, image: 'assets/images/camiseta.png', title: 'Camiseta', price: 150, description: 'Esta es la descripción de la camiseta'},
      {id: 2, image: 'assets/images/hoodie.png', title: 'Sudadera', price: 400, description: 'Esta es la descripción de la sudadera'},
      {id: 3, image: 'assets/images/mug.png', title: 'Tasa', price: 100, description: 'Esta es la descripción de la tasa'},
      {id: 4, image: 'assets/images/pin.png', title: 'Pin', price: 50, description: 'Esta es la descripción de los pines'},
      {id: 5, image: 'assets/images/stickers1.png', title: 'Sticker 1', price: 10, description: 'Esta es la descripción del sticker 1'},
      {id: 6, image: 'assets/images/stickers2.png', title: 'Sticker 2', price: 10, description: 'Esta es la descripción del sticker 2'}
    ];
  constructor() { }

  getAllProducts(){
    return this.products;
  }
  getProduct(id: number){
    let miResultado = this.products.find(item => Number(id) === item.id)
    return miResultado
  }
}
