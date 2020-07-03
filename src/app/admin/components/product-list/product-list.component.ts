import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTable } from '@angular/material/table';
// import { ProductListDataSource, ProductListItem } from './product-list-datasource';

import { ProductsService } from '../../../core/services/products/products.service'
import { Product } from '../../../core/models/product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatTable) table: MatTable<ProductListItem>;
  // dataSource: ProductListDataSource;
  products: Product[] = []

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'price', 'actions'];

  constructor (
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts()
    // this.dataSource = new ProductListDataSource();
  }

  // ngAfterViewInit() {
  //   // this.dataSource.sort = this.sort;
  //   // this.dataSource.paginator = this.paginator;
  //   // this.table.dataSource = this.dataSource;
  // }
  fetchProducts () {
    this.productsService.getAllProducts().subscribe(products => {
      console.log(products)
      this.products = products
    })
  }
  deleteProduct(product: Product) {
    let indexElement = this.products.indexOf(product)
    // console.log(`El index es: ${indexElement}`)
    if(indexElement > -1){
      this.products.splice(indexElement, 1)
      this.products = [...this.products]
    }else{
      console.log('No se puede eliminar')
    }
    
    // this.productsService.deleteProduct(product.id).subscribe(rta => {
    //   if(rta){
    //     this.products.splice(indexElement, 1)
    //     this.products = [...this.products]
    //   }else{
    //     // Aqui montamos el error
    //   }
    // })
  }
}
