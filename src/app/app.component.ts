import {Component} from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'shop-inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  product: Product;

  constructor() {
    this.product = new Product(
      'NICEHAT',
      'a nice black hat',
      '/assets/images/products/black-hat.png',
      ['Women', 'Accessories', 'Hats'],
      29.99);
  }
}
