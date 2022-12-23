import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ICreateUserDto, IUser } from 'src/app/interfaces';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  _usersList: IUser[] = [];
  usersList$!: Subscription;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  usersList: Observable<IUser[]> = this.usersService.getUsers()

  updateUser({ user, id }: { user: ICreateUserDto; id: number }) {
    this.usersService
      .updateUser(user, id)
      .subscribe();
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id).subscribe(console.log);
  }
}
