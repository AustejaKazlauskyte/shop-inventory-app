import {
  Component,
  EventEmitter
} from '@angular/core';

import {Product} from './product.model';

/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'AWSMSHS',
        'Black Heels',
        '/assets/images/products/black-heels.png',
        ['Women', 'Shoes', 'Friday night'],
        1009.99),
      new Product(
        'NEATOJACKET',
        'Blue Sweater',
        '/assets/images/products/blue-sweater.png',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.png',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
