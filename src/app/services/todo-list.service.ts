import { Injectable } from '@angular/core';

export interface ITodoItem {
  id: number;
  title: string;
  description: string;
  status: 'normal' | 'important' | 'completed';
}

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: ITodoItem[] = [
    {
      id: 0,
      title: 'Обычный митап',
      description:
        'Не имеет особой важности. Имеет очень длинное описание, которое лишено смысла, но нужно для наполнения контентом данного блока информаций о митапе.',
      status: 'normal',
    },
    {
      id: 1,
      title: 'Очень важный митап',
      description:
        'Крайне важный митап. Имеет очень длинное описание, которое лишено смысла, но нужно для наполнения контентом данного блока информаций о митапе.',
      status: 'important',
    },
    {
      id: 2,
      title: 'Митап, который уже завершился',
      description:
        'Митап прошел. Имеет очень длинное описание, которое лишено смысла, но нужно для наполнения контентом данного блока информаций о митапе.',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Еще один митап',
      description:
        'Нужно больше митапов. Имеет очень длинное описание, которое лишено смысла, но нужно для наполнения контентом данного блока информаций о митапе.',
      status: 'normal',
    },
  ];

  constructor() {}

  delete(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }

  add(item: ITodoItem): void {
    this.todoList.push(item);
  }

  changeStatus({ id, status }: Pick<ITodoItem, 'id' | 'status'>): void {
    const item = this.todoList.find((item) => item.id === id);

    if (item) item.status = status;
  }
}
