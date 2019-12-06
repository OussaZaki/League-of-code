import fetch from 'node-fetch';
import { AdventLeaderboard } from '../models/AdventLeaderboard';

const LEADERBOADR_URL =
  'https://adventofcode.com/2019/leaderboard/private/view/12900.json';
const SESSION_COOKIE =
  'session=53616c7465645f5f3ee08ea45f9c06776a8a74fb2752a296b5b0efad51c1128e83423fbbd7672ff206a2131cd9467844';

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
