import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getUser() {
    return  { email: "pinco@palla.it", nickname: "pincooopaaall", age: "35"};
  }

  public createUser(data: any): Observable<any> {
    return of(data)
      .pipe(
        tap((response) => {
          this.user = {...response};
        }),
        catchError(error => {
          return throwError(() => error);
        })
      );
  }
}
