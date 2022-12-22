import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ICreatedMeetupDto, IMeetup, ISubscribeMeetupDto } from '../interfaces';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class MeetupsService {
  // meetupsList: IMeetup[] = [];
  meetupsList: BehaviorSubject<IMeetup[]> = new BehaviorSubject<IMeetup[]>([]);
  meetupsUrl: string = `${environment.backendOrigin}/meetup`;

  constructor(private http: HttpClient) {}

  getMeetups(): Observable<IMeetup[]> {
    this.http
      .get<IMeetup[]>(this.meetupsUrl)
      .subscribe((meetups) => this.meetupsList.next(meetups));
    return this.meetupsList;
  }

  createMeetup(meetup: ICreatedMeetupDto): Observable<IMeetup> {
    return this.http.post<IMeetup>(this.meetupsUrl, meetup);
  }

  subscribeUser({
    idMeetup,
    idUser,
  }: ISubscribeMeetupDto): Observable<IMeetup> {
    return this.http.put<IMeetup>(this.meetupsUrl, { idMeetup, idUser });
  }

  unsubscribeUser({
    idMeetup,
    idUser,
  }: ISubscribeMeetupDto): Observable<IMeetup> {
    return this.http.delete<IMeetup>(this.meetupsUrl, {
      body: { idMeetup, idUser },
    });
  }

  changeMeetup(meetup: ICreatedMeetupDto, id: number): Observable<IMeetup> {
    return this.http.put<IMeetup>(`${this.meetupsUrl}/${id}`, meetup);
  }

  deleteMeetup(id: string): Observable<IMeetup> {
    return this.http.delete<IMeetup>(this.meetupsUrl, {
      params: {
        id,
      },
    });
  }
}
