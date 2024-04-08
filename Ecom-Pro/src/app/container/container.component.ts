import { Component, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  name:string = "iphone"
  price:number = 399
  category:string = "mobile"


  searchText:string = '';

  @ViewChild(ProductListComponent) productListComponent:ProductListComponent

  setSearchText(value:string){
    this.searchText=value;
  }

}
