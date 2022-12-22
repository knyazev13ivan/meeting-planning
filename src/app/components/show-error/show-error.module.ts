import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorComponent } from './show-error.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowErrorComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ShowErrorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShowErrorModule {}
