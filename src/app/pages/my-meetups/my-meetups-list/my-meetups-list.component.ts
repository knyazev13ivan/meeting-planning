import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { filter } from 'rxjs';
import { ISearch } from 'src/app/components/search/search.component';
import { IMeetup, IUser } from 'src/app/interfaces';
import {
  MeetupsListService,
} from 'src/app/services/meetup-list.service';

@Component({
  selector: 'app-my-meetups-list',
  templateUrl: './my-meetups-list.component.html',
  styleUrls: ['./my-meetups-list.component.scss'],
})
export class MyMeetupsListComponent implements OnInit{
  _meetupsList: IMeetup[];
  _searchState: ISearch = {
    searchValue: '',
    type: 'title',
  };
  _user: IUser | null = null

  constructor(public meetupsListService: MeetupsListService) {
    this._meetupsList = meetupsListService.meetupsList;
  }

  ngOnInit(): void {
    this.meetupsListService
      .getMeetups()
      .pipe(
        // filter((meetup: IMeetup ) => )
      )
      .subscribe((data) => (this.meetupsList = data));
  }

  // @Input() set user(user: IUser | null) {
  //   this._user = user;
  //   if (user !== null) this.roles = user.roles.map((role: IRole) => role.name);
  // }
  // get user(): IUser | null {
  //   return this._user;
  // }

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

  trackByItems(index: number, item: IMeetup): number {
    return item.id;
  }
}
