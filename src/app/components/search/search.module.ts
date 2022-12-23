import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SearchModule {}
