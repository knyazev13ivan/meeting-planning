import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodoItem } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  constructor() {}

  isHideChangeStatuses = true;

  private _todoItem!: ITodoItem;

  @Input() set todoItem(todoItem: ITodoItem) {
    this._todoItem = todoItem;
  }
  get todoItem(): ITodoItem {
    return this._todoItem;
  }

  @Output()
  public handleClickDelete = new EventEmitter();

  @Output()
  public handleClickChangeStatus = new EventEmitter();

  changeStatus(id: number, status: string) {
    this.handleClickChangeStatus.emit({ id, status });

    this.isHideChangeStatuses = !this.isHideChangeStatuses;
  }
}
