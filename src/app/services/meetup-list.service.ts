import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

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
  meetupsList: IMeetupItem[] = [];
  meetupsUrl = '../../assets/meetups-list.json';

  constructor(private http: HttpClient) {}

  getMeetups(): Observable<IMeetupItem[]> {
    return this.http
      .get<IMeetupItem[]>(this.meetupsUrl)
      .pipe(tap((meetups) => (this.meetupsList = meetups)));
  }

  delete(id: number): void {
    this.meetupsList = this.meetupsList.filter((item) => item.id !== id);
  }

  // add(
  //   item: Pick<IMeetupItem, 'title' | 'description' | 'status'>
  // ): Observable<IMeetupItem> {
  //   return this.http
  //     .post<IMeetupItem>(this.meetupsUrl, { id: this.getId(), ...item })
  //     .pipe(
  //       tap((meetup) => {
  //         console.log(meetup);
  //         console.log(this.meetupsList);
          
  //         this.meetupsList.push(meetup);
  //       })
  //     );
  // }

  add(item: Pick<IMeetupItem, 'title' | 'description' | 'status'>): void {
    this.meetupsList.push({ id: this.getId(), ...item });
  }

  changeStatus({ id, status }: Pick<IMeetupItem, 'id' | 'status'>): void {
    const item = this.meetupsList.find((item) => item.id === id);

    if (item) item.status = status;
  }

  getId() {
    return this.meetupsList[this.meetupsList.length - 1].id + 1;
  }
}
