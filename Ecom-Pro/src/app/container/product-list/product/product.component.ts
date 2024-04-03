import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  products : Product;
}
