import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMeetupItem } from 'src/app/services/meetup-list.service';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.scss'],
})
export class MeetupCardComponent {
  constructor() {}

  isHideChangeStatuses = true;

  private _meetup!: IMeetupItem;

  @Input() set meetup(meetup: IMeetupItem) {
    this._meetup = meetup;
  }
  get meetup(): IMeetupItem {
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
