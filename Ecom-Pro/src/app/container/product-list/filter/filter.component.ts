import { Component, EventEmitter, Input, Output } from '@angular/core';

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

 @Output()
 selectedFilterRadioButtonChange:EventEmitter<string> = new EventEmitter<string>();

 selectedFilterRadioButton:string = 'all';

 onSelectedFilterRadioButtonChange(){
  this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton);
 }
}
