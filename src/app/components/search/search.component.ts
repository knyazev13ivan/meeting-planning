import { Component, EventEmitter, Output } from '@angular/core';
import { ISearch } from 'src/app/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor() {}

  searchState: ISearch = {
    searchValue: '',
    type: 'title',
  };

  @Output()
  public handleChangeSearch = new EventEmitter();

  getSearchParams(searchState: ISearch) {
    this.handleChangeSearch.emit(searchState);
  }
}
