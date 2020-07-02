import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service'
import { Product } from '../../../core/models/product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  error: any = false;
  producto: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id
      this.fetchProduct(id)
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id).subscribe(product => {
      if(product === null){
        this.error = 'El producto no existe'
      }else{
        this.producto = product
      }
    }, err => {
     this.error = 'Tuvimos un error en la busqueda' 
    })
  }

}
