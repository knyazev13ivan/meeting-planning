import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersListComponent, UserCardComponent],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule],
  exports: [UsersListComponent],
})
export class UsersModule {}
