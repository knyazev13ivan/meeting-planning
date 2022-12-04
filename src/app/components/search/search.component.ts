import { Component, EventEmitter, Output } from '@angular/core';

export interface ISearch {
  searchValue: string;
  type: 'title' | 'description' | 'status'
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor() {}

  searchState: ISearch = {
    searchValue: '',
    type: 'title'
  }

  @Output()
  public handleChangeSearch = new EventEmitter()

  getSearchParams(searchState: ISearch) {
    this.handleChangeSearch.emit(searchState)
  }
}
