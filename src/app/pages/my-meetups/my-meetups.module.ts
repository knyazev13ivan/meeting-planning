import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyMeetupsListComponent } from './my-meetups-list/my-meetups-list.component';
import { MeetupCardModule } from 'src/app/components/meetup-card/meetup-card.module';
import { FilterMeetupsModule } from 'src/app/pipes/filter-meetups.module';
import { MeetupFormModule } from 'src/app/components/meetup-form/meetup-form.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
  declarations: [MyMeetupsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MeetupCardModule,
    FilterMeetupsModule,
    MeetupFormModule,
    SearchModule,
    LoaderModule,
  ],
  exports: [MyMeetupsListComponent],
})
export class MyMeetupsModule {}
