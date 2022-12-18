import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMeetupsListComponent } from './all-meetups-list/all-meetups-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllMeetupsListComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [AllMeetupsListComponent]
})
export class AllMeetupsModule {}
