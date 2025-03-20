export interface Game {
  name: string;
  code: GameCode;
  pegi?: PEGI,
  background: string;
}

export enum GameCode {
  TEKKEN = 'tekken',
  FIFA = 'fifa',
  MINECRAFT = 'minecraft',
  LOL = 'lol',
  FORTNITE = 'fortnite',
}

export enum PEGI {
  PEGI3 = 'pegi3',
  PEGI7 = 'pegi7',
  PEGI12 = 'pegi12',
  PEGI16 = 'pegi16',
  PEGI18 = 'pegi18',
}
