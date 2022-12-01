import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor() {}

  searchValue: string = ''
  type: 'title' | 'descrition' | 'status' = 'title'

  @Output()
  public handleChangeSearch = new EventEmitter()

  getSearchParams(value: string, type: 'title' | 'descrition' | 'status') {
    this.handleChangeSearch.emit({searchValue: value, type: type})
  }
}
