import { Player } from './Player';

export type League = {
  master: Player[];
  diamond: Player[];
  gold: Player[];
  silver: Player[];
};

export type LeagueConfig = {
  pointCap: {
    [P in keyof League]: number;
  };
  divisionLimit: {
    [P in keyof League]: number;
  };
  maxPoints: number;
};

export type ConfigurableLeague = League & {
  config: LeagueConfig;
};
