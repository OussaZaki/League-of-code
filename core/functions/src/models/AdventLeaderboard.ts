import { AdventOfCodePlayer } from './Player';

export type AdventLeaderboard = {
  owner_id: string;
  members: Record<string, AdventOfCodePlayer>;
  event: string;
};
