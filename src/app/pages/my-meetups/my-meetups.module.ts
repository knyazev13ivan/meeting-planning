import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { MyMeetupsListComponent } from './my-meetups-list/my-meetups-list.component';
import { MeetupCardComponent } from '../../components/meetup-card/meetup-card.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { MeetupFormComponent } from 'src/app/components/meetup-form/meetup-form.component';



@NgModule({
  declarations: [
    MyMeetupsListComponent,
    MeetupCardComponent,
    SearchComponent,
    MeetupFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MyMeetupsListComponent
  ]
})
export class MyMeetupsModule { }
