import { Component, EventEmitter, Output } from '@angular/core';
import { ICreatedMeetupDto } from 'src/app/interfaces';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.scss'],
})
export class MeetupFormComponent {
  constructor() {}

  isCreateMode = false;

  meetup: ICreatedMeetupDto = {
    name: '',
    description: '',
    time: '',
    duration: 0,
    location: '',
    target_audience: '',
    need_to_know: '',
    will_happen: '',
    reason_to_come: '',
  };

  @Output()
  public handleClickCreate = new EventEmitter();

  createNewMeetup() {
    this.handleClickCreate.emit(this.meetup);
    this.isCreateMode = !this.isCreateMode;
  }
}
