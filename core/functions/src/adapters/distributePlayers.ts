import { League, ConfigurableLeague, LeagueConfig } from '../models/League';
import { Player } from '../models/Player';

export const distributePlayers = (players: Player[]) => {
  const league = initLeague(players);

  const sorted_players = players.sort(comparePlayers);

  sorted_players.reduce(ranker, league);

  // @ts-ignore
  delete league.config;

  return league as League;
};

const ranker = (league: ConfigurableLeague, player: Player) => {
  if (
    player.local_score >=
    league.config.pointCap.master * league.config.maxPoints
  ) {
    if (league.master.length < league.config.divisionLimit.master)
      league.master.push(player);
    else league.diamond.push(player);
    return league;
  }

  if (
    player.local_score >=
    league.config.pointCap.diamond * league.config.maxPoints
  ) {
    league.diamond.push(player);
    return league;
  }

  if (
    player.local_score >=
    league.config.pointCap.gold * league.config.maxPoints
  ) {
    league.gold.push(player);
    return league;
  }

  if (player.local_score > 0) {
    league.silver.push(player);
    return league;
  }

  return league;
};

const comparePlayers = (p1: Player, p2: Player) => {
  return p2.local_score - p1.local_score;
};

const getConfig = (players_count: number) =>
  ({
    pointCap: {
      master: 0.8,
      diamond: 0.6,
      gold: 0.2,
      silver: 0
    },
    divisionLimit: {
      master: 3
    },
    maxPoints: players_count * 50
  } as LeagueConfig);

const initLeague = (players: Player[]) =>
  ({
    master: [],
    diamond: [],
    gold: [],
    silver: [],
    config: getConfig(players.length)
  } as ConfigurableLeague);
