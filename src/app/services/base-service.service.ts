import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
    constructor(
        private http: HttpClient,
      ) { }

    get(url): Observable<any> {
        return this.http.get(url).pipe(catchError(this.handleError()));
    }

    post(url, data): Observable<any> {
        return this.http.post(url, data).pipe(catchError(this.handleError()));
    }

    put(url, data) {
        return this.http.put(url, data).pipe(catchError(this.handleError()));
    }

    delete(url, id) {
        return this.http.delete(url, id).pipe(catchError(this.handleError()));
    }

    patch(url, id?) {
        return this.http.patch(url, id).pipe(catchError(this.handleError()));
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            return throwError(error);
        };
    }
}
