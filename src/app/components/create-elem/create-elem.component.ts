import { Component, EventEmitter, Output } from '@angular/core';
import { ITodoItem } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-create-elem',
  templateUrl: './create-elem.component.html',
  styleUrls: ['./create-elem.component.scss'],
})
export class CreateElemComponent {
  constructor() {}

  isCreateMode = false;

  todoItem: Pick<ITodoItem, 'title' | 'description' | 'status'> = {
    title: '',
    description: '',
    status: 'normal',
  };

  @Output()
  public handleClickCreate = new EventEmitter();

  createNewMeetapp() {
    console.log(this.todoItem);

    if (this.todoItem.title) {
      this.handleClickCreate.emit(this.todoItem);
      this.isCreateMode = !this.isCreateMode;
      this.todoItem.title = '';
      this.todoItem.description = '';
    }
  }
}
