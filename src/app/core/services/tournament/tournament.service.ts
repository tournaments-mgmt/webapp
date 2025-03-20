import {Injectable} from '@angular/core';
import {Platform, Tournament, TournamentState, TournamentType} from "@interfaces/tournament";
import {BehaviorSubject, of} from "rxjs";
import {GameCode} from "@interfaces/game";
import {ApiService} from "@services/api/api.service";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  public tournaments = new BehaviorSubject<Tournament[]>([]);

  constructor(
    private apiService: ApiService
  ) {
  }

  getTournaments(): void{
    this.apiService.request.tournament.list().subscribe(tournaments => this.tournaments.next(tournaments));
  }

  // private _getData() {
  //   const _tournaments: Tournament[] = [
  //     {
  //       id: 1,
  //       name: 'Torneo FORTNITE',
  //       description: '',
  //       platform: Platform.PLAYSTATION,
  //       type: TournamentType.ROUNDROBIN,
  //       state: TournamentState.RUNNING,
  //       gameCode: GameCode.FORTNITE,
  //       date: {
  //         scheduled: {
  //           start: 0,
  //           end: 0
  //         },
  //         real: {
  //           start: 0,
  //           end: 0
  //         }
  //       },
  //     },
  //     {
  //       id: 1,
  //       name: 'Torneo FIFA 25',
  //       description: '',
  //       platform: Platform.PLAYSTATION,
  //       type: TournamentType.ROUNDROBIN,
  //       state: TournamentState.SCHEDULED,
  //       gameCode: GameCode.FIFA,
  //       date: {
  //         scheduled: {
  //           start: 0,
  //           end: 0
  //         },
  //         real: {
  //           start: 0,
  //           end: 0
  //         }
  //       },
  //     }]
  //   const t$ = of(_tournaments).subscribe(tournament => this.tournaments.next(tournament));
  //   t$.unsubscribe();
  // }
}
