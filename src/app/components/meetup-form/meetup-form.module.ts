import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetupFormComponent } from './meetup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowErrorModule } from '../show-error/show-error.module';

@NgModule({
  declarations: [MeetupFormComponent],
  imports: [CommonModule, ReactiveFormsModule, ShowErrorModule],
  exports: [MeetupFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MeetupFormModule {}
