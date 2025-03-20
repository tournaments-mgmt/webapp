import {Injectable, signal, WritableSignal} from '@angular/core';
import {faker} from '@faker-js/faker';
import {from, map, Observable, of} from "rxjs";
import {
  Platform,
  Tournament,
  TournamentFee,
  TournamentFeeState,
  TournamentState,
  TournamentType
} from "@interfaces/tournament";
import {Storage} from "@ionic/storage-angular";
import {Player} from "@interfaces/player";
import {GameCode} from "@interfaces/game";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  tournamentFee = signal<TournamentFee[]>([]);

  public request = {
    auth: {
      login: (token: string) => this.login(token),
      logout: () => this.logout(),
    },
    user: {
      detail: () => this.getUserDetail(),
      player: {
        create: (name: string) => this.createPlayer(name),
        edit: (id: number, name: string) => this.editPlayer(id, name),
        delete: (id: number) => this.deletePlayer(id),
        list: () => this.getPlayers()
      }
    },
    tournament: {
      list: () => this.getTournaments(),
      fee: {
        list: () => this.getTournamentFeeList()
      }
    }
  }

  constructor(
    private storage: Storage
  ) {
  }

  private login(token: string): Observable<boolean> {
    return of(token)
      .pipe(
        map((res) => res === 'test')
      )
  }

  private logout() {
    return of(this.storage.remove('auth')).pipe(map(() => true))
  }

  private getUserDetail() {
    return from(this.storage.get('auth'))
      .pipe(
        map(() => ({
          email: faker.internet.email(),
        }))
      );
  }


  private getTournamentFeeList() {
    of(
      faker.helpers.multiple(() => ({
        name: faker.internet.username(),
        state: faker.helpers.arrayElement([TournamentFeeState.CONFIRMED, TournamentFeeState.DRAFT]),
        player: {
          name: faker.internet.username(),
          number: faker.number.int({min: 10000, max: 11999})
        },
        uuid: faker.string.uuid(),
      }), {count: 5})
    ).subscribe((res: TournamentFee[]) => this.tournamentFee.set(res));
  }

  private createPlayer(name: string): Observable<Player> {
    return of({
      id: faker.number.int(),
      uuid: faker.string.uuid(),
      name,
    });
  }

  private editPlayer(id: number, name: string) {
    return of({
      id: id,
      uuid: faker.string.uuid(),
      name,
    });
  }

  private getPlayers(): Observable<Player[]> {
    return of(
      faker.helpers.multiple(() => ({
        id: faker.number.int(),
        uuid: faker.string.uuid(),
        name: faker.internet.username()
      }), {count: faker.number.int({min: 0, max: 5})})
    );
  }

  private deletePlayer(id: number) {
    return of(true);
  }

  private getTournaments(): Observable<Tournament[]> {
    return of(
      faker.helpers.multiple(() => {
        const games = Object.keys(GameCode);
        const random = faker.number.int({min: 0, max: games.length-1});
        const gameCode = games[random] as GameCode;
        return {
          id: faker.number.int(),
          name: `Torneo ${gameCode}`,
          description: '',
          platform: Platform.PLAYSTATION,
          type: TournamentType.ROUNDROBIN,
          state: faker.helpers.arrayElement([TournamentState.RUNNING, TournamentState.SCHEDULED]),
          gameCode: gameCode,
          date: {
            scheduled: {
              start: 0,
              end: 0
            },
            real: {
              start: 0,
              end: 0
            }
          },
        }
      }, {count: faker.number.int({min: 3, max: 7})})
    );

    // return of(
    //   [
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
    // )
  }
}
