import { Injectable } from '@angular/core';
import { Tour } from './tours/tour';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Exhibit } from './exhibit/exhibit';
import { User } from './user-login/user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TourService {
    constructor(
        private http: HttpClient) { }


    /** GET tours from the server */
    getTours(): Observable<Tour[]> {
        return this.http.get<Tour[]>(this.toursUrl)
            .pipe(
            catchError(this.handleError('getTours', [])),
        );
    }

    getUserTours(username: string): Observable<Tour[]> {
        return this.http.get<Tour[]>(this.userToursUrl + username)
            .pipe(
            catchError(this.handleError('getTours', [])),
        );
    }

    /** GET tour by id. Will 404 if id not found */
    getTour(_id: string): Observable<Tour> {
        const url = `${this.toursUrl}${_id}`;
        return this.http.get<Tour>(url).pipe(
            catchError(this.handleError<Tour>(`getTour _id=${_id}`))
        );
    }

    /** PUT: update the tour on the server */
    updateTour(tour: Tour): Observable<any> {
        return this.http.put(this.toursUrl + tour.tourID, tour, httpOptions).pipe(
            catchError(this.handleError<any>('updateTour'))
        );
    }

    userLogin(user: User) {
        return this.http.post(this.userLoginUrl, JSON.stringify(user),
            { headers: { 'Content-Type': 'application/json' } });
    }

    /* GET tours whose name contains search term */
    searchTours(term: string): Observable<Tour[]> {
        if (!term.trim()) {
            // if not search term, return empty tour array.
            return Observable.of([]);
        }
        return this.http.get<Tour[]>(this.toursUrl + `?name=${term}`).pipe(
            catchError(this.handleError<Tour[]>('searchTours', []))
        );
    }

    //private toursUrl = 'api/tours';  // URL to web api
    private toursUrl = 'http://ec2-34-238-135-141.compute-1.amazonaws.com:8080/tours/'
    private userLoginUrl = 'http://ec2-34-238-135-141.compute-1.amazonaws.com:8080/users/login'
    private userToursUrl = 'http://ec2-34-238-135-141.compute-1.amazonaws.com:8080/users/'

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Observable.of(result as T);
        };
    }
}
