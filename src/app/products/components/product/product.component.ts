import { 
		Component,
		Input,
		Output,
		EventEmitter } from '@angular/core';
import { Product } from '../../../core/models/product.model'

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent{
	@Input() productDetail: Product;
	// Por convensión no se debe usar la palabra on en un Event Emitter
	@Output() productoClicked: EventEmitter<any> = new EventEmitter();

	constructor() {	}

	addCart() {
		console.log('Añadir al carrito')
		this.productoClicked.emit(this.productDetail.id)
	}
}