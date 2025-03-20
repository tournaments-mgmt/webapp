import { GameCode } from "./game";

export interface Tournament {
  id:  number;
  name: string;
  description: string;
  platform: Platform;
  type: string;
  state: TournamentState;
  gameCode: GameCode;
  date: {
    scheduled: {
      start: number;
      end: number;
    },
    real: {
      start: number;
      end: number;
    }
  }
}

export interface TournamentFee {
  name: string;
  uuid: string,
  state: TournamentFeeState
  player: {
    name: string;
    number: number;
  }
}

export enum TournamentFeeState {
  CONFIRMED = 'CONFIRMED',
  DRAFT = 'DRAFT',
}

export enum TournamentState {
  DRAFT = 'draft',
  SCHEDULED = 'scheduled',
  RUNNING = 'running',
  DONE = 'done',
  CANCELED = 'canceled'
}

export enum TournamentType {
  CONTEST = 'contest',
  BRACKETS = 'brackets',
  ROUNDROBIN = 'roundrobin',
}

export enum Platform {
  PLAYSTATION = 'playstation',
  XBOX = 'xbox',
  SWITCH = 'switch',
  PC = 'pc',
}


