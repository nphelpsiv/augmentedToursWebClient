import { Injectable } from '@angular/core';
import { Tour } from './tours/tour';
//import { TOURS } from './mock-tours';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of'
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Exhibit } from './exhibit/exhibit';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TourService {
  tour: Tour[]
  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }


  // getTours(): Observable<Tour[]> {
  //   //this.messageService.add('HeroService: fetched tours');
  //   return this.http.get<Tour[]>(this.toursUrl).pipe(catchError(this.handleError('getTours', [])));
  //   //return of (TOURS);
  // }
  /** GET tours from the server */
  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.toursUrl)
      .pipe(
        tap(tours => {this.log(`fetched tours`); console.log(tours); this.tour = tours}),
        catchError(this.handleError('getTours', [])),
      );
  }
  getExhibits(_id: string): Exhibit[] 
  {
    if(this.tour != null)
    {
      for (let singleTour of this.tour)
      {
        if(singleTour._id = _id)
        {
          return singleTour.exhibits
        }
        else
        {
           return null;
        }
      }
    }
    else{
      return null;
    }
    
 
  }

  /** GET tour by id. Will 404 if id not found */
  getTour(_id: string): Observable<Tour> {
    const url = `${this.toursUrl}${_id}`;
    return this.http.get<Tour>(url).pipe(
      tap(_ => this.log(`fetched tour _id=${_id}`)),
      catchError(this.handleError<Tour>(`getTour _id=${_id}`))
    );
  }
    /** PUT: update the tour on the server */
  updateTour (tour: Tour): Observable<any> {
    return this.http.put(this.toursUrl + tour.tourID, tour, httpOptions).pipe(
      tap(_ => this.log(`updated tour id=${tour.tourID}`)),
      catchError(this.handleError<any>('updateTour'))
    );
  }
  /** POST: add a new tour to the server */
  // addTour (tour: Tour): Observable<Tour> {
  //   return this.http.post<Tour>(this.toursUrl, tour, httpOptions).pipe(
  //     tap((tour: Tour) => this.log(`added tour w/ id=${tour._id}`)),
  //     catchError(this.handleError<Tour>('addTour'))
  //   );
  // }
  /** DELETE: delete the tour from the server */
  // deleteTour (tour: Tour | number): Observable<Tour> {
  //   const _id = typeof tour === 'number' ? tour : tour._id;
  //   const url = `${this.toursUrl}/${_id}`;

  //   return this.http.delete<Tour>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted tour id=${_id}`)),
  //     catchError(this.handleError<Tour>('deleteTour'))
  //   );
  // }
  /** DELETE: delete the exhibit from the server */
  // deleteExhibit (exhibit: Exhibit | number): Observable<Exhibit> {
  //   const id = typeof exhibit === 'number' ? exhibit : exhibit.id;
  //   const url = `${this.exhibitsUrl}/${id}`;

  //   return this.http.delete<Exhibit>(url, httpOptions).pipe(
  //     tap(_ => this.log(`deleted exhibit id=${id}`)),
  //     catchError(this.handleError<Exhibit>('deleteExhibit'))
  //   );
  // }
  /* GET tours whose name contains search term */
  searchTours(term: string): Observable<Tour[]> {
    if (!term.trim()) {
      // if not search term, return empty tour array.
      return of([]);
    }
    return this.http.get<Tour[]>(`api/tours/?name=${term}`).pipe(
      tap(_ => this.log(`found tours matching "${term}"`)),
      catchError(this.handleError<Tour[]>('searchTours', []))
    );
  }
  
  // getHero(id: number): Observable<Tour> {
  //   // Todo: send the message _after_ fetching the tour
  //   this.messageService.add(`TOurService: fetched tour id=${id}`);
  //   return of(TOURS.find(tour => tour.id === id));
  // }
  /** Log a TourService message with the MessageService */
  public log(message: string) {
    this.messageService.add('TourService: ' + message);
  }

  //private toursUrl = 'api/tours';  // URL to web api
  private toursUrl = 'http://ec2-34-238-135-141.compute-1.amazonaws.com:8080/tours/'
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}