import { PlayerProfile } from "./player.model";

const PROFILE_URL = process.env.NODE_ENV === 'production'
  ? 'https://us-central1-oussa-io.cloudfunctions.net/league'
  : 'http://localhost:5000/oussa-io/us-central1/player';

export const postPlayer = async (player: PlayerProfile) => {
  const response = await fetch(PROFILE_URL, {
    method: 'POST',
    body: JSON.stringify(player),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(
      `Failed to get the leaderboard:\n${response.status} ${response.statusText}`
    );
  }

  return player;
};
