import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { ICreatedMeetupDto, IMeetup, ISearch } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-all-meetups-list',
  templateUrl: './all-meetups-list.component.html',
  styleUrls: ['./all-meetups-list.component.scss'],
})
export class AllMeetupsListComponent implements OnInit {
  meetupsList!: IMeetup[];
  idUser: number | null = null;
  isHideMeetupForm: boolean = true;
  _searchState: ISearch = {
    searchValue: '',
    type: 'name',
  };

  constructor(
    private meetupsService: MeetupsService,
    private authService: AuthService
  ) {
    this.idUser = authService.user.id;
  }

  ngOnInit(): void {}

  getMeetups: Observable<IMeetup[]> = this.meetupsService.getMeetups();

  set searchState(searchState: ISearch) {
    this._searchState = { ...searchState };
  }
  get searchState(): ISearch {
    return this._searchState;
  }

  createMeetup(meetup: ICreatedMeetupDto) {
    this.meetupsService.createMeetup(meetup).subscribe();
    // .subscribe((meetup) => this.meetupsList.push(meetup));

    this.toggleViewMeetupForm();
  }

  subscribe(idMeetup: number) {
    this.meetupsService
      .subscribeUser({ idMeetup, idUser: this.idUser! })
      .subscribe();
  }
  unSubscribe(idMeetup: number) {
    this.meetupsService
      .unsubscribeUser({ idMeetup, idUser: this.idUser! })
      .subscribe();

    // this.getMeetups();
  }

  toggleViewMeetupForm() {
    this.isHideMeetupForm = !this.isHideMeetupForm;
  }

  trackByItems(index: number, item: IMeetup): number {
    return item.id;
  }
}
