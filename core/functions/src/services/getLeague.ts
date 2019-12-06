import { firestore } from 'firebase-admin';

import { getPlayersInfo } from './getPlayersInfo';
import { getLeaderboard } from './getLeaderboard';
import { adaptPlayers } from '../adapters/adaptPlayers';
import { distributePlayers } from '../adapters/distributePlayers';

export const getLeague = async (db: firestore.Firestore) => {
  const playersInfo = await getPlayersInfo(db);
  const leaderboard = await getLeaderboard();
  
  const players = await adaptPlayers(leaderboard, playersInfo);
  const league = distributePlayers(players);

  return league;
};
