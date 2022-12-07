import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [AuthFormComponent],
})
export class AuthModule {}
