import { Component } from '@angular/core';
import { ITodoItem, TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todoList: ITodoItem[];
  filteredList: ITodoItem[];

  constructor(public todoListService: TodoListService) {
    this.todoList = this.filteredList = todoListService.todoList;
  }

  delete = this.todoListService.delete;

  add = this.todoListService.add;

  changeStatus = this.todoListService.changeStatus;

  getId = this.todoListService.getId;

  getFilteredList({
    searchValue,
    type,
  }: {
    searchValue: string;
    type: 'title' | 'description' | 'status';
  }) {
    this.filteredList = this.todoList
      .slice(0)
      .filter((item) => item[type].includes(searchValue));

      
    console.log('search data: ', searchValue, type, this.filteredList);
  }

  trackByItems(index: number, item: ITodoItem): number {
    return item.id;
  }
}
