import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  // 1. creat an event 
  onSearchTextChanged:EventEmitter<string> = new EventEmitter<string>(); 

  updateSearchText(event: any){
      this.searchText = event.target.value;
  }
}
