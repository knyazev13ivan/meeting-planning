import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  filter,
  from,
  map,
  mergeMap,
  Observable,
  Subscription,
  tap,
} from 'rxjs';
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
export class MyMeetupsListComponent implements OnInit {
  _user!: IAuthUser;
  meetupForChange: any = null;
  currentMeetupId!: number;
  isHideMeetupForm: boolean = true;
  _searchState: ISearch = {
    searchValue: '',
    type: 'name',
  };

  constructor(
    private meetupsService: MeetupsService,
    private authService: AuthService
  ) {
    this.user = authService.user;
  }

  ngOnInit(): void {}

  getMeetups: Observable<IMeetup[]> = this.meetupsService.getMeetups();

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
    this.meetupsService.changeMeetup(meetup, id).subscribe();

    this.toggleViewMeetupForm();
  }

  createMeetup(meetup: ICreatedMeetupDto) {
    this.meetupsService.createMeetup(meetup).subscribe();
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
