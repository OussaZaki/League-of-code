import fetch from 'node-fetch';
import { AdventLeaderboard } from '../models/AdventLeaderboard';

const LEADERBOADR_URL =
  'https://adventofcode.com/2020/leaderboard/private/view/12900.json';
const SESSION_COOKIE =
  'session=53616c7465645f5f06fe8773781fc09807b1711158f13d23df729a97a5225f5acf7245157ac69909afc7d76969e1f519';

export const getLeaderboard = async () => {
  const response = await fetch(LEADERBOADR_URL, {
    method: 'GET',
    headers: {
      cookie: SESSION_COOKIE,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(
      `Failed to get the leaderboard:\n${response.status} ${response.statusText}`
    );
  }

  return response.json() as Promise<AdventLeaderboard>;
};
