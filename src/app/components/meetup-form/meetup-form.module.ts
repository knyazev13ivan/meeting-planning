import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupFormComponent } from './meetup-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MeetupFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MeetupFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MeetupFormModule {}
