import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Game, GameCode} from "@interfaces/game";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games = new BehaviorSubject<Game[]>([
    {
      name: 'TEKKEN 8',
      code: GameCode.TEKKEN,
      background: 'assets/games/cover/tekken.png',
    },
    {
      name: 'FIFA 25',
      code: GameCode.FIFA,
      background: 'assets/games/cover/fifa.png',
    },
    {
      name: 'League of Legends',
      code: GameCode.LOL,
      background: 'assets/games/cover/lol.png',
    },
    {
      name: 'Fortnite',
      code: GameCode.FORTNITE,
      background: 'assets/games/cover/fortnite.png',
    },
    {
      name: 'Minecraft',
      code: GameCode.MINECRAFT,
      background: 'assets/games/cover/minecraft.png',
    },
  ]);

  constructor() {
  }

  getGames(): Game[] {
    return this.games.getValue();
  }

  getGameByCode(code: GameCode): Game | null {
    return this.games.getValue().find((x: Game) => code.toLowerCase() == x.code) || null;
  }
}
