import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {endpoints} from "@configs/endpoints";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getUser() {
    return this.user;
  }

  public createUser(data: any): Observable<any> {
    return this.httpClient.post<any>(endpoints.user.create, data)
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
