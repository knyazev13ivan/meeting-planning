import { Component, EventEmitter, Output } from '@angular/core';
import { IMeetupItem } from 'src/app/services/meetup-list.service';

@Component({
  selector: 'app-meetup-form',
  templateUrl: './meetup-form.component.html',
  styleUrls: ['./meetup-form.component.scss']
})
export class MeetupFormComponent {
  constructor() {}

  isCreateMode = false;

  meetup: Pick<IMeetupItem, 'title' | 'description' | 'status'> = {
    title: '',
    description: '',
    status: 'normal',
  };

  @Output()
  public handleClickCreate = new EventEmitter();

  createNewMeetup() {
    if (this.meetup.title) {
      this.handleClickCreate.emit(this.meetup);
      this.isCreateMode = !this.isCreateMode;
      this.meetup.title = '';
      this.meetup.description = '';
    }
  }
}
