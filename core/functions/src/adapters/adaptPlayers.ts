import { AdventLeaderboard } from '../models/AdventLeaderboard';
import { PlayerInfo } from '../models/Player';

export const adaptPlayers = async (
  leaderboard: AdventLeaderboard,
  playersInfo: PlayerInfo[]
) => {
  const players = Object.keys(leaderboard.members)
    .map(memberId => leaderboard.members[memberId])
    .map(member => ({
      ...getPlayerInfoById(playersInfo, member.id),
      ...member,
      key: member.id
    }));

  return players;
};

const getPlayerInfoById = (players: PlayerInfo[], id: string) => {
  const player = players.filter(p => p.id === id);
  if (player.length === 0) {
    return undefined;
  }

  return players[0];
};
