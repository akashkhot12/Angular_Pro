import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

@Input()
 all:number = 0;

 @Input()
 inStocks:number = 0;

 @Input()
 outOfStocks:number = 0;
}
