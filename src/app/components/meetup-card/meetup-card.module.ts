import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupCardComponent } from './meetup-card.component';

@NgModule({
  declarations: [MeetupCardComponent],
  imports: [CommonModule],
  exports: [MeetupCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MeetupCardModule {}
