import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMeetupsListComponent } from './all-meetups-list/all-meetups-list.component';
import { MeetupCardModule } from 'src/app/components/meetup-card/meetup-card.module';
import { FilterMeetupsModule } from 'src/app/pipes/filter-meetups.module';
import { MeetupFormModule } from 'src/app/components/meetup-form/meetup-form.module';
import { SearchModule } from 'src/app/components/search/search.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
  declarations: [AllMeetupsListComponent],
  imports: [
    CommonModule,
    MeetupCardModule,
    FilterMeetupsModule,
    MeetupFormModule,
    SearchModule,
    LoaderModule
  ],
  exports: [AllMeetupsListComponent],
})
export class AllMeetupsModule {}
