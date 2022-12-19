import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { filter, from, map, mergeMap, Subscription, tap } from 'rxjs';
import { IAuthUser, IMeetup, ISearch } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-my-meetups-list',
  templateUrl: './my-meetups-list.component.html',
  styleUrls: ['./my-meetups-list.component.scss'],
})
export class MyMeetupsListComponent implements OnInit, OnDestroy {
  _meetupsList!: IMeetup[];
  _user!: IAuthUser;
  meetupsListSubscription$!: Subscription;
  // isHideMeetupForm: boolean = false;
  isHideMeetupForm: boolean = true;
  _searchState: ISearch = {
    searchValue: '',
    type: 'title',
  };

  constructor(
    private meetupsService: MeetupsService,
    private authService: AuthService
  ) {
    this.meetupsList = meetupsService.meetupsList;
    this.user = authService.user;
  }

  ngOnInit(): void {
    this.meetupsListSubscription$ = this.meetupsService
      .getMeetups()
      .pipe(
        mergeMap((meetups: IMeetup[]) => from(meetups)),
        filter((meetup: IMeetup) => meetup.owner.id === this.user.id)
      )
      .subscribe((meetup) => {
        this.meetupsList.push(meetup);

        // console.log(this.meetupsList);
      });
  }

  ngOnDestroy(): void {
    this.meetupsListSubscription$.unsubscribe();
  }

  @Input() set user(user: IAuthUser) {
    this._user = user;
  }
  get user(): IAuthUser {
    return this._user;
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
