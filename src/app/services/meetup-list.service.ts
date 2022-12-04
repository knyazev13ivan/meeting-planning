import { Injectable } from '@angular/core';

export interface IMeetupItem {
  id: number;
  title: string;
  description: string;
  status: 'normal' | 'important' | 'completed';
}

@Injectable({
  providedIn: 'root',
})
export class MeetupsListService {
  meetupsList: IMeetupItem[] = [
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
  
  filteredList = this.meetupsList;

  constructor() {}

  delete(id: number): void {
    this.filteredList = this.filteredList.filter((item) => item.id !== id);
  }

  add(item: Pick<IMeetupItem, 'title' | 'description' | 'status'>): void {
    this.filteredList.push({ id: this.getId(), ...item });
  }

  changeStatus({ id, status }: Pick<IMeetupItem, 'id' | 'status'>): void {
    const item = this.filteredList.find((item) => item.id === id);

    if (item) item.status = status;
  }

  getFilteredList({
    searchValue,
    type,
  }: {
    searchValue: string;
    type: 'title' | 'description' | 'status';
  }) {
    
    this.filteredList = this.meetupsList
    .slice(0)
    .filter((item) => item[type].includes(searchValue));
  }

  getId() {
    return this.meetupsList[this.meetupsList.length - 1].id + 1;
  }
}