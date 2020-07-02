import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProduct()
  }
  
  clickProduct(id: number){
    console.log('Product id: ', id)
  }

  fetchProduct(){
    this.productsService.getAllProducts().subscribe(products => {
      console.log(products)
      this.products = products
    })
  }

}
