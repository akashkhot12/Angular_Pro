import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = '';

  // 1. creat an event 
  @Output()
  searchTextChanged:EventEmitter<string> = new EventEmitter<string>(); 

  @ViewChild('searchInput') searchInputEl:ElementRef;

  onSearchTextChanged(){
    
  }

  updateSearchText(){
      // this.searchText = event.target.value;
      // console.log(inputEL.value);
      this.searchText = this.searchInputEl.nativeElement.value;
      this.searchTextChanged.emit(this.searchText);
      
  }

  
}
