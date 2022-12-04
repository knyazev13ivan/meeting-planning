import { Component } from '@angular/core';
import { ISearch } from 'src/app/components/search/search.component';
import {
  IMeetupItem,
  MeetupsListService,
} from 'src/app/services/meetup-list.service';

@Component({
  selector: 'app-my-meetups-list',
  templateUrl: './my-meetups-list.component.html',
  styleUrls: ['./my-meetups-list.component.scss'],
})
export class MyMeetupsListComponent {
  _meetupsList: IMeetupItem[];
  _searchState: ISearch = {
    searchValue: '',
    type: 'title',
  };

  constructor(public meetupsListService: MeetupsListService) {
    this._meetupsList = meetupsListService.meetupsList;
  }

  set meetupsList(meetups: IMeetupItem[]) {
    this._meetupsList = meetups
  }
  get meetupsList(): IMeetupItem[] {
    return this._meetupsList
  }

  set searchState(searchState: ISearch) {
    this._searchState = { ...searchState };
  }
  get searchState(): ISearch {
    return this._searchState;
  }

  delete = this.meetupsListService.delete;

  add = this.meetupsListService.add;

  changeStatus = this.meetupsListService.changeStatus;

  getId = this.meetupsListService.getId;

  trackByItems(index: number, item: IMeetupItem): number {
    return item.id;
  }
}
