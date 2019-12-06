const LEADERBOADR_URL = process.env.NODE_ENV === 'production'
  ? 'https://us-central1-oussa-io.cloudfunctions.net/league'
  : 'http://localhost:5000/oussa-io/us-central1/league';

export const getLeaderboard = async () => {
  const response = await fetch(LEADERBOADR_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to get the leaderboard:\n${response.status} ${response.statusText}`
    );
  }

  return response.json();
};
