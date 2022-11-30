import { Component, Input } from '@angular/core';
import { ITodoItem } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  constructor() {}

  @Input() todoItem!: ITodoItem;
  // @Input() fromTodoListMetods!: Function;
}
