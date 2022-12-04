import { Component } from '@angular/core';
import { IMeetupItem, MeetupsListService } from 'src/app/services/meetup-list.service';

@Component({
  selector: 'app-my-meetups-list',
  templateUrl: './my-meetups-list.component.html',
  styleUrls: ['./my-meetups-list.component.scss']
})
export class MyMeetupsListComponent {
  meetupsList: IMeetupItem[];
  filteredList: IMeetupItem[];

  constructor(public meetupsListService: MeetupsListService) {
    this.meetupsList = this.filteredList = meetupsListService.meetupsList;
  }

  delete = this.meetupsListService.delete;

  add = this.meetupsListService.add;

  changeStatus = this.meetupsListService.changeStatus;

  getId = this.meetupsListService.getId;

  getFilteredList({
    searchValue,
    type,
  }: {
    searchValue: string;
    type: 'title' | 'description' | 'status';
  }) {
    this.filteredList = this.meetupsList
      .slice(0)
      .filter((item) => item[type].includes(searchValue));

      
    console.log('search data: ', searchValue, type, this.filteredList);
  }

  trackByItems(index: number, item: IMeetupItem): number {
    return item.id;
  }
}
