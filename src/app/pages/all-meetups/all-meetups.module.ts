import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMeetupsListComponent } from './all-meetups-list/all-meetups-list.component';
import { FormsModule } from '@angular/forms';
import { MeetupCardModule } from 'src/app/components/meetup-card/meetup-card.module';
import { FilterMeetupsModule } from 'src/app/pipes/filter-meetups.module';

@NgModule({
  declarations: [AllMeetupsListComponent],
  imports: [CommonModule, FormsModule, MeetupCardModule, FilterMeetupsModule],
  exports: [AllMeetupsListComponent],
})
export class AllMeetupsModule {}
