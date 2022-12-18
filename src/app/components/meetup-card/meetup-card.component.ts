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

  isHideChangeStatuses = true;

  private _meetup!: IMeetup;

  @Input() set meetup(meetup: IMeetup) {
    this._meetup = meetup;
  }
  get meetup(): IMeetup {
    return this._meetup;
  }

  @Output()
  public handleClickDelete = new EventEmitter();

  @Output()
  public handleClickChangeStatus = new EventEmitter();

  changeStatus(id: number, status: string) {
    this.handleClickChangeStatus.emit({ id, status });

    this.isHideChangeStatuses = !this.isHideChangeStatuses;
  }
}
