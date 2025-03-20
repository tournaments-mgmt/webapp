import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {endpoints} from "@configs/endpoints";
import { ApiService } from '@services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isValid = signal<any | undefined>(undefined);
  public user = signal<any | undefined>(undefined);

  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService,
  ) {
  }

  public login(token: string) {
    this.isValid = this.apiService.request.login(token);
  }

  public getUser() {
    this.user = this.apiService.request.user.detail();
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
