import { Injectable } from '@angular/core';
import { Event } from './event';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DateService {

  constructor(private http: HttpClient) { }
  dates(month: string) {
    if (parseInt(month, 10) <= 4) {

      return this.http.get<Event[]>(`assets/dates${month}.json`)
      .pipe(
        tap(result => console.log(`fetched dates via httpClient for month ${month}`)),
        catchError(this.handleError('getdates', []))
      );

    } else {

      return this.http.get<Event[]>(`assets/dates.json`)
      .pipe(
        tap(result => console.log(`fetched dates via httpClient for month ${month}`)),
        catchError(this.handleError('getdates', []))
      );
    }

  }

   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
