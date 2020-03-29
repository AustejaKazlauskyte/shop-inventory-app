import {Component, EventEmitter} from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.png',
        ['Women', 'Shoes', 'Heels'],
        109.99),
      new Product(
        'NEATOSWEATER',
        'Blue Sweater',
        '/assets/images/products/blue-sweater.png',
        ['Women', 'Apparel', 'Casual'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.png',
        ['Men', 'Accessories', 'Cowboy Hats'],
        29.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
