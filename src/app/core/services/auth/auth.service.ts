import {Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {ApiService} from '@services/api/api.service';
import {Player} from "@interfaces/player";
import {Tournament} from "@interfaces/tournament";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public user: BehaviorSubject<any> = new BehaviorSubject({});
  public players: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(
    private apiService: ApiService,
  ) {
  }

  public checkoutToken(token: string) {
   this.apiService.request.auth.login(token).subscribe((res) => this.isAuthenticated.next(res));
  }

  public logout() {
    this.apiService.request.auth.logout().subscribe(() => this.user.next(undefined));
  }

  public getUser() {
    this.apiService.request.user.detail().subscribe((res) => this.user.next(res));
  }

  public createUser() {

  }

  public createPlayer(name: string) {
    this.apiService.request.user.player.create(name).subscribe((res) => this.players.next([...this.players.getValue(), res]));
  }

  public editPlayer(id: number, name: string) {
    this.apiService.request.user.player.edit(id, name).subscribe((res: Player) => this.players.next(this.players.getValue().map((x: Player) => x.id === res.id ? {
        ...x,
        name: res.name
      } : x)
    ));
  }

  public getPlayerList() {
    return this.apiService.request.user.player.list().subscribe((res) => this.players.next(res));
  }

  public deletePlayer(id: number) {
    return this.apiService.request.user.player.delete(id).subscribe(() => this.players.next(this.players.getValue().filter((x: Player) => x.id !== id)));
  }

  public getPlayerForTournament(tournament: Tournament) {
    return this.apiService.request.user.player.list().subscribe((res) => this.players.next(res));
  }
}
