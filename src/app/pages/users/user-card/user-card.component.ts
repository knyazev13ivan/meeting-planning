import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ICreateUserDto, IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  _user!: IUser;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  @Input() set user(user: IUser) {
    this._user = user;
  }
  get user(): IUser {
    return this._user;
  }

  @Output()
  public handleClickDelete = new EventEmitter();
  @Output()
  public handleClickEdit = new EventEmitter();

  userForm!: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    fio: FormControl<string | null>;
  }>;

  initForm() {
    this.userForm = this.fb.group({
      email: [
        this.user?.email || '',
        [Validators.required, Validators.pattern(/^[ёЁА-яA-z\s\d]+$/)],
      ],
      password: [this.user?.password || '', [Validators.required]],
      fio: [
        this.user?.fio || '',
        [Validators.required, Validators.pattern(/^[ёЁА-яA-z\s\d)]+$/)],
      ],
    });
  }

  updateUser() {
    const user: ICreateUserDto = {
      email: this.userForm.value?.email || '',
      password: this.userForm.value?.password || '',
      fio: this.userForm.value?.fio || '',
    };

    this.handleClickEdit.emit({user, id: this.user.id});

    this.toogleEditMode();
  }

  deleteUser() {
    this.handleClickDelete.emit(this.user.id);
  }

  toogleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
}
