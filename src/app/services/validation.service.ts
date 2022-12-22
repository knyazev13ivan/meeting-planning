import { Injectable, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable, find, mergeMap, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ValidationService implements OnInit{
  isHas: boolean = false

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }

  validateName(currentName: string): Observable<ValidationErrors> {
    

    return new Observable<ValidationErrors>((observer) => {
      //  const user =
      this.http
      .get<any>(`${environment.backendOrigin}/meetup`)
      .pipe(
        mergeMap((result: any[]) => from(result)),
        find((meetup) => meetup.name === currentName)
      )
      .subscribe((name) => (this.isHas = name ? false : true));
      

      if (this.isHas) {
        observer.next({
          nameError: 'Пользователь с таким именем уже существует',
        });
        observer.complete();
      }

      const a: any = null;
      observer.next(a);
      observer.complete();
    });
  }
}
