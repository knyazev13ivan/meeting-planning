import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ICreatedMeetupDto, IMeetup, ISubscribeMeetupDto } from '../interfaces';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService {
  meetupsList: IMeetup[] = [];
  meetupsUrl: string = `${environment.backendOrigin}/meetup`;

  constructor(private http: HttpClient) {}

  getMeetups(): Observable<IMeetup[]> {
    return this.http
      .get<IMeetup[]>(this.meetupsUrl)
      .pipe(tap((meetups) => (this.meetupsList = meetups)));
  }

  createMeetup(meetup: ICreatedMeetupDto): void {
    this.http.post<ICreatedMeetupDto>(this.meetupsUrl, meetup);
  }

  subscribeUser({ idMeetup, idUser }: ISubscribeMeetupDto): void {
    this.http.put(this.meetupsUrl, { idMeetup, idUser });
  }

  unsubscribeUser({ idMeetup, idUser }: ISubscribeMeetupDto): void {
    this.http.delete(this.meetupsUrl, { body: { idMeetup, idUser } });
  }

  changeMeetup(meetup: ICreatedMeetupDto, id: number) {
    this.http.put(`${this.meetupsUrl}/${id}`, meetup);
  }

  deleteMeetup(id: string) {
    this.http.delete(this.meetupsUrl, {
      params: {
        id,
      },
    });
  }
}
