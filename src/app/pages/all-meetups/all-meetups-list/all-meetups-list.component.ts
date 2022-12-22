import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, Observable, from, map } from 'rxjs';
import {
  ICreatedMeetupDto,
  IMeetup,
  ISearch,
  ISubscribeMeetupDto,
  IUser,
} from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-all-meetups-list',
  templateUrl: './all-meetups-list.component.html',
  styleUrls: ['./all-meetups-list.component.scss'],
})
export class AllMeetupsListComponent implements OnInit, DoCheck, OnDestroy {
  meetupsList!: IMeetup[];
  idUser: number | null = null;
  meetupsList$!: Subscription;
  isHideMeetupForm: boolean = true;
  _searchState: ISearch = {
    searchValue: '',
    type: 'title',
  };

  constructor(
    private meetupsService: MeetupsService,
    private authService: AuthService
  ) {
    this.idUser = authService.user.id;
  }

  ngOnInit(): void {
    this.meetupsList$ = this.meetupsService
      .getMeetups()
      .subscribe((data) => (this.meetupsList = data));
  }

  ngDoCheck(): void {
    this.meetupsList$ = this.meetupsService
      .getMeetups()
      .subscribe((data) => (this.meetupsList = data));
  }

  ngOnDestroy(): void {
    this.meetupsList$.unsubscribe();
  }

  set searchState(searchState: ISearch) {
    this._searchState = { ...searchState };
  }
  get searchState(): ISearch {
    return this._searchState;
  }

  createMeetup(meetup: ICreatedMeetupDto) {
    console.log('create?');

    this.meetupsService
      .createMeetup(meetup)
      .subscribe((meetup) => this.meetupsList.push(meetup));
  }

  subscribe(idMeetup: number) {
    this.meetupsService
      .subscribeUser({ idMeetup, idUser: this.idUser! })
      .subscribe((meetup) => console.log(meetup));
  }
  unSubscribe(idMeetup: number) {
    this.meetupsService
      .unsubscribeUser({ idMeetup, idUser: this.idUser! })
      .subscribe((meetup) => console.log(meetup));
  }

  toggleViewMeetupForm() {
    this.isHideMeetupForm = !this.isHideMeetupForm;
  }

  trackByItems(index: number, item: IMeetup): number {
    return item.id;
  }
}
