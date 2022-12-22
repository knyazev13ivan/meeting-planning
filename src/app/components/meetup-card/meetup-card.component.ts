import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IMeetup } from 'src/app/interfaces';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetupCardComponent {
  constructor() {}

  private _meetup!: IMeetup;
  isHideFullView: boolean = true;
  isActual: boolean = true;
  isSubscribed: boolean = false;

  @Input() set meetup(meetup: IMeetup) {
    this._meetup = meetup;
  }
  get meetup(): IMeetup {
    return this._meetup;
  }

  @Input() isMyMeetup: boolean = false;

  @Output()
  public handleClickSetMeetup = new EventEmitter();

  toogleSub() {
    this.isSubscribed = !this.isSubscribed;
  }

  changeView() {
    this.isHideFullView = !this.isHideFullView;
  }
}
