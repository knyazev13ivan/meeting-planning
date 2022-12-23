import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserCardComponent } from './user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
  declarations: [UsersListComponent, UserCardComponent],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule, LoaderModule],
  exports: [UsersListComponent],
})
export class UsersModule {}
