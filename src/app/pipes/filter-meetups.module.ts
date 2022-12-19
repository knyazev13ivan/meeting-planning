import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMeetupsPipe } from './filter-meetups.pipe';



@NgModule({
  declarations: [FilterMeetupsPipe],
  imports: [
    CommonModule
  ],
  exports: [FilterMeetupsPipe],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FilterMeetupsModule { }
