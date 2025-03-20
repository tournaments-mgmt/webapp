import {Tournament} from "@interfaces/tournament";
import {Player} from "@interfaces/player";

export interface Entrant {
  id: number;
  tournament: Tournament;
  player: Player
  state: EntrantState
}

export enum EntrantState {
  REGISTERED = 'registered',
  CONFIRMED = 'confirmed',
  BANNED = 'banned'
}
