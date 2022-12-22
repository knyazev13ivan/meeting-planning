import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { filter, from, map, mergeMap, Subscription, tap } from 'rxjs';
import {
  IAuthUser,
  ICreatedMeetupDto,
  IMeetup,
  ISearch,
} from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-my-meetups-list',
  templateUrl: './my-meetups-list.component.html',
  styleUrls: ['./my-meetups-list.component.scss'],
})
export class MyMeetupsListComponent implements OnInit, OnDestroy {
  meetupsList: IMeetup[] = [];
  _user!: IAuthUser;
  meetupsList$!: Subscription;
  // meetupForChange: ICreatedMeetupDto | null = null;
  meetupForChange: any = null;
  currentMeetupId!: number;
  isHideMeetupForm: boolean = true;
  _searchState: ISearch = {
    searchValue: '',
    type: 'title',
  };

  constructor(
    private meetupsService: MeetupsService,
    private authService: AuthService
  ) {
    this.user = authService.user;
  }

  ngOnInit(): void {
    this.meetupsList$ = this.meetupsService
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
    this.meetupsList$.unsubscribe();
  }

  @Input() set user(user: IAuthUser) {
    this._user = user;
  }
  get user(): IAuthUser {
    return this._user;
  }

  setMeetupForChange(meetup: IMeetup) {
    this.meetupForChange = meetup;
    this.currentMeetupId = meetup.id;

    this.isHideMeetupForm = false;
  }

  changeMeetup(meetup: ICreatedMeetupDto, id: number) {
    console.log('meetup: ', meetup);
    this.meetupsService.changeMeetup(meetup, id).subscribe((meetup) => {
      console.log(meetup);
      this.meetupsList.push(meetup);
    });
  }

  createMeetup(meetup: ICreatedMeetupDto) {
    this.meetupsService
      .createMeetup(meetup)
      .subscribe((meetup) => console.log(meetup));
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
