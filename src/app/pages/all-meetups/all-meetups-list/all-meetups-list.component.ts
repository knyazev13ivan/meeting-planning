import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMeetup, ISearch, IUser } from 'src/app/interfaces';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-all-meetups-list',
  templateUrl: './all-meetups-list.component.html',
  styleUrls: ['./all-meetups-list.component.scss'],
})
export class AllMeetupsListComponent implements OnInit, OnDestroy {
  _meetupsList: IMeetup[];
  _user: IUser | null = null;
  meetupsListSubscription$!: Subscription;
  isHideMeetupForm: boolean = false;
  _searchState: ISearch = {
    searchValue: '',
    type: 'title',
  };

  constructor(public meetupsService: MeetupsService) {
    this._meetupsList = meetupsService.meetupsList;
  }

  ngOnInit(): void {
    this.meetupsListSubscription$ = this.meetupsService
      .getMeetups()
      .subscribe((data) => (this.meetupsList = data));
  }

  ngOnDestroy(): void {
    this.meetupsListSubscription$.unsubscribe();
  }

  set meetupsList(meetups: IMeetup[]) {
    this._meetupsList = meetups;
  }
  get meetupsList(): IMeetup[] {
    return this._meetupsList;
  }

  set searchState(searchState: ISearch) {
    this._searchState = { ...searchState };
  }
  get searchState(): ISearch {
    return this._searchState;
  }

  toggleViewMeetupForm() {
    this.isHideMeetupForm = !this.isHideMeetupForm;
  }

  trackByItems(index: number, item: IMeetup): number {
    return item.id;
  }
}
