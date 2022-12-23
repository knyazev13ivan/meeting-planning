import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICreateUserDto, IUser } from 'src/app/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  _usersList: IUser[] = [];
  usersList$!: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersList$ = this.usersService
      .getUsers()
      .subscribe((users) => (this.usersList = users));
  }
  ngOnDestroy(): void {
    this.usersList$.unsubscribe();
  }

  set usersList(usersList: IUser[]) {
    this._usersList = usersList;
  }
  get usersList(): IUser[] {
    return this._usersList;
  }

  updateUser({ user, id }: { user: ICreateUserDto; id: number }) {
    this.usersService
      .updateUser(user, id)
      .subscribe((data) => console.log(data));
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe(console.log);
  }
}
