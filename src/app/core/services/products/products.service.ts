import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${environment.url_api}/products`)
    // return this.products;
  }
  getProduct(id: string){
    return this.http.get<Product>(`${environment.url_api}/products/${id}`)
    // let miResultado = this.products.find(item => Number(id) === item.id)
    // return miResultado
  }
  deleteProduct(id: string){
    return this.http.delete(`${environment.url_api}/products/${id}`)
  }
}
