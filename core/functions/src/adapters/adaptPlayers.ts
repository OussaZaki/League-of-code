import { AdventLeaderboard } from "../models/AdventLeaderboard";
import { PlayerInfo } from "../models/Player";

export const adaptPlayers = async (
  leaderboard: AdventLeaderboard,
  playersInfo: PlayerInfo[]
) => {
  const players = Object.values(leaderboard.members).map((member) => {
    const memberInfo = playersInfo.filter((player) => player.id === member.id);

    return {
      ...(!!memberInfo ? memberInfo[0] : {}),
      ...member,
      key: member.id,
    };
  });

  return players;
};
